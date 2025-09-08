
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import {cn} from "@/lib/utils";

import {CheckIcon} from "lucide-react";

<<<<<<< HEAD
=======
interface StepProps {;"
  status: "incomplete" | "current" | "complete",;
  label: string,;

  description?: string;
  className?: string;
}

  status;
  label;
  description;
  className}: StepProps) {;

>>>>>>> origin/cursor/delete-old-data-records-6bba

interface StepProps {
  status: "incomplete" | "current" | "complete",
  label: string,
  description?: string,

<<<<<<< HEAD
  className?: string
}



=======

export function Step({;
  status;
  label;
  description;


  status,
  label,
  description,

  className}: StepProps) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


        )}
      >"
        {status === "complete" ? ("
          <CheckIcon className="h-5 w-5" />
        ) : (

          <span>
=======
  className}: StepProps) {
  return (
    <li
      className = $2;
        {
          "opacity-60": status = $2;
        className
      )}
    >
      <div
        className = $2;
          {
            "bg-zion-blue-dark border-zion-blue-light text-zion-slate-light":
              status = $2;
            "bg-zion-blue border-zion-cyan text-white":
              status = $2;
            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}

>>>>>>> origin/cursor/delete-old-data-records-6bba

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






            "text-zion-slate-light": status === "incomplete",
            "text-white": status === "current" || status === "complete"})}


        >


          {label}

        </h3>;
        {description && (;"
          <p className="text-sm text-zion-slate-light">{description}</p>;
        )}
      </div>;
    </li>;



  className?: string;
  children: React && React.ReactNode;
}

export function Steps() { return null; }

}



=======

        {status === "complete" ? (;
          <CheckIcon className="h-5 w-5" />;
        ) : (;
          <span>;
            {/* Step number would go here */}
          </span>
        )}
      </div>
      <div className="ml-4 min-w-0">

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className={cn("w-full", className)}>
      <ol className="space-y-6 md:flex md:space-y-0 md:space-x-16">
        {React.Children.map(childrenArray, (child, index) => {

<<<<<<< HEAD



          if (!React.isValidElement(child)) return null,
          
          let status: "incomplete" | "current" | "complete" = "incomplete",

          if (index < currentStep) status = "complete",
          if (index === currentStep) status = "current",



=======

          if (!React.isValidElement(child)) return null;
          let status: "incomplete" | "current" | "complete" = "incomplete"
          if (index < currentStep) status = "complete";
          if (index === currentStep) status = "current";


  currentStep: number,;
  className?: string;
  children: React && React.ReactNode;
}

          if (index < currentStep) status = $2;
          if (index = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>
      <div className="hidden md:flex md:mt-4">
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
          <div
            className="h-full bg-zion-purple transition-all"
<<<<<<< HEAD

            style={{


=======


export function Steps(): any ({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React && React.Children.toArray(children);

  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
;

export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
            style={{;
export function Steps({ currentStep, className, children }: StepsProps) {;
  const childrenArray = React.Children.toArray(children),;
  return (;        <div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">;
          <div;
            className="h-full bg-zion-purple transition-all";
<<<<<<< HEAD
            style={{;
=======
            style={;
>>>>>>> origin/cursor/delete-old-data-records-6bba

              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}

<<<<<<< HEAD
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}


=======
              width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}

>>>>>>> origin/cursor/delete-old-data-records-6bba
          />;
        </div>;
      </div>;
    </div>;

<<<<<<< HEAD

=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <div className={cn ("w - full", class_name)}>;
      <ol className="space - y-6 md:flex md:space - y-0 md:space-x-16">;
        {React.Children.map (children_array, (child, index) => {
          if () return null) {
  $2
}
<<<<<<< HEAD


          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition"
if (status = "complete") {}
  $2;

=======
          let status: "incomplete" | "current" | "complete" = "incomplete",
          // Check condition
if (status = "complete") {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
          // Check condition
if (status = "current") {
  $2
}
          return React.clone_element (child as React.ReactElement < StepProps>, {
            status});
        })}
      </ol>;
      <div className="hidden md:flex md:mt-4">;
        <div className="ml-[18px] w-[calc (100%-36px)] h - 0.5 bg - zion - blue-light">;
          <div;
            className="h - full bg - zion - purple transition-all";
            style={
              width: `${(current_step / (children_array.length - 1)) * 100}%`}
          />;
        </div>;
      </div>;
    </div>);


  ),; 
}status, label, description, className 
}: StepProps) {
  return (<li className= {
<<<<<<< HEAD

  cn (className) 
}> <div) : (<span> {
  /* Step number would go here */ 
}</span>) 
}</div> <div className="ml-4 min-w-0" > <h3 > {
  label 
}</h3>) 
}</div> </li>) 
}



=======


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
}) 
}</ol> <div className="hidden md:flex md:mt-4" > <div className="ml-[18px] w-[calc (100%-36px) ] h-0.5 bg-zion-blue-light" > <div width: `$ {
  (currentStep / (childrenArray.length - 1) ) * 100 
}%` 
}
}/> </div> </div> </div>) 
});
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
