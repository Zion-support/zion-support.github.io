
;

import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import OpenAI from 'openai';

}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'
<<<<<<< HEAD
type InsightResponse = {
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
  return res.status(200).json(response)}}const completion = await client.chat.completions.create ({model: 'gpt-4o-mini', messages: [ {role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.';
type InsightResponse = {recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;confidence: number; // 0..1;
  trendMonthly: { label: string; value: number }[];
  regionalComparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
  gptRecommendation?: string;
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

=======
type InsightResponse = {}
  recommendedHourlyUsd: number
  recommendedMonthlyUsd: number
  medianHourlyUsd: number
  minHourlyUsd: number
  maxHourlyUsd: number
  confidence: number; // 0..1;}
trendMonthly: { label: string; value: number,}
}[]
  regionalComparison: { region: string; medianHourlyUsd: number,}
}[]
  tags: string[]
  gptRecommendation?: string
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b),
  const mid = Math.floor($2);
  if (arr.length = $2;
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}


function groupBy<T, K extends string | number>(
  items: T[]
  getKey: (item: T) => K
<<<<<<< HEAD
): Record<K, T[]> {
    (acc, item) => {
      const key = getKey(item);
      (acc[key] |= []).push(item);
      return acc;
}function median(values: number[]): number {const arr = [...values].sort((a, b) => a - b)const mid = Math.floor(arr.length / 2)if (arr.length === 0) return 0;
return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];function groupBy<T, K extends string | number>(items: T[];
  getKey: (item: T) => K;
): Record<K, T[]> {(acc, item) => {const key = getKey(item)(acc[key] |= []).push(item)return acc;
    }
    {} as Record<K, T[]>;
  )function extractCountry(location: string): string {function calculateSimilarityScore(targetSkills: string[];
  profile: TalentProfile;
): number {return () => {h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967295;
  }
  ];
  const now = new Date ()const seed = prng (seed_key)const series: { label: string; value: number }[]  = [];const key = getKey(item)(acc[key] |= []).push(item)return acc;
  }, {} as Record<K, T[]>)}
function extractCountry(location: string): string {current = Math.max (base_monthly * 0.7, current * (1 + drift))series.push ({ label: months[date.get_month ()], value: Math.round (current) })}
  return series;
  // Check condition;
if (return undefined) {$2;
}
  try {const client = new OpenAI ({ api_key })'You are a compensation analyst. Be specific and concise. Use USD.',},{ role: 'user', content: prompt },],temperature: 0 && 0.2,max_tokens: 300,let current = baseMonthly * 0.92; // start slightly below base;
  for (let i = 11; i >= 0; i--) {const date = new Date(now.getFullYear(), now.getMonth() - i, 1)const drift = (seed() - 0.5) * 0.03; // +/-3%;
    current = Math.max(baseMonthly * 0.7, current * (1 + drift))series.push({ label: months[date.getMonth()], value: Math.round(current) })}
  return series;
async function maybeGetGptRecommendation() {const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {const client = new OpenAI({ apiKey })const skillsStr = input.skills.join(', ')const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
    const completion = await client.chat.completions.create({model: 'gpt-4o-mini';
      messages: [;
{role: 'system',content:;
            'You are a compensation analyst. Be specific and concise. Use USD.';
        }
        { role: 'user', content: prompt }
    const key = getKey(item);
    (acc[key] |= []).push(item);
function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey($2);
    (acc[key] ||= []).push($2);
    return acc
  }, {} as Record<K, T[]>)
}
=======
): Record<K, T[]    /> {
    (acc, item) => {
      const key = getKey(item)
      (acc[key] |= []).push(item)
      return acc;}

    {} as Record<K, T[]    />
  )function extractCountry(location: string): string {function calculateSimilarityScore(targetSkills: string[]
  profile: TalentProfile
): number {return () => {h += h << 13
    h ^= h >>> 7
    h += h << 3
    h ^= h >>> 17
    h += h << 5;}
    return (h >>> 0) / 4294967295;}

  ]
const now = new Date ()
const seed = prng (seed_key)
const series: { label: string; value: number,}
}[] = []
  let current = baseMonthly * 0.92; // start slightly below base
  for($2) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
const drift = (seed() - 0.5) * 0.03; // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift));}
    series.push({ label: months[date.getMonth()], value: Math.round(current),}
})
  return series
