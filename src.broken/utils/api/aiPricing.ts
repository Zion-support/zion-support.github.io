<<<<<<< HEAD
import OpenAI from 'openai',
export type ClientBudgetRequest = {
  title: string,
  category: string,
  timelineWeeks?: number, // e.g., 2 for a 2-week contract
  scope?: string, // brief description or scope size
  experienceLevel?: 'junior' | 'mid' | 'senior'
},

export type TalentRateRequest = {
  skills: string[],
  yearsExperience: number,
  location: string
},

export type BudgetSuggestion = {
  currency: 'USD',
  min: number, // inclusive
  max: number, // inclusive
  confidence: 'Low' | 'Medium' | 'High',
  rationale: string,
  modelUsed: string,
  source: 'openai' | 'heuristic' | 'hybrid'
},

export type TalentRateSuggestion = {
  currency: 'USD',
  hourlyRate: number,
  min: number,
  max: number,
  confidence: 'Low' | 'Medium' | 'High',
  rationale: string,
  modelUsed: string,
  source: 'openai' | 'heuristic' | 'hybrid'
},

function roundMoney(value: number): number {
  if (!isFinite(value)) return 0,
  // Round to nearest $5 for cleaner display
  return Math.max(0, Math.round(value / 5) * 5)
}

function clampRange(min: number, max: number): { min: number, max: number } {
  if (min > max) {
    return { min: max, max: min }
  }
  return { min, max }
}

function inferExperienceLevelFromYears(years?: number): 'junior' | 'mid' | 'senior' {
  if (typeof years !== 'number') return 'mid',
  if (years < 2) return 'junior',
  if (years < 6) return 'mid',
  return 'senior'
}

function locationCostIndex(location: string): number {
  const loc = location.toLowerCase(),
  // Simple heuristics. Expand as needed.
  if (/(brazil|india|pakistan|philippines|vietnam|indonesia|nigeria|egypt)/i.test(loc)) return 0.75,
  if (/(europe|germany|france|uk|united kingdom|spain|italy|portugal|netherlands|sweden|norway|denmark|finland|austria|switzerland)/i.test(loc)) return 1.05,
  if (/(usa|united states|canada|australia|new zealand|singapore|hong kong|uae|dubai)/i.test(loc)) return 1.15,
  return 1.0
}

function baseHourlyForSkillsOrCategory(skillsOrCategory: string[]): number {
  const text = skillsOrCategory.join(' ').toLowerCase(),
  // Baselines by detected domain
  if (/react|frontend|javascript|typescript|ui/.test(text)) return 45,
  if (/devops|kubernetes|aws|gcp|azure|terraform|sre|platform/.test(text)) return 60,
  if (/data|ml|machine learning|ai|analytics|big data|spark|pytorch|tensorflow/.test(text)) return 65,
  if (/mobile|ios|android|react native|flutter/.test(text)) return 55,
  if (/backend|api|node|django|rails|java|go|rust|spring|express/.test(text)) return 55,
  if (/design|ux|ui|product design|figma|illustrator|photoshop/.test(text)) return 40,
  return 50, // general software baseline
}
=======
import OpenAI from 'openai';

export type ClientBudgetRequest = {_title: string;
  category: string;
  timelineWeeks?: number; // e.g., _2 for a 2-week contract
  scope?: string; // brief description or scope size
  experienceLevel?: 'junior' | 'mid' | 'senior';};

export type TalentRateRequest = {_skills: string[];
  yearsExperience: number;
  location: string;};

export type BudgetSuggestion = {_currency: 'USD';
  min: number; // inclusive
  max: number; // inclusive
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  modelUsed: string;
  source: 'openai' | 'heuristic' | 'hybrid';};

export type TalentRateSuggestion = {_currency: 'USD';
  hourlyRate: number;
  min: number;
  max: number;
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  modelUsed: string;
  source: 'openai' | 'heuristic' | 'hybrid';};

function roundMoney(_value: number): number {_if (!isFinite(value)) return 0;
  // Round to nearest $5 for cleaner display
  return Math.max(0, _Math.round(value / 5) * 5);}

