


  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter

      const matchesSearch = !searchQuery || 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      
      // Product type filter
      const matchesProductType = selectedProductTypes.length === 0 || 
        selectedProductTypes.includes(listing.category),
      
      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        (listing.location && selectedLocations.includes(listing.location)),
      
      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 || 
        (listing.availability && selectedAvailability.includes(listing.availability)),
      

      // Rating filter
      const matchesRating = selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      return matchesSearch &&
        matchesProductType &&
        matchesLocation &&
        matchesAvailability &&
        matchesRating
    })

  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev: string[]) =>
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        ),
        break,
      case 'locations':
        setSelectedLocations((prev: string[]) =>
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]
        ),
        break,
      case 'availability':
        setSelectedAvailability((prev: string[]) =>
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        ),
        break,
      default: break
    }

  },
  

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)

  },
  
  return {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    selectedProductTypes,
    selectedLocations,
    selectedAvailability,
    selectedRating,
    setSelectedRating,
    filteredListings,
    handleFilterChange,
    clearAllFilters,
    filterOptions

  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
