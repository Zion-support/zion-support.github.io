
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
export default function Marketplace() {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

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
import { SearchSuggestion } from "@/types/search";
import { AppLayout } from "@/layout/AppLayout";
export default function Marketplace() {

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
import { SearchSuggestion } from "@/types/search";
import { AppLayout } from "@/layout/AppLayout";
export default function Marketplace() {

  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Filter listings based on selected filters
=======
export default function Marketplace() {;  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
    // Filter listings based on selected filters
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default function Marketplace() {;  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
    // Filter listings based on selected filters
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions()
  const filterOptions = generateFilterOptions();
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),

  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),

  // Filter listings based on selected filters
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
<<<<<<< HEAD
      return false
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
=======
      return false    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
    return true
  });
  const handleFilterChange = (filterType: string, value: string) => {    
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return true
=======

  // Filter listings based on selected filters;
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {}
    // Search filter;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {}
      return false;
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { Button } from "@/components/ui/button",;"
import { Link } from "react-router-dom",;"
import { Grid3X3, ListFilter } from "lucide-react",;"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;"
import { FilterSidebar } from "@/components/search/FilterSidebar",;"
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar",;"
import { ProductListingCard } from "@/components/ProductListingCard",;"
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData",;"
import { toast } from "@/hooks/use-toast",;"
import { useNavigate } from "react-router-dom",;"
import { SearchSuggestion } from "@/types/search",;"
import { AppLayout } from "@/layout/AppLayout",;
export default function Marketplace() { return null; }
    }
    // Product type filter;
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {}
      return false;
    }
    // Location filter;
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {}
      return false;
    }
    // Availability filter;
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {}
      return false;
    }
    // Rating filter;
    if (selectedRating && (!listing.rating |listing.rating < selectedRating)) {}
      return false;
    }

    return true;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }),

  const handleFilterChange = (filterType: string, value: string) => {}
    // // // console.log(`Filter changed: ${filterType} = ${value}`),

<<<<<<< HEAD

    return true;
  });
<<<<<<< HEAD
  const handleFilterChange = (filterType: string, value: string) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    return true
  });
  const handleFilterChange = (filterType: string, value: string) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  const filterOptions = generateFilterOptions();

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

  const handleFilterChange = (filterType: string, value: string) => {;`
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
);
        break;
    }

  };

  const clearAllFilters = () => {;
setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
},
<<<<<<< HEAD
<<<<<<< HEAD

    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);

  },

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        );
        break;
  },

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
<<<<<<< HEAD

  },

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Handle requesting a quote
=======
    // Handle requesting a quote
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // Handle requesting a quote
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Handle requesting a quote
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleRequestQuote = (listingId: string) => {
=======

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId)
    if (listing) {}
      toast({"
        title: "Quote Requested"`
        description: `Your quote request for ${listing.title} has been sent.`

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }),

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category

            image: listing.images?.[0]

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
    return true;
  }),;
  const handleFilterChange = (filterType: string, value: string) => {;`
    // // // console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;'
=======
            image: listing.images?.[0]

;
    return true;
  }),;
  const handleFilterChange = (filterType: string, value: string) => {;
    // // // console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case 'productType':;
        setSelectedProductTypes(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
break,;'
      case 'location':;
        setSelectedLocations(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
break,;'
      case 'availability':;
        setSelectedAvailability(prev =>;
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
        ),;
        break;
    }
  },;
const clearAllFilters = () => {;"
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
toast({;"
        title: "Quote Requested",;`
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });

      // Navigate to the quote request page with the listing information;"
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

'
import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { Button } from '@/components / ui / button';'
import { Link } from './react-router-dom';'
import { Grid3X3, ListFilter } from './lucide-react';'
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';'
import { FilterSidebar } from '@/components / search / FilterSidebar';'
import { ActiveFiltersBar } from '@/components / search / ActiveFiltersBar';'
import { ProductListingCard } from '@/components / ProductListingCard';'
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from '@/data / marketplace_data';'
import { toast } from '@/hooks / use - toast';'
import { use_navigate } from './react-router-dom';'
import { SearchSuggestion } from '@/types / search';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AppLayout } from '@/layout / AppLayout';
export default /**;
 * Marketplace - Function description;
 */
