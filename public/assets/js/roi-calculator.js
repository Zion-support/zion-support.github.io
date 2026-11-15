(function () {
  "use strict";
  function bounded(value, max) {
    if (value === "" || value === null || value === undefined) return null;
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 && n <= max ? n : null;
  }
  function calculate(input) {
    if (!input) return null;
    const team = bounded(input.team, 100000);
    const hours = bounded(input.hours, 168);
    const rate = bounded(input.rate, 1000000);
    const monthly = bounded(input.monthly, 1000000000);
    const setup = bounded(input.setup, 1000000000);
    const months = bounded(input.months, 120);
    if ([team, hours, rate, monthly, setup, months].some((n) => n === null) ||
        !Number.isInteger(team) || !Number.isInteger(months) ||
        team <= 0 || hours <= 0 || rate <= 0 || months <= 0) return null;
    const recoveredHours = team * hours * (52 / 12);
    const grossMonthly = recoveredHours * rate;
    const totalCost = setup + monthly * months;
    const netValue = grossMonthly * months - totalCost;
    const monthlyNet = grossMonthly - monthly;
    const roiPercent = totalCost > 0 ? (netValue / totalCost) * 100 : null;
    const paybackMonths = monthlyNet > 0 ? setup / monthlyNet : null;
    if (![recoveredHours, grossMonthly, totalCost, netValue].every(Number.isFinite)) return null;
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
    const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
    function update() {
      const input = {};
      for (const key of ["team", "hours", "rate", "monthly", "setup", "months"]) {
        input[key] = form.elements.namedItem(key).value;
      }
      const result = calculate(input);
      if (!result) {
        results.hidden = true;
        status.textContent = form.dataset.prompt;
        return;
      }
      const currency = form.elements.namedItem("currency").value;
      const money = new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 });
      const put = (id, value) => { document.getElementById(id).textContent = value; };
      put("roiHours", number.format(result.recoveredHours));
      put("roiGross", money.format(result.grossMonthly));
      put("roiCosts", money.format(result.totalCost));
      put("roiNet", money.format(result.netValue));
      put("roiPercent", result.roiPercent === null ? form.dataset.na : number.format(result.roiPercent) + "%");
      put("roiPayback", result.paybackMonths === null ? form.dataset.na :
        number.format(result.paybackMonths) + " " + form.dataset.monthsUnit);
      results.hidden = false;
      status.textContent = form.dataset.ready;
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", (event) => event.preventDefault());
    form.addEventListener("reset", () => { results.hidden = true; status.textContent = form.dataset.prompt; });
    update();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
