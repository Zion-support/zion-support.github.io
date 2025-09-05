<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react'
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton",
import { safeStorage } from "@/utils/safeStorage",
=======
import { useState, useEffect } from &quot;react&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ListingScoreCard } from &quot;@/components/ListingScoreCard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Select, SelectTrigger, SelectContent, SelectItem } from &quot;@/components/ui/select&quot;;
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react'
import ListingGridSkeleton from &quot;@/components/skeletons/ListingGridSkeleton&quot;;
import { safeStorage } from &quot;@/utils/safeStorage&quot;;
=======
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Example listing type
<<<<<<< HEAD
interface Listing {
  id: string,
  title: string,
  description: string,
  category: string,
  subcategory?: string,
  image?: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  price?: number | null,
  createdAt: string
}

interface CategoryListingPageProps {
  title: string,
  description: string,
  listings: Listing[],
  sortOptions?: { label: string, value: string }[],
  filterOptions?: { label: string, value: string }[]
}

export function CategoryListingPage({ 
  title,
  description,
  listings: initialListings,
  sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Highest Rating', value: 'rating-high' },
    { label: 'Highest AI Match', value: 'ai-match' },
    { label: 'A-Z', value: 'a-z' },
    { label: 'Z-A', value: 'z-a' }],
  filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Highly Rated', value: 'high-rating' },
    { label: 'Best AI Match', value: 'best-match' }]
}: CategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedSort, setSelectedSort] = useState(
    () => safeStorage.getItem('category_selected_sort') || sortOptions[0]?.value || 'newest'
  ),
  const [selectedFilter, setSelectedFilter] = useState(
    () => safeStorage.getItem('category_selected_filter') || filterOptions[0]?.value || 'all'
  ),
  const [isLoading, setIsLoading] = useState(false),

  useEffect(() => {
    safeStorage.setItem('category_selected_sort', selectedSort)
  }, [selectedSort]),

  useEffect(() => {
    safeStorage.setItem('category_selected_filter', selectedFilter)
  }, [selectedFilter]),

  useEffect(() => {
    let mounted = true,
    setIsLoading(true),
    const timeout = setTimeout(() => {
      if (mounted) setIsLoading(false)
    }, 300),
    return () => {
      mounted = false,
      clearTimeout(timeout)
    }
  }, [searchQuery, selectedSort, selectedFilter]),
=======
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
  const [selectedSort, _setSelectedSort] = useState(_() => safeStorage.getItem('category_selected_sort') || sortOptions[0]?.value || 'newest'
  );
  const [selectedFilter, _setSelectedFilter] = useState(_() => safeStorage.getItem('category_selected_filter') || filterOptions[0]?.value || 'all'
  );
  const [isLoading, _setIsLoading] = useState(false);

  useEffect__(() => {
    safeStorage.setItem('category_selected_sort', _selectedSort);}, [selectedSort]);

  useEffect__(() => {_safeStorage.setItem('category_selected_filter', _selectedFilter);}, [selectedFilter]);

  useEffect__(() => {_let _mounted = true;
    setIsLoading(true);
    const _timeout = setTimeout__(() => {
      if (mounted) setIsLoading(false);}, 300);
    return () => {_mounted = false;
      clearTimeout(timeout);};
  }, [searchQuery, selectedSort, selectedFilter]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Process listings based on filters and search
  const _processedListings = initialListings
    .filter(listing => {_// Apply search filter
      const _matchesSearch = 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags && listing.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )),
      
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch,
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,
      
<<<<<<< HEAD
      return matchesSearch
    })
    .sort((a, b) => {
      // Apply sorting
=======
      return matchesSearch;})
    .sort(_(a, _b) => {_// Apply sorting
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        case 'rating-high':
          return (b.rating || 0) - (a.rating || 0),
        case 'ai-match':
          return (b.aiScore || 0) - (a.aiScore || 0),
        case 'a-z':
          return a.title.localeCompare(b.title),
        case 'z-a':
<<<<<<< HEAD
          return b.title.localeCompare(a.title),
        default: return 0
      }
    }),
=======
          return b.title.localeCompare(a.title);
        default:
          return 0;}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot; />
                <Input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  placeholder=&quot;Search listings..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
=======
                  type="text"
                  placeholder="Search listings..."
                  value={_searchQuery}
                  onChange={_(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
            <p className="text-zion-slate-light&quot;>
              Showing {processedListings.length} results
              {searchQuery && ` for &quot;${searchQuery}"`}
=======
            <p className="text-zion-slate-light">
              Showing {_processedListings.length} results
              {_searchQuery && ` for "${searchQuery}"`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>

          {_/* Listings Grid */}
          <div aria-busy={_isLoading}>
            {_isLoading ? (
              <ListingGridSkeleton />
            ) : processedListings.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-zion-slate-light mb-6&quot;>Try adjusting your filters or search query</p>
                <Button
<<<<<<< HEAD
                  variant=&quot;outline&quot;
                  onClick={() => {
<<<<<<< HEAD
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
=======
                    setSearchQuery("&quot;);
                    setSelectedFilter(filterOptions[0]?.value || 'all');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  }}
                  className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
=======
                  variant="outline"
                  onClick={_() => {
                    setSearchQuery("");
                    setSelectedFilter(filterOptions[0]?.value || 'all');}}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}