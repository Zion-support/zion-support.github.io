<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {RegionFilterProps} from "@/types/filters";
>>>>>>> merged-prs-20250907-203621
import { ChevronDown, ChevronUp } from "lucide-react",
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";

<<<<<<< HEAD
=======
import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
<<<<<<< HEAD

=======
<<<<<<< HEAD
  { id: "Australia", label: "Australia" }
=======
<<<<<<< HEAD

=======
  { id: "Australia", label: "Australia" }
<<<<<<< HEAD

],

>>>>>>> merged-prs-20250907-203621
  { id: "Africa", label: "Africa" }
];
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {
<<<<<<< HEAD
=======
],

=======
=======
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {RegionFilterProps} from "@/types/filters";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const REGION_OPTIONS = [;
<<<<<<< HEAD
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
=======
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
<<<<<<< HEAD
=======
<<<<<<< HEAD
const REGION_OPTIONS = [
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
  { id: "Africa", label: "Africa" }
],

export function RegionFilter({
  selectedRegions,
  toggleRegion,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: RegionFilterProps) {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }

<<<<<<< HEAD
  { id: "Australia", label: "Australia" }import { ChevronDown, ChevronUp } from "lucide-react",;
import { Checkbox } from "@/components/ui/checkbox",;

import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },;"
  { id: "Europe", label: "Europe" },;"
  { id: "Asia", label: "Asia" },;"
  { id: "South America", label: "South America" },;"
  { id: "Australia", label: "Australia" },;

  { id: "Africa", label: "Africa" }
>>>>>>> origin/chore/fix-lint-and-merge
];
export function RegionFilter({};
  selectedRegions;
  toggleRegion;
  expanded;
  toggleSection;
  isMobileFilterOpen;
}: RegionFilterProps) {}
"
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

=======
<<<<<<< HEAD
  { id: "Australia", label: "Australia" }import { ChevronDown, ChevronUp } from "lucide-react",;
=======
],


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { ChevronDown, ChevronUp } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Checkbox } from "@/components/ui/checkbox",;

import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },;"
  { id: "Europe", label: "Europe" },;"
  { id: "Asia", label: "Asia" },;"
  { id: "South America", label: "South America" },;"
  { id: "Australia", label: "Australia" },;

  { id: "Africa", label: "Africa" }
>>>>>>> origin/chore/fix-lint-and-merge
];
<<<<<<< HEAD
export function RegionFilter({};
  selectedRegions;
  toggleRegion;
  expanded;
  toggleSection;
  isMobileFilterOpen;
}: RegionFilterProps) {}
"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className="flex items-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Checkbox

                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
<<<<<<< HEAD

  { id: "Africa", label: "Africa" },
];
;
=======
<<<<<<< HEAD
    </div>
  )
}
=======

<<<<<<< HEAD
=======
    </div>;
  );
    </div>

  )

}
import { ChevronDown, ChevronUp  } from './lucide-react';
import { Checkbox  } from '@/components / ui / checkbox';
import { RegionFilterProps  } from '@/types / filters';
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export /**
 * RegionFilter - Function description
 */
function RegionFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    </div>"
=======
    </div>"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
