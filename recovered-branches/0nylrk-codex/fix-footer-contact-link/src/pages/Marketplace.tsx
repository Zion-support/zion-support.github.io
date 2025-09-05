
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { Grid3X3, ListFilter } from "lucide-react",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { FilterSidebar } from "@/components/search/FilterSidebar",
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar",
import { ProductListingCard } from "@/components/ProductListingCard",
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { useNavigate } from "react-router-dom",
import { SearchSuggestion } from "@/types/search",
import { AppLayout } from "@/layout/AppLayout",
export default function Marketplace() {
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
=======
import React, {_useState} from "react";

export default function Marketplace() {_const _navigate = useNavigate();
  const [searchQuery, _setSearchQuery] = useState("");
  const [selectedProductTypes, _setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, _setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, _setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, _setSelectedRating] = useState<number | null>(null);
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
  const _filterOptions = generateFilterOptions();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Filter listings based on selected filters
  const _filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
<<<<<<< HEAD
      return false
    }
    
    // Product type filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {
      return false
    }
    
    // Location filter
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {
      return false
    }
    
    // Availability filter
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {
      return false
    }
    
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {
      return false
    }
=======
      return false;}
    
    // Product type filter
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {_return false;}
    
    // Location filter
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {_return false;}
    
    // Availability filter
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {_return false;}
    
    // Rating filter
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {_return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return true
  }),
  
<<<<<<< HEAD
  const handleFilterChange = (filterType: string, value: string) => {
<<<<<<< HEAD
    // // // console.log(`Filter changed: ${filterType} = ${value}`),
=======
    // console.log(`Filter changed: ${filterType} = ${value}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    switch (filterType) {
      case 'productType':
        setSelectedProductTypes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        ),
        break,
      case 'location':
        setSelectedLocations(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        ),
        break,
      case 'availability':
        setSelectedAvailability(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        ),
        break
    }
  },
  
  const clearAllFilters = () => {
<<<<<<< HEAD
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
  },
=======
    setSearchQuery("&quot;);
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId),
    
    if (listing) {
      toast({
        title: &quot;Quote Requested&quot;,
        description: `Your quote request for ${listing.title} has been sent.`
      }),
      
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      })
    }
  },

<<<<<<< HEAD
  return (
    <AppLayout>
      <main className=&quot;flex-grow container mx-auto px-4 py-8&quot;>
        <div className=&quot;max-w-4xl mx-auto mb-8&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>AI & Tech Marketplace</h1>
          <p className=&quot;text-zion-slate-light&quot;>
=======
  return (_<AppLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>
          <p className="text-zion-slate-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Discover professional services and products for your AI and tech projects.
            Browse our curated collection of solutions from verified providers.
          </p>
        </div>
        
<<<<<<< HEAD
        {/* Search and filter bar */}
        <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
            <div className=&quot;relative flex-1&quot;>
              <EnhancedSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder=&quot;Search the marketplace...&quot;
                searchSuggestions={searchSuggestions}
=======
        {_/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput
                value={_searchQuery}
                onChange={_setSearchQuery}
                placeholder="Search the marketplace..."
                searchSuggestions={_searchSuggestions}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Main layout with sidebar and results */}
        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-6&quot;>
          {/* Sidebar Filters */}
          <div className=&quot;lg:col-span-1&quot;>
=======
        {_/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {_/* Sidebar Filters */}
          <div className="lg:col-span-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FilterSidebar
              filters={_{
                selectedProductTypes, _selectedLocations, _selectedAvailability, _selectedRating}}
              filterOptions={_filterOptions}
              onFilterChange={_handleFilterChange}
              onRatingChange={_setSelectedRating}
              onClearFilters={_clearAllFilters}
            />
          </div>
          
<<<<<<< HEAD
          {/* Main content */}
          <div className=&quot;lg:col-span-3&quot;>
            {/* Active filters display */}
=======
          {_/* Main content */}
          <div className="lg:col-span-3">
            {_/* Active filters display */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              <p className="text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {searchQuery && ` for &quot;${searchQuery}"`}
=======
              <p className="text-zion-slate-light">
                Showing {_filteredListings.length} results
                {_searchQuery && ` for "${searchQuery}"`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
