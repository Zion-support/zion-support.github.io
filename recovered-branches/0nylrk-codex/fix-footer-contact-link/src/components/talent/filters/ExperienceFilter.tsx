import { ChevronDown, ChevronUp } from "lucide-react";""
import { Slider } from "@/components/ui/slider";""
import { ExperienceFilterProps } from "@/types/filters";"
export function ExperienceFilter({
  experienceRange,
  setExperienceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,)
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };




  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;"
</button>
        <span>Years of Experience</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
</ChevronUp>"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"
</ChevronDown>
      </button>"
        <div className="mt-6">"
</div>"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">"
</div>
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
          <Slider;
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}"
            className="mt-6""
          />;
</Slider>
        </div>;
    </div>"
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;"
</div>
      <button;
        on_click={toggle_section}"
        className="flex w - full items - center justify - between text - white font - medium";"
      >;
</button>
        <span > Years of Experience</span>;)"
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : ("
</ChevronUp>)"
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}"
</ChevronDown>
      </button>;"
        <div className="mt - 6">;"
</div>"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;"
</div>
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handle_change}"
            className="mt - 6";"
          />;
</Slider>
        </div>)}
    </div>);"