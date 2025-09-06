<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD

import React from 'react';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
=======
import React from 'react';import {useState} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react';import {useState} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



import React from 'react';
import {useState} from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ListingScoreCard} from "@/components/ListingScoreCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState} from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {GradientHeading} from "@/components/GradientHeading";"
import {ListingScoreCard} from "@/components/ListingScoreCard";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";"
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Example listing type
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Example listing type
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
=======
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";import { useState } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";import { useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";

// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;

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
// Example listing type
import { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
=======


// Example listing type;
"
import { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { GradientHeading } from "@/components/GradientHeading","
import { ListingScoreCard } from "@/components/ListingScoreCard","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input",";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react";
// Example listing type;
interface Listing {}
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
  createdAt: string;
}
interface CategoryListingPageProps {}
  title: string;
  description: string;
  listings: Listing[]
  sortOptions?: { label: string, value: string }[]
  filterOptions?: { label: string, value: string }[]
}
export function CategoryListingPage() { return null; }
    .filter(listing => {}
      // Apply search filter;
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        (listing.tags && listing.tags.some(tag =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      // Apply category filters'
      if (selectedFilter === 'all') return matchesSearch;'
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating |0) >= 4;'
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore |0) >= 85;
      return matchesSearch;
    })
    .sort((a, b) => {}
      // Apply sorting;
      switch (selectedSort) {'
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();'
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();'
        case 'rating-high':
          return (b.rating |0) - (a.rating |0);'
        case 'ai-match':
          return (b.aiScore |0) - (a.aiScore |0);'
        case 'a-z':
          return a.title.localeCompare(b.title);'
        case 'z-a':
          return b.title.localeCompare(a.title);
        default: return 0;
      }
    });
  return (
    <>
      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select","
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Example listing type
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface Listing {
=======
// Example listing type;
interface Listing {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
// Example listing type
interface Listing {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string,
  title: string,
  description: string,
  category: string,

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  createdAt: string;
"
import { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { GradientHeading } from "@/components/GradientHeading",;"
import { ListingScoreCard } from "@/components/ListingScoreCard",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;"
=======
  createdAt: string

import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
// Example listing type}
=======

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Example listing type}
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
;
=======


}
;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CategoryListingPageProps {;
  title: string,;
  description: string,;
  listings: Listing[],;
  sortOptions?: { label: string, value: string }[],;
  filterOptions?: { label: string, value: string }[];
}

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>
      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
;
export function CategoryListingPage() { return null; }
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
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        default: return 0;
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
  return (
    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
        <div className="container mx-auto">;"
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




              {description}

<<<<<<< HEAD


          {/* Filters and Search */}"
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;"
              <div className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;



                <Input"
                  type="text""
                  placeholder="Search listings..."
                  value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    ) : null}
                    <span>'
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => ("
=======
            </p>;
          </div>;


          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
                    ) : null}
                    <span>
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                  <div className="flex items-center">"
                    <Filter className="mr-2 h-4 w-4" />
                    <span>'
                      {filterOptions.find(option => option.value === selectedFilter)?.label |'Filter'}
                    </span>
                  </div>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {filterOptions.map((option) => ("
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
<<<<<<< HEAD
          {/* Results Count */}"
          <div className="mb-6">"
            <p className="text-zion-slate-light">
              Showing {processedListings.length} results"
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

                  onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e && e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;

              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className="mr-2 h-4 w-4" />;
                    ) : selectedSort === 'z-a' ? (;
                      <ArrowUpZA className="mr-2 h-4 w-4" />;
                    ) : null}
                    <span>;
                      {sortOptions && sortOptions.find(option => option && option.value === selectedSort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {sortOptions && sortOptions.map((option) => (;
                    <SelectItem key={option && option.value} value={option && option.value} className="text-white">;
                      {option && option.label}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;

<<<<<<< HEAD
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
                  <div className="flex items-center">;"
                    <Filter className="mr-2 h-4 w-4" />;
                    <span>;

                    </span>;
                  </div>;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

              {description}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

              {description}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <div className="flex items-center">;
                    <Filter className="mr-2 h-4 w-4" />;
                    <span>;
                      {filterOptions && filterOptions.find(option => option && option.value === selectedFilter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {filterOptions && filterOptions.map((option) => (;
                    <SelectItem key={option && option.value} value={option && option.value} className="text-white">;
                      {option && option.label}
                    </SelectItem>;
                  ))}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          {/* Listings Grid */}
          {processedListings.length > 0 ? ("
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <ListingScoreCard
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {/* Results Count */}
          <div className="mb - 6">;
            <p className="text - zion - slate - light">;
              Showing {processed_listings.length} results;
              {search_query && ` for "${search_query}"`}
            </p>;
          </div>;
          {/* Listings Grid */}
          {processed_listings.length > 0 ? (
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
              {processed_listings.map ((listing) => (
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <ListingScoreCard;
;


          {/* Results Count */}"
          <div className="mb-6">;"
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;"`
              {searchQuery && ` for "${searchQuery}"`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <ListingScoreCard
;
          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </p>;
          </div>;
;
          {/* Listings Grid */}
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
                  key={listing.id}
                  title={listing.title}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={listing.id}
                  title={listing.title}
=======
                <ListingScoreCard          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}                  title={listing.title}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <ListingScoreCard          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}                  title={listing.title}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  description={listing.description}
                  category={listing.subcategory |listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
<<<<<<< HEAD
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

                  setSelectedFilter(filterOptions[0].value)
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>

            </div>;
          ) : (;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
              <Button
                variant="outline" 
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
"
                  setSearchQuery(""),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


                  setSelectedFilter(filterOptions[0].value)

                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                }}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                  setSelectedFilter(filterOptions[0].value)
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
                }}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            </div>


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>;
          ) : (;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Button
                variant="outline" 
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }}

=======
=======
                }}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  reviewCount={listing.reviewCount}
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
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                }}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                }}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
=======

                }}
"
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                Clear all filters;
              </Button>
            </div>

            </div>;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          ) : (;"
            <div className="text-center py-20">;"
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;"
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;


                }}

"
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters;
              </Button>
            </div>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          )}
=======
            </div>          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </div>          )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Clear all filters;
              </Button>;
            </div>;
          )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </div>;
      <Footer />;
    </>;
  );
<<<<<<< HEAD
=======
                  review_count={listing.review_count}
                />))}
<<<<<<< HEAD
            </div>) : (
            <div className="text - center py - 20">;
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
              <Button;
=======
            </div>) : ("
            <div className="text - center py - 20">;"
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;"
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
              <Button;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                variant="outline";
                on_click={() => {"
                  setSearchQuery ("");
                  setSelectedFilter (filter_options[0].value);
                }}
<<<<<<< HEAD
<<<<<<< HEAD
                className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
=======
                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >;
                Clear all filters;
              </Button>;
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======



}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
