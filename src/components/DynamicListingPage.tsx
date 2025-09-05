<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
<<<<<<< HEAD
  SelectItem} from "@/components/ui/select",
import { Checkbox } from "@/components/ui/checkbox",
import Skeleton from "react-loading-skeleton",
import "react-loading-skeleton/dist/skeleton.css",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { captureException } from "@/utils/sentry",
=======
  SelectItem} from &quot;@/components/ui/select&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import Skeleton from &quot;react-loading-skeleton&quot;;
import &quot;react-loading-skeleton/dist/skeleton.css&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { ProductListing, ListingView } from &quot;@/types/listings&quot;;
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;
import { captureException } from &quot;@/utils/sentry&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PriceRange {
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
=======
import {_Select, _SelectValue, _SelectTrigger, _SelectContent, _SelectItem} from "@/components/ui/select";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface PriceRange {_min: number;
  max: number;}

interface DynamicListingPageProps {_title: string;
  description: string;
  categorySlug: string;
  listings: ProductListing[];
  categoryFilters: { label: string; value: string}[];
  initialPrice?: PriceRange;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  /**
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.
   */
  detailBasePath?: string
}

<<<<<<< HEAD
export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
<<<<<<< HEAD
  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),
=======
  detailBasePath = &quot;/marketplace/listing&quot;}: DynamicListingPageProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
<<<<<<< HEAD
    )
  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",
=======
    );
  };
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>(&quot;grid&quot;);
  const isGrid = view === &quot;grid";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export function DynamicListingPage(_{_title, _description, _categorySlug, _listings: allListings, _categoryFilters, _initialPrice = { min: 0, _max: 10000}, _detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {_const _router = useRouter();
  const [searchQuery, _setSearchQuery] = useState("");
  const [selectedCategories, _setSelectedCategories] = useState<string[]>([]);
  const _toggleCategory = (_category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, _category]
    );};
  const _clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>("grid");
  const _isGrid = view === "grid";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Swap icons to match action
  const _ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
<<<<<<< HEAD
    <LayoutGrid className="h-4 w-4" />
  ),
  const [isLoading, setIsLoading] = useState(false),
=======
    <LayoutGrid className="h-4 w-4&quot; />
  );
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 10000}),
=======
  const [priceRange, setPriceRange] = useState<PriceRange>({_min: 0, _max: 10000});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
  const [selectedBrand, setSelectedBrand] = useState("all"),
  const [specQuery, setSpecQuery] = useState(""),
  const [selectedAvailability, setSelectedAvailability] = useState("all"),
  const [sortOption, setSortOption] = useState("newest"),
