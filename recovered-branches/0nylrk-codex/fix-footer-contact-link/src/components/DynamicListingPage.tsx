<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {GradientHeading} from "@/components/GradientHeading";
import {ProductListingCard} from "@/components/ProductListingCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import {Skeleton} from "@/components/ui/skeleton";
import {Slider} from "@/components/ui/slider";
import {ProductListing, ListingView} from "@/types/listings";
import {Search, Filter, LayoutGrid, List, Star} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();
interface PriceRange {
  min: number,
  max: number
}

interface DynamicListingPageProps {
  title: string,
  description: string,
  categorySlug: string,
  listings: ProductListing[],
  categoryFilters: { label: string, value: string }[],
  initialPrice?: PriceRange
}

export function DynamicListingPage({;
  title;
  description;
  categorySlug;
  listings: allListings,
  categoryFilters;
import { useState, useEffect } from "react",
import { useNavigate } from "react-router-dom",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { Skeleton } from "@/components/ui/skeleton",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
interface PriceRange {

  min: number

  max: number
}
interface DynamicListingPageProps {

  title: string
  description: string
  categorySlug: string
  listings: ProductListing[]
  categoryFilters: { label: string, value: string }[]

  initialPrice?: PriceRange
}
export function DynamicListingPage({
  title;
  description;
  categorySlug;

  listings: allListings
  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [view, setView] = useState<ListingView>("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react",
import { toast } from "@/hooks/use-toast",
interface PriceRange {
  min: number,
  max: number
import { useState, useEffect } from "react",;
import { useNavigate } from "react-router-dom",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Slider } from "@/components/ui/slider",;
import { ProductListing, ListingView } from "@/types/listings",;
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PriceRange {;
  min: number,;
  max: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface DynamicListingPageProps {;
  title: string,;
  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange;
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function DynamicListingPage(): any ({;
  title;
  description;
  categorySlug;
  listings: allListings,;

  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [view, setView] = useState<ListingView>("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("all"),
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),

<<<<<<< HEAD

  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {

      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {
      const min = Math.min(...listingsWithPrice.map(l => l.price |0));
      const max = Math.max(...listingsWithPrice.map(l => l.price |0));
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setPriceRange({ min, max })
    }
  }, [allListings]);
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min;
    initialPrice.max
  ]);
  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]])
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery |
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    const matchesCategory = selectedCategory === "all" |listing.category === selectedCategory;
    const matchesPrice = listing.price === null |(
      listing.price >= currentPriceFilter[0] &&
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      listing.price <= currentPriceFilter[1]
    );
    const matchesRating =
      selectedRating === null |
      (listing.rating !== undefined && listing.rating >= selectedRating);
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  });
  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {
      setIsLoading(false)
      if (listing) {
        toast({
          title: "Quote Requested"
          description: `Your quote request for ${listing.title} has been sent.`
        });
        navigate("/request-quote", {
          state: {
            serviceType: categorySlug
            specificItem: {
              id: listing.id
              title: listing.title
              category: listing.category
              image: listing.images?.[0]
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: DynamicListingPageProps) {;
  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategory, setSelectedCategory] = useState("all"),;
  const [view, setView] = useState<ListingView>("grid"),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const min = Math && Math.min(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min, max });
    }
  }, [allListings]);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initialPrice && initialPrice.min;
    initialPrice && initialPrice.max;
  ]);
<<<<<<< HEAD
<<<<<<< HEAD
  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const filteredListings = allListings && allListings.filter(listing => {;
    const matchesSearch = !searchQuery || ;
      listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
      listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      (listing && listing.tags && listing && listing.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))),;
<<<<<<< HEAD
<<<<<<< HEAD
    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;
=======

    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const matchesPrice = listing && listing.price === null || (;
      listing && listing.price >= currentPriceFilter[0] && ;
      listing && listing.price <= currentPriceFilter[1];
    );
