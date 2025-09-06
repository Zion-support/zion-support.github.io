import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { AvailabilityFilterProps } from '@/types/filters';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { AvailabilityFilterProps } from "@/types/filters";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
const AVAILABILITY_OPTIONS = [
  { id: 'full_time', label: 'Full-time' },
  { id: 'part_time', label: 'Part-time' },
  { id: 'project', label: 'Project-based' },
];

export function AvailabilityFilter({
  selectedAvailability,
  toggleAvailability,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: AvailabilityFilterProps) {
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
<<<<<<< HEAD
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'
=======
        onClick = {toggleSection,}
        className="flex w-full items-center justify-between text-white font-medium"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <span>Availability</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>

      {expanded && (
        <div className='mt-4 space-y-2'>
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className='flex items-center'>              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
=======
            <div key={option.id} className="flex items-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <Checkbox
                id={`availability-${option.id}`}
<<<<<<< HEAD
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
=======
                checked = {selectedAvailability.includes(option.id),}
                onCheckedChange = {() => toggleAvailability(option.id),}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              />
              <label
                htmlFor={`availability-${option.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
<<<<<<< HEAD
              >                {option.label}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {option.label}
              ">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                {option.label}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Availability</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  AVAILABILITY OPTIONS.map (option => (<div key= {;
  option.id ";
}className="flex items-center" > <Checkbox > {;
  option.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;
}"
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
