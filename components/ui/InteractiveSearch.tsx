import React from 'react';

export type CategoryOption = { label: string; value: string };

export type FilterState = {
  keyword: string;
  category: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
};

export type InteractiveSearchProps = {
  categories: CategoryOption[];
  value: FilterState;
  onChange: (next: FilterState) => void;
  priceEnabled?: boolean;
  ratingEnabled?: boolean;
};

export default function InteractiveSearch({ categories, value, onChange, priceEnabled = true, ratingEnabled = true }: InteractiveSearchProps) {
  return (
import React from './react';
export default /**
export default /**



        <select
          value={value.category}
          onChange={(e) => onChange({ ...value, category: e.target.value })}
          className="px-3 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm"
        >


        {priceEnabled && (
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={value.minPrice ?? ''}
              onChange={(e) => onChange({ ...value, minPrice: e.target.value ? Number(e.target.value) : undefined })}
              placeholder="Min $"
              className="w-1/2 px-3 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm"
            />
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={value.maxPrice ?? ''}
              onChange={(e) => onChange({ ...value, maxPrice: e.target.value ? Number(e.target.value) : undefined })}
              placeholder="Max $"
              className="w-1/2 px-3 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm"
            />
          </div>
        )}

        {ratingEnabled && (
          <select
            value={String(value.minRating ?? '')}
            onChange={(e) => onChange({ ...value, minRating: e.target.value ? Number(e.target.value) : undefined })}
            className="px-3 py-2 rounded-md bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm"
          >
            <option value="">Any Rating</option>
            <option value="4">4+ stars</option>
            <option value="4.5">4.5+ stars</option>
            <option value="5">5 stars</option>
          </select>
        )}
      </div>
    </div>
  );
