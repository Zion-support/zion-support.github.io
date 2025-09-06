<<<<<<< HEAD
=======

}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'

}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'

=======
}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type InsightResponse = {
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
<<<<<<< HEAD
=======
  confidence: number; // 0..1;
  trend_monthly: { label: string; value: number }[];
  regional_comparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];

}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function groupBy<T, K extends string | number>(
  items: T[]
  getKey: (item: T) => K
): Record<K, T[]> {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    (acc, item) => {
      const key = getKey(item);
      (acc[key] |= []).push(item);
      return acc;
    }
    {} as Record<K, T[]>
  );
function extractCountry(location: string): string {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function calculateSimilarityScore(
  targetSkills: string[]
  profile: TalentProfile
): number {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return () => {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967295;
  }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  ];
  const now = new Date ();
  const seed = prng (seed_key);
  const series: { label: string; value: number }[] = [];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const key = getKey(item);
    (acc[key] |= []).push(item);
    return acc
  }, {} as Record<K, T[]>)
}
function extractCountry(location: string): string {
<<<<<<< HEAD

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return undefined;
  try {
    const client = new OpenAI({ apiKey });

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    current = Math.max (base_monthly * 0.7, current * (1 + drift));
    series.push ({ label: months[date.get_month ()], value: Math.round (current) });
  }
  return series;
  // Check condition
if (return undefined) {
  $2
}
  try {
    const client = new OpenAI ({ api_key });
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return undefined
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<InsightResponse | { error: string }>) {
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const byRegion = groupBy(TALENT_PROFILES, (p) => extractCountry(p.location));
  const regionalComparison = Object.entries(byRegion)
    .map(([r, list]) => ({ region: r, medianHourlyUsd: Math.round(median(list.map((p) => p.hourlyRateUsd))) }))
    .sort((a, b) => b.medianHourlyUsd - a.medianHourlyUsd)
    .slice(0, 8);
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  // Tags
  const gptRecommendation = await maybeGetGptRecommendation(body, {
    median: baseMedian
    min
    max
    country
  });
  const response: InsightResponse = {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


  // Tags
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
}
}
}
}
}
  // Tags
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
