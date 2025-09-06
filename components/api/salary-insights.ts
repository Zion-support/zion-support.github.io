
};

type InsightResponse = {
  recommendedHourlyUsd: number,
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number, // 0..1
  trendMonthly: { label: string, value: number }[],
  regionalComparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],

=======
  gptRecommendation?: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b),
  const mid = Math.floor(arr.length / 2),
  if (arr.length === 0) return 0,


function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey(item),
    (acc[key] ||= []).push(item),
    return acc
  }, {} as Record<K, T[]>)
}

function extractCountry(location: string): string {
  const parts = location.split().map((p) => p.trim()),
  return parts[parts.length - 1] || 'Global'
}

function calculateSimilarityScore(targetSkills: string[], profile: TalentProfile): number {
  const set = new Set(targetSkills.map((s) => s.toLowerCase())),
  const overlap = profile.skills.filter((s) => set.has(s.toLowerCase())).length,
  return overlap / Math.max(1, targetSkills.length)
}

function prng(seed: string): () => number {
  let h = 2166136261 >>> 0,
  for (let i = 0, i < seed.length, i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619),
  return () => {
    h += h << 13, h ^= h >>> 7, h += h << 3, h ^= h >>> 17, h += h << 5;
    return (h >>> 0) / 4294967295
  }
}

function buildTrend(baseMonthly: number, seedKey: string): { label: string, value: number }[] {
  const months = ['JanFebMarAprMayJunJulAug','SepOctNovDec'],
  const now = new Date(),
  const seed = prng(seedKey),
  const series: { label: string, value: number }[] = [],
  let current = baseMonthly * 0.92, // start slightly below base
  for (let i = 11, i >= 0, i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1),
    const drift = (seed() - 0.5) * 0.03, // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift)),
    series.push({ label: months[date.getMonth()], value: Math.round(current) })
  }
  return series,
}


=======
async function maybeGetGptRecommendation(input: RequestBody, stats: { median: number, min: number, max: number, country: string }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) return undefined,
  try {
    const client = new OpenAI({ apiKey }),

=======
    const skillsStr = input.skills.join(),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`,

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [

  } catch {
    return undefined
  }
}


=======
export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string }>) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' }),
  }


=======
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } = body,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const country = extractCountry(region || 'Global'),

  // Score and filter candidate profiles

=======
  const scored = TALENT_PROFILES.map((p) => ({
    profile: p,
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20),

  const sample = scored.length > 0 ? scored.map((s) => s.profile) : TALENT_PROFILES,
  const rates = sample.map((p) => p.hourlyRateUsd),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const baseMedian = median(rates),
  const min = Math.min(...rates),
  const max = Math.max(...rates),

  // Adjustments

  const remoteMultiplier = remote ? 1.1 : 1.0,
  const typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15, // FT tends to lower hourly, contract/freelance higher

  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier),
  const recommendedMonthly = Math.round(recommendedHourly * 160),

  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier),
  const recommendedMonthly = Math.round(recommendedHourly * 160),
  // Confidence based on sample size and dispersion
  const sampleSize = rates.length,
  const dispersion = (max - min) / Math.max(1, baseMedian),
  const confidence = Math.max(0.2, Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2)),

  // Trend series and regional comparison
  const trend = buildTrend(recommendedMonthly, `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`),

  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location)),
  const regionalComparison = Object.entries(byRegion)

=======
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8),

  // Tags

  const tags: string[] = [],
  if (remote) tags.push('Remote Premium'),
  if (undersupplied) tags.push('Undersupplied Skill'),

  const gptRecommendation = await maybeGetGptRecommendation(body, { median: baseMedian, min, max, country }),

  const response: InsightResponse = {
    recommendedHourlyUsd: recommendedHourly,
    recommendedMonthlyUsd: recommendedMonthly,
    medianHourlyUsd: Math.round(baseMedian),
    minHourlyUsd: Math.round(min),
    maxHourlyUsd: Math.round(max),
    confidence: Number(confidence.toFixed(2)),
    trendMonthly: trend,
    regionalComparison,
    tags;
    gptRecommendation},


=======
  return res.status(200).json(response)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
