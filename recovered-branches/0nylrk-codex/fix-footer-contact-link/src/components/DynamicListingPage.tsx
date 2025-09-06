<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
=======

import React from 'react';import {useState, useEffect} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import React from 'react';import {useState, useEffect} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";
=======



import {useState, useEffect} from "react";"
import {useNavigate} from "react-router-dom";"
import {GradientHeading} from "@/components/GradientHeading";"
import {ProductListingCard} from "@/components/ProductListingCard";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";"
import {Skeleton} from "@/components/ui/skeleton";"
import {Slider} from "@/components/ui/slider";"
import {ProductListing, ListingView} from "@/types/listings";"
import {Search, Filter, LayoutGrid, List, Star} from "lucide-react";"
import {toast} from "@/hooks/use-toast";
"
import { useState, useEffect } from "react","
import { useNavigate } from "react-router-dom","
import { GradientHeading } from "@/components/GradientHeading","
import { ProductListingCard } from "@/components/ProductListingCard","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select","
import { Skeleton } from "@/components/ui/skeleton","
import { Slider } from "@/components/ui/slider","
import { ProductListing, ListingView } from "@/types/listings",";
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface PriceRange {;
  min: number,;
=======
import {toast} from "@/hooks/use-toast";  min: number,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {toast} from "@/hooks/use-toast";  min: number,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  max: number;
<<<<<<< HEAD
}interface DynamicListingPageProps {;
  title: string,,
=======
}




interface DynamicListingPageProps {;
  title: string,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function DynamicListingPage(): any ({;
  title;
  description;
  categorySlug;
  listings: allListings,;
<<<<<<< HEAD
  categoryFilters,;
=======

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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {}
  const navigate = useNavigate(),"
  const [searchQuery, setSearchQuery] = useState(""),"
  const [selectedCategory, setSelectedCategory] = useState("all"),"
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      const min = Math.min(...listingsWithPrice.map(l => l.price |0));
      const max = Math.max(...listingsWithPrice.map(l => l.price |0));
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  }
  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery |
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    const matchesCategory = selectedCategory === "all" |listing.category === selectedCategory;
    const matchesPrice = listing.price === null |(
      listing.price >= currentPriceFilter[0] &&
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  const filteredListings = allListings.filter(listing => {}
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      listing.price <= currentPriceFilter[1]
    );
    const matchesRating =
      selectedRating === null |
      (listing.rating !== undefined && listing.rating >= selectedRating);
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  const handleRequestQuote = (listingId: string) => {}
    setIsLoading(true);
    const listing = allListings.find(item => item.id === listingId);
    setTimeout(() => {}
      setIsLoading(false)
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}: DynamicListingPageProps) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategory, setSelectedCategory] = useState("all"),;
=======
}: DynamicListingPageProps) {;
  const navigate = useNavigate(),;"
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedCategory, setSelectedCategory] = useState("all"),;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [view, setView] = useState<ListingView>("grid"),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
<<<<<<< HEAD
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title: "Quote Requested",,
  description: `Your quote request for ${listing && listing.title} has been sent.`;
        });

        navigate("/request-quote", {;
          state: { ;
            serviceType: categorySlug, ;
            specificItem: {;              id: listing.id,;
=======

  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const min = Math && Math.min(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min, max });
    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initialPrice && initialPrice.min;
    initialPrice && initialPrice.max;
  ]);

  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };

  const filteredListings = allListings && allListings.filter(listing => {;
    const matchesSearch = !searchQuery || ;
      listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
      listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      (listing && listing.tags && listing && listing.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))),;
"
    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;

    const matchesPrice = listing && listing.price === null || (;
      listing && listing.price >= currentPriceFilter[0] && ;
      listing && listing.price <= currentPriceFilter[1];
    );

    const matchesRating = ;
      selectedRating === null || ;
      (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleRequestQuote = (listingId: string) => {;
    setIsLoading(true);

    const listing = allListings && allListings.find(item => item && item.id === listingId);

    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;"
          title: "Quote Requested",;



import { useState, useEffect } from './react';'
import { use_navigate } from './react-router-dom';'
import { GradientHeading } from '@/components / GradientHeading';'
import { ProductListingCard } from '@/components / ProductListingCard';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';'
import { Skeleton } from '@/components / ui / skeleton';'
import { Slider } from '@/components / ui / slider';'
import { ProductListing, ListingView } from '@/types / listings';'
import { Search, Filter, LayoutGrid, List, Star } from './lucide-react';'
import { toast } from '@/hooks / use - toast';
interface PriceRange {}
  min: number,
  max: number;
}
interface DynamicListingPageProps {}
  title: string,
  description: string,
  category_slug: string,
  listings: ProductListing[],
  category_filters: { label: string, value: string }[],
  initial_price?: PriceRange;
}
export /**;
 * DynamicListingPage - Function description;
 */
