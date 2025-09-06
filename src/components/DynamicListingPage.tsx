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
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function DynamicListingPage({
<<<<<<< HEAD
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
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  detailBasePath = '/marketplace/listing',
}: DynamicListingPageProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
<<<<<<< HEAD
  }
  const clearCategories = () => setSelectedCategories([])
  const [view, setView] = useState<ListingView>('grid')
  const isGrid = view === 'grid'
=======
  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
<<<<<<< HEAD
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
<<<<<<< HEAD
    if (min == null |max == null |isNaN(min) |isNaN(max)) return
=======
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setCurrentPriceFilter([min, max])
  }
  let filteredListings: ProductListing[] = []
  try {
<<<<<<< HEAD
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
=======
    filteredListings = allListings.filter(listing => {      const matchesSearch = null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>
<<<<<<< HEAD
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),

      const matchesBrand =
        selectedBrand === "all" ||
        (listing.brand && listing.brand === selectedBrand),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const matchesSpecs =
        !specQuery |
        (listing.specifications &&
<<<<<<< HEAD
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
=======
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&
<<<<<<< HEAD
          listing.price <= currentPriceFilter[1])
=======
          listing.price <= currentPriceFilter[1]),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const matchesRating =
        selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
=======
      const matchesRating =
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
      }
    })
  } catch (error) {
    captureException(error)
    logErrorToProduction('Listing filter error:', { data: error })
  }
<<<<<<< HEAD
  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true)
    const listing = allListings.find(item => item.id === listingId)
    setTimeout(() => {
=======

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })
=======
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
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
  initialPrice = { min: 0, max: 10000 },;
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
        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;
      );
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
          );
      }
    });
  } catch (error) {;
    captureException(error),;
    logErrorToProduction('Listing filter error:', { data: error });
  }

  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true),

    const listing = allListings.find((item) => item.id === listingId),

    setTimeout(() => {
      setIsLoading(false),
      if (listing) {
        toast({
          title: "Quote Requested",
          description: `Your quote request for ${listing.title} has been sent.`}),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
<<<<<<< HEAD
<<<<<<< HEAD
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }
        }
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }
=======
            id: listing.id,
            title: listing.title,
            category: listing.category,
<<<<<<< HEAD
            image: listing.images?.[0],
          },
        }
=======
            image: listing.images?.[0]}},
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        router.push('/request-quote')
      }
    }, 500)
  }
=======
<<<<<<< HEAD
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]}},
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        router.push("/request-quote")
      }
    }, 500)
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-1'>
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' /> Filters
              </h3>
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
=======

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  Categories
                </label>
                <div className="space-y-2">
                  {categoryFilters.map(filter => (
                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
<<<<<<< HEAD
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
=======
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
<<<<<<< HEAD
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {brandOptions.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
                    Brand
                  </label>
                  <Select
<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
<<<<<<< HEAD
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Specifications
                </label>
                <Input
                  type='text'
                  placeholder='Search specifications...'
=======

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Specifications
                </label>
                <Input
<<<<<<< HEAD
                  type="text"
                  placeholder="Search specifications..."
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
                  type='text'
                  placeholder='Search specifications...'
=======
                  type="text"
                  placeholder="Search specifications..."
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  value={specQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)
                  }
<<<<<<< HEAD
                  className='bg-zion-blue border border-zion-blue-light text-white'                />
=======
                  className="bg-zion-blue border border-zion-blue-light text-white"
                />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
              {availabilityOptions.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
                    Availability
                  </label>
                  <Select
<<<<<<< HEAD
                    value = {selectedAvailability,}
                    onValueChange = {(value: string,) =>
                      setSelectedAvailability(value)
                    ,}
=======
                    value={selectedAvailability}
                    onValueChange={(value: string) =>;
                      setSelectedAvailability(value);
                    }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
<<<<<<< HEAD
                      {availabilityOptions.map(a => (
                        <SelectItem
                          key={a |'unknown-availability'}
                          value={a |''}
                          className='text-white'
                        >                          {a |'N/A'}
                        </SelectItem>
=======
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">
                          {a || 'N/A'}
                        </SelectItem>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
<<<<<<< HEAD
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
=======

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  Price Range
                </label>
                <div className="mt-6 px-2">
                  <Slider
<<<<<<< HEAD
                    aria-label='Price range'
=======
                    aria-label="Price range"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD
                    className='mb-4'                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
=======
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Minimum Rating
                </label>
                <div className='flex flex-wrap gap-2'>
                  {[null, 3, 4, 5].map(rating => (
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant='outline'
                      size='sm'
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating })
                        setSelectedRating(rating) }}
                      aria-pressed = {selectedRating === rating,}
=======

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                        <div className='flex items-center'>
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />
=======
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan"
                            />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          ))}
                          <span className="ml-1">& Up</span>
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
<<<<<<< HEAD
                  logInfo('Clearing filters')
                  setSearchQuery('')
                  clearCategories()
                  setCurrentPriceFilter([0, priceRange.max])
                  setSelectedRating(null)
                  setSelectedBrand('all')
                  setSpecQuery('')
                  setSelectedAvailability('all')
=======
                  logInfo("Clearing filters"),
                  setSearchQuery(""),
                  clearCategories(),
                  setCurrentPriceFilter([0, priceRange.max]),
                  setSelectedRating(null),
                  setSelectedBrand("all"),
                  setSpecQuery(""),
                  setSelectedAvailability("all")
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }}
              >
                Clear All
              </Button>
            </div>
          </div>
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="newest" className="text-white">Newest</SelectItem>
                      <SelectItem value="price-asc" className="text-white">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc" className="text-white">Price: High to Low</SelectItem>
                      <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
<<<<<<< HEAD
                    variant='outline'
                    size='icon'
                    onClick={() => setView(isGrid ? 'list' : 'grid')}
                    aria-label={isGrid ? 'List view' : 'Grid view'}
                    title={isGrid ? 'List view' : 'Grid view'}
                    className='border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple'                  >
=======
                    variant="outline"
                    size="icon"
                    onClick={() => setView(isGrid ? "list" : "grid")}
                    aria-label={isGrid ? "List view" : "Grid view"}
                    title={isGrid ? "List view" : "Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple"
                  >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {ToggleViewIcon}
                    <span className="sr-only">
                      {isGrid ? "List view" : "Grid view"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className='mb-6'>
              <p className='text-zion-slate-light'>
=======

            <div className="mb-6">
              <p className="text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
              <div
                className={
<<<<<<< HEAD
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
=======
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div
                className={
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                >
                  Clear All
                </Button>
              </div>
<<<<<<< HEAD
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
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
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
