<<<<<<< HEAD
<<<<<<< HEAD
const handleChange = ("values": number[]) => {
    }
    setExperienceRange([values[0], values[1]])
};
import { ChevronDown, ChevronUp } from "lucide-react",
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
=import { ChevronDown, ChevronUp } from "lucide-react",
>import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
    setExperienceRange([values[0] |0, values[1] |15])
  }
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Years of Experience</span>
origin/cursor/automate-test-improve-and-merge-code-2533
return (
=======
const handleChange = (values: number[]) => {
import {ChevronDown, ChevronUp} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {ExperienceFilterProps} from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";

export function ExperienceFilter({
  experienceRange
  setExperienceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  }
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]])
  },

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<Slider
          <Slider
          <Slider 
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Years of Experience</span>;
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
        <span > Years of Experience</span>;
import { Slider  } from '@/components/ui/slider';
import { ExperienceFilterProps  } from '@/types/filters';
export function ExperienceFilter() {const handleChange = null;
export function ExperienceFilter() {const handleChange = (values: number[]) => {setExperienceRange([values[0] |0, values[1] |15])}
  return (<div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button;
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >;
        <span>Years of Experience</span>;
        {expanded ? (<ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (<ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (<div className='mt - 6'>;
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            aria - label='Experience range'            value={[experience_range[0], experience_range[1]]}
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider   } from '@/components / ui / slider';
import { ExperienceFilterProps   } from '@/types / filters';
export /**;
 * ExperienceFilter - Function description;
 */;
function ExperienceFilter() {const handle_change = (values: number[]) =>: any {setExperienceRange ([values[0] || 0, values[1] || 15])}
      </button>;{expanded && (<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;



import { ChevronDown, ChevronUp } from 'lucide-react'
=======
setExperienceRange([values[0], values[1]]);
  };

import { ChevronDown, ChevronUp } from "lucide-react",
>>>>>>> origin/chore/fix-lint-and-merge
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {,
    setExperienceRange([values[0] || 0, values[1] || 15])
>  },

    setExperienceRange([values[0] || 0, values[1] || 15])
  },


        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
=    setExperienceRange([values[0], values[1]])
  },

>  return (
=======
    setExperienceRange([values[0], values[1]])
  },

  return (
>>>>>>> origin/chore/fix-lint-and-merge
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<<<<<<< HEAD
          <Slider
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
=======
import { ChevronDown, ChevronUp } from "lucide-react",;
>>>>>>> origin/chore/fix-lint-and-merge
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;

<<<<<<< HEAD
<<<<<<< HEAD

            aria-label="Experience range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
=import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
          <Slider
            aria-label="Experience range"
import { ChevronDown, ChevronUp } from 'lucide-react';

>  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]])
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;

>  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;import { ChevronDown, ChevronUp  } from 'lucide-react';
import { Slider } from "@/components/ui/slider",import { ExperienceFilterProps } from "@/types/filters",export function ExperienceFilter() {const handleChange = (values: number[]) => {setExperienceRange([values[0] || 0, values[1] || 15])},<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>;
  return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Years of Experience</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (<div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;
            aria-label="Experience range";
export function ExperienceFilter() {aria-label="Experience range";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {export function ExperienceFilter() {const handleChange = (values: number[]) => {setExperienceRange([values[0] || 0, values[1] || 15])}return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx

      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
<<<<<<< HEAD
=>        <span>Years of Experience</span>;
=======
<<<<<<< HEAD
        <span>Years of Experience</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
        ) : (;
<<<<<<< HEAD
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"
=======
  const handleChange = (values: number[]) => {;
=======
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setExperienceRange([values[0], values[1]]),;
  },;
;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
      </button>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Years of Experience</span>;
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
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
<<<<<<< HEAD
          <Slider;
            aria-label="Experience range";

<<<<<<< HEAD
>          </div>;
          <Slider;
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
            aria-label="Experience range";

aria-label='Experience range'
origin/cursor/automate-test-improve-and-merge-code-2533
        <span>Years of Experience</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}<Slider;
            aria-label="Experience range";aria-label='Experience range';

aria-label='Experience range'
=>            value={[experienceRange[0], experienceRange[1]]}
=======
=======
          <Slider
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {expanded && ("
        <div className="mt-6">"

          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Slider;
            value={[experienceRange[0], experienceRange[1]]}
          <Slider ;            value={[experienceRange[0], experienceRange[1]]}
          <Slider;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> origin/chore/fix-lint-and-merge
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD

import { ExperienceFilterProps  } from '@/types / filters';
export /**;
 * ExperienceFilter - Function description;
 */
function ExperienceFilter() {}
  const handle_change = (values: number[]) =>: any {}
    setExperienceRange ([values[0], values[1]]);
  }
;
<<<<<<< HEAD
return (;
    <div className="mb - 6 border - b border - zion - blue - light pb-6">;"
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font-medium";"
      >;
        <span > Years of Experience</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate-light" />) : ("
          <ChevronDown className="h - 4 w - 4 text - zion - slate-light" />)}"
      </button>;
      {expanded && (
        <div className="mt-6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb-2">;
            onValueChange={handleChange}
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
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
<<<<<<<< HEAD:src_backup/components/talent/filters/ExperienceFilter.tsx
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
=======
<<<<<<< HEAD
            className="mt-6";
=======
            className="mt-6"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
        </div>;
      )}
    </div>;
import { ChevronDown, ChevronUp  } from './lucide-react';
import { Slider  } from '@/components / ui / slider';
import { ExperienceFilterProps  } from '@/types / filters';
export /**
 * ExperienceFilter - Function description
 */
function ExperienceFilter() {
  const handle_change = (values: number[]) =>: any {
    setExperienceRange ([values[0], values[1]]);
  }
;
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Years of Experience</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
=======

>>>>>>> origin/chore/fix-lint-and-merge
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
<<<<<<< HEAD
            aria - label='Experience range            aria - label="Experience range;
=======
>>>>>>> origin/chore/fix-lint-and-merge
            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}

          />;
        </div>)}
    </div>);
}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  ),;}
 export function ExperienceFilter ({
  experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen 
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
  setExperienceRange ([values[0], values[1]]) 
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) 
}</button> <span> {
  experienceRange[0] 
}years</span> <span> {
  experienceRange[1] 
}years</span> </div> <Slider /> </div>) 
}</div>) 
}
            className="mt-6"
          />
        </div>
      )}
    </div>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
