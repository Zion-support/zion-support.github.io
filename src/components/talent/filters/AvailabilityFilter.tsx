<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { AvailabilityFilterProps } from '@/types/filters'
const AVAILABILITY_OPTIONS = [
  { id: 'full_time', label: 'Full-time' }
  { id: 'part_time', label: 'Part-time' }
  { id: 'project', label: 'Project-based' }
]
export function AvailabilityFilter({
  selectedAvailability
  toggleAvailability
  expanded
  toggleSection
  isMobileFilterOpen
}: AvailabilityFilterProps) {
=======

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox",
import { AvailabilityFilterProps } from "@/types/filters",
const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" },
  { id: "part_time", label: "Part-time" },
  { id: "project", label: "Project-based" }
],

export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
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
        <span>Availability</span>
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
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
<<<<<<< HEAD
            <div key={option.id} className="flex items-center">
import { Checkbox } from "@/components/ui/checkbox"
import { AvailabilityFilterProps } from "@/types/filters"
const AVAILABILITY_OPTIONS = [
<<<<<<< HEAD
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }
=======
  { id: "full_time", label: "Full-time" },
  { id: "part_time", label: "Part-time" },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { AvailabilityFilterProps } from "@/types/filters",;
const AVAILABILITY_OPTIONS = [;
  { id: "full_time", label: "Full-time" },;
  { id: "part_time", label: "Part-time" },;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  { id: "project", label: "Project-based" }
]

export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Availability</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`availability-${option.id}`}
<<<<<<< HEAD
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {option.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {option.label}
              ">
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  toggleSection
}className="flex w-full items-center justify-between text-white font-medium" > <span>Availability</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)
}</button> {
  AVAILABILITY OPTIONS.map (option => (<div key= {
  option.id "
}className="flex items-center" > <Checkbox > {
<<<<<<< HEAD
  option.label
}</label> </div>) )
}</div>)
}</div>)
}"}
=======
  option.label 
}</label> </div>) ) 
}</div>) ;
}</div>) ;
}"};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {option.label}
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