function Marketplace() {}
  const navigate = use_navigate ();"
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
  const filtered_listings = MARKETPLACE_LISTINGS.filter (listing => {}
    // Search filter;
    if (.includes (search_query.toLowerCase ()) &&) {}
  $2;
}
        !listing.description.toLowerCase ().includes (search_query.toLowerCase ()) &&;
        !listing.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ()))) {}
      return false;
    }
    // Product type filter;
    if () {) {}
  $2;
}
      return false;
    }
    // Location filter;
    if () {) {}
  $2;
}
      return false;
    }
    // Availability filter;
    if () {) {}
  $2;
}
      return false;
    }
    // Rating filter;
    if () {) {}
  $2;
}
      return false;
    }
    return true;
  });
;
  const handleFilterChange = (filter_type: string, value: string) =>: any {}`
    console.log (`Filter changed: ${filter_type} = ${value}`),
    switch (filter_type) {'
      case 'product_type':;
        setSelectedProductTypes (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;'
      case 'location':;
        setSelectedLocations (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;'
      case 'availability':;
        setSelectedAvailability (prev =>;
          prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
        break;
    }
  }
;
  const clearAllFilters = () =>: any {"
    setSearchQuery ("");
    setSelectedProductTypes ([]);
    setSelectedLocations ([]);
    setSelectedAvailability ([]);
    setSelectedRating (null);
  }
;
  // Handle requesting a quote;
  const handleRequestQuote = (listing_id: string) =>: any {}
    const listing = MARKETPLACE_LISTINGS.find (item => item.id === listing_id),
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Quote Requested",`
        description: `Your quote request for ${listing.title} has been sent.`;
      });
;
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

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        }
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  },
  };
  },

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };
  },  },
  };
  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (

    <AppLayout>;
      <main className="flex-grow container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto mb-8">;
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;
=======
  return (

    <AppLayout>;"
      <main className="flex-grow container mx-auto px-4 py-8">;"
        <div className="max-w-4xl mx-auto mb-8">;"
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-zion-slate-light">;
<<<<<<< HEAD
                selectedRating
;
  return (
<AppLayout>;
<<<<<<< HEAD
      <main className="flex - grow container mx - auto px - 4 py-8">;
        <div className="max - w-4xl mx - auto mb-8">;
          <h1 className="text - 3xl font - bold text - white mb-4">AI & Tech Marketplace</h1>;
          <p className="text - zion - slate-light">;

  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Discover professional services and products for your AI and tech projects.;
            Browse our curated collection of solutions from verified providers.;
          </p>;
        </div>;
        {/* Search and filter bar */}
<div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 mb-8">;
          <div className="flex flex - col md:flex - row gap-4">;
            <div className="relative flex-1">;
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

                selectedProductTypes
                selectedLocations
                selectedAvailability,

              <EnhancedSearchInput
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
<FilterSidebar
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                selectedRating
=======
                selectedRating
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                selected_locations;
                selected_availability,
                selected_rating;
              }}
              filter_options={filter_options}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
{/* Main content */}"
          <div className="lg:col-span-3">;
            {/* Active filters display */}
            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}
{/* Results count */}"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;"`
                {searchQuery && ` for "${searchQuery}"`}
<<<<<<< HEAD
              </p>
            </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            {/* Results count */}
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
                {searchQuery && ` for "${searchQuery}"`}

                selectedRating
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
                selectedProductTypes;
                selectedLocations;
                selectedAvailability,

                value={searchQuery}
                onChange={setSearchQuery}"
                placeholder="Search the marketplace...""
                searchSuggestions={searchSuggestions}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
          <div className="lg: col-span-1">;"
        {/* Main layout with sidebar and results */}"
                selectedAvailability;
                selectedProductTypes,
                selectedLocations,

                selectedRating;
                selected_locations;
                selected_availability,
                selected_rating;
              }}
              filter_options={filter_options}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
          {/* Main content */}"
          <div className="lg:col-span-3">;"

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
            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <ProductListingCard;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <ProductListingCard
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />
                ))
) : ("
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>"
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">'
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              ) : (
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </p>;
            </div>;

            {/* Display actual marketplace listings */}"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings && filteredListings.length > 0 ? (;
                filteredListings && filteredListings.map((listing) => (;

                  <ProductListingCard;
                    key={listing && listing.id} 
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));
              ) : (;"
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;"
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;'
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button;
                    onClick={clearAllFilters}"
                    className="bg-zion-purple hover:bg-zion-purple-dark">;
                    Clear Filters;
<<<<<<< HEAD
                  </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
              )}
<<<<<<< HEAD

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
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              {filtered_listings.length > 0 ? (
                filtered_listings.map ((listing) => (
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
/>))) : ("
                <div className="col - span - 2 text - center py - 16 bg - zion - blue - dark border border - zion - blue - light rounded - lg">;"
                  <h2 className="text - 2xl font - bold text - white mb - 4">No Results Found</h2>;"
                  <p className="text - zion - slate - light max - w-md mx - auto mb - 8">;'
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button;
                    on_click={clearAllFilters}"
                    className="bg - zion - purple hover:bg - zion - purple - dark";
                  >;

;
          {/* Main content */}"
          <div className="lg:col-span-3">;
            {/* Active filters display */}
                  ;)
                </div>)}"
            <ActiveFiltersBar ;
              selectedProductTypes={selectedProductTypes}              selectedLocations={selectedLocations}
selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
onRemoveRating={() => setSelectedRating(null)}"
              onClearSearch={() => setSearchQuery("")}
            />;
;
            {/* Results count */}"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;"`
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
            ;
{/* Display actual marketplace listings */}"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings.length > 0 ? (;
                filteredListings.map((listing) => (;
                  <ProductListingCard ;
                    key={listing.id} ;
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));
) :(;"
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;"
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;'
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button ;
                    onClick={clearAllFilters}"
                    className="bg-zion-purple hover:bg-zion-purple-dark";
                  >;
                    Clear Filters;
                  </Button>;
                </div>;
              )}
