<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
return (
    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}'
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
        {expanded ? ('
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : ('
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && ('
        <div className='mt - 6'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;'
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}
        <div className="mt - 6">;"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;'
import { Slider  } from '@/components / ui / slider';'
=======
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;,
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;,
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}',
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider  } from '@/components / ui / slider';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { PriceFilterProps  } from '@/types / filters';
export /**;
 * PriceFilter - Function description;
 */
<<<<<<< HEAD
function PriceFilter() {}
  const handle_change = (values: number[]) =>: any {}
    setPriceRange ([values[0] || 0, values[1] || 500]);

  }
      </button>;

      {expanded && (;'
        <div className='mt-6'>;'
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider'
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}"
        <div className="mt-6">;"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
function PriceFilter() {,
  const handle_change = (values: number[]) =>: any {,
    setPriceRange ([values[0] || 0, values[1] || 500]);,
  }
      </button>;
      {expanded && (;
        <div className='mt-6'>;,
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;,
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider,
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}',
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
import { ChevronDown, ChevronUp } from 'lucide-react''
import { Slider } from "@/components/ui/slider","
import { PriceFilterProps } from "@/types/filters","
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }:,  PriceFilterProps) {,
  const handleChange = (values: number[]) => {,
    setPriceRange([values[0] || 0, values[1] || 500]),
  },
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">"
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium""
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />"
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />"
        )}
      </button>
      {expanded && (
        <div className="mt-6">"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">"
            <span>${priceRange[0]}/hr</span>,
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
            aria-label="Hourly rate range""
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }:,  PriceFilterProps) {;,
  const handleChange = (values: number[]) => {;,
    setPriceRange([values[0] || 0, values[1] || 500]);,
  };
  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider",
=======
'
import { ChevronDown, ChevronUp } from 'lucide-react'"
import { Slider } from "@/components/ui/slider","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {}
  const handleChange = (values: number[]) => {}
    setPriceRange([values[0] || 0, values[1] || 500])
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
<<<<<<< HEAD
        className="flex w-full items-center justify-between text-white font-medium"
      >
=======

=======
  return (";
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        className="flex w-full items-center justify-between text-white font-medium"
      >

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        className="flex w-full items-center justify-between text-white font-medium"
      >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <span>Hourly Rate</span>
        {expanded ? ("
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : ("
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      {expanded && (
<<<<<<< HEAD
=======
      {expanded && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="mt-6">
=======
"
        <div className="mt-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
<<<<<<< HEAD
          <Slider
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';

=======
            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0] || 0, values[1] || 500]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
<<<<<<< HEAD

=======
          <Slider;
"
            aria-label="Hourly rate range"'
import { ChevronDown, ChevronUp } from 'lucide-react';"
import { Slider } from "@/components/ui/slider",;"
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter() { return null; }
  };

  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
=======
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";
      >;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <span>Hourly Rate</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Slider;
            aria-label="Hourly rate range";
            value={[priceRange[0], priceRange[1]]},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </button>;
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Slider;
=======

          <Slider;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            aria-label="Hourly rate range";
<<<<<<< HEAD
=======

aria-label='Hourly rate range'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        <div className="mt - 6">;"
"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;"
      </button>;"
        <div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">;"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;"
</div>"
    <div className="mb-6 border-b border-zion-blue-light pb-6">"
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium""
      >

        <span>Hourly Rate</span>"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />"

      </button>"
        <div className="mt-6">"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">"
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          <Slider;"
            aria-label="Hourly rate range"""
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;""
import { PriceFilterProps } from "@/types/filters",;"
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";"
      >;
        <span>Hourly Rate</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

            aria-label="Hourly rate range";"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>;
  );
=======
    </div>;
  );
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
            className="mt-6"
className='mt-6'
origin/cursor/automate-test-improve-and-merge-code-2533
          />
        </div>
      )}
    </div>
  );
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
};
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}}})))))
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className="mt-6"
          />
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>
  );
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>;
  );
}
;
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
