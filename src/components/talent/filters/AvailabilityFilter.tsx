import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { AvailabilityFilterProps } from '@/types/filters';

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

              <Checkbox
                id={`availability-${option.id}`}

              />
              <label
                htmlFor={`availability-${option.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'