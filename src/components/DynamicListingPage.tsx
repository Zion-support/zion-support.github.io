<<<<<<< HEAD
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
;
interface PriceRange {;
  min:number,;
  max:number;
}
;
interface DynamicListingPageProps {;
  title:string,;
  description:string,;
  categorySlug:string,;
  listings:ProductListing[],;
  categoryFilters:{ label:string, value:string }[],;
  initialPrice?:PriceRange,;
  /**;
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.;
   */;
  detailBasePath?:string,;
}
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings:allListings,;
  categoryFilters,;
  initialPrice = { min:0, max:10000 },;
  detailBasePath = "/marketplace/listing"} DynamicListingPageProps) {;
  const router = useRouter(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),;
  const toggleCategory = (category:string) => {;
    setSelectedCategories(prev =>;
      prev.includes(category);
        ? prev.filter(c => c !== category);
        :[...prev, category];
    ),;
  },;
  const clearCategories = () => setSelectedCategories([]),;
  const [view, setView] = useState<ListingView>("grid"),;
  const isGrid = view === "grid",;
  // Swap icons to match action;
  const ToggleViewIcon = isGrid ? (;
    <List className="h-4 w-4" />;
  ) :(;
    <LayoutGrid className="h-4 w-4" />;
  ),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>({;
    min:0,;
    max:10000}),;
;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  const [selectedBrand, setSelectedBrand] = useState("all"),;
  const [specQuery, setSpecQuery] = useState(""),;
  const [selectedAvailability, setSelectedAvailability] = useState("all"),;
  const [sortOption, setSortOption] = useState("newest"),;
;
  const brandOptions = Array.from(;
    new Set(allListings.map((l) => l.brand).filter(Boolean))),;
  const availabilityOptions = Array.from(;
    new Set(allListings.map((l) => l.availability).filter(Boolean))),;
;
  useEffect(() => {;
    const listingsWithPrice = allListings.filter((l) => l.price !== null),;
    if (listingsWithPrice.length > 0) {;
      const max = Math.max(...listingsWithPrice.map((l) => l.price || 0)),;
      setPriceRange({ min:0, max }),;
      setCurrentPriceFilter([0, max]),;
    }
  }, [allListings]),;
;
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice.max]),;
;
  const handleSliderChange = (values:number[]) => {;
    const [min, max] = values.map(Number),;
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,;
    setCurrentPriceFilter([min, max]),;
  },;
;
  let filteredListings:ProductListing[] = [],;
  try {;
    filteredListings = allListings.filter((listing) => {;
      const matchesSearch =;
        !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags &&;
          listing.tags.some((tag:string) =>;
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),;
;
      const matchesBrand =;
        selectedBrand === "all" ||;
        (listing.brand && listing.brand === selectedBrand),;
;
      const matchesSpecs =;
        !specQuery ||;
        (listing.specifications &&;
          listing.specifications.some((s) =>;
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||;
        (listing.tags &&;
          listing.tags.some((tag) =>;
            tag.toLowerCase().includes(specQuery.toLowerCase()))),;
;
      const matchesAvailability =;
        selectedAvailability === "all" ||;
        (listing.availability && listing.availability === selectedAvailability),;
;
      const matchesCategory =;
        selectedCategories.length === 0 ||;
        selectedCategories.includes(listing.category),;
;
      const matchesPrice =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;
          listing.price <= currentPriceFilter[1]),;
;
      const matchesRating =;
        selectedRating === null ||;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
;
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
        case "price-asc":return (a.price || 0) - (b.price || 0),;
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
    }),;
  } catch (error) {;
    captureException(error),;
    logErrorToProduction('Listing filter error:', { data:error }),;
  }
;
  const handleRequestQuote = (listingId:string) => {;
    setIsLoading(true),;
;
    const listing = allListings.find((item) => item.id === listingId),;
;
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title:"Quote Requested",;
          description:`Your quote request for ${listing.title} has been sent.`}),;
;
        // Store quote data in sessionStorage for the request-quote page;
        const quoteData = {;
          serviceType:categorySlug,;
          specificItem:{;
            id:listing.id,;
            title:listing.title,;
            category:listing.category,;
            image:listing.images?.[0]}},;
        ;
        if (typeof window !== 'undefined') {;
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData)),;
        }
