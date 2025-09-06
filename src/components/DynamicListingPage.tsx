<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast";
import { captureException } from "@/utils/sentry";
interface PriceRange {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD

import {
=======
>>>>>>> import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

export function DynamicListingPage({

=======
>>>>>>> 
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
xport function DynamicListingPage({
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function DynamicListingPage({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  detailBasePath = '/marketplace/listing',
}: DynamicListingPageProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
<<<<<<< HEAD

=======
>>>>>>>       prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  const clearCategories = () => setSelectedCategories([])
  const [view, setView] = useState<ListingView>('grid')
  const isGrid = view === 'grid'
<<<<<<< HEAD
>>>>>>>   // Swap icons to match action
ursor/fix-website-loading-errors-and-merge-6662
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Swap icons to match action
>>>>>>>   const ToggleViewIcon = isGrid ? (
    <List className='h-4 w-4' />
  ) : (
<<<<<<< HEAD

=======
    if (min == null |max == null |isNaN(min) |isNaN(max)) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setCurrentPriceFilter([min, max])
  }
  let filteredListings: ProductListing[] = []
  try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    filteredListings = allListings.filter(listing => {      const matchesSearch = null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

        !searchQuery ||
=======
>>>>>>>         !searchQuery ||
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        !searchQuery ||
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),


<<<<<<< HEAD
      const matchesSpecs =
        !specQuery |
        (listing.specifications &&

      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&

      const matchesRating =
        selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)

      const matchesRating =

        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

=======
>>>>>>>       const matchesSpecs =
        !specQuery |
        (listing.specifications &&
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1])
      const matchesRating =
        selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

>>>>>>>       return (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return (
>>>>>>>         matchesSearch &&
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true)
    const listing = allListings.find(item => item.id === listingId)
    setTimeout(() => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;
      );
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          );
      }
    });
  } catch (error) {;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
<<<<<<< HEAD

=======
>>>>>>>         // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }
        }
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }
<<<<<<< HEAD
            image: listing.images?.[0],
          },
        }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        router.push('/request-quote')
      }
    }, 500)
  }
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]}},
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        router.push("/request-quote")
      }
    }, 500)
  },

<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-1'>
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' /> Filters
              </h3>
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
<<<<<<< HEAD
>>>>>>>                   Categories
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {

            id: listing.id,
            title: listing.title,
            category: listing.category,

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  Categories
>>>>>>>                 </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  Categories
                </label>
                <div className="space-y-2">
                  {categoryFilters.map(filter => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
=======
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
<<<<<<< HEAD
=======
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
>>>>>>>                       <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
>>>>>>>                         {filter.label}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                        {filter.label}
>>>>>>>                       </label>
                    </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                  ))}

                </div>;
              </div>;

              {brandOptions && brandOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Brand;
                  </label>;

                  <Select
<<<<<<< HEAD

                      ))}
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                       ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </SelectContent>
                  </Select>
                </div>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

                  value={specQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)
                  }

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Specifications
                </label>
                <Input
                  type='text'
                  placeholder='Search specifications...'
<<<<<<< HEAD
                  type="text"
                  placeholder="Search specifications..."
                  type='text'
                  placeholder='Search specifications...'
>>>>>>>                   value={specQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)
                  }
                  className='bg-zion-blue border border-zion-blue-light text-white'                />
