

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

import { ChevronDown, ChevronUp } from "lucide-react",;

import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;







  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

>  const handleChange = (values: number[]) => {;

    setExperienceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;import { ChevronDown, ChevronUp  } from 'lucide-react';
import { Slider } from "@/components/ui/slider",import { ExperienceFilterProps } from "@/types/filters",export function ExperienceFilter() {const handleChange = (values: number[]) => {setExperienceRange([values[0] || 0, values[1] || 15])},<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>;
  return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}className="flex w-full items-center justify-between text-white font-medium";

      >;
        <span>Years of Experience</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (<div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;
            aria-label="Experience range";
export function ExperienceFilter() {aria-label="Experience range";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {export function ExperienceFilter() {const handleChange = (values: number[]) => {setExperienceRange([values[0] || 0, values[1] || 15])}return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
<

        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}



  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Years of Experience</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;

        )}


      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;



            value={[experienceRange[0], experienceRange[1]]}


            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}


          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;

            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;


            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}

          />;
        </div>)}
    </div>);
}




