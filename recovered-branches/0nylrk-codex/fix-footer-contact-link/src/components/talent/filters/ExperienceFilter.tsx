<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {ExperienceFilterProps} from "@/types/filters";
<<<<<<< HEAD
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
=======
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
=======
import { ChevronDown, ChevronUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({
  experienceRange,
  setExperienceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: ExperienceFilterProps) {
>>>>>>> main
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };
=======
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]])
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

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

>>>>>>> main
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<<<<<<< HEAD
          <Slider 
<<<<<<< HEAD
=======
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };

=======



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
<<<<<<< HEAD

      </button>;

=======
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
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD

          <Slider
=======

          <Slider 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          <Slider;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
          <Slider
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
            className="mt-6"
          />;
        </div>;
      )}

    </div>;
=======
            className="mt-6";
          />;
        </div>;
      )}
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
