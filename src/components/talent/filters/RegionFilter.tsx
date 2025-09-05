
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
const REGION_OPTIONS = [
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
  { id: "Africa", label: "Africa" }
],
=======
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { RegionFilterProps } from &quot;@/types/filters&quot;;

const REGION_OPTIONS = [
  { id: &quot;North America&quot;, label: &quot;North America&quot; },
  { id: &quot;Europe&quot;, label: &quot;Europe&quot; },
  { id: &quot;Asia&quot;, label: &quot;Asia&quot; },
  { id: &quot;South America&quot;, label: &quot;South America&quot; },
  { id: &quot;Australia&quot;, label: &quot;Australia&quot; },
  { id: &quot;Africa&quot;, label: &quot;Africa&quot; }
=======

const _REGION_OPTIONS = [
  {_id: "North America", _label: "North America"},
  {_id: "Europe", _label: "Europe"},
  {_id: "Asia", _label: "Asia"},
  {_id: "South America", _label: "South America"},
  {_id: "Australia", _label: "Australia"},
  {_id: "Africa", _label: "Africa"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
=======
export function RegionFilter(_{_selectedRegions, _toggleRegion, _expanded, _toggleSection, _isMobileFilterOpen}: RegionFilterProps) {_return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Region</span>
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
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className=&quot;flex items-center&quot;>
              <Checkbox
<<<<<<< HEAD
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`region-${region.id}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
=======
                id={_`region-${region.id}`}
                checked={_selectedRegions.includes(region.id)}
                onCheckedChange={_() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={_`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
