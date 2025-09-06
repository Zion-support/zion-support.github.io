
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {Grid3X3, ListFilter} from "lucide-react";
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {FilterSidebar} from "@/components/search/FilterSidebar";
import {ActiveFiltersBar} from "@/components/search/ActiveFiltersBar";
import {ProductListingCard} from "@/components/ProductListingCard";
import {MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions} from "@/data/marketplaceData";
import {toast} from "@/hooks/use-toast";
import {useNavigate} from "react-router-dom";
import {SearchSuggestion} from "@/types/search";
import {AppLayout} from "@/layout/AppLayout";
export default function Marketplace() {;

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);



  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
  
  // Filter listings based on selected filters
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { Grid3X3, ListFilter } from "lucide-react",;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { FilterSidebar } from "@/components/search/FilterSidebar",;
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData",;
import { toast } from "@/hooks/use-toast",;
import { useNavigate } from "react-router-dom",;
import { SearchSuggestion } from "@/types/search",;
import { AppLayout } from "@/layout/AppLayout",;
export default function Marketplace() {;
  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  const filterOptions = generateFilterOptions(),;
  // Filter listings based on selected filters;
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {;
    // Search filter;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {;
      return false;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    if (selectedRating && (!listing.rating |listing.rating < selectedRating)) {
      return false
    }
    return true
  });
  const handleFilterChange = (filterType: string, value: string) => {
    console.log(`Filter changed: ${filterType} = ${value}`)
    
    return true
  }),
  
  const handleFilterChange = (filterType: string, value: string) => {
    // // // console.log(`Filter changed: ${filterType} = ${value}`),
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
        ),
        break
    }
  }
  },
  
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
  }
  },
  
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"
        description: `Your quote request for ${listing.title} has been sent.`
      });
      }),
      
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
;
    return true;
  }),;
  const handleFilterChange = (filterType: string, value: string) => {;
    // // // console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;
      case 'productType':;
        setSelectedProductTypes(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
        break,;
      case 'location':;
        setSelectedLocations(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
        break,;
      case 'availability':;
        setSelectedAvailability(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
        break;
    }
  },;
  const clearAllFilters = () => {;
    setSearchQuery(""),;
    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;

    setSelectedRating(null);
  };

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === listingId),;

    if (listing) {;
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });

      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;

import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
import { Grid3X3, ListFilter } from './lucide-react';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { FilterSidebar } from '@/components / search / FilterSidebar';
import { ActiveFiltersBar } from '@/components / search / ActiveFiltersBar';
import { ProductListingCard } from '@/components / ProductListingCard';
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from '@/data / marketplace_data';
import { toast } from '@/hooks / use - toast';
import { use_navigate } from './react-router-dom';
import { SearchSuggestion } from '@/types / search';
import { AppLayout } from '@/layout / AppLayout';
export default /**
 * Marketplace - Function description
 */
function Marketplace() {
  const navigate = use_navigate ();
  const [search_query, setSearchQuery] = useState ("");
  const [selectedProductTypes, setSelectedProductTypes] = useState < string[]>([]);
  const [selected_locations, setSelectedLocations] = useState < string[]>([]);
  const [selected_availability, setSelectedAvailability] = useState < string[]>([]);
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
  const search_suggestions: SearchSuggestion[] = generateSearchSuggestions (),
  const filter_options = generateFilterOptions ();
;
  // Filter listings based on selected filters;
  const filtered_listings = MARKETPLACE_LISTINGS.filter (listing => {
    // Search filter;
    if (.includes (search_query.toLowerCase ()) &&) {
  $2
}
        !listing.description.toLowerCase ().includes (search_query.toLowerCase ()) &&;
        !listing.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ()))) {
      return false;
    }
    // Product type filter;
    if () {) {
  $2
}
      return false;
    }
    // Location filter;
    if () {) {
  $2
}
      return false;
    }
    // Availability filter;
    if () {) {
  $2
}
      return false;
    }
    // Rating filter;
    if () {) {
  $2
}
      return false;
    }
    return true;
  });
