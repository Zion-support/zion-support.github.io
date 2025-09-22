return (
    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}'
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Years of Experience</span>;
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = null;
export function ExperienceFilter({
  experienceRange
  setExperienceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] |0, values[1] |15])
  }
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Years of Experience</span>
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
        <span > Years of Experience</span>;)
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
)
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}

      </button>;
pr-12325
        <div className='mt - 6'>;

          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;'
            aria - label='Experience range'            value={[experience_range[0], experience_range[1]]}
        <div className="mt - 6">;"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;'
import { Slider  } from '@/components / ui / slider';'
import { ExperienceFilterProps  } from '@/types / filters';
export /**;
 * ExperienceFilter - Function description;
 */
function ExperienceFilter() {}
  const handle_change = (values: number[]) =>: any {}
    setExperienceRange ([values[0] || 0, values[1] || 15]);

  }
      </button>;

      {expanded && (;'
        <div className='mt-6'>;'
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider'
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}"
        <div className="mt-6">;"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {}
  const handleChange = (values: number[]) => {}
    setExperienceRange([values[0] || 0, values[1] || 15])
  },

        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
className="flex w-full items-center justify-between text-white font-medium"
      >
        className="flex w-full items-center justify-between text-white font-medium"
      >

        <span>Years of Experience</span>
        {expanded ? ("
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : ("
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

      {expanded && (

        <div className="mt-6">
"
        <div className="mt-6">"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<Slider

            aria-label="Experience range"
import { ChevronDown, ChevronUp } from 'lucide-react';
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0] || 0, values[1] || 15]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Years of Experience</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
</button>;
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;

          <Slider;"
            aria-label="Experience range";

origin/cursor/automate-test-improve-and-merge-code-2533
        <div className="mt - 6">;"
"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;"
      </button>;"
        <div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}
        <div className="mt-6">;"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;"
</div>"
    <div className="mb-6 border-b border-zion-blue-light pb-6">"
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium""
      >

        <span>Years of Experience</span>"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />"

      </button>"
        <div className="mt-6">"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">"
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          <Slider;"
            aria-label="Experience range"""
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;""
import { ExperienceFilterProps } from "@/types/filters",;"
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";"
      >;
        <span>Years of Experience</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

            aria-label="Experience range";"
pr-12325
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}

    </div>;
  );

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
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            aria - label='Experience range'            aria - label="Experience range";
            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}
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
}

            className="mt-6"
          />
        </div>
      )}
    </div>;
  );
}
;
'"
    </div>;
  );
}
;
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12325
