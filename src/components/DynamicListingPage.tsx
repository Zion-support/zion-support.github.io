export function DynamicListingPage({

  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },

      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )


  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),
  const isGrid = view === "grid",


  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className='h-4 w-4' />
  ) : (


    if (min == null || max == null || isNaN(min) || isNaN(max)) return;


    setCurrentPriceFilter([min, max])
  }
  let filteredListings: ProductListing[] = []
  try {


    filteredListings = allListings.filter(listing => {      const matchesSearch = null;



        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&
          listing.tags.some((tag: string) =>


      const matchesSpecs =
        !specQuery |
        (listing.specifications &&
          listing.specifications.some(s =>
            s.toLowerCase().includes(specQuery.toLowerCase())
          )) |
        (listing.tags &&
          listing.tags.some(tag =>
            tag.toLowerCase().includes(specQuery.toLowerCase())
          ))
      const matchesAvailability =
        selectedAvailability === 'all' |
        (listing.availability && listing.availability === selectedAvailability)
      const matchesCategory =
        selectedCategories.length === 0 |
        selectedCategories.includes(listing.category)
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||
        (listing.tags &&
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()))),

      const matchesAvailability =
        selectedAvailability === "all" ||
        (listing.availability && listing.availability === selectedAvailability),

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category),

      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1])
          listing.price <= currentPriceFilter[1]),


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
    })
    filteredListings.sort((a, b) => {      switch (sortOption) {
        case 'price-asc':
          return (a.price |0) - (b.price |0)
        case 'price-desc':
          return (b.price |0) - (a.price |0)
        case 'rating':
          return (b.rating |0) - (a.rating |0)
        case 'newest':
        default:
          return (
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
      }
    });
  } catch (error) {
    capture_exception (error);
    logErrorToProduction ('Listing filter error:', { data: error });
  }



  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {;


      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested'
          description: `Your quote request for ${listing.title} has been sent.`
        })
        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
          }
  const handleRequestQuote = (listing_id: string) =>: any {
    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);
    set_timeout (() => {
      setIsLoading (false);      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Quote Requested',
          description: `Your quote request for ${listing.title} has been sent.`,
        });
        // Store quote data in session_storage for the request - quote page;
        const quote_data = {
          service_type: category_slug,
          specific_item: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
          },
        }
        // Check condition
if ( {) {
  $2
}
          session_storage.set_item ('quoteRequestData', JSON.stringify (quote_data));
        }


import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GradientHeading } from '@/components/GradientHeading';
import { ProductListingCard } from '@/components/ProductListingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';import { useRouter } from 'next/router';
import { GradientHeading } from "@/components/GradientHeading";
import { ProductListingCard } from "@/components/ProductListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton ;
import { Slider } from '@/components/ui/slider';
import { ProductListing, ListingView } from '@/types/listings';
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { captureException } from '@/utils/sentry';
interface PriceRange {;
  min: number;
max: number ;
}interface DynamicListingPageProps {;
  title: string;
description: string;
categorySlug: string;
listings: ProductListing[];
categoryFilters: {;
  label: string, value: string ;
}[];
initialPrice?: PriceRange;
}const toggleCategory = (category: string) => {;
  setSelectedCategories (prev => prev && prev.includes (category) ? prev && prev.filter (c => c !== category) : [...prev, category] min: 0;
max: 10000 ;
});

