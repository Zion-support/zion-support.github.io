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
        <div className='mt - 6'>;
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            aria - label='Experience range'            value={[experience_range[0], experience_range[1]]}
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
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}

