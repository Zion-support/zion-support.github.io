<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
=======

import React from 'react';import {useState, useEffect} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react';
import {useState, useEffect} from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from 'react';import {useState, useEffect} from "react";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PriceRange {;
  min: number,;
=======
import {toast} from "@/hooks/use-toast";  min: number,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {toast} from "@/hooks/use-toast";  min: number,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  max: number;
}interface DynamicListingPageProps {;
  title: string,,

;
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function DynamicListingPage(): any ({;
  title;
  description;
  categorySlug;
  listings: allListings,;
categoryFilters,;
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

  useEffect(() => {
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const min = Math.min(...listingsWithPrice.map(l => l.price |0));
      const max = Math.max(...listingsWithPrice.map(l => l.price |0));
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  const filteredListings = allListings.filter(listing => {}
=======
      setPriceRange({ min, max })
    }
  }, [allListings]);

  const [view, setView] = useState<ListingView>("grid"),"

  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),
</number>
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min;
    initialPrice.max;)]
  ]);
  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]])

}
  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery |
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    const matchesCategory = selectedCategory === "all" |listing.category === selectedCategory;
    const matchesPrice = listing.price === null |(
      listing.price >= currentPriceFilter[0] &&

  },

  const filteredListings = allListings.filter(listing => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
"
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,

    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    const matchesSearch = !searchQuery || )
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,"
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      listing.price <= currentPriceFilter[1]

      listing.price <= currentPriceFilter[1])
pr-12325
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
}: DynamicListingPageProps) {;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}: DynamicListingPageProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;
          title: "Quote Requested",;
          description: `Your quote request for ${listing && listing.title} has been sent.`;
        });

        navigate("/request-quote", {;
          state: { ;
            serviceType: categorySlug, ;
specificItem: {;              id: listing.id,;
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
export /**
 * DynamicListingPage - Function description;
 */)
function DynamicListingPage() {
  const navigate = use_navigate ();
const [search_query, setSearchQuery] = useState ("");
  const [selected_category, setSelectedCategory] = useState ("all");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [view, set_view] = useState < ListingView>("grid");
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
<<<<<<< HEAD
  useEffect (() => {}
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {}
  $2;
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {
$2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      const min = Math.min (...listingsWithPrice.map (l => l.price || 0));
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min, max });
  }, [all_listings]);
    initial_price.min;
initial_price.max;
  ]);
;
<<<<<<< HEAD
  const handleSliderChange = (values: number[]) =>: any {}
    setCurrentPriceFilter ([values[0], values[1]]);
  }