function DynamicListingPage() {}
  const navigate = use_navigate ();"
  const [search_query, setSearchQuery] = useState ("");"
  const [selected_category, setSelectedCategory] = useState ("all");"
  const [view, set_view] = useState < ListingView>("grid");
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
  useEffect (() => {}
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {}
  $2;
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
  const handleSliderChange = (values: number[]) =>: any {}
    setCurrentPriceFilter ([values[0], values[1]]);
  }
;
  const filtered_listings = all_listings.filter (listing => {}
    const matches_search = !search_query ||;
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),"
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
  const handleRequestQuote = (listing_id: string) =>: any {}
    setIsLoading (true);
;
    const listing = all_listings.find (item => item.id === listing_id);
;
    set_timeout (() => {}
      setIsLoading (false),
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Quote Requested",`
          description: `Your quote request for ${listing.title} has been sent.`;
        });
;"
        navigate ("/request - quote", {}
          state: {}
            service_type: category_slug,
            specific_item: {}
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0];



              id: listing.id,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              title: listing.title,;
              category: listing.category,;
              image: listing.images?.[0];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            }
          }
        });
      }

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======


    }, 500);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  return ("
    <div className="min-h-screen bg-zion-blue py-12 px-4">"
      <div className="container mx-auto">"
        <div className="text-center mb-12">
          <GradientHeading>{title}</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
    }, 500);
  },;
  return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            }
          }
        });
      }  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            }
          }
        });
      }  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
=======


  return (
"
    <div className="min-h-screen bg-zion-blue py-12 px-4">;"
      <div className="container mx-auto">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {description}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



            {description}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  }}
                >"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
<<<<<<< HEAD
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">          </p>;
=======
                    {categoryFilters.map((filter) => ("
                      <SelectItem key={filter.value} value={filter.value} className="text-white">



          </p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
                <Select
<<<<<<< HEAD
<<<<<<< HEAD
                  value={selectedCategory} 
                  onValueChange={(value: string) => {;
                    console && console.log("Category selected:", value);
=======
                <Select;
                  value={selectedCategory} ;
                  onValueChange={(value: string) => {;
                    // // // console.log("Category selected:", value),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    setSelectedCategory(value);


                <Select;
            {description}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  }}
                >;"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;

<<<<<<< HEAD
                    {categoryFilters.map((filter) => (;
                      <SelectItem key={filter.value} value={filter.value} className="text-white">;
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {filter.label}
                      </SelectItem>
                    {categoryFilters && categoryFilters.map((filter) => (;"
                      <SelectItem key={filter && filter.value} value={filter && filter.value} className="text-white">;
                        {filter && filter.label}
                      </SelectItem>;
                    ))}
"
              <div className="mb-6">;"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Price Range;
                </label>;"
                <div className="mt-6 px-2">;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Slider
=======
            {description}                    setSelectedCategory(value);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            {description}                    setSelectedCategory(value);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <Slider;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    defaultValue={[priceRange && priceRange.min, priceRange && priceRange.max]}
                    min={priceRange && priceRange.min}
                    max={priceRange && priceRange.max}
                    step={(priceRange && priceRange.max - priceRange && priceRange.min) / 100}
                    value={currentPriceFilter}
<<<<<<< HEAD
                    onValueChange={handleSliderChange}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
                    onValueChange={handleSliderChange}"
                    className="mb-4""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="mb-4"
                  />"
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
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
=======
"
                    className="mb-4"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

  const handleSliderChange = (values: number[]) => {}
    setCurrentPriceFilter([values[0], values[1]])
  },
  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1]
    ),
    
    const matchesRating = 
      selectedRating === null || 
      (listing.rating !== undefined && listing.rating >= selectedRating),
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  }),

  const handleRequestQuote = (listingId: string) => {}
    setIsLoading(true),
    
    const listing = allListings.find(item => item.id === listingId),
    
    setTimeout(() => {}
      setIsLoading(false),
      if (listing) {}
        toast({}
          title: &quot;Quote Requested&quot;,`
          description: `Your quote request for ${listing.title} has been sent.`
        }),
        "
        navigate(&quot;/request-quote", {}
          state: {}
            serviceType: categorySlug,
            specificItem: {}
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }          }
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
              "
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Category;
                </label>
                <Select,
value={selectedCategory} 
                  onValueChange={(value: string) => {"
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)                  }}
                  value={selectedCategory} 
                  onValueChange={_(value: string) => {}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>
              "
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="mb-4"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
=======
                  Price Range
=======
                  Price Range;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </label>

              </div>"
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating;
                </label>"
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
=======


                    <Button'
                      key={rating === null ? 'any' : rating}"
                      variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      size="sm"

                  />;"
                  <div className="flex justify-between text-sm text-zion-slate-light">;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;
"
              <div className="mb-6">;"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Minimum Rating;
                </label>;"
                <div className="flex flex-wrap gap-2">;
                  {[null, 3, 4, 5].map((rating) => (;

                    <Button'
                      key={rating === null ? 'any' : rating}"
                      variant="outline""
                      size="sm"
                      onClick={() => {;"
                        console && console.log("Rating selected:", rating);
                        setSelectedRating(rating);
    }, 500);
  }
;
  return ("
    <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
      <div className="container mx - auto">;"
        <div className="text - center mb - 12">;
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
            {description}
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;"
          <div className="lg:col - span - 1">;"
            <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6">;"
              <h3 className="text - lg font - medium text - white mb - 4 flex items - center">;"
                <Filter className="mr - 2 h - 5 w - 5" /> Filters;
              </h3>;"
              <div className="mb - 6">;"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Category;
                </label>;
                <Select;
                  value={selected_category}
                  onValueChange={(value: string) => {"
                    console.log ("Category selected:", value);
                    setSelectedCategory (value);
                  }}
                >;"
                  <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
                    <SelectItem value="all" className="text - white">All Categories</SelectItem>;
                    {category_filters.map ((filter) => ("
                      <SelectItem key={filter.value} value={filter.value} className="text - white">;
                        {filter.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;"
              <div className="mb - 6">;"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Price Range;
                </label>;"
                <div className="mt - 6 px - 2">;
                  <Slider;
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}"
                    className="mb - 4";
                  />;"
                  <div className="flex justify - between text - sm text - zion - slate - light">;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
              </div>;"
              <div className="mb - 6">;"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Minimum Rating;
                </label>;"
                <div className="flex flex - wrap gap - 2">;
                  {[null, 3, 4, 5].map ((rating) => (

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

                    <Button;
                      key={rating === null ? 'any' :rating}
                      variant="outline";
=======


                    <Button;'
                      key={rating === null ? 'any' : rating}"
                      variant="outline";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      size="sm";


                      }}
<<<<<<< HEAD
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
                      }}
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      }`}
                    >;
                      {rating === null ? (;"
                        "Any";
<<<<<<< HEAD
                      ) :(;
                      ) : (;
=======


                      ) :(;

                      ) : (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}"
                          <span className="ml-1">& Up</span>;
<<<<<<< HEAD
                        </div>;

                      )}                    </Button>;
=======

                    </Button>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  ))}

                </div>;
              </div>;

