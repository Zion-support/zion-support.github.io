<<<<<<< HEAD
const handleChange = ("values": number[]) => {
    }
    setPriceRange([values[0], values[1]])
};
import { ChevronDown, ChevronUp } from "lucide-react",
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
=import { ChevronDown, ChevronUp } from "lucide-react",
>import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
    setPriceRange([values[0] |0, values[1] |500])
  }
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Hourly Rate</span>
origin/cursor/automate-test-improve-and-merge-code-2533
return (

    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (
        <div className='mt - 6'>;
return (<div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;
import { Slider  } from '@/components/ui/slider';
import { PriceFilterProps  } from '@/types/filters';
export function PriceFilter() {const handleChange = null;
export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] |0, values[1] |500])}
  return (<div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button;
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >;
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (<ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (<div className='mt - 6'>;
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider   } from '@/components / ui / slider';
import { PriceFilterProps   } from '@/types / filters';
export /**;
 * PriceFilter - Function description;
 */;
function PriceFilter() {const handle_change = (values: number[]) =>: any {setPriceRange ([values[0] || 0, values[1] || 500])}
      </button>;{expanded && (<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;



import { ChevronDown, ChevronUp } from 'lucide-react'
=======
setPriceRange([values[0], values[1]]);
  };

import { ChevronDown, ChevronUp } from "lucide-react",
>>>>>>> origin/chore/fix-lint-and-merge
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {,
    setPriceRange([values[0] || 0, values[1] || 500])
>  },

    setPriceRange([values[0] || 0, values[1] || 500])
  },


        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
=    setPriceRange([values[0], values[1]])
  },

>  return (
=======
    setPriceRange([values[0], values[1]])
  },

  return (
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
          <Slider
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
=======
import { ChevronDown, ChevronUp } from "lucide-react",;
>>>>>>> origin/chore/fix-lint-and-merge
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;

<<<<<<< HEAD

            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
=import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
          <Slider
            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';

>  const handleChange = (values: number[]) => {;
    setPriceRange([values[0], values[1]])
};

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

>  const handleChange = (values: number[]) => {;
    setPriceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;import { ChevronDown, ChevronUp  } from 'lucide-react';
import { Slider } from "@/components/ui/slider",import { PriceFilterProps } from "@/types/filters",export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] || 0, values[1] || 500])},<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>;
  return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (<div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label="Hourly rate range";
export function PriceFilter() {aria-label="Hourly rate range";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] || 0, values[1] || 500])}return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx

      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
=>        <span>Hourly Rate</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"
=======
  const handleChange = (values: number[]) => {;

  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Hourly Rate</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
>>>>>>> origin/chore/fix-lint-and-merge
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
<<<<<<< HEAD
          <Slider;
            aria-label="Hourly rate range";

>          </div>;
          <Slider;
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
            aria-label="Hourly rate range";

aria-label='Hourly rate range'
origin/cursor/automate-test-improve-and-merge-code-2533
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}<Slider;
            aria-label="Hourly rate range";aria-label='Hourly rate range';

aria-label='Hourly rate range'
=>            value={[priceRange[0], priceRange[1]]}
=======

      {expanded && ("
        <div className="mt-6">"

          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>

            value={[priceRange[0], priceRange[1]]}
>>>>>>> origin/chore/fix-lint-and-merge
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}

import { PriceFilterProps  } from '@/types / filters';
export /**;
 * PriceFilter - Function description;
 */
function PriceFilter() {}
  const handle_change = (values: number[]) =>: any {}
    setPriceRange ([values[0], values[1]]);
  }
;
<<<<<<< HEAD
return (;
    <div className="mb - 6 border - b border - zion - blue - light pb-6">;"
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font-medium";"
      >;
        <span > Hourly Rate</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate-light" />) : ("
          <ChevronDown className="h - 4 w - 4 text - zion - slate-light" />)}"
      </button>;
      {expanded && (
        <div className="mt-6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb-2">;
            onValueChange={handleChange}
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
className='mt-6'
origin/cursor/automate-test-improve-and-merge-code-2533


    </div>;
  );
}

}

            className="mt-6"
=            className="mt-6"
>          />
        </div>
      )}
    </div>
  )
}
<<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
};
}

origin/cursor/automate-test-improve-and-merge-code-2533
            onValueChange={handleChange}</div>;
  )}}}
}className="mt-6";
className='mt-6';
          />;
        </div>;
      )}
    </div>;
  )}<div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
=======

>>>>>>> origin/chore/fix-lint-and-merge
            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
<<<<<<< HEAD
            aria - label='Hourly rate range            aria - label="Hourly rate range;
=======
>>>>>>> origin/chore/fix-lint-and-merge
            value={[price_range[0], price_range[1]]}
            min={50}
            max={200}
            step={5}

          />;
        </div>)}
    </div>);
}
=
    </div>;
  );

>            className='mt - 6'          />            className="mt - 6";
            className="mt - 6";
          />;
        </div>)}
    </div>)}}}
    </div>);
}

;

=>
