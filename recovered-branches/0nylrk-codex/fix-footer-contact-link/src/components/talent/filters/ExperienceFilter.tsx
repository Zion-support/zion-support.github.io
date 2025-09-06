<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

<<<<<<< HEAD

import { ChevronDown, ChevronUp } from "lucide-react",
=======
const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";

export function ExperienceFilter({
  experienceRange
  setExperienceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<<<<<<< HEAD

=======
<Slider
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {ExperienceFilterProps} from "@/types/filters";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
      </button>;
=======

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setExperienceRange([values[0], values[1]]),;
  },;
;
=======
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
          <Slider;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
          <Slider
=======

          <Slider 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            value={[experienceRange[0], experienceRange[1]]}
=======
          <Slider ;            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <Slider;

            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD
            className="mt-6"
=======
            className="mt-6";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />;
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
import { ChevronDown, ChevronUp  } from './lucide-react';
import { Slider  } from '@/components / ui / slider';
import { ExperienceFilterProps  } from '@/types / filters';
export /**
 * ExperienceFilter - Function description
 */
function ExperienceFilter() {
  const handle_change = (values: number[]) =>: any {
    setExperienceRange ([values[0], values[1]]);
  }
;
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Years of Experience</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handle_change}
            className="mt - 6";
          />;
        </div>)}
    </div>);
}
=======
  ),;}
 export function ExperienceFilter ({
  experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen 
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
  setExperienceRange ([values[0], values[1]]) 
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) 
}</button> <span> {
  experienceRange[0] 
}years</span> <span> {
  experienceRange[1] 
}years</span> </div> <Slider /> </div>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            className="mt-6"
          />
        </div>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
