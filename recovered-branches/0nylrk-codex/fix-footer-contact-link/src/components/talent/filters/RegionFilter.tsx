<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {RegionFilterProps} from "@/types/filters";
import { ChevronDown, ChevronUp } from "lucide-react",
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";

import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
<<<<<<< HEAD
  { id: "Australia", label: "Australia" }
<<<<<<< HEAD
=======
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {RegionFilterProps} from "@/types/filters";
<<<<<<< HEAD
=======
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
const REGION_OPTIONS = [
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
  { id: "Africa", label: "Africa" },
];

export function RegionFilter({
  selectedRegions,
  toggleRegion,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: RegionFilterProps) {
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

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
import { ChevronDown, ChevronUp } from "lucide-react",
import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  { id: "Australia", label: "Australia" }import { ChevronDown, ChevronUp } from "lucide-react",;
import { Checkbox } from "@/components/ui/checkbox",;
=======
import { ChevronDown, ChevronUp } from "lucide-react";"
import { Checkbox } from "@/components/ui/checkbox";"
import { RegionFilterProps } from "@/types/filters";
const REGION_OPTIONS = ["
  { id: "North America", label: "North America" },"
  { id: "Europe", label: "Europe" },"
  { id: "Asia", label: "Asia" },"
  { id: "South America", label: "South America" },"
  { id: "Australia", label: "Australia" },"
  { id: "Africa", label: "Africa" },
];

export function RegionFilter({}
  selectedRegions,
  toggleRegion,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: RegionFilterProps) {}
  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Region</span>
        {expanded ? ("
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : ("
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

      {expanded && ("
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map((region) => ("
            <div key={region.id} className="flex items-center">
              <Checkbox;
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
"
import { ChevronDown, ChevronUp } from "lucide-react",;"
import { Checkbox } from "@/components/ui/checkbox",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },;"
  { id: "Europe", label: "Europe" },;"
  { id: "Asia", label: "Asia" },;"
  { id: "South America", label: "South America" },;"
  { id: "Australia", label: "Australia" },;
<<<<<<< HEAD
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  { id: "Africa", label: "Africa" }
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
=======

      <button
        onClick={toggleSection}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

      </button>;

      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className="flex items-center">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Checkbox
=======

      </button>;

      {expanded && (;"
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;"
            <div key={region && region.id} className="flex items-center">;



              <Checkbox;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
<<<<<<< HEAD
              <label
<<<<<<< HEAD

                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <label;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {region.label}
              </label>
            </div>
          ))}
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  );
}
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );

    </div>
  );
}
import { ChevronDown, ChevronUp  } from './lucide-react';'
import { Checkbox  } from '@/components / ui / checkbox';'
import { RegionFilterProps  } from '@/types / filters';
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },"
  { id: "Europe", label: "Europe" },"
  { id: "Asia", label: "Asia" },"
  { id: "South America", label: "South America" },"
  { id: "Australia", label: "Australia" },"
=======
  );
    </div>
  );
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  { id: "Africa", label: "Africa" },
];
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
