

import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,

  SelectItem} from "@/components/ui/select",
import { Checkbox } from "@/components/ui/checkbox",
import Skeleton from "react-loading-skeleton",
import "react-loading-skeleton/dist/skeleton.css",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { captureException } from "@/utils/sentry",
interface PriceRange {
  min: number,
  max: number
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectItem} from "@/components/ui/select",;
import { Checkbox } from "@/components/ui/checkbox",;
import Skeleton from "react-loading-skeleton",;
import "react-loading-skeleton/dist/skeleton.css",;
import { Slider } from "@/components/ui/slider",;
import { ProductListing, ListingView } from "@/types/listings",;
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
import { captureException } from "@/utils/sentry",;
interface PriceRange {;
  min: number,;
  max: number;
}
;
interface DynamicListingPageProps {;
  title: string,;
  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange,;
  /**;
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.;
   */;
  detailBasePath?: string;
}

export function DynamicListingPage({

  detailBasePath = "/marketplace/listing"}: DynamicListingPageProps) {
  const router = useRouter(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>

      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )

=======

  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className='h-4 w-4' />
  ) : (

    setCurrentPriceFilter([min, max])
import { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { GradientHeading } from '@/components / GradientHeading';
import { ProductListingCard } from '@/components / ProductListingCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input'; import { use_router } from 'next / router';
import { GradientHeading  } from '@/components / GradientHeading';
import { ProductListingCard  } from '@/components / ProductListingCard';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components / ui / select';
import { Checkbox } from '@/components / ui / checkbox';
import Skeleton from 'react - loading - skeleton';
import 'react - loading - skeleton / dist / skeleton.css';
import { Slider } from '@/components / ui / slider';
import { ProductListing, ListingView } from '@/types / listings';
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
import { capture_exception } from '@/utils / sentry';
interface PriceRange {
  min: number;
max: number;
}interface DynamicListingPageProps {
  title: string;
description: string;
category_slug: string;
listings: ProductListing[];
category_filters: {
  label: string, value: string;
}[];
initial_price?: PriceRange;
}const toggle_category = (category: string) =>: any {
  setSelectedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category] min: 0;
max: 10000;
});
export /**
 * DynamicListingPage - Function description
 */
