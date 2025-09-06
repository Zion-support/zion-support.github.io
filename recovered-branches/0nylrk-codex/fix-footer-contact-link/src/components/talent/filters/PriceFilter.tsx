


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

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
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
          <Slider 


import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;


import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {PriceFilterProps} from "@/types/filters";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  const handleChange = (values: number[]) => {;
    setPriceRange([values[0], values[1]]);
  };




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
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


          <Slider


            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className="mt-6"
          />;
        </div>;
      )}

    </div>;
  );
}