;
  const handleFilterChange = (filter_type: string, value: string) =>: any {
    console.log (`Filter changed: ${filter_type} = ${value}`),
    switch (filter_type) {
      case 'product_type':;
        setSelectedProductTypes (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;
      case 'location':;
        setSelectedLocations (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;
      case 'availability':;
        setSelectedAvailability (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;
    }
  }
;
  const clearAllFilters = () =>: any {
    setSearchQuery ("");
    setSelectedProductTypes ([]);
    setSelectedLocations ([]);
    setSelectedAvailability ([]);
    setSelectedRating (null);
  }
;
  // Handle requesting a quote;
  const handleRequestQuote = (listing_id: string) =>: any {
    const listing = MARKETPLACE_LISTINGS.find (item => item.id === listing_id),
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Quote Requested",
        description: `Your quote request for ${listing.title} has been sent.`;
      });
;
      // Navigate to the quote request page with the listing information;
      navigate ("/request - quote", {
        state: {
          service_type: listing.category,
          specific_item: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0];

=======
            id: listing.id,;
            title: listing.title,;
            category: listing.category,;
            image: listing.images?.[0];

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }
        }
      });
    }


  },
=======
  };
  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <AppLayout>;
      <main className="flex-grow container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto mb-8">;
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;
          <p className="text-zion-slate-light">;
=======
;
  return (
    <AppLayout>;
      <main className="flex - grow container mx - auto px - 4 py - 8">;
        <div className="max - w-4xl mx - auto mb - 8">;
          <h1 className="text - 3xl font - bold text - white mb - 4">AI & Tech Marketplace</h1>;
          <p className="text - zion - slate - light">;

            Discover professional services and products for your AI and tech projects.;
            Browse our curated collection of solutions from verified providers.;
          </p>;
        </div>;

              />;
            </div>;
            <div className="flex gap-2">;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <Grid3X3 className="h-4 w-4" />;
              </Button>;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <ListFilter className="h-4 w-4" />;
=======
        {/* Search and filter bar */}
        <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 mb - 8">;
          <div className="flex flex - col md:flex - row gap - 4">;
            <div className="relative flex - 1">;
              <EnhancedSearchInput;
                value={search_query}
                on_change={setSearchQuery}
                placeholder="Search the marketplace...";
                search_suggestions={search_suggestions}
              />;
            </div>;
            <div className="flex gap - 2">;
              <Button variant="ghost" size="icon" className="text - zion - slate - light">;
                <Grid3X3 className="h - 4 w - 4" />;
              </Button>;
              <Button variant="ghost" size="icon" className="text - zion - slate - light">;
                <ListFilter className="h - 4 w - 4" />;

              </Button>;
            </div>;
          </div>;
        </div>;

        {/* Main layout with sidebar and results */}
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;
          {/* Sidebar Filters */}
          <div className="lg: col - span - 1">;
            <FilterSidebar;

              filters={{
                selectedProductTypes;
                selectedLocations;
                selectedAvailability

                selectedProductTypes,
                selectedLocations,
                selectedAvailability,
                selectedRating
=======
                selected_locations;
                selected_availability,
                selected_rating;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              filter_options={filter_options}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}

            />;
          </div>;


          {/* Main content */}
          <div className="lg:col-span-3">;
            {/* Active filters display */}
            <ActiveFiltersBar
=======
            />;
          </div>;
          {/* Main content */}
          <div className="lg:col - span - 3">;
            {/* Active filters display */}
            <ActiveFiltersBar;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}

            />;


            {/* Results count */}
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
              </p>;
            </div>;

            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings && filteredListings.length > 0 ? (;
                filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id} 
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));
              ) : (;
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Button
                    onClick={clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark">;
                    Clear Filters;
                  </Button>;
                </div>;
              )}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
            </div>;
          </div>;
        </div>;
      </main>;

    </AppLayout>);
}

=======
;
