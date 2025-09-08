
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


      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;



            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}



          />;
        </div>;
      )}
    </div>;



  ),;}
 export function PriceFilter ({;
  priceRange, setPriceRange, expanded,  toggleSection, isMobileFilterOpen ;
}: PriceFilterProps) {;
  const handleChange = (values: number[]) => {;


};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;

    </div>;)"
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) ;"
pr-12325
}</button> <span>$ {;
</span>
}/hr</span> <span>$ {;