<<<<<<< HEAD
<<<<<<< HEAD
    const matchesRating = ;
      selectedRating === null || ;
      (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating);
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);
    const listing = allListings && allListings.find(item => item && item.id === listingId);
  useEffect(() => {;
    const listingsWithPrice = allListings.filter(l => l.price !== null),;
    if (listingsWithPrice.length > 0) {;
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),;
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),;
      setPriceRange({ min, max });
    }
  }, [allListings]),;
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initialPrice.min,;
    initialPrice.max;
  ]),;
  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  },;
  const filteredListings = allListings.filter(listing => {;
    const matchesSearch = !searchQuery ||;
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),;
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,;
    const matchesPrice = listing.price === null || (;
      listing.price >= currentPriceFilter[0] &&;
      listing.price <= currentPriceFilter[1];
    ),;
    const matchesRating =;
      selectedRating === null ||;
      (listing.rating !== undefined && listing.rating >= selectedRating),;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  }),;
  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true),;
    const listing = allListings.find(item => item.id === listingId),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const matchesRating = ;
      selectedRating === null || ;
      (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);

    const listing = allListings && allListings.find(item => item && item.id === listingId);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title: "Quote Requested",;
<<<<<<< HEAD
<<<<<<< HEAD
              id: listing && listing.id,;
              title: listing && listing.title,;
              category: listing && listing.category,;
              image: listing && listing.images?.[0];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          description: `Your quote request for ${listing && listing.title} has been sent.`;
        });

        navigate("/request-quote", {;
          state: { ;
            serviceType: categorySlug, ;
            specificItem: {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from './react';
import { use_navigate } from './react-router-dom';
import { GradientHeading } from '@/components / GradientHeading';
import { ProductListingCard } from '@/components / ProductListingCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';
import { Skeleton } from '@/components / ui / skeleton';
import { Slider } from '@/components / ui / slider';
import { ProductListing, ListingView } from '@/types / listings';
import { Search, Filter, LayoutGrid, List, Star } from './lucide-react';
import { toast } from '@/hooks / use - toast';
interface PriceRange {
  min: number,
  max: number;
}
interface DynamicListingPageProps {
  title: string,
  description: string,
  category_slug: string,
  listings: ProductListing[],
  category_filters: { label: string, value: string }[],
  initial_price?: PriceRange;
}
export /**
 * DynamicListingPage - Function description
 */
function DynamicListingPage() {
  const navigate = use_navigate ();
  const [search_query, setSearchQuery] = useState ("");
  const [selected_category, setSelectedCategory] = useState ("all");
  const [view, set_view] = useState < ListingView>("grid");
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition
if ( {) {
  $2
}
      const min = Math.min (...listingsWithPrice.map (l => l.price || 0));
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min, max });
    }
  }, [all_listings]);
;
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initial_price.min;
    initial_price.max;
  ]);
;
  const handleSliderChange = (values: number[]) =>: any {
    setCurrentPriceFilter ([values[0], values[1]]);
  }
;
  const filtered_listings = all_listings.filter (listing => {
    const matches_search = !search_query ||;
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),
    const matches_category = selected_category === "all" || listing.category === selected_category;
;
    const matches_price = listing.price === null || (
      listing.price >= currentPriceFilter[0] &&;
      listing.price <= currentPriceFilter[1]);
;
    const matches_rating =;
      selected_rating === null ||;
      (listing.rating !== undefined && listing.rating >= selected_rating);
;
    return matches_search && matches_category && matches_price && matches_rating;
  });
;
  const handleRequestQuote = (listing_id: string) =>: any {
    setIsLoading (true);
;
    const listing = all_listings.find (item => item.id === listing_id);
;
    set_timeout (() => {
      setIsLoading (false),
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Quote Requested",
          description: `Your quote request for ${listing.title} has been sent.`;
        });
;
        navigate ("/request - quote", {
          state: {
            service_type: category_slug,
            specific_item: {
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0];
<<<<<<< HEAD
<<<<<<< HEAD
          description: `Your quote request for ${listing.title} has been sent.`;
        }),;
        navigate("/request-quote", {;
          state: {;
            serviceType: categorySlug,;
            specificItem: {;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              id: listing.id,;
              title: listing.title,;
              category: listing.category,;
              image: listing.images?.[0];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
          }
        });
      }
<<<<<<< HEAD

<<<<<<< HEAD

    }, 500);
  };
  return (
            }
          }
        })
      }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }, 500)
  }
  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
    }, 500);
