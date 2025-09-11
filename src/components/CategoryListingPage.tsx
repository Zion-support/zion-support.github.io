<<<<<<< HEAD
<<<<<<< HEAD
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton";
import { safeStorage } from "@/utils/safeStorage";
interface Listing {
// Example listing type
interface Listing {
import React from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// Example listing type
interface Listing {
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components/GradientHeading';
import { ListingScoreCard } from '@/components/ListingScoreCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Select,;
  SelectTrigger,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { safeStorage } from '@/utils/safeStorage';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Example listing type;
interface Listing {;
import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components / GradientHeading';
import { ListingScoreCard } from '@/components / ListingScoreCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
<<<<<<< HEAD
} from '@/components/ui/select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
<<<<<<< HEAD
import ListingGridSkeleton from '@/components / skeletons / ListingGridSkeleton';
import { safe_storage } from '@/utils / safe_storage';
// Example listing type;
import { useState, useEffect } from 'react'
import { GradientHeading } from '@/components/GradientHeading'
import { ListingScoreCard } from '@/components/ListingScoreCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select
  SelectTrigger
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react'
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton";
import { safeStorage } from "@/utils/safeStorage";
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton'
import { safeStorage } from '@/utils/safeStorage'
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
=======
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { safeStorage } from '@/utils/safeStorage';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
} from '@/components / ui / select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components / skeletons / ListingGridSkeleton';
import { safe_storage } from '@/utils / safe_storage';
// Example listing type;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Listing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
  price: number;
  category: string;
<<<<<<< HEAD
=======
  category: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
<<<<<<< HEAD
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdAt: string
interface CategoryListingPageProps {
=======
  rating: number;
  image: string;
  tags: string[];
  createdAt: string;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface CategoryListingPageProps {
  category: string;
  listings: Listing[];
  loading?: boolean;
}

export const CategoryListingPage: React.FC<CategoryListingPageProps> = ({
  category,
  listings,
  loading = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  useEffect(() => {
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }, 300); return () => {
      mounted = false
      clearTimeout(timeout)
    }
  }, [searchQuery, selectedSort, selectedFilter])
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
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
=======

    }, 300); return () => {
      mounted = false;
      clear_timeout (timeout);
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
        case 'oldest':;
          return (
<<<<<<< HEAD
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        case 'oldest':
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
=======

  createdAt: string;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CategoryListingPageProps {;
  title: string;
  description: string;
  listings: Listing[];
  sortOptions?: { label: string; value: string }[];
  filterOptions?: { label: string; value: string }[];
<<<<<<< HEAD
export function CategoryListingPage(): any ({;
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
=======

export function CategoryListingPage(): any ({;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title,;
  description,;
  listings: initialListings,;
  sortOptions = [;
    { label: 'Newest First', value: 'newest' },;
    { label: 'Oldest First', value: 'oldest' },;
    { label: 'Highest Rating', value: 'rating-high' },;
    { label: 'Highest AI Match', value: 'ai-match' },;
    { label: 'A-Z', value: 'a-z' },;
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton",;
import { safeStorage } from "@/utils/safeStorage",;
;
// Example listing type;
interface Listing {;
  id:string,;
  title:string,;
  description:string,;
  category:string,;
  subcategory?:string,;
  image?:string,;
  tags?:string[],;
  author?:string,;
  authorImage?:string,;
  aiScore?:number,;
  rating?:number,;
  reviewCount?:number,;
  price?:number | null,;
  createdAt:string;
}
;
interface CategoryListingPageProps {;
  title:string,;
  description:string,;
  listings:Listing[],;
  sortOptions?:{ label:string, value:string }[],;
  filterOptions?:{ label:string, value:string }[],;
}
;
export function CategoryListingPage({ ;
  title,;
  description,;
  listings:initialListings,;
  sortOptions = [;
    { label:'Newest First', value:'newest' },;
    { label:'Oldest First', value:'oldest' },;
    { label:'Highest Rating', value:'rating-high' },;
    { label:'Highest AI Match', value:'ai-match' },;
    { label:'A-Z', value:'a-z' },;
    { label:'Z-A', value:'z-a' }],;
  filterOptions = [;
    { label:'All', value:'all' },;
    { label:'Highly Rated', value:'high-rating' },;
    { label:'Best AI Match', value:'best-match' }];
} CategoryListingPageProps) {;
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
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
<<<<<<< HEAD
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (
    <>;
<<<<<<< HEAD
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
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;




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
            </p>;
          </div>;
          {/* Filters and Search */}

            </p>
          </div>
          {/* Filters and Search */}
              {description}
            </p>
          </div>
          {/* Filters and Search */}
=======




      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
                </SelectContent>;
              </Select>;
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    <Filter className="mr-2 h-4 w-4" />;
                    <span>;
                      {filterOptions.find(option => option.value === selectedFilter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {filterOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;
                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results Count */}
          <div className='mb-6'>
            <p className='text-zion-slate-light'>
=======

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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="mb-6">
            <p className="text-zion-slate-light">


              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
<<<<<<< HEAD
            </p>
          </div>
          <div className='mb-6'>
            <p className='text-zion-slate-light'>
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
=======

            </p>;
          </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          {/* Listings Grid */}
          <div aria-busy={isLoading}>;
            {isLoading ? (;
              <ListingGridSkeleton />;
<<<<<<< HEAD
            ) : processedListings.length > 0 ? (;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                {processedListings.map((listing) => (;
                  <ListingScoreCard;
                    key={listing.id}
                    title={listing.title}
                    description={listing.description}
                    category={listing.subcategory || listing.category}
                    image={listing.image}
                    tags={listing.tags}
                    author={listing.author}
                    authorImage={listing.authorImage}
                    aiScore={listing.aiScore}
                    rating={listing.rating}
                    reviewCount={listing.reviewCount}
                  />;
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button
ursor/fix-website-loading-errors-and-merge-6662
                  ))}

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
            <p className='mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto'>;
              {description}
            </p>;
          </div>;
          {/* Filters and Search */}
          <div className='bg - zion - blue - dark rounded - lg p - 6 mb - 8 border border - zion - blue - light'>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate' />;
                <Input;
                  type='text';
                  placeholder='Search listings...';
                  value={search_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                    setSearchQuery (e.target.value);
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
      const matchesSearch = ;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || ;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag => ;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      ;
      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch,;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;
      ;
      return matchesSearch,;
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
        default:return 0;
      }
    }),;
;
  return (;
    <>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {description}
            </p>;
          </div>;
;
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
                <Input;
                  type="text";
                  placeholder="Search listings...";
                  value={searchQuery}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;
              ;
              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;
                    ) :selectedSort === 'z-a' ? (;
                      <ArrowUpZA className="mr-2 h-4 w-4" />;
                    ) :null}
                    <span>;
                      {sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {sortOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
;
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    <Filter className="mr-2 h-4 w-4" />;
                    <span>;
                      {filterOptions.find(option => option.value === selectedFilter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {filterOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
              {searchQuery && ` for "${searchQuery}"`}

            </p>;
          </div>;


;
          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}
            </p>;
          </div>;
;

          {/* Listings Grid */}
          <div aria-busy={isLoading}>;
            {isLoading ? (;
              <ListingGridSkeleton />;
=======
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



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  variant='outline'
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFilter(filterOptions[0]?.value |'all') }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  variant="outline"
                  onClick={() => {
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
                >
                  Clear all filters
                </Button>
              </div>
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                >
                  Clear all filters
                </Button>
              </div>
<<<<<<< HEAD
=======
    let filtered = listings;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        listing =>
          listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by category
    if (filterBy !== 'all') {
      filtered = filtered.filter(listing => listing.category === filterBy);
    }

    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredListings.length} of {listings.length} listings
        </p>
      </div>

<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";
<<<<<<< HEAD
                  variant='outline'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedFilter(filterOptions[0]?.value || 'all');                  }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10';
<<<<<<< HEAD
            ) :processedListings.length > 0 ? (;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                {processedListings.map((listing) => (;
                  <ListingScoreCard;
                    key={listing.id}                    title={listing.title}
                    description={listing.description}
                    category={listing.subcategory || listing.category}
                    image={listing.image}
                    tags={listing.tags}
                    author={listing.author}
                    authorImage={listing.authorImage}
                    aiScore={listing.aiScore}
                    rating={listing.rating}
                    reviewCount={listing.reviewCount}
                  />;
                ))}
              </div>;
            ) :(;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";
                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedFilter(filterOptions[0]?.value || 'all'),;
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >;
                  Clear all filters;
                </Button>;
              </div>;
<<<<<<< HEAD
                  onClick={() => {;
                    setSearchQuery("");
                    setSelectedFilter(filterOptions[0]?.value || 'all');
                  }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                >
                  Clear all filters
                </Button>
              </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
          </div>;
        </div>;
      </div>;
    </>;
<<<<<<< HEAD
  //Apply search filter const matchesSearch = listing && listing.title.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () ) || listing && listing.description.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () ) || (listing && listing.tags && listing && listing.tags.some (tag => tag && tag.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () ) ) );
//Apply category filters if (selectedFilter === 'all') return matchesSearch;';
if (selectedFilter === 'high-rating') return matchesSearch && (listing && listing.rating || 0) >= 4;';
if (selectedFilter === 'best-match') return matchesSearch && (listing && listing.aiScore || 0) >= 85;
switch (selectedSort) {';
  case 'newest': return new Date (b && b.createdAt) .getTime () - new Date (a && a.createdAt) .getTime ();';
case 'oldest': return new Date (a && a.createdAt) .getTime () - new Date (b && b.createdAt) .getTime ();';
case 'rating-high': return (b && b.rating || 0) - (a && a.rating || 0);';
case 'ai-match': return (b && b.aiScore || 0) - (a && a.aiScore || 0);';
case 'a-z': return a && a.title.localeCompare (b && b.title);';
  ),;}
   //Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) );
//Apply category filters if (selectedFilter === 'all') return matchesSearch;';
if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;';
if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
switch (selectedSort) {';
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();';
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();';
case 'rating-high': return (b.rating || 0) - (a.rating || 0);';
case 'ai-match': return (b.aiScore || 0) - (a.aiScore || 0);';
case 'a-z': return a.title.localeCompare (b.title);';
case 'z-a': return (<> <div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {;
  title ";
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {;
  description ;
}</p> </div> {;
  /* Filters and Search */ ";
}<div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light"> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" /> <Input className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> <Select value= {;
  selectedSort ;
}onValueChange= {;
  setSelectedSort ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> {'";
  selectedSort === 'a-z' ? (<ArrowDownAZ className="mr-2 h-4 w-4" />) : selectedSort === 'z-a' ? (<ArrowUpZA className="mr-2 h-4 w-4" />) : null ;
}<span> {';
  sortOptions.find (option => option.value === selectedSort) ?.label || 'Sort By' ";
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {;
  sortOptions.map ( (option) => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ";
}className="text-white"> {;
  option.label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> <Select value= {;
  selectedFilter ;
}onValueChange= {;
  setSelectedFilter ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4" /> <span> {';
  filterOptions.find (option => option.value === selectedFilter) ?.label || 'Filter' ";
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {;
  filterOptions.map ( (option) => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ";
}className="text-white"> {;
  option.label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> </div> </div> {;
  /* Results Count */ ";
}<div className="mb-6"> </p> </div> {;
  /* Listings Grid */ ;


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
}<div aria-busy= {;
  isLoading ;
}> {";
  isLoading ? (<ListingGridSkeleton />) : processedListings.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {;
  processedListings.map ( (listing) => (<ListingScoreCard key= {;
  listing.id ;
}title= {;
  listing.title ;
}description= {;
  listing.description ;
}category= {;
  listing.subcategory || listing.category ;
}image= {;
  listing.image ;
}tags= {;
  listing.tags ;
}author= {;
  listing.author ;
}authorImage= {;
  listing.authorImage ;
}aiScore= {;
  listing.aiScore ;
}rating= {;
  listing.rating ;
}reviewCount= {;
  listing.reviewCount ;
}/>) ) ";
}</div>) : (<div className="text-center py-20"> <h3 className="text-xl font-bold text-white mb-2">No listings found</h3> <p className="text-zion-slate-light mb-6" >Try adjusting your filters or search query</p> <Button ;
}";
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" ;
}</div> </div> </div> </>) ;
}'"
  );
}
}
=======
      {/* Listings Grid */}
      {filteredListings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
          <p className="text-gray-500">
            Try adjusting your search terms or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingScoreCard
              key={listing.id}
              listing={listing}
              onView={() => {
                // Handle view action
                console.log('View listing:', listing.id);
              }}
              onEdit={() => {
                // Handle edit action
                console.log('Edit listing:', listing.id);
              }}
              onDelete={() => {
                // Handle delete action
                console.log('Delete listing:', listing.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
