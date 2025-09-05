

const _REGION_OPTIONS = [
  {_id: "North America", _label: "North America"},
  {_id: "Europe", _label: "Europe"},
  {_id: "Asia", _label: "Asia"},
  {_id: "South America", _label: "South America"},
  {_id: "Australia", _label: "Australia"},
  {_id: "Africa", _label: "Africa"}
];

export function RegionFilter(_{_selectedRegions, _toggleRegion, _expanded, _toggleSection, _isMobileFilterOpen}: RegionFilterProps) {_return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Region</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {_expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
              <Checkbox
                id={_`region-${region.id}`}
                checked={_selectedRegions.includes(region.id)}
                onCheckedChange={_() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={_`region-${region.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {_region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
