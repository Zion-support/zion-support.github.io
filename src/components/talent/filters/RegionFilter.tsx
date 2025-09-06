<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'

<<<<<<< HEAD
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
=======
const REGION_OPTIONS = [;
  { id: 'North America', label: 'North America' },;
  { id: 'Europe', label: 'Europe' },;
  { id: 'Asia', label: 'Asia' },;
  { id: 'South America', label: 'South America' },;
  { id: 'Australia', label: 'Australia' },;
  { id: 'Africa', label: 'Africa' },;
];

export function RegionFilter(): any ({;
  selectedRegions,;
  toggleRegion,;
  expanded,;
  toggleSection,;
  isMobileFilterOpen,;
}: RegionFilterProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'>;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />;
        ) : (;
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />;
        )}
<<<<<<< HEAD
      </button>
      {expanded && (
        <div className='mt-4 space-y-2'>
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className='flex items-center'>              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
            <div key={region.id} className="flex items-center">
import { Checkbox } from "@/components/ui/checkbox"
import { RegionFilterProps } from "@/types/filters"
const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
  { id: "Australia", label: "Australia" }
=======
      </button>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className='flex items-center'>              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
            <div key={region && region.id} className="flex items-center">;

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  { id: "Africa", label: "Africa" }
]

export function RegionFilter(): any ({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
<<<<<<< HEAD
=======
      </button>;

      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className="flex items-center">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {region.label}
              ">
                {region.label}
              </label>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          ))}
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
  toggleSection
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)
}</button> {
  REGION OPTIONS.map (region => (<div key= {
  region.id "
}className="flex items-center" > <Checkbox > {
  region.label
}</label> </div>) )
}</div>)
}</div>)
}"}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
