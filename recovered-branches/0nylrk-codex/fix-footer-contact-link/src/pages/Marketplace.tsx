<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

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
import { SearchSuggestion } from "@/types/search";
import { AppLayout } from "@/layout/AppLayout";
export default function Marketplace() {

  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx



=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions()
  const filterOptions = generateFilterOptions();
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
  
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Filter listings based on selected filters
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {
    // Search filter
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return true
  });
  const handleFilterChange = (filterType: string, value: string) => {
    console.log(`Filter changed: ${filterType} = ${value}`)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    
    return true
  }),
  
  const handleFilterChange = (filterType: string, value: string) => {
    // // // console.log(`Filter changed: ${filterType} = ${value}`),
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    switch (filterType) {
      case 'productType':
        setSelectedProductTypes(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
<<<<<<< HEAD
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
<<<<<<< HEAD
        ),
        break
    }

=======
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
  const handleFilterChange = (filterType: string, value: string) => {;
    console && console.log(`Filter changed: ${filterType} = ${value}`),;
    switch (filterType) {;
      case 'productType':;
        setSelectedProductTypes(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];
        );
        break;
      case 'location':;
        setSelectedLocations(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];
        );
        break;
      case 'availability':;
        setSelectedAvailability(prev => ;
          prev && prev.includes(value) ? prev && prev.filter(item => item !== value) : [...prev, value];
        );
        break;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
  };
  const clearAllFilters = () => {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
    setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx


  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"
        description: `Your quote request for ${listing.title} has been sent.`
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      }),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      });
      }),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
            id: listing && listing.id,;
            title: listing && listing.title,;
            category: listing && listing.category,;
            image: listing && listing.images?.[0];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

