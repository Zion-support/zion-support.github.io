<<<<<<< HEAD

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


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;
<<<<<<< HEAD



=======
          <Slider;
            aria-label="Experience range";            value={[experienceRange[0], experienceRange[1]]}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD



=======
            className="mt-6";
>>>>>>> origin/cursor/delete-old-data-records-6bba
          />;
        </div>;
      )}
    </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ),;}
 export function ExperienceFilter ({;
  experienceRange, setExperienceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD


};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;

    </div>;)"
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;"
pr-12325
}</button> <span> {;
</span>
}years</span> <span> {;


=======
  setExperienceRange ([values[0] || 0, values[1] || 15]) ;
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;
}</button> <span> {;
  experienceRange[0] ;
}years</span> <span> {;
  experienceRange[1] ;
}years</span> </div> <Slider /> </div>) ;
}</div>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
