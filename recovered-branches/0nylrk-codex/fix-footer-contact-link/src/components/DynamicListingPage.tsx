<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
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

<<<<<<< HEAD
import React from 'react';import {useState, useEffect} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import React from 'react';import {useState, useEffect} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
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
=======
categoryFilters;
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {;
  const navigate = useNavigate();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {toast} from "@/hooks/use-toast";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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


=======
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
interface PriceRange {

  min: number

  max: number
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
interface PriceRange {;
  min: number,;
  max: number;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

;
interface DynamicListingPageProps {;
  title: string,;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import {toast} from "@/hooks/use-toast";  min: number,;
  max: number;
}interface DynamicListingPageProps {;
  title: string,,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function DynamicListingPage(): any ({;
  title;
  description;
  categorySlug;
  listings: allListings,;
<<<<<<< HEAD
<<<<<<< HEAD
  categoryFilters,;
=======

  categoryFilters;
=======

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


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings: allListings,;
  categoryFilters,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======

=======
      listing.price <= currentPriceFilter[1]
import React from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
<<<<<<< HEAD
    "
=======
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,
    
    const matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 


<<<<<<< HEAD
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
<<<<<<< HEAD
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  const handleRequestQuote = (listingId: string) => {}
=======
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
pr-12325
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;

  });
  const handleRequestQuote = (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

  useEffect(() => {;
    const listingsWithPrice = allListings && allListings.filter(l => l && l.price !== null);
    if (listingsWithPrice && listingsWithPrice.length > 0) {;
      const min = Math && Math.min(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      const max = Math && Math.max(...listingsWithPrice && listingsWithPrice.map(l => l && l.price || 0));
      setPriceRange({ min, max });
    }
  }, [allListings]);
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

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
=======
            specificItem: {;

id: listing && listing.id,;
              title: listing && listing.title,;
              category: listing && listing.category,;
              image: listing && listing.images?.[0];
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string,
  description: string,
  category_slug: string,
  listings: ProductListing[],
  category_filters: { label: string, value: string }[],
  initial_price?: PriceRange;
<<<<<<< HEAD
}
<<<<<<< HEAD
export /**;
 * DynamicListingPage - Function description;
 */
function DynamicListingPage() {}
  const navigate = use_navigate ();"
  const [search_query, setSearchQuery] = useState ("");"
  const [selected_category, setSelectedCategory] = useState ("all");"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export /**
 * DynamicListingPage - Function description;
 */)
function DynamicListingPage() {
  const navigate = use_navigate ();
<<<<<<< HEAD
  const [search_query, setSearchQuery] = useState ("");
  const [selected_category, setSelectedCategory] = useState ("all");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [view, set_view] = useState < ListingView>("grid");
=======
  const [search_query, setSearchQuery] = useState ("");""
  const [selected_category, setSelectedCategory] = useState ("all");""
  const [view, set_view] = useState < ListingView>("grid");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [is_loading, setIsLoading] = useState (false);
  const [price_range, setPriceRange] = useState < PriceRange>(initial_price);
;
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
<<<<<<< HEAD
;
<<<<<<< HEAD
  useEffect (() => {}
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {}
  $2;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  useEffect (() => {
    const listingsWithPrice = all_listings.filter (l => l.price !== null);
    // Check condition;
if ( {) {
<<<<<<< HEAD
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
  $2;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const min = Math.min (...listingsWithPrice.map (l => l.price || 0));
      const max = Math.max (...listingsWithPrice.map (l => l.price || 0));
      setPriceRange ({ min, max });
  }, [all_listings]);
    initial_price.min;
<<<<<<< HEAD
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
=======
=======
    initial_price.max;)]
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleSliderChange = (values: number[]) =>: any {
  // TODO: Implement
    setCurrentPriceFilter ([values[0], values[1]]);
  const filtered_listings = all_listings.filter (listing => {
    const matches_search = !search_query ||;)
      listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
<<<<<<< HEAD
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const matches_category = selected_category === "all" || listing.category === selected_category;
;
=======
      (listing.tags && listing.tags.some ((tag: string) => tag.toLowerCase ().includes (search_query.toLowerCase ()))),"
    const matches_category = selected_category === "all" || listing.category === selected_category;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const matches_price = listing.price === null || (
      listing.price >= currentPriceFilter[0] &&;)
      listing.price <= currentPriceFilter[1]);
    const matches_rating =;
      selected_rating === null ||;
      (listing.rating !== undefined && listing.rating >= selected_rating);
    return matches_search && matches_category && matches_price && matches_rating;
<<<<<<< HEAD
  });
;
<<<<<<< HEAD
  const handleRequestQuote = (listing_id: string) =>: any {}
=======
  const handleRequestQuote = (listing_id: string) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const handleRequestQuote = (listing_id: string) =>: any {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    setIsLoading (true);
    const listing = all_listings.find (item => item.id === listing_id);
<<<<<<< HEAD
;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              id: listing.id,
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0];

<<<<<<< HEAD
<<<<<<< HEAD


=======
description: `Your quote request for ${listing.title} has been sent.`;
        }),;
        navigate("/request-quote", {;
          state: {;
            serviceType: categorySlug,;
            specificItem: {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              id: listing.id,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              id: listing.id,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      }  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            }
          }
        });
      }  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            {description}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            {description}
=======
{description}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
                    {categoryFilters.map((filter) => (
<<<<<<< HEAD
                      <SelectItem key={filter.value} value={filter.value} className="text-white">          </p>;
=======
                    {categoryFilters.map((filter) => ("
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
=======
                      <SelectItem key={filter.value} value={filter.value} className="text-white">

          </p>;
                      <SelectItem key={filter.value} value={filter.value} className="text-white">          </p>;
        </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                      <SelectItem key={filter && filter.value} value={filter && filter.value} className="text-white">;"

                </label>;"
                <div className="mt-6 px-2">;"
                  <Slider;
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
=======
"
                    className="mb-4"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    className="mb-4"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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

<<<<<<< HEAD
  const handleSliderChange = (values: number[]) => {}
    setCurrentPriceFilter([values[0], values[1]])
=======
  ]),
  const handleSliderChange = (
    setCurrentPriceFilter([values[0], values[1]])) => {
  return $3;}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  },
  const filteredListings = allListings.filter(listing => {const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
<<<<<<< HEAD
    "
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    "
=======
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  }),

  const handleRequestQuote = (listingId: string) => {}
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    setIsLoading(true),
    const listing = allListings.find(item => item.id === listingId),
<<<<<<< HEAD
    
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
=======
    setTimeout(() => {
      setIsLoading(false),
      if (listing) {
        toast({

          title: &quot;Quote Requested&quot;,
          description: `Your quote request for ${listing.title} has been sent.`
        }),
        navigate(&quot;/request-quote", {
          state: { 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
              "
              <div className="mb-6">"
=======
              <div className="mb-6">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Category;
                </label>
                <Select,
value={selectedCategory} 
                  onValueChange={(value: string) => {"
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)                  }}
                  value={selectedCategory} 
<<<<<<< HEAD
                  onValueChange={_(value: string) => {}
=======
                  onValueChange={_(value: string) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

                    className="mb-4"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
<<<<<<< HEAD
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
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        console && console.log("Rating selected:", rating);
                        setSelectedRating(rating);
    }, 500);
  }
;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Category;
                </label>;
                <Select;
                  value={selected_category}
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <SelectItem key={filter.value} value={filter.value} className="text - white">;
                        {filter.label}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
<<<<<<< HEAD
              </div>;"
              <div className="mb - 6">;"
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Price Range;
                </label>;"
=======
              </div>;
              <div className="mb - 6">;
                <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
                  Price Range;
                </label>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="mt - 6 px - 2">;
                  <Slider;
                    default_value={[price_range.min, price_range.max]}
                    min={price_range.min}
                    max={price_range.max}
                    step={(price_range.max - price_range.min) / 100}
                    value={currentPriceFilter}
<<<<<<< HEAD
                    onValueChange={handleSliderChange}"
                    className="mb - 4";
                  />;"
=======
                    onValueChange={handleSliderChange}
                    className="mb - 4";
                  />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <div className="flex justify - between text - sm text - zion - slate - light">;
                    <span>${currentPriceFilter[0].toLocaleString ()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString ()}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
                      )}                    </Button>;
=======

                    </Button>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      )}
</div>;                      )}
                    </Button>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                      )}                    </Button>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  ))}

                </div>;
              </div>;

