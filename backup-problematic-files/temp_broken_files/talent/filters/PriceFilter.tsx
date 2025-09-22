
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider";""
import { PriceFilterProps } from "@/types/filters";"
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
<<<<<<< HEAD
min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
</button>
        <span>Hourly Rate</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

      </button>;"
        <div className="mt-6">;"
</div>"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;"
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;"
            aria-label="Hourly rate range";            value={[priceRange[0], priceRange[1]]}"
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}"
            className="mt-6";"
=======
          <Slider;
            aria-label="Hourly rate range";            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className="mt-6";
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
          />;
        </div>;
      )}
    </div>;
  ),;}
 export function PriceFilter ({;
  priceRange, setPriceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;
  setPriceRange ([values[0] || 0, values[1] || 500]) ;
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span>$ {;
  priceRange[0] ;
}/hr</span> <span>$ {;
  priceRange[1] ;
}/hr</span> </div> <Slider /> </div>) ;
<<<<<<< HEAD
:temp_broken_files/talent/filters/PriceFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/PriceFilter.tsx
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
