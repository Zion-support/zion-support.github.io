
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

import {toast} from "@/hooks/use-toast";

}


=======


interface PriceRange {
  min: number,
  max: number

}
;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface DynamicListingPageProps {;
  title: string,;

  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {}
  const navigate = useNavigate(),"
  const [searchQuery, setSearchQuery] = useState(""),"
  const [selectedCategory, setSelectedCategory] = useState("all"),"
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),

  useEffect(() => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  },

  const filteredListings = allListings.filter(listing => {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
      listing.price <= currentPriceFilter[1]
    );
const matchesRating =;
      selectedRating === null |
      (listing.rating !== undefined && listing.rating >= selectedRating);
return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  const handleRequestQuote = ("listingId": string) => {
    }
    setIsLoading(true);
    const listing = allListings.find(item => { return item.id === listingId); }
    setTimeout(() => {
      }
      setIsLoading(false)
<<<<<<< HEAD

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

=======
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
}: DynamicListingPageProps) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}: DynamicListingPageProps) {;

  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedCategory, setSelectedCategory] = useState("all"),;"
  const [view, setView] = useState<ListingView>("grid"),;"
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const filteredListings = allListings && allListings.filter(listing => {;
    const matchesSearch = !searchQuery || ;
      listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
      listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      (listing && listing.tags && listing && listing.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))),;
<<<<<<< HEAD


    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;


=======
    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setTimeout(() => {;
      }
      setIsLoading(false),;
      if (listing) {;
        }
        toast({;

<<<<<<< HEAD
          title: "Quote Requested",;

=======
          title: "Quote Requested",
          description: `Your quote request for ${listing && listing.title} has been sent.`;
        });

        navigate("/request-quote", {;
          state: { ;
            serviceType: categorySlug, ;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              id: listing.id,;

              title: listing.title,;
              category: listing.category,;
              image: listing.images?.[0];

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            }
          }
        });
      }


<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;

        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD

                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)

                  }}
                >;"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select Category" />;
                  </SelectTrigger>;"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>;


                        {filter.label}
                      </SelectItem>
                    {categoryFilters && categoryFilters.map((filter) => (;"

                      <SelectItem key={filter && filter.value} value={filter && filter.value} className="text-white">;
                        {filter && filter.label}
                      </SelectItem>;
                    ))}


                  <Slider


    const matchesRating = 

      selectedRating === null || 

      (listing.rating !== undefined && listing.rating >= selectedRating),



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

    setCurrentPriceFilter([values[0], values[1]])
  },
  const filteredListings = allListings.filter((listing) => {const matchesSearch = !searchQuery || 
      }
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some(("tag": string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some(("tag": string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));"
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;"
const matchesPrice = listing.price === null || (;
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
const matchesRating =;
    
    const matchesRating = 
      selectedRating === null || 

      (listing.rating !== undefined && listing.rating >= selectedRating),
return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  }),
  const handleRequestQuote = ("listingId": string) => {
    }
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  }),

  const handleRequestQuote = (listingId: string) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
return (_<div className="min-h-screen bg-zion-blue py-12 px-4">;"
      <div className="container mx-auto">"
        <div className="text-center mb-12">"
          <GradientHeading>{title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 "lg":grid-cols-4 gap-6">"
          <div className=""lg":col-span-1">"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">"
                <Filter className="mr-2 h-5 w-5" /> Filters"
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>

<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"

                      size="sm"
<<<<<<< HEAD

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

=======


                  />;"

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className="flex justify-between text-sm text-zion-slate-light">;
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD



=======
              ;
              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Minimum Rating;
                </label>;
                <div className="flex flex-wrap gap-2">;
                  {[null, 3, 4, 5].map((rating) => (;
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={() => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

<<<<<<< HEAD
=======
<Button;
                    <Button;
                      key={rating === null ? 'any' :rating}
                      variant="outline";
>>>>>>> origin/cursor/delete-old-data-records-6bba



                      }`}
                    >;
                      {rating === null ? (;"
                        "Any";

<<<<<<< HEAD
                      ) :(;
                      ) : (;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}"
                          <span className="ml-1">& Up</span>;

<<<<<<< HEAD

=======
                      )}
</div>;                      )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </Button>;

                      )}                    </Button>;
                  ))}

                </div>;
              </div>;
<<<<<<< HEAD


=======


                      )}
                    </Button>;
                  ))}
                </div>
              </div>
                      )}
                    </Button>;
                  ))}
                className="w-full border-zion-purple text-zion-purple "hover": bg-zion-purple/10""
                onClick={() => {;
                  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;"
                  console && console.log("Resetting filters");"
                  setSearchQuery("");

<<<<<<< HEAD
                        </div>;

=======
                  setSelectedCategory("all")

                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;"
                  console && console.log("Resetting filters");"
                  setSearchQuery("");"
              <Button,
variant="outline";"
                className="w-full border-zion-purple text-zion-purple "hover": bg-zion-purple/10""
                onClick={() => {
                }
                onClick={() => {
                  }
                  console.log("Resetting filters");"
                  setSearchQuery("");"
                  setSelectedCategory("all")"
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
<<<<<<< HEAD




=======
                  console.log($2);
                  setSearchQuery($2);
                  setSelectedCategory($2);
                  setCurrentPriceFilter($2);

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  setSelectedRating(null)
                }
              >
                Reset Filters
              </Button>
            </div>
<<<<<<< HEAD

          </div>
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
=======


                  <Input
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    type="text"
                    placeholder="Search listings..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD

                      // // // console.log("Search query:", e.target.value),

=======
                      // // // console.log("Search query:", e.target.value),
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      setSearchQuery(e.target.value)
                    }}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                  />
                </div>
                <div className="flex items-center gap-2 ml-auto">


<<<<<<< HEAD
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


                </div>;
              </div>;
              <Button;
                variant="outline";



              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;


=======
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}

                  >;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <List className="h-4 w-4" />;
                  </Button>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD


                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;



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



=======
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
            {isLoading ? (;
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
            {isLoading ? (;


                  <ProductListingCard
                    key={listing && listing.id}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  <ProductListingCard 

                    key={listing.id}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onClick={() => {;

                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);



<<<<<<< HEAD
}
=======
                >;
                  Clear all filters;

                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
