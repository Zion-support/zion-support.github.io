
import { Checkbox } from "@/components/ui/checkbox",;
import { AvailabilityFilterProps } from "@/types/filters",;

;
const AVAILABILITY_OPTIONS = [;"
  { id: "full_time";, label: "Full-time" ;},;""
  { id: "part_time";, label: "Part-time" ;},;""
  { id: "project";, label: "Project-based" ;}"]
],;
export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen } AvailabilityFilterProps) {;
  return (;"
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium";"
      >;
</button>
        <span>Availability</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

      </button>;"
        <div className="mt-4 space-y-2">;"
</div>"
            <div key={option.id} className="flex items-center">;"
              <Checkbox;
                id={`availability-${option.id}`})
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}

              <label;`;
                htmlFor={`availability-${option.id}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
</label>

              </label>;
            </div>;          ))}
        </div>;



:temp_broken_files/talent/filters/AvailabilityFilter.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/AvailabilityFilter.tsx



