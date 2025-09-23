import OpenAI from 'openai';

export type ClientBudgetRequest ={
  title: string;
  category: string;
  timelineWeeks?: number; // e.g., 2 for a 2-week contract
  scope?: string; // brief description or scope size
  experienceLevel?: 'junior' | 'mid' | 'senior';
};

export type TalentRateRequest ={
  skills: string[];
  yearsExperience: number;
  location: string;
};

export type BudgetSuggestion ={
  currency: 'USD';
  min: number; // inclusive
  max: number; // inclusive
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  modelUsed: string;
  source: 'openai' | 'heuristic' | 'hybrid';
};

export type TalentRateSuggestion ={
  currency: 'USD';
  hourlyRate: number;
  min: number;
  max: number;
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  modelUsed: string;
  source: 'openai' | 'heuristic' | 'hybrid';
};

function roundMoney(value: number): number {
  if (!isFinite(value)) return 0;
  // Round to nearest $5 for cleaner display
  return Math.max(0, Math.round(value / 5) * 5);
}

function clampRange(min: number, max: number): { min: number; max: number } {
  if (min > max) {
    return { min: max, max: min };
  }
  return { min, max };
}

function inferExperienceLevelFromYears(years?: number): 'junior' | 'mid' | 'senior' {
  if (typeof years !== 'number') return 'mid';
  if (years < 2) return 'junior';
  if (years < 6) return 'mid';
  return 'senior';
}

function locationCostIndex(location: string): number {
  const loc = location.toLowerCase();
  // Simple heuristics. Expand as needed.
  if (/(brazil|india|pakistan|philippines|vietnam|indonesia|nigeria|egypt)/i.test(loc)) return 0.75;
  if (/(europe|germany|france|uk|united kingdom|spain|italy|portugal|netherlands|sweden|norway|denmark|finland|austria|switzerland)/i.test(loc)) return 1.0o5;
  if (/(usa|united states|canada|australia|new zealand|singapore|hong kong|uae|dubai)/i.test(loc)) return 1.15;
  return 1.0;
}

function baseHourlyForSkillsOrCategory(skillsOrCategory: string[]): number {
  const text = skillsOrCategory.join(' ').toLowerCase();
  // Baselines by detected domain
  if (/react|frontend|javascript|typescript|ui/.test(text)) return 45;
  if (/devops|kubernetes|aws|gcp|azure|terraform|sre|platform/.test(text)) return 60;
  if (/data|ml|machine learning|ai|analytics|big data|spark|pytorch|tensorflow/.test(text)) return 65;
  if (/mobile|ios|android|react native|flutter/.test(text)) return 55;
  if (/backend|api|node|django|rails|java|go|rust|spring|express/.test(text)) return 55;
  if (/design|ux|ui|product design|figma|illustrator|photoshop/.test(text)) return 40;
  return 50; // general software baseline
}

function experienceMultiplier(level: 'junior' | 'mid' | 'senior'): number {
  switch (level) {
    case 'junior':
      return 0.8;
    case 'mid':
      return 1.0;
    case 'senior':
      return 1.3;
    default:
      return 1.0;
  }
}

function computeHeuristicClientBudget(input: ClientBudgetRequest): BudgetSuggestion {
  const { title, category, experienceLevel, timelineWeeks } = input;
  const exp = experienceLevel ?? 'mid';
  const skills: string[] = [title, category].filter(Boolean);
  const base = baseHourlyForSkillsOrCategory(skills);
  const hourly = base * experienceMultiplier(exp);
  const weeks = typeof timelineWeeks === 'number' && timelineWeeks > 0 ? timelineWeeks : 2;
  const hours = weeks * 40; // assume full-time contract equivalent
  const mid = hourly * hours;
  const min = roundMoney(mid * 0.8);
  const max = roundMoney(mid * 1.2);
  const range = clampRange(min, max);
  return {
    currency: 'USD',
    min: range.min,
    max: range.max,
    confidence: 'Medium',
    rationale: `Estimated using heuristics. Baseline hourly ${hourly.toFixed(0)} derived from skills (${skills.join(', ')}) and experience (${exp}). ${hours} hours over ${weeks} weeks.`,
    modelUsed: 'heuristic-v1',
