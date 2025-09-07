
import React from 'react';import {useState, useEffect} from "react";
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
import {toast} from "@/hooks/use-toast";  min: number,;
  max: number;
}interface DynamicListingPageProps {;
  title: string,,
  description: string,;
  categorySlug: string,;
  listings: ProductListing[],;
  categoryFilters: { label: string, value: string }[],;
  initialPrice?: PriceRange;
}
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("all"),
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),

  const [selectedRating, setSelectedRating] = useState<number | null>(null),
      listing.price <= currentPriceFilter[1]
import React from 'react';

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


  },

  const filteredListings = allListings.filter(listing => {
    const matchesSearch = !searchQuery || )
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,"
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 


      listing.price <= currentPriceFilter[1])
pr-12325
    );
    const matchesRating =
      selectedRating === null |
      (listing.rating !== undefined && listing.rating >= selectedRating);
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
pr-12325
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;

  });
  const handleRequestQuote = (
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

  const navigate = useNavigate(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategory, setSelectedCategory] = useState("all"),;
  const [view, setView] = useState<ListingView>("grid"),;
  const [isLoading, setIsLoading] = useState(false),;
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
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

        toast({"
          title: "Quote Requested"",
  description: `Your quote request for ${listing.title} has been sent.`)
        });"
        navigate("/request-quote", {"
          state: {,
  serviceType: categorySlug;
            specificItem: {,
  id: listing.id;
              title: listing.title;,
  category: listing.category;
              image: listing.images?.[0]

)
  const navigate = useNavigate(),;"
  const [searchQuery, setSearchQuery] = useState(""),;""
  const [selectedCategory, setSelectedCategory] = useState("all"),;""
  const [view, setView] = useState<ListingView>("grid"),;"

  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),;

  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([;
    initialPrice && initialPrice.min;
    initialPrice && initialPrice.max;)]

  const handleSliderChange = (values: number[]) => {;
    setCurrentPriceFilter([values[0], values[1]]);
  };

  const filteredListings = allListings && allListings.filter(listing => {;
    const matchesSearch = !searchQuery || ;)
      listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
      listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      (listing && listing.tags && listing && listing.tags.some((tag: string) => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()))),;
    const matchesCategory = selectedCategory === "all" || listing && listing.category === selectedCategory;"
    const matchesPrice = listing && listing.price === null || (;
      listing && listing.price >= currentPriceFilter[0] && ;
      listing && listing.price <= currentPriceFilter[1];)

    const matchesRating = ;
      selectedRating === null || ;
      (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating);


  const handleRequestQuote = (listingId: string) => {;

    const listing = allListings && allListings.find(item => item && item.id === listingId);

    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;"
          title: "Quote Requested",;"`;
          description: `Your quote request for ${listing && listing.title} has been sent.`;)
        navigate("/request-quote", {;"
          state: { ;,
  serviceType: categorySlug, ;
            specificItem: {;
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
  // TODO: Implement
  min: number,
interface DynamicListingPageProps {
  // TODO: Implement
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
  const [search_query, setSearchQuery] = useState ("");""
  const [selected_category, setSelectedCategory] = useState ("all");""
  const [view, set_view] = useState < ListingView>("grid");"
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {
  $2;
      const min = Math.min (...listingsWithPrice.map (l => l.price || 0));
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min, max });
  }, [all_listings]);
    initial_price.min;
    initial_price.max;)]
  const handleSliderChange = (values: number[]) =>: any {
  // TODO: Implement
    setCurrentPriceFilter ([values[0], values[1]]);
  const filtered_listings = all_listings.filter (listing => {
    const matches_search = !search_query ||;)
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),"
    const matches_category = selected_category === "all" || listing.category === selected_category;"
    const matches_price = listing.price === null || (
      listing.price >= currentPriceFilter[0] &&;)
      listing.price <= currentPriceFilter[1]);
    const matches_rating =;
      selected_rating === null ||;
      (listing.rating !== undefined && listing.rating >= selected_rating);
    return matches_search && matches_category && matches_price && matches_rating;
  const handleRequestQuote = (listing_id: string) =>: any {
  // TODO: Implement
    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);
    set_timeout (() => {
      setIsLoading (false),
      // Check condition;
        toast ({"
          title: "Quote Requested","`;
          description: `Your quote request for ${listing.title} has been sent.`;)
;"
        navigate ("/request - quote", {"
  service_type: category_slug,
            specific_item: {,
  id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0];,
  id: listing.id,;
pr-12325

              title: listing.title,;
              category: listing.category,;}
              image: listing.images?.[0];}
            }
          }
        });
      }  return (
    <div className="min-h-screen bg-zion-blue py-12 px-4">;
      <div className="container mx-auto">;
        <div className="text-center mb-12">;
          <GradientHeading>{title}</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
                  }}
                >
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">          </p>;
        </div>;

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;
          <div className="lg:col-span-1">;
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;
                <Filter className="mr-2 h-5 w-5" /> Filters;
              </h3>;

              <div className="mb-6">;
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;
                  Category;
                </label>;
                <Select
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

                      <SelectItem key={filter && filter.value} value={filter && filter.value} className="text-white">;"

                </label>;"
                <div className="mt-6 px-2">;"
                  <Slider;
