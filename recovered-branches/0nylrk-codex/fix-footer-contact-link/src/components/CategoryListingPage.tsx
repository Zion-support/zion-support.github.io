<<<<<<< HEAD
import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",




interface Listing {

  id: string,
  title: string,
  description: string,
  category: string,



  subcategory?: string,
  image?: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  price?: number | null,

  createdAt: string

=======
import React from 'react';import {useState} from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {GradientHeading} from "@/components/GradientHeading";"
import {ListingScoreCard} from "@/components/ListingScoreCard";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";"
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";import { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { GradientHeading } from "@/components/GradientHeading","
import { ListingScoreCard } from "@/components/ListingScoreCard","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";"
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react";"
// Example listing type,
interface Listing {
  }
  "id": string;
    "title": string,
"description": string,
"category": string,
subcategory?: string;

import {useState} from "react";

import { useState } from "react",

import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;

import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react";

  subcategory?: string;

  image?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdAt: string;
}

  description: string;
  listings: Listing[]

  sortOptions?: { label: string, value: string }[]
  filterOptions?: { label: string, value: string }[]
}

// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
'
import { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { GradientHeading } from '@/components / GradientHeading';'
import { ListingScoreCard } from '@/components / ListingScoreCard';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';'
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from './lucide-react';
// Example listing type;

interface Listing {

  id: string,
  title: string,
  description: string,
  category: string,

  subcategory?: string,
  image?: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  price?: number | null,

  image?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  "createdAt": string
}
interface CategoryListingPageProps {
  }
  "title": string,
"description": string,
"listings": Listing[]
  sortOptions?: { "label": string, "value": string }[]
  filterOptions?: { "label": string, "value": string }[]
}
export function CategoryListingPage() {
  }
  const [searchQuery, setSearchQuery] = useState("");"
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  // Process listings based on filters and search,
const processedListings = initialListings;
    .filter((listing) => {
      // Apply search filter
}
const matchesSearch =;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        (listing.tags && listing.tags.some(tag => { return tag.toLowerCase().includes(searchQuery.toLowerCase())
        )); }
      // Apply category filters,
if (selectedFilter === 'all') return matchesSearch;'
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating |0) >= 4;'
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore |0) >= 85;'
return matchesSearch;
    })
    .sort((a, b) => {
      // Apply sorting
}
switch (selectedSort) {
        }
        case 'newest':'
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':'
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating-high':'
          return (b.rating |0) - (a.rating |0);
        case 'ai-match':'
          return (b.aiScore |0) - (a.aiScore |0);
        case 'a-z':'
          return a.title.localeCompare(b.title);
        case 'z-a':'
          return b.title.localeCompare(a.title);
        "default": return 0
      }
    });
