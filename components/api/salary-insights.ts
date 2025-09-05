<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { TALENT_PROFILES, TalentProfile } from '../../data/talent',
import OpenAI from 'openai',
type RequestBody = {
  roleTitle: string,
  skills: string[],
  region: string,
  experienceLevel: 'Junior' | 'Mid' | 'Senior' | 'Lead',
  remote: boolean,
  employmentType: 'contract' | 'freelance' | 'full-time'
},

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
  gptRecommendation?: string
},

function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b),
  const mid = Math.floor(arr.length / 2),
  if (arr.length === 0) return 0,
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}

function groupBy<T K extends string | number>(items: T[], getKey: (item: T) => K): Record<K T[]> {
  return items.reduce((acc, item) => {
    const key = getKey(item),
    (acc[key] ||= []).push(item),
    return acc
  }, {} as Record<K T[]>)
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
    h += h << 13, h ^= h >>> 7, h += h << 3, h ^= h >>> 17, h += h << 5,
    return (h >>> 0) / 4294967295
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

type RequestBody = {_roleTitle: string;
  skills: string[];
  region: string;
  experienceLevel: 'Junior' | 'Mid' | 'Senior' | 'Lead';
  remote: boolean;
  employmentType: 'contract' | 'freelance' | 'full-time';};

type InsightResponse = {_recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
  confidence: number; // 0..1
  trendMonthly: { label: string; value: number}[];
  regionalComparison: {_region: string; medianHourlyUsd: number}[];
  tags: string[];
  gptRecommendation?: string;
};

function median(_values: number[]): number {_const _arr = [...values].sort(_(a, _b) => a - b);
  const _mid = Math.floor(arr.length / 2);
  if (arr.length === 0) return 0;
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];}

function groupBy<T, K extends string | number>(_items: T[], _getKey: (item: T) => K): Record<K, T[]> {_return items.reduce(_(acc, _item) => {
    const _key = getKey(item);
    (acc[key] ||= []).push(item);
    return acc;}, {} as Record<K, T[]>);
}

function extractCountry(_location: string): string {_const _parts = location.split(', _').map(_(p) => p.trim());
  return parts[parts.length - 1] || 'Global';}

function calculateSimilarityScore(_targetSkills: string[], _profile: TalentProfile): number {_const _set = new Set(_targetSkills.map((s) => s.toLowerCase()));
  const _overlap = profile.skills.filter(_(s) => set.has(s.toLowerCase())).length;
  return overlap / Math.max(1, _targetSkills.length);}

function prng(_seed: string): () => number {_let _h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), _16777619);
  return () => {
    h += h << 13; h ^= h >>> 7; h += h << 3; h ^= h >>> 17; h += h << 5;
    return (h >>> 0) / 4294967295;};
}

