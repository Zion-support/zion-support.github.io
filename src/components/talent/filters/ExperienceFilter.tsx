<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Slider } from '@/components/ui/slider'
import { ExperienceFilterProps } from '@/types/filters'
export function ExperienceFilter({
  experienceRange
  setExperienceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] |0, values[1] |15])
  }
=======

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] || 0, values[1] || 15])
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'      >
=======
        className="flex w-full items-center justify-between text-white font-medium"
      >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
      {expanded && (
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
import { Slider } from "@/components/ui/slider"
import { ExperienceFilterProps } from "@/types/filters"
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] |0, values[1] |15])
  }

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
=======
      
      {expanded && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label='Experience range'            aria-label="Experience range"
=======
            aria-label="Experience range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0] || 0, values[1] || 15]);
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
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;
            aria-label="Experience range";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
            className='mt-6'          />            className="mt-6"
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
            className="mt-6"
          />
        </div>
      )};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className="mt-6"
          />
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </div>;
  );
};
}
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