<Button;
                    onClick={clearAllFilters}"
                    className="bg-zion-purple hover:bg-zion-purple-dark"
                  >
                    Clear Filters;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>;
          </div>;
        </div>;
      </main>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
    </AppLayout>);
}

;
    </AppLayout>;
  ),; const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions ();
const filterOptions = generateFilterOptions ();
//Search filter if (searchQuery && !listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) {
  return true;
});
switch (filterType) {
  case 'productType': setSelectedProductTypes (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;
case 'location': setSelectedLocations (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;
case 'availability': setSelectedAvailability (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;

};
const clearAllFilters = () => {}
  //Handle requesting a quote const handleRequestQuote = (listingId: string) => {}
  const listing = MARKETPLACE LISTINGS.find (item => item.id === listingId);
if (listing) {}
  toast ({"
  title: "Quote Requested";`
description: `Your quote request for $ {}
  listing.title;`
}has been sent.` 
});"
//Navigate to the quote request page with the listing information navigate ("/request-quote", {}
  state: {}
  serviceType: listing.category;
specificItem: {}
  id: listing.id;
title: listing.title;
category: listing.category;
image: listing.images?.[0] 
}
}
}) 
}
};"
Discover professional services and products for your AI and tech projects. Browse our curated collection of solutions from verified providers. </p> </div> /> </div> <div className="flex gap-2" > <Button variant="ghost" size="icon" className="text-zion-slate-light" > <Grid3X3 className="h-4 w-4" /> </Button> <Button variant="ghost" size="icon" className="text-zion-slate-light" > <ListFilter className="h-4 w-4" /> </Button> </div> </div> </div> <FilterSidebar filters= {}
  {}
  selectedProductTypes, selectedLocations, selectedAvailability, selectedRating;
}
}filterOptions= {}
  filterOptions;
}onFilterChange= {}
  handleFilterChange;
}onRatingChange= {}
  setSelectedRating;
}onClearFilters= {}
  clearAllFilters;
}/> </div> <ActiveFiltersBar selectedProductTypes= {}
  selectedProductTypes;
}selectedLocations= {}
  selectedLocations;
}selectedAvailability= {}
  selectedAvailability;
}selectedRating= {}
  selectedRating;
}searchQuery= {}
  searchQuery;
}onRemoveFilter= {}
  handleFilterChange;
}onRemoveRating= {}
  () => setSelectedRating (null) 
}onClearSearch= {"
  () => setSearchQuery ("") 
}/> {}
  /* Results count */ "
}<div className="mb-6"> </p> </div> {}
  /* Display actual marketplace listings */ "
}<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {}
  filteredListings.length > 0 ? (filteredListings.map ( (listing) => (<ProductListingCard key= {}
  listing.id;
}listing= {}
  listing;
}onRequestQuote= {}
  handleRequestQuote '"
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {}
  clearAllFilters "
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters </Button> </div>) 
=======
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters  </div>)"
}</div> </div> </div> </main> ) 
    ;"`;
pr-12325
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {'
</ProductListingCard>)'
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters </Button> </div>)"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}</div> </div> </div> </main> </AppLayout>) 
}
    </AppLayout>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  </Button>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </AppLayout>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