;
  const filtered_listings = all_listings.filter (listing => {}
    const matches_search = !search_query ||;
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),"
  const handleSliderChange = (values: number[]) =>: any {
  // TODO: Implement
    setCurrentPriceFilter ([values[0], values[1]]);
  const filtered_listings = all_listings.filter (listing => {
    const matches_search = !search_query ||;)
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
(listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const matches_category = selected_category === "all" || listing.category === selected_category;
;
    const matches_price = listing.price === null || (
      listing.price >= currentPriceFilter[0] &&;)
      listing.price <= currentPriceFilter[1]);
    const matches_rating =;
      selected_rating === null ||;
      (listing.rating !== undefined && listing.rating >= selected_rating);
    return matches_search && matches_category && matches_price && matches_rating;
});
;
<<<<<<< HEAD
  const handleRequestQuote = (listing_id: string) =>: any {}
    setIsLoading (true);
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            }
          }
        });
      }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
}, 500);
  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {description}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            {description}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  }}
                >"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
{categoryFilters.map((filter) => (
<SelectItem key={filter.value} value={filter.value} className="text-white">          </p>;

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
<Select
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  value={selectedCategory} 
                  onValueChange={(value: string) => {;
                    console && console.log("Category selected:", value);
                    setSelectedCategory(value);

                <Select;
            {description}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }}
                >;"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;

{categoryFilters.map((filter) => (;
                      <SelectItem key={filter.value} value={filter.value} className="text-white">;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        {filter.label}
                      </SelectItem>
                    {categoryFilters && categoryFilters.map((filter) => (;"
=======
                  value={selectedCategory} 
                  onValueChange={(value: string) => {;
                    console && console.log("Category selected:", value);
<Select;
                  value={selectedCategory} ;
                  onValueChange={(value: string) => {;
                    // // // console.log("Category selected:", value),;
                    setSelectedCategory(value);
                <Select
            {description}
                  }}
                >;
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;
            {description}                    setSelectedCategory(value);
          })
          })
        });

      }

  return (
    }, 500);
    }, 500)
  return ("
    <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
      <div className="container mx-auto">"
        <div className="text-center mb-12">"
</div>
          <GradientHeading>{title}"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>"
    <div className="min-h-screen bg-zion-blue py-12 px-4">;"
      <div className="container mx-auto">;"
        <div className="text-center mb-12">;"
          <GradientHeading>{title};"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select Category" />"

                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                    <SelectItem value="all" className="text-white">All Categories""
                      <SelectItem key={filter.value} value={filter.value} className="text-white">"

          </p>;
        </div>;"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
          <div className="lg:col-span-1">;"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;"
</h3>"
                <Filter className="mr-2 h-5 w-5" /> Filters;"

              </h3>;"
              <div className="mb-6">;"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;
                <Select;
                  value={selectedCategory} )
                  onValueChange={(value: string) => {;

            {description}
                  }}
                >;
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select Category" />;"

                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                    <SelectItem value="all" className="text-white">All Categories;""
                      <SelectItem key={filter.value} value={filter.value} className="text-white">;"

                        {filter.label}
                      </SelectItem>
                    {categoryFilters && categoryFilters.map((filter) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<Slider
=======
            {description}                    setSelectedCategory(value);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <Slider;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

                  </SelectContent>;
                </Select>;
              </div>;

</SelectContent>;
                </Select>;
              </div>;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Price Range;
                </label>;
                <div className="mt-6 px-2">;

                  <Slider
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    defaultValue={[priceRange && priceRange.min, priceRange && priceRange.max]}
                    min={priceRange && priceRange.min}
                    max={priceRange && priceRange.max}
                    step={(priceRange && priceRange.max - priceRange && priceRange.min) / 100}
                    value={currentPriceFilter}
onValueChange={handleSliderChange}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    className="mb-4"
                  />"
                  <div className="flex justify-between text-sm text-zion-slate-light">

                    onValueChange={handleSliderChange}"
                    className="mb-4"""
                    className="mb-4""
                  />
</Slider>"
                  <div className="flex justify-between text-sm text-zion-slate-light">"
</div>
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
                    onValueChange={handleSliderChange}"
                    className="mb-4"""
                    className="mb-4""
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">"
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
              "
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">"
                </label>"
                <div className="mt-6 px-2">"
pr-12325
</div>
                  <Slider;
                    defaultValue={[priceRange.min, priceRange.max]}

                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">

                    onValueChange={handleSliderChange}"
                    className="mb-4""
                  />
</Slider>"
                  <div className="flex justify-between text-sm text-zion-slate-light">"
</div>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>
              "
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="mb-4"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>

                </label>

              </div>"
              <div className="mb-6">"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating;
                </label>"
                <div className="flex flex-wrap gap-2">
                  {[null, 3, 4, 5].map((rating) => (

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
=======
                  Price Range
                </label>
Price Range
                </label>
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

                    className="mb-4";

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
                  />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

=======
              </div>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex - wrap gap - 2">;
                  {[null, 3, 4, 5].map ((rating) => (
                    <Button;
                      key={rating === null ? 'any' : rating}
                      variant="outline";
                      size="sm";
                      on_click={() => {
                        console.log ("Rating selected:", rating);
                        setSelectedRating (rating);
                      }}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

<Button;
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
                      }`}
                    >;
                      {rating === null ? (;"
                        "Any";
) :(;
) :(;
                      ) : (;
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}"
                          <span className="ml-1">& Up</span>;
</div>;

<<<<<<< HEAD
                      )}                    </Button>;
                      )}
</div>;                      )}
                    </Button>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  ))}

                </div>;
              </div>;

<Button
                variant="outline" 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      )}
                    </Button>;
                  ))}
                </div>
              </div>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;"
                  console && console.log("Resetting filters");"
                  setSearchQuery("");
<Button 
                variant="outline" 

                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {

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
                  console.log("Resetting filters");
                  setSearchQuery("");
                  setSelectedCategory("all")
<<<<<<< HEAD
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                  setSelectedRating(null)
=======

                  setSelectedRating(null)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                }}
              >
                Reset Filters;
              </Button>
            </div>
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
          </div>"
          <div className="lg:col-span-3">"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">"
              <div className="flex flex-col md:flex-row gap-4">"
                <div className="relative flex-grow">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </div>;
              </div>;
              <Button;"
                variant="outline";

=======
=======
                  <ProductListingCard
                  <ProductListingCard
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10";
                onClick={() => {;
                  // // // console.log("Resetting filters"),;
                  setSearchQuery(""),;
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),;
                  setSelectedRating(null);
                }}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

key={listing.id}
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
                  >;
=======
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("list")}
                    className={`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}

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
                  >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {isLoading ? (;
=======
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />            {isLoading ? (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            {isLoading ? (;"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
;
            {isLoading ? (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
) : filteredListings && filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                {filteredListings && filteredListings.map((listing) => (;
=======
{filteredListings && filteredListings.map((listing) => (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <ProductListingCard
                    key={listing && listing.id}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <ProductListingCard 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}

=======

listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
            ) : filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

                  variant="outline"
                  onClick={() => {"
                    setSearchQuery("");"
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);

setSelectedRating(null)              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                <Button
                  variant="outline"
                  onClick={() => {
                <Button
                  variant="outline" 
                  onClick={() => {;"
                    setSearchQuery("");"
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
                <Button
                  variant="outline" 
                  onClick={() => {;
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ) :filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;

</ProductListingCard>
              </div>"
              <div className="text-center py-20">"
</div>"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>""
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>"
                <Button;"
                  variant="outline"")
                  onClick={() => {
</Button>
              </div>;"
              <div className="text-center py-20">;"
</div>"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;""
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;"
                <Button;"
                  variant="outline""
                  onClick={() => {;
</Button>"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;"
</div>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}

                  }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                  }}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  onClick={() => {;
=======
  );                  onClick={() => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
/>))}
              </div>) : (
              <div className="text - center py - 20">;
                <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;
                <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
                <Button;
                  variant="outline";

                <Button;
                  variant="outline";
                  onClick={() => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                  on_click={() => {
                    setSearchQuery ("");
                    setSelectedCategory ("all");
                    setCurrentPriceFilter ([price_range.min, price_range.max]);
                    setSelectedRating (null);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
=======
                  }}"
                  className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                >;
                  Clear all filters;

                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>);}
    </div>);
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
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
