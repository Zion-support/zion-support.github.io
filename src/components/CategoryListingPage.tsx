// Example listing type
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
  category: string;
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;

  title: string
  description: string
  listings: Listing[]
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
    }, 300); return () => {
      mounted = false;
      clear_timeout (timeout);
    }
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
        case 'oldest':;
          return (
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
                <Input
                  type='text'
                  placeholder='Search listings...'
                  value={searchQuery}
                        ?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                    <SelectItem
                      key={option && option.value}
                      value={option && option.value}
                      className='text-white'>                      {option && option.label}
                    </SelectItem>;
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
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
        </div>;
      </div>;
    </>;
