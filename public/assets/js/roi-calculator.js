(function () {
  "use strict";
  const limits = {
    team: { min: 1, max: 100000, integer: true },
    hours: { min: 0.1, max: 168 },
    rate: { min: 0.01, max: 1000000 },
    monthly: { min: 0, max: 1000000000 },
    setup: { min: 0, max: 1000000000 },
    months: { min: 1, max: 120, integer: true }
  };
  const fields = Object.keys(limits);
  function bounded(value, rule) {
    if (value === "" || value === null || value === undefined || typeof value === "boolean") return null;
    if (typeof value === "string" && !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(value.trim())) return null;
    const n = Number(value);
    return Number.isFinite(n) && n >= rule.min && n <= rule.max &&
      (!rule.integer || Number.isInteger(n)) ? n : null;
  }
  function calculate(input) {
    if (!input) return null;
    const v = {};
    for (const key of fields) {
      v[key] = bounded(input[key], limits[key]);
      if (v[key] === null) return null;
    }
    const recoveredHours = v.team * v.hours * (52 / 12);
    const grossMonthly = recoveredHours * v.rate;
    const totalCost = v.setup + v.monthly * v.months;
    const netValue = grossMonthly * v.months - totalCost;
    const monthlyNet = grossMonthly - v.monthly;
    let roiPercent = totalCost > 0 ? (netValue / totalCost) * 100 : null;
    let paybackMonths = monthlyNet > 0 ? v.setup / monthlyNet : null;
    if (![recoveredHours, grossMonthly, totalCost, netValue, monthlyNet].every(Number.isFinite)) return null;
    if (roiPercent !== null && !Number.isFinite(roiPercent)) roiPercent = null;
    if (paybackMonths !== null && !Number.isFinite(paybackMonths)) paybackMonths = null;
    return { recoveredHours, grossMonthly, totalCost, netValue, roiPercent, paybackMonths };
  }
  // Sensitivity multipliers are illustrative gross capacity value factors, not forecasts.
  const sensitivityFactors = Object.freeze([0.5, 1, 1.25]);
  function compareScenarios(input) {
    const baseline = calculate(input);
    if (!baseline) return null;
    const months = Number(input.months);
    const monthly = Number(input.monthly);
    const setup = Number(input.setup);
    const comparisons = sensitivityFactors.map(factor => {
      const grossMonthly = baseline.grossMonthly * factor;
      const netValue = grossMonthly * months - baseline.totalCost;
      const monthlyNet = grossMonthly - monthly;
      let roiPercent = baseline.totalCost > 0 ? netValue / baseline.totalCost * 100 : null;
      let paybackMonths = monthlyNet > 0 ? setup / monthlyNet : null;
      if (![grossMonthly, netValue, monthlyNet].every(Number.isFinite)) return null;
      if (roiPercent !== null && !Number.isFinite(roiPercent)) roiPercent = null;
      if (paybackMonths !== null && !Number.isFinite(paybackMonths)) paybackMonths = null;
      return { factor, grossMonthly, totalCost: baseline.totalCost, netValue, roiPercent, paybackMonths };
    });
    return comparisons.every(Boolean) ? comparisons : null;
  }
  // No network calls, URL parameters or persistent storage: users explicitly opt to copy.
  function formatScenarioSummary(input, result, options) {
    if (!input || !result || !options || !Array.isArray(options.fieldLabels) ||
        !Array.isArray(options.metricLabels) || options.fieldLabels.length !== 6 ||
        options.metricLabels.length !== 6 || !["USD", "BRL", "EUR"].includes(options.currency)) return null;
    const number = new Intl.NumberFormat(options.locale || "en", { maximumFractionDigits: 2 });
    const money = new Intl.NumberFormat(options.locale || "en", { style: "currency", currency: options.currency, maximumFractionDigits: 2 });
    const inputLines = fields.map((key, i) =>
      options.fieldLabels[i] + ": " + (["rate", "monthly", "setup"].includes(key) ?
        money.format(Number(input[key])) : number.format(Number(input[key]))));
    const payback = result.paybackMonths;
    const metrics = [
      number.format(result.recoveredHours),
      money.format(result.grossMonthly),
      money.format(result.totalCost),
      money.format(result.netValue),
      result.roiPercent === null ? options.roiNa : number.format(result.roiPercent) + "%",
      payback === null ? options.paybackNa :
        number.format(payback) + " " + options.monthsUnit +
        (payback > Number(input.months) ? " (" + options.paybackBeyond + ")" : "")
    ];
    const comparisonLines = Array.isArray(options.comparisonLines) && options.comparisonLines.length === 3 &&
      options.comparisonLines.every(line => typeof line === "string")
      ? ["", options.comparisonTitle || "", ...options.comparisonLines] : [];
    return [options.title, ...inputLines, options.currencyLabel + ": " + options.currency,
      "", ...options.metricLabels.map((label, i) => label + ": " + metrics[i]),
      ...comparisonLines, "", options.disclaimer].join("\n");
  }
  if (typeof module !== "undefined" && module.exports) module.exports = { calculate, formatScenarioSummary, compareScenarios };
  if (typeof document === "undefined") return;
  function init() {
    const form = document.getElementById("roiForm");
    const results = document.getElementById("roiResults");
    const status = document.getElementById("roiStatus");
    if (!form || !results || !status) return;
    const locale = document.documentElement.lang || "en";
    const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
    const summary = document.getElementById("roiSummary");
    const copyButton = document.getElementById("roiCopySummary");
    const copyStatus = document.getElementById("roiCopyStatus");
    const metricIds = ["roiHours", "roiGross", "roiCosts", "roiNet", "roiPercent", "roiPayback"];
    function update() {
      const input = {};
      let firstInvalid = null;
      let missing = false;
      for (const key of fields) {
        const element = form.elements.namedItem(key);
        element.removeAttribute("aria-invalid");
        element.removeAttribute("aria-describedby");
        input[key] = element.value;
        if (element.value === "" && !element.validity.badInput) {
          missing = true;
        } else if (bounded(element.value, limits[key]) === null) {
          element.setAttribute("aria-invalid", "true");
          element.setAttribute("aria-describedby", "roiStatus");
          if (!firstInvalid) firstInvalid = { key, element };
        }
      }
      if (firstInvalid) {
        const { key, element } = firstInvalid;
        const rule = limits[key];
        const label = element.labels && element.labels[0] ? element.labels[0].textContent.trim() : key;
        status.textContent = form.dataset.errorPrefix + " " + label + " (" + number.format(rule.min) + "–" + number.format(rule.max) +
          (rule.integer ? "; " + form.dataset.errorInteger : "") + ").";
        results.hidden = true;
        return;
      }
      if (missing) {
        results.hidden = true;
        status.textContent = form.dataset.prompt;
        return;
      }
      const result = calculate(input);
      if (!result) {
        results.hidden = true;
        status.textContent = form.dataset.prompt;
        return;
      }
      const currency = form.elements.namedItem("currency").value;
      if (!["USD", "BRL", "EUR"].includes(currency)) {
        results.hidden = true;
        status.textContent = form.dataset.prompt;
        return;
      }
      const money = new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 });
      const put = (id, value) => { document.getElementById(id).textContent = value; };
      put("roiHours", number.format(result.recoveredHours));
      put("roiGross", money.format(result.grossMonthly));
      put("roiCosts", money.format(result.totalCost));
      put("roiNet", money.format(result.netValue));
      put("roiPercent", result.roiPercent === null ? form.dataset.roiNa : number.format(result.roiPercent) + "%");
      const payback = result.paybackMonths;
      put("roiPayback", payback === null ? form.dataset.paybackNa :
        number.format(payback) + " " + form.dataset.monthsUnit +
        (payback > Number(input.months) ? " (" + form.dataset.paybackBeyond + ")" : ""));
      const comparisons = compareScenarios(input);
      const comparisonLines = [];
      if (comparisons) {
        const titles = ["roiCompareNetHeader", "roiCompareRoiHeader", "roiComparePaybackHeader"]
          .map(id => document.getElementById(id).textContent.trim());
        for (let index = 0; index < comparisons.length; index++) {
          const comparison = comparisons[index];
          const prefix = "roiCompare" + index;
          const netText = money.format(comparison.netValue);
          const roiText = comparison.roiPercent === null ? form.dataset.roiNa :
            number.format(comparison.roiPercent) + "%";
          const paybackText = comparison.paybackMonths === null ? form.dataset.paybackNa :
            number.format(comparison.paybackMonths) + " " + form.dataset.monthsUnit +
            (comparison.paybackMonths > Number(input.months) ? " (" + form.dataset.paybackBeyond + ")" : "");
          put(prefix + "Net", netText);
          put(prefix + "Roi", roiText);
          put(prefix + "Payback", paybackText);
          const rowName = document.getElementById(prefix + "Name").textContent.trim();
          comparisonLines.push(rowName + " | " + titles[0] + ": " + netText +
            " | " + titles[1] + ": " + roiText + " | " + titles[2] + ": " + paybackText);
        }
      }
      if (summary) {
        const labelFor = element => element && element.labels && element.labels[0] ?
          element.labels[0].textContent.trim() : "";
        const metricLabels = metricIds.map(id => {
          const output = document.getElementById(id);
          return output.previousElementSibling ? output.previousElementSibling.textContent.trim() : id;
        });
        summary.value = formatScenarioSummary(input, result, {
          locale, currency,
          title: results.dataset.summaryTitle, disclaimer: results.dataset.summaryDisclaimer,
          currencyLabel: labelFor(form.elements.namedItem("currency")),
          fieldLabels: fields.map(key => labelFor(form.elements.namedItem(key))),
          metricLabels,
          comparisonTitle: document.getElementById("roiComparisonTitle").textContent.trim(),
          comparisonLines,
          roiNa: form.dataset.roiNa, paybackNa: form.dataset.paybackNa,
          monthsUnit: form.dataset.monthsUnit, paybackBeyond: form.dataset.paybackBeyond
        }) || "";
        if (copyStatus) copyStatus.textContent = "";
      }
      results.hidden = false;
      status.textContent = form.dataset.ready;
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", (event) => event.preventDefault());
    if (copyButton && summary && copyStatus) {
      copyButton.addEventListener("click", async () => {
        if (results.hidden || !summary.value) return;
        if (typeof navigator !== "undefined" && navigator.clipboard &&
            typeof navigator.clipboard.writeText === "function") {
          try {
            await navigator.clipboard.writeText(summary.value);
            copyStatus.textContent = copyButton.dataset.copied;
            return;
          } catch (_error) {
            // Text stays available for manual copying if access was denied.
          }
        }
        summary.focus();
        summary.select();
        copyStatus.textContent = copyButton.dataset.manual;
      });
    }
    form.addEventListener("reset", () => {
      for (const key of fields) {
        const element = form.elements.namedItem(key);
        element.removeAttribute("aria-invalid");
        element.removeAttribute("aria-describedby");
      }
      results.hidden = true;
      if (summary) summary.value = "";
      if (copyStatus) copyStatus.textContent = "";
      status.textContent = form.dataset.prompt;
    });
    update();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
