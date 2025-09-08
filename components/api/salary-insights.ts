


function groupBy<T, K extends string | number>(
  items: T[]
  getKey: (item: T) => K
): Record<K, T[]> {

function groupBy<T, K extends string | number    />(
  items: T[]
  getKey: (item: T) => K;
): Record<K, T[]    /> {



    {} as Record<K, T[]>
  );
function extractCountry(location: string): string {

    h += h << 13;


function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {

    const key = getKey(item);
    (acc[key] |= []).push(item);

function groupBy<T, K extends string | number>(items: T[], getKey: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = getKey(item);
    (acc[key] ||= []).push(item);
    return acc
  }, {} as Record<K, T[]>)
}

function extractCountry(location: string): string {
  const parts = location.split().map((p) => p.trim());
  return parts[parts.length - 1] || 'Global'
    return undefined


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

  // Score and filter candidate profiles
  const scored = TALENT_PROFILES.map((p) => ({
    profile: p;
    score: calculateSimilarityScore(skills || [], p) + (extractCountry(p.location) === country ? 0.2 : 0)}))


  const recommendedHourly = Math.round(baseMedian * expMultiplier * remoteMultiplier * typeMultiplier);
  const recommendedMonthly = Math.round(recommendedHourly * 160);


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



  const scarceSkills = ['RAGLangChainVector DBsKubernetesAppSecSecurity'];
  const undersupplied = (skills || []).some((s) => scarceSkills.some((t) => s.toLowerCase().includes(t.toLowerCase())));
  const tags: string[] = [];
  if (remote) tags.push('Remote Premium');
  if (undersupplied) tags.push('Undersupplied Skill');
  const gptRecommendation = await maybeGetGptRecommendation(body, { median: baseMedian, min, max, country });
  const response: InsightResponse = {
    recommendedHourlyUsd: recommendedHourly;
    recommendedMonthlyUsd: recommendedMonthly;
    medianHourlyUsd: Math.round(baseMedian);
    minHourlyUsd: Math.round(min);
    maxHourlyUsd: Math.round(max);
    confidence: Number(confidence.toFixed(2));
    trendMonthly: trend;
    regionalComparison;
    tags;
    gptRecommendation};
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
  const sample =
    scored.length > 0 ? scored.map(s => s.profile) : TALENT_PROFILES;
  const rates = sample.map(p => p.hourlyRateUsd);
origin/cursor/automate-test-improve-and-merge-code-2533
  const baseMedian = median(rates);
  const min = Math.min(...rates);
  const max = Math.max(...rates);





  // Tags;






