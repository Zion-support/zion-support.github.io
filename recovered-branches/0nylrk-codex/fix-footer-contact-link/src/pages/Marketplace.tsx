<<<<<<< HEAD


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

=======
class ErrorBoundary extends React.Component {

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
<<<<<<< HEAD
=======
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions($2);
  const filterOptions = generateFilterOptions($2);
  // Filter listings based on selected filters
  const filteredListings = $2;
  const handleFilterChange = (filterType: string, value: string) => {
    console.log($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Filter listings based on selected filters

  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
}
if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
<<<<<<< HEAD

      return false
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Location filter,
if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {
}
return false;
    }
    // Availability filter,
if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {
}
return false;
    }
    // Rating filter,
if (selectedRating && (!listing.rating |listing.rating < selectedRating)) {
}
return false;
    }
<<<<<<< HEAD
    // Rating filter
    if (selectedRating && (!listing.rating |listing.rating < selectedRating)) {
      return false
    }



    switch (filterType) {
      case 'productType':
        setSelectedProductTypes(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]



  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  const filterOptions = generateFilterOptions();
=======
return true;
  });
  const handleFilterChange = ("filterType": string, "value": string) => {    
}
return true;
  }),
  const handleFilterChange = ("filterType": string, "value": string) => {
    
    return true
  }),
  
  const handleFilterChange = (filterType: string, value: string) => {
    // // // console.log(`Filter changed: ${filterType} = ${value}`),
    return true
  });
  const handleFilterChange = (filterType: string, value: string) => {    

    return true

  }),
    // // // console.log(`Filter "changed": ${filterType} = ${value}`),`    switch (filterType) {
      }
      case 'productType':'
        setSelectedProductTypes(prev => { return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        ); }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Filter listings based on selected filters;
  const filteredListings = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(listing => {;
    // Search filter;
    if (searchQuery && !listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) && ;
        !listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !listing && listing.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))) {;
      return false;
    }
    // Product type filter;
    if (selectedProductTypes && selectedProductTypes.length > 0 && !selectedProductTypes && selectedProductTypes.includes(listing && listing.category)) {;
      return false;
    }
    // Location filter;
    if (selectedLocations && selectedLocations.length > 0 && listing && listing.location && !selectedLocations && selectedLocations.includes(listing && listing.location)) {;
      return false;
    }
    // Availability filter;
    if (selectedAvailability && selectedAvailability.length > 0 && listing && listing.availability && !selectedAvailability && selectedAvailability.includes(listing && listing.availability)) {;
      return false;
    }
    // Rating filter;
    if (selectedRating && (!listing && listing.rating || listing && listing.rating < selectedRating)) {;
      return false;
    }
    return true;
  });

<<<<<<< HEAD
  const handleFilterChange = (filterType: string, value: string) => {;

=======
  const handleFilterChange = (filterType: string, value: string) => {;`
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console && console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;'
      case 'productType':;
        setSelectedProductTypes(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];
        );
        break;'
      case 'location':;
        setSelectedLocations(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];
        );
        break;'
      case 'availability':;
        setSelectedAvailability(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];

<<<<<<< HEAD
        );
        break;
    }
  };
  const clearAllFilters = () => {;
=======
    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);

>>>>>>> origin/cursor/delete-old-data-records-6bba

    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);

<<<<<<< HEAD
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
  }
  },
  
=======
  },

        );
        break;
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba

    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)

<<<<<<< HEAD


  },



=======
  },

  },

  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Handle requesting a quote

  const handleRequestQuote = (listingId: string) => {

    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId)
    if (listing) {}
      toast({"
        title: "Quote Requested"`
        description: `Your quote request for ${listing.title} has been sent.`


<<<<<<< HEAD

      }),




=======
      }),

      });
      }),
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category

<<<<<<< HEAD
=======
            image: listing.images?.[0]
>>>>>>> origin/cursor/delete-old-data-records-6bba


