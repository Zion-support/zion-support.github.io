
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
const REGION_OPTIONS = [
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
  { id: "Africa", label: "Africa" }
],];

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-4 space-y-2&quot;>          {REGION_OPTIONS.map(region => (
            <div key={region.id} className=&quot;flex items-center&quot;>
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`region-${region.id}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;              >
                {_region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
