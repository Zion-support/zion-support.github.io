
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
;
const REGION_OPTIONS = [;
  { id:"North America", label:"North America" },;
  { id:"Europe", label:"Europe" },;
  { id:"Asia", label:"Asia" },;
  { id:"South America", label:"South America" },;
  { id:"Australia", label:"Australia" },;
  { id:"Africa", label:"Africa" }
],;
;
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen } RegionFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS.map(region => (;
            <div key={region.id} className="flex items-center">;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;
                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {region.label}
              </label>;
            </div>;          ))}
        </div>;
      )}
    </div>;
  ),;}
 ];
<<<<<<< HEAD
:temp_broken_files/talent/filters/RegionFilter.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/RegionFilter.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS.map (region => (<div key= {;"  region.id ";"}className="flex items-center" > <Checkbox > {;
  region.label ;
}</label> </div>) ) ;
}</div>) ;
<<<<<<< HEAD
:temp_broken_files/talent/filters/RegionFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/RegionFilter.tsx
=======

}</div>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
