<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Steps list */}
      <div className="space-y-3">;
        {steps && steps.map((step,) => (;
          <div key={step && step.id} className="flex items-center">;
            <div className="mr-3">;
              {step && step.completed ? (;
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;
              ) : (;
                <Circle className="h-5 w-5 text-zion-slate-light" />;
              )}
            </div>;
            <div className="flex-1">;
              <div className="text-sm font-medium text-white">{step && step.label}</div>;
            </div>;
            {!step && step.completed && step && step.action && (;
              <Button
                asChild
                variant="ghost" "
                size="sm" "
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;
                <Link href={step && step.link} />;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;
                </Link>;
              </Button>;
            )}
          </div>
        ))}
  title = "Complete Your Profile","
import React from './react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn  } from '@/lib / utils';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx

import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button";
import Link from "next/link";
export interface OnboardingStep {
  id: string;
  label: string;
  completed: boolean;
  link: string;
  title = "Complete Your Profile"
origin/cursor/automate-test-improve-and-merge-code-2533
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx
export interface OnboardingStep {
  id: string,
  label: string,
  completed: boolean,
  link: string,
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  action?: string
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  action?: string;
}
interface OnboardingTrackerProps {
  steps: OnboardingStep[],
  title?: string;
  class_name?: string;
}
export /**
 * OnboardingTracker - Function description
 */
function OnboardingTracker() {
  const completed_steps = steps.filter (step => step.completed).length;
  const progress = Math.round ((completed_steps / steps.length) * 100);
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
  action?: string
}
interface OnboardingTrackerProps {

