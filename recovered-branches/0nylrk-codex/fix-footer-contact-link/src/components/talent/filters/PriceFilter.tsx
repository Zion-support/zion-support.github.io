<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {PriceFilterProps} from "@/types/filters";
<<<<<<< HEAD
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
=======
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
=======
import { ChevronDown, ChevronUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({
  priceRange,
  setPriceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: PriceFilterProps) {
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
  },

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
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0], values[1]]);
  };




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
<<<<<<< HEAD
<<<<<<< HEAD

      </button>;

=======
      </button>;

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen } PriceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setPriceRange([values[0], values[1]]),;
  },;
;
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0], values[1]]);
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
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
=======
          <Slider
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ChevronDown, ChevronUp  } from './lucide-react';
import { Slider  } from '@/components / ui / slider';
import { PriceFilterProps  } from '@/types / filters';
export /**
 * PriceFilter - Function description
 */
function PriceFilter() {
  const handle_change = (values: number[]) =>: any {
    setPriceRange ([values[0], values[1]]);
  }
;
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Hourly Rate</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            value={[price_range[0], price_range[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handle_change}
            className="mt - 6";
          />;
        </div>)}
    </div>);
}