function DynamicListingPage() {
  const router = use_router ();
  const [search_query, setSearchQuery] = useState ('');
  const [selected_categories, setSelectedCategories] = useState < string[]>([]);
  const toggle_category = (category: string) =>: any {    setSelectedCategories (prev =>;
      prev.includes (category);
        ? prev.filter (c => c !== category);
        : [...prev, category]);
  }
  const clear_categories = () =>: any setSelectedCategories ([]);
  const [view, set_view] = useState < ListingView>('grid');
  const is_grid = view === 'grid';
  // Swap icons to match action;
  const ToggleViewIcon = is_grid ? (
    <List className='h - 4 w - 4' />) : (
    <LayoutGrid className='h - 4 w - 4' />);
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>({
    min: 0,
    max: 10000,
  });
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
  const [selected_brand, setSelectedBrand] = useState ('all');
  const [spec_query, setSpecQuery] = useState ('');
  const [selected_availability, setSelectedAvailability] = useState ('all');
  const [sort_option, setSortOption] = useState ('newest');
  const brand_options = Array.from (
    new Set (all_listings.map (l => l.brand).filter (Boolean)));
  const availability_options = Array.from (
    new Set (all_listings.map (l => l.availability).filter (Boolean)));
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition
if ( {) {
  $2
}
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min: 0, max });
      setCurrentPriceFilter ([0, max]) }
  }, [all_listings]);
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initial_price.max]);
  const handleSliderChange = (values: number[]) =>: any {
    const [min, max] = values.map (Number);
    if (|| isNaN (max)) return) {
  $2
}
    setCurrentPriceFilter ([min, max]);
  }
  let filtered_listings: ProductListing[] = [];
  try {

        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>

            tag.toLowerCase().includes(searchQuery.toLowerCase()))),

        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesBrand &&
        matchesSpecs &&
        matchesAvailability
      )

      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })

        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {

        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData))
        }

        router.push("/request-quote")
      }
    }, 500)
  },

  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>

                  Categories
                </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}

                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >

                        {filter.label}
                      </label>
                    </div>
                  ))}

                </div>;
              </div>;

              {brandOptions && brandOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Brand;
                  </label>;

                  <Select

                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }

              </div>
              {availabilityOptions.length > 0 && (
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                    Availability
                  </label>
                  className='bg-zion-blue border border-zion-blue-light text-white'                />;
              </div>;

              {availabilityOptions && availabilityOptions.length > 0 && (;
                <div className='mb-6'>;
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                    Availability;
                  </label>;
                  <Select

                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>

                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}

                  Price Range
                </label>
                <div className='mt-6 px-2'>

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Price Range;
                </label>;
                <div className='mt-6 px-2'>;
                  <Slider

                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}

                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

                      className={`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (

                          ))}
                          <span className='ml-1'>& Up</span>;
                        </div>;
                      )}
                    </Button>;
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {

                }}
              >
                Clear All
              </Button>
            </div>
          </div>

                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
                    </SelectTrigger>
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='newest' className='text-white'>
                        Newest
                      </SelectItem>
                      <SelectItem value='price-asc' className='text-white'>
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value='price-desc' className='text-white'>
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value='rating' className='text-white'>
                        Highest Rating
                      </SelectItem>
                    </SelectContent>
                  </Select>

                    onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => {;
                      logInfo('Search query:', { data: e && e.target.value });
                      setSearchQuery(e && e.target.value);                    }}
                    className='pl-10 bg-zion-blue border border-zion-blue-light text-white';
                  />;
                </div>;

                <div className='flex items-center gap-2 ml-auto'>;
                  <Select value={sortOption} onValueChange={setSortOption}>;
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>;
                      <SelectValue placeholder='Sort' />;
                    </SelectTrigger>;
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;
                      <SelectItem value='newest' className='text-white'>;
                        Newest;
                      </SelectItem>;
                      <SelectItem value='price-asc' className='text-white'>;
                        Price: Low to High;
                      </SelectItem>;
                      <SelectItem value='price-desc' className='text-white'>;
                        Price: High to Low;
                      </SelectItem>;
                      <SelectItem value='rating' className='text-white'>;
          <div className='lg:col - span - 3'>;
            <div className='bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light'>;
              <div className='flex flex - col md:flex - row gap - 4'>;
                <div className='relative flex - grow'>;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Input;
                    type='text';
                    placeholder='Search listings...';
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {
                      log_info ('Search query:', { data: e.target.value });
                      setSearchQuery (e.target.value) }}
                    className='pl - 10 bg - zion - blue border border - zion - blue - light text - white';
                  />;
                </div>;
                <div className='flex items - center gap - 2 ml - auto'>;
                  <Select value={sort_option} onValueChange={setSortOption}>;
                    <SelectTrigger className='w-[150px] bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Sort' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='newest' className='text - white'>;
                        Newest;
                      </SelectItem>;
                      <SelectItem value='price - asc' className='text - white'>;
                        Price: Low to High;
                      </SelectItem>;
                      <SelectItem value='price - desc' className='text - white'>;
                        Price: High to Low;
                      </SelectItem>;
                      <SelectItem value='rating' className='text - white'>;

                        Highest Rating;
                      </SelectItem>;
                    </SelectContent>;
                  </Select>;

                  <Button

                    {ToggleViewIcon}
                    <span className="sr-only">
                      {isGrid ? "List view" : "Grid view"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>

                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
                  <Button;
                    variant='outline';
                    size='icon';
                    on_click={() => set_view (is_grid ? 'list' : 'grid')}
                    aria - label={is_grid ? 'List view' : 'Grid view'}
                    title={is_grid ? 'List view' : 'Grid view'}
                    className='border - zion - blue - light text - zion - slate - light focus - visible:ring - zion - purple'                  >;
                    {ToggleViewIcon}
                    <span className='sr - only'>;
                      {is_grid ? 'List view' : 'Grid view'}
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;

            <div className='mb - 6'>;
              <p className='text - zion - slate - light'>;
                Showing {filtered_listings.length} results;
                {selected_categories.length > 0 &&;
                  ` in ${selected_categories.join (', ')}`}
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {is_loading ? (
              <div;
                className={

                }
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}

                      </div>
                    </div>
                  </div>
                ))}
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div
                className={

                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">
                  No listings found
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button

                >
                  Clear All
                </Button>
              </div>
<<<<<<< HEAD
