
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
;
const REGION_OPTIONS = [;"
  { id: "North America";, label: "North America" ;},;""
  { id: "Europe";, label: "Europe" ;},;""
  { id: "Asia";, label: "Asia" ;},;""
  { id: "South America";, label: "South America" ;},;""
  { id: "Australia";, label: "Australia" ;},;""
  { id: "Africa";, label: "Africa" ;}"]
],;
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen } RegionFilterProps) {;
  return (;"
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";"
      >;
</button>
        <span>Region</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

      </button>;"
        <div className="mt-4 space-y-2">;"
</div>"
            <div key={region.id} className="flex items-center">;"
              <Checkbox;
                id={`region-${region.id}`})
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}

              <label;`;
                htmlFor={`region-${region.id}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
</label>
              </label>;
            </div>;          ))}
        </div>;
)}
    </div>;
  ),;}
 ];
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/RegionFilter.tsx
  toggleSection 
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) 
}</button> {
  REGION OPTIONS.map (region => (<div key= {
  region.id 
}className="flex items-center" > <Checkbox > {
  region.label 
}</label> </div>) ) 
}</div>) 
}</div>) 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
:temp_broken_files/talent/filters/RegionFilter.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/RegionFilter.tsx
  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS.map (region => (<div key= {;"  region.id ";"}className="flex items-center" > <Checkbox > {;
  region.label ;
}</label> </div>) ) ;
}</div>) ;
:temp_broken_files/talent/filters/RegionFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/RegionFilter.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/RegionFilter.tsx
