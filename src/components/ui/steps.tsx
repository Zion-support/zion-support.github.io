
import React from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { CheckIcon } from 'lucide-react'

interface StepProps {
  status: &quot;incomplete&quot; | &quot;current&quot; | &quot;complete&quot;;
  label: string;
  description?: string;
  className?: string;
}

export function Step({
  status,
  label,
  description,
  className}: StepProps) {
  return (
    <li
      className={cn(
        &quot;relative flex items-center&quot;,
        {
          &quot;opacity-60&quot;: status === &quot;incomplete&quot;},
        className
      )}
    >
      <div
        className={cn(
          &quot;shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium&quot;,
          {
            &quot;bg-zion-blue-dark border-zion-blue-light text-zion-slate-light&quot;:
              status === &quot;incomplete&quot;,
            &quot;bg-zion-blue border-zion-cyan text-white&quot;:
              status === &quot;current&quot;,
            &quot;bg-zion-purple border-zion-purple text-white&quot;:
              status === &quot;complete&quot;}
        )}
      >
        {status === &quot;complete&quot; ? (
          <CheckIcon className=&quot;h-5 w-5&quot; />
        ) : (
          <span>
            {/* Step number would go here */}
          </span>
        )}
      </div>

      <div className=&quot;ml-4 min-w-0&quot;>
        <h3
          className={cn(&quot;text-sm font-medium&quot;, {
            &quot;text-zion-slate-light&quot;: status === &quot;incomplete&quot;,
            &quot;text-white&quot;: status === &quot;current&quot; || status === &quot;complete&quot;})}
        >
          {label}
        </h3>
        {description && (
          <p className=&quot;text-sm text-zion-slate-light&quot;>{description}</p>
        )}
      </div>
    </li>
  );
}

interface StepsProps {
  currentStep: number;
  className?: string;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={cn(&quot;w-full&quot;, className)}>
      <ol className=&quot;space-y-6 md:flex md:space-y-0 md:space-x-16&quot;>
        {React.Children.map(childrenArray, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          let status: &quot;incomplete&quot; | &quot;current&quot; | &quot;complete&quot; = &quot;incomplete&quot;;
          if (index < currentStep) status = &quot;complete&quot;;
          if (index === currentStep) status = &quot;current&quot;;
          
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status});
        })}
      </ol>
      
      <div className=&quot;hidden md:flex md:mt-4&quot;>
        <div className=&quot;ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light&quot;>
          <div
            className=&quot;h-full bg-zion-purple transition-all&quot;
            style={{
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  );
}
