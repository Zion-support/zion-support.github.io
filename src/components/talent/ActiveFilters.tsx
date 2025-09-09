import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ActiveFiltersProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearAll: () => void;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter,
  onClearAll,
}) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-muted-foreground">Active filters:</span>
      {filters.map((filter) => (
        <div
          key={filter}
          className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
        >
          {filter}
          <button
            onClick={() => onRemoveFilter(filter)}
            className="hover:bg-primary/20 rounded-full p-0.5"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-muted-foreground hover:text-foreground"
      >
        Clear all
      </Button>
    </div>
  );
};