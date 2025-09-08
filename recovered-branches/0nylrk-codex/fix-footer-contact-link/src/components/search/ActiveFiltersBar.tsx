

interface ActiveFiltersBarProps {





interface ActiveFiltersBarProps {;
  selectedProductTypes: string[],;
  selectedLocations: string[],;
  selectedAvailability: string[],;
  selectedRating: number | null,;
  searchQuery: string,;

  onRemoveFilter: (filterType: string, value: string) => void,;
  onRemoveRating: () => void,;
  onClearSearch: () => void;
}


export function ActiveFiltersBar(): any ({;

          onClick={() => onRemoveFilter('productTypes', type)}

      ))}
      {selectedLocations.map(location => (


