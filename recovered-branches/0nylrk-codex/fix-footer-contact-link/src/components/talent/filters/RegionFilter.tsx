
<<<<<<< HEAD


=======
const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }


const REGION_OPTIONS = [;
  { "id": "North America", "label": "North America" }"
  { "id": "Europe", "label": "Europe" }"
  { "id": "Asia", "label": "Asia" }"
  { "id": "South America", "label": "South America" }"
  { "id": "Australia", "label": "Australia" }import { ChevronDown, ChevronUp } from "lucide-react";"
import { Checkbox } from "@/components/ui/checkbox";"
import { RegionFilterProps } from "@/types/filters",;"
  { "id": "North America", "label": "North America" },;"
  { "id": "Europe", "label": "Europe" },;"
  { "id": "Asia", "label": "Asia" },;"
  { "id": "South America", "label": "South America" },;"
  { "id": "Australia", "label": "Australia" },;"
  { "id": "Africa", "label": "Africa" }"

import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
>>>>>>> origin/cursor/delete-old-data-records-6bba

const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }


<<<<<<< HEAD
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>


      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map((region) => (
            <div key={region.id} className="flex items-center">
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >


=======
  { id: "Australia", label: "Australia" }import { ChevronDown, ChevronUp } from "lucide-react",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Checkbox } from "@/components/ui/checkbox",;

import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },;"
  { id: "Europe", label: "Europe" },;"
  { id: "Asia", label: "Asia" },;"
  { id: "South America", label: "South America" },;"
  { id: "Australia", label: "Australia" },;

  { id: "Africa", label: "Africa" }
<<<<<<< HEAD

];

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (;
];
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {
export function RegionFilter(): any ({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (

=======
];

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"

        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}

<<<<<<< HEAD
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className="flex items-center">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <Checkbox

                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}


<<<<<<< HEAD


=======
  { id: "Africa", label: "Africa" },
];
;
export /**
 * RegionFilter - Function description
 */
function RegionFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Region</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 4 space - y-2">;
          {REGION_OPTIONS.map ((region) => (
            <div key={region.id} className="flex items - center">;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selected_regions.includes (region.id)}
                onCheckedChange={() => toggle_region (region.id)}
                className="border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`region-${region.id}`}
                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              >;
                {region.label}
              </label>;
            </div>))}
        </div>)}
    </div>);
}

import { ChevronDown, ChevronUp } from "lucide-react",;
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
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  )
}
;

export /**
 * RegionFilter - Function description
 */
function RegionFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;


import { ChevronDown, ChevronUp } from "lucide-react";""
import { Checkbox } from "@/components/ui/checkbox";""
import { RegionFilterProps } from "@/types/filters";"
const REGION_OPTIONS = ["
  { id: "North America", label: "North America" },""
  { id: "Europe", label: "Europe" },""
  { id: "Asia", label: "Asia" },""
  { id: "South America", label: "South America" },""
  { id: "Australia", label: "Australia" },""
  { id: "Africa", label: "Africa" },"]

];

export function RegionFilter({
  selectedRegions,
  toggleRegion,
  expanded,

  toggleSection,
  isMobileFilterOpen,)
}: RegionFilterProps) {
  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium""
      >
</button>
        <span>Region</span>"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />"

      </button>"
        <div className="mt-4 space-y-2">"
</div>"
            <div key={region.id} className="flex items-center">"
              <Checkbox;
                id={`region-${region.id}`})
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}

              <label;`;
                htmlFor={`region-${region.id}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer""
</label>"
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
        className="flex w-full items-center justify-between text-white font-medium">;"
        <span>Region</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

      </button>;"
        <div className="mt-4 space-y-2">;"
            <div key={region && region.id} className="flex items-center">;"
              <Checkbox;`;
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}

              <label;
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  )
}
;
        </div>;
    </div>"`;
pr-12325

    </div>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
