  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  // Swap icons to match action
    <List className='h-4 w-4' />
  ) : (
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>

      const matchesSpecs =
        !specQuery |
        (listing.specifications &&
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
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
      }
    });
  } catch (error) {
    capture_exception (error);
    logErrorToProduction ('Listing filter error:', { data: error });
  }
      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Categories
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
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
            id: listing && listing.id,;
            title: listing && listing.title,;
            category: listing && listing.category,;
            image: listing && listing.images?.[0],;
          },;
        };

        if (typeof window !== 'undefined') {;
          sessionStorage && sessionStorage.setItem('quoteRequestData', JSON && JSON.stringify(quoteData));
        }

        router && router.push('/request-quote');
        router.push ('/request - quote');
      }
    }, 500);
  }
  return (
    <div className='min-h-screen bg-zion-blue py-12 px-4'>;
      <div className='container mx-auto'>;
        <div className='text-center mb-12'>;
          <GradientHeading>{title}</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>;
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
                        {filter.label}
                      </label>
                    </div>
                  ))}
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
                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }
              </div>
              {availabilityOptions.length > 0 && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">
                    Availability
                  </label>
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">
                          {a || 'N/A'}
                        </SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                    aria-label="Price range"
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant='outline'
                      size='sm'
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
                      className={`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
                        <div className='flex items-center'>
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan"
                            />
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
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;

                <div className="flex items-center gap-2 ml-auto">
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
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
                    variant="outline"
                    size="icon"
                    onClick={() => setView(isGrid ? "list" : "grid")}
                    aria-label={isGrid ? "List view" : "Grid view"}
                    title={isGrid ? "List view" : "Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple"
                  >
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;

            <div className='mb-6'>;
              <p className='text-zion-slate-light'>;
                Showing {filteredListings && filteredListings.length} results;
                {selectedCategories && selectedCategories.length > 0 &&;
                  ` in ${selectedCategories && selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;

            {isLoading ? (;
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                }>;
                {[1, 2, 3, 4].map(i => (;
                  <div
                    key={i}
                    className='rounded-lg overflow-hidden border border-zion-blue-light'>;
                    <Skeleton height={192} width='100%' />;
                    <div className='p-4'>;
                      <Skeleton height={24} width='33%' className='mb-2' />;
                      <Skeleton height={32} width='83%' className='mb-4' />;
                      <Skeleton height={16} width='100%' className='mb-2' />;
                      <Skeleton height={16} width='80%' className='mb-4' />;
                      <div className='flex justify-between items-center pt-4'>;
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
                }
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
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
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div
                className={
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
                >
                  Clear All
                </Button>
              </div>

;

  detailBasePath;
}/>) ) ";
}</div> No listings found </h3> <p className="text - zion - slate - light mb - 6" > Try adjusting your filters or search query </p> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);
> Clear All </Button> </div>);
}</div> </div> </div> </div>);
}'"  );
