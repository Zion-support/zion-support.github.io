<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { PriceFilterProps } from '@/types/filters'
export function PriceFilter({
  priceRange,
  setPriceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  }
=======

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  },

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'      >
=======
        className="flex w-full items-center justify-between text-white font-medium"
      >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
      {expanded && (
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
import { Slider } from "@/components/ui/slider"
import { PriceFilterProps } from "@/types/filters"
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  }
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
=======
      
      {expanded && (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label='Hourly rate range'            aria-label="Hourly rate range"
=======
            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0] || 0, values[1] || 500]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Hourly Rate</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label="Hourly rate range";
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
            className='mt-6'          />            className="mt-6"
            className="mt-6"
          />
        </div>
      )};
=======
            className="mt-6"
          />
        </div>
      )}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
};
}
<<<<<<< HEAD
}
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
