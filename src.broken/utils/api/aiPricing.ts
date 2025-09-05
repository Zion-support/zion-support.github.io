 function experienceMultiplier (level: 'junior' | 'mid' | 'senior') : number {
  switch (level) {
  case 'junior': return 0.8;
case 'mid': return 1.0;
case 'senior': return 1.3;
default: modelUsed: 'heuristic-v1';
source: 'heuristic' 
}
}modelUsed: 'heuristic-v1';
source: 'heuristic' 
}
}Contract: - Title: $ {
  input.title 
}- Category: $ {
  input.category 
}- Timeline: $ {
  weeks 
}weeks - Scope: $ {
  input.scope || 'Not specified' 
}- Experience Level: $ {
  input.experienceLevel || 'mid' 
}Constraints: - Assume remote contractor. - Use current global market rates. - currency must be "USD" . - min and max are numbers with no commas. - confidence is one of: Low, Medium, High. - rationale is a brief sentence (max 40 words) .`;
Constraints: - Consider global averages and location factor. - currency must be "USD" . - hourlyRate, min, max are numbers with no commas. - confidence is one of: Low, Medium, High. - rationale is a brief sentence (max 40 words) .`;
return {
  currency: 'USD', min, max, confidence, rationale: `$ {
  llm.rationale 
}Heuristic cross-check around $$ {
  roundMoney ( (heuristic.min + heuristic.max) / 2) 
}for sanity.`;
modelUsed: llm.modelUsed;
source: 'hybrid' 
}
}return {
  currency: 'USD', hourlyRate: hourly, min, max, confidence, rationale: `$ {
  llm.rationale 
}Heuristic cross-check for consistency with location and experience bands.`;
modelUsed: llm.modelUsed;
source: 'hybrid' 
}
}