
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx
=======
import { ChevronDown, ChevronUp } from "lucide-react",;
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/PriceFilter.tsx
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen } PriceFilterProps) {;
  const handleChange = (values:number[]) => {;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx
    setPriceRange([values[0], values[1]]),;
=======
    setPriceRange([values[0] || 0, values[1] || 500]),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/PriceFilter.tsx
=======
    setPriceRange([values[0] || 0, values[1] || 500]),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  },;
;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Hourly Rate</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/PriceFilter.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx

=======
          <Slider;
            aria-label="Hourly rate range";            value={[priceRange[0], priceRange[1]]}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx

=======
            className="mt-6";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/PriceFilter.tsx
=======
            className="mt-6";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />;
        </div>;
      )}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/PriceFilter.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;}
 export function PriceFilter ({;
  priceRange, setPriceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD
  setPriceRange ([values[0] || 0, values[1] || 500]) ;
=======
  setPriceRange ([values[0] || 0, values[1] || 500]) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span>$ {;
  priceRange[0] ;
}/hr</span> <span>$ {;
  priceRange[1] ;
}/hr</span> </div> <Slider /> </div>) ;
:temp_broken_files/talent/filters/PriceFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/PriceFilter.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/PriceFilter.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
