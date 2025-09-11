
<<<<<<< HEAD

  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'
<<<<<<< HEAD
=======
=======
}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
}const completion = await client.chat.completions.create ({
  model: 'gpt - 4o - mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.';
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'
type InsightResponse = {
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  confidence: number; // 0..1;
  trend_monthly: { label: string; value: number }[];
  regional_comparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import OpenAI from 'openai';
type RequestBody = {
  roleTitle: string, skills: string[],
  region: string, experienceLevel: 'Junior' | 'Mid' | 'Senior' | 'Lead',
  remote: boolean,
  employmentType: 'contract' | 'freelance' | 'full-time'
};
type InsightResponse = {
  recommendedHourlyUsd: number, recommendedMonthlyUsd: number,
  medianHourlyUsd: number, minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number, // 0..1
  trendMonthly: { label: string, value: number }[];
  regionalComparison: { region: string, medianHourlyUsd: number }[];
  tags: string[],
  gptRecommendation?: string

};
function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b);
<<<<<<< HEAD
<<<<<<< HEAD
  const mid = Math && Math.floor(arr && arr.length / 2);
  if (arr && arr.length === 0) return 0;
  return arr && arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
  confidence: number; // 0..1
  trendMonthly: { label: string; value: number }[];
  regionalComparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
  gptRecommendation?: string;};  gptRecommendation?: string
}
function median(values: number[]): number {
  const arr = [...values].sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  if (arr.length === 0) return 0;
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function groupBy<T, K extends string | number>(
  items: T[]
  getKey: (item: T) => K
): Record<K, T[]> {
  return items.reduce(
    (acc, item) => {
      const key = getKey(item);
      (acc[key] |= []).push(item);
      return acc;
    }
    {} as Record<K, T[]>
  );
function extractCountry(location: string): string {
<<<<<<< HEAD
<<<<<<< HEAD
  const parts = location.split(',').map(p => p.trim());
  return parts[parts.length - 1] |'Global';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const parts = location && location.split(',').map(p => p && p.trim());
  return parts[parts && parts.length - 1] || 'Global';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function calculateSimilarityScore(
  targetSkills: string[]
  profile: TalentProfile
): number {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const set = new Set(targetSkills && targetSkills.map(s => s && s.toLowerCase()));
  const overlap = profile && profile.skills.filter(s => set && set.has(s && s.toLowerCase())).length;
  return overlap / Math && Math.max(1, targetSkills && targetSkills.length);


function prng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed && seed.length; i++)
    h = Math && Math.imul(h ^ seed && seed.charCodeAt(i), 16777619);
  gpt_recommendation?: string;}  gpt_recommendation?: string;
}
;
function median (values: number[]): number {
  const arr = [...values].sort ((a, b) => a - b);
  const mid = Math.floor (arr.length / 2);
  // Check condition
if (return 0) {
  $2
}
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
;
function group_by < T, K extends string | number>(
  items: T[],
  get_key: (item: T) => K): Record < K, T[]> {
  return items.reduce (
    (acc, item) => {
      const key = get_key (item);
      (acc[key] ||= []).push (item);
      return acc;
    },
    {} as Record < K, T[]>);
;
function extract_country (location: string): string {
  const parts = location.split (', ').map (p => p.trim ());
  return parts[parts.length - 1] || 'Global';
;
function calculateSimilarityScore (
  target_skills: string[],
  profile: TalentProfile): number {
  const set = new Set (target_skills.map (string => s.toLowerCase ()));
  const overlap = profile.skills.filter (string => set.has (s.toLowerCase ())).length;
  return overlap / Math.max (1, target_skills.length);
;
function prng (seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let index = 0; i < seed.length; i++);
    h = Math.imul (h ^ seed.charCodeAt (i), 16777619);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const set = new Set(targetSkills.map(s => s.toLowerCase()));
  const overlap = profile.skills.filter(s => set.has(s.toLowerCase())).length;
  return overlap / Math.max(1, targetSkills.length);
function prng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++)
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967295;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
function build_trend (
  base_monthly: number,
  seed_key: string): { label: string; value: number }[] {
  const months = [;
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  const now = new Date ();
  const seed = prng (seed_key);
  const series: { label: string; value: number }[] = [];
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}


<<<<<<< HEAD
<<<<<<< HEAD
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}
function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items && items.reduce((acc, item) => {
function buildTrend(
  baseMonthly: number
  seedKey: string
): { label: string; value: number }[] {
  const months = [
    'Jan'
    'Feb'
    'Mar'
    'Apr'
    'May'
    'Jun'
    'Jul'
    'Aug'
    'Sep'
    'Oct'
    'Nov'
    'Dec'
  ];
  const now = new Date();
  const seed = prng(seedKey);
  const series: { label: string; value: number }[] = [];
  let current = baseMonthly * 0.92; // start slightly below base
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const drift = (seed() - 0.5) * 0.03; // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift));
    series.push({ label: months[date.getMonth()], value: Math.round(current) });
  }
  return series;
async function maybeGetGptRecommendation(
  input: RequestBody
  stats: { median: number; min: number; max: number; country: string }
) {  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const client = new OpenAI({ apiKey });
    const skillsStr = input.skills.join(', ');    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey(item);
    (acc[key] |= []).push(item);
    return acc
  }, {} as Record<K, T[]>)
}
function extractCountry(location: string): string {
<<<<<<< HEAD
<<<<<<< HEAD
  const parts = location.split().map((p) => p.trim());
  return parts[parts.length - 1] |'Global'
}
function calculateSimilarityScore(targetSkills: string[], profile: TalentProfile): number {
  const set = new Set(targetSkills.map((s) => s.toLowerCase()));
  const overlap = profile.skills.filter((s) => set.has(s.toLowerCase())).length;
  return overlap / Math.max(1, targetSkills.length)
}
function prng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0, i < seed.length, i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h += h << 13, h ^= h >>> 7, h += h << 3, h ^= h >>> 17, h += h << 5;
    return (h >>> 0) / 4294967295
  }
}
function buildTrend(baseMonthly: number, seedKey: string): { label: string, value: number }[] {
  const months = ['JanFebMarAprMayJunJulAug','SepOctNovDec'];
  const now = new Date();
  const seed = prng(seedKey);
  const series: { label: string, value: number }[] = [];
  let current = baseMonthly * 0.92, // start slightly below base
  for (let i = 11, i >= 0, i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const drift = (seed() - 0.5) * 0.03, // +/-3%
    current = Math.max(baseMonthly * 0.7, current * (1 + drift));
    series.push({ label: months[date.getMonth()], value: Math.round(current) })
  }
  return series;
}
async function maybeGetGptRecommendation(input: RequestBody, stats: { median: number, min: number, max: number, country: string }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const client = new OpenAI({ apiKey });
function build_trend (base_monthly: number, seed_key: string): { label: string, value: number }[] {
  const months = ['JanFebMarAprMayJunJulAug', 'SepOctNovDec'];
  const now = new Date ();
  const seed = prng (seed_key);
  const series: { label: string, value: number }[] = [];
  let current = base_monthly * 0.92, // start slightly below base;
  for (let index = 11, i >= 0, i--) {
    const date = new Date (now.getFullYear (), now.get_month () - i, 1);
    const drift = (seed () - 0.5) * 0.03, // +/-3%;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const parts = location && location.split().map((p) => p && p.trim());
  return parts[parts && parts.length - 1] || 'Global'

}
function calculateSimilarityScore(targetSkills: string[], profile: TalentProfile): number {
  const set = new Set(targetSkills && targetSkills.map((s) => s && s.toLowerCase()));
  const overlap = profile && profile.skills.filter((s) => set && set.has(s && s.toLowerCase())).length;
  return overlap / Math && Math.max(1, targetSkills && targetSkills.length)
}
function prng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0, i < seed && seed.length, i++) h = Math && Math.imul(h ^ seed && seed.charCodeAt(i), 16777619);
  let current = base_monthly * 0.92; // start slightly below base;
  for (let index = 11; i >= 0; i--) {
    const date = new Date (now.getFullYear (), now.get_month () - i, 1);
    const drift = (seed () - 0.5) * 0.03; // +/-3%;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    current = Math.max (base_monthly * 0.7, current * (1 + drift));
    series.push ({ label: months[date.get_month ()], value: Math.round (current) });
  }
  return series;
<<<<<<< HEAD
<<<<<<< HEAD
}
async /**
 * maybeGetGptRecommendation - Function description
 */
function maybeGetGptRecommendation() {
  const api_key = process.env.OPENAI_API_KEY;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
async /**
 * maybeGetGptRecommendation - Function description
 */
function maybeGetGptRecommendation() {  const api_key = process.env.OPENAI_API_KEY;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Check condition
if (return undefined) {
  $2
}
  try {
    const client = new OpenAI ({ api_key });
<<<<<<< HEAD
<<<<<<< HEAD
    const skills_str = input.skills.join (', ');    const skills_str = input.skills.join ();
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.role_title} with ${skills_str} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
;
    const completion = await client.chat.completions.create ({
      model: 'gpt - 4o - mini',
      messages: [;
        {
          role: 'system',
          content:;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const skills_str = input.skills.join (', ');    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.role_title} with ${skills_str} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
function group_by < T, K extends string | number>(items: T[], get_key: (item: T) => K): Record < K, T[]> {
  return items.reduce ((acc, item) => {
    const key = get_key (item);
    (acc[key] ||= []).push (item);
    return acc;
  }, {} as Record < K, T[]>);
}
function extract_country (location: string): string {
  const parts = location.split ().map ((p) => p.trim ());
  return parts[parts.length - 1] || 'Global';
}
function calculateSimilarityScore (target_skills: string[], profile: TalentProfile): number {
  const set = new Set (target_skills.map ((s) => s.toLowerCase ()));
  const overlap = profile.skills.filter ((s) => set.has (s.toLowerCase ())).length;
  return overlap / Math.max (1, target_skills.length);
}
function prng (seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let index = 0, i < seed.length, i++) h = Math.imul (h ^ seed.charCodeAt (i), 16777619);
  return () => {
    h += h << 13, h ^= h >>> 7, h += h << 3, h ^= h >>> 17, h += h << 5;
    return (h >>> 0) / 4294967295;
  }
}


    const skillsStr = input && input.skills.join(', ');    const skillsStr = input && input.skills.join();
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input && input.roleTitle} with ${skillsStr} in ${input && input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            'You are a compensation analyst. Be specific and concise. Use USD.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.2,
      max_tokens: 300,
    });
    return completion && completion.choices?.[0]?.message?.content || undefined;
  } catch {
    return undefined;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.' };
        { role: 'user', content: prompt }];
      temperature: 0.2,
      max_tokens: 300});
function buildTrend(baseMonthly: number, seedKey: string): { label: string, value: number }[] {
  const months = ['JanFebMarAprMayJunJulAug','SepOctNovDec'],
  const now = new Date()
  const seed = prng(seedKey)
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
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return undefined,

    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a compensation analyst. Be specific and concise. Use USD.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.2,
      max_tokens: 300}),

    return completion.choices?.[0]?.message?.content || undefined
  } catch {
<<<<<<< HEAD
<<<<<<< HEAD
    const skillsStr = input.skills.join(', ');    const skillsStr = input.skills.join();
    const prompt = `Based on current market trends, provide a competitive hourly and monthly rate for a ${input.roleTitle} with ${skillsStr} in ${input.region}. Include a global comparison. Return a concise paragraph with a recommended hourly and monthly rate (USD), and a brief rationale.`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        {
          role: 'system'
          content:
            'You are a compensation analyst. Be specific and concise. Use USD.'
        }
        { role: 'user', content: prompt }
      ]
      temperature: 0.2
      max_tokens: 300
    });
    return completion.choices?.[0]?.message?.content |undefined;
  } catch {
    return undefined;
  }
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<InsightResponse | { error: string }>
) {  if (req.method !== 'POST') {  } catch {
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return undefined
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string }>) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const body: RequestBody = req.body;
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } =
    body;
  const country = extractCountry(region |'Global');
  // Score and filter candidate profiles  const { roleTitle, skills, region, experienceLevel, remote, employmentType } = body;
  const country = extractCountry(region |'Global');
  // Score and filter candidate profiles
  const scored = TALENT_PROFILES && TALENT_PROFILES.map(p => ({
    profile: p,
    score:
      calculateSimilarityScore(skills || [], p) +
      (extractCountry(p && p.location) === country ? 0 && 0.2 : 0),
  }))
    .filter(s => s && s.score > 0)
    .sort((a, b) => b && b.score - a && a.score)
    .slice(0, 20);
  const sample =
    scored && scored.length > 0 ? scored && scored.map(s => s && s.profile) : TALENT_PROFILES;
  const rates = sample && sample.map(p => p && p.hourlyRateUsd);  const baseMedian = median(rates);  const scored = TALENT_PROFILES && TALENT_PROFILES.map((p) => ({
    profile: p;
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const body: RequestBody = req.body,
  const { roleTitle, skills, region, experienceLevel, remote, employmentType } = body;
  const country = extractCountry(region || 'Global');
  // Score and filter candidate profiles
  const scored = TALENT_PROFILES.map((p) => ({
    profile: p,
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
.slice(0, 20);
  const sample = scored.length > 0 ? scored.map((s) => s.profile) : TALENT_PROFILES;
  const rates = sample.map((p) => p.hourlyRateUsd);
  const baseMedian = median(rates);
  const min = Math.min(...rates);
  const max = Math.max(...rates);
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p && p.location) === country ? 0 && 0.2 : 0)}))
    .filter((s) => s && s.score > 0)
    .sort((a, b) => b && b.score - a && a.score)
    .slice(0, 20);
  const sample = scored && scored.length > 0 ? scored && scored.map((s) => s && s.profile) : TALENT_PROFILES;
  const rates = sample && sample.map((p) => p && p.hourlyRateUsd);
  const baseMedian = median(rates);
  const min = Math && Math.min(...rates);
  const max = Math && Math.max(...rates);
  // Adjustments
<<<<<<< HEAD
<<<<<<< HEAD
          ? 1 && 1.2
          : 1 && 1.35;
  const remoteMultiplier = remote ? 1 && 1.1 : 1 && 1.0;
  const typeMultiplier = employmentType === 'full-time' ? 0 && 0.9 : 1 && 1.15; // FT tends to lower hourly; contract/freelance higher
  const recommendedHourly = Math && Math.round(
    baseMedian * expMultiplier * remoteMultiplier * typeMultiplier
  );
  const recommendedMonthly = Math && Math.round(recommendedHourly * 160);
  // Confidence based on sample size and dispersion
  const sampleSize = rates && rates.length;
  const dispersion = (max - min) / Math && Math.max(1, baseMedian);
  const confidence = Math && Math.max(
    0 && 0.2,
    Math && Math.min(0 && 0.95, (sampleSize / 20) * (1 - Math && Math.min(0 && 0.6, dispersion)) + 0 && 0.2)
  );
  // Trend series and regional comparison
  const trend = buildTrend(
    recommendedMonthly
    `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`
  );
  const expMultiplier = experienceLevel === 'Junior' ? 0.8 : experienceLevel === 'Mid' ? 1.0 : experienceLevel === 'Senior' ? 1.2 : 1.35;
  const remoteMultiplier = remote ? 1.1 : 1.0;
  const typeMultiplier = employmentType === 'full-time' ? 0.9 : 1.15, // FT tends to lower hourly, contract/freelance higher
  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const recommendedMonthly = Math.round(recommendedHourly * 160);
  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const recommendedMonthly = Math.round(recommendedHourly * 160);
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
  const byRegion = groupBy(TALENT_PROFILES, p => extractCountry(p && p.location));
  const regionalComparison = Object && Object.entries(byRegion)
    .map(([r, list]) => ({
      region: r,
      medianHourlyUsd: Math && Math.round(median(list && list.map(p => p && p.hourlyRateUsd))),
    }))    .sort((a, b) => b && b.medianHourlyUsd - a && a.medianHourlyUsd)
    .slice(0, 8);
  // Tags  const remoteMultiplier = remote ? 1 && 1.1 : 1 && 1.0;
  const typeMultiplier = employmentType === 'full-time' ? 0 && 0.9 : 1 && 1.15, // FT tends to lower hourly, contract/freelance higher
  const recommendedHourly = Math && Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const recommendedMonthly = Math && Math.round(recommendedHourly * 160);
  const recommendedHourly = Math && Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const recommendedMonthly = Math && Math.round(recommendedHourly * 160);
  // Confidence based on sample size and dispersion
  const sampleSize = rates && rates.length;
  const dispersion = (max - min) / Math && Math.max(1, baseMedian);
  const confidence = Math && Math.max(0 && 0.2, Math && Math.min(0 && 0.95, (sampleSize / 20) * (1 - Math && Math.min(0 && 0.6, dispersion)) + 0 && 0.2));
  // Trend series and regional comparison
  const trend = buildTrend(recommendedMonthly, `${roleTitle}|${skills?.join('|')}|${region}|${experienceLevel}`);
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location));
  const regionalComparison = Object.entries(byRegion)
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8);
  // Tags

