
import React from "react";
import Link from "next/link";

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
              ) : (
                <Circle className="h-5 w-5 text-zion-slate-light" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{_step.label}</div>
            </div>
            {_!step.completed && step.action && (
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue"
              >
                <Link href={step.link}>
                  {_step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
