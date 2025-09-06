<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChevronDown, ChevronUp } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD

  return (
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider  } from '@/components / ui / slider';
import { PriceFilterProps  } from '@/types / filters';
export /**
 * PriceFilter - Function description
 */
function PriceFilter() {
  const handle_change = (values: number[]) =>: any {
    setPriceRange ([values[0] || 0, values[1] || 500]);

  }
<<<<<<< HEAD
>>>>>>>   return (
=======
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
=======
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


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  },

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <span>Hourly Rate</span>
=======
        className='flex w-full items-center justify-between text-white font-medium'      >
>>>>>>>         <span>Hourly Rate</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className='flex w-full items-center justify-between text-white font-medium'      >
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Hourly Rate</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {expanded && (
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
<<<<<<< HEAD
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

>>>>>>>   return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium"
      >

<<<<<<< HEAD
>>>>>>>         <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
>>>>>>>         <div className="mt-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="mt-6">
>>>>>>>           <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD

=======
            aria-label='Hourly rate range'            aria-label="Hourly rate range"
>>>>>>>             value={[priceRange[0], priceRange[1]]}
ursor/fix-website-loading-errors-and-merge-6662
=======
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

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
      
      {expanded && (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
            aria-label='Hourly rate range'            aria-label="Hourly rate range"
            aria-label="Hourly rate range"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0] || 0, values[1] || 500]);
  };
<<<<<<< HEAD
  return (;
=======

  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD


          <Slider;
            aria-label="Hourly rate range";

<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      </button>;
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label="Hourly rate range";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            value={[priceRange[0], priceRange[1]]}
>>>>>>>             min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="mt-6"
          />
        </div>
      )};
<<<<<<< HEAD
=======
>>>>>>>             className="mt-6"
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            className="mt-6"
>>>>>>>           />
        </div>
      )}
<<<<<<< HEAD

    </div>;
  );
};
}

=======
    </div>
  )
}
>>>>>>>     </div>;
  );
};
}
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className='mt-6'          />            className="mt-6"
            className="mt-6"
          />
        </div>
      )};
            className="mt-6"
          />
        </div>
      )}
    </div>
  )
}
    </div>;
  );
};
}
<<<<<<< HEAD
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
