
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",

export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500]),
  },
=======
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";

export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500]);
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD

        className="flex w-full items-center justify-between text-white font-medium"
      >

=======
        className="flex w-full items-center justify-between text-white font-medium"
      >
>>>>>>> origin/auto/autonomy-17186719616
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
      {expanded && (
=======
>>>>>>> origin/auto/autonomy-17186719616
      
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD

            aria-label='Hourly rate range'            aria-label="Hourly rate range"
=======
>>>>>>> origin/auto/autonomy-17186719616
            aria-label="Hourly rate range"
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className="mt-6"
          />
        </div>
      )}
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