function clampRange(_min: number, _max: number): {_min: number; max: number} {_if (min > max) {
    return { min: max, _max: min};
  }
  return {_min, _max};
}

function inferExperienceLevelFromYears(_years?: number): 'junior' | 'mid' | 'senior' {_if (typeof years !== 'number') return 'mid';
  if (years < 2) return 'junior';
  if (years < 6) return 'mid';
  return 'senior';}

function locationCostIndex(_location: string): number {_const _loc = location.toLowerCase();
  // Simple heuristics. Expand as needed.
  if (/(brazil|india|pakistan|philippines|vietnam|indonesia|nigeria|egypt)/i.test(loc)) return 0.75;
  if (/(europe|germany|france|uk|united kingdom|spain|italy|portugal|netherlands|sweden|norway|denmark|finland|austria|switzerland)/i.test(loc)) return 1.05;
  if (/(usa|united states|canada|australia|new zealand|singapore|hong kong|uae|dubai)/i.test(loc)) return 1.15;
  return 1.0;}

function baseHourlyForSkillsOrCategory(_skillsOrCategory: string[]): number {_const _text = skillsOrCategory.join(' ').toLowerCase();
  // Baselines by detected domain
  if (/react|frontend|javascript|typescript|ui/.test(text)) return 45;
  if (/devops|kubernetes|aws|gcp|azure|terraform|sre|platform/.test(text)) return 60;
  if (/data|ml|machine learning|ai|analytics|big data|spark|pytorch|tensorflow/.test(text)) return 65;
  if (/mobile|ios|android|react native|flutter/.test(text)) return 55;
  if (/backend|api|node|django|rails|java|go|rust|spring|express/.test(text)) return 55;
  if (/design|ux|ui|product design|figma|illustrator|photoshop/.test(text)) return 40;
  return 50; // general software baseline}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function experienceMultiplier(_level: 'junior' | 'mid' | 'senior'): number {_switch (level) {
    case 'junior':
      return 0.8,
    case 'mid':
      return 1.0,
    case 'senior':
      return 1.3,
    default:
<<<<<<< HEAD
      return 1.0
  }
}

function computeHeuristicClientBudget(input: ClientBudgetRequest): BudgetSuggestion {
  const { title, category, experienceLevel, timelineWeeks } = input,
  const exp = experienceLevel ?? 'mid',
  const skills: string[] = [title, category].filter(Boolean),
  const base = baseHourlyForSkillsOrCategory(skills),
  const hourly = base * experienceMultiplier(exp),
  const weeks = typeof timelineWeeks === 'number' && timelineWeeks > 0 ? timelineWeeks : 2,
  const hours = weeks * 40, // assume full-time contract equivalent
  const mid = hourly * hours,
  const min = roundMoney(mid * 0.8),
  const max = roundMoney(mid * 1.2),
  const range = clampRange(min, max),
  return {
    currency: 'USD',
    min: range.min,
    max: range.max,
    confidence: 'Medium',
    rationale: `Estimated using heuristics. Baseline hourly ${hourly.toFixed(0)} derived from skills (${skills.join()}) and experience (${exp}). ${hours} hours over ${weeks} weeks.`,
=======
      return 1.0;}
}

function computeHeuristicClientBudget(_input: ClientBudgetRequest): BudgetSuggestion {_const { title, _category, _experienceLevel, _timelineWeeks} = input;
  const _exp = experienceLevel ?? 'mid';
  const skills: string[] = [title, category].filter(Boolean);
  const _base = baseHourlyForSkillsOrCategory(skills);
  const _hourly = base * experienceMultiplier(exp);
  const _weeks = typeof timelineWeeks === 'number' && timelineWeeks > 0 ? timelineWeeks : 2;
  const _hours = weeks * 40; // assume full-time contract equivalent
  const _mid = hourly * hours;
  const _min = roundMoney(mid * 0.8);
  const _max = roundMoney(mid * 1.2);
  const _range = clampRange(min, max);
  return {_currency: 'USD', _min: range.min, _max: range.max, _confidence: 'Medium', _rationale: `Estimated using heuristics. Baseline hourly ${hourly.toFixed(0)} derived from skills (${_skills.join(', _')}) and experience (${_exp}). ${_hours} hours over ${_weeks} weeks.`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    modelUsed: 'heuristic-v1',
    source: 'heuristic'}
}