>>>>>>>               </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}



              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Specifications;
                </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Input



                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }


                  className="bg-zion-blue border border-zion-blue-light text-white"
                />


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </div>
>>>>>>>               {availabilityOptions.length > 0 && (
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    Availability
                  </label>
                  <Select
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    value = {selectedAvailability,}
                    onValueChange = {(value: string,) =>
                      setSelectedAvailability(value)
                    ,}
<<<<<<< HEAD
>>>>>>>                   >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  >
>>>>>>>                     <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
<<<<<<< HEAD
<<<<<<< HEAD

                      ))}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {availabilityOptions.map(a => (
                        <SelectItem
                          key={a |'unknown-availability'}
                          value={a |''}
                          className='text-white'
                        >                          {a |'N/A'}
                        </SelectItem>
<<<<<<< HEAD
>>>>>>>                       ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </SelectContent>
                  </Select>
                </div>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

                  Price Range
=======
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}



              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">


>>>>>>>                   Price Range
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </label>
                <div className='mt-6 px-2'>
              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Price Range;
                </label>;
                <div className='mt-6 px-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Slider
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD

=======
                    aria-label='Price range'
>>>>>>>                     defaultValue={[0, priceRange.max]}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                     min={0}
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className='mb-4'                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
>>>>>>>                     <span>${currentPriceFilter[0].toLocaleString()}</span>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
>>>>>>>                     <span>${currentPriceFilter[1].toLocaleString()}</span>
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                      onClick={() => {;
                        logInfo('Rating selected:', { data: rating });
                        setSelectedRating(rating);                      }}

                      aria-pressed = {selectedRating === rating,}
>>>>>>>                       className={`{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      className={`{
>>>>>>>                         selectedRating === rating
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
<<<<<<< HEAD
<<<<<<< HEAD

                          ))}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <div className='flex items-center'>
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />
<<<<<<< HEAD
>>>>>>>                           ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          <span className="ml-1">& Up</span>
                        </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                          ))}
                          <span className='ml-1'>& Up</span>;
                        </div>;
>>>>>>>                       )}
                    </Button>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  logInfo('Clearing filters')
                  setSearchQuery('')
                  clearCategories()
                  setCurrentPriceFilter([0, priceRange.max])
                  setSelectedRating(null)
                  setSelectedBrand('all')
                  setSpecQuery('')
                  setSelectedAvailability('all')
<<<<<<< HEAD
>>>>>>>                 }}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                }}
>>>>>>>               >
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Clear All
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                   <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Sort" />
ursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
>>>>>>>                     </SelectTrigger>
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </SelectContent>
                  </Select>
                  <Button
<<<<<<< HEAD
<<<<<<< HEAD

                    {ToggleViewIcon}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    variant='outline'
                    size='icon'
                    onClick={() => setView(isGrid ? 'list' : 'grid')}
                    aria-label={isGrid ? 'List view' : 'Grid view'}
                    title={isGrid ? 'List view' : 'Grid view'}
                    className='border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple'                  >
<<<<<<< HEAD
>>>>>>>                     {ToggleViewIcon}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span className="sr-only">
                      {isGrid ? "List view" : "Grid view"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <div className='mb-6'>
              <p className='text-zion-slate-light'>
>>>>>>>                 Showing {filteredListings.length} results
ursor/fix-website-loading-errors-and-merge-6662
                    {ToggleViewIcon}
                    <span className='sr-only'>;
                      {isGrid ? 'List view' : 'Grid view'}



            <div className="mb-6">
              <p className="text-zion-slate-light">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                Showing {filteredListings.length} results
>>>>>>>                 {selectedCategories.length > 0 &&
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
              <div
                className={
<<<<<<< HEAD
<<<<<<< HEAD

                }
=======
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
>>>>>>>                 }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>>                       </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      </div>
>>>>>>>                     </div>
                  </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                ))}
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div
                className={
<<<<<<< HEAD

                ))}
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>>                 ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
                  variant="outline"
=======
ursor/fix-website-loading-errors-and-merge-6662
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



>>>>>>>                   variant="outline"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  Clear All
                </Button>
              </div>
<<<<<<< HEAD

=======
>>>>>>>                 >
                  Clear All
                </Button>
              </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                >
                  Clear All
                </Button>
              </div>

                  onClick={() => {;
                    setSearchQuery('');
                    clearCategories();
                    setCurrentPriceFilter([0, priceRange && priceRange.max]);
                    setSelectedRating(null);
                    setSelectedBrand('all');
                    setSpecQuery('');
                    setSelectedAvailability('all');                  }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10';
>>>>>>>                 >;
=======
                >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Clear All;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  detailBasePath;
}/>) ) ";
}</div> No listings found </h3> <p className="text - zion - slate - light mb - 6" > Try adjusting your filters or search query </p> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);
> Clear All </Button> </div>);
}</div> </div> </div> </div>);
}'"  );
>>>>>>> }

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