<<<<<<< HEAD
              <Button
                variant="outline" 
<<<<<<< HEAD
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);                  setSelectedRating(null)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
          </div>
          <div className="lg:col-span-3">
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Input
=======
<Input
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
=======
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <span className="ml - 1">& Up</span>;
                        </div>)}
                    </Button>))}
                </div>;
              </div>;
<<<<<<< HEAD
              <Button;"
                variant="outline";"
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";
                on_click={() => {"
                  console.log ("Resetting filters");"
                  setSearchQuery ("");"
=======
              <Button;
                variant="outline";
                className="w - full border - zion - purple text - zion - purple hover: bg - zion - purple / 10";
                on_click={() => {
                  console.log ("Resetting filters");
                  setSearchQuery ("");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  setSelectedCategory ("all"),
                  setCurrentPriceFilter ([price_range.min, price_range.max]);
                  setSelectedRating (null);
                }}
              >;
                Reset Filters;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
                  <Button"
                    variant="outline""
                    size="icon""
                    onClick={() => setView("grid")}"`
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  setSelectedCategory("all"),;
                  setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                  setSelectedRating(null);
                }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        selected_rating === rating;
=======
selected_rating === rating;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======

                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                  />;
                </div>;

                <div className="flex items-center gap-2 ml-auto">;

                  <Button
                    variant="outline"
                    size="icon"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    onClick={() => setView("grid")}
                    className={`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
                  >;
                    <LayoutGrid className="h-4 w-4" />;
                  </Button>;
<<<<<<< HEAD
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

<<<<<<< HEAD
;"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;"
            <div className="mb-6">;"
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
"`
                {selectedCategory !== "all" && ` in ${selectedCategory}`}"`
=======
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings && filteredListings.length} results;
;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
            <div className="mb-6">;
              <p className="text-zion-slate-light">;
                Showing {filteredListings.length} results;
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {searchQuery && ` for "${searchQuery}"`}
              </p>;
            </div>;

<<<<<<< HEAD

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
=======
;
            {isLoading ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
;
            {isLoading ? (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" :"grid-cols-1"}`}>;
            {isLoading ? (;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />            {isLoading ? (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======


                  <ProductListingCard;
                    key={listing.id}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
            ) : filteredListings.length > 0 ? (;
              <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>;
                {filteredListings.map((listing) => (;
                  <ProductListingCard;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                    setSelectedRating(null)              </div>;
=======
                    setSelectedRating(null)
                    setSearchQuery(""),
                    setSelectedCategory("all"),
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),
                    setSelectedRating(null)

listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
              </div>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    setSelectedRating(null)              </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            ) : (;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
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
=======
                <Button
                  variant="outline" 
                  onClick={() => {;
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange && priceRange.min, priceRange && priceRange.max]);
                    setSelectedRating(null);
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
) :filteredListings.length > 0 ? (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );                  onClick={() => {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  on_click={() => {
                    setSearchQuery ("");
                    setSelectedCategory ("all");
                    setCurrentPriceFilter ([price_range.min, price_range.max]);
                    setSelectedRating (null);
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
    </div>);}
=======
    </div>);



}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
