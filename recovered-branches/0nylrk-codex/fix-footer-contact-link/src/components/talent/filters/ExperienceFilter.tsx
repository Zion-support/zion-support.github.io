<<<<<<< HEAD
<<<<<<< HEAD
const handleChange = (values: number[]) => {
import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {ExperienceFilterProps} from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
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
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]])
  },

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

      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<Slider
          <Slider
          <Slider 
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {ExperienceFilterProps} from "@/types/filters";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
      </button>;

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setExperienceRange([values[0], values[1]]),;
  },;
;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
      </button>;
=======

      </button>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      </button>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;

          <Slider
<<<<<<< HEAD

          <Slider 

<<<<<<< HEAD
          <Slider;
            value={[experienceRange[0], experienceRange[1]]}
          <Slider ;            value={[experienceRange[0], experienceRange[1]]}
          <Slider;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

          <Slider 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD
            className="mt-6";
=======
            className="mt-6"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
        </div>;
      )}
    </div>;
=======
            className="mt-6"
          />;
        </div>;
      )}

    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
            className="mt-6"
          />
        </div>
      )}
    </div>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