export function DynamicListingPage(): any ({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
  initialPrice = { min: 0, max: 10000 },;
  detailBasePath = '/marketplace/listing',;
}: DynamicListingPageProps) {;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {    setSelectedCategories(prev =>;
      prev && prev.includes(category);
        ? prev && prev.filter(c => c !== category);
        : [...prev, category];
    );
  };
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>('grid');
  const isGrid = view === 'grid';
  // Swap icons to match action;
  const ToggleViewIcon = isGrid ? (;
    <List className='h-4 w-4' />;
  ) : (;
    <LayoutGrid className='h-4 w-4' />;
  );
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({;
    min: 0,;
    max: 10000,;
  });

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [specQuery, setSpecQuery] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  const brandOptions = Array && Array.from(;
    new Set(allListings && allListings.map(l => l && l.brand).filter(Boolean));
  );
  const availabilityOptions = Array && Array.from(;
    new Set(allListings && allListings.map(l => l && l.availability).filter(Boolean));
  );

  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min: 0, max });
      setCurrentPriceFilter([0, max]);    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice && initialPrice.max]);

  const handleSliderChange = (values: number[]) => {;
    const [min, max] = values && values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, max]);
  };
  let filteredListings: ProductListing[] = [];
  try {;
    filteredListings = allListings && allListings.filter(listing => {      const matchesSearch =;
        !searchQuery ||;
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some((tag: string) =>;
            tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          ));
      const matchesBrand =;
        selectedBrand === 'all' ||;
        (listing && listing.brand && listing && listing.brand === selectedBrand);

      const matchesSpecs =;
        !specQuery ||;
        (listing && listing.specifications &&;
          listing && listing.specifications.some(s =>;
            s && s.toLowerCase().includes(specQuery && specQuery.toLowerCase());
          )) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some(tag =>;
            tag && tag.toLowerCase().includes(specQuery && specQuery.toLowerCase());
          ));
      const matchesAvailability =;
        selectedAvailability === 'all' ||;
        (listing && listing.availability && listing && listing.availability === selectedAvailability);

      const matchesCategory =;
        selectedCategories && selectedCategories.length === 0 ||;
        selectedCategories && selectedCategories.includes(listing && listing.category);

      const matchesPrice =;
        listing && listing.price === null ||;
        (listing && listing.price >= currentPriceFilter[0] &&;
          listing && listing.price <= currentPriceFilter[1]);

      const matchesRating =;
        selectedRating === null ||;
        (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating),;

      return (
        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;
      );
    });
    filteredListings && filteredListings.sort((a, b) => {      switch (sortOption) {;
        case 'price-asc':;
          return (a && a.price || 0) - (b && b.price || 0);
        case 'price-desc':;
          return (b && b.price || 0) - (a && a.price || 0);
        case 'rating':;
          return (b && b.rating || 0) - (a && a.rating || 0);
        case 'newest':;
        default:;
          return (
            new Date(b && b.createdAt).getTime() - new Date(a && a.createdAt).getTime();
          );
      }
    });
  } catch (error) {;
    captureException(error);
    logErrorToProduction('Listing filter error:', { data: error });
  }

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);

    const listing = allListings && allListings.find(item => item && item.id === listingId);

    setTimeout(() => {;
      setIsLoading(false);      if (listing) {;
        toast({;
          title: 'Quote Requested',;
          description: `Your quote request for ${listing && listing.title} has been sent.`,;
        });


        router.push ('/request - quote');

      }
    }, 500);
  }


        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug
          specificItem: {

            id: listing.id,
            title: listing.title,
            category: listing.category,

  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-1'>
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' /> Filters
              </h3>
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">


                  Categories
                </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (

                    <div key={filter.value} className="flex items-center">
                      <Checkbox
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'                      />
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                      />


                      <label
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer"
                      >
;
  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true),;
    const listing = allListings.find((item) => item.id === listingId),;
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title: "Quote Requested",;
          description: `Your quote request for ${listing.title} has been sent.`}),;
        // Store quote data in sessionStorage for the request-quote page;
        const quoteData = {;
          serviceType: categorySlug,;
          specificItem: {;
            id: listing.id,;
            title: listing.title,;
            category: listing.category,;
            image: listing.images?.[0]}},;
        if (typeof window !== 'undefined') {;
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData));
        }
