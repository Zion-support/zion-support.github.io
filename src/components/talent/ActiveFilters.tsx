export function ActiveFilters({
  selectedSkills,
  toggleSkill,
  selectedAvailability,
  toggleAvailability,
  selectedRegions,
  toggleRegion,
  priceRange,
  setPriceRange,
  experienceRange,
  setExperienceRange,
  clearFilters,
}: ActiveFiltersProps) {
  // Check if any filters are active
  const hasActiveFilters =
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 200;

  if (!hasActiveFilters) return null;

  return (
    <div className='mb-6 flex flex-wrap gap-2 items-center'>
      <span className='text-zion-slate-light text-sm'>Active filters:</span>

      {selectedSkills.map(skill => (

        >
          {skill}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {selectedAvailability.map(status => (

        >
          {status === 'full-time'
            ? 'Full-time'
            : status === 'part-time'
              ? 'Part-time'
              : 'Project-based'}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {selectedRegions.map(region => (

        >
          {region}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (

        >
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className='h-3 w-3' />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (

        >
          {experienceRange[0]}-{experienceRange[1]} years
          <X className='h-3 w-3' />
        </ClickableBadge>
      )}

      >
        Clear All
      </Button>
    </div>
  );

}