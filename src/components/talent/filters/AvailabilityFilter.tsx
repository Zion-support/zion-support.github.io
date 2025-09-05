
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox",
import { AvailabilityFilterProps } from "@/types/filters",
const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" },
  { id: "part_time", label: "Part-time" },
  { id: "project", label: "Project-based" }
],
=======
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { AvailabilityFilterProps } from &quot;@/types/filters&quot;;

const AVAILABILITY_OPTIONS = [
  { id: &quot;full_time&quot;, label: &quot;Full-time&quot; },
  { id: &quot;part_time&quot;, label: &quot;Part-time&quot; },
  { id: &quot;project&quot;, label: &quot;Project-based&quot; }
=======

const _AVAILABILITY_OPTIONS = [
  {_id: "full_time", _label: "Full-time"},
  {_id: "part_time", _label: "Part-time"},
  {_id: "project", _label: "Project-based"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
=======
export function AvailabilityFilter(_{_selectedAvailability, _toggleAvailability, _expanded, _toggleSection, _isMobileFilterOpen}: AvailabilityFilterProps) {_return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Availability</span>
<<<<<<< HEAD
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
=======
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
<<<<<<< HEAD
      {expanded && (
        <div className=&quot;mt-4 space-y-2&quot;>
=======
      {_expanded && (
        <div className="mt-4 space-y-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className=&quot;flex items-center&quot;>
              <Checkbox
<<<<<<< HEAD
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`availability-${option.id}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
=======
                id={_`availability-${option.id}`}
                checked={_selectedAvailability.includes(option.id)}
                onCheckedChange={_() => toggleAvailability(option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={_`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