<<<<<<< HEAD
function computeHeuristicTalentRate(input: TalentRateRequest): TalentRateSuggestion {
  const { skills, yearsExperience, location } = input,
  const expLevel = inferExperienceLevelFromYears(yearsExperience),
  const base = baseHourlyForSkillsOrCategory(skills),
  const hourlyBase = base * experienceMultiplier(expLevel),
  const locality = locationCostIndex(location || ''),
  const hourly = hourlyBase * locality,
  const min = roundMoney(hourly * 0.9),
  const max = roundMoney(hourly * 1.3),
  const range = clampRange(min, max),
  return {
    currency: 'USD',
    hourlyRate: roundMoney(hourly),
    min: range.min,
    max: range.max,
    confidence: 'Medium',
    rationale: `Heuristic estimate using skills (${skills.join()}) baseline, experience (${expLevel}) and location index (${locality.toFixed(2)}).`,
=======
function computeHeuristicTalentRate(_input: TalentRateRequest): TalentRateSuggestion {_const { skills, _yearsExperience, _location} = input;
  const _expLevel = inferExperienceLevelFromYears(yearsExperience);
  const _base = baseHourlyForSkillsOrCategory(skills);
  const _hourlyBase = base * experienceMultiplier(expLevel);
  const _locality = locationCostIndex(location || '');
  const _hourly = hourlyBase * locality;
  const _min = roundMoney(hourly * 0.9);
  const _max = roundMoney(hourly * 1.3);
  const _range = clampRange(min, max);
  return {_currency: 'USD', _hourlyRate: roundMoney(hourly), _min: range.min, _max: range.max, _confidence: 'Medium', _rationale: `Heuristic estimate using skills (${skills.join(', _')}) baseline, experience (${_expLevel}) and location index (${_locality.toFixed(2)}).`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    modelUsed: 'heuristic-v1',
    source: 'heuristic'}
}

<<<<<<< HEAD
async function callOpenAIForClientBudget(input: ClientBudgetRequest): Promise<BudgetSuggestion | null> {
  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) return null,
  try {
    const client = new OpenAI({ apiKey }),
    const weeks = input.timelineWeeks ?? 2,
    const prompt = `You are an expert hiring economist. Suggest a realistic budget range in USD for the following contract. Output STRICT JSON only with keys: currency, min, max, confidence, rationale.
=======
async function callOpenAIForClientBudget(_input: ClientBudgetRequest): Promise<BudgetSuggestion | null> {_const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  try {
    const _client = new OpenAI({ apiKey});
    const _weeks = input.timelineWeeks ?? 2;
    const _prompt = `You are an expert hiring economist. Suggest a realistic budget range in USD for the following contract. Output STRICT JSON only with keys: currency, min, max, confidence, rationale.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

Contract:
- Title: ${_input.title}
- Category: ${_input.category}
- Timeline: ${_weeks} weeks
- Scope: ${_input.scope || 'Not specified'}
- Experience Level: ${_input.experienceLevel || 'mid'}

Constraints:
- Assume remote contractor.
- Use current global market rates.
- currency must be &quot;USD&quot;.
- min and max are numbers with no commas.
- confidence is one of: Low, Medium, High.
- rationale is a brief sentence (max 40 words).`,

<<<<<<< HEAD
    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'You output only JSON. No prose. Be concise and factual.' },
        { role: 'user', content: prompt }]}),

    const content = response.choices?.[0]?.message?.content || '',
    const jsonStart = content.indexOf('{'),
    const jsonEnd = content.lastIndexOf('}'),
    const json = JSON.parse(content.slice(jsonStart, jsonEnd + 1)),

    const suggestion: BudgetSuggestion = {
      currency: 'USD',
      min: roundMoney(Number(json.min)),
      max: roundMoney(Number(json.max)),
      confidence: (json.confidence as BudgetSuggestion['confidence']) || 'Medium',
      rationale: String(json.rationale || ''),
      modelUsed: response.model || (process.env.OPENAI_MODEL || 'gpt-4o-mini'),
      source: 'openai'},

    const range = clampRange(suggestion.min, suggestion.max),
    suggestion.min = range.min,
    suggestion.max = range.max,

    return suggestion
  } catch (error) {
    return null
  }
}

async function callOpenAIForTalentRate(input: TalentRateRequest): Promise<TalentRateSuggestion | null> {
  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) return null,
  try {
    const client = new OpenAI({ apiKey }),
    const prompt = `You are an expert compensation analyst. Recommend an hourly rate in USD and a reasonable range for a candidate profile. Output STRICT JSON with keys: currency, hourlyRate, min, max, confidence, rationale.

Candidate:
- Skills: ${input.skills.join()}
- Years Experience: ${input.yearsExperience}
- Location: ${input.location}
=======
    const _response = await client.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _temperature: 0.2, _messages: [
        { role: 'system', _content: 'You output only JSON. No prose. Be concise and factual.'},
        {_role: 'user', _content: prompt}]});

    const _content = response.choices?.[0]?.message?.content || '';
    const _jsonStart = content.indexOf('{_');
    const _jsonEnd = content.lastIndexOf('}');
    const _json = JSON.parse(content.slice(jsonStart, jsonEnd + 1));

    const suggestion: BudgetSuggestion = {_currency: 'USD', _min: roundMoney(Number(json.min)), _max: roundMoney(Number(json.max)), _confidence: (json.confidence as BudgetSuggestion['confidence']) || 'Medium', _rationale: String(json.rationale || ''), _modelUsed: response.model || (process.env.OPENAI_MODEL || 'gpt-4o-mini'), _source: 'openai'};

    const _range = clampRange(suggestion.min, suggestion.max);
    suggestion.min = range.min;
    suggestion.max = range.max;

    return suggestion;
  } catch (error) {_return null;}
}

