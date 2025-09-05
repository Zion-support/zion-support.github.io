
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
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-4 space-y-2&quot;>
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className=&quot;flex items-center&quot;>
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`region-${region.id}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
              >
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
  { id: "Africa", label: "Africa" }
];
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {region.label}
              </label>;
            </div>;
          ))}
        </div>;
      )}
    </div>;
  );
}
;