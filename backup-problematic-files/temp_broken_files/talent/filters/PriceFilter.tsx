<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen } PriceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setPriceRange([values[0] || 0, values[1] || 500]),;
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
=======
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;

;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen } PriceFilterProps) {;
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
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
          <Slider;
            aria-label="Hourly rate range";            value={[priceRange[0], priceRange[1]]}
=======

>>>>>>> merged-prs-20250907-203621
            min={50}
            max={200}
            step={5}
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
 export function PriceFilter ({;
  priceRange, setPriceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD
  setPriceRange ([values[0] || 0, values[1] || 500]) ;
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span>$ {;
  priceRange[0] ;
}/hr</span> <span>$ {;
  priceRange[1] ;
}/hr</span> </div> <Slider /> </div>) ;
}</div>) ;"}"
=======

};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;

    </div>;)"
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;"
pr-12325
}</button> <span>$ {;
</span>
}/hr</span> <span>$ {;
<<<<<<< HEAD
}/hr</span> </div> <Slider /> </div>) ;
=======
  priceRange[1] ;
}/hr</span> </div> <Slider /> </div>) ;
<<<<<<< HEAD
:temp_broken_files/talent/filters/PriceFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/PriceFilter.tsx
=======

}</div>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
