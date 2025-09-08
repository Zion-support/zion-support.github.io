
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


      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
          </div>;



            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}



          />;
        </div>;
      )}
    </div>;



  ),;}
 export function ExperienceFilter ({;
  experienceRange, setExperienceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;


};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;

    </div>;)"
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;"
pr-12325
}</button> <span> {;
</span>
}years</span> <span> {;


