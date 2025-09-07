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
=======



<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ListingScoreCard} from "@/components/ListingScoreCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { GradientHeading } from '@/components / GradientHeading';
import { ListingScoreCard } from '@/components / ListingScoreCard';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from './lucide-react';
// Example listing type;
<<<<<<< HEAD
// Example listing type
import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react";
// Example listing type
interface Listing {

  id: string
  title: string
  description: string
  category: string

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
interface CategoryListingPageProps {

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        (listing.tags && listing.tags.some(tag =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating |0) >= 4;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore |0) >= 85;
      return matchesSearch
    })
    .sort((a, b) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating-high':
          return (b.rating |0) - (a.rating |0);
        case 'ai-match':
          return (b.aiScore |0) - (a.aiScore |0);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default: return 0
      }
    });
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react",

// Example listing type
=======
=======
// Example listing type
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface Listing {

  id: string,
  title: string,
  description: string,
  category: string,
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
  createdAt: string
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
;

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
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface CategoryListingPageProps {;
  title: string,;
  description: string,;
  listings: Listing[],;
  sortOptions?: { label: string, value: string }[],;
  filterOptions?: { label: string, value: string }[];
}

<<<<<<< HEAD
  return (
    <>
      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
;
<<<<<<< HEAD
export function CategoryListingPage() {;
  }
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  // Process listings based on filters and search;
    .filter((listing) => {;
      // Apply search filter;
      }
=======
<<<<<<< HEAD
export function CategoryListingPage({ 
  title, ;
  description;
  listings: initialListings,
  sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Highest Rating', value: 'rating-high' },
    { label: 'Highest AI Match', value: 'ai-match' },
    { label: 'A-Z', value: 'a-z' },
    { label: 'Z-A', value: 'z-a' }],
  filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Highly Rated', value: 'high-rating' },
    { label: 'Best AI Match', value: 'best-match' }]
}: CategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const matchesSearch = 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags && listing.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
      
      return matchesSearch
    })
    .sort((a, b) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating-high':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-match':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default: return 0
      }
    });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
;
export function CategoryListingPage({;
  title,;
  description,;
export function CategoryListingPage(): any ({ ;
  title, ;
  description;
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react",;
;
// Example listing type;
interface Listing {;
  id:string,;
  title:string,;
  description:string,;
  category:string,;
  subcategory?:string,;
  image?:string,;
  tags?:string[],;
  author?:string,;
  authorImage?:string,;
  aiScore?:number,;
  rating?:number,;
  reviewCount?:number,;
  price?:number | null,;
  createdAt:string;
}
;
interface CategoryListingPageProps {;
  title:string,;
  description:string,;
  listings:Listing[],;
  sortOptions?:{ label:string, value:string }[],;
  filterOptions?:{ label:string, value:string }[],;
}
;
export function CategoryListingPage({ ;
  title, ;
  description,;
  listings:initialListings,;
  sortOptions = [;
    { label:'Newest First', value:'newest' },;
    { label:'Oldest First', value:'oldest' },;
    { label:'Highest Rating', value:'rating-high' },;
    { label:'Highest AI Match', value:'ai-match' },;
    { label:'A-Z', value:'a-z' },;
    { label:'Z-A', value:'z-a' }],;
  filterOptions = [;
    { label:'All', value:'all' },;
    { label:'Highly Rated', value:'high-rating' },;
    { label:'Best AI Match', value:'best-match' }];
} CategoryListingPageProps) {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  ;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter(listing => {;
      // Apply search filter;
      const matchesSearch =;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
<<<<<<< HEAD
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
      if (selectedFilter === 'all') return matchesSearch,;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;
      const matchesSearch = ;
      return matchesSearch;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        default: return 0;
      }
    });
<<<<<<< HEAD
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
  return (
    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
        <div className="container mx-auto">;"
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;

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
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



              {description}

            </p>;
          </div>;


              {description}
            </p>;
          </div>;
;
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
<<<<<<< HEAD
              {description}
            </p>
          </div>
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
<<<<<<< HEAD
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
                    ) : null}
                    <span>
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
<<<<<<< HEAD

              <Select value={selectedSort} onValueChange={setSelectedSort}>;"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                  <div className="flex items-center">;'
                    {selectedSort === 'a-z' ? (;"
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;

                    </span>;
                  </div>;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;

=======
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
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
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
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
                </SelectContent>;
              </Select>;
            </div>;
          </div>;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Listings Grid */}
          {processedListings.length > 0 ? ("
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
<<<<<<< HEAD

                <ListingScoreCard;
;

          {/* Results Count */}"
          <div className="mb-6">;"
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;"`
              {searchQuery && ` for "${searchQuery}"`}

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
            </p>;
          </div>;
;
          {/* Listings Grid */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {processedListings.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings.map((listing) => (;
                <ListingScoreCard ;
                  key={listing.id}                  title={listing.title}
<<<<<<< HEAD

=======
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
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
=======
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  key={listing.id}
                  title={listing.title}

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
<<<<<<< HEAD
"
                  setSearchQuery(""),

=======

                  setSearchQuery(""),

<<<<<<< HEAD
                  setSearchQuery("");

                  setSearchQuery(""),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  setSelectedFilter(filterOptions[0].value)
                }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
<<<<<<< HEAD

                />;
              ))}
=======
            </div>

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>;
          ) :(;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  reviewCount={listing.reviewCount}
                />;
              ))}
            </div>;
          ) :(;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button ;
                variant="outline" ;
                onClick={() => {;
                  setSearchQuery(""),;
                  setSelectedFilter(filterOptions[0].value),;
                }}

              <Button;
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
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
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
  case 'newest': return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime ();
case 'oldest': return new Date (a.createdAt) .getTime () - new Date (b.createdAt) .getTime ();
case 'rating-high': return (b.rating || 0) - (a.rating || 0);
case 'ai-match': return (b.aiScore || 0) - (a.aiScore || 0);
case 'a-z': return a.title.localeCompare (b.title);
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
          )}
        </div>
      </div>
      <Footer />
    </>
  )
=======

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
<<<<<<< HEAD

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

      <Footer />

    </>
  )

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}