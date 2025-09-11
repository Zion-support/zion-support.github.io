<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {

  Select
  SelectValue
  SelectTrigger
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Slider } from '@/components/ui/slider'
import { ProductListing, ListingView } from '@/types/listings'

import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast";
import { captureException } from "@/utils/sentry";
interface PriceRange {
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GradientHeading } from '@/components/GradientHeading'
import { ProductListingCard } from '@/components/ProductListingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; import { useRouter } from 'next/router'
import { GradientHeading } from "@/components/GradientHeading"
import { ProductListingCard } from "@/components/ProductListingCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Slider } from '@/components/ui/slider'
import { ProductListing, ListingView } from '@/types/listings'
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { captureException } from '@/utils/sentry'
interface PriceRange {
  min: number
max: number 
}interface DynamicListingPageProps {
  title: string
description: string
categorySlug: string
listings: ProductListing[]
categoryFilters: {
  label: string, value: string 
}[]
initialPrice?: PriceRange
}const toggleCategory = (category: string) => {
  setSelectedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category] min: 0
max: 10000 
})
  SelectItem} from "@/components/ui/select",
import { Checkbox } from "@/components/ui/checkbox",
import Skeleton from "react-loading-skeleton",
import "react-loading-skeleton/dist/skeleton.css",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { captureException } from "@/utils/sentry",
interface PriceRange {
  min: number,
  max: number
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectItem} from "@/components/ui/select",;
import { Checkbox } from "@/components/ui/checkbox",;
import Skeleton from "react-loading-skeleton",;
import "react-loading-skeleton/dist/skeleton.css",;
import { Slider } from "@/components/ui/slider",;
import { ProductListing, ListingView } from "@/types/listings",;
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
import { captureException } from "@/utils/sentry",;
interface PriceRange {;
  min: number,;
  max: number;
}
;
interface DynamicListingPageProps {;
  title: string,;
  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange,;
  /**;
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.;
   */;
  detailBasePath?: string;
}
export function DynamicListingPage({



  min: number
max: number
}interface DynamicListingPageProps {
  title: string
description: string
categorySlug: string
listings: ProductListing[]
categoryFilters: {
  label: string, value: string
}[]
initialPrice?: PriceRange
}const toggleCategory = (category: string) => {
  setSelectedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category] min: 0
max: 10000
})
export function DynamicListingPage({
export function DynamicListingPage({
  title
  description
  categorySlug
  listings: allListings
  categoryFilters
  initialPrice = { min: 0, max: 10000 }
  detailBasePath = '/marketplace/listing'
}: DynamicListingPageProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>
=======
export function DynamicListingPage({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function DynamicListingPage({

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
<<<<<<< HEAD
<<<<<<< HEAD
  detailBasePath = '/marketplace/listing',
}: DynamicListingPageProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
<<<<<<< HEAD
<<<<<<< HEAD
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }
  const clearCategories = () => setSelectedCategories([])
  const [view, setView] = useState<ListingView>('grid')
  const isGrid = view === 'grid'
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",
<<<<<<< HEAD
<<<<<<< HEAD
  // Swap icons to match action
    <List className='h-4 w-4' />
  ) : (
    if (min == null |max == null |isNaN(min) |isNaN(max)) return
  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
    <LayoutGrid className='h-4 w-4' />
  )
  const [isLoading, setIsLoading] = useState(false)
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0
    max: 10000
  })
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [specQuery, setSpecQuery] = useState('')
  const [selectedAvailability, setSelectedAvailability] = useState('all')
  const [sortOption, setSortOption] = useState('newest')
  const brandOptions = Array.from(
    new Set(allListings.map(l => l.brand).filter(Boolean))
  )
  const availabilityOptions = Array.from(
    new Set(allListings.map(l => l.availability).filter(Boolean))
  )
  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null)
    if (listingsWithPrice.length > 0) {
      const max = Math.max(...listingsWithPrice.map(l => l.price |0))
      setPriceRange({ min: 0, max })
      setCurrentPriceFilter([0, max]) }
  }, [allListings])
  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max])
  const handleSliderChange = (values: number[]) => {
    const [min, max] = values.map(Number)
    if (min == null |max == null |isNaN(min) |isNaN(max)) return
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className='h-4 w-4' />
  ) : (


    if (min == null || max == null || isNaN(min) || isNaN(max)) return;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setCurrentPriceFilter([min, max])
import { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { GradientHeading } from '@/components / GradientHeading';
import { ProductListingCard } from '@/components / ProductListingCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input'; import { use_router } from 'next / router';
import { GradientHeading  } from '@/components / GradientHeading';
import { ProductListingCard  } from '@/components / ProductListingCard';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components / ui / select';
import { Checkbox } from '@/components / ui / checkbox';
import Skeleton from 'react - loading - skeleton';
import 'react - loading - skeleton / dist / skeleton.css';
import { Slider } from '@/components / ui / slider';
import { ProductListing, ListingView } from '@/types / listings';
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
import { capture_exception } from '@/utils / sentry';
interface PriceRange {
  min: number;
max: number;
}interface DynamicListingPageProps {
  title: string;
description: string;
category_slug: string;
listings: ProductListing[];
category_filters: {
  label: string, value: string;
}[];
initial_price?: PriceRange;
}const toggle_category = (category: string) =>: any {
  setSelectedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category] min: 0;
max: 10000;
});
export /**
 * DynamicListingPage - Function description
 */
