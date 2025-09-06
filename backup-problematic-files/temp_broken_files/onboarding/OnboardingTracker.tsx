 export interface OnboardingStep {;
  id: string;
label: string;
completed: boolean;
link: string;
action?: string ;
interface OnboardingTrackerProps {;
  steps: OnboardingStep[];
title?: string;
className?: string ;
export function OnboardingTracker ({;
  className ;
 OnboardingTrackerProps) {;
  const completedSteps = steps.filter (step => step.completed) .length;
const progress = Math.round (completedSteps /
  cn ("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className) ";"}> <div className="flex items-center justify-between mb-4" > <h3 className="text-lg font-medium text-white" >{;"  title ";"}
 Complete</div> </div> {;"  /* Progress bar */
</div> </div> {;"  /* Steps list */
  steps.map (step) => (<div key= {;"  step.id ";"}className="flex items-center" > <div className="mr-3" >{";"  step.completed ? (<CheckCircle className="h-5 w-5 text-zion-cyan" /> h-5 w-5 text-zion-slate-light"/>) ;"}</div> 
</div> 