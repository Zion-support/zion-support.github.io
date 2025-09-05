
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { CheckCircle, Circle, ArrowRight } from "lucide-react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======
import React from &quot;react&quot;;
import { CheckCircle, Circle, ArrowRight } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
  action?: string
}

interface OnboardingTrackerProps {
  steps: OnboardingStep[],
  title?: string,
  className?: string
}

export function OnboardingTracker({ 
<<<<<<< HEAD
  steps,
  title = "Complete Your Profile", 
=======
  steps, 
  title = &quot;Complete Your Profile&quot;, 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),

  return (
    <div className={cn(&quot;rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6&quot;, className)}>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white&quot;>{title}</h3>
        <div className=&quot;text-sm font-medium text-zion-cyan&quot;>{progress}% Complete</div>
      </div>
      
      {/* Progress bar */}
      <div className=&quot;w-full h-2 bg-zion-blue rounded-full mb-5&quot;>
        <div 
          className=&quot;h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out&quot;
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Steps list */}
      <div className=&quot;space-y-3&quot;>
        {steps.map((step) => (
          <div key={step.id} className=&quot;flex items-center&quot;>
            <div className=&quot;mr-3&quot;>
              {step.completed ? (
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan&quot; />
=======
import React from "react";

export interface OnboardingStep {_id: string;
  label: string;
  completed: boolean;
  link: string;
  action?: string;}

interface OnboardingTrackerProps {_steps: OnboardingStep[];
  title?: string;
  className?: string;}

export function OnboardingTracker(_{_steps, _title = "Complete Your Profile", _className}: OnboardingTrackerProps) {_const _completedSteps = steps.filter(step => step.completed).length;
  const _progress = Math.round((completedSteps / steps.length) * 100);

  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", _className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{_title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{_progress}% Complete</div>
      </div>
      
      {_/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
          style={_{ width: `${progress}%` }}
        ></div>
      </div>
      
      {_/* Steps list */}
      <div className="space-y-3">
        {_steps.map(_(step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {_step.completed ? (
                <CheckCircle className="h-5 w-5 text-zion-cyan" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <Circle className=&quot;h-5 w-5 text-zion-slate-light&quot; />
              )}
            </div>
<<<<<<< HEAD
            <div className=&quot;flex-1&quot;>
              <div className=&quot;text-sm font-medium text-white&quot;>{step.label}</div>
=======
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{_step.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            {_!step.completed && step.action && (
              <Button 
                asChild 
                variant=&quot;ghost&quot; 
                size=&quot;sm&quot; 
                className=&quot;text-zion-purple hover:text-zion-cyan hover:bg-zion-blue&quot;
              >
                <Link to={step.link}>
<<<<<<< HEAD
                  {step.action} <ArrowRight className=&quot;ml-1 h-4 w-4&quot; />
=======
                  {_step.action} <ArrowRight className="ml-1 h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
