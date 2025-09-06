import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { RegionFilterProps } from '@/types/filters';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const REGION_OPTIONS = [
  { id: 'North America', label: 'North America' },
  { id: 'Europe', label: 'Europe' },
  { id: 'Asia', label: 'Asia' },
  { id: 'South America', label: 'South America' },
  { id: 'Australia', label: 'Australia' },
  { id: 'Africa', label: 'Africa' },
];

export function RegionFilter({
  selectedRegions,
  toggleRegion,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: RegionFilterProps) {
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>

      {expanded && (
        <div className='mt-4 space-y-2'>
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className='flex items-center'>              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
=======
            <div key={region.id} className="flex items-center">
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
              />
              <label
                htmlFor={`region-${region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
<<<<<<< HEAD
              >                {region.label}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {region.label}
              ">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                {region.label}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS.map (region => (<div key= {;
  region.id ";
}className="flex items-center" > <Checkbox > {;
  region.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;
}"
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
