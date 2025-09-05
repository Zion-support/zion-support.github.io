

const _AVAILABILITY_OPTIONS = [
  {_id: "full_time", _label: "Full-time"},
  {_id: "part_time", _label: "Part-time"},
  {_id: "project", _label: "Project-based"}
];

export function AvailabilityFilter(_{_selectedAvailability, _toggleAvailability, _expanded, _toggleSection, _isMobileFilterOpen}: AvailabilityFilterProps) {_return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Availability</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {_expanded && (
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={_`availability-${option.id}`}
                checked={_selectedAvailability.includes(option.id)}
                onCheckedChange={_() => toggleAvailability(option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={_`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {_option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
