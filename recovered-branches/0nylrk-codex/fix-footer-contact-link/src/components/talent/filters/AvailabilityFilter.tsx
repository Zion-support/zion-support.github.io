import { Checkbox } from "@/components/ui/checkbox",
import { AvailabilityFilterProps } from "@/types/filters",
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }
  { id: "project", label: "Project-based" }

const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }

],

=======];
export function AvailabilityFilter({
  selectedAvailability
  toggleAvailability
  expanded
  toggleSection
  isMobileFilterOpen
}: AvailabilityFilterProps) {
],



const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }
=======
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {AvailabilityFilterProps} from "@/types/filters";
const AVAILABILITY_OPTIONS = [;
  { id: "full_time", label: "Full-time" },;
  { id: "part_time", label: "Part-time" },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  { id: "project", label: "Project-based" }

export function AvailabilityFilter(): any ({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {;

  return (
=======

],


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {expanded && (
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map((option) => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import { ChevronDown, ChevronUp } from "lucide-react",;
import { Checkbox } from "@/components/ui/checkbox",;
import { AvailabilityFilterProps } from "@/types/filters",;
const AVAILABILITY_OPTIONS = [;
  { id: "full_time", label: "Full-time" },;
  { id: "part_time", label: "Part-time" },;
  { id: "project", label: "Project-based" }
];
export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {;
  return (;
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {AVAILABILITY_OPTIONS && AVAILABILITY_OPTIONS.map(option => (;
            <div key={option && option.id} className="flex items-center">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Checkbox
                id={`availability-${option && option.id}`}
                checked={selectedAvailability && selectedAvailability.includes(option && option.id)}
                onCheckedChange={() => toggleAvailability(option && option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label

                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >


                {option.label}
              </label>
            </div>
    </div>;
  );
  )

}
=======
}
  )

}=======import { ChevronDown, ChevronUp  } from './lucide-react';
import { Checkbox  } from '@/components / ui / checkbox';
import { AvailabilityFilterProps  } from '@/types / filters';
const AVAILABILITY_OPTIONS = [;
  { id: "full_time", label: "Full - time" },
  { id: "part_time", label: "Part - time" },
  { id: "project", label: "Project - based" },
];
;
=======


