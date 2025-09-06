
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
=======
import { ChevronDown, ChevronUp } from "lucide-react",;
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/ExperienceFilter.tsx
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
    setExperienceRange([values[0], values[1]]),;
=======
    setExperienceRange([values[0] || 0, values[1] || 15]),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/ExperienceFilter.tsx
=======
    setExperienceRange([values[0] || 0, values[1] || 15]),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/ExperienceFilter.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

=======
          <Slider;
            aria-label="Experience range";            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

=======
            className="mt-6";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/ExperienceFilter.tsx
=======
            className="mt-6";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />;
        </div>;
      )}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/ExperienceFilter.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;}
 export function ExperienceFilter ({;
  experienceRange, setExperienceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD
  setExperienceRange ([values[0] || 0, values[1] || 15]) ;
=======
  setExperienceRange ([values[0] || 0, values[1] || 15]) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span> {;
  experienceRange[0] ;
}years</span> <span> {;
  experienceRange[1] ;
}years</span> </div> <Slider /> </div>) ;
:temp_broken_files/talent/filters/ExperienceFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/ExperienceFilter.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/ExperienceFilter.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
