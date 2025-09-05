
import React from &quot;react&quot;;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from &quot;next/link&quot;;

export interface OnboardingStep {
  id: string;
  label: string;
  completed: boolean;
  link: string;
  action?: string;
}

interface OnboardingTrackerProps {
  steps: OnboardingStep[];
  title?: string;
  className?: string;
}

export function OnboardingTracker({ 
  steps, 
  title = &quot;Complete Your Profile&quot;, 
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);

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
              ) : (
                <Circle className=&quot;h-5 w-5 text-zion-slate-light&quot; />
              )}
            </div>
            <div className=&quot;flex-1&quot;>
              <div className=&quot;text-sm font-medium text-white&quot;>{step.label}</div>
            </div>
            {!step.completed && step.action && (
              <Button 
                asChild 
                variant=&quot;ghost&quot; 
                size=&quot;sm&quot; 
                className=&quot;text-zion-purple hover:text-zion-cyan hover:bg-zion-blue&quot;
              >
                <Link href={step.link}>
                  {step.action} <ArrowRight className=&quot;ml-1 h-4 w-4&quot; />
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
