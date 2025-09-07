<<<<<<< HEAD
=======



<<<<<<< HEAD
  description?: string;
  className?: string;
}
export function Step(): any ({;
  status;
  label;
  description;
  className}: StepProps) {;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {cn} from "@/lib/utils";

import {CheckIcon} from "lucide-react";
<<<<<<< HEAD
interface StepProps {;"
=======
<<<<<<< HEAD
import React from "react",
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
interface StepProps {

  status: "incomplete" | "current" | "complete"
  label: string

  description?: string;
import { cn } from "@/lib/utils",
import { CheckIcon } from "lucide-react",
=======
interface StepProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}

  status;
  label;
  description;
  className}: StepProps) {;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface StepProps {

  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,
<<<<<<< HEAD

=======
  className?: string
}

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function Step({;
  status;
  label;
  description;
<<<<<<< HEAD
=======
export function Step({
  status,
  label,
  description,


  className}: StepProps) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  status,
  label,
  description,

  className}: StepProps) {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <li
      className={cn(
        "relative flex items-center"
        {

        className

      )}>;
      <div;
        className={cn("
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium"
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":"
              status === "incomplete""
            "bg-zion-blue border-zion-cyan text-white":"
              status === "current""
            "bg-zion-purple border-zion-purple text-white":"
              status === "complete"}

<<<<<<< HEAD
  className}: StepProps) {
  return (
    <li

      className={cn(
        "relative flex items-center",
        {
          "opacity-60": status === "incomplete"}
          "opacity-60": status === "incomplete"},
        className
      )}
    >
      <div
        className={cn(
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status === "incomplete",
            "bg-zion-blue border-zion-cyan text-white":
              status === "current",
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      >"
        {status === "complete" ? ("
          <CheckIcon className="h-5 w-5" />
        ) : (
<<<<<<< HEAD
=======
          <span>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import { cn } from "@/lib/utils",;

import { CheckIcon } from "lucide-react",;
interface StepProps {;"

  status: "incomplete" | "current" | "complete",;
  label: string,;
  description?: string,;
  className?: string;
}
;

          "opacity-60": status === "incomplete"},;
        className;
      )}
    >

              status === "complete"}
        )}
      >;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Step number would go here */}
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">
<<<<<<< HEAD
=======
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}
            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}
        >
          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  )
}


interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete";
            "text-white": status === "current" |status === "complete"})}

            "text-zion-slate-light": status === "incomplete",

            "text-white": status === "current" || status === "complete"})}

interface StepsProps {}
  currentStep: number;
  className?: string;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;

interface StepsProps {
  currentStep: number
  className?: string;
  children: React.ReactNode
}

export function Steps() { return null; }
            "text-white": status === "current" || status === "complete"})}>;

            {/* Step number would go here */}
          </span>;
        )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======

            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}


        >
<<<<<<< HEAD
      </div>;
=======
=======
      </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="ml-4 min-w-0">;
        <h3
          className={cn("text-sm font-medium", {
            "text-zion-slate-light": status === "incomplete"
            "text-white": status === "current" || status === "complete"})}>;
<<<<<<< HEAD

import React from "react",;
import { cn } from "@/lib/utils",;
import { CheckIcon } from "lucide-react",;
;
interface StepProps {;
  status:"incomplete" | "current" | "complete",;
  label:string,;
  description?:string,;
  className?:string;
}
;
export function Step({;
  status,;
  label,;
  description,;
  className} StepProps) {;
  return (;
    <li;
      className={cn(;
        "relative flex items-center",;
        {;
          "opacity-60":status === "incomplete"},;
        className;
      )}
    >;
      <div;
        className={cn(;
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",;
          {;
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":;
              status === "incomplete",;
            "bg-zion-blue border-zion-cyan text-white":;
              status === "current",;
            "bg-zion-purple border-zion-purple text-white":;
              status === "complete"}
        )}
      >;
        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) :(;
          <span>;            {/* Step number would go here */}
          </span>;
        )}
      </div>;