<<<<<<< HEAD
  },;
  return (;
=======
=======


    }, 500);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={(value: string) => {
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {description}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }}
                >
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
<<<<<<< HEAD
<<<<<<< HEAD

          </p>;
        </div>;
=======


          </p>;
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          </p>;
        </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          <div className="lg:col-span-1">;
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Category;
                </label>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Select;
                  value={selectedCategory} ;
                  onValueChange={(value: string) => {;
                    // // // console.log("Category selected:", value),;
                    setSelectedCategory(value);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Select
                  value={selectedCategory} 
                  onValueChange={(value: string) => {;
                    console && console.log("Category selected:", value);
                    setSelectedCategory(value);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }}
                >;
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;
<<<<<<< HEAD
<<<<<<< HEAD
                  </SelectContent>;
                </Select>;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    {categoryFilters.map((filter) => (;
                      <SelectItem key={filter.value} value={filter.value} className="text-white">;


                        {filter.label}
                      </SelectItem>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    ))}

                  </SelectContent>;
                </Select>;
              </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Price Range;
                </label>;
                <div className="mt-6 px-2">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Slider
                    defaultValue={[priceRange && priceRange.min, priceRange && priceRange.max]}
                    min={priceRange && priceRange.min}
                    max={priceRange && priceRange.max}
                    step={(priceRange && priceRange.max - priceRange && priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD

<<<<<<< HEAD
                    {categoryFilters.map((filter) => (;
                      <SelectItem key={filter.value} value={filter.value} className="text-white">;
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD
<<<<<<< HEAD
                    className="mb-4"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    className="mb-4"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
<<<<<<< HEAD
                    className="mb-4"

  useEffect_(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0));
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0));
      setPriceRange({ min, max})
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min,
    initialPrice.max
  ]),

  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]])
  },
  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1]
    ),
    
    const matchesRating = 
      selectedRating === null || 
      (listing.rating !== undefined && listing.rating >= selectedRating),
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  }),

  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true),
    
    const listing = allListings.find(item => item.id === listingId),
    
    setTimeout(() => {
      setIsLoading(false),
      if (listing) {
        toast({
          title: &quot;Quote Requested&quot;,
          description: `Your quote request for ${listing.title} has been sent.`
        }),
        
        navigate(&quot;/request-quote", {
          state: { 
            serviceType: categorySlug,
            specificItem: {
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }          }
        })
      }
    }, 500)
  },

  return (_<div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Category
                </label>
                <Select,
value={selectedCategory} 
                  onValueChange={(value: string) => {
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)                  }}
                  value={selectedCategory} 
                  onValueChange={_(value: string) => {
                    
                    setSelectedCategory(value)}}
                >
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light&quot;>
                    <SelectItem value=&quot;all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
                        {filter.label}                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // // // console.log("Rating selected:", rating),
                        setSelectedRating(rating)
                      }}
                      className={`${
                        selectedRating === rating
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      }`}
                    >
                      {rating === null ? (
                        "Any"
                      ) : (
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />
                          ))}
                          <span className="ml-1">& Up</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    className="mb-4";

                <div className="mt-6 px-2">
                  <Slider,
