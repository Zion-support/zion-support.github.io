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
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  tags: string[];
  createdAt: string;
}

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


          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
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
ursor/fix-website-loading-errors-and-merge-6662
                  variant="outline"

}