async function maybeGetGptRecommendation() {const apiKey = process.env.OPENAI_API_KEY;}
  if (!apiKey) return undefined;}
  try {const client = new OpenAI({ apiKey })const skillsStr = input.skills.join(', '
  const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`
const completion = await client.chat.completions.create({model: 'gpt-4o-mini'
      messages: [
{role: 'system',
  content:;}
            'You are a compensation analyst. Be specific and concise. Use USD.';}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

function extractCountry(location: string): string {
  const now = new Date ()const seed = prng (seed_key)const series: { label: string; value: number }[]  = [];const key = getKey(item)(acc[key] |= []).push(item)return acc;
  }, {} as Record<K, T[]>)}
function extractCountry(location: string): string {current = Math.max (base_monthly * 0.7, current * (1 + drift))series.push ({ label: months[date.get_month ()], value: Math.round (current) })}
  return series;
  // Check condition
if (return undefined) {
  $2
}
  const parts = $2;
  return parts[parts.length - 1] || 'Global'
}

<<<<<<< HEAD
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
=======
      ]
      temperature: 0.2
max_tokens: 300
   ,
})
    return completion && completion.choices?.[0]?.message?.content || undefined
  } catch {}
    return undefined;}

export default async function handler(
  req: NextApiRequest
res: NextApiResponse<InsightResponse | { error: string }    />
) {
  if($2) {}
    return res.status(405).json({ error: 'Method not allowed',}
})
const body: RequestBody = req.body
const { roleTitle, skills, region, experienceLevel, remote, employmentType } =
    body
const country = extractCountry(region || 'Global')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  // Score and filter candidate profiles
  const scored = $2;
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
  try {const client = new OpenAI ({ api_key })'You are a compensation analyst. Be specific and concise. Use USD.',},{ role: 'user', content: prompt },],temperature: 0 && 0.2,max_tokens: 300,let current = baseMonthly * 0.92; // start slightly below base;
  for (let i = 11; i >= 0; i--) {const date = new Date(now.getFullYear(), now.getMonth() - i, 1)const drift = (seed() - 0.5) * 0.03; // +/-3%;
    current = Math.max(baseMonthly * 0.7, current * (1 + drift))series.push({ label: months[date.getMonth()], value: Math.round(current) })}
  return series;
async function maybeGetGptRecommendation() {const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {const client = new OpenAI({ apiKey })const skillsStr = input.skills.join(', ')const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
    const completion = await client.chat.completions.create({model: 'gpt-4o-mini';
      messages: [;
{role: 'system',content:;
            'You are a compensation analyst. Be specific and concise. Use USD.';
        }
        { role: 'user', content: prompt }
      ];
      temperature: 0.2;
      max_tokens: 300;
    })return completion && completion.choices?.[0]?.message?.content || undefined;
  } catch {return undefined;
  }return undefined;
  }
}
export default async function handler() {.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 20)const sample = scored.length > 0 ? scored.map((s) => s.profile) : TALENT_PROFILES;
  const rates  = sample.map((p) => p.hourlyRateUsd)export default async function handler() {if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}const body: RequestBody = req.body;
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } =;
    body;const country  = extractCountry(region || 'Global')// Score and filter candidate profiles;
const scored = TALENT_PROFILES.map(p => ({profile: p,score:;
      calculateSimilarityScore(skills |[], p) +;
      (extractCountry(p.location) === country ? 0.2 : 0)})).filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 20)const sample =;
    scored.length > 0 ? scored.map(s => s.profile) : TALENT_PROFILES;
  const rates  = sample.map(p => p.hourlyRateUsd)const baseMedian = median(rates)const min = Math.min(...rates)const max = Math.max(...rates)score: calculateSimilarityScore(skills || [], p) + (extractCountry(p && p.location) === country ? 0 && 0.2 : 0)})).filter((s) => s && s.score > 0).sort((a, b) => b && b.score - a && a.score).slice(0, 20)const sample = scored && scored.length > 0 ? scored && scored.map((s) => s && s.profile) : TALENT_PROFILES;
  const rates = sample && sample.map((p) => p && p.hourlyRateUsd)const baseMedian = median(rates)const min = Math && Math.min(...rates)const max = Math && Math.max(...rates)// Adjustments;
  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location))const regionalComparison = Object.entries(byRegion).map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) })).sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd).slice(0, 8)// Tags;
const expMultiplier =;
    experienceLevel === 'Junior';
      ? 0.8;
      : experienceLevel === 'Mid';
        ? 1.0;
        : experienceLevel === 'Senior';
          ? 1.2;
          : 1.35;
  const remoteMultiplier = remote ? 1.1 : 1.0;
  const typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15; // FT tends to lower hourly; contract/freelance higher;
  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier;
  )const recommendedMonthly = Math.round(recommendedHourly * 160)// Confidence based on sample size and dispersion;
  const sampleSize = rates.length;
  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location));
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
<<<<<<< HEAD
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

  const dispersion = (max - min) / Math.max(1, baseMedian)const confidence = Math.max(0.2;
    Math.min(0.95, (sampleSize / 20) * (1 - Math.min(0.6, dispersion)) + 0.2))// Trend series and regional comparison;
  const trend = buildTrend(recommendedMonthly;
    `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`;
  )const byRegion = groupBy(TALENT_PROFILES, p => extractCountry(p.location))const regionalComparison = Object.entries(byRegion).map(([r, list]) => ({region: r,medianHourlyUsd: Math.round(median(list.map(p => p.hourlyRateUsd))),})).sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd).slice(0, 8)// Tags;
const scarceSkills = [;
    'RAG','LangChain','Vector DBs','Kubernetes','AppSec','Security',];
  const undersupplied = (skills |[]).some(s =>;
    scarceSkills.some(t => s.toLowerCase().includes(t.toLowerCase())))if (remote) tags.push('Remote Premium')if (undersupplied) tags.push('Undersupplied Skill')const gptRecommendation = await maybeGetGptRecommendation(body, {median: baseMedian;
    min;
    max;
    country;
  })const response: InsightResponse = {const scarceSkills = ['RAGLangChainVector DBsKubernetesAppSecSecurity'];
  const undersupplied = (skills || []).some((s) => scarceSkills.some((t) => s.toLowerCase().includes(t.toLowerCase())))const tags: string[] = []; if (remote) tags.push('Remote Premium'),if (undersupplied) tags.push('Undersupplied Skill')const response: InsightResponse = {recommendedHourlyUsd: recommendedHourly, recommendedMonthlyUsd: recommendedMonthly,medianHourlyUsd: Math.round(baseMedian), minHourlyUsd: Math.round(min),maxHourlyUsd: Math.round(max), confidence: Number(confidence.toFixed(2)),trendMonthly: trend, regionalComparison,tags;
    gptRecommendation}}
export default async /**;
 * handler - Function description;
 */;
function handler() {  // Check condition;
if ( {  } catch {) {$2;
  const scarceSkills = ['RAGLangChainVector DBsKubernetesAppSecSecurity'];
  const undersupplied = (skills || []).some((s) => scarceSkills.some((t) => s.toLowerCase().includes(t.toLowerCase())));
  const tags: string[] = []; if (remote) tags.push('Remote Premium'),
  if (undersupplied) tags.push('Undersupplied Skill');
  const response: InsightResponse = {
    recommendedHourlyUsd: recommendedHourly, recommendedMonthlyUsd: recommendedMonthly,
    medianHourlyUsd: Math.round(baseMedian), minHourlyUsd: Math.round(min),
    maxHourlyUsd: Math.round(max), confidence: Number(confidence.toFixed(2)),
    trendMonthly: trend, regionalComparison,
    tags;
    gptRecommendation};
}
export default async /**
 * handler - Function description
 */
function handler() {  // Check condition
if ( {  } catch {) {
  $2
}
    return undefined;
  }
}
}
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  const body: RequestBody = req.body;
  const { role_title, skills, region, experience_level, remote, employment_type } =;
    body;
  const country = extract_country (region || 'Global');
;
  // Score and filter candidate profiles  const { role_title, skills, region, experience_level, remote, employment_type } = body;
;
  const country = extract_country (region || 'Global');
;
  // Score and filter candidate profiles;
  const scored = TALENT_PROFILES.map (p => ({
    profile: p,
    score:;
      calculateSimilarityScore (skills || [], p) +;
      (extract_country (p.location) === country ? 0.2 : 0),
  }));
    .filter (string => s.score > 0);
    .sort ((a, b) => b.score - a.score);
    .slice (0, 20);
;
  const sample =;
    scored.length > 0 ? scored.map (string => s.profile) : TALENT_PROFILES;
  const rates = sample.map (p => p.hourlyRateUsd);  const base_median = median (rates);  const scored = TALENT_PROFILES.map ((p) => ({
    profile: p;
    score: calculateSimilarityScore (skills || [], p) + (extract_country (p.location) === country ? 0.2 : 0)}));
    .filter ((s) => s.score > 0);
    .sort ((a, b) => b.score - a.score);
    .slice (0, 20);
;
  const sample = scored.length > 0 ? scored.map ((s) => s.profile) : TALENT_PROFILES;
  const rates = sample.map ((p) => p.hourlyRateUsd);
  const base_median = median (rates);
  const min = Math.min (...rates);
  const max = Math.max (...rates);
;
  // Adjustments;
  const exp_multiplier =;
    experience_level === 'Junior';
      ? 0.8;
      : experience_level === 'Mid';
        ? 1.0;
        : experience_level === 'Senior';
          ? 1.2;
          : 1.35;
  const remote_multiplier = remote ? 1.1 : 1.0;
  const type_multiplier = employment_type === 'full - time' ? 0.9 : 1.15; // FT tends to lower hourly; contract / freelance higher;
  const recommended_hourly = Math.round (
    base_median * exp_multiplier * remote_multiplier * type_multiplier);
  const recommended_monthly = Math.round (recommended_hourly * 160);
;
  // Confidence based on sample size and dispersion;
  const sample_size = rates.length;
  const dispersion = (max - min) / Math.max (1, base_median);
  const confidence = Math.max (
    0.2,
    Math.min (0.95, (sample_size / 20) * (1 - Math.min (0.6, dispersion)) + 0.2));
;
  // Trend series and regional comparison;
  const trend = build_trend (
    recommended_monthly,
    `${role_title}|${skills?.join ('|')}|${region}|${experience_level}`);
;
  const by_region = group_by (TALENT_PROFILES, p => extract_country (p.location));
  const regional_comparison = Object.entries (by_region);
    .map (([r, list]) => ({
      region: r,
      medianHourlyUsd: Math.round (median (list.map (p => p.hourlyRateUsd))),
    }))    .sort ((a, b) => b.medianHourlyUsd - a.medianHourlyUsd);
    .slice (0, 8);
;
  // Tags  const remote_multiplier = remote ? 1.1 : 1.0;
  const type_multiplier = employment_type === 'full - time' ? 0.9 : 1.15, // FT tends to lower hourly, contract / freelance higher;
  const recommended_hourly = Math.round (base_median * exp_multiplier * remote_multiplier * type_multiplier);
  const recommended_monthly = Math.round (recommended_hourly * 160);
;
  const recommended_hourly = Math.round (base_median * exp_multiplier * remote_multiplier * type_multiplier);
  const recommended_monthly = Math.round (recommended_hourly * 160);
  // Confidence based on sample size and dispersion;
  const sample_size = rates.length;
  const dispersion = (max - min) / Math.max (1, base_median);
  const confidence = Math.max (0.2, Math.min (0.95, (sample_size / 20) * (1 - Math.min (0.6, dispersion)) + 0.2));
;
  // Trend series and regional comparison;
  const trend = build_trend (recommended_monthly, `${role_title}|${skills?.join ('|')}|${region}|${experience_level}`);
;
  const by_region = group_by (TALENT_PROFILES, (p) => extract_country (p.location));
  const regional_comparison = Object.entries (by_region);
    .map (([r, list]) => ({ region: r, medianHourlyUsd: Math.round (median (list.map ((p) => p.hourlyRateUsd))) }));
    .sort ((a, b) => b.medianHourlyUsd - a.medianHourlyUsd);
    .slice (0, 8);
;
  // Tags;
  const scarce_skills = [;
    'RAG',
    'LangChain',
    'Vector DBs',
    'Kubernetes',
    'AppSec',
    'Security',
=======
  const scarceSkills = [
    'RAG'
    'LangChain'
    'Vector DBs'
    'Kubernetes'
    'AppSec'
    'Security'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  ];
  const undersupplied = (skills || []).some (string =>;
    scarce_skills.some (t => s.toLowerCase ().includes (t.toLowerCase ())));
  if (tags.push ('Remote Premium')) {
  $2
}
  if (tags.push ('Undersupplied Skill'), ) {
  $2
}
  const gpt_recommendation = await maybeGetGptRecommendation (body, {
    median: base_median,
    min,
    max,
    country,
  });
;
  const response: InsightResponse = {
    recommendedHourlyUsd: recommended_hourly,
    recommendedMonthlyUsd: recommended_monthly,
    medianHourlyUsd: Math.round (base_median),
    minHourlyUsd: Math.round (min),
    maxHourlyUsd: Math.round (max),
    confidence: Number (confidence.to_fixed (2)),
    trend_monthly: trend,
    regional_comparison,
    tags,
    gpt_recommendation,
  }
;
return res.status (200).json (response);  return res.status (200).json (response);
}
}
}
}
}
}
  // Tags
}
}recommendedHourlyUsd: recommendedHourly,recommendedMonthlyUsd: recommendedMonthly,medianHourlyUsd: Math.round(baseMedian),minHourlyUsd: Math.round(min),maxHourlyUsd: Math.round(max),confidence: Number(confidence.toFixed(2)),trendMonthly: trend,regionalComparison,tags,gptRecommendation,}return res.status(200).json(response)
  return res.status(200).json(response)
}
