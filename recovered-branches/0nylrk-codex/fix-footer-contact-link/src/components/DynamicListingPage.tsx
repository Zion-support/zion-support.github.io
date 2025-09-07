<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

interface PriceRange {
  min: number,
  max: number
=======
import {toast} from "@/hooks/use-toast";
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  min: number,
  max: number}
=======
>>>>>>> merged-prs-20250907-203621

  min: number

  max: number
<<<<<<< HEAD
}
interface DynamicListingPageProps {
  title: string,
  description: string,
  categorySlug: string,
  listings: ProductListing[],
  categoryFilters: { label: string, value: string}[],
  initialPrice?: PriceRange
}

  initialPrice?: PriceRange
}
export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000}
}: DynamicListingPageProps) {
  const navigate = useNavigate($2);
  const [searchQuery, setSearchQuery] = useState($2);
  const [selectedCategory, setSelectedCategory] = useState($2);
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState($2);
=======
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
interface PriceRange {;
  min: number,;
  max: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
;
=======

<<<<<<< HEAD
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

import { toast } from "@/hooks/use-toast";
interface PriceRange {}
  min: number;
  max: number;
  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();"
  const [searchQuery, setSearchQuery] = useState("");"
  const [selectedCategory, setSelectedCategory] = useState("all");"
  const [view, setView] = useState<ListingView>("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
}
interface DynamicListingPageProps {}
  title: string;
  description: string;
  categorySlug: string;
  listings: ProductListing[]
  categoryFilters: { label: string, value: string }[]

  initialPrice?: PriceRange;
}
export function DynamicListingPage({};
  title;
  description;
  categorySlug;

interface PriceRange {;
  min: number,;

  max: number;

;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface DynamicListingPageProps {;
  title: string,;

  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange;
}
<<<<<<< HEAD
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
=======

export function DynamicListingPage(): any ({;
  title;
  description;
  categorySlug;
  listings: allListings,;

  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();"
  const [searchQuery, setSearchQuery] = useState("");"
  const [selectedCategory, setSelectedCategory] = useState("all");"
  const [view, setView] = useState<ListingView>("grid");
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {}
  const navigate = useNavigate(),"
  const [searchQuery, setSearchQuery] = useState(""),"
  const [selectedCategory, setSelectedCategory] = useState("all"),"
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
>>>>>>> merged-prs-20250907-203621
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),

  useEffect(() => {
<<<<<<< HEAD
    const listingsWithPrice = allListings.filter($2);
    if (listingsWithPrice.length > 0) {
      const min = $2;
      const max = $2;
      setPriceRange({ min, max })
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min;
    initialPrice.max
  ]),

  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]])
  },

  const filteredListings = $2;
    const matchesCategory = $2;
    const matchesPrice = $2;
    const matchesRating = $2;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  }),

  const handleRequestQuote = (listingId: string) => {
    setIsLoading($2);
    const listing = allListings.find($2);
    setTimeout(() => {
      setIsLoading($2);
      if (listing) {
        toast($2);
        navigate("/request-quote", {
          state: {
            serviceType: categorySlug
            specificItem: {
              id: listing.id
              title: listing.title
              category: listing.category
              image: listing.images?.[0]
=======
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {
import React from 'react';''
import {useState, useEffect} from "react";""
import {useNavigate} from "react-router-dom";""
import {GradientHeading} from "@/components/GradientHeading";""
import {ProductListingCard} from "@/components/ProductListingCard";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";""
import {Skeleton} from "@/components/ui/skeleton";""
import {Slider} from "@/components/ui/slider";""
import {ProductListing, ListingView} from "@/types/listings";""
import {Search, Filter, LayoutGrid, List, Star} from "lucide-react";""
import {toast} from "@/hooks/use-toast";""
import { useState, useEffect } from "react",""
import { useNavigate } from "react-router-dom",""
import { GradientHeading } from "@/components/GradientHeading",""
import { ProductListingCard } from "@/components/ProductListingCard",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",""
import { Skeleton } from "@/components/ui/skeleton",""
import { Slider } from "@/components/ui/slider",""
import { ProductListing, ListingView } from "@/types/listings",""
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";""
import { toast } from "@/hooks/use-toast";"
interface PriceRange {
  // TODO: Implement
}
  min: number;,
  max: number;
  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();"
  const [searchQuery, setSearchQuery] = useState("");""
  const [selectedCategory, setSelectedCategory] = useState("all");""
  const [view, setView] = useState<ListingView>("grid");"

  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
</number>"

useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {

      const min = Math.min(...listingsWithPrice.map(l => l.price |0));
      const max = Math.max(...listingsWithPrice.map(l => l.price |0));
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),

<<<<<<< HEAD
=======
<<<<<<< HEAD
  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {
      const min = Math.min(...listingsWithPrice.map(l => l.price |0));
      const max = Math.max(...listingsWithPrice.map(l => l.price |0));
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setPriceRange({ min, max })
    }
  }, [allListings]);
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([]
    initialPrice.min;
    initialPrice.max;
  ]);
  const handleSliderChange = (values: number[]) => {}
    setCurrentPriceFilter([values[0], values[1]])

<<<<<<< HEAD
  },

  const filteredListings = allListings.filter(listing => {}
=======

<<<<<<< HEAD
  }
  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery |
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    const matchesCategory = selectedCategory === "all" |listing.category === selectedCategory;
    const matchesPrice = listing.price === null |(
      listing.price >= currentPriceFilter[0] &&
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      listing.price <= currentPriceFilter[1]

      listing.price <= currentPriceFilter[1])
pr-12325
    );
    const matchesRating =
      selectedRating === null |
      (listing.rating !== undefined && listing.rating >= selectedRating);

    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {}
      setIsLoading(false)
<<<<<<< HEAD
      if (listing) {
        }
        toast({
          }
          "title": "title","
    "description": `Your quote request for ${listing.title} has been sent.``        });
        navigate("/request-quote", {"
          }
          "state": {
            }
            "serviceType": categorySlug;
    "specificItem": {
              }
              "id": listing.id,
"title": listing.title,
"category": listing.category,
"image": listing.images?.[0]
=======
      if (listing) {}
        toast({"
          title: "Quote Requested"
          description: `Your quote request for ${listing.title} has been sent.`
        });"
        navigate("/request-quote", {}
          state: {}
            serviceType: categorySlug;
            specificItem: {}
              id: listing.id;
              title: listing.title;
              category: listing.category;
              image: listing.images?.[0]

<<<<<<< HEAD
}: DynamicListingPageProps) {;
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: DynamicListingPageProps) {;

  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategory, setSelectedCategory] = useState("all"),;

  const [view, setView] = useState<ListingView>("grid"),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const min = Math && Math.min(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min, max });
    }
  }, [allListings]);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initialPrice && initialPrice.min;
    initialPrice && initialPrice.max;
  ]);
<<<<<<< HEAD
  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };
=======

  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const filteredListings = allListings && allListings.filter(listing => {;
    const matchesSearch = !searchQuery || ;
      listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
      listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      (listing && listing.tags && listing && listing.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))),;
<<<<<<< HEAD
    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;
=======

    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const matchesPrice = listing && listing.price === null || (;
      listing && listing.price >= currentPriceFilter[0] && ;
      listing && listing.price <= currentPriceFilter[1];
    );
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

    const matchesRating = ;
      selectedRating === null || ;
      (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);

    const listing = allListings && allListings.find(item => item && item.id === listingId);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
<<<<<<< HEAD
          title: "Quote Requested",
=======
          title: "Quote Requested",;
<<<<<<< HEAD
              id: listing && listing.id,;
              title: listing && listing.title,;
              category: listing && listing.category,;
              image: listing && listing.images?.[0];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          description: `Your quote request for ${listing && listing.title} has been sent.`;
        });

        navigate("/request-quote", {;
          state: { ;
            serviceType: categorySlug, ;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string,
  description: string,
  category_slug: string,
  listings: ProductListing[],
  category_filters: { label: string, value: string }[],
  initial_price?: PriceRange;

export /**
 * DynamicListingPage - Function description;
 */)
function DynamicListingPage() {
  const navigate = use_navigate ();

  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);

  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {

      const min = Math.min (...listingsWithPrice.map (l => l.price || 0));
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min, max });
  }, [all_listings]);
    initial_price.min;

  const handleSliderChange = (values: number[]) =>: any {
  // TODO: Implement
    setCurrentPriceFilter ([values[0], values[1]]);
  const filtered_listings = all_listings.filter (listing => {
    const matches_search = !search_query ||;)
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;

    const matches_price = listing.price === null || (
      listing.price >= currentPriceFilter[0] &&;)
      listing.price <= currentPriceFilter[1]);
    const matches_rating =;
      selected_rating === null ||;
      (listing.rating !== undefined && listing.rating >= selected_rating);
    return matches_search && matches_category && matches_price && matches_rating;

    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);

              id: listing.id,

              title: listing.title,
              category: listing.category,
              image: listing.images?.[0];
<<<<<<< HEAD
          description: `Your quote request for ${listing.title} has been sent.`;
        }),;
        navigate("/request-quote", {;
          state: {;
            serviceType: categorySlug,;
            specificItem: {;
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              id: listing.id,;

              title: listing.title,;
              category: listing.category,;
              image: listing.images?.[0];
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }
          }
        });
      }

<<<<<<< HEAD
  return (
=======
<<<<<<< HEAD

    }, 500);
  };
  return (
>>>>>>> merged-prs-20250907-203621
            }
          }
        })
      }
    }, 500)
  }
  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
<<<<<<< HEAD
=======
    }, 500);
  },;
  return (;
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    }, 500);
  };
  return (
<<<<<<< HEAD
            }
          }
        })
      }
    }, 500)
  }
  return ("
    <div className="min-h-screen bg-zion-blue py-12 px-4">"
      <div className="container mx-auto">"
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
    }, 500);
  },;
  return (;

  return (

  return (

    }, 500);
  };
  return (
            }
          }
        })
      }
    }, 500)
  }
  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
    }, 500);
  },;
  return (;
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;

        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                    console.log($2);
                    setSelectedCategory(value)
=======
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)
=======

            {description}

<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD

          </p>;
        </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  }}
                >"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>

          </p>;

<<<<<<< HEAD
        </div>;
"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
          <div className="lg:col-span-1">;"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;"
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;
"
              <div className="mb-6">;"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Category;
                </label>;

                    setSelectedCategory(value);

                <Select;
            {description}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          <div className="lg:col-span-1">;
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Category;
                </label>;
<<<<<<< HEAD
                <Select;
                  value={selectedCategory} ;
                  onValueChange={(value: string) => {;
                    // // // console.log("Category selected:", value),;
                    setSelectedCategory(value);
=======
                <Select
                  value={selectedCategory} 
                  onValueChange={(value: string) => {;
                    console && console.log("Category selected:", value);
                    setSelectedCategory(value);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  }}
                >;"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;
<<<<<<< HEAD
                  </SelectContent>;
                </Select>;
              </div>;
=======

                        {filter.label}
                      </SelectItem>
                    {categoryFilters && categoryFilters.map((filter) => (;"

                      <SelectItem key={filter && filter.value} value={filter && filter.value} className="text-white">;
                        {filter && filter.label}
                      </SelectItem>;
                    ))}

<<<<<<< HEAD
=======
                  </SelectContent>;
                </Select>;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Price Range;
                </label>;
                <div className="mt-6 px-2">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Slider

<<<<<<< HEAD
  useEffect_(() => {}
    const listingsWithPrice = allListings.filter(l => l.price !== null);
    if (listingsWithPrice.length > 0) {}
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0));
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0));
      setPriceRange({ min, max})
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([]
    initialPrice.min,
    initialPrice.max;
  ]),
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min,
    initialPrice.max;)]

  },
  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),

    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1]
  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || )
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),

    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));""
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;"

    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1])
    ),
<<<<<<< HEAD
=======
    const matchesRating = 
>>>>>>> origin/chore/fix-lint-and-merge
      selectedRating === null || 

      (listing.rating !== undefined && listing.rating >= selectedRating),
<<<<<<< HEAD
return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  }),
    }
=======

>>>>>>> origin/chore/fix-lint-and-merge
    setIsLoading(true),
    const listing = allListings.find(item => item.id === listingId),

            serviceType: categorySlug,
            specificItem: {}
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }          }
          description: `Your quote request for ${listing.title} has been sent.`)
        }),
        "
        navigate(&quot;/request-quote", {"
          state: { ,
  serviceType: categorySlug,
            specificItem: {,
  id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }          })

        })
      }
    }, 500)
  },
"
  return (_<div className="min-h-screen bg-zion-blue py-12 px-4">"
      <div className="container mx-auto">"
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">"
          <div className="lg:col-span-1">"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">"
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>

                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Category;
                </label>
                <Select,
value={selectedCategory} 
                  onValueChange={(value: string) => {"
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)                  }}
                  value={selectedCategory} 

                    setSelectedCategory(value)}}
                >"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white&quot;>"
                    <SelectValue placeholder=&quot;Select Category" />
                  </SelectTrigger>"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light&quot;>"
                    <SelectItem value=&quot;all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => ("
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
                        {filter.label}                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

              </div>
              "
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">

=======
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
>>>>>>> merged-prs-20250907-203621
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
<<<<<<< HEAD
                    className="mb-4"
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="mb-4"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
<<<<<<< HEAD
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        console.log($2);
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
=======
<<<<<<< HEAD

=======
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
                    className="mb-4"
=======


                    className="mb-4"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
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
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </label>

              </div>"
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating;
                </label>"
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"

                      size="sm"
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  />;"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <div className="flex justify-between text-sm text-zion-slate-light">;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
              ;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex-wrap gap-2">;
                  {[null, 3, 4, 5].map((rating) => (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        console && console.log("Rating selected:", rating);
                        setSelectedRating(rating);
    }, 500);
  }
;

                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Category;
                </label>;
                <Select;
                  value={selected_category}

                      <SelectItem key={filter.value} value={filter.value} className="text - white">;
                        {filter.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;

                <div className="mt - 6 px - 2">;
                  <Slider;
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    value={currentPriceFilter}

                  <div className="flex justify - between text - sm text - zion - slate - light">;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
=======
              </div>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex - wrap gap - 2">;
                  {[null, 3, 4, 5].map ((rating) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant="outline";
                      size="sm";
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
                      on_click={() => {
                        console.log ("Rating selected:", rating);
                        setSelectedRating (rating);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

<<<<<<< HEAD
<Button;
                    <Button;
                      key={rating === null ? 'any' :rating}
                      variant="outline";

                      size="sm";

                      }}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      }`}
                    >;
                      {rating === null ? (;"
                        "Any";
<<<<<<< HEAD

=======
                      ) :(;
                      ) : (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}"
                          <span className="ml-1">& Up</span>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        </div>;                      )}
=======
                        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      )}
<<<<<<< HEAD
</div>;                      )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </Button>;

                  ))}

                </div>;
              </div>;
