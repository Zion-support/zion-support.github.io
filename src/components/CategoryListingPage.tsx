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
