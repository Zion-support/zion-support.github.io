 //Filter states const [selectedProductTypes, setSelectedProductTypes] = useState<string[]> ([]);
const [selectedLocations, setSelectedLocations] = useState<string[]> ([]);
const [selectedAvailability, setSelectedAvailability] = useState<string[]> ([]);
const [selectedRating, setSelectedRating] = useState<number | null> (null);
//Generate search suggestions and filter options const searchSuggestions: SearchSuggestion[] = useMemo ( () => generateSearchSuggestions ();
[]);
const filterOptions: FilterOptions = useMemo ( () => generateFilterOptions ();
[]);
return MARKETPLACE LISTINGS.filter (listing => {
  //Search query filter const matchesSearch = !searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) );
//Product type filter return matchesSearch && matchesProductType && matchesLocation && matchesAvailability && // Handle filter changes const handleFilterChange = (filterType: string, value: string) => {
  switch (filterType) {
  case 'productTypes': return {
  searchQuery;
setSearchQuery;
searchSuggestions;
selectedProductTypes;
selectedLocations;
selectedAvailability;
selectedRating;
setSelectedRating;
filteredListings;
handleFilterChange;
clearAllFilters;
filterOptions 
}
}