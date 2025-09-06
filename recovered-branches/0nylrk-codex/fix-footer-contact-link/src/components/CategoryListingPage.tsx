<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======





import React from 'react';
>>>>>>> main
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
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
=======
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from "lucide-react",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Example listing type
=======

// Example listing type;
interface Listing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;

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
=======
// Example listing type
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
interface Listing {
  id: string,
  title: string,
  description: string,
  category: string,
<<<<<<< HEAD
=======


=======
>>>>>>> main
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
=======


}
;

>>>>>>> main
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {description}
            </p>
          </div>
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
=======




              {description}

            </p>;
          </div>;


          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
>>>>>>> main
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;

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
=======
  created_at: string;
}
interface CategoryListingPageProps {
  title: string,
  description: string,
  listings: Listing[],
  sort_options?: { label: string, value: string }[],
  filter_options?: { label: string, value: string }[];
}
export /**
 * CategoryListingPage - Function description
 */
function CategoryListingPage() {
  const [search_query, setSearchQuery] = useState ("");
  const [selected_sort, setSelectedSort] = useState (sort_options[0].value);
  const [selected_filter, setSelectedFilter] = useState (filter_options[0].value);
;
  // Process listings based on filters and search;
  const processed_listings = initial_listings;
    .filter (listing => {
      // Apply search filter;
      const matches_search =;
        listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        (listing.tags && listing.tags.some (tag =>;
          tag.toLowerCase ().includes (search_query.toLowerCase ())));
;
      // Apply category filters;
      // Check condition
if (return matches_search) {
  $2
}
      if (return matches_search && (listing.rating || 0) >= 4) {
  $2
}
      if (return matches_search && (listing.ai_score || 0) >= 85) {
  $2
}
      return matches_search;
    });
    .sort ((a, b) => {
      // Apply sorting;
      switch (selected_sort) {
        case 'newest':;
          return new Date (b.created_at).get_time () - new Date (a.created_at).get_time ();
        case 'oldest':;
          return new Date (a.created_at).get_time () - new Date (b.created_at).get_time ();
        case 'rating - high':;
          return (b.rating || 0) - (a.rating || 0);
        case 'ai - match':;
          return (b.ai_score || 0) - (a.ai_score || 0);
        case 'a - z':;
          return a.title.locale_compare (b.title);
        case 'z - a':;
          return b.title.locale_compare (a.title);
        default: return 0;
      }
    });
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="text - center mb - 12">;
            <GradientHeading>{title}</GradientHeading>;
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
              {description}
            </p>;
          </div>;
          {/* Filters and Search */}
          <div className="bg - zion - blue - dark rounded - lg p - 6 mb - 8 border border - zion - blue - light">;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate" />;
                <Input;
                  type="text";
                  placeholder="Search listings...";
                  value={search_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) => setSearchQuery (e.target.value)}
                  className="pl - 10 bg - zion - blue border border - zion - blue - light text - white";
                />;
              </div>;
              <Select value={selected_sort} onValueChange={setSelectedSort}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;
                  <div className="flex items - center">;
                    {selected_sort === 'a - z' ? (
                      <ArrowDownAZ className="mr - 2 h - 4 w - 4" />) : selected_sort === 'z - a' ? (
                      <ArrowUpZA className="mr - 2 h - 4 w - 4" />) : null}
                    <span>;
                      {sort_options.find (option => option.value === selected_sort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                  {sort_options.map ((option) => (
                    <SelectItem key={option.value} value={option.value} className="text - white">;
                      {option.label}
                    </SelectItem>))}
                </SelectContent>;
              </Select>;
              <Select value={selected_filter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;
                  <div className="flex items - center">;
                    <Filter className="mr - 2 h - 4 w - 4" />;
                    <span>;
                      {filter_options.find (option => option.value === selected_filter)?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                  {filter_options.map ((option) => (
                    <SelectItem key={option.value} value={option.value} className="text - white">;
                      {option.label}
                    </SelectItem>))}

                </SelectContent>;
              </Select>;
            </div>;
          </div>;





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          {/* Listings Grid */}
          {processedListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedListings.map((listing) => (
                <ListingScoreCard
<<<<<<< HEAD
=======
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
                <ListingScoreCard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
                  key={listing.id}
                  title={listing.title}
                  description={listing.description}
                  category={listing.subcategory |listing.category}
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
<<<<<<< HEAD
                  setSearchQuery("");

=======
                  setSearchQuery(""),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                  author_image={listing.author_image}
                  ai_score={listing.ai_score}
                  rating={listing.rating}

            </p>;
          </div>;

          {/* Listings Grid */}
          {processedListings && processedListings.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {processedListings && processedListings.map((listing) => (;
                <ListingScoreCard
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
=======

                  setSearchQuery(""),

>>>>>>> main
                  setSelectedFilter(filterOptions[0].value)
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> main
            </div>;
          ) : (;
            <div className="text-center py-20">;
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>;
<<<<<<< HEAD
              <Button;
                variant="outline";
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}
=======
              <Button
                variant="outline" 
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }}

>>>>>>> main
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
        </div>
      </div>
      <Footer />
    </>
  )
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> main
}