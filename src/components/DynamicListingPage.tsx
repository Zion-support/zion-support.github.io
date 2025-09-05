import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem} from &quot;@/components/ui/select&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import Skeleton from &quot;react-loading-skeleton&quot;;
import &quot;react-loading-skeleton/dist/skeleton.css&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { ProductListing, ListingView } from &quot;@/types/listings&quot;;
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;
import { captureException } from &quot;@/utils/sentry&quot;;

interface PriceRange {
  min: number;
  max: number;
}

interface DynamicListingPageProps {
  title: string;
  description: string;
  categorySlug: string;
  listings: ProductListing[];
  categoryFilters: { label: string; value: string }[];
  initialPrice?: PriceRange;
  /**
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.
   */
  detailBasePath?: string;
}

export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
  detailBasePath = &quot;/marketplace/listing&quot;}: DynamicListingPageProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>(&quot;grid&quot;);
  const isGrid = view === &quot;grid";
  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
    <LayoutGrid className="h-4 w-4&quot; />
  );
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 10000});

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState(&quot;all&quot;);
  const [specQuery, setSpecQuery] = useState("&quot;);
  const [selectedAvailability, setSelectedAvailability] = useState(&quot;all&quot;);
  const [sortOption, setSortOption] = useState(&quot;newest&quot;);

  const brandOptions = Array.from(
    new Set(allListings.map((l) => l.brand).filter(Boolean)),
  );
  const availabilityOptions = Array.from(
    new Set(allListings.map((l) => l.availability).filter(Boolean)),
  );

  useEffect(() => {
    const listingsWithPrice = allListings.filter((l) => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const max = Math.max(...listingsWithPrice.map((l) => l.price || 0));
      setPriceRange({ min: 0, max });
      setCurrentPriceFilter([0, max]);
    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]);

  const handleSliderChange = (values: number[]) => {
    const [min, max] = values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, max]);
  };

  let filteredListings: ProductListing[] = [];
  try {
    filteredListings = allListings.filter((listing) => {
      const matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ));

      const matchesBrand =
        selectedBrand === &quot;all&quot; ||
        (listing.brand && listing.brand === selectedBrand);

      const matchesSpecs =
        !specQuery ||
        (listing.specifications &&
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()),
          )) ||
        (listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()),
          ));

      const matchesAvailability =
        selectedAvailability === &quot;all&quot; ||
        (listing.availability && listing.availability === selectedAvailability);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category);

      const matchesPrice =
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1]);

      const matchesRating =
        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesBrand &&
        matchesSpecs &&
        matchesAvailability
      );
    });
    filteredListings.sort((a, b) => {
      switch (sortOption) {
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
          );
      }
    });
  } catch (error) {
    captureException(error);
    logErrorToProduction('Listing filter error:', { data: error });
  }

  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true);

    const listing = allListings.find((item) => item.id === listingId);

    setTimeout(() => {
      setIsLoading(false);
      if (listing) {
        toast({
          title: &quot;Quote Requested&quot;,
          description: `Your quote request for ${listing.title} has been sent.`});

        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]}};
        
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData));
        }

        router.push(&quot;/request-quote&quot;);
      }
    }, 500);
  };

  return (
    <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
      <div className=&quot;container mx-auto&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>{title}</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
            {description}
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
                      >
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {brandOptions.length > 0 && (
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                    Brand
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={(value: string) => setSelectedBrand(value)}
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
                          {b || 'N/A'}
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
                    Availability
                  </label>
                  <Select
                    value={selectedAvailability}
                    onValueChange={(value: string) =>
                      setSelectedAvailability(value)
                    }
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
                          {a || 'N/A'}
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
                  </div>
                </div>
              </div>

              <div className=&quot;mb-6&quot;>
                <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Minimum Rating
                </label>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? &quot;any&quot; : rating}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating });
                        setSelectedRating(rating);
                      }}
                      aria-pressed={selectedRating === rating}
                      className={`{
                        selectedRating === rating
                          ? &quot;bg-zion-purple/30 border-zion-purple text-zion-purple&quot;
                          : &quot;border-zion-blue-light text-zion-slate-light&quot;
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        &quot;Any&quot;
                      ) : (
                        <div className=&quot;flex items-center&quot;>
                          {[...Array(rating)].map((_, i) => (
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
                variant=&quot;outline&quot;
                className=&quot;w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                onClick={() => {
                  logInfo(&quot;Clearing filters&quot;);
                  setSearchQuery("&quot;);
                  clearCategories();
                  setCurrentPriceFilter([0, priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand(&quot;all&quot;);
                  setSpecQuery("&quot;);
                  setSelectedAvailability(&quot;all&quot;);
                }}
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
                    type=&quot;text&quot;
                    placeholder=&quot;Search listings...&quot;
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', { data: e.target.value });
                      setSearchQuery(e.target.value);
                    }}
                    className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white&quot;
                  />
                </div>

                <div className=&quot;flex items-center gap-2 ml-auto&quot;>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className=&quot;w-[150px] bg-zion-blue border border-zion-blue-light text-white&quot;>
                      <SelectValue placeholder=&quot;Sort&quot; />
                    </SelectTrigger>
                    <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                      <SelectItem value=&quot;newest&quot; className=&quot;text-white&quot;>Newest</SelectItem>
                      <SelectItem value=&quot;price-asc&quot; className=&quot;text-white&quot;>Price: Low to High</SelectItem>
                      <SelectItem value=&quot;price-desc&quot; className=&quot;text-white&quot;>Price: High to Low</SelectItem>
                      <SelectItem value=&quot;rating&quot; className=&quot;text-white&quot;>Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
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
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className=&quot;mb-6&quot;>
              <p className=&quot;text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for &quot;${searchQuery}&quot;`}
              </p>
            </div>

            {isLoading ? (
              <div
                className={
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot;
                }
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
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
                        <Skeleton height={32} width=&quot;25%&quot; />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div
                className={
                  view === &quot;grid&quot;
                    ? &quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;
                    : &quot;flex flex-col gap-6&quot;
                }
              >
                {filteredListings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />
                ))}
              </div>
            ) : (
              <div className=&quot;text-center py-20&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>
                  No listings found
                </h3>
                <p className=&quot;text-zion-slate-light mb-6&quot;>
                  Try adjusting your filters or search query
                </p>
                <Button
                  variant=&quot;outline&quot;
                  onClick={() => {
                    setSearchQuery("&quot;);
                    clearCategories();
                    setCurrentPriceFilter([0, priceRange.max]);
                    setSelectedRating(null);
                    setSelectedBrand(&quot;all&quot;);
                    setSpecQuery("&quot;);
                    setSelectedAvailability(&quot;all&quot;);
                  }}
                  className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
