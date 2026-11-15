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
  if (typeof module !== "undefined" && module.exports) module.exports = { calculate };
  if (typeof document === "undefined") return;
  function init() {
    const form = document.getElementById("roiForm");
    const results = document.getElementById("roiResults");
    const status = document.getElementById("roiStatus");
    if (!form || !results || !status) return;
    const locale = document.documentElement.lang || "en";
    const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
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
      results.hidden = false;
      status.textContent = form.dataset.ready;
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", (event) => event.preventDefault());
    form.addEventListener("reset", () => {
      for (const key of fields) {
        const element = form.elements.namedItem(key);
        element.removeAttribute("aria-invalid");
        element.removeAttribute("aria-describedby");
      }
      results.hidden = true;
      status.textContent = form.dataset.prompt;
    });
    update();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