;
        router.push("/request-quote"),;
      }
    }, 500),;
  },;
;
  return (;
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            {description}
          </p>;
        </div>;
;
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          <div className="lg:col-span-1">;
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;
;
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
=======
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem} from "@/components/ui/select",
import { Checkbox } from "@/components/ui/checkbox",
import Skeleton from "react-loading-skeleton",
import "react-loading-skeleton/dist/skeleton.css",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { captureException } from "@/utils/sentry",interface PriceRange {
  min: number,
  max: number
}

interface DynamicListingPageProps {
  title: string,
  description: string,
  categorySlug: string,
  listings: ProductListing[],
  categoryFilters: { label: string, value: string }[],
  initialPrice?: PriceRange,
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface PriceRange {min: number,
  max: number}

interface DynamicListingPageProps {title: string,
  description: string,
  categorySlug: string,
  listings: ProductListing[];
  categoryFilters: { label: string, value: string}[];
  initialPrice?: PriceRange;
  /**
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.
   */
  detailBasePath?: string
}

export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",export function DynamicListingPage(_{title, description, categorySlug, listings: allListings, categoryFilters, initialPrice = { min: 0, max: 10000}, detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )};
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>("grid");
  const isGrid = view === "grid";
  // Swap icons to match action,
const ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
    <LayoutGrid className="h-4 w-4" />
  ),
  const [isLoading, setIsLoading] = useState(false),  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 10000}),
  const [priceRange, setPriceRange] = useState<PriceRange>({min: 0, max: 10000});

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
      setCurrentPriceFilter([0, max])    }
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
      const matchesSearch =        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),

      const matchesBrand =
        selectedBrand === "all" ||
        (listing.brand && listing.brand === selectedBrand),
        selectedBrand === &quot;all&quot; ||
        (listing.brand && listing.brand === selectedBrand);

      const matchesSpecs =
        !specQuery ||
        (listing.specifications &&
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||
        (listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()))),

      const matchesAvailability =
        selectedAvailability === "all" ||
        (listing.availability && listing.availability === selectedAvailability),
        selectedAvailability === &quot;all&quot; ||
        (listing.availability && listing.availability === selectedAvailability);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category),

      const matchesPrice =
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1]),

      const matchesRating =
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
    }),
    filteredListings.sort((a, b) => {
      switch (sortOption) {
        case "price-asc": return (a.price || 0) - (b.price || 0),        case "price-desc":
          return (b.price || 0) - (a.price || 0),
        case "rating":
          return (b.rating || 0) - (a.rating || 0),
        case "newest":
        case &quot;price-asc&quot;:
          return (a.price || 0) - (b.price || 0);
        case &quot;price-desc&quot;:
          return (b.price || 0) - (a.price || 0);
        case &quot;rating&quot;:
          return (b.rating || 0) - (a.rating || 0);
        case &quot;newest&quot;:
        default:
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          )
      }
    })
  } catch (error) {
    captureException(error),
    logErrorToProduction('Listing filter error:', { data: error })
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
        // Store quote data in sessionStorage for the request-quote page,
const quoteData = {
          serviceType: categorySlug,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]}},
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }
          )}
    })
  } catch (error) {captureException(error);
    logErrorToProduction('Listing filter error:', _{ data: error})
  }

  const handleRequestQuote = (listingId: string) => {setIsLoading(true);

    const listing = allListings.find(_(item) => item.id === listingId);

    setTimeout_(() => {
      setIsLoading(false);
      if (listing) {
        toast({
          title: "Quote Requested", description: `Your quote request for ${listing.title} has been sent.`});

        // Store quote data in sessionStorage for the request-quote page,
const quoteData = {serviceType: categorySlug, specificItem: {
            id: listing.id, title: listing.title, category: listing.category, image: listing.images?.[0]}};
        
        if (typeof window !== 'undefined') {sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))}

        router.push("/request-quote")      }
    }, 500)
  },

  return (
    <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
      <div className=&quot;container mx-auto&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>{title}</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
            {description}          </p>
        </div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-6&quot;>
          <div className=&quot;lg:col-span-1&quot;>
            <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6&quot;>
              <h3 className=&quot;text-lg font-medium text-white mb-4 flex items-center&quot;>
                <Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters
              </h3>

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Categories
                </label>
                <div className=&quot;space-y-2&quot;>
                  {categoryFilters.map(filter => (
                    <div key={filter.value} className=&quot;flex items-center&quot;>
                      <Checkbox,
id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
                      />
                      <label,
htmlFor={`cat-${filter.value}`}
                        className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;                      >
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                        {filter.label}
                      </label>;
                    </div>;
                  ))}
<<<<<<< HEAD
                </div>;
              </div>;
;
              {brandOptions.length > 0 && (;
                <div className="mb-6">;
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                    Brand;
                  </label>;
                  <Select;
                    value={selectedBrand}
                    onValueChange={(value:string) => setSelectedBrand(value)}
                  >;
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                      <SelectValue placeholder="Select Brand" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                      <SelectItem value="all" className="text-white">;
                        All Brands;
                      </SelectItem>;
                      {brandOptions.map((b) => (;
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className="text-white">;
                          {b || 'N/A'}
                        </SelectItem>;
=======
                </div>
              </div>

              {brandOptions.length > 0 && (
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>                    Brand
                  </label>
                  <Select,
value={selectedBrand}
                    onValueChange={_(value: string) => setSelectedBrand(value)}
                  >
                    <SelectTrigger className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                      <SelectValue placeholder=&quot;Select Brand&quot; />
                    </SelectTrigger>
                    <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                      <SelectItem value=&quot;all&quot; className=&quot;text-white&quot;>
                        All Brands
                      </SelectItem>
                      {brandOptions.map((b) => (
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className=&quot;text-white&quot;>
                          {b || 'N/A'}                        </SelectItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
<<<<<<< HEAD
;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Specifications;
                </label>;
                <Input;
                  type="text";
                  placeholder="Search specifications...";
=======

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Specifications
                </label>
                <Input,
type=&quot;text&quot;
                  placeholder=&quot;Search specifications...&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  value={specQuery}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e.target.value);
                  }
<<<<<<< HEAD
                  className="bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;
;
              {availabilityOptions.length > 0 && (;
                <div className="mb-6">;
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                    Availability;
                  </label>;
                  <Select;
                    value={selectedAvailability}
                    onValueChange={(value:string) =>;
                      setSelectedAvailability(value);
                    }
                  >;
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                      <SelectValue placeholder="Select Availability" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                      <SelectItem value="all" className="text-white">;
                        All;
                      </SelectItem>;
                      {availabilityOptions.map((a) => (;
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">;
                          {a || 'N/A'}
                        </SelectItem>;
=======
                  className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
                />
              </div>

              {availabilityOptions.length > 0 && (
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>                    Availability
                  </label>
                  <Select,
value={selectedAvailability}
                    onValueChange={_(value: string) =>
                      setSelectedAvailability(value)}
                  >
                    <SelectTrigger className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                      <SelectValue placeholder=&quot;Select Availability&quot; />
                    </SelectTrigger>
                    <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                      <SelectItem value=&quot;all&quot; className=&quot;text-white&quot;>
                        All
                      </SelectItem>
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className=&quot;text-white&quot;>
                          {a || 'N/A'}                        </SelectItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
<<<<<<< HEAD
;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Price Range;
                </label>;
                <div className="mt-6 px-2">;
                  <Slider;
                    aria-label="Price range";
=======

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Price Range
                </label>
                <div className=&quot;mt-6 px-2&quot;>
                  <Slider,
aria-label=&quot;Price range&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD
                    className="mb-4";
                  />;
                  <div className="flex justify-between text-sm text-zion-slate-light">;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;
;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex-wrap gap-2">;
                  {[null, 3, 4, 5].map((rating) => (;
                    <Button;
                      key={rating === null ? "any" :rating}
                      variant="outline";
                      size="sm";
                      onClick={() => {;
                        logInfo('Rating selected:', { data:rating }),;
                        setSelectedRating(rating),;
                      }}
                      aria-pressed={selectedRating === rating}
                      className={`{;
                        selectedRating === rating;
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple";
                          :"border-zion-blue-light text-zion-slate-light";
                      } focus-visible:ring-zion-purple`}
                    >;
                      {rating === null ? (;
                        "Any";
                      ) :(;
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;
                            <Star;
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan";
                            />;
                          ))}
                          <span className="ml-1">& Up</span>;
                        </div>;
=======
                    className=&quot;mb-4&quot;
                  />
                  <div className=&quot;flex justify-between text-sm text-zion-slate-light&quot;>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>                  </div>
                </div>
              </div>

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Minimum Rating
                </label>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {[null, 3, 4, 5].map((rating) => (
                    <Button,
key={rating === null ? &quot;any&quot; : rating}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating }),
                        setSelectedRating(rating)                      }}
                      aria-pressed={selectedRating === rating}
                      className={_`{
                        selectedRating === rating
                          ? &quot;bg-zion-purple/30 border-zion-purple text-zion-purple&quot;
                          : &quot;border-zion-blue-light text-zion-slate-light&quot
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        &quot;Any&quot;
                      ) : (
                        <div className=&quot;flex items-center&quot;>
                          {[...Array(rating)].map((_, i) => (                            <Star,
key={i}
                              className=&quot;h-3 w-3 fill-zion-cyan text-zion-cyan&quot;
                            />
                          ))}
                          <span className=&quot;ml-1&quot;>& Up</span>
                        </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      )}
                    </Button>;
                  ))}
<<<<<<< HEAD
                </div>;
              </div>;
;
              <Button;
                variant="outline";
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                onClick={() => {;
                  logInfo("Clearing filters"),;
                  setSearchQuery(""),;
                  clearCategories(),;
                  setCurrentPriceFilter([0, priceRange.max]),;
                  setSelectedRating(null),;
                  setSelectedBrand("all"),;
                  setSpecQuery(""),;
                  setSelectedAvailability("all"),;
                }}
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;
;
          <div className="lg:col-span-3">;
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">;
              <div className="flex flex-col md:flex-row gap-4">;
                <div className="relative flex-grow">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Input;
                    type="text";
                    placeholder="Search listings...";
                    value={searchQuery}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {;
                      logInfo('Search query:', { data:e.target.value }),;
                      setSearchQuery(e.target.value),;
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                  />;
                </div>;
;
                <div className="flex items-center gap-2 ml-auto">;
                  <Select value={sortOption} onValueChange={setSortOption}>;
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">;
                      <SelectValue placeholder="Sort" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                      <SelectItem value="newest" className="text-white">Newest</SelectItem>;
                      <SelectItem value="price-asc" className="text-white">Price:Low to High</SelectItem>;
                      <SelectItem value="price-desc" className="text-white">Price:High to Low</SelectItem>;
                      <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>;
                    </SelectContent>;
                  </Select>;
                  <Button;
                    variant="outline";
                    size="icon";
                    onClick={() => setView(isGrid ? "list" :"grid")}
                    aria-label={isGrid ? "List view" :"Grid view"}
                    title={isGrid ? "List view" :"Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple";
                  >;
                    {ToggleViewIcon}
                    <span className="sr-only">;
                      {isGrid ? "List view" :"Grid view"}
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;
;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
                {selectedCategories.length > 0 &&;
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
;
            {isLoading ? (;
              <div;
                className={;
                  view === "grid";
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6";
                    :"flex flex-col gap-6";
                }
              >;
                {[1, 2, 3, 4].map((i) => (;
                  <div;
                    key={i}
                    className="rounded-lg overflow-hidden border border-zion-blue-light";
                  >;
                    <Skeleton height={192} width="100%" />;
                    <div className="p-4">;
                      <Skeleton height={24} width="33%" className="mb-2" />;
                      <Skeleton height={32} width="83%" className="mb-4" />;
                      <Skeleton height={16} width="100%" className="mb-2" />;
                      <Skeleton height={16} width="80%" className="mb-4" />;
                      <div className="flex justify-between items-center pt-4">;
                        <Skeleton height={24} width="25%" />;
                        <Skeleton height={32} width="25%" />;
                      </div>;
                    </div>;
                  </div>;
                ))}
              </div>;
            ) :filteredListings.length > 0 ? (;
              <div;
                className={;
                  view === "grid";
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6";
                    :"flex flex-col gap-6";
                }
              >;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
                    key={listing.id}
=======
                </div>
              </div>

              <Button,
variant="outline"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                  logInfo("Clearing filters"),
                  setSearchQuery(""),
                  clearCategories(),
                  setCurrentPriceFilter([0, priceRange.max]),
                  setSelectedRating(null),
                  setSelectedBrand("all"),
                  setSpecQuery(""),
                  setSelectedAvailability("all")                  clearCategories();
                  setCurrentPriceFilter([0, priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand(&quot;all&quot;);
                  setSpecQuery("&quot;);
                  setSelectedAvailability(&quot;all&quot;)
                }}              >
                Clear All
              </Button>
            </div>
          </div>

          <div className=&quot;lg:col-span-3&quot;>
            <div className=&quot;bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light&quot;>
              <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
                <div className=&quot;relative flex-grow&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Input,
type=&quot;text&quot;
                    placeholder=&quot;Search listings...&quot;
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', { data: e.target.value }),
                      setSearchQuery(e.target.value)                    }}
                    className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white&quot;
                  />
                </div>

                <div className=&quot;flex items-center gap-2 ml-auto&quot;>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className=&quot;w-[150px] bg-zion-blue border border-zion-blue-light text-white&quot;>
                      <SelectValue placeholder=&quot;Sort&quot; />                    </SelectTrigger>
                    <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                      <SelectItem value=&quot;newest&quot; className=&quot;text-white&quot;>Newest</SelectItem>
                      <SelectItem value=&quot;price-asc&quot; className=&quot;text-white&quot;>Price: Low to High</SelectItem>
                      <SelectItem value=&quot;price-desc&quot; className=&quot;text-white&quot;>Price: High to Low</SelectItem>
                      <SelectItem value=&quot;rating&quot; className=&quot;text-white&quot;>Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button,
variant=&quot;outline&quot;
                    size=&quot;icon&quot;
                    onClick={() => setView(isGrid ? &quot;list&quot; : &quot;grid&quot;)}
                    aria-label={isGrid ? &quot;List view&quot; : &quot;Grid view&quot}
                    title={isGrid ? &quot;List view&quot; : &quot;Grid view&quot}
                    className=&quot;border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple&quot;
                  >
                    {ToggleViewIcon}
                    <span className=&quot;sr-only&quot;>
                      {isGrid ? &quot;List view&quot; : &quot;Grid view&quot}                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className=&quot;mb-6&quot;>
              <p className=&quot;text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for &quot;${searchQuery}&quot;`}              </p>
            </div>

            {isLoading ? (_<div,
className={
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot
                }              >
                {_[1, 2, 3, 4].map((i) => (
                  <div,
key={i}
                    className=&quot;rounded-lg overflow-hidden border border-zion-blue-light&quot;
                  >
                    <Skeleton height={192} width=&quot;100%&quot; />
                    <div className=&quot;p-4&quot;>
                      <Skeleton height={24} width=&quot;33%&quot; className=&quot;mb-2&quot; />
                      <Skeleton height={32} width=&quot;83%&quot; className=&quot;mb-4&quot; />
                      <Skeleton height={16} width=&quot;100%&quot; className=&quot;mb-2&quot; />
                      <Skeleton height={16} width=&quot;80%&quot; className=&quot;mb-4&quot; />
                      <div className=&quot;flex justify-between items-center pt-4&quot;>
                        <Skeleton height={24} width=&quot;25%&quot; />
                        <Skeleton height={32} width=&quot;25%&quot; />                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div,
className={
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot
                }              >
                {filteredListings.map((listing) => (
                  <ProductListingCard,
key={listing.id}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;
                ))}
<<<<<<< HEAD
              </div>;
            ) :(;
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
                    setSelectedBrand("all"),;
                    setSpecQuery(""),;
                    setSelectedAvailability("all"),;
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
  ),;
=======
              </div>
            ) : (
              <div className=&quot;text-center py-20&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>                  No listings found
                </h3>
                <p className=&quot;text-zion-slate-light mb-6&quot;>
                  Try adjusting your filters or search query
                </p>
                <Button,
variant=&quot;outline&quot;
                  onClick={() => {
                    setSearchQuery(""),
                    clearCategories(),
                    setCurrentPriceFilter([0, priceRange.max]),
                    setSelectedRating(null),
                    setSelectedBrand("all"),
                    setSpecQuery(""),
                    setSelectedAvailability("all")                    clearCategories();
                    setCurrentPriceFilter([0, priceRange.max]);
                    setSelectedRating(null);
                    setSelectedBrand(&quot;all&quot;);
                    setSpecQuery("&quot;);
                    setSelectedAvailability(&quot;all&quot;)
                  }}
                  className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