defaultValue={_[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={_(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb-4";
                    className="mb-4";
=======

                    className="mb-4";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    className="mb-4";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                  <div className="flex justify-between text-sm text-zion-slate-light">;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex-wrap gap-2">;
                  {[null, 3, 4, 5].map((rating) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {;
                        console && console.log("Rating selected:", rating);
                        setSelectedRating(rating);
=======
    }, 500);
  }
;
  return (
    <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
      <div className="container mx - auto">;
        <div className="text - center mb - 12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
            {description}
          </p>;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;
          <div className="lg:col - span - 1">;
            <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6">;
              <h3 className="text - lg font - medium text - white mb - 4 flex items - center">;
                <Filter className="mr - 2 h - 5 w - 5" /> Filters;
              </h3>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Category;
                </label>;
                <Select;
                  value={selected_category}
                  onValueChange={(value: string) => {
                    console.log ("Category selected:", value);
                    setSelectedCategory (value);
                  }}
                >;
                  <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;
                  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                    <SelectItem value="all" className="text - white">All Categories</SelectItem>;
                    {category_filters.map ((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text - white">;
                        {filter.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Price Range;
                </label>;
                <div className="mt - 6 px - 2">;
                  <Slider;
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb - 4";
                  />;
                  <div className="flex justify - between text - sm text - zion - slate - light">;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
              </div>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex - wrap gap - 2">;
                  {[null, 3, 4, 5].map ((rating) => (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant="outline";
                      size="sm";
<<<<<<< HEAD
<<<<<<< HEAD
                    <Button;
                      key={rating === null ? 'any' :rating}
                      variant="outline";
                      size="sm";
                      onClick={() => {;
                        // // // console.log("Rating selected:", rating),;
                        setSelectedRating(rating),;
                      }}
                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          :"border-zion-blue-light text-zion-slate-light";
                      onClick={() => {;
                        // // // console.log("Rating selected:", rating),;
                        setSelectedRating(rating);
                      }}
                      className={`${;
                        selectedRating === rating;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple";
                          : "border-zion-blue-light text-zion-slate-light";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      on_click={() => {
                        console.log ("Rating selected:", rating);
                        setSelectedRating (rating);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      }}

                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      }`}
                    >;
                      {rating === null ? (;
                        "Any";
<<<<<<< HEAD
                      ) :(;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ) : (;
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}
                          <span className="ml-1">& Up</span>;
<<<<<<< HEAD
<<<<<<< HEAD
                        </div>;                      )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      )}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Button>;
                  ))}

                </div>;
              </div>;
<<<<<<< HEAD
=======

              <Button
                variant="outline" 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;
                  console && console.log("Resetting filters");
                  setSearchQuery("");
<<<<<<< HEAD
                        </div>;
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
              <Button 
                variant="outline" 
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
<<<<<<< HEAD
=======


              <Button 
                variant="outline" 

                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  console.log("Resetting filters");
                  setSearchQuery("");
                  setSelectedCategory("all")
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  setSelectedRating(null)
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input
                    type="text"
                    placeholder="Search listings..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      // // // console.log("Search query:", e.target.value),
                      setSearchQuery(e.target.value)
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>
                <div className="flex items-center gap-2 ml-auto">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        selected_rating === rating;
                          ? "bg - zion - purple / 20 border - zion - purple text - zion - purple";
                          : "border - zion - blue - light text - zion - slate - light";
                      }`}
                    >;
                      {rating === null ? (
                        "Any") : (
                        <div className="flex items - center">;
                          {[...Array (rating)].map ((_, i) => (
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}
                          <span className="ml - 1">& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;
                variant="outline";
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";
                on_click={() => {
                  console.log ("Resetting filters");
                  setSearchQuery ("");
                  setSelectedCategory ("all"),
                  setCurrentPriceFilter ([price_range.min, price_range.max]);
                  setSelectedRating (null);
                }}
<<<<<<< HEAD
              ;
              <Button ;
                variant="outline" ;
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                onClick={() => {;
                  // // // console.log("Resetting filters"),;
                  setSearchQuery(""),;
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                  setSelectedRating(null),;
                }}
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("list")}
                    className={`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {isLoading ? (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {filteredListings.map((listing) => (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
                        selected_rating === rating;
                          ? "bg - zion - purple / 20 border - zion - purple text - zion - purple";
                          : "border - zion - blue - light text - zion - slate - light";
                      }`}
                    >;
                      {rating === null ? (
                        "Any") : (
                        <div className="flex items - center">;
                          {[...Array (rating)].map ((_, i) => (
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}
                          <span className="ml - 1">& Up</span>;
                        </div>)}
                    </Button>))}
<<<<<<< HEAD
                  <ProductListingCard
                  <ProductListingCard 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </div>;
              <Button;
                variant="outline";
<<<<<<< HEAD
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
                onClick={() => {;
                  // // // console.log("Resetting filters"),;
                  setSearchQuery(""),;
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                  setSelectedRating(null);
                }}
=======
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";
                on_click={() => {
                  console.log ("Resetting filters");
                  setSearchQuery ("");
                  setSelectedCategory ("all"),
                  setCurrentPriceFilter ([price_range.min, price_range.max]);
                  setSelectedRating (null);
                }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                  />;
                </div>;

                <div className="flex items-center gap-2 ml-auto">;

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >;
                    <LayoutGrid className="h-4 w-4" />;
                  </Button>;
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("list")}
                    className={`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="lg:col - span - 3">;
            <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light">;
              <div className="flex flex - col md:flex - row gap - 4">;
                <div className="relative flex - grow">;
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  <Input;
                    type="text";
                    placeholder="Search listings...";
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {
                      console.log ("Search query:", e.target.value);
                      setSearchQuery (e.target.value);
                    }}
                    className="pl - 10 bg - zion - blue border border - zion - blue - light text - white";
                  />;
                </div>;
                <div className="flex items - center gap - 2 ml - auto">;
                  <Button;
                    variant="outline";
                    size="icon";
                    on_click={() => set_view ("grid")}
                    className={`${view === "grid" ? "bg - zion - purple / 20 border - zion - purple text - zion - purple" : "border - zion - blue - light text - zion - slate"}`}
                  >;
                    <LayoutGrid className="h - 4 w - 4" />;
                  </Button>;
                  <Button;
                    variant="outline";
                    size="icon";
                    on_click={() => set_view ("list")}
                    className={`${view === "list" ? "bg - zion - purple / 20 border - zion - purple text - zion - purple" : "border - zion - blue - light text - zion - slate"}`}
                  >;
                    <List className="h - 4 w - 4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;
            <div className="mb - 6">;
              <p className="text - zion - slate - light">;
                Showing {filtered_listings.length} results;
                {selected_category !== "all" && ` in ${selected_category}`}
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {is_loading ? (
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;
                {[1, 2, 3, 4].map ((i) => (
                  <div key={i} className="rounded - lg overflow - hidden border border - zion - blue - light">;
                    <Skeleton className="h - 48 w - full bg - zion - blue - light / 20" />;
                    <div className="p - 4">;
                      <Skeleton className="h - 6 w - 1/3 mb - 2 bg - zion - blue - light / 20" />;
                      <Skeleton className="h - 8 w - 5/6 mb - 4 bg - zion - blue - light / 20" />;
                      <Skeleton className="h - 4 w - full mb - 2 bg - zion - blue - light / 20" />;
                      <Skeleton className="h - 4 w - 4/5 mb - 4 bg - zion - blue - light / 20" />;
                      <div className="flex justify - between items - center pt - 4">;
                        <Skeleton className="h - 6 w - 1/4 bg - zion - blue - light / 20" />;
                        <Skeleton className="h - 8 w - 1/4 bg - zion - blue - light / 20" />;
                      </div>;
                    </div>;
                  </div>))}
              </div>) : filtered_listings.length > 0 ? (
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;
                {filtered_listings.map ((listing) => (
                  <ProductListingCard;
<<<<<<< HEAD
                    key={listing.id}
<<<<<<< HEAD
          ;
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
                      // // // console.log("Search query:", e.target.value),;
                      setSearchQuery(e.target.value);
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                  />;
                </div>;
                <div className="flex items-center gap-2 ml-auto">;
                  <Button;
                    variant="outline";
                    size="icon";
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >;
                    <LayoutGrid className="h-4 w-4" />;
                  </Button>;
                  <Button;
                    variant="outline";
                    size="icon";
                    onClick={() => setView("list")}
                    className={`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    key={listing.id}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >;
                    <List className="h-4 w-4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {[1, 2, 3, 4].map((i) => (;
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">;
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />;
                    <div className="p-4">;
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />;
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />;
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />;
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />;
                      <div className="flex justify-between items-center pt-4">;
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />;
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />;
                      </div>;
                    </div>;
                  </div>;
                ))}
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <ProductListingCard 

                    key={listing.id}
<<<<<<< HEAD
<<<<<<< HEAD
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
            ) : filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
                    key={listing.id}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button
                  variant="outline"
                  onClick={() => {
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);

                    setSelectedRating(null)
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    setSearchQuery(""),
                    setSelectedCategory("all"),
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),
                    setSelectedRating(null)
<<<<<<< HEAD
<<<<<<< HEAD
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
<<<<<<< HEAD
            ) :filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;
                  <ProductListingCard ;
                    key={listing.id}                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                  />;
                ))}
              </div>;
            ) :(;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
                <Button ;
                  variant="outline" ;
=======
                <Button
                  variant="outline" 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedCategory("all"),;
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                    setSelectedRating(null),;
=======
                <Button
                  variant="outline" 
                  onClick={() => {;
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                >;
                  Clear all filters;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
                <Button;
                  variant="outline";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
=======
                  />))}
              </div>) : (
              <div className="text - center py - 20">;
                <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;
                <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);
<<<<<<< HEAD
<<<<<<< HEAD
  ),;  const [selectedRating, setSelectedRating] = useState<number | null> (null);
useEffect ( () => {
  const listingsWithPrice = allListings.filter (l => l.price !== null);
if (listingsWithPrice.length > 0) {
  const min = Math.min (...listingsWithPrice.map (l => l.price || 0) );
const max = Math.max (...listingsWithPrice.map (l => l.price || 0) );
setPriceRange ({
  min, max 
}) 
}
}, [allListings]);
const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]> ([ initialPrice.min;
initialPrice.max ]);
const filteredListings = allListings.filter (listing => {
  const matchesSearch = !searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || const matchesRating = selectedRating === null || (listing.rating !== undefined && listing.rating >= selectedRating);
}
}) 
}
}, 500) 
};
return (<div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {
  title 
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {
  description 
}</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> <div className="lg:col-span-1"> <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6"> <h3 className="text-lg font-medium text-white mb-4 flex items-center"> <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2" > Category </label> <Select 
}
}> <SelectValue placeholder="Select Category" /> </SelectTrigger> </SelectItem>) ) 
}</SelectContent> </Select> </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Price Range </label> <div className="mt-6 px-2"> <Slider defaultValue= {
  [priceRange.min, priceRange.max] 
}min= {
  priceRange.min 
}max= {
  priceRange.max 
}step= {
  (priceRange.max - priceRange.min) / 100 
}value= {
  currentPriceFilter 
}onValueChange= {
  handleSliderChange 
}className="mb-4" /> <div className="flex justify-between text-sm text-zion-slate-light"> <span>$ {
  currentPriceFilter[0].toLocaleString () 
}</span> <span>$ {
  currentPriceFilter[1].toLocaleString () 
}</span> </div> </div> </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Minimum Rating </label> 
}
}className= {
  `$ {
  selectedRating === rating ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate-light" 
}` 
}> {
  rating === null ? ("Any" [...Array (rating) ].map ( (, i) => (<Star key= {
  i 
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) 
}<span className="ml-1" >& Up</span> </div>) 
}</Button>) ) 
}</div> </div> <Button 
}
}lg:col-span-3"> <div className=" bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light"> <div className=" flex flex-col md:flex-row gap-4"> <div className=" relative flex-grow"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input 
}
}className=" pl-10 bg-zion-blue border border-zion-blue-light text-white"flex items-center gap-2 ml-auto" > <Button > <LayoutGrid className="h-4 w-4" /> </Button> <Button > <List className="h-4 w-4" /> </Button> </div> </div> </div> </div> </div> </div>) ) 
}</div> <ProductListingCard key= {
  listing.id 
}listing= {
  listing 
}view= {
  view 
}onRequestQuote= {
  handleRequestQuote 
}/>) ) 
}</div> 
}
}
}</div> </div> </div> </div>) 
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
                >;
                  Clear all filters;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}