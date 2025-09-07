<<<<<<< HEAD
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
=======
import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD

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

=======
<<<<<<< HEAD
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react";
// Example listing type
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
  createdAt: string}

interface CategoryListingPageProps {
  title: string,
  description: string,
  listings: Listing[],
  sortOptions?: { label: string, value: string}[],
  filterOptions?: { label: string, value: string}[]
}

  title: string
  description: string
  listings: Listing[]
  sortOptions?: { label: string, value: string }[]
  filterOptions?: { label: string, value: string }[]
}
export function CategoryListingPage({
  title
  description;
  listings: initialListings
  sortOptions = [
    { label: 'Newest First', value: 'newest' }
    { label: 'Oldest First', value: 'oldest' }
    { label: 'Highest Rating', value: 'rating-high' }
    { label: 'Highest AI Match', value: 'ai-match' }
    { label: 'A-Z', value: 'a-z' }
    { label: 'Z-A', value: 'z-a' }]
  filterOptions = [
    { label: 'All', value: 'all' }
    { label: 'Highly Rated', value: 'high-rating' }
    { label: 'Best AI Match', value: 'best-match' }]
}: CategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState($2);
  const [selectedSort, setSelectedSort] = useState($2);
  const [selectedFilter, setSelectedFilter] = useState($2);
  // Process listings based on filters and search
  const processedListings = $2;
      // Apply category filters
      if (selectedFilter = $2;
      if (selectedFilter = $2;
      if (selectedFilter = $2;
      return matchesSearch
    })
    .sort((a, b) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime($2);
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime($2);
        case 'rating-high':
          return (b.rating || 0) - (a.rating || 0),
        case 'ai-match':
          return (b.aiScore || 0) - (a.aiScore || 0),
        case 'a-z':
          return a.title.localeCompare($2);
        case 'z-a':
          return b.title.localeCompare($2);
        default: return 0
      }
    }),

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
=======

<<<<<<< HEAD
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

>>>>>>> origin/resolved-merge-conflicts
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
// Example listing type}
;
=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
interface CategoryListingPageProps {;
  title: string,;
  description: string,;
  listings: Listing[],;
  sortOptions?: { label: string, value: string }[],;
  filterOptions?: { label: string, value: string }[];
}

=======
<<<<<<< HEAD
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
  author_image?: string;
  ai_score?: number;
  rating?: number;
  review_count?: number;
  price?: number | null;
>>>>>>> merged-prs-20250907-203621
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/resolved-merge-conflicts
interface CategoryListingPageProps {;
  title: string,,
}
;
<<<<<<< HEAD
interface CategoryListingPageProps {;
  }
  "title": string,,
  "description": string,;
  "listings": Listing[],;
  sortOptions?: { "label": string, "value": string }[],;
  filterOptions?: { "label": string, "value": string }[];
}
return (;
=======
export function CategoryListingPage({;
  title,;
  description,;
  listings: initialListings,;
  sortOptions = [;
    { label: 'Newest First', value: 'newest' },;
    { label: 'Oldest First', value: 'oldest' },;
    { label: 'Highest Rating', value: 'rating-high' },;
    { label: 'Highest AI Match', value: 'ai-match' },;
    { label: 'A-Z', value: 'a-z' },;
    { label: 'Z-A', value: 'z-a' }],;
  filterOptions = [;
    { label: 'All', value: 'all' },;
    { label: 'Highly Rated', value: 'high-rating' },;
    { label: 'Best AI Match', value: 'best-match' }];
}: CategoryListingPageProps) {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
>>>>>>> origin/resolved-merge-conflicts
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
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch,;'
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;'
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;'
      return matchesSearch;
=======
export function CategoryListingPage() { return null; }
>>>>>>> origin/chore/fix-lint-and-merge
    });
    .sort((a, b) => {;
      // Apply sorting;
<<<<<<< HEAD
      }
=======
<<<<<<< HEAD
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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
        case 'z-a':;'
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        case 'z-a':;
>>>>>>> origin/resolved-merge-conflicts
          return b.title.localeCompare(a.title),;
        "default": return 0;
      }
    });
  return (;
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
<<<<<<< HEAD
          <div className="text-center mb-12">;"
=======
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;

<<<<<<< HEAD
              {description}

=======
              {description}

                    ) : null}
                    <span>'
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => ("

=======
  return (
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || ;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag => ;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      ;
      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch,;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;
      ;
      return matchesSearch,;
    });
    .sort((a, b) => {;
      // Apply sorting;
      switch (selectedSort) {;
        case 'newest':;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),;
        case 'oldest':;
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),;
        case 'rating-high':;
          return (b.rating || 0) - (a.rating || 0),;
        case 'ai-match':;
          return (b.aiScore || 0) - (a.aiScore || 0),;
        case 'a-z':;
          return a.title.localeCompare(b.title),;
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        default:return 0;
      }
    }),;
