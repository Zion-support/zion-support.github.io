>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Example listing type
interface Listing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdAt: string
interface CategoryListingPageProps {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  author_image?: string;
  ai_score?: number;
=======
  authorImage?: string;
  aiScore?: number;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdAt: string
interface CategoryListingPageProps {

  title: string
  description: string;
  listings: Listing[];
  sortOptions?: { label: string; value: string }[]
  filterOptions?: { label: string; value: string }[]
export function CategoryListingPage({
  title
  description
  listings: initialListings
  sortOptions = [
    { label: 'Newest First', value: 'newest' }
    { label: 'Oldest First', value: 'oldest' }
    { label: 'Highest Rating', value: 'rating-high' }
    { label: 'Highest AI Match', value: 'ai-match' }
    { label: 'A-Z', value: 'a-z' }
    { label: 'Z-A', value: 'z-a' }
  ]
  filterOptions = [
    { label: 'All', value: 'all' }
    { label: 'Highly Rated', value: 'high-rating' }
    { label: 'Best AI Match', value: 'best-match' }
  ]
}: CategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState(
    () =>
      safeStorage.getItem('category_selected_sort') |
      sortOptions[0]?.value |
      'newest'
  )
  const [selectedFilter, setSelectedFilter] = useState(
    () =>
      safeStorage.getItem('category_selected_filter') |
      filterOptions[0]?.value |
      'all'
  )
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    safeStorage.setItem('category_selected_sort', selectedSort)
  }, [selectedSort])
  useEffect(() => {
    safeStorage.setItem('category_selected_filter', selectedFilter)
  }, [selectedFilter])
  useEffect(() => {
    let mounted = true
    setIsLoading(true)
    const timeout = setTimeout(() => {;
      if (mounted) setIsLoading(false);
    }, 300); return () => {
      mounted = false
      clearTimeout(timeout)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }, [searchQuery, selectedSort, selectedFilter])
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
<<<<<<< HEAD
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      const matchesSearch = null;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        (listing.tags &&
          listing.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch
<<<<<<< HEAD
      if (selectedFilter === 'high-rating')
        return matchesSearch && (listing.rating |0) >= 4
      if (selectedFilter === 'best-match')
        return matchesSearch && (listing.aiScore |0) >= 85
      if (true) {}
        return matchesSearch && (listing.rating || 0) >= 4
      if (true) {}
        return matchesSearch && (listing.aiScore || 0) >= 85
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return matchesSearch
    })
    .sort((a, b,) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
<<<<<<< HEAD
=======

  }, [search_query, selected_sort, selected_filter]);
  // Process listings based on filters and search;
  const processed_listings = initial_listings;
    .filter (listing => {
      // Apply search filter;
      const matches_search =;
        listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        (listing.tags &&;
          listing.tags.some (tag =>;
            tag.toLowerCase ().includes (search_query.toLowerCase ())));
      // Apply category filters;
      // Check condition
if (return matches_search) {
  $2
}
      if (
        return matches_search && (listing.rating || 0) >= 4) {
  $2
}
      if (
        return matches_search && (listing.ai_score || 0) >= 85) {
  $2
}
      return matches_search;
    });
    .sort ((a, b, ) => {
      // Apply sorting;
      switch (selected_sort) {
        case 'newest':;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        case 'oldest':
          return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
        case 'rating-high':
          return (b.rating |0) - (a.rating |0)
        case 'ai-match':
          return (b.aiScore |0) - (a.aiScore |0)
        case 'a-z':
          return a.title.localeCompare(b.title)
        case 'z-a':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })
  return (
    <>
      <div className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <GradientHeading>{title}</GradientHeading>
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
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
// Example listing type
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
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { useState, useEffect } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton",;
import { safeStorage } from "@/utils/safeStorage",;
// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
  subcategory?: string,;
  image?: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  price?: number | null,;
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  createdAt: string;
}
;
interface CategoryListingPageProps {;
  title: string,;
  description: string,;
  listings: Listing[],;
  sortOptions?: { label: string, value: string }[],;
  filterOptions?: { label: string, value: string }[];
}
;
export function CategoryListingPage({;
  title,;
  description,;
  listings: initialListings,;
  sortOptions = [;
    { label: 'Newest First', value: 'newest' },;
    { label: 'Oldest First', value: 'oldest' },;
    { label: 'Highest Rating', value: 'rating-high' },;
    { label: 'Highest AI Match', value: 'ai-match' },;
    { label: 'A-Z', value: 'a-z' },;
    { label: 'Z-A', value: 'z-a' }],;
  filterOptions = [;
    { label: 'All', value: 'all' },;
    { label: 'Highly Rated', value: 'high-rating' },;
    { label: 'Best AI Match', value: 'best-match' }];
}: CategoryListingPageProps) {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedSort, setSelectedSort] = useState(;
    () => safeStorage.getItem('category_selected_sort') || sortOptions[0]?.value || 'newest';
  ),;
  const [selectedFilter, setSelectedFilter] = useState(;
    () => safeStorage.getItem('category_selected_filter') || filterOptions[0]?.value || 'all';
  ),;
  const [isLoading, setIsLoading] = useState(false),;
  useEffect(() => {;
    safeStorage.setItem('category_selected_sort', selectedSort);
  }, [selectedSort]),;
  useEffect(() => {;
    safeStorage.setItem('category_selected_filter', selectedFilter);
  }, [selectedFilter]),;
  useEffect(() => {;
    let mounted = true,;
    setIsLoading(true),;
    const timeout = setTimeout(() => {;
      if (mounted) setIsLoading(false);
    }, 300),;
    return () => {;
      mounted = false,;
      clearTimeout(timeout);
    }
  }, [searchQuery, selectedSort, selectedFilter]),;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
      const matchesSearch =;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch,;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;
      return matchesSearch;
    });
    .sort((a, b) => {;
      // Apply sorting;
      switch (selectedSort) {;
        case 'newest':;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),;
        case 'oldest':;
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),;
        case 'rating-high':;
          return (b.rating || 0) - (a.rating || 0),;
        case 'ai-match':;
          return (b.aiScore || 0) - (a.aiScore || 0),;
        case 'a-z':;
          return a.title.localeCompare(b.title),;
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        default: return 0;
      }
    });
  return (;
    <>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




<<<<<<< HEAD
=======
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              {description}

            </p>;
          </div>;


          {/* Filters and Search */}

                  className='pl-10 bg-zion-blue border border-zion-blue-light text-white'                />;
              </div>;

              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>;
                  <div className='flex items-center'>;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className='mr-2 h-4 w-4' />;
                    ) : selectedSort === 'z-a' ? (;
                      <ArrowUpZA className='mr-2 h-4 w-4' />;
                    ) : null}
                    <span>;
                      {sortOptions && sortOptions.find(option => option && option.value === selectedSort);
      <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
        <div className='container mx - auto'>;
          <div className='text - center mb - 12'>;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {description}

            </p>;
          </div>;


          {/* Filters and Search */}
          <div className='bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate' />
                <Input
                  type='text'
                  placeholder='Search listings...'
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                  className='pl - 10 bg - zion - blue border border - zion - blue - light text - white'                />;
              </div>;
              <Select value={selected_sort} onValueChange={setSelectedSort}>;
                <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                  <div className='flex items - center'>;
                    {selected_sort === 'a - z' ? (
                      <ArrowDownAZ className='mr - 2 h - 4 w - 4' />) : selected_sort === 'z - a' ? (
                      <ArrowUpZA className='mr - 2 h - 4 w - 4' />) : null}
                    <span>;
                      {sort_options.find (option => option.value === selected_sort);

                        ?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;


          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;
              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;
                    ) : selectedSort === 'z-a' ? (;
                      <ArrowUpZA className="mr-2 h-4 w-4" />;
                    ) : null}
                    <span>;
                      {sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {sortOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;
                      {option.label}
                    </SelectItem>;
                  ))}

                </SelectContent>;
              </Select>;

              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>;
                  <div className='flex items-center'>;
                    <Filter className='mr-2 h-4 w-4' />;
                    <span>;
                      {filterOptions && filterOptions.find(;
                        option => option && option.value === selectedFilter;
                      )?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;
                  {filterOptions && filterOptions.map(option => (;
                    <SelectItem
                      key={option && option.value}
                      value={option && option.value}
                      className='text-white'>                      {option && option.label}
                    </SelectItem>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



                  ))}

                <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                  {sort_options.map (option => (
                    <SelectItem;
                      key={option.value}
                      value={option.value}
                      className='text - white';
                    >                      {option.label}
                    </SelectItem>))}
                </SelectContent>;
              </Select>;
              <Select value={selected_filter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                  <div className='flex items - center'>;
                    <Filter className='mr - 2 h - 4 w - 4' />;
                    <span>;
                      {filter_options.find (
                        option => option.value === selected_filter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                  {filter_options.map (option => (
                    <SelectItem;
                      key={option.value}
                      value={option.value}
                      className='text - white';
                    >                      {option.label}
                    </SelectItem>))}

                </SelectContent>;
              </Select>;
            </div>;
          </div>;


          <div className="mb-6">
            <p className="text-zion-slate-light">
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}

            </p>;
          </div>;



          {/* Listings Grid */}
          <div aria-busy={isLoading}>;
            {isLoading ? (;
              <ListingGridSkeleton />;
            ) : processedListings && processedListings.length > 0 ? (;
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
                {processedListings && processedListings.map(listing => (                  <ListingScoreCard
                    key = {listing && listing.id,}
                    title = {listing && listing.title,}
                    description = {listing && listing.description,}
                    category = {listing && listing.subcategory || listing && listing.category,}
                    image = {listing && listing.image,}
                    tags = {listing && listing.tags,}
                    author = {listing && listing.author,}
                    authorImage = {listing && listing.authorImage,}
                    aiScore = {listing && listing.aiScore,}
                    rating = {listing && listing.rating,}
                    reviewCount = {listing && listing.reviewCount,}
                  />;
<<<<<<< HEAD
<<<<<<< HEAD



                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button
                  variant='outline'
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFilter(filterOptions[0]?.value |'all') }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'



=======



=======
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {description}
            </p>
          </div>
          {/* Filters and Search */}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results Count */}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button
<<<<<<< HEAD



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  variant="outline"
                  onClick={() => {
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                >
                  Clear all filters
                </Button>
              </div>
<<<<<<< HEAD


              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";

                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedFilter(filterOptions[0]?.value || 'all');                  }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10';
                >;
                  Clear all filters;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </>;
  );
<<<<<<< HEAD




          {/* Results Count */}
          <div className='mb - 6'>;
            <p className='text - zion - slate - light'>;
              Showing {processed_listings.length} results;
              {search_query && ` for "${search_query}"`}
            </p>;
          </div>;
          {/* Listings Grid */}
          <div aria - busy={is_loading}>;
            {is_loading ? (
              <ListingGridSkeleton />) : processed_listings.length > 0 ? (
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
                {processed_listings.map (listing => (                  <ListingScoreCard;
                    key = {listing.id, }
                    title = {listing.title, }
                    description = {listing.description, }
                    category = {listing.subcategory || listing.category, }
                    image = {listing.image, }
                    tags = {listing.tags, }
                    author = {listing.author, }
                    author_image = {listing.author_image, }
                    ai_score = {listing.ai_score, }
                    rating = {listing.rating, }
                    review_count = {listing.review_count, }
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
                    setSelectedFilter (filter_options[0]?.value || 'all') }}
                  className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                >;
                  Clear all filters;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </>);
  //Apply search filter const matches_search = listing.title.toLowerCase () .includes (search_query.toLowerCase () ) || listing.description.toLowerCase () .includes (search_query.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (search_query.toLowerCase () ) ) );
//Apply category filters // Check condition
if (return matches_search) {
  $2
}';
if (return matches_search && (listing.rating || 0) >= 4) {
  $2
}';
if (return matches_search && (listing.ai_score || 0) >= 85) {
  $2
}
switch (selected_sort) {';
  case 'newest': return new Date (b.created_at) .get_time () - new Date (a.created_at) .get_time ();';
case 'oldest': return new Date (a.created_at) .get_time () - new Date (b.created_at) .get_time ();';
case 'rating - high': return (b.rating || 0) - (a.rating || 0);';
case 'ai - match': return (b.ai_score || 0) - (a.ai_score || 0);';
case 'a - z': return a.title.locale_compare (b.title);';
case 'z - a': return (<> <div className="min - h-screen bg - zion - blue py - 12 px - 4"> <div className="container mx - auto"> <div className="text - center mb - 12"> <GradientHeading> {
  title ";
}</GradientHeading> <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto"> {
  description;
}</p> </div> {
  /* Filters and Search */ ";
}<div className="bg - zion - blue - dark rounded - lg p - 6 mb - 8 border border - zion - blue - light"> <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4"> <div className="relative"> <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate" /> <Input className="pl - 10 bg - zion - blue border border - zion - blue - light text - white" /> </div> <Select value= {
  selected_sort;
}onValueChange= {
  setSelectedSort ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white"> <div className="flex items - center"> {'";
  selected_sort === 'a - z' ? (<ArrowDownAZ className="mr - 2 h - 4 w - 4" />) : selected_sort === 'z - a' ? (<ArrowUpZA className="mr - 2 h - 4 w - 4" />) : null;
}<span> {';
  sort_options.find (option => option.value === selected_sort) ?.label || 'Sort By' ";
}</span> </div> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light"> {
  sort_options.map ( (option) => (<SelectItem key= {
  option.value;
}value= {
  option.value ";
}className="text - white"> {
  option.label;
}</SelectItem>) );
}</SelectContent> </Select> <Select value= {
  selected_filter;
}onValueChange= {
  setSelectedFilter ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white"> <div className="flex items - center"> <Filter className="mr - 2 h - 4 w - 4" /> <span> {';
  filter_options.find (option => option.value === selected_filter) ?.label || 'Filter' ";
}</span> </div> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light"> {
  filter_options.map ( (option) => (<SelectItem key= {
  option.value;
}value= {
  option.value ";
}className="text - white"> {
  option.label;
}</SelectItem>) );
}</SelectContent> </Select> </div> </div> {
  /* Results Count */ ";
}<div className="mb - 6"> </p> </div> {
  /* Listings Grid */;
}<div aria - busy= {
  is_loading;
}> {";
  is_loading ? (<ListingGridSkeleton />) : processed_listings.length > 0 ? (<div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6"> {
  processed_listings.map ( (listing) => (<ListingScoreCard key= {
  listing.id;
}title= {
  listing.title;
}description= {
  listing.description;
}category= {
  listing.subcategory || listing.category;
}image= {
  listing.image;
}tags= {
  listing.tags;
}author= {
  listing.author;
}author_image= {
  listing.author_image;
}ai_score= {
  listing.ai_score;
}rating= {
  listing.rating;
}review_count= {
  listing.review_count;
}/>) ) ";
}</div>) : (<div className="text - center py - 20"> <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3> <p className="text - zion - slate - light mb - 6" >Try adjusting your filters or search query</p> <Button;
}";
}className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
}</div> </div> </div> </>);
}'"}
}
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
