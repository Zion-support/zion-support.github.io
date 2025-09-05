

export function PriceFilter(_{_priceRange, _setPriceRange, _expanded, _toggleSection, _isMobileFilterOpen}: PriceFilterProps) {_const _handleChange = (_values: number[]) => {
    setPriceRange([values[0], _values[1]]);};

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={_toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Hourly Rate</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {_expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${_priceRange[1]}/hr</span>
          </div>
          <Slider 
            value={_[priceRange[0], _priceRange[1]]}
            min={_50}
            max={_200}
            step={_5}
            onValueChange={_handleChange}
            className="mt-6"
          />
        </div>
      )}
    </div>
  );
}