function DynamicListingPage() {
  const router = use_router ();
  const [search_query, setSearchQuery] = useState ('');
  const [selected_categories, setSelectedCategories] = useState < string[]>([]);
  const toggle_category = (category: string) =>: any {    setSelectedCategories (prev =>;
      prev.includes (category);
        ? prev.filter (c => c !== category);
        : [...prev, category]);
  }
  const clear_categories = () =>: any setSelectedCategories ([]);
  const [view, set_view] = useState < ListingView>('grid');
  const is_grid = view === 'grid';
  // Swap icons to match action;
  const ToggleViewIcon = is_grid ? (
    <List className='h - 4 w - 4' />) : (
    <LayoutGrid className='h - 4 w - 4' />);
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>({
    min: 0,
    max: 10000,
  });
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
  const [selected_brand, setSelectedBrand] = useState ('all');
  const [spec_query, setSpecQuery] = useState ('');
  const [selected_availability, setSelectedAvailability] = useState ('all');
  const [sort_option, setSortOption] = useState ('newest');
  const brand_options = Array.from (
    new Set (all_listings.map (l => l.brand).filter (Boolean)));
  const availability_options = Array.from (
    new Set (all_listings.map (l => l.availability).filter (Boolean)));
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition
if ( {) {
  $2
}
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min: 0, max });
      setCurrentPriceFilter ([0, max]) }
  }, [all_listings]);
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initial_price.max]);
  const handleSliderChange = (values: number[]) =>: any {
    const [min, max] = values.map (Number);
    if (|| isNaN (max)) return) {
  $2
}
    setCurrentPriceFilter ([min, max]);
  }
  let filtered_listings: ProductListing[] = [];
  try {
    filteredListings = allListings.filter(listing => {      const matchesSearch =
        !searchQuery |
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        (listing.tags &&
          listing.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
      const matchesBrand =
        selectedBrand === 'all' |
        (listing.brand && listing.brand === selectedBrand)
    filteredListings = allListings.filter(listing => {      const matchesSearch = null;
    filteredListings = allListings.filter(listing => {      const matchesSearch = null;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <LayoutGrid className="h-4 w-4" />
  ),
  const [isLoading, setIsLoading] = useState(false),
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 10000}),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),
  const [selectedBrand, setSelectedBrand] = useState("all"),
  const [specQuery, setSpecQuery] = useState(""),
  const [selectedAvailability, setSelectedAvailability] = useState("all"),
  const [sortOption, setSortOption] = useState("newest"),

  const brandOptions = Array.from(
    new Set(allListings.map((l) => l.brand).filter(Boolean))),
  const availabilityOptions = Array.from(
    new Set(allListings.map((l) => l.availability).filter(Boolean))),

  useEffect(() => {
    const listingsWithPrice = allListings.filter((l) => l.price !== null),
    if (listingsWithPrice.length > 0) {
      const max = Math.max(...listingsWithPrice.map((l) => l.price || 0)),
      setPriceRange({ min: 0, max }),
      setCurrentPriceFilter([0, max])
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]),

  const handleSliderChange = (values: number[]) => {
    const [min, max] = values.map(Number),
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,
    setCurrentPriceFilter([min, max])
  },

  let filteredListings: ProductListing[] = [],
  try {
    filteredListings = allListings.filter((listing) => {
      const matchesSearch =
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setCurrentPriceFilter([min, max])
  }
  let filteredListings: ProductListing[] = []
  try {


    filteredListings = allListings.filter(listing => {      const matchesSearch = null;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>
<<<<<<< HEAD
<<<<<<< HEAD
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
      const matchesBrand = null;
        selectedBrand === 'all' ||
        (listing.brand && listing.brand === selectedBrand)
      const matchesSpecs = null;
        !specQuery ||
        (listing.specifications &&
          listing.specifications.some(s =>
            s.toLowerCase().includes(specQuery.toLowerCase())
          )) ||
        (listing.tags &&
          listing.tags.some(tag =>
            tag.toLowerCase().includes(specQuery.toLowerCase())
          ))
      const matchesAvailability = null;
        selectedAvailability === 'all' ||
        (listing.availability && listing.availability === selectedAvailability)
      const matchesCategory = null;
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category)
      const matchesPrice = null;
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1])
      const matchesRating = null;
        !specQuery |
        (listing.specifications &&
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),

      const matchesBrand =
        selectedBrand === "all" ||
        (listing.brand && listing.brand === selectedBrand),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const matchesSpecs =
        !specQuery |
        (listing.specifications &&
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          listing.specifications.some(s =>
            s.toLowerCase().includes(specQuery.toLowerCase())
          )) |
        (listing.tags &&
          listing.tags.some(tag =>
            tag.toLowerCase().includes(specQuery.toLowerCase())
          ))
      const matchesAvailability =
        selectedAvailability === 'all' |
        (listing.availability && listing.availability === selectedAvailability)
      const matchesCategory =
        selectedCategories.length === 0 |
        selectedCategories.includes(listing.category)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||
        (listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()))),

      const matchesAvailability =
        selectedAvailability === "all" ||
        (listing.availability && listing.availability === selectedAvailability),

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1])
          listing.price <= currentPriceFilter[1]),

<<<<<<< HEAD
      const matchesRating =
        selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      const matchesRating =
=======

      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&

          listing.price <= currentPriceFilter[1]),


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesBrand &&
        matchesSpecs &&
        matchesAvailability
      )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    })
    filteredListings.sort((a, b) => {      switch (sortOption) {
        case 'price-asc':
          return (a.price |0) - (b.price |0)
        case 'price-desc':
          return (b.price |0) - (a.price |0)
        case 'rating':
          return (b.rating |0) - (a.rating |0)
        case 'newest':
        default:
          return (
<<<<<<< HEAD
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
      }
    })
  } catch (error) {
    captureException(error)
    logErrorToProduction('Listing filter error:', { data: error })
  }
  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true)
    const listing = allListings.find(item => item.id === listingId)
    setTimeout(() => {
=======

    filtered_listings = all_listings.filter (listing => {      const matches_search =;
        !search_query ||;
        listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        (listing.tags &&;
          listing.tags.some ((tag: string) =>;
            tag.toLowerCase ().includes (search_query.toLowerCase ())));
      const matches_brand =;
        selected_brand === 'all' ||;
        (listing.brand && listing.brand === selected_brand);
      const matches_specs =;
        !spec_query ||;
        (listing.specifications &&;
          listing.specifications.some (string =>;
            s.toLowerCase ().includes (spec_query.toLowerCase ()))) ||;
        (listing.tags &&;
          listing.tags.some (tag =>;
            tag.toLowerCase ().includes (spec_query.toLowerCase ())));
      const matches_availability =;
        selected_availability === 'all' ||;
        (listing.availability && listing.availability === selected_availability);
      const matches_category =;
        selected_categories.length === 0 ||;
        selected_categories.includes (listing.category);
      const matches_price =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;
          listing.price <= currentPriceFilter[1]);
      const matches_rating =;
        selected_rating === null ||;
        (listing.rating !== undefined && listing.rating >= selected_rating),
      return (
        matches_search &&;
        matches_category &&;
        matches_price &&;
        matches_rating &&;
        matches_brand &&;
        matches_specs &&;
        matches_availability);
    });
    filtered_listings.sort ((a, b) => {      switch (sort_option) {
        case 'price - asc':;
          return (a.price || 0) - (b.price || 0);
        case 'price - desc':;
          return (b.price || 0) - (a.price || 0);
        case 'rating':;
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':;
        default:;

          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
      }
    });
=======
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
      }
    });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    capture_exception (error);
    logErrorToProduction ('Listing filter error:', { data: error });
  }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })
