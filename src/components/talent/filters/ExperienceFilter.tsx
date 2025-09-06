<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { ExperienceFilterProps } from '@/types/filters';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] || 0, values[1] || 15])
  };

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
<<<<<<< HEAD
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
=======

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] || 0, values[1] || 15])
  };


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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
<<<<<<< HEAD
<<<<<<< HEAD
            aria-label='Experience range'
=======
            aria-label="Experience range"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            aria-label="Experience range"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD
            className='mt-6'
=======
            className="mt-6"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="mt-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
