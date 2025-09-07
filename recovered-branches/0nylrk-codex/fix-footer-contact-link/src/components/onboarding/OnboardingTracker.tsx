




import React from "react";""
import {CheckCircle, Circle, ArrowRight} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";""
import React from "react",""
import { CheckCircle, Circle, ArrowRight } from "lucide-react",""
import { cn } from "@/lib/utils",""
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";"
export interface OnboardingStep {
  // TODO: Implement
}
  id: string;,
  label: string;
  completed: boolean;,
  link: string;
  action?: string;
interface OnboardingTrackerProps {
  // TODO: Implement
  steps: OnboardingStep[]

  title?: string;
  className?: string;
export function OnboardingTracker({
  steps;
"
  title = "Complete Your Profile""
  className;"
import { Button } from "@/components/ui/button",""
import { Link } from "react-router-dom","
  // TODO: Implement
  id: string,
  label: string,
  completed: boolean,
  link: string,

  // TODO: Implement
  steps: OnboardingStep[],;

export function OnboardingTracker({ ;
  steps;"
import React from "react",;""
import { CheckCircle, Circle, ArrowRight } from "lucide-react",;""
import { cn } from "@/lib/utils",;""
import { Button } from "@/components/ui/button",;""
import { Link } from "react-router-dom",;"
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;

interface OnboardingTrackerProps {;


  // TODO: Implement
  action?: string;"
  title = "Complete Your Profile","
  className;)
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),

  return ()"
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>"
</div>"
      <div className="flex items-center justify-between mb-4">"
        <h3 className="text-lg font-medium text-white">{title}</h3>""
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">"
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;"
      <div className="flex items-center justify-between mb-4">;"
        <h3 className="text-lg font-medium text-white">{title}</h3>;""
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;"
      </div>;"
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;"
</div>
        <div;"
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""
          style={{ width: `${progress}%` }}></div>;
      </div>;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""`;
          style={{ width: `${progress}%` }}
        ></div>
      <div className="space-y-3">;"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;"
                <Circle className="h-5 w-5 text-zion-slate-light" />;"

          </div>;"`;