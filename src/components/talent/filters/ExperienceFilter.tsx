import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { ExperienceFilterProps } from '@/types/filters';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
export function ExperienceFilter({
  experienceRange,
  setExperienceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0] || 0, values[1] || 15]);
  };

=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[],) => {
    setExperienceRange([values[0] || 0, values[1] || 15])
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
<<<<<<< HEAD
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'
=======
        onClick = {toggleSection,}
        className="flex w-full items-center justify-between text-white font-medium"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>

      {expanded && (
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
            aria-label='Experience range'            value={[experienceRange[0], experienceRange[1]]}
=======
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label='Experience range'
=======
            aria-label="Experience range"
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
            className='mt-6'          />
=======
=======
            value = {[experienceRange[0], experienceRange[1]],}
            min = {0,}
            max = {15,}
            step = {1,}
            onValueChange = {handleChange,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            className="mt-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
