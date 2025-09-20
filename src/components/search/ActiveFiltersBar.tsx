import React from "react"
import { X } from "lucide-react"
interface Filter {;
  key: string,value: string,label: string;
};

interface ActiveFiltersBarProps {;
  filters: Filter[],onRemoveFilter: (key: string) => void,onClearAll: () => void;
};

export function ActiveFiltersBar({ filters, onRemoveFilter, onClearAll }: ActiveFiltersBarProps) {;
  if (filters.length === 0) {;
    return null;
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light/20">;
      <span className="text-sm text-zion-slate-light mr-2">Active filters:</[^>]*>

      {filters.map((filter) => (;
        <div;
          key={filter.key};
          className="[^"]*"
        >;
          <span>{filter.label}: {filter.value}</[^>]*>
          <button;
            onClick={() => onRemoveFilter(filter.key)};
            className="[^"]*"
          >;
            <[^>]*/>
          </[^>]*>
        </[^>]*>
      ))};

      <button;
        onClick={onClearAll};
        className="[^"]*"
      >;
        Clear all;
      </[^>]*>
    </[^>]*>
  );
};