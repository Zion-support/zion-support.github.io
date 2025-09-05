
import { ChevronDown, ChevronUp } from &quot;lucide-react&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { ExperienceFilterProps } from &quot;@/types/filters&quot;;

export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };

  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-6&quot;>
          <div className=&quot;flex justify-between text-sm text-zion-slate-light mb-2&quot;>
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider 
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
            className=&quot;mt-6&quot;
          />
        </div>
      )}
    </div>
  );
}
