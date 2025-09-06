import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { PriceFilterProps } from '@/types/filters';

export function PriceFilter({ 
  priceRange, 
  setPriceRange, 
  onApply 
}: PriceFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleSection = () => {
    setExpanded(!expanded);
  };

  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500]);
  };

  const handleApply = () => {
    onApply();
  };

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
            aria-label="Hourly rate range"
            value={[priceRange[0], priceRange[1]]}
            onValueChange={handleChange}
            min={0}
            max={500}
            step={5}
            className="w-full"
          />
          <button
            onClick={handleApply}
            className="mt-4 w-full bg-zion-blue text-white py-2 px-4 rounded-md hover:bg-zion-blue-dark transition-colors"
          >
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );
}