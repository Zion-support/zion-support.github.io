
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { Grid3X3, ListFilter } from &quot;lucide-react&quot;;
import { EnhancedSearchInput } from &quot;@/components/search/EnhancedSearchInput&quot;;
import { FilterSidebar } from &quot;@/components/search/FilterSidebar&quot;;
import { ActiveFiltersBar } from &quot;@/components/search/ActiveFiltersBar&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from &quot;@/data/marketplaceData&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { SearchSuggestion } from &quot;@/types/search&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
  const filterOptions = generateFilterOptions();
  
  // Filter listings based on selected filters
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Product type filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {
      return false;
    }
    
    // Location filter
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {
      return false;
    }
    
    // Availability filter
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {
      return false;
    }
    
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {
      return false;
    }
    
    return true;
  });
  
  const handleFilterChange = (filterType: string, value: string) => {
    // console.log(`Filter changed: ${filterType} = ${value}`);
    switch (filterType) {
      case 'productType':
        setSelectedProductTypes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'location':
        setSelectedLocations(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
    }
  };
  
  const clearAllFilters = () => {
    setSearchQuery("&quot;);
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
  
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: &quot;Quote Requested&quot;,
        description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      navigate(&quot;/request-quote&quot;, {
        state: { 
          serviceType: listing.category,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]
          }
        }
      });
    }
  };

  return (
    <AppLayout>
      <main className=&quot;flex-grow container mx-auto px-4 py-8&quot;>
        <div className=&quot;max-w-4xl mx-auto mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>AI & Tech Marketplace</h1>
          <p className=&quot;text-zion-slate-light&quot;>
            Discover professional services and products for your AI and tech projects.
            Browse our curated collection of solutions from verified providers.
          </p>
        </div>
        
        {/* Search and filter bar */}
        <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
            <div className=&quot;relative flex-1&quot;>
              <EnhancedSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder=&quot;Search the marketplace...&quot;
                searchSuggestions={searchSuggestions}
              />
            </div>
            <div className=&quot;flex gap-2&quot;>
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-zion-slate-light&quot;>
                <Grid3X3 className=&quot;h-4 w-4&quot; />
              </Button>
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-zion-slate-light&quot;>
                <ListFilter className=&quot;h-4 w-4&quot; />
              </Button>
            </div>
          </div>
        </div>

        {/* Main layout with sidebar and results */}
        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-6&quot;>
          {/* Sidebar Filters */}
          <div className=&quot;lg:col-span-1&quot;>
            <FilterSidebar
              filters={{
                selectedProductTypes,
                selectedLocations,
                selectedAvailability,
                selectedRating
              }}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />
          </div>
          
          {/* Main content */}
          <div className=&quot;lg:col-span-3&quot;>
            {/* Active filters display */}
            <ActiveFiltersBar 
              selectedProductTypes={selectedProductTypes}
              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />

            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {searchQuery && ` for &quot;${searchQuery}"`}
              </p>
            </div>
            
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <ProductListingCard 
                    key={listing.id} 
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button 
                    onClick={clearAllFilters}
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