=======
=======
    setSelectedRating(null);
  },;
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = MARKETPLACE_LISTINGS.find(item => item.id === listingId),;
    if (listing) {;
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing.title} has been sent.`;
      }),;
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state: {;
          serviceType: listing.category,;
          specificItem: {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            id: listing.id,;
            title: listing.title,;
            category: listing.category,;
            image: listing.images?.[0];
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
          }
        }
      });
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
<<<<<<< HEAD

=======


  },
=======
  };
=======
  },



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

========
  }
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
    <AppLayout>;
      <main className="flex-grow container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto mb-8">;
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>;
          <p className="text-zion-slate-light">;
<<<<<<< HEAD
;
  return (
    <AppLayout>;
      <main className="flex - grow container mx - auto px - 4 py - 8">;
        <div className="max - w-4xl mx - auto mb - 8">;
          <h1 className="text - 3xl font - bold text - white mb - 4">AI & Tech Marketplace</h1>;
          <p className="text - zion - slate - light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
            Discover professional services and products for your AI and tech projects.;
            Browse our curated collection of solutions from verified providers.;
          </p>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
              />;
            </div>;
            <div className="flex gap-2">;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <Grid3X3 className="h-4 w-4" />;
              </Button>;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <ListFilter className="h-4 w-4" />;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
=======
        ;
        {/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">;
          <div className="flex flex-col md:flex-row gap-4">;
            <div className="relative flex-1">;
              <EnhancedSearchInput;
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search the marketplace...";
                searchSuggestions={searchSuggestions}
              />;
            </div>;
            <div className="flex gap-2">;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <Grid3X3 className="h-4 w-4" />;
              </Button>;
              <Button variant="ghost" size="icon" className="text-zion-slate-light">;
                <ListFilter className="h-4 w-4" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
              </Button>;
            </div>;
          </div>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
        {/* Main layout with sidebar and results */}
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;
          {/* Sidebar Filters */}
          <div className="lg: col - span - 1">;
            <FilterSidebar;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

              filters={{
<<<<<<< HEAD

=======

                selectedProductTypes
                selectedLocations
                selectedAvailability,

=======

                selectedProductTypes,
                selectedLocations,
                selectedAvailability,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
              filters={{
                selectedProductTypes
                selectedLocations
                selectedAvailability,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
                selectedRating
                selected_locations;
                selected_availability,
                selected_rating;
              }}
              filter_options={filter_options}
=======
;
        {/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">;
            <FilterSidebar;
              filters={{;
                selectedProductTypes,;
                selectedLocations,;
                selectedAvailability,;
                selectedRating;
              }}              filterOptions={filterOptions}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

            />;
          </div>;


========
            />;
          </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
          {/* Main content */}
          <div className="lg:col-span-3">;
            {/* Active filters display */}
            <ActiveFiltersBar
            />;
          </div>;
          {/* Main content */}
          <div className="lg:col - span - 3">;
            {/* Active filters display */}
            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

            />;


========
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
            {/* Results count */}
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
                {searchQuery && ` for "${searchQuery}"`}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
<<<<<<< HEAD
              </p>
            </div>

=======


            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          }
        }
      })
    }
  }
  },
  };
  },

  return (
    <AppLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI & Tech Marketplace</h1>
          <p className="text-zion-slate-light">
            Discover professional services and products for your AI and tech projects.
            Browse our curated collection of solutions from verified providers.
          </p>
        </div>
        {/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search the marketplace..."
                searchSuggestions={searchSuggestions}
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
        {/* Main layout with sidebar and results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar
              filters={{
                selectedProductTypes;
                selectedLocations;
                selectedAvailability

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
          <div className="lg:col-span-3">
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
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
                  <Button
                    onClick={clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark">;
                    Clear Filters;
                  </Button>;
                </div>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
          ;
          {/* Main content */}
          <div className="lg:col-span-3">;
            {/* Active filters display */}
            <ActiveFiltersBar ;
              selectedProductTypes={selectedProductTypes}              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />;
;
            {/* Results count */}
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
            ;
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings.length > 0 ? (;
                filteredListings.map((listing) => (;
                  <ProductListingCard ;
                    key={listing.id} ;
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));
              ) :(;
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button ;
                    onClick={clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark";
                  >;
                    Clear Filters;
                  </Button>;
                </div>;
              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
=======
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
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </div>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
    </AppLayout>);
=======
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
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const clearAllFilters = () => {
  //Handle requesting a quote const handleRequestQuote = (listingId: string) => {
  const listing = MARKETPLACE LISTINGS.find (item => item.id === listingId);
if (listing) {
  toast ({
  title: "Quote Requested";
description: `Your quote request for $ {
  listing.title 
}has been sent.` 
});
//Navigate to the quote request page with the listing information navigate ("/request-quote", {
  state: {
  serviceType: listing.category;
specificItem: {
  id: listing.id;
title: listing.title;
category: listing.category;
image: listing.images?.[0] 
}
}
}) 
}
};
Discover professional services and products for your AI and tech projects. Browse our curated collection of solutions from verified providers. </p> </div> /> </div> <div className="flex gap-2" > <Button variant="ghost" size="icon" className="text-zion-slate-light" > <Grid3X3 className="h-4 w-4" /> </Button> <Button variant="ghost" size="icon" className="text-zion-slate-light" > <ListFilter className="h-4 w-4" /> </Button> </div> </div> </div> <FilterSidebar filters= {
  {
  selectedProductTypes, selectedLocations, selectedAvailability, selectedRating 
}
}filterOptions= {
  filterOptions 
}onFilterChange= {
  handleFilterChange 
}onRatingChange= {
  setSelectedRating 
}onClearFilters= {
  clearAllFilters 
}/> </div> <ActiveFiltersBar selectedProductTypes= {
  selectedProductTypes 
}selectedLocations= {
  selectedLocations 
}selectedAvailability= {
  selectedAvailability 
}selectedRating= {
  selectedRating 
}searchQuery= {
  searchQuery 
}onRemoveFilter= {
  handleFilterChange 
}onRemoveRating= {
  () => setSelectedRating (null) 
}onClearSearch= {
  () => setSearchQuery ("") 
}/> {
  /* Results count */ 
}<div className="mb-6"> </p> </div> {
  /* Display actual marketplace listings */ 
}<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {
  filteredListings.length > 0 ? (filteredListings.map ( (listing) => (<ProductListingCard key= {
  listing.id 
}listing= {
  listing 
}onRequestQuote= {
  handleRequestQuote 
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {
  clearAllFilters 
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters </Button> </div>) 
}</div> </div> </div> </main> </AppLayout>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Marketplace.tsx
=======
    </AppLayout>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