;
  return (;
  return (;
    <>;
>>>>>>> merged-prs-20250907-203621
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
>>>>>>> origin/resolved-merge-conflicts
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
              {description}
            </p>
          </div>
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    {selectedSort === 'a-z' ? (
                      <ArrowDownAZ className="mr-2 h-4 w-4" />
                    ) : selectedSort === 'z-a' ? (
                      <ArrowUpZA className="mr-2 h-4 w-4" />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    ) : null}
                    <span>'
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
<<<<<<< HEAD
                  {sortOptions.map((option) => ("

=======
                  {sortOptions.map((option) => (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>
                      {filterOptions.find(option => option.value === selectedFilter)?.label |'Filter'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {filterOptions.map((option) => (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Select value={selectedSort} onValueChange={setSelectedSort}>;"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                  <div className="flex items-center">;'
                    {selectedSort === 'a-z' ? (;"
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;

                    </span>;
                  </div>;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
<<<<<<< HEAD
              {description}
=======
<<<<<<< HEAD
          {/* Listings Grid */}
          {processedListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
                <ListingScoreCard
                  key={listing.id}
                  title={listing.title}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e && e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;
                <Input;
                  type="text";
                  placeholder="Search listings...";
                  value={searchQuery}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;
              ;
              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;
                    ) :selectedSort === 'z-a' ? (;
                      <ArrowUpZA className="mr-2 h-4 w-4" />;
                    ) :null}
                    <span>;
                      {sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {sortOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;                      {option.label}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
;
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    <Filter className="mr-2 h-4 w-4" />;
                    <span>;
                      {filterOptions.find(option => option.value === selectedFilter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {filterOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;                      {option.label}
                    </SelectItem>;
                  ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                </SelectContent>;
              </Select>;
            </div>;
          </div>;

          {/* Listings Grid */}
          {processedListings.length > 0 ? (
            <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-6">"
              {processedListings.map((listing) => (
<<<<<<< HEAD
                <ListingScoreCard          {/* Results Count */}
          <div className="mb-6">;"
            <p className="text-zion-slate-light">;"
              Showing {processedListings && processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}                  title={listing.title}`
                  description={listing.description}
                  category={listing.subcategory |listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
            </p>;
          </div>;

          {/* Listings Grid */}
          {processedListings && processedListings.length > 0 ? (;
            <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-6">;"
              {processedListings && processedListings.map((listing) => (;
                <ListingScoreCard
}
key={listing && listing.id}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <ListingScoreCard;
;

          {/* Results Count */}"
          <div className="mb-6">;"
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;"`
              {searchQuery && ` for "${searchQuery}"`}

<<<<<<< HEAD
=======
=======
                <ListingScoreCard
<<<<<<< HEAD
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>;
          </div>;
;
          {/* Listings Grid */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {processedListings.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings.map((listing) => (;
                <ListingScoreCard ;
                  key={listing.id}                  title={listing.title}
<<<<<<< HEAD

                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}

                  key={listing.id}
                  title={listing.title}

=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
<<<<<<< HEAD

            </p>;
          </div>;

          {/* Listings Grid */}
          {processedListings && processedListings.length > 0 ? (;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings && processedListings.map((listing) => (;
                <ListingScoreCard;
                  key={listing && listing.id}
>>>>>>> origin/resolved-merge-conflicts
                  title={listing && listing.title}
                  description={listing && listing.description}
                  category={listing && listing.subcategory || listing && listing.category}
                  image={listing && listing.image}
                  tags={listing && listing.tags}
                  author={listing && listing.author}
                  authorImage={listing && listing.authorImage}
                  aiScore={listing && listing.aiScore}
                  rating={listing && listing.rating}
<<<<<<< HEAD
                  reviewCount={listing && listing.reviewCount} />;
              ))}
                  setSearchQuery(""),"
                className="border-zion-purple text-zion-purple "hover":bg-zion-purple/10""
              >
                Clear all filters
              </Button>
=======
                  reviewCount={listing && listing.reviewCount}
                />;
              ))}
"
                  setSearchQuery(""),

                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>

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
                  setSelectedFilter(filterOptions[0].value),;
                }}

              <Button;
                variant="outline";
=======
<<<<<<< HEAD
=======
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
=======
          {processed_listings.length > 0 ? (
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
              {processed_listings.map ((listing) => (
                <ListingScoreCard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={listing.id}
                  title={listing.title}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
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
                  setSearchQuery($2);
                  setSelectedFilter(filterOptions[0].value)
                }
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
            </div>          )}
        </div>;
      </div>;
      <Footer />;
    </>;
  );
                  review_count={listing.review_count}
                />))}
            </div>) : (
            <div className="text - center py-20">;"
              <h3 className="text - xl font - bold text - white mb-2">No listings found</h3>;"
              <p className="text - zion - slate - light mb-6">Try adjusting your filters or search query</p>;"
              <Button;
<<<<<<< HEAD
                variant="outline";"
                on_click={() => {
                  }
                  setSearchQuery ("");"
                  setSelectedFilter (filter_options[0].value);
                }
                className="border - zion - purple text - zion - purple "hover":bg - zion-purple / 10";"
=======
                variant="outline";
<<<<<<< HEAD
=======
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}
=======
              <Button
                variant="outline" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD

                Clear all filters;
              </Button>
            </div>

            </div>;

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

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),; //Example listing type interface Listing {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
}interface CategoryListingPageProps {
  title: string;
description: string;
listings: Listing[];
sortOptions?: {
  label: string, value: string 
}[];
filterOptions?: {
  label: string, value: string 
}[] 
}export function CategoryListingPage ({
  title;
description;
listings: initialListings;
sortOptions = [ {
  label: 'Newest First', value: 'newest' 
};
{
  label: 'Oldest First', value: 'oldest' 
};
{
  label: 'Highest Rating', value: 'rating-high' 
};
{
  label: 'Highest AI Match', value: 'ai-match' 
};
{
  label: 'A-Z', value: 'a-z' 
};
{
  label: 'Z-A', value: 'z-a' 
}];
filterOptions = [ {
  label: 'All', value: 'all' 
};
{
  label: 'Highly Rated', value: 'high-rating' 
};
{
  label: 'Best AI Match', value: 'best-match' 
}] 
}: CategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState ("");
const [selectedSort, setSelectedSort] = useState (sortOptions[0].value);
const [selectedFilter, setSelectedFilter] = useState (filterOptions[0].value);
//Apply search filter const matchesSearch = listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) );
//Apply category filters if (selectedFilter === 'all') return matchesSearch;
if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;
if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
switch (selectedSort) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();
case 'rating-high': return (b.rating || 0) - (a.rating || 0);
case 'ai-match': return (b.aiScore || 0) - (a.aiScore || 0);
case 'a-z': return a.title.localeCompare (b.title);
<<<<<<< HEAD
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

=======
case 'z-a': return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {
  title 
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {
  description 
}</p> </div> {
  /* Filters and Search */ 
}<div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light"> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate"/> <Input className="pl-10 bg-zion-blue border border-zion-blue-light text-white"/> </div> <Select value= {
  selectedSort 
}onValueChange= {
  setSelectedSort 
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> {
  selectedSort === 'a-z' ? (<ArrowDownAZ className="mr-2 h-4 w-4"/>) : selectedSort === 'z-a' ? (<ArrowUpZA className="mr-2 h-4 w-4"/>) : null 
}<span> {
  sortOptions.find (option => option.value === selectedSort) ?.label || 'Sort By' 
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {
  sortOptions.map ( (option) => (<SelectItem key= {
  option.value 
}value= {
  option.value 
}className="text-white"> {
  option.label 
}</SelectItem>) ) 
}</SelectContent> </Select> <Select value= {
  selectedFilter 
}onValueChange= {
  setSelectedFilter 
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4"/> <span> {
  filterOptions.find (option => option.value === selectedFilter) ?.label || 'Filter' 
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {
  filterOptions.map ( (option) => (<SelectItem key= {
  option.value 
}value= {
  option.value 
}className="text-white"> {
  option.label 
}</SelectItem>) ) 
}</SelectContent> </Select> </div> </div> {
  /* Results Count */ 
}<div className="mb-6"> </p> </div> {
  /* Listings Grid */ 
}{
  processedListings.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {
  processedListings.map ( (listing) => (<ListingScoreCard key= {
  listing.id 
}title= {
  listing.title 
}description= {
  listing.description 
}category= {
  listing.subcategory || listing.category 
}image= {
  listing.image 
}tags= {
  listing.tags 
}author= {
  listing.author 
}authorImage= {
  listing.authorImage 
}aiScore= {
  listing.aiScore 
}rating= {
  listing.rating 
}reviewCount= {
  listing.reviewCount 
}/>) ) 
}</div>) : (<div className="text-center py-20"> <h3 className="text-xl font-bold text-white mb-2">No listings found</h3> <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p> <Button 
}
}className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10" 
}</div> </div> <Footer /> </>) 
>>>>>>> merged-prs-20250907-203621
          )}
        </div>
      </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Footer />

    </>
  )
<<<<<<< HEAD

=======
=======

                Clear all filters;
              </Button>
            </div>

            </div>;

          )}

>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}