
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
==============
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
  const parts = location && location.split(',').map(p => p && p.trim());
  return parts[parts && parts.length - 1] || 'Global';



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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return undefined
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string }>) {
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

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location));
  const regionalComparison = Object.entries(byRegion)
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8);
  // Tags

  // Tags
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const undersupplied = (skills || []).some(s =>
    scarceSkills && scarceSkills.some(t => s && s.toLowerCase().includes(t && t.toLowerCase()))
  );
  if (remote) tags && tags.push('Remote Premium');
  if (undersupplied) tags && tags.push('Undersupplied Skill'),
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const gptRecommendation = await maybeGetGptRecommendation(body, {
    median: baseMedian
    min
    max
    country
  });
  const response: InsightResponse = {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
==============

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
}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