<<<<<<< HEAD
              <Button
                variant="outline" 
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      )}
                    </Button>;
                  ))}
                </div>
              </div>
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {

=======
                      )}
                    </Button>;
                  ))}
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;"
                  console && console.log("Resetting filters");"
                  setSearchQuery("");
<<<<<<< HEAD

              <Button 
                variant="outline" 

                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                onClick={() => {
                  console.log("Resetting filters");
                  setSearchQuery("");
=======
"
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {"
                  console.log("Resetting filters");"
                  setSearchQuery("");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  setSelectedCategory("all")
<<<<<<< HEAD
<<<<<<< HEAD
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
                  // // // console.log("Resetting filters"),"
                  setSearchQuery(""),"
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



                  setSelectedRating(null)
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                }}
              >
                Reset Filters;
              </Button>
            </div>
<<<<<<< HEAD
          </div>
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
<<<<<<< HEAD
<<<<<<< HEAD
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          </div>"
          <div className="lg:col-span-3">"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">"
              <div className="flex flex-col md:flex-row gap-4">"
                <div className="relative flex-grow">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
                        selected_rating === rating;"
                          ? "bg - zion - purple / 20 border - zion - purple text - zion - purple";"
                          : "border - zion - blue - light text - zion - slate - light";`
                      }`}
                    >;
                      {rating === null ? ("
                        "Any") : ("
                        <div className="flex items - center">;
                          {[...Array (rating)].map ((_, i) => ("
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}"
                          <span className="ml - 1">& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;"
                variant="outline";"
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";
                on_click={() => {"
                  console.log ("Resetting filters");"
                  setSearchQuery ("");"
                  setSelectedCategory ("all"),
                  setCurrentPriceFilter ([price_range.min, price_range.max]);
                  setSelectedRating (null);
                }}
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
                  <Button"
                    variant="outline""
                    size="icon""
                    onClick={() => setView("grid")}"`
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
=======
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
=======
                  <ProductListingCard
                  <ProductListingCard 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </div>;
              </div>;
              <Button;"
                variant="outline";

              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
"
          <div className="lg:col - span - 3">;"
            <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light">;"
              <div className="flex flex - col md:flex - row gap - 4">;"
                <div className="relative flex - grow">;"
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  <Input;"
                    type="text";"
                    placeholder="Search listings...";
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {"
                      console.log ("Search query:", e.target.value);
                      setSearchQuery (e.target.value);
                    }}"
                    className="pl - 10 bg - zion - blue border border - zion - blue - light text - white";
                  />;
                </div>;"
                <div className="flex items - center gap - 2 ml - auto">;
                  <Button;"
                    variant="outline";"
                    size="icon";"
                    on_click={() => set_view ("grid")}"`
                    className={`${view === "grid" ? "bg - zion - purple / 20 border - zion - purple text - zion - purple" : "border - zion - blue - light text - zion - slate"}`}
                  >;"
                    <LayoutGrid className="h - 4 w - 4" />;
                  </Button>;
                  <Button;"
                    variant="outline";"
                    size="icon";"
                    on_click={() => set_view ("list")}"`
                    className={`${view === "list" ? "bg - zion - purple / 20 border - zion - purple text - zion - purple" : "border - zion - blue - light text - zion - slate"}`}
                  >;"
                    <List className="h - 4 w - 4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;"
            <div className="mb - 6">;"
              <p className="text - zion - slate - light">;
                Showing {filtered_listings.length} results;"`
                {selected_category !== "all" && ` in ${selected_category}`}"`
                {search_query && ` for "${search_query}"`}
              </p>;
            </div>;
            {is_loading ? ("`
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;
                {[1, 2, 3, 4].map ((i) => ("
                  <div key={i} className="rounded - lg overflow - hidden border border - zion - blue - light">;"
                    <Skeleton className="h - 48 w - full bg - zion - blue - light / 20" />;"
                    <div className="p - 4">;"
                      <Skeleton className="h - 6 w - 1/3 mb - 2 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 8 w - 5/6 mb - 4 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 4 w - full mb - 2 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 4 w - 4/5 mb - 4 bg - zion - blue - light / 20" />;"
                      <div className="flex justify - between items - center pt - 4">;"
                        <Skeleton className="h - 6 w - 1/4 bg - zion - blue - light / 20" />;"
                        <Skeleton className="h - 8 w - 1/4 bg - zion - blue - light / 20" />;
                      </div>;
                    </div>;
                  </div>))}
              </div>) : filtered_listings.length > 0 ? ("`
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;
                {filtered_listings.map ((listing) => (
                  <ProductListingCard;

<<<<<<< HEAD
                    key={listing.id}
=======
<<<<<<< HEAD
=======
=======
                    key={listing.id}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  >;
=======


                  >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <List className="h-4 w-4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;

;"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
"`
                {selectedCategory !== "all" && ` in ${selectedCategory}`}"`
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;


;
            {isLoading ? (;"`
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {isLoading ? (;
=======
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />            {isLoading ? (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />            {isLoading ? (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            {isLoading ? (;"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {[1, 2, 3, 4].map((i) => (;"
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">;"
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />;"
                    <div className="p-4">;"
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />;"
                      <div className="flex justify-between items-center pt-4">;"
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />;"
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />;
                      </div>;
                    </div>;
                  </div>;
                ))}
              </div>;
<<<<<<< HEAD
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <ProductListingCard 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
=======


                  <ProductListingCard;
                    key={listing.id}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                  />
                ))}
              </div>
            ) : ("
              <div className="text-center py-20">"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>"
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
<<<<<<< HEAD
=======
                <Button
=======
                <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  variant="outline"
                  onClick={() => {"
                    setSearchQuery("");"
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);

<<<<<<< HEAD
                    setSelectedRating(null)              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                <Button
                  variant="outline"
                  onClick={() => {

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Button
=======
                    setSelectedRating(null)
"
                    setSearchQuery(""),"
                    setSelectedCategory("all"),
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),
                    setSelectedRating(null)




              </div>;
            ) : (;"
              <div className="text-center py-20">;"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;"
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;

                <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  variant="outline" 
                  onClick={() => {;"
                    setSearchQuery("");"
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedCategory("all"),;
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                    setSelectedRating(null),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}

                  }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                >;
                  Clear all filters;
                </Button>;
              </div>;
            )}
<<<<<<< HEAD
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
                  />))}
              </div>) : (
              <div className="text - center py - 20">;
                <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;
                <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";

=======
                <Button;
                  variant="outline";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  onClick={() => {;
=======
  );                  onClick={() => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );                  onClick={() => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    setSearchQuery(""),;
=======

                  onClick={() => {;"
                    setSearchQuery(""),;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                  on_click={() => {
                    setSearchQuery ("");
                    setSelectedCategory ("all");
                    setCurrentPriceFilter ([price_range.min, price_range.max]);
                    setSelectedRating (null);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
=======
                  }}"
                  className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                >;
                  Clear all filters;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>);}
=======
    </div>);



}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