return (;
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">"
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select","
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react","
// Example listing type;
interface Listing {;
  }
  "id": string,;
  "title": string,,
  "description": string,;
  "category": string,;
import { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { GradientHeading } from '@/components / GradientHeading';'
import { ListingScoreCard } from '@/components / ListingScoreCard';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';'
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from './lucide-react';'
// Example listing type;
// Example listing type
interface Listing {
  id: string,
  title: string,
  description: string,
  category: string,
  subcategory?: string,
  image?: string,
  tags?: string[],
  author?: string,
  authorImage?: string,
  aiScore?: number,
  rating?: number,
  reviewCount?: number,
  price?: number | null,
  createdAt: string
import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react",;
// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
  subcategory?: string,;
  image?: string,;
  tags?: string[],;
  author?: string,;
  authorImage?: string,;
  aiScore?: number,;
  rating?: number,;
  reviewCount?: number,;
  price?: number | null,;
  createdAt: string;


;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
;

<<<<<<< HEAD


=======
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface CategoryListingPageProps {;
  title: string,,
}
<<<<<<< HEAD



=======
;


  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">"
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
;
export function CategoryListingPage() {;
  }
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter((listing) => {;
      // Apply search filter;
      }
      const matchesSearch =;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
<<<<<<< HEAD


    });
    .sort((a, b) => {;
      // Apply sorting;
      switch (selectedSort) {;'
        case 'newest':;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),;'
        case 'oldest':;
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),;'
        case 'rating-high':;
          return (b.rating || 0) - (a.rating || 0),;'
        case 'ai-match':;
          return (b.aiScore || 0) - (a.aiScore || 0),;'
        case 'a-z':;
          return a.title.localeCompare(b.title),;'

=======
      if (selectedFilter === 'all') return matchesSearch,;'
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;'
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;'
      return matchesSearch;
export function CategoryListingPage() { return null; }
    });
    .sort((a, b) => {;
      // Apply sorting;
      }
      switch (selectedSort) {;
        }
        case 'newest':;'
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),;
        case 'oldest':;'
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),;
        case 'rating-high':;'
          return (b.rating || 0) - (a.rating || 0),;
        case 'ai-match':;'
          return (b.aiScore || 0) - (a.aiScore || 0),;
        case 'a-z':;'
          return a.title.localeCompare(b.title),;
        case 'z-a':;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        "default": return 0;
      }
    });
<<<<<<< HEAD

=======
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
  review_count?: number;
  price?: number | null;
      }
    });
