
import React, {_useState} from "react";

export default function Marketplace() {_const _navigate = useNavigate();
  const [searchQuery, _setSearchQuery] = useState("");
  const [selectedProductTypes, _setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, _setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, _setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, _setSelectedRating] = useState<number | null>(null);
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
  const _filterOptions = generateFilterOptions();
  
  // Filter listings based on selected filters
  const _filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;}
    
    // Product type filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {_return false;}
    
    // Location filter
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {_return false;}
    
    // Availability filter
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {_return false;}
    
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {_return false;}
    
    return true;
  });
  
  const _handleFilterChange = (_filterType: string, _value: string) => {_switch (filterType) {
      case 'productType':
        setSelectedProductTypes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, _value]
        );
        break;
      case 'location':
        setSelectedLocations(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, _value]
        );
        break;
      case 'availability':
        setSelectedAvailability(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, _value]
        );
        break;}
  };
  
  const _clearAllFilters = () => {_setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);};
  
  // Handle requesting a quote
  const _handleRequestQuote = (_listingId: string) => {_const _listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: "Quote Requested", _description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {_state: { 
          serviceType: listing.category, _specificItem: {
            id: listing.id, _title: listing.title, _category: listing.category, _image: listing.images?.[0]}
        }
      });
    }
  };

  return (_<AppLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>
          <p className="text-zion-slate-light">
            Discover professional services and products for your AI and tech projects.
            Browse our curated collection of solutions from verified providers.
          </p>
        </div>
        
        {_/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput
                value={_searchQuery}
                onChange={_setSearchQuery}
                placeholder="Search the marketplace..."
                searchSuggestions={_searchSuggestions}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-zion-slate-light">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zion-slate-light">
                <ListFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {_/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {_/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar
              filters={_{
                selectedProductTypes, _selectedLocations, _selectedAvailability, _selectedRating}}
              filterOptions={_filterOptions}
              onFilterChange={_handleFilterChange}
              onRatingChange={_setSelectedRating}
              onClearFilters={_clearAllFilters}
            />
          </div>
          
          {_/* Main content */}
          <div className="lg:col-span-3">
            {_/* Active filters display */}
            <ActiveFiltersBar 
              selectedProductTypes={_selectedProductTypes}
              selectedLocations={_selectedLocations}
              selectedAvailability={_selectedAvailability}
              selectedRating={_selectedRating}
              searchQuery={_searchQuery}
              onRemoveFilter={_handleFilterChange}
              onRemoveRating={_() => setSelectedRating(null)}
              onClearSearch={_() => setSearchQuery("")}
            />

            {_/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {_filteredListings.length} results
                {_searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            {_/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {_filteredListings.length > 0 ? (_filteredListings.map((listing) => (
                  <ProductListingCard 
                    key={listing.id} 
                    listing={_listing}
                    onRequestQuote={_handleRequestQuote}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button 
                    onClick={_clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
