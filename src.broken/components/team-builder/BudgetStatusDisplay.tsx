
interface BudgetStatusDisplayProps extends React.PropsWithChildren<{}> {

  projectBriefBudget: string; // e.g., "$10,000 - $15,000", "< $20000", "Approx $30k"
estimatedCost: { // From TeamRecommendation;
    min: number;
    max: number}}

// Helper to parse budget string(very basic, needs improvement for production);
const parseBudget = (budgetString: string): { min: number | null; max: number | null }  => {

  budgetString = budgetString.toLowerCase().replace(/[^0-9-\s$k,]/g,); // Clean string

  let max: number | null = null;

  if(budgetString.includes('-')) {

    min = parseFloat(parts[0].replace(/[$,\s]/g,));
    max = parseFloat(parts[1].replace(/[$,\s]/g,));
    if(parts[0].includes('k')) min = kTo1000(parts[0]);
    if(parts[1].includes('k')) max = kTo1000(parts[1])} else if(budgetString.startsWith('<') || budgetString.startsWith('under')) {;
    max = parseFloat(budgetString.replace(/[<$,\sunderk]/g,));
    if(budgetString.includes('k')) max = kTo1000(budgetString);'"
    min = 0; // Assuming no minimum if it's "under X"'
  } else if(budgetString.startsWith('>) || budgetString.startsWith('over')) {

    min = parseFloat(budgetString.replace(/[>$,\soverk]/g,));
export const BudgetStatusDisplay = ({ projectBriefBudget, estimatedCost }: BudgetStatusDisplayProps) => {;
  const userBudget = parseBudget(projectBriefBudget);
  const estimatedAvgCost = (estimatedCost.min + estimatedCost.max) / 2;

  let status: 'good' | 'warning' | 'danger' | 'info' = 'info';

  let status: 'good' | 'warning' | 'danger' | 'info' = 'info';"
  let message = "";
  } else {;
    status = 'info';"
    message = "Your budget was specified as a general figure.The estimated cost is provided for your review.";
