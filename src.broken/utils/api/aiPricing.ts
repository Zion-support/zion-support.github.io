import OpenAI from 'openai'
  experienceLevel?: any
function inferExperienceLevelFromYears(years?: number): any
  if (typeof years != 'number') return 'mid'
  if (years 