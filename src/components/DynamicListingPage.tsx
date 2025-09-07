export function DynamicListingPage({

  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },
)
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]


  },
  const clearCategories = () => setSelectedCategories([]),
  const [view, setView] = useState<ListingView>("grid"),"
"
    <List className='h-4 w-4' />

  const [selected_categories, setSelectedCategories] = useState < string[]>([]);
  const toggle_category = (category: string) =>: any {    setSelectedCategories (prev =>;)
      prev.includes (category);
        ? prev.filter (c => c !== category);
        : [...prev, category]);
  }
  const clear_categories = () =>: any setSelectedCategories ([]);
  const [view, set_view] = useState < ListingView>('grid');
  const is_grid = view === 'grid';
  // Swap icons to match action;
  const ToggleViewIcon = is_grid ? ()
    <List className='h - 4 w - 4' />) : (
    <LayoutGrid className='h - 4 w - 4' />);

  const [price_range, setPriceRange] = useState < PriceRange>({
    min: 0,
    max: 10000,)
  });
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
  const [selected_brand, setSelectedBrand] = useState ('all');
  const [spec_query, setSpecQuery] = useState ();
  const [selected_availability, setSelectedAvailability] = useState ('all');
  const [sort_option, setSortOption] = useState ('newest');
  const brand_options = Array.from ()
    new Set (all_listings.map (l => l.brand).filter (Boolean)));
  const availability_options = Array.from ()
    new Set (all_listings.map (l => l.availability).filter (Boolean)));
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {
  $2;
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min: 0, max });
      setCurrentPriceFilter ([0, max]) }
  }, [all_listings]);
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initial_price.max]);
  const handleSliderChange = (values: number[]) =>: any {
  // TODO: Implement
    const [min, max] = values.map (Number);
    if (|| isNaN (max)) return) {
    setCurrentPriceFilter ([min, max]);
  let filtered_listings: ProductListing[] = [];
  try {
  // TODO: Implement
    filteredListings = allListings.filter(listing => {      const matchesSearch = null;

    <LayoutGrid className="h-4 w-4" />"

  const [priceRange, setPriceRange] = useState<PriceRange>({
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
</number>
  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]),

  const handleSliderChange = (values: number[]) => {
    const [min, max] = values.map(Number),
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,
    setCurrentPriceFilter([min, max])

  let filteredListings: ProductListing[] = [],
  // TODO: Implement
    filteredListings = allListings.filter((listing) => {
      const matchesSearch =



        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&)
          listing.tags.some((tag: string) =>


      const matchesSpecs =
        !specQuery |
        (listing.specifications &&
          listing.specifications.some((s) =>
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||
          listing.tags.some((tag) =>
            tag.toLowerCase().includes(specQuery.toLowerCase()))),

      const matchesAvailability ="
        selectedAvailability === "all" ||"
        (listing.availability && listing.availability === selectedAvailability),

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category),


      const matchesPrice =
        listing.price === null |
        (listing.price >= currentPriceFilter[0] &&
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
        matchesAvailability;)

    filtered_listings = all_listings.filter (listing => {      const matches_search =;
        !search_query ||;)
        listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        (listing.tags &&;)
          listing.tags.some ((tag: string) =>;
            tag.toLowerCase ().includes (search_query.toLowerCase ())));
      const matches_brand =;"
        selected_brand === 'all' ||;
        (listing.brand && listing.brand === selected_brand);
      const matches_specs =;
        !spec_query ||;
        (listing.specifications &&;
          listing.specifications.some (string =>;)
            s.toLowerCase ().includes (spec_query.toLowerCase ()))) ||;
        (listing.tags &&;
          listing.tags.some (tag =>;)
            tag.toLowerCase ().includes (spec_query.toLowerCase ())));
      const matches_availability =;
        selected_availability === 'all' ||;
        (listing.availability && listing.availability === selected_availability);
      const matches_category =;
        selected_categories.length === 0 ||;
        selected_categories.includes (listing.category);
      const matches_price =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;)
          listing.price <= currentPriceFilter[1]);
      const matches_rating =;
        selected_rating === null ||;
        (listing.rating !== undefined && listing.rating >= selected_rating),
        matches_search &&;
        matches_category &&;
        matches_price &&;
        matches_rating &&;
        matches_brand &&;
        matches_specs &&;)
        matches_availability);
    filtered_listings.sort ((a, b) => {      switch (sort_option) {
        case 'price - asc':;
          return (a.price || 0) - (b.price || 0);
        case 'price - desc':;
          return (b.price || 0) - (a.price || 0);
        case 'rating':;
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':;
        default:;

          return ()
            new Date (b.created_at).get_time () - new Date (a.created_at).get_time ());
  } catch (error) {
    capture_exception (error);
    logErrorToProduction ('Listing filter error:', { data: error });



  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {;


      setIsLoading(false);      if (listing) {
        toast({
          title: 'Quote Requested,
  description: `Your quote request for ${listing.title} has been sent.`)
        })
        // Store quote data in sessionStorage for the request-quote page;
        const quoteData = {
          serviceType: categorySlug;,
  specificItem: {
            id: listing.id;,
  title: listing.title;
            category: listing.category;,
  image: listing.images?.[0]
  const handleRequestQuote = (listing_id: string) =>: any {
  // TODO: Implement
    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);
    set_timeout (() => {
      setIsLoading (false);      // Check condition;
        toast ({
          title: 'Quote Requested',`;
          description: `Your quote request for ${listing.title} has been sent.`,)
        // Store quote data in session_storage for the request - quote page;
        const quote_data = {
          service_type: category_slug,
          specific_item: {,
  id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
        // Check condition;
          session_storage.set_item ('quoteRequestData', JSON.stringify (quote_data));


import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GradientHeading } from '@/components/GradientHeading';
import { ProductListingCard } from '@/components/ProductListingCard';
import { Button } from '@/components/ui/button';
import { Input, useRouter } from 'lucide-react';
import { GradientHeading } from "@/components/GradientHeading";""
import { ProductListingCard } from "@/components/ProductListingCard";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
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
  min: number;,
  max: number ;
}interface DynamicListingPageProps {;
  title: string;,
  description: string;
categorySlug: string;,
  listings: ProductListing[];
categoryFilters: {;,
  label: string, value: string ;
}[];
initialPrice?: PriceRange;
}const toggleCategory = (category: string) => {;
  setSelectedCategories (prev => prev && prev.includes (category) ? prev && prev.filter (c => c !== category) : [...prev, category] min: 0;,
  max: 10000 ;

export function DynamicListingPage(): any ({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
  initialPrice = { min: 0, max: 10000 },;
  detailBasePath = '/marketplace/listing',;')
}: DynamicListingPageProps) {;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
</string>
  const [view, setView] = useState<ListingView>('grid');

    <List className='h-4 w-4' />;

    <LayoutGrid className='h-4 w-4' />;

  const [priceRange, setPriceRange] = useState<PriceRange>({;
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  >([0, initialPrice && initialPrice.max]);

  const handleSliderChange = (values: number[]) => {;
    const [min, max] = values && values.map(Number);
    if (min == null || max == null || isNaN(min) || isNaN(max)) return;
    setCurrentPriceFilter([min, max]);
  };
  let filteredListings: ProductListing[] = [];
  try {;
    filteredListings = allListings && allListings.filter(listing => {      const matchesSearch =;
        !searchQuery ||;)
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        (listing && listing.tags &&;)
          listing && listing.tags.some((tag: string) =>;
            tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          ));
      const matchesBrand =;
        selectedBrand === 'all' ||;
        (listing && listing.brand && listing && listing.brand === selectedBrand);

      const matchesSpecs =;
        !specQuery ||;
        (listing && listing.specifications &&;
          listing && listing.specifications.some(s =>;)
            s && s.toLowerCase().includes(specQuery && specQuery.toLowerCase());
          )) ||;
        (listing && listing.tags &&;
          listing && listing.tags.some(tag =>;)
            tag && tag.toLowerCase().includes(specQuery && specQuery.toLowerCase());
      const matchesAvailability =;
        selectedAvailability === 'all' ||;
        (listing && listing.availability && listing && listing.availability === selectedAvailability);

      const matchesCategory =;
        selectedCategories && selectedCategories.length === 0 ||;
        selectedCategories && selectedCategories.includes(listing && listing.category);

      const matchesPrice =;
        listing && listing.price === null ||;
        (listing && listing.price >= currentPriceFilter[0] &&;)
          listing && listing.price <= currentPriceFilter[1]);

      const matchesRating =;
        selectedRating === null ||;
        (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating),;

        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
      );
    filteredListings && filteredListings.sort((a, b) => {      switch (sortOption) {;
        case 'price-asc':;
          return (a && a.price || 0) - (b && b.price || 0);
        case 'price-desc':;
          return (b && b.price || 0) - (a && a.price || 0);
          return (b && b.rating || 0) - (a && a.rating || 0);
            new Date(b && b.createdAt).getTime() - new Date(a && a.createdAt).getTime();
  } catch (error) {;
    captureException(error);
    logErrorToProduction('Listing filter error:', { data: error });


    const listing = allListings && allListings.find(item => item && item.id === listingId);

      setIsLoading(false);      if (listing) {;
        toast({;
          title: 'Quote Requested',;`;
          description: `Your quote request for ${listing && listing.title} has been sent.`,;)


        router.push ('/request - quote');
    }, 500);


        // Store quote data in sessionStorage for the request-quote page;





        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">"
</div>"
          <div className="lg:col-span-1">"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">"
</h3>"
                <Filter className="mr-2 h-5 w-5" /> Filters;"

              </h3>
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">"
</label>
                </label>"
                <div className='space-y-2'>
</div>
                    <div key={filter.value} className="flex items-center">"
                      <Checkbox;`;
                        id={`cat-${filter.value}`})
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}

                      <label;`;
                        htmlFor={`cat-${filter.value}`}"
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer""
                      >
    <div className="min-h-screen bg-zion-blue py-12 px-4">;"
      <div className="container mx-auto">;"
        <div className="text-center mb-12">;"
          <GradientHeading>{title};"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>;
          <div className='lg:col-span-1'>;
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>;
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>;
                <Filter className='mr-2 h-5 w-5' /> Filters;

              </h3>;
              <div className='mb-6'>;
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>;
                </label>;
                <div className="space-y-2">;"
                    <div key={filter.value} className="flex items-center">;"
                        id={`cat-${filter.value}`}

                        className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
                      >;
                </div>;
                  <Select;
                          key={b || 'unknown-brand'}
                          value={b || }
                          className='text-white'>                          {b || 'N/A'}

                        ;
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                      <SelectValue placeholder="Select Brand" />"

                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                      <SelectItem value="all" className="text-white">"

                        <SelectItem key={b || 'unknown-brand'} value={b || } className="text-white">"

                <Input;
                  value={specQuery}
                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;

                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                          key={a || 'unknown-availability'}
                          value={a || }
                          className='text-white'>                          {a || 'N/A'}

                      <SelectValue placeholder="Select Availability" />"


                        <SelectItem key={a || 'unknown-availability'} value={a || } className="text-white">"

                <div className='mt-6 px-2'>
                <div className='mt-6 px-2'>;
                  <Slider;
                    aria-label="Price range""
                    defaultValue={[0, priceRange.max]}
                    min={0}
                    max={priceRange && priceRange.max}
                    step={priceRange && priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}

                    className="mb-4""
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">"
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  <div className='flex justify-between text-sm text-zion-slate-light'>;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                <div className='flex flex-wrap gap-2'>;
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant='outline
                      size='sm
                      onClick={() => {;

                        <div className='flex items-center'>;
                            <Star;
                              key={i}
                              className='h-3 w-3 fill-zion-cyan text-zion-cyan'                            />;

                <div className="flex flex-wrap gap-2">"
                    <Button;"
                      key={rating === null ? "any" : rating}""
                      variant="outline"""
                      size="sm""
                      onClick={() => {
                        <div className="flex items-center">"
                              key={i}"
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan""
                          <span className='ml-1'>& Up</span>;
              

                className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10

    <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
      <div className='container mx - auto'>;
        <div className='text - center mb - 12'>;
          <GradientHeading>{title};
          <p className='mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto'>;
        <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 6'>;
          <div className='lg:col - span - 1'>;
            <div className='bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6'>;
              <h3 className='text - lg font - medium text - white mb - 4 flex items - center'>;
                <Filter className='mr - 2 h - 5 w - 5' /> Filters;

              <div className='mb - 6'>;
                <label className='text - sm font - medium text - zion - slate - light block mb - 2'>;
                <div className='space - y-2'>;
                    <div key={filter.value} className='flex items - center'>;
                        checked={selected_categories.includes (filter.value)}
                        onCheckedChange={() => toggle_category (filter.value)}

                        html_for={`cat-${filter.value}`}
                        className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
                    </div>))}
                    value = {selected_brand, }
                    onValueChange = {(value: string, ) => setSelectedBrand (value), }

                    <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;

                      <SelectValue placeholder='Select Brand' />;

                    <SelectContent className='bg - zion - blue - dark border border - zion - blue - light'>;

                      <SelectItem value='all' className='text - white'>;

                        <SelectItem;
                          key={b || 'unknown - brand'}
                          className='text - white';
                        >                          {b || 'N / A'}

                        ))}
                </div>)}
                  type='text';
                  placeholder='Search specifications...';
                  value={spec_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;

                    value = {selected_availability, }
                    onValueChange = {(value: string, ) =>;


                      <SelectValue placeholder='Select Availability' />;



                          key={a || 'unknown - availability'}
                        >                          {a || 'N / A'}

                <div className='mt - 6 px - 2'>;
                    aria - label='Price range';
                    default_value={[0, price_range.max]}
                    max={price_range.max}
                    step={price_range.max / 100}
                    className='mb - 4'                  />;

                  <div className='flex justify - between text - sm text - zion - slate - light'>;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                <div className='flex flex - wrap gap - 2'>;
                      variant='outline';
                      size='sm';
                      on_click={() => {

                        <div className='flex items - center'>;
                              className='h - 3 w - 3 fill - zion - cyan text - zion - cyan'                            />))}

                          <span className='ml - 1'>& Up</span>;
                className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';

          <div className="lg:col-span-3">"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">"
              <div className="flex flex-col md:flex-row gap-4">"
                <div className="relative flex-grow">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"

                  <Input;"
                    type="text"""
                    placeholder="Search listings...""

                variant="outline";""
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";"

          <div className="lg:col-span-3">;"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">;"
              <div className="flex flex-col md:flex-row gap-4">;"
                <div className="relative flex-grow">;"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                    type="text";""
                    placeholder="Search listings...";"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {;

                <div className="flex items-center gap-2 ml-auto">"
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>

                      <SelectValue placeholder='Sort' />

                    
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>

                      <SelectItem value='newest' className='text-white'>

                      
                      <SelectItem value='price-asc' className='text-white'>

                      
                      <SelectItem value='price-desc' className='text-white'>

                      
                      <SelectItem value='rating' className='text-white'>

                      
                    
                  

                    onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => {;

                <div className='flex items-center gap-2 ml-auto'>;
                  <Select value={sortOption} onValueChange={setSortOption}>;

                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>;

                      <SelectValue placeholder='Sort' />;

                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;

                      <SelectItem value='newest' className='text-white'>;

                      <SelectItem value='price-asc' className='text-white'>;

                      <SelectItem value='price-desc' className='text-white'>;

                      <SelectItem value='rating' className='text-white'>;

          <div className='lg:col - span - 3'>;
            <div className='bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light'>;
              <div className='flex flex - col md:flex - row gap - 4'>;
                <div className='relative flex - grow'>;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;

                    placeholder='Search listings...';
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {

                <div className='flex items - center gap - 2 ml - auto'>;
                  <Select value={sort_option} onValueChange={setSortOption}>;

                    <SelectTrigger className='w-[150px] bg - zion - blue border border - zion - blue - light text - white'>;



                      <SelectItem value='newest' className='text - white'>;

                      <SelectItem value='price - asc' className='text - white'>;

                      <SelectItem value='price - desc' className='text - white'>;

                      <SelectItem value='rating' className='text - white'>;

                    size="icon"""
                    onClick={() => setView(isGrid ? "list" : "grid")}"
                    <span className='sr-only'>;
</span>
              <p className="text-zion-slate-light">"
                    size='icon';
                    on_click={() => set_view (is_grid ? 'list' : 'grid')}

                    <span className='sr - only'>;
                    </span>;
              <p className='text - zion - slate - light'>;
              <div;
                className={
                  view === 'grid';
                    ? 'grid grid - cols - 1 md:grid - cols - 2 gap - 6';
                    : 'flex flex - col gap - 6';
                    className='rounded - lg overflow - hidden border border - zion - blue - light'                  >;
                    <Skeleton height={192} width='100%' />;

                    <div className='p - 4'>;
                      <Skeleton height={24} width='33%' className='mb - 2' />;

                      <Skeleton height={32} width='83%' className='mb - 4' />;

                      <Skeleton height={16} width='100%' className='mb - 2' />;

                      <Skeleton height={16} width='80%' className='mb - 4' />;

                      <div className='flex justify - between items - center pt - 4'>;
                        <Skeleton height={24} width='25%' />;

                        <Skeleton height={32} width='25%' />;


                    className="rounded-lg overflow-hidden border border-zion-blue-light""
                    <Skeleton height={192} width="100%" />"
                    <div className="p-4">"
                      <Skeleton height={24} width="33%" className="mb-2" />"
                      <Skeleton height={32} width="83%" className="mb-4" />"
                      <Skeleton height={16} width="100%" className="mb-2" />"
                      <Skeleton height={16} width="80%" className="mb-4" />"
                      <div className="flex justify-between items-center pt-4">"
                        <Skeleton height={24} width="25%" />"
                        <Skeleton height={32} width="25%" />"


                  view === "grid"""
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"""
                    : "flex flex-col gap-6""
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;

              <div className='text-center py-20'>;
                <h3 className='text-xl font-bold text-white mb-2'>;
                <p className='text-zion-slate-light mb-6'>;
                  variant="outline""

                
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {;"
</div>)
}</label> </div>) ) ;
}</div> </div> Brand </label> <Selectvalue= {
  selectedBrand;
}onValueChange= {"
  (value: string) => setSelectedBrand (value) ";"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" />  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands  ) ) ;""
}  </div>) ";""
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Selectvalue= {"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" />  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All  ) ) ;""
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label> ;"
  selectedRating === rating <Starkey= {"
  i """
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ";"
}<span className="ml-1" >& Up</span> </div>) ;"
}) ) ;
}</div> </div> <ButtonclearCategories ()
setCurrentPriceFilter ([0, priceRange && priceRange.max])"
setSelectedRating (null)"> Clear All  </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input;"
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div>  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest <SelectItem value="price-asc" className="text-white" >Price: Low to High <SelectItem value="price-desc" className="text-white" >Price: High to Low <SelectItem value="rating" className="text-white" >Highest Rating   <Button </span>  </div> </div> </div> </p> </div> {;"
  isLoading ? (<divclassName= {> {;
</divclassName>)
  [1, 2,  3, 4].map ( (i) => (<divkey= {"
  i "")"
}className="rounded-lg overflow-hidden border border-zion-blue-light"> </div> </div> </div>) ) ;"
</divkey>
}</div> > {;
  filteredListings && filteredListings.map ( (listing) => (<ProductListingCardkey= {
  listing && listing.id;)

              </div>) : filtered_listings.length > 0 ? (
                className={"
                {filtered_listings.map (listing => (                  <ProductListingCard;
                    key = {listing.id, }
                    listing = {listing, }
                    view = {view, }
                    onRequestQuote = {handleRequestQuote, }
                    detailBasePath = {detailBasePath, })
                  />))}

              </div>) : (
              <div className='text - center py - 20'>;
                <h3 className='text - xl font - bold text - white mb - 2'>;
                <p className='text - zion - slate - light mb - 6'>;
                  variant='outline';')

    </div>);
return (</p> </div> <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6" > <div className="lg:col - span - 1" > <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6" > <h3 className="text - lg font - medium text - white mb - 4 flex items - center" > <Filter className="mr - 2 h - 5 w - 5" /> Filters </h3> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Categories </label> > {"
}</label> </div>) );
}</div> </div> Brand </label> <Select value= {
  selected_brand;
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Brand" />  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All Brands  ) );""
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Specifications </label> <Input Availability </label> <Select value= {"
}> <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white" > <SelectValue placeholder="Select Availability" />  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="all" className="text - white" > All  ) );""
}<div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Price Range </label> <div className="mt - 6 px - 2" > <Slider </div> </div> </div> <div className="mb - 6" > <label className="text - sm font - medium text - zion - slate - light block mb - 2" > Minimum Rating </label>;"
  selected_rating === rating <Star key= {"
  i ";""
}className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />) ) ";"
}<span className="ml - 1" >& Up</span> </div>);"
}) );
}</div> </div> <Button clear_categories ();
setCurrentPriceFilter ([0, price_range.max]);"
setSelectedRating (null);";""
> Clear All  </div> </div> <div className="lg:col - span - 3" > <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light" > <div className="flex flex - col md:flex - row gap - 4" > <div className="relative flex - grow" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input;""
}";""
}className="pl - 10 bg - zion - blue border border - zion - blue - light text - white" /> </div>  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light" > <SelectItem value="newest" className="text - white" >Newest <SelectItem value="price - asc" className="text - white" >Price: Low to High <SelectItem value="price - desc" className="text - white" >Price: High to Low <SelectItem value="rating" className="text - white" >Highest Rating   <Button </span>  </div> </div> </div> </p> </div> {"
  is_loading ? (<div className= {
  > {
  [1, 2,  3, 4].map ( (i) => (<div key= {"
  i ";")"
}className="rounded - lg overflow - hidden border border - zion - blue - light" > </div> </div> </div>) );"
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
)"
if (typeof window !== 'undefined') {
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) )
}, 500)
};"""
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {"
}</label> </div>) )
  (value: string) => setSelectedBrand (value) ""
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" />  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands  ) )""
}  </div>) """
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Select value= {"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" />  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All  ) )""
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label>"
  selectedRating === rating <Star key= {"
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ""
}<span className="ml-1" >& Up</span> </div>)"
}) )
}</div> </div> <Button clearCategories ()
setCurrentPriceFilter ([0, priceRange.max])"
setSelectedRating (null);"""
> Clear All  </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input;""
}"""
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div>  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest <SelectItem value="price-asc" className="text-white" >Price: Low to High <SelectItem value="price-desc" className="text-white" >Price: High to Low <SelectItem value="rating" className="text-white" >Highest Rating   <Button </span>  </div> </div> </div> </p> </div> {"
  isLoading ? (<div className= {
}className="rounded-lg overflow-hidden border border-zion-blue-light" > </div> </div> </div>) )"
  filteredListings.map ( (listing) => (<ProductListingCard key= {
  detailBasePath;)"
}/>) ) ""
}</div> No listings found </h3> <p className="text-zion-slate-light mb-6" > Try adjusting your filters or search query </p> <Button clearCategories ()"
setCurrentPriceFilter ([0, priceRange.max])
setSelectedRating (null)
> Clear All  </div>)
}</div> </div> </div> </div>)"
}</div> No listings found </h3> <p className="text - zion - slate - light mb - 6" > Try adjusting your filters or search query </p> <Button clear_categories ();"
setCurrentPriceFilter ([0, price_range.max]);
setSelectedRating (null);
> Clear All  </div>);
}</div> </div> </div> </div>);"`;