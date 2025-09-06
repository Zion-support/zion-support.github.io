<<<<<<< HEAD
<<<<<<< HEAD


  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>>   return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
>>>>>>>         <span>Region</span>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
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
        className='flex w-full items-center justify-between text-white font-medium'      >
=======
        className="flex w-full items-center justify-between text-white font-medium"
      >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======
=======
            <div key={region.id} className="flex items-center">
import { Checkbox } from "@/components/ui/checkbox"
import { RegionFilterProps } from "@/types/filters"
const REGION_OPTIONS = [
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
  { id: "Australia", label: "Australia" }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      {expanded && (
        <div className='mt - 4 space - y-2'>;
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className='flex items - center'>              <Checkbox;
                id={`region-${region.id}`}

      </button>;
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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

=======
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`region-${region.id}`}
<<<<<<< HEAD
<<<<<<< HEAD

                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
=======
=======
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {region.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
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
  region.id "
}className="flex items-center" > <Checkbox > {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  region.label
}</label> </div>) )
}</div>)
}</div>)
}"}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  region.label 
}</label> </div>) ) 
}</div>) ;
}</div>) ;
}"};
<<<<<<< HEAD

>>>>>>>                 className="ml-2 text-sm text-zion-slate-light cursor-pointer";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
;
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
