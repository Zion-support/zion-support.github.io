

export function ExperienceFilter(_{_experienceRange, _setExperienceRange, _expanded, _toggleSection, _isMobileFilterOpen}: ExperienceFilterProps) {_const _handleChange = (_values: number[]) => {
    setExperienceRange([values[0], _values[1]]);};

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={_toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {_expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{_experienceRange[1]} years</span>
          </div>
          <Slider 
            value={_[experienceRange[0], _experienceRange[1]]}
            min={_0}
            max={_15}
            step={_1}
            onValueChange={_handleChange}
            className="mt-6"
          />
        </div>
      )}
    </div>
  );
}
