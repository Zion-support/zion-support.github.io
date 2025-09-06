import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton";
import { safeStorage } from "@/utils/safeStorage";
>>>>>>> // Example listing type
interface Listing {
>>>>>>> import React from 'react';
import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components/GradientHeading';
import { ListingScoreCard } from '@/components/ListingScoreCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {;
  Select,;
  SelectTrigger,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { safeStorage } from '@/utils/safeStorage';

// Example listing type;
interface Listing {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components / GradientHeading';
import { ListingScoreCard } from '@/components / ListingScoreCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components / ui / select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components / skeletons / ListingGridSkeleton';
import { safe_storage } from '@/utils / safe_storage';
// Example listing type;
interface Listing {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  id: string;
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
  createdAt: string
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        (listing.tags &&
          listing.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ))
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch
      if (selectedFilter === 'high-rating')
        return matchesSearch && (listing.rating |0) >= 4
      if (selectedFilter === 'best-match')
        return matchesSearch && (listing.aiScore |0) >= 85
      return matchesSearch
    })
    .sort((a, b,) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
        case 'oldest':;
          return (
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
  createdAt: string;

interface CategoryListingPageProps {;
  title: string;
  description: string;
  listings: Listing[];
  sortOptions?: { label: string; value: string }[];
  filterOptions?: { label: string; value: string }[];

export function CategoryListingPage(): any ({;
  title,;
  description,;
  listings: initialListings,;
  sortOptions = [;
    { label: 'Newest First', value: 'newest' },;
    { label: 'Oldest First', value: 'oldest' },;
    { label: 'Highest Rating', value: 'rating-high' },;
    { label: 'Highest AI Match', value: 'ai-match' },;
    { label: 'A-Z', value: 'a-z' },;
    { label: 'Z-A', value: 'z-a' },;
  ],;
  filterOptions = [;
    { label: 'All', value: 'all' },;
    { label: 'Highly Rated', value: 'high-rating' },;
    { label: 'Best AI Match', value: 'best-match' },;
  ],;
}: CategoryListingPageProps) {;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState(;
    () =>;
      safeStorage && safeStorage.getItem('category_selected_sort') ||;
      sortOptions[0]?.value ||;
      'newest';
  );
  const [selectedFilter, setSelectedFilter] = useState(;
    () =>;
      safeStorage && safeStorage.getItem('category_selected_filter') ||;
      filterOptions[0]?.value ||;
      'all';
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {;
    safeStorage && safeStorage.setItem('category_selected_sort', selectedSort);
  }, [selectedSort]);

  useEffect(() => {;
    safeStorage && safeStorage.setItem('category_selected_filter', selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {;
    let mounted = true;
    setIsLoading(true);
    const timeout = setTimeout(() => {;
      if (mounted) setIsLoading(false);
    }, 300);    return () => {;
      mounted = false;
      clearTimeout(timeout);
    };
  }, [searchQuery, selectedSort, selectedFilter]);

  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
      const matchesSearch =;
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some(tag =>;
            tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          ));

      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch;
      if (selectedFilter === 'high-rating');
        return matchesSearch && (listing && listing.rating || 0) >= 4;
      if (selectedFilter === 'best-match');
        return matchesSearch && (listing && listing.aiScore || 0) >= 85;

      return matchesSearch;
    });
    .sort((a, b,) => {;
      // Apply sorting;
      switch (selectedSort) {;
        case 'newest':;
          return (
            new Date(b && b.createdAt).getTime() - new Date(a && a.createdAt).getTime();
          );
        case 'oldest':;
          return (
            new Date(a && a.createdAt).getTime() - new Date(b && b.createdAt).getTime();
          );
        case 'rating-high':;
          return (b && b.rating || 0) - (a && a.rating || 0);
        case 'ai-match':;
          return (b && b.aiScore || 0) - (a && a.aiScore || 0);
        case 'a-z':;
          return a && a.title.localeCompare(b && b.title);
        case 'z-a':;
          return b && b.title.localeCompare(a && a.title);
        default:;
          return 0;

            new Date (a.created_at).get_time () - new Date (b.created_at).get_time ());
        case 'rating - high':;
          return (b.rating || 0) - (a.rating || 0);
        case 'ai - match':;
          return (b.ai_score || 0) - (a.ai_score || 0);
        case 'a - z':;
          return a.title.locale_compare (b.title);
        case 'z - a':;
          return b.title.locale_compare (a.title);
        default:;
          return 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    });
  return (
    <>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
>>>>>>>               {description}
            </p>
          </div>
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
                  className='pl-10 bg-zion-blue border border-zion-blue-light text-white'                />
              </div>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>
                  <div className='flex items-center'>
                    {selectedSort === 'a-z' ? (
                      <ArrowDownAZ className='mr-2 h-4 w-4' />
                    ) : selectedSort === 'z-a' ? (
                      <ArrowUpZA className='mr-2 h-4 w-4' />
                    ) : null}
                    <span>
                      {sortOptions.find(option => option.value === selectedSort)
                        ?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                  {sortOptions.map(option => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className='text-white'
                    >                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>
                  <div className='flex items-center'>
                    <Filter className='mr-2 h-4 w-4' />
                    <span>
                      {filterOptions.find(
                        option => option.value === selectedFilter
                      )?.label |'Filter'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                  {filterOptions.map(option => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className='text-white'
                    >                      {option.label}
                    </SelectItem>
>>>>>>>                   ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results Count */}
          <div className='mb-6'>
            <p className='text-zion-slate-light'>
>>>>>>>               Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          {/* Listings Grid */}
          <div aria-busy={isLoading}>
            {isLoading ? (
              <ListingGridSkeleton />
            ) : processedListings.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {processedListings.map(listing => (                  <ListingScoreCard
                    key = {listing.id,}
                    title = {listing.title,}
                    description = {listing.description,}
                    category = {listing.subcategory |listing.category,}
                    image = {listing.image,}
                    tags = {listing.tags,}
                    author = {listing.author,}
                    authorImage = {listing.authorImage,}
                    aiScore = {listing.aiScore,}
                    rating = {listing.rating,}
                    reviewCount = {listing.reviewCount,}
                  />
>>>>>>>                 ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button

ursor/fix-website-loading-errors-and-merge-6662
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


              Showing {processedListings.length} results
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
                  onClick={() => {
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>>                 >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
  //Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) |listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) |(listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) )
//Apply category filters if (selectedFilter === 'all') return matchesSearch;'
if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating |0) >= 4;'
if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore |0) >= 85
switch (selectedSort) {'
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();'
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();'
case 'rating-high': return (b.rating |0) - (a.rating |0);'
case 'ai-match': return (b.aiScore |0) - (a.aiScore |0);'
case 'a-z': return a.title.localeCompare (b.title);'
case 'z-a': return (<> <div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {
  title "
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {
  description
}</p> </div> {
  /* Filters and Search */ "
}<div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light"> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" /> <Input className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> <Select value= {
  selectedSort
}onValueChange= {
  setSelectedSort "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> {'"
  selectedSort === 'a-z' ? (<ArrowDownAZ className="mr-2 h-4 w-4" />) : selectedSort === 'z-a' ? (<ArrowUpZA className="mr-2 h-4 w-4" />) : null
}<span> {'
  sortOptions.find (option => option.value === selectedSort) ?.label |'Sort By' "
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {
  sortOptions.map ( (option) => (<SelectItem key= {
  option.value
}value= {
  option.value "
}className="text-white"> {
  option.label
}</SelectItem>) )
}</SelectContent> </Select> <Select value= {
  selectedFilter
}onValueChange= {
  setSelectedFilter "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4" /> <span> {'
  filterOptions.find (option => option.value === selectedFilter) ?.label |'Filter' "
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {
  filterOptions.map ( (option) => (<SelectItem key= {
  option.value
}value= {
  option.value "
}className="text-white"> {
  option.label
}</SelectItem>) )
}</SelectContent> </Select> </div> </div> {
  /* Results Count */ "
}<div className="mb-6"> </p> </div> {
  /* Listings Grid */
}<div aria-busy= {
  isLoading
}> {"
  isLoading ? (<ListingGridSkeleton />) : processedListings.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {
  processedListings.map ( (listing) => (<ListingScoreCard key= {
  listing.id
}title= {
  listing.title
}description= {
  listing.description
}category= {
  listing.subcategory |listing.category
}image= {
  listing.image
}tags= {
  listing.tags
}author= {
  listing.author
}authorImage= {
  listing.authorImage
}aiScore= {
  listing.aiScore
}rating= {
  listing.rating
}reviewCount= {
  listing.reviewCount
}/>) ) "
}</div>) : (<div className="text-center py-20"> <h3 className="text-xl font-bold text-white mb-2">No listings found</h3> <p className="text-zion-slate-light mb-6" >Try adjusting your filters or search query</p> <Button
}"
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
}</div> </div> </div> </>)
}'"}
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
                >
                  Clear all filters
                </Button>
              </div>

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



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 