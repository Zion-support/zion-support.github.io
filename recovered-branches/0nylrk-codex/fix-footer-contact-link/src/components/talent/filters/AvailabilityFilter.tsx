
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from "lucide-react",
import { Checkbox } from "@/components/ui/checkbox";
import { AvailabilityFilterProps } from "@/types/filters";

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {AvailabilityFilterProps} from "@/types/filters";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ChevronDown, ChevronUp } from "lucide-react",
<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox";
import { AvailabilityFilterProps } from "@/types/filters";

=======
import { Checkbox } from "@/components/ui/checkbox",
import { AvailabilityFilterProps } from "@/types/filters",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }
  { id: "project", label: "Project-based" }
];
export function AvailabilityFilter({
  selectedAvailability
  toggleAvailability
  expanded
  toggleSection
  isMobileFilterOpen
}: AvailabilityFilterProps) {

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Availability</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map((option) => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`availability-${option && option.id}`}
                checked={selectedAvailability && selectedAvailability.includes(option && option.id)}
                onCheckedChange={() => toggleAvailability(option && option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label
<<<<<<< HEAD
                htmlFor={`availability-${option && option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer">;
                {option && option.label}
              </label>;
            </div>;
          ))}
        </div>;
      )}
=======

                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {option.label}
              </label>
            </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
        </div>;
      )}
    </div>
<<<<<<< HEAD
  );
}
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    </div>
  );
}
import { ChevronDown, ChevronUp  } from './lucide-react';
import { Checkbox  } from '@/components / ui / checkbox';
import { AvailabilityFilterProps  } from '@/types / filters';
const AVAILABILITY_OPTIONS = [;
  { id: "full_time", label: "Full - time" },
  { id: "part_time", label: "Part - time" },
  { id: "project", label: "Project - based" },
];
;
<<<<<<< HEAD
export /**
 * AvailabilityFilter - Function description
 */
function AvailabilityFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Availability</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 4 space - y-2">;
          {AVAILABILITY_OPTIONS.map ((option) => (
            <div key={option.id} className="flex items - center">;
              <Checkbox;
                id={`availability-${option.id}`}
                checked={selected_availability.includes (option.id)}
                onCheckedChange={() => toggle_availability (option.id)}
                className="border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`availability-${option.id}`}
                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              >;
                {option.label}
              </label>;
            </div>))}
        </div>)}
    </div>);
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