<<<<<<< HEAD

                      )}
                    </Button>;
                  ))}
                </div>
              </div>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;"
                  console && console.log("Resetting filters");"
                  setSearchQuery("");
<<<<<<< HEAD

                  setSelectedCategory("all")
=======
                        </div>;
>>>>>>> merged-prs-20250907-203621
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
                  console.log("Resetting filters");
                  setSearchQuery("");
                  setSelectedCategory("all")
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  setSelectedRating(null)

                }}
              >
                Reset Filters;
              </Button>
            </div>
<<<<<<< HEAD

                  <Input

=======
          </div>
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
<<<<<<< HEAD
                  <Input
=======
<<<<<<< HEAD
                  <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                    type="text"
                    placeholder="Search listings..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
                      console.log($2);
=======
                      // // // console.log("Search query:", e.target.value),
>>>>>>> merged-prs-20250907-203621
                      setSearchQuery(e.target.value)
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>
                <div className="flex items-center gap-2 ml-auto">
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
<<<<<<< HEAD

                          <span className="ml - 1">& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;

                  setSelectedCategory ("all"),
                  setCurrentPriceFilter ([price_range.min, price_range.max]);
                  setSelectedRating (null);
                }}
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;

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

                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
              <Button;"
                variant="outline";

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
className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
=======
              ;
              <Button ;
                variant="outline" ;
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onClick={() => {;
                  // // // console.log("Resetting filters"),;
                  setSearchQuery(""),;
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),;
<<<<<<< HEAD
                  setSelectedRating(null);
                }}

