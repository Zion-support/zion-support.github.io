<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/talent/filters/PriceFilter.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/talent/filters/PriceFilter.tsx
import { ChevronDown, ChevronUp } from 'lucide-react'
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
return (
    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}'
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;

import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = null;
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
origin/cursor/automate-test-improve-and-merge-code-2533
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : ('
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}'
      </button>;
      {expanded && (


return (

    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
</div>
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
</button>
        <span > Hourly Rate</span>;)
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
)
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}

      </button>;
pr-12325
        <div className='mt - 6'>;

          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;'
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}
        <div className="mt - 6">;"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;'
import { Slider  } from '@/components / ui / slider';'

import { PriceFilterProps  } from '@/types / filters';
export /**;
 * PriceFilter - Function description;
 */

function PriceFilter() {
  const handle_change = (values: number[]) =>: any {
    setPriceRange ([values[0] || 0, values[1] || 500]);

  }
import { Slider } from '@/components/ui/slider'
import { PriceFilterProps } from '@/types/filters'
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
      </button>;

      {expanded && (;
        <div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;



import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {}
  const handleChange = (values: number[]) => {}
    setPriceRange([values[0] || 0, values[1] || 500])
  },

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/talent/filters/PriceFilter.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
:src/components/talent/filters/PriceFilter.tsx
        className='flex w-full items-center justify-between text-white font-medium'      >
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        className='flex w-full items-center justify-between text-white font-medium'      >
        className='flex w-full items-center justify-between text-white font-medium'      >
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
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>

            aria-label='Hourly rate range'            aria-label="Hourly rate range"
ursor/fix-website-loading-errors-and-merge-6662

          <Slider
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
import { Slider } from "@/components/ui/slider"
import { PriceFilterProps } from "@/types/filters"
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {



        className="flex w-full items-center justify-between text-white font-medium"
      >

        <span>Hourly Rate</span>
        {expanded ? ("
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : ("
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/talent/filters/PriceFilter.tsx
=======
          <Slider
<<<<<<< HEAD
            aria-label='Hourly rate range'            aria-label="Hourly rate range"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/PriceFilter.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Slider

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
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
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


            value={[priceRange[0], priceRange[1]]}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/talent/filters/PriceFilter.tsx
=======
<<<<<<< HEAD
            className="mt-6"
          />
        </div>
      )};
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/PriceFilter.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    </div>;
  );

            className="mt-6"
        </div>
      )}
    </div>
  )
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  );
};
}
}



            className="mt-6"
          />
        </div>
      )}
<<<<<<< HEAD

=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD:src-disabled/components/talent/filters/PriceFilter.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>
  )
}
    </div>;
  );
};
}

        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            aria - label='Hourly rate range'            aria - label="Hourly rate range";
            value={[price_range[0], price_range[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handle_change}
            className='mt - 6'          />            className="mt - 6";
            className="mt - 6";
          />;
        </div>)}
    </div>);
}



;
<<<<<<< HEAD

=======
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
