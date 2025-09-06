<<<<<<< HEAD
<<<<<<< HEAD
=======





import React from 'react';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======

// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Example listing type
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
interface Listing {
  id: string,
  title: string,
  description: string,
  category: string,
<<<<<<< HEAD


=======
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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
      const matchesSearch =;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
      if (selectedFilter === 'all') return matchesSearch,;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4,;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85,;
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
        case 'z-a':;
          return b.title.localeCompare(a.title),;
        default: return 0;
      }
    });
  return (;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              {description}
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
<<<<<<< HEAD
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
=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    ) : null}
                    <span>
                      {sortOptions.find(option => option.value === selectedSort)?.label |'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

<<<<<<< HEAD
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          {/* Listings Grid */}
          {processedListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
                <ListingScoreCard
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          {/* Results Count */}
          <div className="mb-6">;
            <p className="text-zion-slate-light">;
              Showing {processedListings && processedListings.length} results;
              {searchQuery && ` for "${searchQuery}"`}
                  key={listing.id}
                  title={listing.title}
                  description={listing.description}
                  category={listing.subcategory |listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}
<<<<<<< HEAD
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
                  setSearchQuery("");

                  setSearchQuery(""),
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
                }}

                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Clear all filters;
              </Button>;
            </div>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          )}
        </div>;
      </div>;
      <Footer />;
    </>;
  );
=======
                  review_count={listing.review_count}
                />))}
            </div>) : (
            <div className="text - center py - 20">;
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;
              <Button;
                variant="outline";
                on_click={() => {
                  setSearchQuery ("");
                  setSelectedFilter (filter_options[0].value);
                }}
                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
              >;
                Clear all filters;
              </Button>;
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}