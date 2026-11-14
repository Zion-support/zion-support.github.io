/* Local planning helpers. No network requests, storage, model calls or system changes. */
const read = (data, key, label, min = 0, max = 1e12, integer = false) => {
  const raw = data[key];
  if (raw === undefined || raw === null || String(raw).trim() === '') throw Error(`${label} is required.`);
  const value = Number(raw);
  if (!Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) {
    throw Error(`${label} must be ${integer ? 'a whole number' : 'a number'} between ${min} and ${max}.`);
  }
  return value;
};
const usd = value => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);
export const calculators = {
  'token-cost': data => {
    const requests = read(data, 'requests', 'Monthly requests', 0, 1e9, true);
    const input = read(data, 'inputTokens', 'Input tokens per request', 0, 1e9, true);
    const output = read(data, 'outputTokens', 'Output tokens per request', 0, 1e9, true);
    const inputRate = read(data, 'inputRate', 'Input price per million tokens', 0, 1e6);
    const outputRate = read(data, 'outputRate', 'Output price per million tokens', 0, 1e6);
    const buffer = read(data, 'buffer', 'Budget buffer (%)', 0, 100);
    const base = requests * (input * inputRate + output * outputRate) / 1e6;
    return {base, bufferCost: base * buffer / 100, total: base * (1 + buffer / 100)};
  },
  'cloud-waste': data => {
    const compute = read(data, 'compute', 'Monthly compute spend');
    const idle = read(data, 'idle', 'Potential idle compute (%)', 0, 100);
    const storage = read(data, 'storage', 'Monthly storage spend');
    const unused = read(data, 'unused', 'Potential unused storage (%)', 0, 100);
    const opportunity = compute * idle / 100 + storage * unused / 100;
    return {baseline: compute + storage, opportunity, remaining: compute + storage - opportunity};
  },
  'incident-cost': data => {
    const duration = read(data, 'duration', 'Downtime hours', 0, 87600);
    const revenue = read(data, 'revenue', 'Revenue per hour');
    const affected = read(data, 'affected', 'Revenue affected (%)', 0, 100);
    const engineering = read(data, 'engineerHours', 'Engineering hours', 0, 1e6) * read(data, 'engineerRate', 'Engineering hourly cost', 0, 1e6);
    const support = read(data, 'supportHours', 'Support hours', 0, 1e6) * read(data, 'supportRate', 'Support hourly cost', 0, 1e6);
    const revenueAtRisk = duration * revenue * affected / 100;
    return {revenueAtRisk, labor: engineering + support, total: revenueAtRisk + engineering + support};
  },
  'change-risk': data => {
    const factors = [['blast', .30], ['rollback', .25], ['validation', .20], ['dependencies', .15], ['load', .10]];
    const score = Math.round(factors.reduce((sum, [key, weight]) => sum + (read(data, key, key, 1, 5, true) - 1) / 4 * weight * 100, 0));
    return {score, tier: score < 30 ? 'Lower' : score < 60 ? 'Moderate' : 'Higher'};
  },
  'patch-window': data => {
    const window = read(data, 'window', 'Available window (minutes)', 0, 525600);
    const systems = read(data, 'systems', 'Number of systems', 1, 1e6, true);
    const parallel = read(data, 'parallel', 'Parallel slots', 1, 1e6, true);
    const perSystem = read(data, 'perSystem', 'Minutes per system', 0.1, 525600);
    const rollback = read(data, 'rollback', 'Rollback reserve (minutes)', 0, 525600);
    const buffer = read(data, 'buffer', 'Safety buffer (minutes)', 0, 525600);
    const batches = Math.ceil(systems / parallel), required = batches * perSystem + rollback + buffer;
    return {batches, required, margin: window - required, fits: required <= window};
  },
  'rfp-readiness': data => {
    const keys = ['scope', 'eligibility', 'commercial', 'certifications', 'security', 'references', 'delivery', 'support', 'legal', 'submission'];
    const missing = keys.filter(key => ![true, 'on', 'yes', 1].includes(data[key]));
    return {score: (keys.length - missing.length) * 10, checked: keys.length - missing.length, missing};
  },
};
export function describeResult(id, result) {
  switch (id) {
    case 'token-cost': return `Base monthly estimate: ${usd(result.base)}. Buffer: ${usd(result.bufferCost)}. Planning total: ${usd(result.total)}. Rates are your inputs, not live provider prices. Excludes taxes, caching, discounts and platform fees.`;
    case 'cloud-waste': return `Input baseline: ${usd(result.baseline)} per month. Scenario opportunity: ${usd(result.opportunity)}. Remaining scenario spend: ${usd(result.remaining)}. This is not a cloud scan or guaranteed saving.`;
    case 'incident-cost': return `Revenue at risk: ${usd(result.revenueAtRisk)}. Labor: ${usd(result.labor)}. Combined planning exposure: ${usd(result.total)}. Revenue at risk is not proof of lost revenue; avoid double-counting labor.`;
    case 'change-risk': return `Heuristic score: ${result.score}/100 — ${result.tier} review tier. This is a planning aid, not permission to release or a security assessment.`;
    case 'patch-window': return `${result.batches} sequential batch(es); estimated window: ${result.required.toFixed(1)} minutes. ${result.fits ? 'Fits the stated window' : 'Does not fit the stated window'}; ${Math.abs(result.margin).toFixed(1)} minutes ${result.margin >= 0 ? 'remaining' : 'over'}. Validate dependencies, staffing and blackout dates separately.`;
    case 'rfp-readiness': return `Evidence completeness: ${result.score}/100 (${result.checked}/10 confirmed). ${result.missing.length ? 'Still unconfirmed: ' + result.missing.join(', ') + '.' : 'All ten self-checks are confirmed.'} This is not a win probability, certification or legal review.`;
    default: throw Error('Unknown planning helper.');
  }
}
if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-zion-tool]').forEach(region => {
    const id = region.dataset.zionTool, run = region.querySelector('[data-run]');
    const output = region.querySelector('[data-output]'), error = region.querySelector('[data-error]');
    const inputs = [...region.querySelectorAll('[data-field]')];
    if (!calculators[id] || !run || !output || !error) return;
    run.disabled = false;
    region.addEventListener('input', () => {
      if (output.textContent) output.textContent = 'Inputs changed. Recalculate to refresh this estimate.';
      error.textContent = ''; error.hidden = true;
    });
    run.addEventListener('click', () => {
      error.textContent = ''; error.hidden = true; output.textContent = '';
      const invalid = inputs.find(input => !input.checkValidity());
      if (invalid) { invalid.reportValidity(); return; }
      try {
        const data = Object.fromEntries(inputs.map(input => [input.dataset.field, input.type === 'checkbox' ? input.checked : input.value]));
        output.textContent = describeResult(id, calculators[id](data)); output.focus();
      } catch (problem) {
        error.textContent = problem.message; error.hidden = false; error.focus();
      }
    });
  });
}