function buildTrend(_baseMonthly: number, _seedKey: string): {_label: string; value: number}[] {_const _months = ['Jan', _'Feb', _'Mar', _'Apr', _'May', _'Jun', _'Jul', _'Aug', _'Sep', _'Oct', _'Nov', _'Dec'];
  const _now = new Date();
  const _seed = prng(seedKey);
  const series: { label: string; value: number}[] = [];
  let _current = baseMonthly * 0.92; // start slightly below base
  for (let i = 11; i >= 0; i--) {_const _date = new Date(now.getFullYear(), _now.getMonth() - i, _1);
    const _drift = (seed() - 0.5) * 0.03; // +/-3%
    current = Math.max(baseMonthly * 0.7, _current * (1 + drift));
    series.push({ label: months[date.getMonth()], _value: Math.round(current)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

<<<<<<< HEAD
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
  return series
}

async function maybeGetGptRecommendation(input: RequestBody, stats: { median: number, min: number, max: number, country: string }) {
  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) return undefined,
  try {
    const client = new OpenAI({ apiKey }),
    const skillsStr = input.skills.join(),
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`,
=======
async function maybeGetGptRecommendation(_input: RequestBody, _stats: {_median: number; min: number; max: number; country: string}) {_const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const _client = new OpenAI({ apiKey});
    const _skillsStr = input.skills.join(', ');
    const _prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${_input.roleTitle} with ${_skillsStr} in ${_input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a compensation analyst. Be specific and concise. Use USD.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.2,
<<<<<<< HEAD
      max_tokens: 300}),
    return completion.choices?.[0]?.message?.content || undefined
  } catch {
    return undefined
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string }>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body: RequestBody = req.body,
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } = body,

  const country = extractCountry(region || 'Global'),

  // Score and filter candidate profiles
  const scored = TALENT_PROFILES.map((p) => ({
    profile: p,
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20),

  const sample = scored.length > 0 ? scored.map((s) => s.profile) : TALENT_PROFILES,
  const rates = sample.map((p) => p.hourlyRateUsd),
  const baseMedian = median(rates),
  const min = Math.min(...rates),
  const max = Math.max(...rates),

  // Adjustments
  const expMultiplier = experienceLevel === 'Junior' ? 0.8 : experienceLevel === 'Mid' ? 1.0 : experienceLevel === 'Senior' ? 1.2 : 1.35,
  const remoteMultiplier = remote ? 1.1 : 1.0,
  const typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15, // FT tends to lower hourly, contract/freelance higher

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
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8),

  // Tags
  const scarceSkills = ['RAGLangChainVector DBsKubernetesAppSecSecurity'],
  const undersupplied = (skills || []).some((s) => scarceSkills.some((t) => s.toLowerCase().includes(t.toLowerCase()))),
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
    tags,
    gptRecommendation},
=======
      max_tokens: 300});
    return completion.choices?.[0]?.message?.content || undefined;
  } catch {_return undefined;}
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse<InsightResponse | {_error: string}>) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const body: RequestBody = req.body;
  const {_roleTitle, _skills, _region, _experienceLevel, _remote, _employmentType} = body;

  const _country = extractCountry(region || 'Global');

  // Score and filter candidate profiles
  const _scored = TALENT_PROFILES.map(_(p) => ({_profile: p, _score: calculateSimilarityScore(skills || [], _p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
    .filter(_(s) => s.score > 0)
    .sort(_(a, _b) => b.score - a.score)
    .slice(0, 20);

  const _sample = scored.length > 0 ? scored.map(_(s) => s.profile) : TALENT_PROFILES;
  const _rates = sample.map(_(p) => p.hourlyRateUsd);
  const _baseMedian = median(rates);
  const _min = Math.min(...rates);
  const _max = Math.max(...rates);

  // Adjustments
  const _expMultiplier = experienceLevel === 'Junior' ? 0.8 : experienceLevel === 'Mid' ? 1.0 : experienceLevel === 'Senior' ? 1.2 : 1.35;
  const _remoteMultiplier = remote ? 1.1 : 1.0;
  const _typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15; // FT tends to lower hourly; contract/freelance higher

  const _recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const _recommendedMonthly = Math.round(recommendedHourly * 160);

  // Confidence based on sample size and dispersion
  const _sampleSize = rates.length;
  const _dispersion = (max - min) / Math.max(1, baseMedian);
  const _confidence = Math.max(0.2, Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2));

  // Trend series and regional comparison
  const _trend = buildTrend(recommendedMonthly, `${_roleTitle}|${_skills?.join('|')}|${_region}|${_experienceLevel}`);

  const _byRegion = groupBy(_TALENT_PROFILES, _(p) => extractCountry(p.location));
  const _regionalComparison = Object.entries(byRegion)
    .map(_([r, _list]) => (_{_region: r, _medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd)))}))
    .sort(_(a, _b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8);

  // Tags
  const _scarceSkills = ['RAG', 'LangChain', 'Vector DBs', 'Kubernetes', 'AppSec', 'Security'];
  const _undersupplied = (skills || []).some(_(s) => scarceSkills.some(_(t) => s.toLowerCase().includes(t.toLowerCase())));
  const tags: string[] = [];
  if (remote) tags.push('Remote Premium');
  if (undersupplied) tags.push('Undersupplied Skill');

  const _gptRecommendation = await maybeGetGptRecommendation(body, {_median: baseMedian, _min, _max, _country});

  const response: InsightResponse = {_recommendedHourlyUsd: recommendedHourly, _recommendedMonthlyUsd: recommendedMonthly, _medianHourlyUsd: Math.round(baseMedian), _minHourlyUsd: Math.round(min), _maxHourlyUsd: Math.round(max), _confidence: Number(confidence.toFixed(2)), _trendMonthly: trend, _regionalComparison, _tags, _gptRecommendation};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return res.status(200).json(response)
}