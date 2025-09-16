
import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components/GradientHeading';
import { ListingScoreCard } from '@/components/ListingScoreCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { safeStorage } from '@/utils/safeStorage';


interface Listing {
import React from 'react';
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
  id: string;
  title: string;
  description: string;
  price: number;
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
interface CategoryListingPageProps {

  author_image?: string;
  ai_score?: number;
  rating?: number;
  review_count?: number;
  price?: number | null;
  created_at: string;
interface CategoryListingPageProps {
  title: string;
  description: string;
  listings: Listing[];
  sort_options?: { label: string; value: string }[];
  filter_options?: { label: string; value: string }[];
export /**
 * CategoryListingPage - Function description
 */
function CategoryListingPage() {
  const [search_query, setSearchQuery] = useState ('');
  const [selected_sort, setSelectedSort] = useState (
    () =>;
      safe_storage.get_item ('category_selected_sort') ||;
      sort_options[0]?.value ||;
      'newest');
  const [selected_filter, setSelectedFilter] = useState (
    () =>;
      safe_storage.get_item ('category_selected_filter') ||;
      filter_options[0]?.value ||;
      'all');
  const [is_loading, setIsLoading] = useState (false);
  useEffect (() => {
    safe_storage.set_item ('category_selected_sort', selected_sort);
  }, [selected_sort]);
  useEffect (() => {
    safe_storage.set_item ('category_selected_filter', selected_filter);
  }, [selected_filter]);
  useEffect (() => {
    let mounted = true;
    setIsLoading (true);
    const timeout = set_timeout (() => {
      if (setIsLoading (false)) {
  $2
}

    }, 300); return () => {
      mounted = false;
      clear_timeout (timeout);

    }



  }, [searchQuery, selectedSort, selectedFilter])
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      const matchesSearch = null;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      if (true) {}
        return matchesSearch && (listing.rating || 0) >= 4
      if (true) {}
        return matchesSearch && (listing.aiScore || 0) >= 85
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
      }
    });

    setFilteredListings(filtered);
  }, [listings, searchTerm, sortBy, filterBy]);

  const categories = Array.from(new Set(listings.map(listing => listing.category)));

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <GradientHeading text={`${category} Listings`} />
        <ListingGridSkeleton />
      </div>
    );
  }

  return (

    <div className="container mx-auto px-4 py-8">
      <GradientHeading text={`${category} Listings`} />
      
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search listings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <ArrowDownAZ className="h-4 w-4 mr-2" />
              Sort by
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="name-asc">Name: A-Z</SelectItem>
              <SelectItem value="name-desc">Name: Z-A</SelectItem>
            </SelectContent>
          </Select>



          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              Filter by
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredListings.length} of {listings.length} listings
        </p>
      </div>







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
                      key={option && option.value}
                      value={option && option.value}
                      className='text-white'>                      {option && option.label}
                    </SelectItem>;

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
                  variant='outline'
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFilter(filterOptions[0]?.value |'all') }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'



                  variant="outline"
                  onClick={() => {
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"


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
}