<<<<<<< HEAD
<<<<<<< HEAD
    }),
    filteredListings.sort((a, b) => {
      switch (sortOption) {
        case "price-asc": return (a.price || 0) - (b.price || 0),
        case "price-desc":
          return (b.price || 0) - (a.price || 0),
        case "rating":
          return (b.rating || 0) - (a.rating || 0),
        case "newest":
        default:
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          )
;
export function DynamicListingPage({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }
  const handleRequestQuote = (listing_id: string) =>: any {
    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);
    set_timeout (() => {
      setIsLoading (false);      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Quote Requested',
          description: `Your quote request for ${listing.title} has been sent.`,
        });
        // Store quote data in session_storage for the request - quote page;
        const quote_data = {
          service_type: category_slug,
          specific_item: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
          },
        }
        // Check condition
if ( {) {
  $2
}
          session_storage.set_item ('quoteRequestData', JSON.stringify (quote_data));
        }


import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GradientHeading } from '@/components/GradientHeading';
import { ProductListingCard } from '@/components/ProductListingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';import { useRouter } from 'next/router';
import { GradientHeading } from "@/components/GradientHeading";
import { ProductListingCard } from "@/components/ProductListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton ;
import { Slider } from '@/components/ui/slider';
import { ProductListing, ListingView } from '@/types/listings';
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';
interface PriceRange {;
  min: number;
max: number ;
}interface DynamicListingPageProps {;
  title: string;
description: string;
categorySlug: string;
listings: ProductListing[];
categoryFilters: {;
  label: string, value: string ;
}[];
initialPrice?: PriceRange;
}const toggleCategory = (category: string) => {;
  setSelectedCategories (prev => prev && prev.includes (category) ? prev && prev.filter (c => c !== category) : [...prev, category] min: 0;
max: 10000 ;
});

export function DynamicListingPage(): any ({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
  initialPrice = { min: 0, max: 10000 },;
<<<<<<< HEAD
<<<<<<< HEAD
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {;
  const router = useRouter(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),;
  const toggleCategory = (category: string) => {;
    setSelectedCategories(prev =>;
      prev.includes(category);
        ? prev.filter(c => c !== category);
        : [...prev, category];
    );
  },;
  const clearCategories = () => setSelectedCategories([]),;
  const [view, setView] = useState<ListingView>("grid"),;
  const isGrid = view === "grid",;
  // Swap icons to match action;
  const ToggleViewIcon = isGrid ? (;
    <List className="h-4 w-4" />;
  ) : (;
    <LayoutGrid className="h-4 w-4" />;
  ),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>({;
    min: 0,;
    max: 10000}),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  const [selectedBrand, setSelectedBrand] = useState("all"),;
  const [specQuery, setSpecQuery] = useState(""),;
  const [selectedAvailability, setSelectedAvailability] = useState("all"),;
  const [sortOption, setSortOption] = useState("newest"),;
  const brandOptions = Array.from(;
    new Set(allListings.map((l) => l.brand).filter(Boolean))),;
  const availabilityOptions = Array.from(;
    new Set(allListings.map((l) => l.availability).filter(Boolean))),;
  useEffect(() => {;
    const listingsWithPrice = allListings.filter((l) => l.price !== null),;
    if (listingsWithPrice.length > 0) {;
      const max = Math.max(...listingsWithPrice.map((l) => l.price || 0)),;
      setPriceRange({ min: 0, max }),;
      setCurrentPriceFilter([0, max]);
    }
  }, [allListings]),;
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice.max]),;
  const handleSliderChange = (values: number[]) => {;
    const [min, max] = values.map(Number),;
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,;
    setCurrentPriceFilter([min, max]);
  },;
  let filteredListings: ProductListing[] = [],;
  try {;
    filteredListings = allListings.filter((listing) => {;
      const matchesSearch =;
        !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags &&;
          listing.tags.some((tag: string) =>;
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),;
      const matchesBrand =;
        selectedBrand === "all" ||;
        (listing.brand && listing.brand === selectedBrand),;
      const matchesSpecs =;
        !specQuery ||;
        (listing.specifications &&;
          listing.specifications.some((s) =>;
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||;
        (listing.tags &&;
          listing.tags.some((tag) =>;
            tag.toLowerCase().includes(specQuery.toLowerCase()))),;
      const matchesAvailability =;
        selectedAvailability === "all" ||;
        (listing.availability && listing.availability === selectedAvailability),;
      const matchesCategory =;
        selectedCategories.length === 0 ||;
        selectedCategories.includes(listing.category),;
      const matchesPrice =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;
          listing.price <= currentPriceFilter[1]),;
      const matchesRating =;
        selectedRating === null ||;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
      return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  detailBasePath = '/marketplace/listing',;
}: DynamicListingPageProps) {;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>;
      prev && prev.includes(category);
        ? prev && prev.filter(c => c !== category);
        : [...prev, category];
    );
  };
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>('grid');
  const isGrid = view === 'grid';
  // Swap icons to match action;
  const ToggleViewIcon = isGrid ? (;
    <List className='h-4 w-4' />;
  ) : (;
    <LayoutGrid className='h-4 w-4' />;
  );
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({;
    min: 0,;
    max: 10000,;
  });

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [specQuery, setSpecQuery] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  const brandOptions = Array && Array.from(;
    new Set(allListings && allListings.map(l => l && l.brand).filter(Boolean));
  );
  const availabilityOptions = Array && Array.from(;
    new Set(allListings && allListings.map(l => l && l.availability).filter(Boolean));
  );

  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min: 0, max });
      setCurrentPriceFilter([0, max]);    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice && initialPrice.max]);

  const handleSliderChange = (values: number[]) => {;
    const [min, max] = values && values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, max]);
  };
  let filteredListings: ProductListing[] = [];
  try {;
    filteredListings = allListings && allListings.filter(listing => {      const matchesSearch =;
        !searchQuery ||;
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some((tag: string) =>;
            tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          ));
      const matchesBrand =;
        selectedBrand === 'all' ||;
        (listing && listing.brand && listing && listing.brand === selectedBrand);

      const matchesSpecs =;
        !specQuery ||;
        (listing && listing.specifications &&;
          listing && listing.specifications.some(s =>;
            s && s.toLowerCase().includes(specQuery && specQuery.toLowerCase());
          )) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some(tag =>;
            tag && tag.toLowerCase().includes(specQuery && specQuery.toLowerCase());
          ));
      const matchesAvailability =;
        selectedAvailability === 'all' ||;
        (listing && listing.availability && listing && listing.availability === selectedAvailability);

      const matchesCategory =;
        selectedCategories && selectedCategories.length === 0 ||;
        selectedCategories && selectedCategories.includes(listing && listing.category);

      const matchesPrice =;
        listing && listing.price === null ||;
        (listing && listing.price >= currentPriceFilter[0] &&;
          listing && listing.price <= currentPriceFilter[1]);

      const matchesRating =;
        selectedRating === null ||;
        (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating),;

      return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;
      );