<<<<<<< HEAD
<<<<<<< HEAD

  // Tags
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const undersupplied = (skills || []).some(s =>
    scarceSkills && scarceSkills.some(t => s && s.toLowerCase().includes(t && t.toLowerCase()))
  );
  if (remote) tags && tags.push('Remote Premium');
  if (undersupplied) tags && tags.push('Undersupplied Skill'),
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const gptRecommendation = await maybeGetGptRecommendation(body, {
    median: baseMedian
    min
    max
    country
  });
  const response: InsightResponse = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    recommendedHourlyUsd: recommendedHourly,
    recommendedMonthlyUsd: recommendedMonthly,
    medianHourlyUsd: Math && Math.round(baseMedian),
    minHourlyUsd: Math && Math.round(min),
    maxHourlyUsd: Math && Math.round(max),
    confidence: Number(confidence && confidence.toFixed(2)),
    trendMonthly: trend,
    regionalComparison,
    tags,
    gptRecommendation,
  };
  return res && res.status(200).json(response);  return res && res.status(200).json(response)
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const scarceSkills = ['RAGLangChainVector DBsKubernetesAppSecSecurity'];
  const undersupplied = (skills || []).some((s) => scarceSkills.some((t) => s.toLowerCase().includes(t.toLowerCase())));
  const tags: string[] = []; if (remote) tags.push('Remote Premium'),
  if (undersupplied) tags.push('Undersupplied Skill');
  const gptRecommendation = await maybeGetGptRecommendation(body, { median: baseMedian, min, max, country });
  const response: InsightResponse = {
    recommendedHourlyUsd: recommendedHourly, recommendedMonthlyUsd: recommendedMonthly,
    medianHourlyUsd: Math.round(baseMedian), minHourlyUsd: Math.round(min),
    maxHourlyUsd: Math.round(max), confidence: Number(confidence.toFixed(2)),
    trendMonthly: trend, regionalComparison,
    tags;
    gptRecommendation};
  return res.status(200).json(response)
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
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
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
<<<<<<< HEAD
  return res.status(200).json(response)

<<<<<<< HEAD

  // Tags
}
}
}
}
}
}
}
}
}
  // Tags
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