return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
        <div className="container mx-auto">;"

              {description}

                    ) : null}
                    <span>'
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => ("


<<<<<<< HEAD
=======
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>


                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>


              <Select value={selectedSort} onValueChange={setSelectedSort}>;"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                  <div className="flex items-center">;'
                    {selectedSort === 'a-z' ? (;"
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;

                    </span>;
                  </div>;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;


                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;


                </SelectContent>;
              </Select>;
            </div>;
          </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          {/* Listings Grid */}
          {processedListings.length > 0 ? (
            <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-6">"
              {processedListings.map((listing) => (

          {processedListings.length > 0 ? ("
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (

<<<<<<< HEAD
                <ListingScoreCard
=======
                <ListingScoreCard;
;

          {/* Results Count */}"
          <div className="mb-6">;"
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;"`
              {searchQuery && ` for "${searchQuery}"`}

>>>>>>> origin/cursor/delete-old-data-records-6bba

            </p>;
          </div>;
;
          {/* Listings Grid */}
<<<<<<< HEAD


                  key={listing.id}
                  title={listing.title}

=======

          {processedListings.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings.map((listing) => (;
                <ListingScoreCard ;
                  key={listing.id}                  title={listing.title}


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
<<<<<<< HEAD

                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}

=======
                  authorImage={listing.authorImage}
                  aiScore={listing.aiScore}
                  rating={listing.rating}
                  reviewCount={listing.reviewCount}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
                  description={listing.description}
                  category={listing.subcategory |listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}

            </p>;
          </div>;
          {/* Listings Grid */}
          {processedListings && processedListings.length > 0 ? (;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings && processedListings.map((listing) => (;
                <ListingScoreCard;
                  key={listing && listing.id}
                  title={listing && listing.title}
                  description={listing && listing.description}
                  category={listing && listing.subcategory || listing && listing.category}
                  image={listing && listing.image}
                  tags={listing && listing.tags}
                  author={listing && listing.author}
                  authorImage={listing && listing.authorImage}
                  aiScore={listing && listing.aiScore}
                  rating={listing && listing.rating}
                  reviewCount={listing && listing.reviewCount}
                />;
              ))}


                  setSearchQuery(""),


                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>

            </div>


=======
                />;
              ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          ) :(;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD

=======
              <Button ;
                variant="outline" ;
                onClick={() => {;
                  setSearchQuery(""),;
                  setSelectedFilter(filterOptions[0].value),;
                }}

              <Button;
                variant="outline";
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>



<<<<<<< HEAD
=======
          )}

              >;
                Clear all filters;

            </div>) : ("
            <div className="text - center py - 20">;"
</div>"
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;""
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;"
              <Button;"
                variant="outline";")
                on_click={() => {
</Button>

              </Button>;
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);

  ),; //Example listing type interface Listing {

  id: string;
title: string;
description: string;
category: string;
subcategory?: string;
image?: string;
tags?: string[];
author?: string;
authorImage?: string;
aiScore?: number;
rating?: number;
reviewCount?: number;
price?: number | null;
createdAt: string 
}
            </div>) : ("
            <div className="text - center py - 20">;"
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;""
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;"
                variant="outline";")
                on_click={() => {

            </div>)}

</Footer>
    </>);

  ),; //Example listing type interface Listing {
  // TODO: Implement
}interface CategoryListingPageProps {
  // TODO: Implement
listings: Listing[];
sortOptions?: {
  label: string, value: string;
}[];
filterOptions?: {
}[] 
}export function CategoryListingPage ({
sortOptions = [ {"
  label: 'Newest First', value: 'newest
};
{
  label: 'Oldest First', value: 'oldest
  label: 'Highest Rating', value: 'rating-high
  label: 'Highest AI Match', value: 'ai-match
  label: 'A-Z', value: 'a-z
  label: 'Z-A', value: 'z-a]
}];
filterOptions = [ {
  label: 'All', value: 'all
  label: 'Highly Rated', value: 'high-rating
  label: 'Best AI Match', value: 'best-match]
}] )
  const [searchQuery, setSearchQuery] = useState ("");"
const [selectedSort, setSelectedSort] = useState (sortOptions[0].value);
const [selectedFilter, setSelectedFilter] = useState (filterOptions[0].value);
//Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) );"
//Apply category filters if (selectedFilter === 'all') return matchesSearch;
if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;
if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();
case 'rating-high': return (b.rating || 0) - (a.rating || 0);
case 'ai-match': return (b.aiScore || 0) - (a.aiScore || 0);
case 'a-z': return a.title.localeCompare (b.title);
case 'z-a': return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {"
} <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {"
}</p> </div> {"
}<div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light"> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate"/> <Input className="pl-10 bg-zion-blue border border-zion-blue-light text-white"/> </div> <Select value= {"
  selectedSort;
}onValueChange= {
  setSelectedSort;"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> {"
)"
  selectedSort === 'a-z' ? (<ArrowDownAZ className="mr-2 h-4 w-4"/>) : selectedSort === 'z-a' ? (<ArrowUpZA className="mr-2 h-4 w-4"/>) : null;"

}<span> {
</span>"
}</span> </div>  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {"

  sortOptions.map ( (option) => (<SelectItem key= {
  option.value;
}value= {
  option.value;"
}className="text-white"> {"
)
}) ) 
}  <Select value= {
  selectedFilter;
  setSelectedFilter;"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4"/> <span> {"

  filterOptions.map ( (option) => (<SelectItem key= {
}  </div> </div> {"
}<div className="mb-6"> </p> </div> {""
  processedListings.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {"
</div>)
  processedListings.map ( (listing) => (<ListingScoreCard key= {
  listing.id;
}title= {
  listing.title;
}description= {
  listing.description;
}category= {
  listing.subcategory || listing.category;
}image= {
  listing.image;
}tags= {
  listing.tags;
}author= {
  listing.author;
}authorImage= {
  listing.authorImage;
}aiScore= {
  listing.aiScore;
}rating= {
  listing.rating;
}reviewCount= {
  listing.reviewCount;)
}/>) ) 
}</div>) : (<div className="text-center py-20"> <h3 className="text-xl font-bold text-white mb-2">No listings found</h3> <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p> <Button;"
}</div> </div> <Footer /> </>) 

          )}
        </div>
      </div>
      <Footer />

    </>
  )

              >;
                Clear all filters;
              </Button>;
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);
          )}
        </div>
      </div>
      <Footer />
    </>
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
}