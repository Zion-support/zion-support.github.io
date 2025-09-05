
// Example listing type
interface Listing {_id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdAt: string;}

interface CategoryListingPageProps {_title: string;
  description: string;
  listings: Listing[];
  sortOptions?: { label: string; value: string}[];
  filterOptions?: {_label: string; value: string}[];
}

export function CategoryListingPage(_{_title, _description, _listings: initialListings, _sortOptions = [
    { label: 'Newest First', _value: 'newest'}, _{_label: 'Oldest First', _value: 'oldest'}, _{_label: 'Highest Rating', _value: 'rating-high'}, _{_label: 'Highest AI Match', _value: 'ai-match'}, _{_label: 'A-Z', _value: 'a-z'}, _{_label: 'Z-A', _value: 'z-a'}], _filterOptions = [
    {_label: 'All', _value: 'all'}, _{_label: 'Highly Rated', _value: 'high-rating'}, _{_label: 'Best AI Match', _value: 'best-match'}]
}: CategoryListingPageProps) {_const [searchQuery, _setSearchQuery] = useState("");
  const [selectedSort, _setSelectedSort] = useState(sortOptions[0].value);
  const [selectedFilter, _setSelectedFilter] = useState(filterOptions[0].value);
  
  // Process listings based on filters and search
  const _processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const _matchesSearch = 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags && listing.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
      
      return matchesSearch;})
    .sort(_(a, _b) => {_// Apply sorting
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating-high':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-match':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default:
          return 0;}
    });

  return (_<>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{_title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              {_description}
            </p>
          </div>

          {_/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={_searchQuery}
                  onChange={_(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              
              <Select value={_selectedSort} onValueChange={_setSelectedSort}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    {_selectedSort === 'a-z' ? (
                      <ArrowDownAZ className="mr-2 h-4 w-4" />
                    ) : selectedSort === 'z-a' ? (
                      <ArrowUpZA className="mr-2 h-4 w-4" />
                    ) : null}
                    <span>
                      {_sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {_sortOptions.map(_(option) => (
                    <SelectItem key={option.value} value={_option.value} className="text-white">
                      {_option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={_selectedFilter} onValueChange={_setSelectedFilter}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>
                      {_filterOptions.find(option => option.value === selectedFilter)?.label || 'Filter'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {_filterOptions.map(_(option) => (
                    <SelectItem key={option.value} value={_option.value} className="text-white">
                      {_option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {_/* Results Count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {_processedListings.length} results
              {_searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {_/* Listings Grid */}
          {_processedListings.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
                <ListingScoreCard 
                  key={listing.id}
                  title={_listing.title}
                  description={_listing.description}
                  category={_listing.subcategory || listing.category}
                  image={_listing.image}
                  tags={_listing.tags}
                  author={_listing.author}
                  authorImage={_listing.authorImage}
                  aiScore={_listing.aiScore}
                  rating={_listing.rating}
                  reviewCount={_listing.reviewCount}
                />
              ))}
            </div>
          ) : (_<div className="text-center py-20">
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
              <Button 
                variant="outline" 
                onClick={_() => {
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);}}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}