=======
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState(&quot;all&quot;);
  const [specQuery, setSpecQuery] = useState("&quot;);
  const [selectedAvailability, setSelectedAvailability] = useState(&quot;all&quot;);
  const [sortOption, setSortOption] = useState(&quot;newest&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
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
=======
  const _brandOptions = Array.from(_new Set(allListings.map((l) => l.brand).filter(Boolean)),
  );
  const _availabilityOptions = Array.from(_new Set(allListings.map((l) => l.availability).filter(Boolean)),
  );

  useEffect__(() => {_const _listingsWithPrice = allListings.filter(_(l) => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const _max = Math.max(_...listingsWithPrice.map((l) => l.price || 0));
      setPriceRange({ min: 0, _max});
      setCurrentPriceFilter([0, max]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]),

<<<<<<< HEAD
  const handleSliderChange = (values: number[]) => {
    const [min, max] = values.map(Number),
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,
    setCurrentPriceFilter([min, max])
  },

  let filteredListings: ProductListing[] = [],
  try {
    filteredListings = allListings.filter((listing) => {
      const matchesSearch =
=======
  const _handleSliderChange = (_values: number[]) => {_const [min, _max] = values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, _max]);};

  let filteredListings: ProductListing[] = [];
  try {_filteredListings = allListings.filter(_(listing) => {
      const _matchesSearch =
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (_listing.tags &&
          listing.tags.some((tag: string) =>
<<<<<<< HEAD
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),

      const matchesBrand =
<<<<<<< HEAD
=======
            tag.toLowerCase().includes(searchQuery.toLowerCase()), _));

      const _matchesBrand =
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        selectedBrand === "all" ||
        (listing.brand && listing.brand === selectedBrand),
=======
        selectedBrand === &quot;all&quot; ||
        (listing.brand && listing.brand === selectedBrand);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      const _matchesSpecs =
        !specQuery ||
        (_listing.specifications &&
          listing.specifications.some((s) =>
<<<<<<< HEAD
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||
        (listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()))),

      const matchesAvailability =
<<<<<<< HEAD
=======
            s.toLowerCase().includes(specQuery.toLowerCase()), _)) ||
        (_listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()), _));

      const _matchesAvailability =
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        selectedAvailability === "all" ||
        (listing.availability && listing.availability === selectedAvailability),
=======
        selectedAvailability === &quot;all&quot; ||
        (listing.availability && listing.availability === selectedAvailability);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      const _matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category),

      const _matchesPrice =
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1]),

      const _matchesRating =
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
<<<<<<< HEAD
      )
    }),
    filteredListings.sort((a, b) => {
      switch (sortOption) {
<<<<<<< HEAD
        case "price-asc": return (a.price || 0) - (b.price || 0),
=======
      );});
    filteredListings.sort(_(a, _b) => {_switch (sortOption) {
        case "price-asc":
          return (a.price || 0) - (b.price || 0);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case "price-desc":
          return (b.price || 0) - (a.price || 0),
        case "rating":
          return (b.rating || 0) - (a.rating || 0),
        case "newest":
=======
        case &quot;price-asc&quot;:
          return (a.price || 0) - (b.price || 0);
        case &quot;price-desc&quot;:
          return (b.price || 0) - (a.price || 0);
        case &quot;rating&quot;:
          return (b.rating || 0) - (a.rating || 0);
        case &quot;newest&quot;:
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        default:
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
<<<<<<< HEAD
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
<<<<<<< HEAD
          title: "Quote Requested",
          description: `Your quote request for ${listing.title} has been sent.`}),
=======
          title: &quot;Quote Requested&quot;,
          description: `Your quote request for ${listing.title} has been sent.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

        // Store quote data in sessionStorage for the request-quote page
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
=======
          );}
    });
  } catch (error) {_captureException(error);
    logErrorToProduction('Listing filter error:', _{ data: error});
  }

  const _handleRequestQuote = (_listingId: string) => {_setIsLoading(true);

    const _listing = allListings.find(_(item) => item.id === listingId);

    setTimeout__(() => {
      setIsLoading(false);
      if (listing) {
        toast({
          title: "Quote Requested", _description: `Your quote request for ${listing.title} has been sent.`});

        // Store quote data in sessionStorage for the request-quote page
        const _quoteData = {_serviceType: categorySlug, _specificItem: {
            id: listing.id, _title: listing.title, _category: listing.category, _image: listing.images?.[0]}};
        
        if (typeof window !== 'undefined') {_sessionStorage.setItem('quoteRequestData', _JSON.stringify(quoteData));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
        router.push("/request-quote")
=======
        router.push(&quot;/request-quote&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    }, 500)
  },

  return (
<<<<<<< HEAD
    <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
      <div className=&quot;container mx-auto&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>{title}</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
            {description}
=======
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{_title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {_description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
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
<<<<<<< HEAD
                <div className=&quot;space-y-2&quot;>
                  {categoryFilters.map(filter => (
                    <div key={filter.value} className=&quot;flex items-center&quot;>
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
                      />
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
=======
                <div className="space-y-2">
                  {_categoryFilters.map(filter => (
                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={_`cat-${filter.value}`}
                        checked={_selectedCategories.includes(filter.value)}
                        onCheckedChange={_() => toggleCategory(filter.value)}
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />
                      <label
                        htmlFor={_`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        {_filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {brandOptions.length > 0 && (
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
=======
              {_brandOptions.length > 0 && (_<div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Brand
                  </label>
                  <Select
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
<<<<<<< HEAD
                      {brandOptions.map((b) => (
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className=&quot;text-white&quot;>
                          {b || 'N/A'}
=======
                      {_brandOptions.map(_(b) => (
                        <SelectItem key={b || 'unknown-brand'} value={_b || ''} className="text-white">
                          {_b || 'N/A'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Specifications
                </label>
                <Input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  placeholder=&quot;Search specifications...&quot;
                  value={specQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)
                  }
                  className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
                />
              </div>

              {availabilityOptions.length > 0 && (
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
=======
                  type="text"
                  placeholder="Search specifications..."
                  value={_specQuery}
                  onChange={_(_e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpecQuery(e.target.value)}
                  className="bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>

              {_availabilityOptions.length > 0 && (_<div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Availability
                  </label>
                  <Select
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
<<<<<<< HEAD
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className=&quot;text-white&quot;>
                          {a || 'N/A'}
=======
                      {_availabilityOptions.map(_(a) => (
                        <SelectItem key={a || 'unknown-availability'} value={_a || ''} className="text-white">
                          {_a || 'N/A'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Price Range
                </label>
                <div className=&quot;mt-6 px-2&quot;>
                  <Slider
<<<<<<< HEAD
                    aria-label=&quot;Price range&quot;
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className=&quot;mb-4&quot;
                  />
                  <div className=&quot;flex justify-between text-sm text-zion-slate-light&quot;>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
=======
                    aria-label="Price range"
                    defaultValue={_[0, _priceRange.max]}
                    min={_0}
                    max={_priceRange.max}
                    step={_priceRange.max / 100}
                    value={_currentPriceFilter}
                    onValueChange={_handleSliderChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${_currentPriceFilter[0].toLocaleString()}</span>
                    <span>${_currentPriceFilter[1].toLocaleString()}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Minimum Rating
                </label>
<<<<<<< HEAD
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? &quot;any&quot; : rating}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating }),
                        setSelectedRating(rating)
=======
                <div className="flex flex-wrap gap-2">
                  {_[null, _3, _4, _5].map(_(rating) => (_<Button
                      key={rating === null ? "any" : rating}
                      variant="outline"
                      size="sm"
                      onClick={_() => {
                        logInfo('Rating selected:', _{ data: rating});
                        setSelectedRating(rating);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      }}
                      aria-pressed={_selectedRating === rating}
                      className={_`{
                        selectedRating === rating
<<<<<<< HEAD
                          ? &quot;bg-zion-purple/30 border-zion-purple text-zion-purple&quot;
                          : &quot;border-zion-blue-light text-zion-slate-light&quot;
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        &quot;Any&quot;
                      ) : (
                        <div className=&quot;flex items-center&quot;>
                          {[...Array(rating)].map((_, i) => (
=======
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"} focus-visible:ring-zion-purple`}
                    >
                      {_rating === null ? (
                        "Any"
                      ) : (
                        <div className="flex items-center">
                          {[...Array(rating)].map(_(_, _i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            <Star
                              key={i}
                              className=&quot;h-3 w-3 fill-zion-cyan text-zion-cyan&quot;
                            />
                          ))}
                          <span className=&quot;ml-1&quot;>& Up</span>
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
<<<<<<< HEAD
                variant="outline"
<<<<<<< HEAD
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                  logInfo("Clearing filters"),
                  setSearchQuery(""),
                  clearCategories(),
                  setCurrentPriceFilter([0, priceRange.max]),
                  setSelectedRating(null),
                  setSelectedBrand("all"),
                  setSpecQuery(""),
                  setSelectedAvailability("all")
=======
                variant=&quot;outline&quot;
                className=&quot;w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                onClick={() => {
                  logInfo(&quot;Clearing filters&quot;);
                  setSearchQuery("&quot;);
=======
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                onClick={_() => {
                  logInfo("Clearing filters");
                  setSearchQuery("");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  clearCategories();
                  setCurrentPriceFilter([0, _priceRange.max]);
                  setSelectedRating(null);
<<<<<<< HEAD
                  setSelectedBrand(&quot;all&quot;);
                  setSpecQuery("&quot;);
                  setSelectedAvailability(&quot;all&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                }}
=======
                  setSelectedBrand("all");
                  setSpecQuery("");
                  setSelectedAvailability("all");}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Clear All
              </Button>
            </div>
          </div>

          <div className=&quot;lg:col-span-3&quot;>
            <div className=&quot;bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light&quot;>
              <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
                <div className=&quot;relative flex-grow&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Input
<<<<<<< HEAD
                    type=&quot;text&quot;
                    placeholder=&quot;Search listings...&quot;
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', { data: e.target.value }),
                      setSearchQuery(e.target.value)
=======
                    type="text"
                    placeholder="Search listings..."
                    value={_searchQuery}
                    onChange={_(_e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', _{ data: e.target.value});
                      setSearchQuery(e.target.value);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    }}
                    className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white&quot;
                  />
                </div>

<<<<<<< HEAD
                <div className=&quot;flex items-center gap-2 ml-auto&quot;>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className=&quot;w-[150px] bg-zion-blue border border-zion-blue-light text-white&quot;>
                      <SelectValue placeholder=&quot;Sort&quot; />
=======
                <div className="flex items-center gap-2 ml-auto">
                  <Select value={_sortOption} onValueChange={_setSortOption}>
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Sort" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </SelectTrigger>
                    <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                      <SelectItem value=&quot;newest&quot; className=&quot;text-white&quot;>Newest</SelectItem>
                      <SelectItem value=&quot;price-asc&quot; className=&quot;text-white&quot;>Price: Low to High</SelectItem>
                      <SelectItem value=&quot;price-desc&quot; className=&quot;text-white&quot;>Price: High to Low</SelectItem>
                      <SelectItem value=&quot;rating&quot; className=&quot;text-white&quot;>Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
<<<<<<< HEAD
                    variant=&quot;outline&quot;
                    size=&quot;icon&quot;
                    onClick={() => setView(isGrid ? &quot;list&quot; : &quot;grid&quot;)}
                    aria-label={isGrid ? &quot;List view&quot; : &quot;Grid view&quot;}
                    title={isGrid ? &quot;List view&quot; : &quot;Grid view&quot;}
                    className=&quot;border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple&quot;
                  >
                    {ToggleViewIcon}
                    <span className=&quot;sr-only&quot;>
                      {isGrid ? &quot;List view&quot; : &quot;Grid view&quot;}
=======
                    variant="outline"
                    size="icon"
                    onClick={_() => setView(isGrid ? "list" : "grid")}
                    aria-label={_isGrid ? "List view" : "Grid view"}
                    title={_isGrid ? "List view" : "Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple"
                  >
                    {_ToggleViewIcon}
                    <span className="sr-only">
                      {_isGrid ? "List view" : "Grid view"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </Button>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className=&quot;mb-6&quot;>
              <p className=&quot;text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for &quot;${searchQuery}&quot;`}
=======
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {_filteredListings.length} results
                {_selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', _')}`}
                {_searchQuery && ` for "${searchQuery}"`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </div>

            {_isLoading ? (_<div
                className={
<<<<<<< HEAD
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot;
                }
=======
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_[1, _2, _3, _4].map((i) => (
                  <div
                    key={i}
                    className=&quot;rounded-lg overflow-hidden border border-zion-blue-light&quot;
                  >
<<<<<<< HEAD
                    <Skeleton height={192} width=&quot;100%&quot; />
                    <div className=&quot;p-4&quot;>
                      <Skeleton height={24} width=&quot;33%&quot; className=&quot;mb-2&quot; />
                      <Skeleton height={32} width=&quot;83%&quot; className=&quot;mb-4&quot; />
                      <Skeleton height={16} width=&quot;100%&quot; className=&quot;mb-2&quot; />
                      <Skeleton height={16} width=&quot;80%&quot; className=&quot;mb-4&quot; />
                      <div className=&quot;flex justify-between items-center pt-4&quot;>
                        <Skeleton height={24} width=&quot;25%&quot; />
                        <Skeleton height={32} width=&quot;25%&quot; />
=======
                    <Skeleton height={_192} width="100%" />
                    <div className="p-4">
                      <Skeleton height={_24} width="33%" className="mb-2" />
                      <Skeleton height={_32} width="83%" className="mb-4" />
                      <Skeleton height={_16} width="100%" className="mb-2" />
                      <Skeleton height={_16} width="80%" className="mb-4" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton height={_24} width="25%" />
                        <Skeleton height={_32} width="25%" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                ))}
              </div>
<<<<<<< HEAD
            ) : filteredListings.length > 0 ? (
              <div
                className={
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot;
                }
=======
            ) : filteredListings.length > 0 ? (_<div
                className={_view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_filteredListings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={_listing}
                    view={_view}
                    onRequestQuote={_handleRequestQuote}
                    detailBasePath={_detailBasePath}
                  />
                ))}
              </div>
<<<<<<< HEAD
            ) : (
              <div className=&quot;text-center py-20&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>
=======
            ) : (_<div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  No listings found
                </h3>
                <p className=&quot;text-zion-slate-light mb-6&quot;>
                  Try adjusting your filters or search query
                </p>
                <Button
<<<<<<< HEAD
                  variant=&quot;outline&quot;
                  onClick={() => {
<<<<<<< HEAD
                    setSearchQuery(""),
                    clearCategories(),
                    setCurrentPriceFilter([0, priceRange.max]),
                    setSelectedRating(null),
                    setSelectedBrand("all"),
                    setSpecQuery(""),
                    setSelectedAvailability("all")
=======
                    setSearchQuery("&quot;);
=======
                  variant="outline"
                  onClick={_() => {
                    setSearchQuery("");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    clearCategories();
                    setCurrentPriceFilter([0, _priceRange.max]);
                    setSelectedRating(null);
<<<<<<< HEAD
                    setSelectedBrand(&quot;all&quot;);
                    setSpecQuery("&quot;);
                    setSelectedAvailability(&quot;all&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  }}
                  className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
=======
                    setSelectedBrand("all");
                    setSpecQuery("");
                    setSelectedAvailability("all");}}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