async function callOpenAIForTalentRate(_input: TalentRateRequest): Promise<TalentRateSuggestion | null> {_const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  try {
    const _client = new OpenAI({ apiKey});
    const _prompt = `You are an expert compensation analyst. Recommend an hourly rate in USD and a reasonable range for a candidate profile. Output STRICT JSON with keys: currency, hourlyRate, min, max, confidence, rationale.

Candidate:
- Skills: ${_input.skills.join(', _')}
- Years Experience: ${_input.yearsExperience}
- Location: ${_input.location}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

Constraints:
- Consider global averages and location factor.
- currency must be &quot;USD&quot;.
- hourlyRate, min, max are numbers with no commas.
- confidence is one of: Low, Medium, High.
- rationale is a brief sentence (max 40 words).`,

<<<<<<< HEAD
    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: 'You output only JSON. No prose. Be concise and factual.' },
        { role: 'user', content: prompt }]}),

    const content = response.choices?.[0]?.message?.content || '',
    const jsonStart = content.indexOf('{'),
    const jsonEnd = content.lastIndexOf('}'),
    const json = JSON.parse(content.slice(jsonStart, jsonEnd + 1)),

    const suggestion: TalentRateSuggestion = {
      currency: 'USD',
      hourlyRate: roundMoney(Number(json.hourlyRate)),
      min: roundMoney(Number(json.min)),
      max: roundMoney(Number(json.max)),
      confidence: (json.confidence as TalentRateSuggestion['confidence']) || 'Medium',
      rationale: String(json.rationale || ''),
      modelUsed: response.model || (process.env.OPENAI_MODEL || 'gpt-4o-mini'),
      source: 'openai'},

    const range = clampRange(suggestion.min, suggestion.max),
    suggestion.min = range.min,
    suggestion.max = range.max,

    return suggestion
  } catch (error) {
    return null
  }
}