  title?: string;
  className?: string
}

export function OnboardingTracker({ 
  steps;
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx
  title;
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx
  return (
<<<<<<< HEAD
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
=======
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;
      <div className="flex items - center justify - between mb - 4">;
        <h3 className="text - lg font - medium text - white">{title}</h3>;
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  action?: string;
}
interface OnboardingTrackerProps {,
  steps: OnboardingStep[],
  title?: string;
  class_name?: string;
}
export /**
 * OnboardingTracker - Function description
 */
function OnboardingTracker() {
  const completed_steps = steps.filter (step => step.completed).length;
  const progress = Math.round ((completed_steps / steps.length) * 100);
  return (
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;
      <div className="flex items - center justify - between mb - 4">;
        <h3 className="text - lg font - medium text - white">{title}</h3>;
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;
      </div>;
      {/* Progress bar */}
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;
        <div;
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
          style={{ width: `${progress}%` }}
=======
import React from "react"
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react",
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button",
import Link from "next/link",
export interface OnboardingStep {
  id: string
  label: string
  completed: boolean
  link: string          style={{ width: `${progress}%` }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        ></div>;
      </div>;
      {/* Steps list */}
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD
=======
          style={{ width: `${progress}%` }}`
        ></div>;
      </div>;
      {/* Steps list */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-zion-cyan" />
              ) : (
                <Circle className="h-5 w-5 text-zion-slate-light" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{step.label}</div>
            </div>
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx
<<<<<<< HEAD
            {!step.completed && step.action && (
<<<<<<< HEAD
<<<<<<< HEAD
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue"
              >
                <Link href={step.link}>
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>;
        ))}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
=======
            {!step.completed && step.action && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx
      <div className="space - y-3">;
        {steps.map ((step, ) => (
          <div key={step.id} className="flex items - center">;
            <div className="mr - 3">;
              {step.completed ? (
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : ("
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}"
            </div>;
            <div className="flex - 1">;
              <div className="text - sm font - medium text - white">{step.label}</div>;
            </div>;
            {!step.completed && step.action && (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
              <Button;
                as_child;
                variant="ghost";
                size="sm";
                className="text - zion - purple hover:text - zion - cyan hover:bg - zion - blue";
              >;
                <Link href={step.link} />;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;
                </Link>;
              </Button>)}
          </div>))}
      </div>;
    </div>);
}></div> </div> {
  /* Steps list */ ""
}<div className="space-y-3" > {"
  steps.map ( (step) => (<div key= {
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx


<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
  step.link 
=======
            {!step.completed && step.action && (  step.link 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}> </Link> </Button>) 
}</div>) ) ;
}</div> </div>) ;
}"};

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </div>;
    </div>;
  );
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
}
;
=======
      </div>;
    </div>;
  );
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
=======
  step.link
}> </Link> </Button>)
}</div>) ) ;
}</div> </div>) ;
}"};
      </div>;
    </div>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



  step.id ";
}className="flex items - center" > <div className="mr - 3" > {";
  step.completed ? (<CheckCircle className="h - 5 w - 5 text - zion - cyan" /> h - 5 w - 5 text - zion - slate - light"/>);
}</div> </div> {";
  !step.completed && step.action && (<Button as_child variant=" ghost"size=" sm"className=" text - zion - purple hover:text - zion - cyan hover:bg - zion - blue" > <Link href= {",
  step.link;
} /> </Link> </Button>);
}</div>) );
}</div> </div>);
}"}"
}
;
  action?: string
import React from "react",;
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
export interface OnboardingStep {;
  id: string,;
  label: string,;
  completed: boolean,;
  link: string,;
  action?: string;
}
;
interface OnboardingTrackerProps {;
  steps: OnboardingStep[],;
  title?: string,;
  className?: string;
}

export function OnboardingTracker({ 
  steps,
  title = "Complete Your Profile", 
  className 
}: OnboardingTrackerProps) {
  const completedSteps = steps.filter(step => step.completed).length,
  const progress = Math.round((completedSteps / steps.length) * 100),

  return (
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>
      </div>
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">
        <div 
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out"
;
export function OnboardingTracker({;
  steps,;
  title = "Complete Your Profile",;
  className;
}: OnboardingTrackerProps) {;
  const completedSteps = steps.filter(step => step.completed).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  return (;
    <div className={cn("rounded-lg border border-zion-blue-light bg-zion-blue-dark/60 p-4 md:p-6", className)}>;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white">{title}</h3>;
        <div className="text-sm font-medium text-zion-cyan">{progress}% Complete</div>;
      </div>;
      {/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">;
        <div;
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out";
          style={{ width: `${progress}%` }}
        ></div>;
      </div>;
      {/* Steps list */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className="mr-3">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-zion-cyan" />
              ) : (
                <Circle className="h-5 w-5 text-zion-slate-light" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{step.label}</div>
            </div>
            {!step.completed && step.action && (
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue"
              >
                <Link href={step.link}>
                  {step.action} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>;
        ))}
      </div>;
    </div>;
  );
}
;
          </div>
        ))}
      </div>
    </div>
  );

}></div> </div> {;
  /* Steps list */ ";
}<div className="space-y-3" > {;
  steps.map ( (step) => (<div key= {;
  step.id ";
}className="flex items-center" > <div className="mr-3" > {";
  step.completed ? (<CheckCircle className="h-5 w-5 text-zion-cyan" /> h-5 w-5 text-zion-slate-light"/>) ;
}</div> </div> {";
  !step.completed && step.action && (<Button asChild variant=" ghost"size=" sm"className=" text-zion-purple hover:text-zion-cyan hover:bg-zion-blue" > <Link href= {;
  step.link ;
}> </Link> </Button>) ;
}</div>) ) ;
}</div> </div>) ;
}"
<<<<<<< HEAD:src/components/onboarding/OnboardingTracker.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/onboarding/OnboardingTracker.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/OnboardingTracker.tsx
=======
{/* Progress bar */}
      <div className="w-full h-2 bg-zion-blue rounded-full mb-5">"
</div>
        <div;"
          className="h-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full transition-all duration-500 ease-out""
      {/* Steps list */}"
      <div className="space-y-3">;"
</div>"
          <div key={step && step.id} className="flex items-center">;"
            <div className="mr-3">;"
                <CheckCircle className="h-5 w-5 text-zion-cyan" />;"
"
                <Circle className="h-5 w-5 text-zion-slate-light" />;"

            </div>;"
            <div className="flex-1">;"
              <div className="text-sm font-medium text-white">{step && step.label}</div>;"
            </div>;
              <Button;
                asChild;"
                variant="ghost"""
                size="sm"""
                className="text-zion-purple hover:text-zion-cyan hover:bg-zion-blue">;"

                <Link href={step && step.link}>;
                  {step && step.action} <ArrowRight className="ml-1 h-4 w-4" />;"

                ;
    <div className={cn ("rounded - lg border border - zion - blue - light bg - zion - blue - dark / 60 p - 4 md:p - 6", class_name)}>;"
      <div className="flex items - center justify - between mb - 4">;"
        <h3 className="text - lg font - medium text - white">{title}</h3>;""
        <div className="text - sm font - medium text - zion - cyan">{progress}% Complete</div>;"
      <div className="w - full h - 2 bg - zion - blue rounded - full mb - 5">;"
          className="h - 2 bg - gradient - to - r from - zion - purple to - zion - cyan rounded - full transition - all duration - 500 ease - out";"
          style={{ width: `${progress}%` }}
        ></div>;
      <div className="space - y-3">;"
          <div key={step.id} className="flex items - center">;"
            <div className="mr - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan" />) : ("
)"
                <Circle className="h - 5 w - 5 text - zion - slate - light" />)}"

            <div className="flex - 1">;"
              <div className="text - sm font - medium text - white">{step.label}</div>;"
                as_child;"
                variant="ghost";""
                size="sm";""
                className="text - zion - purple hover:text - zion - cyan hover:bg - zion - blue";"
              >;

                <Link href={step.link}>;
                  {step.action} <ArrowRight className="ml - 1 h - 4 w - 4" />;"

              )}
          </div>))}
    </div>);
}></div> </div> {"
}<div className="space-y-3" > {"
  steps.map ( (step) => (<div key= {


  step.link;)
}>  ) 
}</div>) ) ;
}</div> </div>) ;
}className="flex items - center" > <div className="mr - 3" > {";"
  step.completed ? (<CheckCircle className="h - 5 w - 5 text - zion - cyan" /> h - 5 w - 5 text - zion - slate - light"/>);"
}</div> </div> {";""
  !step.completed && step.action && (<Button as_child variant=" ghost"size=" sm"className=" text - zion - purple hover:text - zion - cyan hover:bg - zion - blue" > <Link href= {"
)
}>  );
}</div>) );
}</div> </div>);"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/OnboardingTracker.tsx
