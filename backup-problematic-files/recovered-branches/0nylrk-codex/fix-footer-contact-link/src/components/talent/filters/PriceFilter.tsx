<<<<<<< HEAD
import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {PriceFilterProps} from "@/types/filters";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
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
      </button>;
=======

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen } PriceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setPriceRange([values[0], values[1]]),;
  },;
;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Hourly Rate</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
          <Slider
            value={[priceRange[0], priceRange[1]]}
=======
          <Slider ;            value={[priceRange[0], priceRange[1]]}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
            className="mt-6"
=======
            className="mt-6";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />;
        </div>;
      )}
    </div>;
<<<<<<< HEAD
  );
}
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
=======
  ),;}
 export function PriceFilter ({
  priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen 
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
  setPriceRange ([values[0], values[1]]) 
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) 
}</button> <span>$ {
  priceRange[0] 
}/hr</span> <span>$ {
  priceRange[1] 
}/hr</span> </div> <Slider /> </div>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