export async function generateClientBudgetSuggestion(input: ClientBudgetRequest): Promise<BudgetSuggestion> {
  const heuristic = computeHeuristicClientBudget(input),
  const llm = await callOpenAIForClientBudget(input),
  if (!llm) return heuristic,

  // Simple reconciliation: average ranges, keep higher confidence if close
  const min = roundMoney((heuristic.min + llm.min) / 2),
  const max = roundMoney((heuristic.max + llm.max) / 2),
  const confidence: BudgetSuggestion['confidence'] = llm.confidence || 'Medium',
=======
    const _response = await client.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _temperature: 0.2, _messages: [
        { role: 'system', _content: 'You output only JSON. No prose. Be concise and factual.'},
        {_role: 'user', _content: prompt}]});

    const _content = response.choices?.[0]?.message?.content || '';
    const _jsonStart = content.indexOf('{_');
    const _jsonEnd = content.lastIndexOf('}');
    const _json = JSON.parse(content.slice(jsonStart, jsonEnd + 1));

    const suggestion: TalentRateSuggestion = {_currency: 'USD', _hourlyRate: roundMoney(Number(json.hourlyRate)), _min: roundMoney(Number(json.min)), _max: roundMoney(Number(json.max)), _confidence: (json.confidence as TalentRateSuggestion['confidence']) || 'Medium', _rationale: String(json.rationale || ''), _modelUsed: response.model || (process.env.OPENAI_MODEL || 'gpt-4o-mini'), _source: 'openai'};

    const _range = clampRange(suggestion.min, suggestion.max);
    suggestion.min = range.min;
    suggestion.max = range.max;

    return suggestion;
  } catch (error) {_return null;}
}

export async function generateClientBudgetSuggestion(_input: ClientBudgetRequest): Promise<BudgetSuggestion> {_const _heuristic = computeHeuristicClientBudget(input);
  const _llm = await callOpenAIForClientBudget(input);
  if (!llm) return heuristic;

  // Simple reconciliation: average ranges; keep higher confidence if close
  const _min = roundMoney((heuristic.min + llm.min) / 2);
  const _max = roundMoney((heuristic.max + llm.max) / 2);
  const confidence: BudgetSuggestion['confidence'] = llm.confidence || 'Medium';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return {
    currency: 'USD', _min, _max, _confidence, _rationale: `${llm.rationale} Heuristic cross-check around $${_roundMoney((heuristic.min + heuristic.max) / 2)} for sanity.`,
    modelUsed: llm.modelUsed,
    source: 'hybrid'}
}

<<<<<<< HEAD
export async function generateTalentRateSuggestion(input: TalentRateRequest): Promise<TalentRateSuggestion> {
  const heuristic = computeHeuristicTalentRate(input),
  const llm = await callOpenAIForTalentRate(input),
  if (!llm) return heuristic,

  const hourly = roundMoney((heuristic.hourlyRate + llm.hourlyRate) / 2),
  const min = roundMoney((heuristic.min + llm.min) / 2),
  const max = roundMoney((heuristic.max + llm.max) / 2),
  const confidence: TalentRateSuggestion['confidence'] = llm.confidence || 'Medium',
=======
export async function generateTalentRateSuggestion(_input: TalentRateRequest): Promise<TalentRateSuggestion> {_const _heuristic = computeHeuristicTalentRate(input);
  const _llm = await callOpenAIForTalentRate(input);
  if (!llm) return heuristic;

  const _hourly = roundMoney((heuristic.hourlyRate + llm.hourlyRate) / 2);
  const _min = roundMoney((heuristic.min + llm.min) / 2);
  const _max = roundMoney((heuristic.max + llm.max) / 2);
  const confidence: TalentRateSuggestion['confidence'] = llm.confidence || 'Medium';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return {
    currency: 'USD', _hourlyRate: hourly, _min, _max, _confidence, _rationale: `${llm.rationale} Heuristic cross-check for consistency with location and experience bands.`,
    modelUsed: llm.modelUsed,
    source: 'hybrid'}
}
