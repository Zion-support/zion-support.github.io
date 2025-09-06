<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'

<<<<<<< HEAD

  return (
=======
return (

    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Years of Experience</span>;
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </button>;

      {expanded && (;
        <div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD
=======
          <Slider;
            aria - label='Experience range'            value={[experience_range[0], experience_range[1]]}
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider  } from '@/components / ui / slider';
import { ExperienceFilterProps  } from '@/types / filters';
export /**
 * ExperienceFilter - Function description
 */
function ExperienceFilter() {
  const handle_change = (values: number[]) =>: any {
    setExperienceRange ([values[0] || 0, values[1] || 15]);

  }
import { Slider } from '@/components/ui/slider'
import { ExperienceFilterProps } from '@/types/filters'
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </button>;

      {expanded && (;
        <div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <Slider
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;



import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
<<<<<<< HEAD

  return (
=======
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] || 0, values[1] || 15])
  },

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'      >
        className='flex w-full items-center justify-between text-white font-medium'      >
        className="flex w-full items-center justify-between text-white font-medium"
      >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
<<<<<<< HEAD

      
      {expanded && (

        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
=======
      {expanded && (

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
<<<<<<< HEAD
<<<<<<< HEAD

=======
            aria-label='Experience range'            aria-label="Experience range"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            aria-label="Experience range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter(): any ({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0] || 0, values[1] || 15]);
  };

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD


          <Slider;
            aria-label="Experience range";

            value={[experienceRange[0], experienceRange[1]]}
=======
      </button>;
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
          <Slider;
            aria-label="Experience range";
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            value={[experienceRange[0], experienceRange[1]]}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
=======


    </div>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            className="mt-6"
          />
        </div>
      )};
}

            className="mt-6"
<<<<<<< HEAD
        </div>
      )}
    </div>
  )
}
  );
};
}
}
            className='mt-6'          />            className="mt-6"
            className="mt-6"
          />
        </div>
      )};
            className="mt-6"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          />
        </div>
      )}
    </div>;
  );
};
}
<<<<<<< HEAD

        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            aria - label='Experience range'            aria - label="Experience range";
            value={[experience_range[0], experience_range[1]]}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}


    </div>;
  );
}
<<<<<<< HEAD
=======

;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
