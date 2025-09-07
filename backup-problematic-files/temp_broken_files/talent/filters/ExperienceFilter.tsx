<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setExperienceRange([values[0] || 0, values[1] || 15]),;
  },;
;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
=======
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;

;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;

  },;
  return (;"
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";"
      >;

>>>>>>> merged-prs-20250907-203621
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD
          <Slider;
            aria-label="Experience range";            value={[experienceRange[0], experienceRange[1]]}
=======

>>>>>>> merged-prs-20250907-203621
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
            className="mt-6";
=======

>>>>>>> merged-prs-20250907-203621
          />;
        </div>;
      )}
    </div>;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
  ),;}
 export function ExperienceFilter ({;
  experienceRange, setExperienceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD
  setExperienceRange ([values[0] || 0, values[1] || 15]) ;
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span> {;
  experienceRange[0] ;
}years</span> <span> {;
  experienceRange[1] ;
}years</span> </div> <Slider /> </div>) ;
}</div>) ;"}"
=======

};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;

    </div>;)"
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;"
pr-12325
}</button> <span> {;
</span>
}years</span> <span> {;
<<<<<<< HEAD
}years</span> </div> <Slider /> </div>) ;
=======
  experienceRange[1] ;
}years</span> </div> <Slider /> </div>) ;
<<<<<<< HEAD
:temp_broken_files/talent/filters/ExperienceFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/ExperienceFilter.tsx
=======

}</div>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
