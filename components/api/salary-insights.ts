import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import OpenAI from 'openai';
type RequestBody = $2;
  skills: string[],
  region: string,
  experienceLevel: 'Junior' | 'Mid' | 'Senior' | 'Lead',
  remote: boolean,
  employmentType: 'contract' | 'freelance' | 'full-time'
},

type InsightResponse = $2;
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number, // 0..1
  trendMonthly: { label: string, value: number}[],
  regionalComparison: { region: string, medianHourlyUsd: number}[],
  tags: string[],
  gptRecommendation?: string
},

function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b),
  const mid = Math.floor($2);
  if (arr.length = $2;
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}

function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey($2);
    (acc[key] ||= []).push($2);
    return acc
  }, {} as Record<K, T[]>)
}

function extractCountry(location: string): string {
  const parts = $2;
  return parts[parts.length - 1] || 'Global'
}

function calculateSimilarityScore(targetSkills: string[], profile: TalentProfile): number {
  const set = $2;
  const overlap = $2;
  return overlap / Math.max(1, targetSkills.length)
}

function prng(seed: string): () => number {
  let h = $2;
  for (let i = 0, i < seed.length, i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619),
  return () => {
    h += h << 13, h ^= h >>> 7, h += h << 3, h ^= h >>> 17, h += h << 5,
    return (h >>> 0) / 4294967295
  }
}

function buildTrend(baseMonthly: number, seedKey: string): { label: string, value: number}[] {
  const months = $2;
  const now = new Date($2);
  const seed = prng($2);
  const series: { label: string, value: number}[] = [],
  let current = baseMonthly * 0.92, // start slightly below base
  for (let i = 11, i >= 0, i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1),
    const drift = (seed() - 0.5) * 0.03, // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift)),
    series.push({ label: months[date.getMonth()], value: Math.round(current) })
  }
  return series
}

async function maybeGetGptRecommendation(input: RequestBody, stats: { median: number, min: number, max: number, country: string}) {
  const apiKey = $2;
  if (!apiKey) return undefined,
  try {
    const client = new OpenAI($2);
    const skillsStr = input.skills.join($2);
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`,

    const completion = await client.chat.completions.create($2);
    return completion.choices?.[0]?.message?.content || undefined
  } catch {
    return undefined
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string}>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body: RequestBody = $2;
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } = body,

  const country = extractCountry($2);
  // Score and filter candidate profiles
  const scored = $2;
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice($2);
  const sample = $2;
  const rates = $2;
  const baseMedian = median($2);
  const min = Math.min($2);
  const max = Math.max($2);
  // Adjustments
  const expMultiplier = $2;
  const remoteMultiplier = $2;
  const typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15, // FT tends to lower hourly, contract/freelance higher

  const recommendedHourly = Math.round($2);
  const recommendedMonthly = Math.round($2);
  // Confidence based on sample size and dispersion
  const sampleSize = $2;
  const dispersion = (max - min) / Math.max($2);
  const confidence = Math.max(0.2, Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2)),

  // Trend series and regional comparison
  const trend = buildTrend(recommendedMonthly, `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`),

  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location)),
  const regionalComparison = Object.entries(byRegion)
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice($2);
  // Tags
  const scarceSkills = $2;
  const undersupplied = $2;
  const tags: string[] = [],
  if (remote) tags.push($2);
  if (undersupplied) tags.push($2);
  const gptRecommendation = await maybeGetGptRecommendation($2);
  const response: InsightResponse = $2;
    recommendedMonthlyUsd: recommendedMonthly,
    medianHourlyUsd: Math.round($2);
    minHourlyUsd: Math.round($2);
    maxHourlyUsd: Math.round($2);
    confidence: Number(confidence.toFixed(2)),
    trendMonthly: trend,
    regionalComparison,
    tags,
    gptRecommendation},

  return res.status(200).json(response)
}