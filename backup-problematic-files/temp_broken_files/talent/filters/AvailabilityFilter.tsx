
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { AvailabilityFilterProps } from "@/types/filters",;
;
const AVAILABILITY_OPTIONS = [;
  { id:"full_time", label:"Full-time" },;
  { id:"part_time", label:"Part-time" },;
  { id:"project", label:"Project-based" }
],;
;
export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen } AvailabilityFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Availability</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {AVAILABILITY_OPTIONS.map(option => (;
            <div key={option.id} className="flex items-center">;
              <Checkbox;
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;
                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {option.label}
              </label>;
            </div>;          ))}
        </div>;
      )}
    </div>;
  ),;}
 ];
<<<<<<< HEAD
:temp_broken_files/talent/filters/AvailabilityFilter.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/AvailabilityFilter.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Availability</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  AVAILABILITY OPTIONS.map (option => (<div key= {;"  option.id ";"}className="flex items-center" > <Checkbox > {;
  option.label ;
}</label> </div>) ) ;
}</div>) ;
<<<<<<< HEAD
:temp_broken_files/talent/filters/AvailabilityFilter.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/AvailabilityFilter.tsx
=======

}</div>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