=======
                  setSelectedRating(null),;
                }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                  <ProductListingCard
=======
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
>>>>>>> merged-prs-20250907-203621
                </div>;
              </div>;
              <Button;
                variant="outline";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
                onClick={() => {;
                  // // // console.log("Resetting filters"),;
                  setSearchQuery(""),;
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                  setSelectedRating(null);
                }}
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >;
                    <LayoutGrid className="h-4 w-4" />;
                  </Button>;

<<<<<<< HEAD
                  >;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                    key={listing.id}
<<<<<<< HEAD
          ;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                  >;
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                    <List className="h-4 w-4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
            {isLoading ? (;
=======
<<<<<<< HEAD
;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
=======

<<<<<<< HEAD
=======
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
<<<<<<< HEAD
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {isLoading ? (;
<<<<<<< HEAD

                  <ProductListingCard
                    key={listing && listing.id}
=======
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
=======
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  <ProductListingCard 

                    key={listing.id}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
>>>>>>> merged-prs-20250907-203621
            ) : filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
                    key={listing.id}
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
                    setSearchQuery($2);
                    setSelectedCategory($2);
                    setCurrentPriceFilter($2);
                    setSelectedRating(null)
=======


                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);

                    setSelectedRating(null)
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    setSearchQuery(""),
                    setSelectedCategory("all"),
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),
                    setSelectedRating(null)
<<<<<<< HEAD
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Button

                  variant="outline" 
<<<<<<< HEAD
                  onClick={() => {;"
                    setSearchQuery("");"
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedCategory("all"),;
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                    setSelectedRating(null),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
                <Button;
                  variant="outline";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onClick={() => {;

                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======

                  on_click={() => {
                    setSearchQuery ("");
                    setSelectedCategory ("all");
                    setCurrentPriceFilter ([price_range.min, price_range.max]);
                    setSelectedRating (null);

                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";

                >;
                  Clear all filters;

                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;

    </div>);
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
  ),;  const [selectedRating, setSelectedRating] = useState<number | null> (null);
const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]> ([ initialPrice.min;)]
initialPrice.max ]);
const filteredListings = allListings.filter (listing => {)
  const matchesSearch = !searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || const matchesRating = selectedRating === null || (listing.rating !== undefined && listing.rating >= selectedRating);
};"
return (<div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {"
} <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {"
}</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> <div className="lg:col-span-1"> <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6"> <h3 className="text-lg font-medium text-white mb-4 flex items-center"> <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2" > Category </label> <Select;"
</div>)"
}> <SelectValue placeholder="Select Category" />  ) )"
}  </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Price Range </label> <div className="mt-6 px-2"> <Slider defaultValue= {"
}className="mb-4" /> <div className="flex justify-between text-sm text-zion-slate-light"> <span>$ {"
}</span> <span>$ {
</span>"
}</span> </div> </div> </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Minimum Rating </label>"
  rating === null ? ("Any" [...Array (rating) ].map ( (, i) => (<Star key= {"
  i;)"
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) )"
}<span className="ml-1" >& Up</span> </div>)"
}) ) 
}</div> </div> <Button;
}"
}lg:col-span-3"> <div className=" bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light"> <div className=" flex flex-col md:flex-row gap-4"> <div className=" relative flex-grow"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input;"
}className=" pl-10 bg-zion-blue border border-zion-blue-light text-white"flex items-center gap-2 ml-auto" > <Button > <LayoutGrid className="h-4 w-4" />  <Button > <List className="h-4 w-4" />  </div> </div> </div> </div> </div> </div>) )"
}</div> <ProductListingCard key= {
  listing.id;
}listing= {
  listing;
}view= {
  view;
}onRequestQuote= {
  handleRequestQuote;
}/>) ) 

}</div> 
}</div> </div> </div> </div>) 
pr-12325
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}