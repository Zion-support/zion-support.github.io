export type SearchType = 'all' | 'talent' | 'jobs' | 'projects'
  availability?: any
function extractAvailability(text: string): ParsedFilters['availability'
  if (/(full\s*-?\s*time)/
  if (/(part\s*-?\s*time)/
  if (/(contract|freelance)/
  if (/(talent|experts?|developers?|engineers?|designers?|freelancers?)/
  if (/(jobs?|roles?|openings?|hiring)/
  if (/(projects?|gigs?)/