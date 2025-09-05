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
  /**
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.
   */
  detailBasePath?: string;
}

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
  // Swap icons to match action
  const _ToggleViewIcon = isGrid ? (
    <List className="h-4 w-4" />
  ) : (
    <LayoutGrid className="h-4 w-4" />
  );
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({_min: 0, _max: 10000});

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [specQuery, setSpecQuery] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  const _brandOptions = Array.from(_new Set(allListings.map((l) => l.brand).filter(Boolean)),
  );
  const _availabilityOptions = Array.from(_new Set(allListings.map((l) => l.availability).filter(Boolean)),
  );

  useEffect__(() => {_const _listingsWithPrice = allListings.filter(_(l) => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const _max = Math.max(_...listingsWithPrice.map((l) => l.price || 0));
      setPriceRange({ min: 0, _max});
      setCurrentPriceFilter([0, max]);
    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]);

  const _handleSliderChange = (_values: number[]) => {_const [min, _max] = values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, _max]);};

  let filteredListings: ProductListing[] = [];
  try {_filteredListings = allListings.filter(_(listing) => {
      const _matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (_listing.tags &&
          listing.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()), _));

      const _matchesBrand =
        selectedBrand === "all" ||
        (listing.brand && listing.brand === selectedBrand);

      const _matchesSpecs =
        !specQuery ||
        (_listing.specifications &&
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()), _)) ||
        (_listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()), _));

      const _matchesAvailability =
        selectedAvailability === "all" ||
        (listing.availability && listing.availability === selectedAvailability);

      const _matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category);

      const _matchesPrice =
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1]);

      const _matchesRating =
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
      );});
    filteredListings.sort(_(a, _b) => {_switch (sortOption) {
        case "price-asc":
          return (a.price || 0) - (b.price || 0);
        case "price-desc":
          return (b.price || 0) - (a.price || 0);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "newest":
        default:
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
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

        router.push("/request-quote");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{_title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {_description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Categories
                </label>
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
                      >
                        {_filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {_brandOptions.length > 0 && (_<div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
                    Brand
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={_(value: string) => setSelectedBrand(value)}
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All Brands
                      </SelectItem>
                      {_brandOptions.map(_(b) => (
                        <SelectItem key={b || 'unknown-brand'} value={_b || ''} className="text-white">
                          {_b || 'N/A'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Specifications
                </label>
                <Input
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
                    Availability
                  </label>
                  <Select
                    value={selectedAvailability}
                    onValueChange={_(value: string) =>
                      setSelectedAvailability(value)}
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
                      {_availabilityOptions.map(_(a) => (
                        <SelectItem key={a || 'unknown-availability'} value={_a || ''} className="text-white">
                          {_a || 'N/A'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
                <div className="mt-6 px-2">
                  <Slider
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
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {_[null, _3, _4, _5].map(_(rating) => (_<Button
                      key={rating === null ? "any" : rating}
                      variant="outline"
                      size="sm"
                      onClick={_() => {
                        logInfo('Rating selected:', _{ data: rating});
                        setSelectedRating(rating);
                      }}
                      aria-pressed={_selectedRating === rating}
                      className={_`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"} focus-visible:ring-zion-purple`}
                    >
                      {_rating === null ? (
                        "Any"
                      ) : (
                        <div className="flex items-center">
                          {[...Array(rating)].map(_(_, _i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan"
                            />
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
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                onClick={_() => {
                  logInfo("Clearing filters");
                  setSearchQuery("");
                  clearCategories();
                  setCurrentPriceFilter([0, _priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand("all");
                  setSpecQuery("");
                  setSelectedAvailability("all");}}
              >
                Clear All
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search listings..."
                    value={_searchQuery}
                    onChange={_(_e: React.ChangeEvent<HTMLInputElement>) => {
                      logInfo('Search query:', _{ data: e.target.value});
                      setSearchQuery(e.target.value);
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <Select value={_sortOption} onValueChange={_setSortOption}>
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
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {_filteredListings.length} results
                {_selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', _')}`}
                {_searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {_isLoading ? (_<div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"}
              >
                {_[1, _2, _3, _4].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden border border-zion-blue-light"
                  >
                    <Skeleton height={_192} width="100%" />
                    <div className="p-4">
                      <Skeleton height={_24} width="33%" className="mb-2" />
                      <Skeleton height={_32} width="83%" className="mb-4" />
                      <Skeleton height={_16} width="100%" className="mb-2" />
                      <Skeleton height={_16} width="80%" className="mb-4" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton height={_24} width="25%" />
                        <Skeleton height={_32} width="25%" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (_<div
                className={_view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"}
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
            ) : (_<div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">
                  No listings found
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button
                  variant="outline"
                  onClick={_() => {
                    setSearchQuery("");
                    clearCategories();
                    setCurrentPriceFilter([0, _priceRange.max]);
                    setSelectedRating(null);
                    setSelectedBrand("all");
                    setSpecQuery("");
                    setSelectedAvailability("all");}}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
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