;
    return true;
  }),;
  const handleFilterChange = (filterType: string, value: string) => {;`
    // // // console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;'

      case 'productType':;
        setSelectedProductTypes(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;

      case 'location':;
        setSelectedLocations(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;

      case 'availability':;
        setSelectedAvailability(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
        break;
    }
  },;

    setSearchQuery(""),;
    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;

<<<<<<< HEAD

=======
    setSelectedRating(null);
  };

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === listingId),;

    if (listing) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    setSelectedRating(null);
  };
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === listingId),;
    if (listing) {;

<<<<<<< HEAD
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });
      // Navigate to the quote request page with the listing information;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
export default /**;
 * Marketplace - Function description;
 */
function Marketplace() {
  }
  const navigate = use_navigate ();
  const [search_query, setSearchQuery] = useState ("");"
  const [selectedProductTypes, setSelectedProductTypes] = useState < string[]>([]);
  const [selected_locations, setSelectedLocations] = useState < string[]>([]);
  const [selected_availability, setSelectedAvailability] = useState < string[]>([]);
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
const "search_suggestions": SearchSuggestion[] = generateSearchSuggestions (),;
  const filter_options = generateFilterOptions ();
;
  // Filter listings based on selected filters;
  const filtered_listings = MARKETPLACE_LISTINGS.filter ((listing) => {
    // Search filter;
    }
    if (.includes (search_query.toLowerCase ()) &&) {
  $2
}
        !listing.description.toLowerCase ().includes (search_query.toLowerCase ()) &&;
        !listing.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ()))) {
      }
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
  const handleFilterChange = ("filter_type": string, "value": string) =>: any {
    }
    console.log (`Filter "changed": ${filter_type} = ${value}`),`    switch (filter_type) {
      }
      case 'product_type':;'
        setSelectedProductTypes (prev =>;
          prev.includes (value) ? prev.filter (item => { return item !== value) : [...prev, value]); }
        break;
      case 'location':;'
        setSelectedLocations (prev =>;
          prev.includes (value) ? prev.filter (item => { return item !== value) : [...prev, value]); }
        break;
      case 'availability':;'
        setSelectedAvailability (prev =>;
          prev.includes (value) ? prev.filter (item => { return item !== value) : [...prev, value]); }
        break;
    }
  }
;
  const clearAllFilters = () =>: any {
    }
    setSearchQuery ("");"
    setSelectedProductTypes ([]);
    setSelectedLocations ([]);
    setSelectedAvailability ([]);
    setSelectedRating (null);
  }
;
  // Handle requesting a quote;
  const handleRequestQuote = ("listing_id": string) =>: any {
    }
    const listing = MARKETPLACE_LISTINGS.find (item => item.id === listing_id),
    // Check condition,
