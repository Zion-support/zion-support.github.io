<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = null;
=======
import { Slider } from '@/components/ui/slider'
import { PriceFilterProps } from '@/types/filters'
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { PriceFilterProps } from '@/types/filters';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function PriceFilter({
  priceRange
  setPriceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] |0, values[1] |500])
  }
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>
      {expanded && (
        <div className='mt-6'>
<<<<<<< HEAD
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
    setPriceRange([values[0] |0, values[1] |500])
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
=======
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label='Hourly rate range'            aria-label="Hourly rate range"
=======
            aria-label='Hourly rate range'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
            className='mt-6'          />            className="mt-6"
            className="mt-6"
=======
            className='mt-6'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          />
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
