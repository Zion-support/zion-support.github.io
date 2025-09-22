
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
;
export default function Marketplace() {;
  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  ;
  const searchSuggestions:SearchSuggestion[] = generateSearchSuggestions(),;
  const filterOptions = generateFilterOptions(),;
  ;
  // Filter listings based on selected filters;
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {;
    // Search filter;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) && ;
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {;
      return false;
    }
    ;
    // Product type filter;
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {;
      return false,;
    }
    ;
    // Location filter;
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {;
      return false,;
    }
    ;
    // Availability filter;
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {;
      return false,;
    }
    ;
    // Rating filter;
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {;
      return false,;
    }
    ;
    return true,;
  }),;
  ;
  const handleFilterChange = (filterType:string, value:string) => {;
    // // // console.log(`Filter changed:${filterType} = ${value}`),;
    switch (filterType) {;
      case 'productType':;
        setSelectedProductTypes(prev => ;
          prev.includes(value) ? prev.filter(item => item !== value) :[...prev, value];
        ),;
        break,;
      case 'location':;
        setSelectedLocations(prev => ;
          prev.includes(value) ? prev.filter(item => item !== value) :[...prev, value];
        ),;
        break,;
      case 'availability':;
        setSelectedAvailability(prev => ;
          prev.includes(value) ? prev.filter(item => item !== value) :[...prev, value];
        ),;
        break,;
    }
  },;
  ;
  const clearAllFilters = () => {;
    setSearchQuery(""),;
    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;
    setSelectedRating(null),;
  },;
  ;
  // Handle requesting a quote;
  const handleRequestQuote = (listingId:string) => {;
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId),;
    ;
    if (listing) {;
      toast({;
        title:"Quote Requested",;
        description:`Your quote request for ${listing.title} has been sent.`;
      }),;
      ;
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state:{ ;
          serviceType:listing.category,;
          specificItem:{;
            id:listing.id,;
            title:listing.title,;
            category:listing.category,;
            image:listing.images?.[0];          }
  const handleFilterChange = (filterType: string, value: string) => {switch (filterType) {
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
        break}
  };

  const clearAllFilters = () => {setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null)};

  // Handle requesting a quote,
const handleRequestQuote = (listingId: string) => {const listing = MARKETPLACELISTINGS.find(item => item.id === listingId);

    if (listing) {
      toast({
        title: "Quote Requested", description: `Your quote request for ${listing.title} has been sent.`
      });

      // Navigate to the quote request page with the listing information,
navigate("/request-quote", {state: { 
          serviceType: listing.category, specificItem: {
            id: listing.id, title: listing.title, category: listing.category, image: listing.images?.[0]}
        }
      }),;
    }
  },;
;
  return (;
    <AppLayout>;
      <main className="flex-grow container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto mb-8">;
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;
          <p className="text-zion-slate-light">;

              </Button>;
            </div>;
          </div>;
        </div>;

              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />;
          </div>;

            </div>;
          </div>;
        </div>;
      </main>;

}