<<<<<<< HEAD
<<<<<<< HEAD
    }),;
    filteredListings.sort((a, b) => {;
      switch (sortOption) {;
        case "price-asc": return (a.price || 0) - (b.price || 0),;
        case "price-desc":;
          return (b.price || 0) - (a.price || 0),;
        case "rating":;
          return (b.rating || 0) - (a.rating || 0),;
        case "newest":;
        default:;
          return (;
            new Date(b.createdAt).getTime() -;
            new Date(a.createdAt).getTime();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    filteredListings && filteredListings.sort((a, b) => {      switch (sortOption) {;
        case 'price-asc':;
          return (a && a.price || 0) - (b && b.price || 0);
        case 'price-desc':;
          return (b && b.price || 0) - (a && a.price || 0);
        case 'rating':;
          return (b && b.rating || 0) - (a && a.rating || 0);
        case 'newest':;
        default:;
          return (
            new Date(b && b.createdAt).getTime() - new Date(a && a.createdAt).getTime();
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          );
      }
    });
  } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
    captureException(error),;
    logErrorToProduction('Listing filter error:', { data: error });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    captureException(error);
    logErrorToProduction('Listing filter error:', { data: error });
  }

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);

    const listing = allListings && allListings.find(item => item && item.id === listingId);

    setTimeout(() => {;
      setIsLoading(false);      if (listing) {;
        toast({;
          title: 'Quote Requested',;
          description: `Your quote request for ${listing && listing.title} has been sent.`,;
        });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        router.push ('/request - quote');

      }
    }, 500);
  }

<<<<<<< HEAD
  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
<<<<<<< HEAD
<<<<<<< HEAD
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }
        }
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
          },
        }
            image: listing.images?.[0]}},
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

        router.push('/request-quote')
      }
    }, 500)
  }
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]}},
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

        router.push("/request-quote")
      }
    }, 500)
  },
=======

            id: listing.id,
            title: listing.title,
            category: listing.category,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-1'>
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' /> Filters
              </h3>
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
<<<<<<< HEAD
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            id: listing.id,
            title: listing.title,
            category: listing.category,

  return (


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
<<<<<<< HEAD
<<<<<<< HEAD
                  Categories
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

                  Categories
                </label>
                <div className="space-y-2">
                  {categoryFilters.map(filter => (
=======


                  Categories
                </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


                  Categories
                </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
<<<<<<< HEAD
<<<<<<< HEAD
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />
=======

                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
ursor/fix-website-loading-errors-and-merge-6662
          </p>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>;
          <div className='lg:col-span-1'>;
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>;
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
                <Filter className='mr-2 h-5 w-5' /> Filters;
              </h3>;

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Categories;
                </label>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true),;
    const listing = allListings.find((item) => item.id === listingId),;
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title: "Quote Requested",;
          description: `Your quote request for ${listing.title} has been sent.`}),;
        // Store quote data in sessionStorage for the request-quote page;
        const quoteData = {;
          serviceType: categorySlug,;
          specificItem: {;
            id: listing.id,;
            title: listing.title,;
            category: listing.category,;
            image: listing.images?.[0]}},;
        if (typeof window !== 'undefined') {;
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData));
        }