;
      <div className="ml-4 min-w-0">;
        <h3;
          className={cn("text-sm font-medium", {;
            "text-zion-slate-light":status === "incomplete",;
            "text-white":status === "current" || status === "complete"})}
        >;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {label}

        </h3>;
        {description && (;"
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

interface StepsProps {;
  currentStep: number,;
=======
  );
}




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface StepsProps {
  currentStep: number

interface StepsProps {;
  currentStep: number,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  className?: string;
  children: React && React.ReactNode;
}

export function Steps() { return null; }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function Steps({ currentStep, className, children }: StepsProps) {;


  const childrenArray = React.Children.toArray(children);
<<<<<<< HEAD
export function Steps({ currentStep, className, children }: StepsProps) {

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;
interface StepsProps {;
  currentStep: number,;
  className?: string,;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const childrenArray = React.Children.toArray(children),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
<<<<<<< HEAD

  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",
          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",

<<<<<<< HEAD
          if (!React.isValidElement(child)) return null,
          
<<<<<<< HEAD
          if (index < currentStep) status = $2;
          if (index = $2;
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          return React.cloneElement(child as React.ReactElement<StepProps>, {

            status})
        })}
      </ol>"
      <div className="hidden md:flex md:mt-4">"
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div"
            className="h-full bg-zion-purple transition-all"
<<<<<<< HEAD
=======
            style={{

<<<<<<< HEAD
export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);
  return (


              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
        </div>
      </div>
    </div>
  )
}

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD
        <div className="ml-[18px] w-[calc(100%-36px)] h-0 && 0.5 bg-zion-blue-light">;
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray && childrenArray.length - 1)) * 100}%`}}
  ),;}
;
interface StepsProps {;
  currentStep:number,;
  className?:string,;
  children:React.ReactNode;
}
;
export function Steps({ currentStep, className, children } StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  ;
  return (;
    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {;
          if (!React.isValidElement(child)) return null,;
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
=======

    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React && React.Children.map(childrenArray, (child, index) => {;
          if (!React && React.isValidElement(child)) return null;

          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";

          return React && React.cloneElement(child as React && React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;

      <div className="hidden md:flex md:mt-4">;

<<<<<<< HEAD
<div className="ml-[18px] w-[calc(100%-36px)] h-0 && 0.5 bg-zion-blue-light">;
          <div
            className="h-full bg-zion-purple transition-all"
            style={{
              width: `${(currentStep / (childrenArray && childrenArray.length - 1)) * 100}%`}}
  ),;}
;
interface StepsProps {;
  currentStep:number,;
  className?:string,;
  children:React.ReactNode;
}
;
export function Steps({ currentStep, className, children } StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  ;
  return (;
    <div className={cn("w-full", className)}>;
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;
        {React.Children.map(childrenArray, (child, index) => {;
          if (!React.isValidElement(child)) return null,;
          let status: "incomplete" | "current" | "complete" = "incomplete",;
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";
          return React.cloneElement(child as React.ReactElement<StepProps>, {;
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
            style={{;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
            style={{;
<<<<<<< HEAD


              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
=======

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
}

  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string;
  class_name?: string;
}

          "opacity - 60": status === "incomplete"}
        class_name)}
    >;
      <div;

          <CheckIcon className="h - 5 w - 5" />) : (
          <span>;
            {/* Step number would go here */}
          </span>)}

            "text - white": status === "current" || status === "complete"})}
        >;
          {label}
        </h3>;

          <p className="text - sm text - zion - slate - light">{description}</p>)}
      </div>;
    </li>);
}

  current_step: number,
  class_name?: string;
  children: React.ReactNode;
}
<<<<<<< HEAD

=======
export /**
 * Steps - Function description
 */
function Steps() {
  const children_array = React.Children.to_array (children);
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

    <div className={cn ("w - full", class_name)}>;
      <ol className="space - y-6 md:flex md:space - y-0 md:space-x-16">;
        {React.Children.map (children_array, (child, index) => {
          if () return null) {
  $2
}
<<<<<<< HEAD
          // Check condition
if (status = "complete") {
  $2
=======

          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition"
if (status = "complete") {}
  $2;
>>>>>>> origin/chore/fix-lint-and-merge
}
          // Check condition"
if (status = "current") {}
  $2;
}
          return React.clone_element (child as React.ReactElement < StepProps>, {}
            status});
        })}

              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
          />;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ),; 
}status, label, description, className 
}: StepProps) {
  return (<li className= {
<<<<<<< HEAD

export function Step(): any ({;

  status;
  label;
  description;)
  className}: StepProps) {;
  // TODO: Implement
  status: "incomplete" | "current" | "complete","
  label: string,
  description?: string,

export function Step({;
  description;
export function Step({
  status,
  label,
  description,

)
  className}: StepProps) {
  return (
    <li;
      className={cn("
        "relative flex items-center""
        {
        className;)
      )}>;
</li>
      <div;
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium""
          {"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":""
              status === "incomplete"""
            "bg-zion-blue border-zion-cyan text-white":""
              status === "current"""
            "bg-zion-purple border-zion-purple text-white":""
              status === "complete"}")
        )}
      >
</div>"
          <CheckIcon className="h-5 w-5" />"

          <span>
</span>
      className={cn(;"
        "relative flex items-center",;"
        {;"
          "opacity-60": status === "incomplete"},;"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium";"
              status === "incomplete";""
              status === "current";""
      >;
          <CheckIcon className="h-5 w-5" />;"

          <span>;
          </span>;
      <div className="ml-4 min-w-0">"
</div>
        <h3;"
          className={cn("text-sm font-medium", {""
            "text-zion-slate-light": status === "incomplete";")"
            "text-white": status === "current" |status === "complete"})}""
            "text-zion-slate-light": status === "incomplete",""
            "text-white": status === "current" || status === "complete"})}"
interface StepsProps {
  // TODO: Implement
  currentStep: number;
  children: React.ReactNode;
export function Steps({ currentStep, className, children }: StepsProps) {

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children);
;

</h3>
      </div>;"
      <div className="ml-4 min-w-0">;"
            "text-zion-slate-light": status === "incomplete"")"
            "text-white": status === "current" || status === "complete"})}>;"
          "opacity-60":status === "incomplete"},;"
          "shrink-0 h-9 w-9 rounded-full border flex items-center justify-center text-center font-medium",;"
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":;""
              status === "incomplete",;""
            "bg-zion-blue border-zion-cyan text-white":;""
              status === "current",;""
            "bg-zion-purple border-zion-purple text-white":;""

          <span>;            {/* Step number would go here */}
          className={cn("text-sm font-medium", {;""
            "text-zion-slate-light":status === "incomplete",;")"
            "text-white":status === "current" || status === "complete"})}"
        </h3>;"
          <p className="text-sm text-zion-slate-light">{description}</p>;"
      </div>;
    </li>;"
    <div className={cn("w-full", className)}>"
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">"
</ol>"
          if (index < currentStep) status = "complete";""
          if (index === currentStep) status = "current";"
          if (!React.isValidElement(child)) return null,
          "
          let status: "incomplete" | "current" | "complete" = "incomplete",""
          if (index < currentStep) status = "complete",""
          if (index === currentStep) status = "current","
          return React.cloneElement(child as React.ReactElement<StepProps>, {

      <div className="hidden md:flex md:mt-4">"
</div>)"
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">"
          <div;"
            className="h-full bg-zion-purple transition-all""
            style={{

export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return ()
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
          />
    <div className={cn("w-full", className)}>;"
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">;"
          return React && React.cloneElement(child as React && React.ReactElement<StepProps>, {;

      </ol>;"
      <div className="hidden md:flex md:mt-4">;"
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;"
            className="h-full bg-zion-purple transition-all";"
            style={{;

`;
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}`;
              width:`${(currentStep / (childrenArray.length - 1)) * 100}%`}}`;
          />;
      className={cn ("
        "relative flex items - center";"
          "opacity - 60": status === "incomplete"}")
        class_name)}
          "shrink - 0 h - 9 w - 9 rounded - full border flex items - center justify - center text - center font - medium";"
            "bg - zion - blue - dark border - zion - blue - light text - zion - slate - light":;""
            "bg - zion - blue border - zion - cyan text - white":;""
            "bg - zion - purple border - zion - purple text - white":;""
          <CheckIcon className="h - 5 w - 5" />) : ("

</span>)
          </span>)}
      <div className="ml - 4 min - w-0">;"
          className={cn ("text - sm font - medium", {""
            "text - zion - slate - light": status === "incomplete";")"
            "text - white": status === "current" || status === "complete"})}"
          <p className="text - sm text - zion - slate - light">{description}</p>)}"
    </li>);"
    <div className={cn ("w - full", class_name)}>;"
      <ol className="space - y-6 md:flex md:space - y-0 md:space - x-16">;"
</ol>
          return React.clone_element (child as React.ReactElement < StepProps>, {)
            status});
        })}
      <div className="hidden md:flex md:mt - 4">;"
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue - light">;"
            className="h - full bg - zion - purple transition - all";"
            style={{`;
              width: `${(current_step / (children_array.length - 1)) * 100}%`}}
    </div>);
  return (<li className= {)
  cn (className) 
}> <div) : (<span> {
</li>)
}</span>) "
}</div> <div className="ml-4 min-w-0" > <h3 > {"
}</h3>) 
}</div> </li>) 
}
=======
  cn (className) 
}> <div) : (<span> {
  /* Step number would go here */ 
}</span>) 
}</div> <div className="ml-4 min-w-0" > <h3 > {
  label 
}</h3>) 
}</div> </li>) 
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}) 
}</ol> <div className="hidden md:flex md:mt-4" > <div className="ml-[18px] w-[calc (100%-36px) ] h-0.5 bg-zion-blue-light" > <div width: `$ {
  (currentStep / (childrenArray.length - 1) ) * 100 
}%` 
}
}/> </div> </div> </div>) 
<<<<<<< HEAD
});
}
;
=======
}
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
