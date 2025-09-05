
import { ChevronDown, ChevronUp } from &quot;lucide-react&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { AvailabilityFilterProps } from &quot;@/types/filters&quot;;

const AVAILABILITY_OPTIONS = [
  { id: &quot;full_time&quot;, label: &quot;Full-time&quot; },
  { id: &quot;part_time&quot;, label: &quot;Part-time&quot; },
  { id: &quot;project&quot;, label: &quot;Project-based&quot; }
];

export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Availability</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-4 space-y-2&quot;>
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className=&quot;flex items-center&quot;>
              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`availability-${option.id}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
