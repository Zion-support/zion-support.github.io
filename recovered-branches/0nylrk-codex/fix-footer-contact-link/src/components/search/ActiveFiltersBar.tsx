 interface ActiveFiltersBarProps {
  selectedProductTypes: string[];
selectedLocations: string[];
selectedAvailability: string[];
selectedRating: number | null;
searchQuery: string;
onRemoveFilter: (filterType: string, value: string) => void;
onRemoveRating: () => void;
onClearSearch: () => void 
}selectedProductTypes, selectedLocations, selectedAvailability, selectedRating, searchQuery, onRemoveFilter, onRemoveRating, onClearSearch 
}: ActiveFiltersBarProps) {
  const hasActiveFilters = selectedProductTypes.length > 0 || selectedLocations.length > 0 || selectedAvailability.length > 0 || selectedRating !== null || !!searchQuery;
if (!hasActiveFilters) return null;
return (<div className="flex flex-wrap gap-2 items-center mb-4" > <span className="text-sm text-zion-slate-light" >Active filters:</span> {
  searchQuery && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {
  onClearSearch 
}> </ClickableBadge>) 
}{
  selectedProductTypes.map (type => (<ClickableBadge key= {
  `type-$ {
  type 
}` 
}</ClickableBadge>) ) 
}{
  selectedLocations.map (location => (<ClickableBadge key= {
  `location-$ {
  location 
}` 
}</ClickableBadge>) ) 
}{
  selectedAvailability.map (availability => (<ClickableBadge key= {
  `availability-$ {
  availability 
}` 
}</ClickableBadge>) ) 
}{
  selectedRating !== null && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {
  onRemoveRating 
}> </ClickableBadge>) 
}</div>) 
}