;
        router.push("/request-quote");
      }
    }, 500);
  },;
  return (;
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            {description}
          </p>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>;
          <div className='lg:col-span-1'>;
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>;
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
                <Filter className='mr-2 h-5 w-5' /> Filters;
              </h3>;

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Categories;
                </label>;

                <div className="space-y-2">;
                  {categoryFilters.map(filter => (;
                    <div key={filter.value} className="flex items-center">;
                      <Checkbox;
                        id={`cat-${filter.value}`}
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
                        className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
                      />;
                      <label;
                        htmlFor={`cat-${filter.value}`}
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer";
                      >;


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

                          key={b || 'unknown-brand'}
                          value={b || ''}
                          className='text-white'>                          {b || 'N/A'}
                        </SelectItem>;


                    value={selectedBrand}
                    onValueChange={(value: string) => setSelectedBrand(value)}
                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All Brands
                      </SelectItem>
                      {brandOptions.map((b) => (
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className="text-white">
                          {b || 'N/A'}
                        </SelectItem>;

                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}




              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Specifications;
                </label>;
                <Input



                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                    setSpecQuery(e && e.target.value);
                  }
                  className='bg-zion-blue border border-zion-blue-light text-white'                />
                  className="bg-zion-blue border border-zion-blue-light text-white"
                />


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

                          key={a || 'unknown-availability'}
                          value={a || ''}
                          className='text-white'>                          {a || 'N/A'}
                        </SelectItem>;


                    value={selectedAvailability}
                    onValueChange={(value: string) =>;
                      setSelectedAvailability(value);
                    }

                  >
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                      <SelectItem value="all" className="text-white">
                        All
                      </SelectItem>
                      {availabilityOptions.map(a => (
                        <SelectItem
                          key={a |'unknown-availability'}
                          value={a |''}
                          className='text-white'
                        >                          {a |'N/A'}
                        </SelectItem>
                      {availabilityOptions.map((a) => (
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">
                          {a || 'N/A'}
                        </SelectItem>;

                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>

              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
                <div className='mt-6 px-2'>

              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                  Price Range;
                </label>;
                <div className='mt-6 px-2'>;
                  <Slider
                    aria-label='Price range'
                    aria-label="Price range"


                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className='mb-4'                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">


                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Minimum Rating
                </label>
                <div className='flex flex-wrap gap-2'>
                  {[null, 3, 4, 5].map(rating => (
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant='outline'
                      size='sm'

                      onClick={() => {;
                        logInfo('Rating selected:', { data: rating });
                        setSelectedRating(rating);                      }}

                      aria-pressed = {selectedRating === rating,}
                      className={`{;
                        selectedRating === rating;
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple";
                          : "border-zion-blue-light text-zion-slate-light";
                      } focus-visible:ring-zion-purple`}
                    >;
                      {rating === null ? (;
                        'Any';
                      ) : (;
                        <div className='flex items-center'>;
                          {[...Array(rating)].map((_, i) => (;
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />;


              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? "any" : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        logInfo('Rating selected:', { data: rating }),
                        setSelectedRating(rating)
                      }}
                      aria-pressed={selectedRating === rating}

                      className={`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
                        <div className='flex items-center'>
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan"
                            />

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
                  logInfo('Clearing filters')
                  setSearchQuery('')
                  clearCategories()
                  setCurrentPriceFilter([0, priceRange.max])
                  setSelectedRating(null)
                  setSelectedBrand('all')
                  setSpecQuery('')
                  setSelectedAvailability('all')
                  logInfo("Clearing filters"),
                  setSearchQuery(""),
                  clearCategories(),
                  setCurrentPriceFilter([0, priceRange.max]),
                  setSelectedRating(null),
                  setSelectedBrand("all"),
                  setSpecQuery(""),
                  setSelectedAvailability("all")


                }}
              >
                Clear All
              </Button>
            </div>
          </div>

                </div>;
              </div>;

              <Button
                variant='outline'
                className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                onClick={() => {;
                  logInfo('Clearing filters');
                  setSearchQuery('');
                  clearCategories();
                  setCurrentPriceFilter([0, priceRange && priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand('all');
                  setSpecQuery('');
                  setSelectedAvailability('all');
                }}
    <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
      <div className='container mx - auto'>;
        <div className='text - center mb - 12'>;
          <GradientHeading>{title}</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto'>;
            {description}
          </p>;
        </div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 6'>;
          <div className='lg:col - span - 1'>;
            <div className='bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6'>;
              <h3 className='text - lg font - medium text - white mb - 4 flex items - center'>;
                <Filter className='mr - 2 h - 5 w - 5' /> Filters;
              </h3>;
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Categories;
                </label>;
                <div className='space - y-2'>;
                  {category_filters.map (filter => (
                    <div key={filter.value} className='flex items - center'>;
                      <Checkbox;
                        id={`cat-${filter.value}`}
                        checked={selected_categories.includes (filter.value)}
                        onCheckedChange={() => toggle_category (filter.value)}
                        className='border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple'                      />;
                      <label;
                        html_for={`cat-${filter.value}`}
                        className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
                      >;
                        {filter.label}
                      </label>;
                    </div>))}
                </div>;
              </div>;
              {brand_options.length > 0 && (
                <div className='mb - 6'>;
                  <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                    Brand;
                  </label>;
                  <Select;
                    value = {selected_brand, }
                    onValueChange = {(value: string, ) => setSelectedBrand (value), }
                  >;
                    <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Select Brand' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='all' className='text - white'>;
                        All Brands;
                      </SelectItem>;
                      {brand_options.map (boolean => (
                        <SelectItem;
                          key={b || 'unknown - brand'}
                          value={b || ''}
                          className='text - white';
                        >                          {b || 'N / A'}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </div>)}
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Specifications;
                </label>;
                <Input;
                  type='text';
                  placeholder='Search specifications...';
                  value={spec_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                    setSpecQuery (e.target.value);
                  }
                  className='bg - zion - blue border border - zion - blue - light text - white'                />;
              </div>;
              {availability_options.length > 0 && (
                <div className='mb - 6'>;
                  <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                    Availability;
                  </label>;
                  <Select;
                    value = {selected_availability, }
                    onValueChange = {(value: string, ) =>;
                      setSelectedAvailability (value);
                    , }
                  >;
                    <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                      <SelectValue placeholder='Select Availability' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;
                      <SelectItem value='all' className='text - white'>;
                        All;
                      </SelectItem>;
                      {availability_options.map (array => (
                        <SelectItem;
                          key={a || 'unknown - availability'}
                          value={a || ''}
                          className='text - white';
                        >                          {a || 'N / A'}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </div>)}
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Price Range;
                </label>;
                <div className='mt - 6 px - 2'>;
                  <Slider;
                    aria - label='Price range';
                    default_value={[0, price_range.max]}
                    min={0}
                    max={price_range.max}
                    step={price_range.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className='mb - 4'                  />;
                  <div className='flex justify - between text - sm text - zion - slate - light'>;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
              </div>;
              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                  Minimum Rating;
                </label>;
                <div className='flex flex - wrap gap - 2'>;
                  {[null, 3, 4, 5].map (rating => (
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant='outline';
                      size='sm';
                      on_click={() => {
                        log_info ('Rating selected:', { data: rating });
                        setSelectedRating (rating) }}
                      aria - pressed = {selected_rating === rating, }
                      className={`{
                        selected_rating === rating;
                          ? "bg - zion - purple / 30 border - zion - purple text - zion - purple";
                          : "border - zion - blue - light text - zion - slate - light";
                      } focus - visible:ring - zion - purple`}
                    >;
                      {rating === null ? (
                        'Any') : (
                        <div className='flex items - center'>;
                          {[...Array (rating)].map ((_, i) => (
                            <Star;
                              key={i}
                              className='h - 3 w - 3 fill - zion - cyan text - zion - cyan'                            />))}
                          <span className='ml - 1'>& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;
                variant='outline';
                className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                on_click={() => {
                  log_info ('Clearing filters');
                  setSearchQuery ('');
                  clear_categories ();
                  setCurrentPriceFilter ([0, price_range.max]);
                  setSelectedRating (null);
                  setSelectedBrand ('all');
                  setSpecQuery ('');
                  setSelectedAvailability ('all');
                }}



          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search listings..."
                </div>;
              </div>;
              <Button;
                variant="outline";
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
                onClick={() => {;
                  logInfo("Clearing filters"),;
                  setSearchQuery(""),;
                  clearCategories(),;
                  setCurrentPriceFilter([0, priceRange.max]),;
                  setSelectedRating(null),;
                  setSelectedBrand("all"),;
                  setSpecQuery(""),;
                  setSelectedAvailability("all");
                }}
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;

          <div className="lg:col-span-3">;
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">;
              <div className="flex flex-col md:flex-row gap-4">;
                <div className="relative flex-grow">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Input;
                    type="text";
                    placeholder="Search listings...";
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {;
                      logInfo('Search query:', { data: e.target.value }),;
                      setSearchQuery(e.target.value);
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>

                <div className="flex items-center gap-2 ml-auto">


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
                    variant='outline'
                    size='icon'
                    onClick={() => setView(isGrid ? 'list' : 'grid')}
                    aria-label={isGrid ? 'List view' : 'Grid view'}
                    title={isGrid ? 'List view' : 'Grid view'}
                    className='border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple'                  >
                    variant="outline"
                    size="icon"
                    onClick={() => setView(isGrid ? "list" : "grid")}
                    aria-label={isGrid ? "List view" : "Grid view"}
                    title={isGrid ? "List view" : "Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple"
                  >


                    {ToggleViewIcon}
                    <span className="sr-only">
                      {isGrid ? "List view" : "Grid view"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='mb-6'>
              <p className='text-zion-slate-light'>

            <div className="mb-6">
              <p className="text-zion-slate-light">


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
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"


                }
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className='rounded-lg overflow-hidden border border-zion-blue-light'                  >
                    <Skeleton height={192} width='100%' />
                    <div className='p-4'>
                      <Skeleton height={24} width='33%' className='mb-2' />
                      <Skeleton height={32} width='83%' className='mb-4' />
                      <Skeleton height={16} width='100%' className='mb-2' />
                      <Skeleton height={16} width='80%' className='mb-4' />
                      <div className='flex justify-between items-center pt-4'>
                        <Skeleton height={24} width='25%' />
                        <Skeleton height={32} width='25%' />
                    className="rounded-lg overflow-hidden border border-zion-blue-light"
                  >
                    <Skeleton height={192} width="100%" />
                    <div className="p-4">
                      <Skeleton height={24} width="33%" className="mb-2" />
                      <Skeleton height={32} width="83%" className="mb-4" />
                      <Skeleton height={16} width="100%" className="mb-2" />
                      <Skeleton height={16} width="80%" className="mb-4" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton height={24} width="25%" />
                        <Skeleton height={32} width="25%" />

                      </div>
                    </div>
                  </div>
                ))}
              </div>;
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                }
              >
                {filteredListings.map(listing => (                  <ProductListingCard
                    key = {listing.id,}
                    listing = {listing,}
                    view = {view,}
                    onRequestQuote = {handleRequestQuote,}
                    detailBasePath = {detailBasePath,}
                  />
                  view === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"
                }
              >;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;


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
                    clearCategories(),
                    setCurrentPriceFilter([0, priceRange.max]),
                    setSelectedRating(null),
                    setSelectedBrand("all"),
                    setSpecQuery(""),
                    setSelectedAvailability("all")
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"



                >
                  Clear All
                </Button>
              </div>
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );

};
if (typeof window !== 'undefined') {';
  sessionStorage && sessionStorage.setItem ('quoteRequestData', JSON && JSON.stringify (quoteData) ) ;

}, 500) ;
};";
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {;
  filter && filter.label ;
}</label> </div>) ) ;
}</div> </div> Brand </label> <Selectvalue= {
  selectedBrand 
}onValueChange= {
  (value: string) => setSelectedBrand (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Selectvalue= {
  selectedAvailability 
}onValueChange= {
  (value: string) => setSelectedAvailability (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label> ;

}aria-pressed= {;
  selectedRating === rating ;
}className= {;
  ` {;
  selectedRating === rating <Starkey= {
  i "
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ";
}<span className="ml-1" >& Up</span> </div>) ;
}</Button>) ) ;
}</div> </div> <ButtonclearCategories ()
setCurrentPriceFilter ([0, priceRange && priceRange.max])
setSelectedRating (null)"> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input
}"
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {;
  isLoading ? (<divclassName= {> {;
  [1, 2,  3, 4].map ( (i) => (<divkey= {
  i "
}className="rounded-lg overflow-hidden border border-zion-blue-light"> </div> </div> </div>) ) ;
}</div> > {;
  filteredListings && filteredListings.map ( (listing) => (<ProductListingCardkey= {
  listing && listing.id 
                  </div>))}
              </div>) : filtered_listings.length > 0 ? (
              <div;
                className={
                  view === 'grid';
                    ? 'grid grid - cols - 1 md:grid - cols - 2 gap - 6';
                    : 'flex flex - col gap - 6';
                }
              >;
                {filtered_listings.map (listing => (                  <ProductListingCard;
                    key = {listing.id, }
                    listing = {listing, }
                    view = {view, }
                    onRequestQuote = {handleRequestQuote, }
                    detailBasePath = {detailBasePath, }
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
                    clear_categories ();
                    setCurrentPriceFilter ([0, price_range.max]);
                    setSelectedRating (null);
                    setSelectedBrand ('all');
                    setSpecQuery ('');
                    setSelectedAvailability ('all') }}
                  className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                >;
                  Clear All;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </div>);
}
// Check condition
if ( {') {
  $2
}
  session_storage.set_item ('quoteRequestData', JSON.stringify (quote_data) );
}, 500);
}";
return (</p> </div> <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6" > <div className="lg:col - span - 1" > <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6" > <h3 className="text - lg font - medium text - white mb - 4 flex items - center" > <Filter className="mr - 2 h - 5 w - 5" /> Filters </h3> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Categories </label> > {
  filter.label;
}</label> </div>) );
}</div> </div> Brand </label> <Select value= {
  selected_brand;
}onValueChange= {
  (value: string) => setSelectedBrand (value) ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All Brands </SelectItem> </SelectItem>) );
}</SelectContent> </Select> </div>) ";
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Specifications </label> <Input Availability </label> <Select value= {
  selected_availability;
}onValueChange= {
  (value: string) => setSelectedAvailability (value) ";
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All </SelectItem> </SelectItem>) );
}</SelectContent> </Select> </div>) ";
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Price Range </label> <div className="mt - 6 px - 2" > <Slider </div> </div> </div> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Minimum Rating </label>;
}aria - pressed= {
  selected_rating === rating;
}className= {
  ` {
  selected_rating === rating <Star key= {
  i ";
}className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />) ) ";
}<span className="ml - 1" >& Up</span> </div>);
}</Button>) );
}</div> </div> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);";
> Clear All </Button> </div> </div> <div className="lg:col - span - 3" > <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light" > <div className="flex flex - col md:flex - row gap - 4" > <div className="relative flex - grow" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input;
}";
}className="pl - 10 bg - zion - blue border border - zion - blue - light text - white" /> </div> </SelectTrigger> <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="newest" className="text - white" >Newest</SelectItem> <SelectItem value="price - asc" className="text - white" >Price: Low to High</SelectItem> <SelectItem value="price - desc" className="text - white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text - white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {
  is_loading ? (<div className= {
  > {
  [1, 2,  3, 4].map ( (i) => (<div key= {
  i ";
}className="rounded - lg overflow - hidden border border - zion - blue - light" > </div> </div> </div>) );
}</div> > {
  filtered_listings.map ( (listing) => (<ProductListingCard key= {
  listing.id;

}listing= {
  listing;
}view= {
  view;
}onRequestQuote= {
  handleRequestQuote;
}detailBasePath= {

if (typeof window !== 'undefined') {'
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) )
}, 500)
};"
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {
  filter.label
}</label> </div>) )
}</div> </div> Brand </label> <Select value= {
  selectedBrand
}onValueChange= {
  (value: string) => setSelectedBrand (value) "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) )
}</SelectContent> </Select> </div>) "
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Select value= {
  selectedAvailability
}onValueChange= {
  (value: string) => setSelectedAvailability (value) "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) )
}</SelectContent> </Select> </div>) "
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label>
}aria-pressed= {
  selectedRating === rating
}className= {
  ` {
  selectedRating === rating <Star key= {
  i "
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) "
}<span className="ml-1" >& Up</span> </div>)
}</Button>) )
}</div> </div> <Button clearCategories ()
setCurrentPriceFilter ([0, priceRange.max])
setSelectedRating (null);"
> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input
}"
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {
  isLoading ? (<div className= {
  > {
  [1, 2,  3, 4].map ( (i) => (<div key= {
  i "
}className="rounded-lg overflow-hidden border border-zion-blue-light" > </div> </div> </div>) )
}</div> > {
  filteredListings.map ( (listing) => (<ProductListingCard key= {
  listing.id
}listing= {
  listing
}view= {
  view
}onRequestQuote= {
  handleRequestQuote
}detailBasePath= {
  detailBasePath
}/>) ) "
}</div> No listings found </h3> <p className="text-zion-slate-light mb-6" > Try adjusting your filters or search query </p> <Button clearCategories ()
setCurrentPriceFilter ([0, priceRange.max])
setSelectedRating (null)
> Clear All </Button> </div>)
}</div> </div> </div> </div>)
}'"  )
}



;

  detailBasePath;
}/>) ) ";
}</div> No listings found </h3> <p className="text - zion - slate - light mb - 6" > Try adjusting your filters or search query </p> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);
> Clear All </Button> </div>);
}</div> </div> </div> </div>);
}'"  );
}

;