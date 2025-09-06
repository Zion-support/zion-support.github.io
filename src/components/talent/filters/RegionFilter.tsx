<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
=======
return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <button
        onClick={toggleSection}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { RegionFilterProps } from '@/types/filters'
const REGION_OPTIONS = [
  { id: 'North America', label: 'North America' }
  { id: 'Europe', label: 'Europe' }
  { id: 'Asia', label: 'Asia' }
  { id: 'South America', label: 'South America' }
  { id: 'Australia', label: 'Australia' }
  { id: 'Africa', label: 'Africa' }
]
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
>>>>>>>         <span>Region</span>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
],

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD
<<<<<<< HEAD


        className="flex w-full items-center justify-between text-white font-medium"
      >

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        <span>Region</span>
>>>>>>>         {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        )}
      </button>
<<<<<<< HEAD

      {expanded && (
=======
>>>>>>>       {expanded && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className='flex w-full items-center justify-between text-white font-medium'      >
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div key={region.id} className="flex items-center">
import { Checkbox } from "@/components/ui/checkbox"
import { RegionFilterProps } from "@/types/filters"
const REGION_OPTIONS = [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
  { id: "Australia", label: "Australia" }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

      

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {expanded && (
        <div className='mt - 4 space - y-2'>;
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className='flex items - center'>              <Checkbox;
                id={`region-${region.id}`}

      </button>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className='flex items-center'>              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
            <div key={region && region.id} className="flex items-center">;

>>>>>>> import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>   { id: "Africa", label: "Africa" }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  { id: "Africa", label: "Africa" }
>>>>>>> ]

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
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
<<<<<<< HEAD


              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label
                htmlFor={`region-${region && region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'>                {region && region.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
               htmlFor="input-;
                {region && region.label}
              ">;
              </label>;
            </div>;

<<<<<<< HEAD
=======
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`region-${region.id}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {region.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
=======
          ))}
        </div>;
      )}

    </div>;
  );

  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS && OPTIONS.map (region => (<divkey= {
  region && region.id "
}className="flex items-center"> <Checkbox > {;
  region && region.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;
}"}

                checked={selected_regions.includes (region.id)}
                onCheckedChange={() => toggle_region (region.id)}
            <div key={region.id} className="flex items - center">;
import { Checkbox  } from '@/components / ui / checkbox';
import { RegionFilterProps  } from '@/types / filters';
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
  { id: "Africa", label: "Africa" }
];
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
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className="flex items - center">;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selected_regions.includes (region.id)}
                onCheckedChange={() => toggle_region (region.id)}
                className='border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple'              />;
              <label;
                html_for={`region-${region.id}`}
                className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
              >                {region.label}                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              html_for="input-;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {region.label}
              ">
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  toggleSection
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)
}</button> {
  REGION OPTIONS.map (region => (<div key= {
<<<<<<< HEAD
  region.id "
}className="flex items-center" > <Checkbox > {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  region.label
}</label> </div>) )
}</div>)
}</div>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  region.id ";
}className="flex items - center" > <Checkbox > {
  region.label;
}</label> </div>) );
}</div>);
}</div>);
}"}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  region.label 
}</label> </div>) ) 
}</div>) ;
}</div>) ;
}"};
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>>                 className="ml-2 text-sm text-zion-slate-light cursor-pointer";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >;
                {region.label}
              </label>;
            </div>;
          ))}
        </div>;
      )}
    </div>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
