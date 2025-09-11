
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

interface Listing {
  id: string;
  title: string;
  description: string;
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;

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
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
        case 'oldest':;
          return (
interface CategoryListingPageProps {;
  title: string;
  description: string;
  listings: Listing[];
  sortOptions?: { label: string; value: string }[];
  filterOptions?: { label: string; value: string }[];
  title,;
  description,;
  listings: initialListings,;
  sortOptions = [;
    { label: 'Newest First', value: 'newest' },;
    { label: 'Oldest First', value: 'oldest' },;
    { label: 'Highest Rating', value: 'rating-high' },;
    { label: 'Highest AI Match', value: 'ai-match' },;
    { label: 'A-Z', value: 'a-z' },;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
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
          <div className="mb-6">
            <p className="text-zion-slate-light">

              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}

          {/* Listings Grid */}
          <div aria-busy={isLoading}>;
            {isLoading ? (;
              <ListingGridSkeleton />;
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

                  variant="outline"
                  onClick={() => {
                    setSearchQuery(""),
                    setSelectedFilter(filterOptions[0]?.value || 'all')
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"

                >
                  Clear all filters
                </Button>
              </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredListings.length} of {listings.length} listings
        </p>
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

