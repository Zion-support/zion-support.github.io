
type InsightResponse = {
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
};

function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  if (arr.length === 0) return 0;
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
  let current = baseMonthly * 0.92; // start slightly below base
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const drift = (seed() - 0.5) * 0.03; // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift));
    series.push({ label: months[date.getMonth()], value: Math.round(current) });
  }
  return series;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const client = new OpenAI({ apiKey });
  const sample = scored.length > 0 ? scored.map((s) => s.profile) : TALENT_PROFILES;
  const rates = sample.map((p) => p.hourlyRateUsd);
  const baseMedian = median(rates);
  const min = Math.min(...rates);
  const max = Math.max(...rates);

  // Adjustments
  // Confidence based on sample size and dispersion
  const sampleSize = rates.length;
  const dispersion = (max - min) / Math.max(1, baseMedian);
  const confidence = Math.max(0.2, Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2));
  // Trend series and regional comparison
  const trend = buildTrend(recommendedMonthly, `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`);

  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location));
  const regionalComparison = Object.entries(byRegion)
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8);

    trendMonthly: trend,
    regionalComparison,
    tags,
    gptRecommendation,
  };