if ( {) {
  $2
}
      toast ({
        }
        "title": "Quote Requested","
        "description": `Your quote request for ${listing.title} has been sent.`;`      });
      });
;
<<<<<<< HEAD
      // Navigate to the quote request page with the listing information;"
      navigate ("/request - quote", {}
        state: {}
          service_type: listing.category,
          specific_item: {}
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0];



            id: listing.id,;
            title: listing.title,;
            category: listing.category,;
            image: listing.images?.[0];






          }
        }
      })
    }

=======
      // Navigate to the quote request page with the listing information;
      navigate ("/request - quote", {"
        }
        "state": {
          }
          "service_type": listing.category,
          "specific_item": {
            }
            "id": listing.id,
            "title": listing.title,
            "category": listing.category,
            "image": listing.images?.[0];
            "id": listing.id,;
            "title": listing.title,;
            "category": listing.category,;
            "image": listing.images?.[0];
          }
        }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },
  };
  },

  };
  },  },
  };
  },


<<<<<<< HEAD

  return (


    <AppLayout>;
      <main className="flex-grow container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto mb-8">;
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;

          <p className="text-zion-slate-light">;


            Discover professional services and products for your AI and tech projects.;
            Browse our curated collection of solutions from verified providers.;
          </p>;
        </div>;


=======
        {/* Search and filter bar */}

              <EnhancedSearchInput;
                value={search_query}
                on_change={setSearchQuery}
                placeholder="Search the marketplace...";"
                search_suggestions={search_suggestions} />;
            </div>;
            <div className="flex gap-2">;"
              <Button variant="ghost" size="icon" className="text - zion - slate-light">;"
                <Grid3X3 className="h - 4 w-4" />;"
              </Button>;
              <Button variant="ghost" size="icon" className="text - zion - slate-light">;"
                <ListFilter className="h - 4 w-4" />;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </Button>;
            </div>;
          </div>;
        </div>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Main layout with sidebar and results */}
        <div className="grid grid - cols - 1 "lg":grid - cols - 4 gap-6">;"
          {/* Sidebar Filters */}
          <div className=""lg": col - span-1">;"
            <FilterSidebar;

<<<<<<< HEAD
              filters={{


=======
              filters={
                }
                selectedProductTypes,
selectedLocations
                selectedAvailability,
              <EnhancedSearchInput,
value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search the marketplace...""
                searchSuggestions={searchSuggestions}
              </Button>;
            </div>;
          </div>;
        </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                selectedProductTypes
                selectedLocations
                selectedAvailability,


<<<<<<< HEAD

=======
              <EnhancedSearchInput
>>>>>>> origin/cursor/delete-old-data-records-6bba

                value={searchQuery}
                onChange={setSearchQuery}"
                placeholder="Search the marketplace..."
                searchSuggestions={searchSuggestions}
              </Button>;
            </div>;
          </div>;
        </div>;
        {/* Main layout with sidebar and results */}"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          {/* Sidebar Filters */}"
          <div className="lg: col-span-1">;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                selectedRating

                selected_locations;
                selected_availability,
                selected_rating;
              }}
              filter_options={filter_options}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}

              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />
          </div>
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Active filters display */}
            <ActiveFiltersBar
              selectedProductTypes={selectedProductTypes}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                selectedProductTypes;
                selectedLocations;
                selectedAvailability,

                value={searchQuery}
                onChange={setSearchQuery}"
                placeholder="Search the marketplace...""
                searchSuggestions={searchSuggestions}

<<<<<<< HEAD
=======

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
          <div className="lg: col-span-1">;"
        {/* Main layout with sidebar and results */}"
                selectedAvailability;
                selectedProductTypes,
                selectedLocations,
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}
            {/* Results count */}"
            <div className="mb-6">;"
          <div className="lg:col-span-3">"
pr-12325
</div>
            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}

              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Display actual marketplace listings */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <ProductListingCard;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
              ) : (
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings && filteredListings.length > 0 ? (;
                filteredListings && filteredListings.map((listing) => (;

            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 "md":grid-cols-2 gap-6">;"
              {filteredListings && filteredListings.length > 0 ? (;
                }
                filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard,
key={listing && listing.id} 
                    listing={listing}
                    onRequestQuote={handleRequestQuote} />;
                ));
              ) : (;
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;"
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;"
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;'
                  </p>;

<<<<<<< HEAD
                  <Button
                    onClick={clearAllFilters}

=======
                  <Button;
                    onClick={clearAllFilters}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    className="bg-zion-purple hover:bg-zion-purple-dark">;
                    Clear Filters;

              onRemoveRating={() => setSelectedRating (null)}"
              onClearSearch={() => setSearchQuery ("")}
            />;
            {/* Results count */}"
            <div className="mb - 6">;"
              <p className="text - zion - slate - light">;
                Showing {filtered_listings.length} results;"`
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {/* Display actual marketplace listings */}"

                  >;

          <div className="lg:col-span-3">;
            {/* Active filters display */}
                  ;)
                </div>)}"
            <ActiveFiltersBar ;
              selectedProductTypes={selectedProductTypes}              selectedLocations={selectedLocations}

                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
            ;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings.length > 0 ? (;
                filteredListings.map((listing) => (;
                  <ProductListingCard ;
                    key={listing.id} ;
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));

                    className="bg-zion-purple hover:bg-zion-purple-dark";
                  >;
                    Clear Filters;
                  </Button>;
                </div>;
              )}
<<<<<<< HEAD

              onRemoveRating={() => setSelectedRating (null)}
              onClearSearch={() => setSearchQuery ("")}
            />;
            {/* Results count */}
            <div className="mb - 6">;
              <p className="text - zion - slate - light">;
                Showing {filtered_listings.length} results;
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {/* Display actual marketplace listings */}
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              {filtered_listings.length > 0 ? (
                filtered_listings.map ((listing) => (
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />))) : (
                <div className="col - span - 2 text - center py - 16 bg - zion - blue - dark border border - zion - blue - light rounded - lg">;
                  <h2 className="text - 2xl font - bold text - white mb - 4">No Results Found</h2>;
                  <p className="text - zion - slate - light max - w-md mx - auto mb - 8">;
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button;
                    on_click={clearAllFilters}
                    className="bg - zion - purple hover:bg - zion - purple - dark";
                  >;
                    Clear Filters;
                  </Button>;
                </div>)}

=======


                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

      </main>
    </AppLayout>
  )
}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </AppLayout>;
  ),; const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions ();
const filterOptions = generateFilterOptions ();
//Search filter if (searchQuery && !listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) {}
  return true;
});
switch (filterType) {'
  case 'productType': setSelectedProductTypes (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;'
case 'location': setSelectedLocations (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;'
case 'availability': setSelectedAvailability (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;

}
;

<<<<<<< HEAD
=======

};
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
}</div> </div> </div> </main> </AppLayout>) 
}
    </AppLayout>;
  );
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