pr-12325

                    defaultValue={[priceRange && priceRange.min, priceRange && priceRange.max]}
                    min={priceRange && priceRange.min}
                    max={priceRange && priceRange.max}
                    step={(priceRange && priceRange.max - priceRange && priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}
                    className="mb-4"
                    className="mb-4"
                  />
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
  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min,
    initialPrice.max;)]

  ]),
  const handleSliderChange = (
    setCurrentPriceFilter([values[0], values[1]])) => {
  return $3;}
}
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
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  }),

  const handleRequestQuote = (listingId: string) => {
    initialPrice.min,
  ]),

  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || )
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));""
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;"
    ),
    
      selectedRating === null || 
      (listing.rating !== undefined && listing.rating >= selectedRating),
    
  }),

pr-12325
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;

  }),
  const handleRequestQuote = (
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
                      className={`${;
                        selectedRating === rating ;
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                          : "border-zion-blue-light text-zion-slate-light";

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
                      }}
                      }`}
                    >;
                      {rating === null ? (;
                        "Any";
                      ) :(;
                      ) : (;
                        <div className="flex items-center">;
                          {[...Array(rating)].map((_, i) => (;
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                          ))}
                          <span className="ml-1">& Up</span>;
                        </div>;

                      )}                    </Button>;
                  ))}

                </div>;
              </div>;

              <Button
                variant="outline" 
                      )}
                    </Button>;
                  ))}
                </div>
              </div>
                      )}
                    </Button>;
                  ))}
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {;
                  console && console.log("Resetting filters");
                  setSearchQuery("");

              <Button 
                variant="outline" 

                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                onClick={() => {
                  console.log("Resetting filters");
                  setSearchQuery("");
                  setSelectedCategory("all")
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
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
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />            {isLoading ? (;
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
            ) : filteredListings && filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard
                    key={listing && listing.id}
                  <ProductListingCard 

"
  return (_<div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
      <div className="container mx-auto">"
</div>"
        <div className="text-center mb-12">"
</div>
          <GradientHeading>{title}</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>
          </p>
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">"
</div>"
          <div className="lg:col-span-1">"
</div>"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">"
</div>"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">"
</h3>"
                <Filter className="mr-2 h-5 w-5" /> Filters;"
</Filter>
              </h3>
              "
              <div className="mb-6">"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>"
</label>
                </label>
                <Select,
value={selectedCategory} )
                  onValueChange={(value: string) => {
</Select>"
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white&quot;>"
</SelectTrigger>"
                    <SelectValue placeholder=&quot;Select Category" />"
</SelectValue>
                  </SelectTrigger>"
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light&quot;>"
</SelectContent>"
                    <SelectItem value=&quot;all" className="text-white">All Categories</SelectItem>""
                      <SelectItem key={filter.value} value={filter.value} className="text-white">"
</SelectItem>

                        {filter.label}                      </SelectItem>
                  </SelectContent>
                </Select>

              </div>
              "
              <div className="mb-6">"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">"
</label>
                </label>"
                <div className="mt-6 px-2">"
</div>
                  <Slider;
                    defaultValue={[priceRange.min, priceRange.max]}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={(priceRange.max - priceRange.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}

"
                    className="mb-4""
                  />
</Slider>"
                  <div className="flex justify-between text-sm text-zion-slate-light">"
</div>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
                </label>
                </label>
              </div>"
              <div className="mb-6">"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">"
</label>
                </label>"
                <div className="flex flex-wrap gap-2">"
</div>
                    <Button;"
                      key={rating === null ? 'any' : rating}''
                      variant="outline"""
                      size="sm""
                      onClick={() => {
</Button>"
                        <div className="flex items-center">"
</div>"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />"
</Star>"
                          <span className="ml-1">& Up</span>"
                        </div>"
                  <div className="flex justify-between text-sm text-zion-slate-light">;"
</div>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;"
              <div className="mb-6">;"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;"
                <div className="flex flex-wrap gap-2">;"
</div>
                    <Button;"
                      key={rating === null ? 'any' : rating}''
                      variant="outline"""
                      size="sm""
                      onClick={() => {;
</Button>"
    <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
</div>"
      <div className="container mx - auto">;"
</div>"
        <div className="text - center mb - 12">;"
</div>
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;"
</div>"
          <div className="lg:col - span - 1">;"
</div>"
            <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6">;"
</div>"
              <h3 className="text - lg font - medium text - white mb - 4 flex items - center">;"
</h3>"
                <Filter className="mr - 2 h - 5 w - 5" /> Filters;"
</Filter>
              </h3>;"
              <div className="mb - 6">;"
</div>"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;"
</label>
                </label>;
                <Select;
                  value={selected_category}
                  onValueChange={(value: string) => {
</Select>"
                  <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"
</SelectTrigger>"
                    <SelectValue placeholder="Select Category" />;"
</SelectValue>
                  </SelectTrigger>;"
                  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
</SelectContent>"
                    <SelectItem value="all" className="text - white">All Categories</SelectItem>;""
                      <SelectItem key={filter.value} value={filter.value} className="text - white">;"
</SelectItem>
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
              </div>;"
              <div className="mb - 6">;"
</div>"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;"
</label>
                </label>;"
                <div className="mt - 6 px - 2">;"
</div>
                  <Slider;
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}"
                    className="mb - 4";"
                  />;
</Slider>"
                  <div className="flex justify - between text - sm text - zion - slate - light">;"
</div>
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
              </div>;"
              <div className="mb - 6">;"
</div>"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;"
</label>
                </label>;"
                <div className="flex flex - wrap gap - 2">;"
</div>
                    <Button;"
                      key={rating === null ? 'any' : rating}''
                      variant="outline";""
                      size="sm";"
                      on_click={() => {
</Button>
                    <Button;"
                      key={rating === null ? 'any' :rating}''
                      variant="outline";""
                      size="sm";"
                      onClick={() => {;
</Button>"
                        <div className="flex items-center">;"
</div>"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;"
</Star>"
                          <span className="ml-1">& Up</span>;"
                        </div>;
                        </div>;                      )}
                    </Button>;
                </div>;
              </div>;
              <Button;"
                variant="outline""
                      )}
                    </Button>;

                </div>
              </div>
                    </Button>;

              <Button;"
                variant="outline"""
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10""
                onClick={() => {
</Button>
              </Button>
            </div>
          </div>"
          <div className="lg:col-span-3">"
</div>"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">"
</div>"
              <div className="flex flex-col md:flex-row gap-4">"
</div>"
                <div className="relative flex-grow">"
</div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"
</Search>"
                        <div className="flex items - center">;"
</div>"
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}"
</Star>"
                          <span className="ml - 1">& Up</span>;"
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;"
                variant="outline";""
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";"
                on_click={() => {
</Button>
              </Button>;
            </div>;
          </div>;
                  <Button;"
                    variant="outline"""
                    size="icon"""
                    onClick={() => setView("grid")}"
</Button>"
                    <LayoutGrid className="h-4 w-4" />"
</LayoutGrid>
                  </Button>
                  <Button;"
                    variant="outline"""
                    size="icon"""
                    onClick={() => setView("list")}"
</Button>"
                    <List className="h-4 w-4" />"
</List>
                  </Button>
                </div>
              </div>
            </div>"
            <div className="mb-6">"
</div>"
              <p className="text-zion-slate-light">"
</p>
              </p>
            </div>"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>"
</div>"
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">"
</div>"
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />"
</Skeleton>"
                    <div className="p-4">"
</div>"
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />"
</Skeleton>"
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />"
</Skeleton>"
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />"
</Skeleton>"
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />"
</Skeleton>"
                      <div className="flex justify-between items-center pt-4">"
</div>"
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />"
</Skeleton>"
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />"
</Skeleton>
                      </div>
                    </div>
                  </div>
              </div>"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>"
</div>"
                        <div className="flex items - center">;"
</div>"
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}"
</Star>"
                          <span className="ml - 1">& Up</span>;"
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
              <Button;"
                variant="outline";""
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";"
                on_click={() => {
</Button>
              </Button>;
            </div>;
          </div>;
                </div>;"
                <div className="flex items-center gap-2 ml-auto">;"
</div>
                  <Button;"
                    variant="outline"""
                    size="icon"""
                    onClick={() => setView("grid")}"
</Button>"
                    <LayoutGrid className="h-4 w-4" />;"
</LayoutGrid>
                  </Button>;
                  <Button;"
                    variant="outline"""
                    size="icon"""
                    onClick={() => setView("list")}"
</Button>"
          <div className="lg:col - span - 3">;"
</div>"
            <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light">;"
</div>"
              <div className="flex flex - col md:flex - row gap - 4">;"
</div>"
                <div className="relative flex - grow">;"
</div>"
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"
</Search>
                  <Input;"
                    type="text";""
                    placeholder="Search listings...";"
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {
</Input>
                </div>;"
                <div className="flex items - center gap - 2 ml - auto">;"
</div>
                  <Button;"
                    variant="outline";""
                    size="icon";""
                    on_click={() => set_view ("grid")}"
</Button>"
                    <LayoutGrid className="h - 4 w - 4" />;"
</LayoutGrid>
                  </Button>;
                  <Button;"
                    variant="outline";""
                    size="icon";""
                    on_click={() => set_view ("list")}"
</Button>"
                    <List className="h - 4 w - 4" />;"
</List>
                  </Button>;
                </div>;
              </div>;
            </div>;"
            <div className="mb - 6">;"
</div>"
              <p className="text - zion - slate - light">;"
</p>
              </p>;
            </div>;"
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;"
</div>"
                  <div key={i} className="rounded - lg overflow - hidden border border - zion - blue - light">;"
</div>"
                    <Skeleton className="h - 48 w - full bg - zion - blue - light / 20" />;"
</Skeleton>"
                    <div className="p - 4">;"
</div>"
                      <Skeleton className="h - 6 w - 1/3 mb - 2 bg - zion - blue - light / 20" />;"
</Skeleton>"
                      <Skeleton className="h - 8 w - 5/6 mb - 4 bg - zion - blue - light / 20" />;"
</Skeleton>"
                      <Skeleton className="h - 4 w - full mb - 2 bg - zion - blue - light / 20" />;"
</Skeleton>"
                      <Skeleton className="h - 4 w - 4/5 mb - 4 bg - zion - blue - light / 20" />;"
</Skeleton>"
                      <div className="flex justify - between items - center pt - 4">;"
</div>"
                        <Skeleton className="h - 6 w - 1/4 bg - zion - blue - light / 20" />;"
</Skeleton>"
                        <Skeleton className="h - 8 w - 1/4 bg - zion - blue - light / 20" />;"
</Skeleton>
                      </div>;
                    </div>;
                  </div>))}
              </div>) : filtered_listings.length > 0 ? ("
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;"
</div>
                  <ProductListingCard;

                    key={listing.id}
                  >;
</ProductListingCard>"
                    <List className="h-4 w-4" />;"
</List>
                  </Button>;
                </div>;
              </div>;
            </div>;"
            <div className="mb-6">;"
</div>"
              <p className="text-zion-slate-light">;"
</p>"
            <div className="mb-6">;"
</div>"
              <p className="text-zion-slate-light">;"
</p>"
            <div className="mb-6">;"
</div>"
              <p className="text-zion-slate-light">;"
</p>
              </p>;
            </div>;"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;"
</div>"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;"
</div>"
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">;"
</div>"
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />;"
</Skeleton>"
                    <div className="p-4">;"
</div>"
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />;"
</Skeleton>"
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />;"
</Skeleton>"
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />;"
</Skeleton>"
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />;"
</Skeleton>"
                      <div className="flex justify-between items-center pt-4">;"
</div>"
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />;"
</Skeleton>"
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />;"
</Skeleton>
                      </div>;
                    </div>;
                  </div>;
              </div>;"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;"
</div>
                  <ProductListingCard;
                    key={listing && listing.id})
                {filteredListings && filteredListings.map((listing) => (;
</ProductListingCard>
                  <ProductListingCard;
                    key={listing && listing.id}

                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}


                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote})
            ) : filteredListings.length > 0 ? (;
</ProductListingCard>"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;"
</div>

                  <ProductListingCard;
key={listing.id}
                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
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
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);

                    setSelectedRating(null)              </div>;
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
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
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                >;
                  Clear all filters;
                </Button>;
              </div>;
            )}

</ProductListingCard>
              </div>;"
              <div className="text-center py-20">;"
</div>"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;""
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;"
                <Button ;"
                  variant="outline" ;"
                  onClick={() => {;
</Button>
                </Button>;
              </div>;

          </div>;
        </div>;
      </div>;
    </div>;
  );                  onClick={() => {;
                    setSearchQuery(""),;
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);

                  }}
                  className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
                >;
                  Clear all filters;


                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
    </div>);}
      setIsLoading(false),
        toast({
          title: &quot;Quote Requested&quot;,`;
        navigate(&quot;/request-quote", {"
          state: { ,
  serviceType: categorySlug,
            }          })
  return (_<div className="min-h-screen bg-zion-blue py-12 px-4">"
</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">"
          <div className="lg:col-span-1">"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">"

              </h3>
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>"
                <Select,
                  onValueChange={(value: string) => {
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white&quot;>"
                    <SelectValue placeholder=&quot;Select Category" />"

                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light&quot;>"
                    <SelectItem value=&quot;all" className="text-white">All Categories""

                        {filter.label}                      
                  
                
                    onValueChange={handleSliderChange}

                <div className="flex flex-wrap gap-2">"
                    <Button;"
                      key={rating === null ? 'any' : rating}
                      variant="outline"""
                      size="sm""
                      onClick={() => {
                        <div className="flex items-center">"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />"
                          <span className="ml-1">& Up</span>"
                  <div className="flex justify-between text-sm text-zion-slate-light">;"
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                <div className="flex flex-wrap gap-2">;"
                      onClick={() => {;
    <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
      <div className="container mx - auto">;"
        <div className="text - center mb - 12">;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 6">;"
          <div className="lg:col - span - 1">;"
            <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4 sticky top - 6">;"
              <h3 className="text - lg font - medium text - white mb - 4 flex items - center">;"
                <Filter className="mr - 2 h - 5 w - 5" /> Filters;"

              <div className="mb - 6">;"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;"
                  value={selected_category}
                  <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"

                  <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
                    <SelectItem value="all" className="text - white">All Categories;""
                      <SelectItem key={filter.value} value={filter.value} className="text - white">;"

                      ))}
                <div className="mt - 6 px - 2">;"
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    className="mb - 4";"
                  />;
                  <div className="flex justify - between text - sm text - zion - slate - light">;"
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                <div className="flex flex - wrap gap - 2">;"
                      variant="outline";""
                      size="sm";"
                      on_click={() => {

                      key={rating === null ? 'any' :rating}
                        <div className="flex items-center">;"
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;"
                          <span className="ml-1">& Up</span>;"
                        </div>;                      )}
                variant="outline""
                      )}
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10""

              
          <div className="lg:col-span-3">"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">"
              <div className="flex flex-col md:flex-row gap-4">"
                <div className="relative flex-grow">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"
                        <div className="flex items - center">;"
                            <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}"
                          <span className="ml - 1">& Up</span>;"
                        </div>)}
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";"

                    size="icon"""
                    onClick={() => setView("grid")}"
                    <LayoutGrid className="h-4 w-4" />"

                  
                    onClick={() => setView("list")}"
                    <List className="h-4 w-4" />"

                  
              <p className="text-zion-slate-light">"
            </div>"`;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>"
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">"
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />"
                    <div className="p-4">"
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />"
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />"
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />"
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />"
                      <div className="flex justify-between items-center pt-4">"
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />"
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />"


                <div className="flex items-center gap-2 ml-auto">;"
                    <LayoutGrid className="h-4 w-4" />;"

          <div className="lg:col - span - 3">;"
            <div className="bg - zion - blue - dark rounded - lg p - 4 mb - 6 border border - zion - blue - light">;"
              <div className="flex flex - col md:flex - row gap - 4">;"
                <div className="relative flex - grow">;"
                  <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"

                  <Input;"
                    type="text";""
                    placeholder="Search listings...";"
                    value={search_query}
                    on_change={(e: React.ChangeEvent < HTMLInputElement>) => {

                <div className="flex items - center gap - 2 ml - auto">;"
                    size="icon";""
                    on_click={() => set_view ("grid")}"
                    <LayoutGrid className="h - 4 w - 4" />;"

                    on_click={() => set_view ("list")}"
                    <List className="h - 4 w - 4" />;"

              <p className="text - zion - slate - light">;"
            </div>;"`;
              <div className={`grid gap - 6 ${view === "grid" ? "grid - cols - 1 md:grid - cols - 2" : "grid - cols - 1"}`}>;"
                  <div key={i} className="rounded - lg overflow - hidden border border - zion - blue - light">;"
                    <Skeleton className="h - 48 w - full bg - zion - blue - light / 20" />;"
                    <div className="p - 4">;"
                      <Skeleton className="h - 6 w - 1/3 mb - 2 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 8 w - 5/6 mb - 4 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 4 w - full mb - 2 bg - zion - blue - light / 20" />;"
                      <Skeleton className="h - 4 w - 4/5 mb - 4 bg - zion - blue - light / 20" />;"
                      <div className="flex justify - between items - center pt - 4">;"
                        <Skeleton className="h - 6 w - 1/4 bg - zion - blue - light / 20" />;"
                        <Skeleton className="h - 8 w - 1/4 bg - zion - blue - light / 20" />;"

                  </div>))}
              </div>) : filtered_listings.length > 0 ? ("`;
                  <ProductListingCard;

                    key={listing.id}
                    <List className="h-4 w-4" />;"

              <p className="text-zion-slate-light">;"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;"
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;"
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">;"
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />;"
                    <div className="p-4">;"
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />;"
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />;"
                      <div className="flex justify-between items-center pt-4">;"
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />;"
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />;"

                    key={listing && listing.id})
                {filteredListings && filteredListings.map((listing) => (;

                    key={listing && listing.id}

                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}


                    onRequestQuote={handleRequestQuote})
            ) : filteredListings.length > 0 ? (;
"`;

              <div className="text-center py-20">"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>""
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>"
                  variant="outline"")

              <div className="text-center py-20">;"
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;""
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;"
                  <ProductListingCard ;
                    key={listing.id}                    listing={listing}

                <Button ;"
                  variant="outline" ;"

    </div>);
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
    </div>"

