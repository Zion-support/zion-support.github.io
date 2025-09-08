
interface Filter {

<<<<<<< HEAD
interface SearchFilters {
  types: string[],
  category: string,
  minPrice: number,
  maxPrice: number,
  minRating: number,
  sort: string


import React from 'react',;
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;

          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"


            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      <Button
        variant="ghost"
        size="sm"

        Clear all
      </Button>
    </div>
  )


=======
  key: anystring;
  value: string;
  label: string;

}

interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {

  filters: Filter[];
  onRemoveFilter: (key: string)  => void;
  onClearAll: any()  => void;

}

export function ActiveFiltersBar(...args: any[]): any {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light/20">
      <span className="text-sm text-zion-slate-light mr-2">Active filters: any</span>
      
      {filters.map((filter)  => (
        <div
          key={filter.key}
          className="inline-flex items-center gap-2 px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
        >
          <span>{filter.label}: {filter.value}</span>
          <button
            onClick={() => onRemoveFilter(filter.key)}
            className="hover:bg-zion-cyan/30 rounded-full p-1 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      
      <button
        onClick={onClearAll}
        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors underline"
      >
        Clear all
      </button>
    </div>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