;
        router.push("/request-quote");
      }
    }, 500);
  },;
  return (;
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            {description}
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          <div className="lg:col-span-1">;
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Categories;
                </label>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>;
          <div className='lg:col-span-1'>;
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>;
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
                <Filter className='mr-2 h-5 w-5' /> Filters;
              </h3>;

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Categories;
                </label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="space-y-2">;
                  {categoryFilters.map(filter => (;
                    <div key={filter.value} className="flex items-center">;
                      <Checkbox;
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
                      />;
                      <label;
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer";
                      >;
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                </div>;
              </div>;

<<<<<<< HEAD
              {brandOptions && brandOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Brand;
                  </label>;

                  <Select
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {filter.label}
                      </label>
                    </div>
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
              </div>
              {brandOptions.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
                    Brand
                  </label>
                  <Select
                    value = {selectedBrand,}
                    onValueChange = {(value: string,) => setSelectedBrand(value),}
                  >
                    <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Select Brand' />
                    </SelectTrigger>
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='all' className='text-white'>
                        All Brands
                      </SelectItem>
                      {brandOptions.map(b => (
                        <SelectItem
                          key={b |'unknown-brand'}
                          value={b |''}
                          className='text-white'
                        >                          {b |'N/A'}
                        </SelectItem>
=======

                </div>;
              </div>;

              {brandOptions && brandOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Brand;
                  </label>;

                  <Select

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          key={b || 'unknown-brand'}
                          value={b || ''}
                          className='text-white'>                          {b || 'N/A'}
                        </SelectItem>;


                    value={selectedBrand}
                    onValueChange={(value: string) => setSelectedBrand(value)}
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All Brands
                      </SelectItem>
                      {brandOptions.map((b) => (
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className="text-white">
                          {b || 'N/A'}
                        </SelectItem>;
<<<<<<< HEAD
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Specifications
                </label>
                <Input
                  type='text'
                  placeholder='Search specifications...'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}




              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Specifications;
                </label>;
                <Input



                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }


                  className="bg-zion-blue border border-zion-blue-light text-white"
                />


              </div>
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Specifications
                </label>
                <Input
                  type="text"
                  placeholder="Search specifications..."
                  type='text'
                  placeholder='Search specifications...'
                  type="text"
                  placeholder="Search specifications..."
                  value={specQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)
                  }
                  className='bg-zion-blue border border-zion-blue-light text-white'                />
                  className="bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              {availabilityOptions.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
=======

                </div>;
              </div>;

              {brandOptions && brandOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Brand;
                  </label>;

                  <Select

                          key={b || 'unknown-brand'}
                          value={b || ''}
                          className='text-white'>                          {b || 'N/A'}
                        </SelectItem>;


                    value={selectedBrand}
                    onValueChange={(value: string) => setSelectedBrand(value)}
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All Brands
                      </SelectItem>
                      {brandOptions.map((b) => (
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className="text-white">
                          {b || 'N/A'}
                        </SelectItem>;

                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}




              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Specifications;
                </label>;
                <Input



                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }
                  className='bg-zion-blue border border-zion-blue-light text-white'                />
                  className="bg-zion-blue border border-zion-blue-light text-white"
                />


              </div>
              {availabilityOptions.length > 0 && (
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Availability
                  </label>
                  className='bg-zion-blue border border-zion-blue-light text-white'                />;
              </div>;

              {availabilityOptions && availabilityOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Availability;
                  </label>;
                  <Select
<<<<<<< HEAD
                    value = {selectedAvailability,}
                    onValueChange = {(value: string,) =>
                      setSelectedAvailability(value)
                    ,}

<<<<<<< HEAD
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          key={a || 'unknown-availability'}
                          value={a || ''}
                          className='text-white'>                          {a || 'N/A'}
                        </SelectItem>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    value={selectedAvailability}
                    onValueChange={(value: string) =>;
                      setSelectedAvailability(value);
                    }

                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {availabilityOptions.map(a => (
                        <SelectItem
                          key={a |'unknown-availability'}
                          value={a |''}
                          className='text-white'
                        >                          {a |'N/A'}
                        </SelectItem>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">
                          {a || 'N/A'}
                        </SelectItem>;
<<<<<<< HEAD
<<<<<<< HEAD
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
<<<<<<< HEAD



              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">


                </label>
                <div className='mt-6 px-2'>

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Price Range;
                </label>;
                <div className='mt-6 px-2'>;
                  <Slider
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
<<<<<<< HEAD
                <div className="mt-6 px-2">
                  <Slider
                    aria-label='Price range'
                    aria-label="Price range"
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    aria-label='Price range'
ursor/fix-website-loading-errors-and-merge-6662
=======
                <div className='mt-6 px-2'>

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Price Range;
                </label>;
                <div className='mt-6 px-2'>;
                  <Slider
                    aria-label='Price range'
                    aria-label="Price range"


                    defaultValue={[0, priceRange.max]}
                    min={0}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className='mb-4'                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    className='mb-4'                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">


                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Minimum Rating
                </label>
                <div className='flex flex-wrap gap-2'>
                  {[null, 3, 4, 5].map(rating => (
<<<<<<< HEAD
=======

                    className='mb-4'                  />;
                  <div className='flex justify-between text-sm text-zion-slate-light'>;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Minimum Rating;
                </label>;
                <div className='flex flex-wrap gap-2'>;
                  {[null, 3, 4, 5].map(rating => (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant='outline'
                      size='sm'
<<<<<<< HEAD
<<<<<<< HEAD
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating })
                        setSelectedRating(rating) }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      onClick={() => {;
                        logInfo('Rating selected:', { data: rating });
                        setSelectedRating(rating);                      }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      aria-pressed = {selectedRating === rating,}
                      className={`{;
                        selectedRating === rating;
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple";
                          : "border-zion-blue-light text-zion-slate-light";
                      } focus-visible:ring-zion-purple`}
                    >;
                      {rating === null ? (;
                        'Any';
                      ) : (;
                        <div className='flex items-center'>;
                          {[...Array(rating)].map((_, i) => (;
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />;


              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? "any" : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating }),
                        setSelectedRating(rating)
                      }}
                      aria-pressed={selectedRating === rating}

                      className={`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className='flex items-center'>
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan"
                            />

                          ))}
<<<<<<< HEAD
<<<<<<< HEAD
                          <span className="ml-1">& Up</span>
                        </div>)}
                    </Button>))}
=======
                          <span className='ml-1'>& Up</span>;
                        </div>;
                      )}
                    </Button>;
                  ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                  logInfo('Clearing filters')
                  setSearchQuery('')
                  clearCategories()
                  setCurrentPriceFilter([0, priceRange.max])
                  setSelectedRating(null)
                  setSelectedBrand('all')
                  setSpecQuery('')
                  setSelectedAvailability('all')
<<<<<<< HEAD
=======
                          <span className='ml-1'>& Up</span>;
                        </div>;
                      )}
                    </Button>;
                  ))}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  logInfo("Clearing filters"),
                  setSearchQuery(""),
                  clearCategories(),
                  setCurrentPriceFilter([0, priceRange.max]),
                  setSelectedRating(null),
                  setSelectedBrand("all"),
                  setSpecQuery(""),
                  setSelectedAvailability("all")


                }}
              >
                Clear All
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='lg:col-span-3'>
            <div className='bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='relative flex-grow'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                  <Input
                    type='text'
                    placeholder='Search listings...'
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', { data: e.target.value })
                      setSearchQuery(e.target.value) }}
                    className='pl-10 bg-zion-blue border border-zion-blue-light text-white'
                  />
                </div>
                <div className='flex items-center gap-2 ml-auto'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>;
              </div>;

              <Button
                variant='outline'
                className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                onClick={() => {;
                  logInfo('Clearing filters');
                  setSearchQuery('');
                  clearCategories();
                  setCurrentPriceFilter([0, priceRange && priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand('all');
                  setSpecQuery('');
                  setSelectedAvailability('all');
                }}
    <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
      <div className='container mx - auto'>;
        <div className='text - center mb - 12'>;
          <GradientHeading>{title}</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto'>;
            {description}
          </p>;
        </div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 6'>;
          <div className='lg:col - span - 1'>;
            <div className='bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6'>;
              <h3 className='text - lg font - medium text - white mb - 4 flex items - center'>;
                <Filter className='mr - 2 h - 5 w - 5' /> Filters;
              </h3>;
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Categories;
                </label>;
                <div className='space - y-2'>;
                  {category_filters.map (filter => (
                    <div key={filter.value} className='flex items - center'>;
                      <Checkbox;
                        id={`cat-${filter.value}`}
                        checked={selected_categories.includes (filter.value)}
                        onCheckedChange={() => toggle_category (filter.value)}
                        className='border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple'                      />;
                      <label;
                        html_for={`cat-${filter.value}`}
                        className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
                      >;
                        {filter.label}
                      </label>;
                    </div>))}
                </div>;
              </div>;
              {brand_options.length > 0 && (
                <div className='mb - 6'>;
                  <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                    Brand;
                  </label>;
                  <Select;
                    value = {selected_brand, }
                    onValueChange = {(value: string, ) => setSelectedBrand (value), }
                  >;
                    <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Select Brand' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='all' className='text - white'>;
                        All Brands;
                      </SelectItem>;
                      {brand_options.map (boolean => (
                        <SelectItem;
                          key={b || 'unknown - brand'}
                          value={b || ''}
                          className='text - white';
                        >                          {b || 'N / A'}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </div>)}
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Specifications;
                </label>;
                <Input;
                  type='text';
                  placeholder='Search specifications...';
                  value={spec_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                    setSpecQuery (e.target.value);
                  }
                  className='bg - zion - blue border border - zion - blue - light text - white'                />;
              </div>;
              {availability_options.length > 0 && (
                <div className='mb - 6'>;
                  <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                    Availability;
                  </label>;
                  <Select;
                    value = {selected_availability, }
                    onValueChange = {(value: string, ) =>;
                      setSelectedAvailability (value);
                    , }
                  >;
                    <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Select Availability' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='all' className='text - white'>;
                        All;
                      </SelectItem>;
                      {availability_options.map (array => (
                        <SelectItem;
                          key={a || 'unknown - availability'}
                          value={a || ''}
                          className='text - white';
                        >                          {a || 'N / A'}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </div>)}
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Price Range;
                </label>;
                <div className='mt - 6 px - 2'>;
                  <Slider;
                    aria - label='Price range';
                    default_value={[0, price_range.max]}
                    min={0}
                    max={price_range.max}
                    step={price_range.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className='mb - 4'                  />;
                  <div className='flex justify - between text - sm text - zion - slate - light'>;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
              </div>;
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Minimum Rating;
                </label>;
                <div className='flex flex - wrap gap - 2'>;
                  {[null, 3, 4, 5].map (rating => (
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant='outline';
                      size='sm';
                      on_click={() => {
                        log_info ('Rating selected:', { data: rating });
                        setSelectedRating (rating) }}
                      aria - pressed = {selected_rating === rating, }
                      className={`{
                        selected_rating === rating;
                          ? "bg - zion - purple / 30 border - zion - purple text - zion - purple";
                          : "border - zion - blue - light text - zion - slate - light";
                      } focus - visible:ring - zion - purple`}
                    >;
                      {rating === null ? (
                        'Any') : (
                        <div className='flex items - center'>;
                          {[...Array (rating)].map ((_, i) => (
                            <Star;
                              key={i}
                              className='h - 3 w - 3 fill - zion - cyan text - zion - cyan'                            />))}
                          <span className='ml - 1'>& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;
                variant='outline';
                className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                on_click={() => {
                  log_info ('Clearing filters');
                  setSearchQuery ('');
                  clear_categories ();
                  setCurrentPriceFilter ([0, price_range.max]);
                  setSelectedRating (null);
                  setSelectedBrand ('all');
                  setSpecQuery ('');
                  setSelectedAvailability ('all');
                }}



          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search listings..."
                </div>;
              </div>;
              <Button;
                variant="outline";
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
                onClick={() => {;
                  logInfo("Clearing filters"),;
                  setSearchQuery(""),;
                  clearCategories(),;
                  setCurrentPriceFilter([0, priceRange.max]),;
                  setSelectedRating(null),;
                  setSelectedBrand("all"),;
                  setSpecQuery(""),;
                  setSelectedAvailability("all");
                }}
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;

          <div className="lg:col-span-3">;
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">;
              <div className="flex flex-col md:flex-row gap-4">;
                <div className="relative flex-grow">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Input;
                    type="text";
                    placeholder="Search listings...";
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {;
                      logInfo('Search query:', { data: e.target.value }),;
                      setSearchQuery(e.target.value);
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>

                <div className="flex items-center gap-2 ml-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
=======


                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
                    </SelectTrigger>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='newest' className='text-white'>
                        Newest
                      </SelectItem>
                      <SelectItem value='price-asc' className='text-white'>
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value='price-desc' className='text-white'>
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value='rating' className='text-white'>
                        Highest Rating
                      </SelectItem>
<<<<<<< HEAD
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="newest" className="text-white">Newest</SelectItem>
                      <SelectItem value="price-asc" className="text-white">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc" className="text-white">Price: High to Low</SelectItem>
                      <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </SelectContent>
                  </Select>

                    onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => {;
                      logInfo('Search query:', { data: e && e.target.value });
                      setSearchQuery(e && e.target.value);                    }}
                    className='pl-10 bg-zion-blue border border-zion-blue-light text-white';
                  />;
                </div>;

                <div className='flex items-center gap-2 ml-auto'>;
                  <Select value={sortOption} onValueChange={setSortOption}>;
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>;
                      <SelectValue placeholder='Sort' />;
                    </SelectTrigger>;
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;
                      <SelectItem value='newest' className='text-white'>;
                        Newest;
                      </SelectItem>;
                      <SelectItem value='price-asc' className='text-white'>;
                        Price: Low to High;
                      </SelectItem>;
                      <SelectItem value='price-desc' className='text-white'>;
                        Price: High to Low;
                      </SelectItem>;
                      <SelectItem value='rating' className='text-white'>;
          <div className='lg:col - span - 3'>;
            <div className='bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light'>;
              <div className='flex flex - col md:flex - row gap - 4'>;
                <div className='relative flex - grow'>;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Input;
                    type='text';
                    placeholder='Search listings...';
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {
                      log_info ('Search query:', { data: e.target.value });
                      setSearchQuery (e.target.value) }}
                    className='pl - 10 bg - zion - blue border border - zion - blue - light text - white';
                  />;
                </div>;
                <div className='flex items - center gap - 2 ml - auto'>;
                  <Select value={sort_option} onValueChange={setSortOption}>;
                    <SelectTrigger className='w-[150px] bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Sort' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='newest' className='text - white'>;
                        Newest;
                      </SelectItem>;
                      <SelectItem value='price - asc' className='text - white'>;
                        Price: Low to High;
                      </SelectItem>;
                      <SelectItem value='price - desc' className='text - white'>;
                        Price: High to Low;
                      </SelectItem>;
                      <SelectItem value='rating' className='text - white'>;

                        Highest Rating;
                      </SelectItem>;
                    </SelectContent>;
                  </Select>;

                  <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant='outline'
                    size='icon'
                    onClick={() => setView(isGrid ? 'list' : 'grid')}
                    aria-label={isGrid ? 'List view' : 'Grid view'}
                    title={isGrid ? 'List view' : 'Grid view'}
                    className='border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple'                  >
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant="outline"
                    size="icon"
                    onClick={() => setView(isGrid ? "list" : "grid")}
                    aria-label={isGrid ? "List view" : "Grid view"}
                    title={isGrid ? "List view" : "Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple"
                  >
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {ToggleViewIcon}
                    <span className="sr-only">
                      {isGrid ? "List view" : "Grid view"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='mb-6'>
              <p className='text-zion-slate-light'>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    {ToggleViewIcon}
                    <span className='sr-only'>;
                      {isGrid ? 'List view' : 'Grid view'}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="mb-6">
              <p className="text-zion-slate-light">


<<<<<<< HEAD
<<<<<<< HEAD
            <div className='mb-6'>
              <p className='text-zion-slate-light'>

            <div className="mb-6">
              <p className="text-zion-slate-light">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
                  <Button;
                    variant='outline';
                    size='icon';
                    on_click={() => set_view (is_grid ? 'list' : 'grid')}
                    aria - label={is_grid ? 'List view' : 'Grid view'}
                    title={is_grid ? 'List view' : 'Grid view'}
                    className='border - zion - blue - light text - zion - slate - light focus - visible:ring - zion - purple'                  >;
                    {ToggleViewIcon}
                    <span className='sr - only'>;
                      {is_grid ? 'List view' : 'Grid view'}
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;

            <div className='mb - 6'>;
              <p className='text - zion - slate - light'>;
                Showing {filtered_listings.length} results;
                {selected_categories.length > 0 &&;
                  ` in ${selected_categories.join (', ')}`}
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {is_loading ? (
              <div;
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
<<<<<<< HEAD
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                }
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='rounded-lg overflow-hidden border border-zion-blue-light'                  >
                    <Skeleton height={192} width='100%' />
                    <div className='p-4'>
                      <Skeleton height={24} width='33%' className='mb-2' />
                      <Skeleton height={32} width='83%' className='mb-4' />
                      <Skeleton height={16} width='100%' className='mb-2' />
                      <Skeleton height={16} width='80%' className='mb-4' />
                      <div className='flex justify-between items-center pt-4'>
                        <Skeleton height={24} width='25%' />
                        <Skeleton height={32} width='25%' />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="rounded-lg overflow-hidden border border-zion-blue-light"
                  >
                    <Skeleton height={192} width="100%" />
                    <div className="p-4">
                      <Skeleton height={24} width="33%" className="mb-2" />
                      <Skeleton height={32} width="83%" className="mb-4" />
                      <Skeleton height={16} width="100%" className="mb-2" />
                      <Skeleton height={16} width="80%" className="mb-4" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton height={24} width="25%" />
                        <Skeleton height={32} width="25%" />

                      </div>
                    </div>
                  </div>
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
            ) : filteredListings.length > 0 ? (
=======
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                }
              >
                {filteredListings.map(listing => (                  <ProductListingCard
                    key = {listing.id,}
                    listing = {listing,}
                    view = {view,}
                    onRequestQuote = {handleRequestQuote,}
                    detailBasePath = {detailBasePath,}
                  />
<<<<<<< HEAD
=======
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div
                className={


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"
                }
              >;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;
<<<<<<< HEAD
<<<<<<< HEAD
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">
                  No listings found
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                ))}
              </div>;
            ) : (;
              <div className='text-center py-20'>;
                <h3 className='text-xl font-bold text-white mb-2'>;
                  No listings found;
                </h3>;
                <p className='text-zion-slate-light mb-6'>;
                  Try adjusting your filters or search query;
                </p>;
                <Button



<<<<<<< HEAD
<<<<<<< HEAD
                  variant='outline'
                  onClick={() => {
                    setSearchQuery('')
                    clearCategories()
                    setCurrentPriceFilter([0, priceRange.max])
                    setSelectedRating(null)
                    setSelectedBrand('all')
                    setSpecQuery('')
                    setSelectedAvailability('all') }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  variant="outline"
                  onClick={() => {
                    setSearchQuery(""),
                    clearCategories(),
                    setCurrentPriceFilter([0, priceRange.max]),
                    setSelectedRating(null),
                    setSelectedBrand("all"),
                    setSpecQuery(""),
                    setSelectedAvailability("all")
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >
                  Clear All
                </Button>
              </div>
<<<<<<< HEAD
                  Clear All
=======

                >
                  Clear All
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Button>
              </div>
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );

};
if (typeof window !== 'undefined') {';
  sessionStorage && sessionStorage.setItem ('quoteRequestData', JSON && JSON.stringify (quoteData) ) ;

}, 500) ;
};";
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {;
  filter && filter.label ;
}</label> </div>) ) ;
}</div> </div> Brand </label> <Selectvalue= {
  selectedBrand 
}onValueChange= {
  (value: string) => setSelectedBrand (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Selectvalue= {
  selectedAvailability 
}onValueChange= {
  (value: string) => setSelectedAvailability (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label> ;

}aria-pressed= {;
  selectedRating === rating ;
}className= {;
  ` {;
  selectedRating === rating <Starkey= {
  i "
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ";
}<span className="ml-1" >& Up</span> </div>) ;
}</Button>) ) ;
}</div> </div> <ButtonclearCategories ()
setCurrentPriceFilter ([0, priceRange && priceRange.max])
setSelectedRating (null)"> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input
}"
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {;
  isLoading ? (<divclassName= {> {;
  [1, 2,  3, 4].map ( (i) => (<divkey= {
  i "
}className="rounded-lg overflow-hidden border border-zion-blue-light"> </div> </div> </div>) ) ;
}</div> > {;
  filteredListings && filteredListings.map ( (listing) => (<ProductListingCardkey= {
  listing && listing.id 
                  </div>))}
              </div>) : filtered_listings.length > 0 ? (
              <div;
                className={
                  view === 'grid';
                    ? 'grid grid - cols - 1 md:grid - cols - 2 gap - 6';
                    : 'flex flex - col gap - 6';
                }
              >;
                {filtered_listings.map (listing => (                  <ProductListingCard;
                    key = {listing.id, }
                    listing = {listing, }
                    view = {view, }
                    onRequestQuote = {handleRequestQuote, }
                    detailBasePath = {detailBasePath, }
                  />))}
              </div>) : (
              <div className='text - center py - 20'>;
                <h3 className='text - xl font - bold text - white mb - 2'>;
                  No listings found;
                </h3>;
                <p className='text - zion - slate - light mb - 6'>;
                  Try adjusting your filters or search query;
                </p>;
                <Button;
                  variant='outline';
                  on_click={() => {
                    setSearchQuery ('');
                    clear_categories ();
                    setCurrentPriceFilter ([0, price_range.max]);
                    setSelectedRating (null);
                    setSelectedBrand ('all');
                    setSpecQuery ('');
                    setSelectedAvailability ('all') }}
                  className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                >;
                  Clear All;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Check condition
if ( {') {
  $2
}
  session_storage.set_item ('quoteRequestData', JSON.stringify (quote_data) );
}, 500);
}";
return (</p> </div> <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6" > <div className="lg:col - span - 1" > <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6" > <h3 className="text - lg font - medium text - white mb - 4 flex items - center" > <Filter className="mr - 2 h - 5 w - 5" /> Filters </h3> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Categories </label> > {
  filter.label;
}</label> </div>) );
}</div> </div> Brand </label> <Select value= {
  selected_brand;
}onValueChange= {
  (value: string) => setSelectedBrand (value) ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All Brands </SelectItem> </SelectItem>) );
}</SelectContent> </Select> </div>) ";
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Specifications </label> <Input Availability </label> <Select value= {
  selected_availability;
}onValueChange= {
  (value: string) => setSelectedAvailability (value) ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All </SelectItem> </SelectItem>) );
}</SelectContent> </Select> </div>) ";
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Price Range </label> <div className="mt - 6 px - 2" > <Slider </div> </div> </div> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Minimum Rating </label>;
}aria - pressed= {
  selected_rating === rating;
}className= {
  ` {
  selected_rating === rating <Star key= {
  i ";
}className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />) ) ";
}<span className="ml - 1" >& Up</span> </div>);
}</Button>) );
}</div> </div> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);";
> Clear All </Button> </div> </div> <div className="lg:col - span - 3" > <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light" > <div className="flex flex - col md:flex - row gap - 4" > <div className="relative flex - grow" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input;
}";
}className="pl - 10 bg - zion - blue border border - zion - blue - light text - white" /> </div> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="newest" className="text - white" >Newest</SelectItem> <SelectItem value="price - asc" className="text - white" >Price: Low to High</SelectItem> <SelectItem value="price - desc" className="text - white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text - white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {
  is_loading ? (<div className= {
  > {
  [1, 2,  3, 4].map ( (i) => (<div key= {
  i ";
}className="rounded - lg overflow - hidden border border - zion - blue - light" > </div> </div> </div>) );
}</div> > {
  filtered_listings.map ( (listing) => (<ProductListingCard key= {
  listing.id;

}listing= {
  listing;
}view= {
  view;
}onRequestQuote= {
  handleRequestQuote;
}detailBasePath= {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
if (typeof window !== 'undefined') {'
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) )
}, 500)
};"
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {
  filter.label
}</label> </div>) )
}</div> </div> Brand </label> <Select value= {
  selectedBrand
}onValueChange= {
  (value: string) => setSelectedBrand (value) "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) )
}</SelectContent> </Select> </div>) "
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Select value= {
  selectedAvailability
}onValueChange= {
  (value: string) => setSelectedAvailability (value) "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) )
}</SelectContent> </Select> </div>) "
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label>
}aria-pressed= {
  selectedRating === rating
}className= {
  ` {
  selectedRating === rating <Star key= {
  i "
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) "
}<span className="ml-1" >& Up</span> </div>)
}</Button>) )
}</div> </div> <Button clearCategories ()
setCurrentPriceFilter ([0, priceRange.max])
setSelectedRating (null);"
> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input
}"
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {
  isLoading ? (<div className= {
  > {
  [1, 2,  3, 4].map ( (i) => (<div key= {
  i "
}className="rounded-lg overflow-hidden border border-zion-blue-light" > </div> </div> </div>) )
}</div> > {
  filteredListings.map ( (listing) => (<ProductListingCard key= {
  listing.id
}listing= {
  listing
}view= {
  view
}onRequestQuote= {
  handleRequestQuote
}detailBasePath= {
  detailBasePath
}/>) ) "
}</div> No listings found </h3> <p className="text-zion-slate-light mb-6" > Try adjusting your filters or search query </p> <Button clearCategories ()
setCurrentPriceFilter ([0, priceRange.max])
setSelectedRating (null)
> Clear All </Button> </div>)
}</div> </div> </div> </div>)
}'"  )
}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">;
                  No listings found;
                </h3>;
                <p className="text-zion-slate-light mb-6">;
                  Try adjusting your filters or search query;
                </p>;
                <Button;
                  variant="outline";
                  onClick={() => {;
                    setSearchQuery(""),;
                    clearCategories(),;
                    setCurrentPriceFilter([0, priceRange.max]),;
                    setSelectedRating(null),;
                    setSelectedBrand("all");
                    setSpecQuery("");
                    setSelectedAvailability("all");
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                >;
                  Clear All;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



;

  detailBasePath;
}/>) ) ";
}</div> No listings found </h3> <p className="text - zion - slate - light mb - 6" > Try adjusting your filters or search query </p> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);
> Clear All </Button> </div>);
}</div> </div> </div> </div>);
}'"  );
<<<<<<< HEAD

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
