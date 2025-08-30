import React from 'react.ts';
import { X   } from 'lucide-react.ts';

interface Filter {


  key: anyanystring;
  value: string;
  label: string;


}

interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {

  filters: Filter[];
  onRemoveFilter: (key: string)   => void;
  onClearAll: anyany()   => void;

}

export function ActiveFiltersBar(...args: any[]): any {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light/20">
      <span className="text-sm text-zion-slate-light mr-2">Active filters: anyany</span>
      
      {filters.map((filter)   => (
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