<<<<<<< HEAD


<<<<<<< HEAD

=======
import { use_auth } from '@/context / auth / AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import ProductCard from '@/components / ProductCard';
import {TalentCard} from '@/components / talent / TalentCard';
import {CategoryCard} from '@/components / CategoryCard';
import {SearchEmptyState} from '@/components / marketplace / EmptyState';
import {MARKETPLACE_LISTINGS} from '@/data / listing_data';
import {TALENT_PROFILES} from '@/data / talent_data';
import {BLOG_POSTS} from '@/data / blog - posts';
import {use_debounce} from '@/hooks / use_debounce';
import {log_info, logErrorToProduction} from '@/utils / production_logger';
import { GetServerSideProps  } from 'next';
import { useRouter  } from 'next/router';
import { useState, useEffect  } from 'react';
import { useAuth  } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react'
import { SEO  } from '@/components/SEO';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
<<<<<<< HEAD
<<<<<<< HEAD


=======
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import ProductCard from '@/components/ProductCard';
import { TalentCard  } from '@/components/talent/TalentCard';
import { CategoryCard  } from '@/components/CategoryCard';
import { SearchEmptyState  } from '@/components/marketplace/EmptyState';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { TALENT_PROFILES  } from '@/data/talentData';
import { BLOG_POSTS  } from '@/data/blog-posts';
import { useDebounce  } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface BaseSearchResult {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  author?: {;
=======
  author?: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    name: string;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
<<<<<<< HEAD
<<<<<<< HEAD

;

interface TalentSearchResult extends BaseSearchResult {
=======

interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;

interface TalentSearchResult extends BaseSearchResult {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type: 'talent';
  rating?: number;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  type: 'talent';
  rating?: number;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface CategorySearchResult extends BaseSearchResult {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface CategorySearchResult extends BaseSearchResult {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type: 'category';
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type SearchResult =;
  | ProductSearchResult;
  | TalentSearchResult;
  | BlogSearchResult;
  | CategorySearchResult;
<<<<<<< HEAD
<<<<<<< HEAD


// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result && result.type === 'product' || result && result.type === 'equipment';

=======
// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result && result.type === 'product' || result && result.type === 'equipment';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const hasRating = (;
  result: SearchResult;
): result is ProductSearchResult | TalentSearchResult =>;
  result && result.type === 'product' ||;
  result && result.type === 'equipment' ||;
  result && result.type === 'talent';
<<<<<<< HEAD

interface SearchResultsPageProps {;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
interface SearchResultsPageProps {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
interface OfflineFilters {;
interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
interface CategorySearchResult extends BaseSearchResult {
  type: 'category';

type SearchResult =
  | ProductSearchResult
  | TalentSearchResult
  | BlogSearchResult
  | CategorySearchResult;
// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult =>
  result.type === 'product' |result.type === 'equipment';
const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' |
  result.type === 'equipment' |
  result.type === 'talent';
interface SearchResultsPageProps {

  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, Filter, Grid, List } from 'lucide-react'
=======
import { Search, Filter, Grid, List } from 'lucide-react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchEmptyState } from '@/components/marketplace/EmptyState';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { useDebounce } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
<<<<<<< HEAD


interface BaseSearchResult {
  id: string,
  title: string,
  description?: string;
  slug: string,
  image?: string;
  author?: {
    name: string,
    avatar?: string
  };
  tags?: string[];
  category?: string;
  date?: string
}

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment',
  price?: number;
  rating?: number
}

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent',
  rating?: number
}

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog'
}

interface CategorySearchResult extends BaseSearchResult {
  type: 'category'
}

type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult;

// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult => 
  result.type === 'product' || result.type === 'equipment';

const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

interface SearchResultsPageProps {
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}
<<<<<<< HEAD

interface OfflineFilters {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
interface BaseSearchResult {;
  id: string;
  title: string;
  description?: string,;
  slug: string;
  image?: string,;
  author?: {;
    name: string;
    avatar?: string;
  },;
  tags?: string[],;
  category?: string,;
  date?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment',;
  price?: number,;
  rating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface TalentSearchResult extends BaseSearchResult {;
  type: 'talent',;
  rating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface BlogSearchResult extends BaseSearchResult {;
  type: 'blog';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface CategorySearchResult extends BaseSearchResult {;
  type: 'category';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult;
// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result.type === 'product' || result.type === 'equipment';
const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult =>;
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';
interface SearchResultsPageProps {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
interface OfflineFilters {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
<<<<<<< HEAD
<<<<<<< HEAD


=======
  minRating?: number;
function offlineSearch(
  query: string
  page = 1
  limit = 12
  filters: OfflineFilters = {}
): { results: SearchResult[]; totalCount: number } {  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(
    p =>
      match(p.title) |
      match(p.description) |
      match(p.category) |
      p.tags?.some(t => match(t))
  ).map(p => ({    id: p.id
    title: p.title
    description: p.description |''
    type: 'product' as const
    slug: p.id
    image: p.images?.[0]
    price: p.price ?? undefined
    rating: p.rating
    author: p.author
      ? { name: p.author.name, avatar: p.author.avatarUrl }
      : undefined
    tags: p.tags
    category: p.category
    date: p.createdAt
  }));
  const talentResults = TALENT_PROFILES.filter(
    t =>
      match(t.full_name) |
      match(t.professional_title) |
      match(t.bio) |
      t.skills?.some(s => match(s))
  ).map(t => ({    id: t.id
    title: t.full_name
    description: t.professional_title |''
    type: 'talent' as const
    slug: t.id
    image: t.profile_picture_url
    rating: t.average_rating
    author: { name: t.full_name, avatar: t.profile_picture_url }
    tags: t.skills
    category: t.location
    date: undefined
  }));
  const blogResults = BLOG_POSTS.filter(
    b =>
      match(b.title) |
      match(b.excerpt) |
      match(b.content) |
      b.tags?.some(t => match(t))
  ).map(b => ({    id: b.slug
    title: b.title
    description: b.excerpt
    type: 'blog' as const
    slug: b.slug
    image: b.featuredImage
    tags: b.tags
    category: 'Blog'
    date: b.publishedDate
  }));
  let all = [...productResults, ...talentResults, ...blogResults];
  if (filters.category) {
    all = all.filter(r => r.category === filters.category);  }
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
  }
  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
  if (typeof filters && filters.minRating === 'number') {;
    all = all && all.filter(r => {;
      if (r && r.type === 'product' || r && r.type === 'talent') {;
        return (r && r.rating ?? 0) >= filters && filters.minRating!;
      }
      return true;
    });  }
  if (filters && filters.sortBy && filters && filters.sortBy !== 'relevance') {;
    switch (filters && filters.sortBy) {;
      case 'price_asc':;
        all && all.sort((a, b) => {;
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          return aPrice - bPrice;        });
        break;
      case 'price_desc':;
        all && all.sort((a, b) => {;
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
          return bPrice - aPrice;        });
        break;
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface OfflineFilters {;
  sortBy?: string;
  category?: string;
  minPrice?: number,;
  maxPrice?: number,;
  minRating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function offlineSearch(;
  query: string;
  page = 1;
  limit = 12;
  filters: OfflineFilters = {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
): { results: SearchResult[], totalCount: number } {;
  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(;
    (p) =>;
      match(p.title) ||;
      match(p.description) ||;
      match(p.category) ||;
      p.tags?.some((t) => match(t))).map((p) => ({;
    id: p.id;
    title: p.title;
    description: p.description || '';
    type: 'product' as const;
    slug: p.id,;
    image: p.images?.[0],;
    price: p.price ?? undefined,;
    rating: p.rating,;
    author: p.author;
      ? { name: p.author.name, avatar: p.author.avatarUrl   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      : undefined,;
    tags: p.tags,;
    category: p.category,;
    date: p.createdAt})),;
  const talentResults = TALENT_PROFILES.filter(;
    (t) =>;
      match(t.full_name) ||;
      match(t.professional_title) ||;
      match(t.bio) ||;
      t.skills?.some((s) => match(s))).map((t) => ({;
    id: t.id;
    title: t.full_name;
    description: t.professional_title || '';
    type: 'talent' as const;
    slug: t.id,;
    image: t.profile_picture_url,;
    rating: t.average_rating,;
    author: { name: t.full_name, avatar: t.profile_picture_url },;
    tags: t.skills,;
    category: t.location,;
    date: undefined})),;
  const blogResults = BLOG_POSTS.filter(;
    (b) =>;
      match(b.title) ||;
      match(b.excerpt) ||;
      match(b.content) ||;
      b.tags?.some((t) => match(t))).map((b) => ({;
    id: b.slug;
    title: b.title;
    description: b.excerpt;
    type: 'blog' as const;
    slug: b.slug,;
    image: b.featuredImage,;
    tags: b.tags,;
    category: 'Blog',;
    date: b.publishedDate})),;
  let all = [...productResults, ...talentResults, ...blogResults],;
  if (filters.category) {;
    all = all.filter(r => r.category === filters.category);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) >= filters.minPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.maxPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) <= filters.maxPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minRating === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product' || r.type === 'talent') {;
        return (r.rating ?? 0) >= filters.minRating!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (filters.sortBy && filters.sortBy !== 'relevance') {;
    switch (filters.sortBy) {;
      case 'price_asc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;
        });
        break;
      case 'price_desc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice;
        });
        break;
      case 'rating':;
        all.sort((a, b) => {;
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      case 'rating':;
        all && all.sort((a, b) => {;
          const aRating =;
            a && a.type === 'product' || a && a.type === 'talent' ? (a && a.rating ?? 0) : 0;
          const bRating =;
            b && b.type === 'product' || b && b.type === 'talent' ? (b && b.rating ?? 0) : 0;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          return bRating - aRating;
        });
        break;
      default:;
        break;
    }
  } else {;
  return { results: paginated, totalCount: all.length }
export default function SearchResultsPage({
  initialResults
  query
  slug
  totalCount
  return { results: paginated, totalCount: all.length };
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          return aPrice - bPrice
        });
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice
        });
        break;
      case 'rating':
        all.sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating
        });
        break;
      default: break
    }
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title))

  }
  const start = (page - 1) * limit;


  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
=======

  return { results: paginated, totalCount: all.length };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======

  return { results: paginated, totalCount: all.length };

  }
const start = (page - 1) * limit;
  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function SearchResultsPage(): any ({;
  initialResults,;
  query,;
  slug,;
  totalCount,;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}: SearchResultsPageProps) {  const router = useRouter();
=======
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {
  const router = useRouter();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======

}: SearchResultsPageProps) {  const router = useRouter();

          const aRating =
            a.type === 'product' |a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' |b.type === 'talent' ? (b.rating ?? 0) : 0;
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface OfflineFilters {;
  sortBy?: string;
  category?: string;
  minPrice?: number,;
  maxPrice?: number,;
  minRating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function offlineSearch(;
  query: string;
  page = 1;
  limit = 12;
  filters: OfflineFilters = {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
): { results: SearchResult[], totalCount: number } {;
  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(;
    (p) =>;
      match(p.title) ||;
      match(p.description) ||;
      match(p.category) ||;
      p.tags?.some((t) => match(t))).map((p) => ({;
    id: p.id;
    title: p.title;
    description: p.description || '';
    type: 'product' as const;
    slug: p.id,;
    image: p.images?.[0],;
    price: p.price ?? undefined,;
    rating: p.rating,;
    author: p.author;
      ? { name: p.author.name, avatar: p.author.avatarUrl   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      : undefined,;
    tags: p.tags,;
    category: p.category,;
    date: p.createdAt})),;
  const talentResults = TALENT_PROFILES.filter(;
    (t) =>;
      match(t.full_name) ||;
      match(t.professional_title) ||;
      match(t.bio) ||;
      t.skills?.some((s) => match(s))).map((t) => ({;
    id: t.id;
    title: t.full_name;
    description: t.professional_title || '';
    type: 'talent' as const;
    slug: t.id,;
    image: t.profile_picture_url,;
    rating: t.average_rating,;
    author: { name: t.full_name, avatar: t.profile_picture_url },;
    tags: t.skills,;
    category: t.location,;
    date: undefined})),;
  const blogResults = BLOG_POSTS.filter(;
    (b) =>;
      match(b.title) ||;
      match(b.excerpt) ||;
      match(b.content) ||;
      b.tags?.some((t) => match(t))).map((b) => ({;
    id: b.slug;
    title: b.title;
    description: b.excerpt;
    type: 'blog' as const;
    slug: b.slug,;
    image: b.featuredImage,;
    tags: b.tags,;
    category: 'Blog',;
    date: b.publishedDate})),;
  let all = [...productResults, ...talentResults, ...blogResults],;
  if (filters.category) {;
    all = all.filter(r => r.category === filters.category);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) >= filters.minPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.maxPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) <= filters.maxPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minRating === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product' || r.type === 'talent') {;
        return (r.rating ?? 0) >= filters.minRating!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (filters.sortBy && filters.sortBy !== 'relevance') {;
    switch (filters.sortBy) {;
      case 'price_asc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;
        });
        break;
      case 'price_desc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice;
        });
        break;
      case 'rating':;
        all.sort((a, b) => {;
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating;
        });
        break;
      default: break;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } else {;
    all.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);
  return { results: paginated, totalCount: all.length }
export default function SearchResultsPage({
  initialResults
  query
  slug
  totalCount
  return { results: paginated, totalCount: all.length };

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}: SearchResultsPageProps) {  const router = useRouter();
  return { results: paginated, totalCount: all.length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function SearchResultsPage(req, res) {
  try {
  const router = useRouter();
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { isAuthenticated } = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [totalResults, setTotalResults] = useState(totalCount);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
<<<<<<< HEAD

=======
=======
  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({
        query: searchTerm
        page: String(page)
        limit: '12'
        sort: sortBy
      });      if (categoryFilter !== 'all') params.append('category', categoryFilter);
  // Fetch search results;
  const fetchResults = async (searchTerm: string, page = 1) => {;
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({;
        query: searchTerm;
        page: String(page);
        limit: '12';
        sort: sortBy});
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  // Fetch search results;
  const fetchResults = async (searchTerm: string, page = 1) => {;
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({;
        query: searchTerm;
        page: String(page);
        limit: '12';
        sort: sortBy});
      if (categoryFilter !== 'all') params.append('category', categoryFilter);

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);
      const response = await fetch(`/api/search?${params.toString()}`);
<<<<<<< HEAD

<<<<<<< HEAD

=======
      if (!response.ok) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Fetch search results;
  const fetchResults = async (searchTerm: string, page = 1) => {;
    try {;
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({;
        query: searchTerm,;
        page: String(page),;
        limit: '12',;
        sort: sortBy,;
      });      if (categoryFilter !== 'all') params && params.append('category', categoryFilter);
      if (minPrice) params && params.append('minPrice', minPrice);
      if (maxPrice) params && params.append('maxPrice', maxPrice);
      if (minRating) params && params.append('minRating', minRating);

      const response = await fetch(`/api/search?${params && params.toString()}`);

      if (!response && response.ok) {;
        throw new Error(`Search API error: ${response && response.status}`);
      }

      const data = await response && response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data && data.totalCount || data && data.results?.length || 0);

      if (page === 1) {;
        setResults(data && data.results || []);
      } else {;
        setResults(prev => [...prev, ...(data && data.results || [])]);
<<<<<<< HEAD

      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      if (!response.ok) {;
        throw new Error(`Search API error: ${response.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = await response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data.totalCount || data.results?.length || 0);
      if (page === 1) {;
        setResults(data.results || []);
      } else {;
        setResults((prev) => [...prev, ...(data.results || [])]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });

<<<<<<< HEAD
=======
      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const offline = offlineSearch(searchTerm, page, 12, {;
        sortBy,;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,;
        minPrice: minPrice ? Number(minPrice) : undefined,;
        maxPrice: maxPrice ? Number(maxPrice) : undefined,;
<<<<<<< HEAD



=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        minRating: minRating ? Number(minRating) : undefined}),;

      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);

      } else {;
        setResults((prev) => [...prev, ...offline.results]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Handle search input change;
  const handleSearch = (newQuery: string) => {;
    setSearchQuery(newQuery),;
    if (newQuery && newQuery.trim()) {;
      router && router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {;
        shallow: true,;
      });
      setCurrentPage(1);    }
  };

<<<<<<< HEAD
=======
        minRating: minRating ? Number(minRating) : undefined,;
      });
      setTotalResults(offline && offline.totalCount);
      if (page === 1) {;
        setResults(offline && offline.results);
      } else {;
        setResults(prev => [...prev, ...offline && offline.results]);
      }
    } finally {;
      setLoading(false);    }
        throw new Error(`Search API error: ${response.status}`)
      }
      const data = await response.json();
      logInfo('Search results received:', { data: data }),
      setTotalResults(data.totalCount || data.results?.length || 0);
      if (page === 1) {
        setResults(data.results || [])
      } else {
        setResults((prev) => [...prev, ...(data.results || [])])
      }
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error }),
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy
        category: categoryFilter !== 'all' ? categoryFilter : undefined
        minPrice: minPrice ? Number(minPrice) : undefined
        maxPrice: maxPrice ? Number(maxPrice) : undefined
        minRating: minRating ? Number(minRating) : undefined
      });
      if (!response.ok) {;
        throw new Error(`Search API error: ${response.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = await response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data.totalCount || data.results?.length || 0);
      if (page === 1) {;
        setResults(data.results || []);
      } else {;
        setResults((prev) => [...prev, ...(data.results || [])]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {;
        sortBy,;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,;
        minPrice: minPrice ? Number(minPrice) : undefined,;
        maxPrice: maxPrice ? Number(maxPrice) : undefined,;
        minRating: minRating ? Number(minRating) : undefined}),;
      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);
      } else {
        setResults((prev) => [...prev, ...offline.results])
      }
    } finally {
      setLoading(false)
    }
};
  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery)
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
  };
        shallow: true}),
      setCurrentPage(1)
    }
  };
  useEffect(() => {
    if (debouncedQuery.trim()) {
    if (debouncedQuery && debouncedQuery.trim()) {;
      } else {;
        setResults((prev) => [...prev, ...offline.results]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  // Handle search input change;
  const handleSearch = (newQuery: string) => {;
    setSearchQuery(newQuery);
    if (newQuery.trim()) {;
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {;
        shallow: true}),;
      setCurrentPage(1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {;
    if (debouncedQuery.trim()) {;
      fetchResults(debouncedQuery, 1);
    } else {;
      setResults([]);
      setTotalResults(0);    }
  }, [debouncedQuery]);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    fetchResults(searchQuery, nextPage)
  };

  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );
<<<<<<< HEAD

  const filteredResults = results.filter((r) => {
    if (

=======
  const filteredResults = results.filter(r => {    if (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (debouncedQuery.trim()) {;

      fetchResults(debouncedQuery, 1);
    } else {;
      setResults([]);

      setTotalResults(0);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [debouncedQuery]),;

  // Load more results;
<<<<<<< HEAD
  const loadMore = () => {;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  };

  const categories = Array && Array.from(;
    new Set(results && results.map(r => r && r.category).filter(Boolean));
  );

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const filteredResults = results && results.filter(r => {    if (;
      categoryFilter !== 'all' &&;
      categoryFilter &&;
      r && r.category !== categoryFilter;
    ) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false;

    if (minRating && (r && r.type === 'product' || r && r.type === 'talent')) {;
      if ((r && r.rating ?? 0) < Number(minRating)) {;

=======
=======
      return false;
    }
    if (minPrice && r && r.type === 'product') {;
      if ((r && r.price ?? 0) < Number(minPrice)) {;
        return false;      }
    }
    if (maxPrice && r && r.type === 'product') {;
      if ((r && r.price ?? 0) > Number(maxPrice)) {;
        return false;      }
    }
    if (minRating && (r && r.type === 'product' || r && r.type === 'talent')) {;
      if ((r && r.rating ?? 0) < Number(minRating)) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    date: b.published_date,
  }));
  let all = [...product_results, ...talent_results, ...blog_results];
;
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => r.category === filters.category);  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.price ?? 0) >= filters.min_price!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.price ?? 0) <= filters.max_price!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.rating ?? 0) >= filters.min_rating!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    switch (filters.sort_by) {
      case 'price_asc':;
        all.sort ((a, b) => {
          const a_price = a.type === 'product' ? (a.price ?? 0) : 0;
          const b_price = b.type === 'product' ? (b.price ?? 0) : 0;
          return a_price - b_price;        });
        break;
      case 'price_desc':;
        all.sort ((a, b) => {
          const a_price = a.type === 'product' ? (a.price ?? 0) : 0;
          const b_price = b.type === 'product' ? (b.price ?? 0) : 0;
          return b_price - a_price;        });
        break;
      case 'rating':;
        all.sort ((a, b) => {
          const a_rating =;
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const b_rating =;
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
          return b_rating - a_rating;
        });
        break;
      default:;
        break;
    }
  } else {
    all.sort ((a, b) => a.title.locale_compare (b.title));
  }
  const start = (page - 1) * limit;
  const paginated = all.slice (start, start + limit);
  return { results: paginated, total_count: all.length }
;
export default /**
 * SearchResultsPage - Function description
 */
function SearchResultsPage() {  const router = use_router ();
  const { is_authenticated } = use_auth ();
  const [results, set_results] = useState < SearchResult[]>(initial_results);
  const [loading, set_loading] = useState (false);
  const [search_query, setSearchQuery] = useState (query);
  const debounced_query = use_debounce (search_query, 300);
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [current_page, setCurrentPage] = useState (1);
  const [sort_by, setSortBy] = useState ('relevance');
  const [category_filter, setCategoryFilter] = useState ('all');
  const [min_price, setMinPrice] = useState ('');
  const [max_price, setMaxPrice] = useState ('');
  const [min_rating, setMinRating] = useState ('');
  const [total_results, setTotalResults] = useState (total_count);
;
  // Fetch search results;
  const fetch_results = async (search_term: string, page = 1) => {
    try {
      set_loading (true);
      log_info (`Fetching search results for: ${search_term}, page: ${page}`);
      const params = new URLSearchParams ({
        query: search_term,
        page: String (page),
        limit: '12',
        sort: sort_by,
      });      if (params.append ('category', category_filter)) {
  $2
}
      if (params.append ('min_price', min_price)) {
  $2
}
      if (params.append ('max_price', max_price)) {
  $2
}
      if (params.append ('min_rating', min_rating)) {
  $2
}
      const response = await fetch (`/api / search?${params.to_string ()}`);
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Search API error: ${response.status}`);
      }
      const data = await response.json ();
      log_info ('Search results received:', { data: data });
      setTotalResults (data.total_count || data.results?.length || 0);
;
      // Check condition
if ( {) {
  $2
}
        set_results (data.results || []);
      } else {
        set_results (prev => [...prev, ...(data.results || [])]);
      }
    } catch (error) {
      logErrorToProduction ('Error fetching search results:', { data: error });
      const offline = offline_search (search_term, page, 12, {
        sort_by,
        category: category_filter !== 'all' ? category_filter : undefined,
        min_price: min_price ? Number (min_price) : undefined,
        max_price: max_price ? Number (max_price) : undefined,
        min_rating: min_rating ? Number (min_rating) : undefined,
      });
      setTotalResults (offline.total_count);
      // Check condition
if ( {) {
  $2
}
        set_results (offline.results);
      } else {
        set_results (prev => [...prev, ...offline.results]);
      }
    } finally {
      set_loading (false);    }
  }
;
  // Handle search input change;
  const handle_search = (new_query: string) =>: any {
    setSearchQuery (new_query),
    if () {) {
  $2
}
      router.push (`/search?q=${encodeURIComponent (new_query)}`, undefined, {
        shallow: true,
      });
      setCurrentPage (1);    }
  }
;
  useEffect (() => {
    if () {) {
  $2
}
      fetch_results (debounced_query, 1);
    } else {
      set_results ([]);
      setTotalResults (0);    }
  }, [debounced_query]);
;
  // Load more results;
  const load_more = () =>: any {
    const next_page = current_page + 1;
    setCurrentPage (next_page);
    fetch_results (search_query, next_page);
  }
;
  const categories = Array.from (
    new Set (results.map (r => r.category).filter (Boolean)));
;
  const filtered_results = results.filter (r => {    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Check condition
if ( {) {
  $2
}
      if (< Number (min_price)) {) {
  $2
}
        return false;      }
    }
    // Check condition
if ( {) {
  $2
}
      if (> Number (max_price)) {) {
  $2
}
        return false;      }
    }
    if () {) {
  $2
}
      if (< Number (min_rating)) {) {
  $2
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false;      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;      }
    }
    if (minRating && (r.type === 'product' |r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        return false;
      }
    }
    return true;  });
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
<<<<<<< HEAD
<<<<<<< HEAD

      return acc
    };
    {} as Record<string, SearchResult[]>;
  );


=======
    };
    {} as Record<string, SearchResult[]>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Group results by type for better display;
  const groupedResults = filteredResults && filteredResults.reduce(;
    (acc, result) => {;
      if (!acc[result && result.type]) acc[result && result.type] = [];
      acc[result && result.type]!.push(result);
      return acc;
    },;
    {} as Record<string, SearchResult[]>  );

  const renderResultCard = (result: SearchResult) => {;
    switch (result && result.type) {;
      case 'product':;
      case 'equipment':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard

              product={{

<<<<<<< HEAD
=======
        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard
              product={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                id: result && result.id,
                name: result && result.title,
                title: result && result.title,
                description: result && result.description || '',
                price: result && result.price || 0,
                images: result && result.image ? [result && result.image] : [],
                rating: result && result.rating || 0,
                reviewCount: 0,
                tags: result && result.tags || [],
                category: result && result.category || '',
=======
;
  // Group results by type for better display;
  const grouped_results = filtered_results.reduce (
    (acc, result) => {
      // Check condition
if (acc[result.type] = []) {
  $2
}
      acc[result.type]!.push (result);
      return acc;
    },
    {} as Record < string, SearchResult[]>  );
;
  const renderResultCard = (result: SearchResult) =>: any {
    switch (result.type) {
      case 'product':;
      case 'equipment':;
        return (
          <div key={result.id} data - testid='result - card'>            <ProductCard;
              product={{


                id: result.id,
                name: result.title,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,
                review_count: 0,
                tags: result.tags || [],
                category: result.category || '',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                currency: '$',
                created_at: new Date ().toISOString (),
                updated_at: new Date ().toISOString (),
                stock: (result as any).stock,
<<<<<<< HEAD


        );
      case 'talent':;
        return (

=======
                in_stock: ((result as any).stock || 0) > 0
              }}
            />
          </div>
        );
      case 'talent':;
        return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                id: result && result.id,
                user_id: result && result.id,
                full_name: result && result.title,
                professional_title: result && result.description || '',
                profile_picture_url: result && result.image,
                average_rating: result && result.rating,
                skills: result && result.tags || [],
                location: result && result.category,
                bio: result && result.description,
                summary: result && result.description,
                is_verified: false,
                availability_type: 'available',
<<<<<<< HEAD

              }}
              onViewProfile={(id: string) => {;
                router && router.push(`/talent/${id}`);

=======
          <div key={result.id} data-testid="result-card">
            <TalentCard
=======
=======
          <div key={result.id} data-testid="result-card">
            <TalentCard
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                in_stock: ((result as any).stock || 0) > 0,              }}
            />;
          </div>);
      case 'talent':;
        return (
          <div key={result.id} data - testid='result - card'>            <TalentCard;

              talent={{
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

              }}
              onViewProfile={(id: string) => {;
                router && router.push(`/talent/${id}`);
          <div key={result.id} data-testid="result-card">
            <TalentCard
                in_stock: ((result as any).stock || 0) > 0,              }}
            />;
          </div>);
      case 'talent':;
        return (
          <div key={result.id} data - testid='result - card'>            <TalentCard;
    return true
  }),

      return acc;
    }
    {} as Record<string, SearchResult[]>  );
      setTotalResults(0);
=======
      return false;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minPrice && r.type === 'product') {;
      if ((r.price ?? 0) < Number(minPrice)) {;
        return false;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minPrice && r.type === 'product') {;
      if ((r.price ?? 0) < Number(minPrice)) {;
        return false;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minPrice && r.type === 'product') {;
      if ((r.price ?? 0) < Number(minPrice)) {;
        return false;
      }
    }
    return true;  });

        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (maxPrice && r.type === 'product') {;
      if ((r.price ?? 0) > Number(maxPrice)) {;
        return false;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minRating && (r.type === 'product' || r.type === 'talent')) {;
      if ((r.rating ?? 0) < Number(minRating)) {;
        return false;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return true
  }),

  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);

      return acc
  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':

  // Group results by type for better display;
  const groupedResults = filteredResults && filteredResults.reduce(;
    (acc, result) => {;
      if (!acc[result && result.type]) acc[result && result.type] = [];
      acc[result && result.type]!.push(result);
      return acc;
    },;
    {} as Record<string, SearchResult[]>  );

  const renderResultCard = (result: SearchResult) => {;
    switch (result && result.type) {;
      case 'product':;
      case 'equipment':;
        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard
              product={{
                id: result.id
                name: result.title
                title: result.title
                description: result.description |''
                price: result.price |0
                images: result.image ? [result.image] : []
                rating: result.rating |0
                reviewCount: 0
                tags: result.tags |[]
                category: result.category |''
                currency: '$'
                created_at: new Date().toISOString()
                updated_at: new Date().toISOString()
                stock: (result as any).stock
                in_stock: ((result as any).stock |0) > 0,              }}
                id: result.id,
                name: result.title,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,
                review_count: 0,
                tags: result.tags || [],
                category: result.category || '',
                currency: '$',
                created_at: new Date ().toISOString (),
                updated_at: new Date ().toISOString (),
                stock: (result as any).stock,
<<<<<<< HEAD
                in_stock: ((result as any).stock || 0) > 0
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
        ),
      case 'talent':
        return (
          <div key={result.id} data-testid="result-card">
            <TalentCard
              talent={{
                id: result.id
                user_id: result.id
                full_name: result.title
                professional_title: result.description |''
                profile_picture_url: result.image
                average_rating: result.rating
                skills: result.tags |[]
                location: result.category
                bio: result.description
                summary: result.description
                is_verified: false
                availability_type: 'available'
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);              }}
              isAuthenticated={isAuthenticated}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                id: result.id,
                user_id: result.id,
                full_name: result.title,
                professional_title: result.description || '',
                profile_picture_url: result.image,
                average_rating: result.rating,
                skills: result.tags || [],
                location: result.category,
                bio: result.description,
                summary: result.description,
                is_verified: false,
<<<<<<< HEAD
<<<<<<< HEAD


=======
                availability_type: 'available',
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);              }}
              isAuthenticated={isAuthenticated}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                availability_type: 'available'}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onViewProfile={(id: string) => {;
                router.push(`/talent/${id}`);
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onRequestHire={(talent) => {;
                router.push(`/talent/${talent.id}?action=hire`);
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              isAuthenticated={isAuthenticated  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
        ),
      case 'category':
        return (
          <div key={result.id} data-testid='result-card'>            <CategoryCard
              title={result.title}
              description={result.description |''}
              icon={result.image |'📁'}
            />
          </div>
        );
      default:
<<<<<<< HEAD
          <div key={result && result.id} data-testid='result-card'>            <CategoryCard
              title={result && result.title}
              description={result && result.description || ''}
              icon={result && result.image || '📁'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            />;
          </div>;
        );
      default:;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        return (
          <div
            key={result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >
            <h3 className='font-semibold'>{result.title}</h3>
            <p className='text-gray-600 dark:text-gray-200'>
              {result.description}
            </p>
          </div>
<<<<<<< HEAD
        )
    }
<<<<<<< HEAD

  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          >;
            <h3 className='font-semibold'>{result && result.title}</h3>;
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        );    }
  }

<<<<<<< HEAD
}
  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
        );    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };

          <div key={result.id} data-testid="result-card">
            <CategoryCard
              title={result.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              description={result.description || ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              icon={result.image || '📁'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
        );
      default:;

          >;
            <h3 className='font-semibold'>{result && result.title}</h3>;
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;
        );    }
  }

}
  },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <>;
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}

<<<<<<< HEAD
        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;

=======
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div
          className='container mx-auto px-4 py-8'
          data-testid='search-results'>;
          {/* Search Header */}
          <div className='mb-8'>;
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>;
              <div className='flex-1'>;
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>;
                  Search Results;
                </h1>;
                <p
                  className='text-gray-600 dark:text-gray-200'
                  data-testid='results-count'>;
                  {filteredResults && filteredResults.length > 0;
                    ? `Found ${filteredResults && filteredResults.length} results for "${query}"`;

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
          {/* Search Header */}
<<<<<<< HEAD
=======
=======
  return (
    <>;
      <SEO
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title={`Search Results for "${query}" - Zion Marketplace`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        keywords={`${query}, search, marketplace, products, talent, services`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        canonical={`https://app.ziontechgroup.com/search/${slug}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
<<<<<<< HEAD
=======

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
<<<<<<< HEAD
          {/* Search Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Results
                </h1>
                <p
                  className="text-gray-600 dark:text-gray-200"
                  data-testid="results-count"
                >
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    : `No results found for "${query}"`}

                </p>;
              </div>;


              {/* Search Input */}


<<<<<<< HEAD
=======
                    : `No results found for "${query}"`}
                </p>;
              </div>;
              {/* Search Input */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
<<<<<<< HEAD
                  placeholder="Search marketplace..."
                  className="pl-10"
                />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </div>
            </div>


                  onChange={e => handleSearch(e && e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl-10'                />;
              </div>;
            </div>;



            {/* Controls */}


=======
                    : `No results found for "${query}"`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>
              </div>
              {/* Search Input */}
              <div className='relative w-full lg:w-96'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />
              {/* Search Input */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => handleSearch(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />

              </div>
            </div>
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
            {/* Controls */}
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6'>
              <div className='flex items-center gap-2 flex-wrap'>
            {/* Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <Input
                  type="text"
                  value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => handleSearch(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />
              </div>
            </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
<<<<<<< HEAD
                  <Filter className="h-4 w-4" />
                  Filters
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </Button>
                <select
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                </Button>
                <select
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                  data-testid='filter-button'>;
                  <Filter className='h-4 w-4' />                  Filters;
                </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                  data-testid='sort-select';

<<<<<<< HEAD
=======
=======

                </Button>
                <select
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                router.push (`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push (`/talent/${talent.id}?action = hire`);              }}
              is_authenticated={is_authenticated}
            />;
          </div>);
      case 'category':;
        return (
          <div key={result.id} data - testid='result - card'>            <CategoryCard;
              title={result.title}
              description={result.description || ''}
              icon={result.image || '📁'}
            />;
          </div>);
      default:;
          >;
            <h3 className='font - semibold'>{result.title}</h3>;
            <p className='text - gray - 600 dark:text - gray - 200'>;
              {result.description}
            </p>;
          </div>);    }
  }
;
  return (
    <>;
      <SEO;
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com / search/${slug}`}
      />;
      <div className='min - h-screen bg - gray - 50 dark:bg - gray - 900'>;
        <div;
          className='container mx - auto px - 4 py - 8';
          data - testid='search - results';
        >;
          {/* Search Header */}
          <div className='mb - 8'>;
            <div className='flex flex - col lg:flex - row lg:items - center lg:justify - between gap - 4'>;
              <div className='flex - 1'>;
                <h1 className='text - 3xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                  Search Results;
                </h1>;
                <p;
                  className='text - gray - 600 dark:text - gray - 200';
                  data - testid='results - count'                >;
                  {filtered_results.length > 0;
                    ? `Found ${filtered_results.length} results for "${query}"`;
                    : `No results found for "${query}"`}
                </p>;
              </div>;
              {/* Search Input */}
              <div className='relative w - full lg:w - 96'>;
                <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - gray - 200' />;
                <Input;
                  type='text';
                  value={search_query}
                  on_change={e => handle_search (e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl - 10'                />;
              </div>;
            </div>;
            {/* Controls */}
            <div className='flex flex - wrap items - center justify - between gap - 4 mt - 6'>;
              <div className='flex items - center gap - 2 flex - wrap'>;
                <Button;
                  variant='outline';
                  size='sm';
                  className='flex items - center gap - 2';
                  data - testid='filter - button';
                >;
                  <Filter className='h - 4 w - 4' />                  Filters;
                </Button>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
                  data - testid='sort - select';
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                >;
                  <option value='relevance'>Relevance</option>;
                  <option value='newest'>Newest</option>;
                  <option value='price_asc'>Price: Low to High</option>;
                  <option value='price_desc'>Price: High to Low</option>;
                  <option value='rating'>Highest Rated</option>                </select>;
<<<<<<< HEAD
<<<<<<< HEAD


                <select
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                >;
                  <option value='all'>All Categories</option>;
                  {categories && categories.map(c => (                    <option key={c} value={c}>;

                      {c}
                    </option>;
                  ))}

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >

=======
                </select>;
                <div className='flex items-center gap-1'>;
                  <input
                    type='number'
                    placeholder='Min $'
                    value={minPrice}
                    onChange={e => setMinPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm';
                  />;
                  <span>-</span>;
                  <input
                    type='number'
                    placeholder='Max $'
                    value={maxPrice}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  <option value='relevance'>Relevance</option>
                  <option value='newest'>Newest</option>
                  <option value='price_asc'>Price: Low to High</option>
                  <option value='price_desc'>Price: High to Low</option>
                  <option value='rating'>Highest Rated</option>                </select>
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <div className="flex items-center gap-1">

                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
<<<<<<< HEAD
=======
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                <select
                  value={categoryFilter  } catch (error) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                    </option>;
                  ))  } catch (error) {
=======
                  onChange={(e) => setCategoryFilter(e.target.value)  } catch (error) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                </select>
                <div className="flex items-center gap-1">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
=======
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value='all'>All Categories</option>
                  {categories.map(c => (                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className='flex items-center gap-1'>
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>
                <div className="flex items-center gap-1">
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setMinPrice(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
<<<<<<< HEAD
<<<<<<< HEAD
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </div>
                <select
                  value={minRating}

                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
=======
                  onChange={(e) => setMinRating(e.target.value)}
=======
                    value={maxPrice  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setMaxPrice(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <select
<<<<<<< HEAD
                  value={minRating  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setMinRating(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  value={minRating}

                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
                  onChange={(e) => setMinRating(e.target.value)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & up</option>
                  <option value="3">3★ & up</option>
                  <option value="2">2★ & up</option>
                </select>
              </div>
<<<<<<< HEAD

<<<<<<< HEAD

                <select
                  value={minRating}
                  onChange={e => setMinRating(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <select;
                  value={category_filter}
                  on_change={e => setCategoryFilter (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
                >;
                  <option value='all'>All Categories</option>;
                  {categories.map (c => (                    <option key={c} value={c}>;
                      {c}
                    </option>))}
                </select>;
                <div className='flex items - center gap - 1'>;
                  <input;
                    type='number';
                    placeholder='Min $';
                    value={min_price}
                    on_change={e => setMinPrice (e.target.value)}
                    className='w - 20 px - 2 py - 1 border border - gray - 300 rounded - md text - sm';
                  />;
                  <span>-</span>;
                  <input;
                    type='number';
                    placeholder='Max $';
                    value={max_price}
                    on_change={e => setMaxPrice (e.target.value)}
                    className='w - 20 px - 2 py - 1 border border - gray - 300 rounded - md text - sm'                  />;
                </div>;
                <select;
                  value={min_rating}
                  on_change={e => setMinRating (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                >;
                  <option value=''>All Ratings</option>;
                  <option value='4'>4★ & up</option>;
                  <option value='3'>3★ & up</option>;
                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;
<<<<<<< HEAD


                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('grid')}
                  data-testid='view-mode-grid';
                  className={viewMode === 'grid' ? 'active' : ''}
                >;
                  <Grid className='h-4 w-4' />;
                </Button>;
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  data-testid='view-mode-list';
                  className={viewMode === 'list' ? 'active' : ''}


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              <div className="flex items-center gap-2">

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  size="sm"
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  data-testid="view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <List className='h-4 w-4' />                </Button>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className='flex items - center gap - 2'>;
                <Button;
                  variant={view_mode === 'grid' ? 'default' : 'outline'}
                  size='sm';
                  on_click={() => setViewMode ('grid')}
                  data - testid='view - mode - grid';
                  className={view_mode === 'grid' ? 'active' : ''}
                >;
                  <Grid className='h - 4 w - 4' />;
                </Button>;
                <Button;
                  variant={view_mode === 'list' ? 'default' : 'outline'}
                  size='sm';
                  on_click={() => setViewMode ('list')}
                  data - testid='view - mode - list';
                  className={view_mode === 'list' ? 'active' : ''}
                >;
                  <List className='h - 4 w - 4' />                </Button>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          {/* Loading State */}

          {loading && results.length === 0 && (

          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          {filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
                    {type}s ({typeResults.length})

                  </h2>
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
          {/* Loading State */}
          {loading && results.length === 0 && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
              <div className='flex items-center gap-2'>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  size="sm"
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  data-testid="view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  data-testid='view-mode-list'
                  className={viewMode === 'list' ? 'active' : ''}
                >
                  <List className='h-4 w-4' />                </Button>
              </div>
            </div>
          </div>
          {/* Loading State */}
          {loading && results.length === 0 && (
            <div className='flex justify-center py-12'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>            </div>
          )}
          {/* Empty State */}
                  variant={viewMode === 'list' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  size="sm"
                  onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  data-testid="view-mode-list"
                  className={viewMode === 'list' ? 'active' : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  <List className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;
          </div>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Loading State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {loading && results.length === 0 && (
<<<<<<< HEAD
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Empty State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
<<<<<<< HEAD
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
            <div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults.length})
                  </h2>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }>;
                    {typeResults && typeResults.map(renderResultCard)}
                  </div>;
                </div>;
              ))}
              {/* Load More Button */}
<<<<<<< HEAD
<<<<<<< HEAD


=======
              {results.length < totalResults && (
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>                        Loading...
                      </>
                    ) : (
                      'Load More Results'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    )}
                  </Button>;
                </div>;
              )}
            </div>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD


      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );

=======
=======
        </div>
      </div>
    </>
  );
export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {;
  const params = context.params;
  const slug = params?.slug as string
  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '';
  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl =
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {;
  const params = context && context.params;
  const slug = params?.slug as string,;
  // Convert slug back to query term;
  const query = slug ? slug && slug.replace(/-/g, ' ') : '';
  try {;
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process && process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',;
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);
    const response = await fetch(;
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
    );
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    let results = [];
    let totalCount = 0;

            <div className='flex justify - center py - 12'>;
              <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600'></div>            </div>)}
          {/* Empty State */}
          {!loading && filtered_results.length === 0 && (
            <div data - testid='search - empty - state'>              <SearchEmptyState on_retry={() => fetch_results (search_query)} />;
            </div>)}
          {/* Results */}
          {filtered_results.length > 0 && (
            <div className='space - y-8'>;
              {Object.entries (grouped_results).map (([type, type_results]) => (
                <div key={type}>;
                  <h2 className='text - xl font - semibold text - gray - 900 dark:text - white mb - 4 capitalize'>                    {type}s ({type_results.length});
                  </h2>;
                  <div;
                    className={
                      view_mode === 'grid';
                        ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6';
                        : 'space - y-4';
                    }
                  >;
                    {type_results.map (renderResultCard)}
                  </div>;
                </div>))}
              {/* Load More Button */}
              {results.length < total_results && (
                <div className='flex justify - center py - 8'>;
                  <Button;
                    on_click={load_more}
                    disabled={loading}
                    className='flex items - center gap - 2';
                  >;
                    {loading ? (
                      <>;
                        <div className='animate - spin rounded - full h - 4 w - 4 border - b-2 border - white'></div>                        Loading...;
                      </>) : (
                      'Load More Results')}
                  </Button>;
                </div>)}
            </div>)}
        </div>;
      </div>;
    </>);
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {
  const params = context.params;
  const slug = params?.slug as string,
  // Convert slug back to query term;
  const query = slug ? slug.replace (/-/g, ' ') : '';
;
  try {
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    log_info (`Fetching search results for slug: ${slug}, query: ${query}`);
;
    const response = await fetch (
      `${apiBaseUrl}/api / search?query=${encodeURIComponent (query)}&limit = 12`    );
;
    let results = [];
    let total_count = 0;
;
    // Check condition
if ( {) {
  $2
}
      const data = await response.json ();
      results = data.results || [];
      total_count = data.total_count || results.length;
      log_info (`Server - side fetch successful: ${results.length} results`);

=======
    let results = [];
    let totalCount = 0;
    if (response.ok) {
=======
    let results = [];
    let totalCount = 0;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const data = await response.json();
      results = data.results |[];
      totalCount = data.totalCount |results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } else {
      logErrorToProduction (
        `Search API error: ${response.status} ${response.status_text}`);
      const offline = offline_search (query, 1, 12, { sort_by: 'relevance' });
      results = offline.results;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (response && response.ok) {;
      const data = await response && response.json();
      results = data && data.results || [];
      totalCount = data && data.totalCount || results && results.length;
      logInfo(`Server-side fetch successful: ${results && results.length} results`);
    } else {;
      logErrorToProduction(;
        `Search API error: ${response && response.status} ${response && response.statusText}`;
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline && offline.results;
      totalCount = offline && offline.totalCount;    }

    return {;
      props: {;
        initialResults: results,;
        query,;
        slug,;
        totalCount,;
      },;
    };
  } catch (error) {;
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });

    return {;
      props: {;
        initialResults: offline && offline.results,;
        query,;
        slug,;
        totalCount: offline && offline.totalCount,;
      },;
<<<<<<< HEAD

    };  }

}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;
      totalCount = offline.totalCount
    }

    return {
      props: {
        initialResults: results,
        query;
        slug;
        totalCount}}
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error }),
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
    return {
      props: {
        initialResults: offline.results,
        query;
        slug;
        totalCount: offline.totalCount}}
  }

};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      total_count = offline.total_count;    }
    return {
      props: {
        initial_results: results,
        query,
        slug,
        total_count,
      },
    }
  } catch (error) {
    logErrorToProduction ('Error fetching search results:', { data: error });
    const offline = offline_search (query, 1, 12, { sort_by: 'relevance' });
;
    return {
      props: {
        initial_results: offline.results,
        query,
        slug,
total_count: offline.total_count,
      },
    }  }
}
;


<<<<<<< HEAD
=======
=======
    };  }

}



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filteredResults.length > 0 && (;
            <div className="space-y-8">;
              {Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">;
                    {type}s ({typeResults.length});
                  </h2>;
                  <div;
                    className={;
                      viewMode === 'grid';
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
                        : 'space-y-4';
                      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {typeResults.map(renderResultCard)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
              {/* Load More Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {results.length < totalResults && (;
                <div className="flex justify-center py-8">;
                  <Button;
                    onClick={loadMore  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="flex items-center gap-2";
                  >;
                    {loading ? (;
                      <>;
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>;
                        Loading...;
                      </>;
                    ) : (;
                      'Load More Results';
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Button>;
                </div>;
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {;
  const params = context.params;
  const slug = params?.slug as string;
  // Convert slug back to query term;
  const query = slug ? slug.replace(/-/g, ' ') : '',;
  try {
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',;
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);
    const response = await fetch(;
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`);
    let results = [];
    let totalCount = 0;
    if (response.ok) {;
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    } else {
      logErrorToProduction(
        `Search API error: ${response.status} ${response.statusText}`
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
      totalCount = offline.totalCount;    }

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount,
      },
    };
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });

    return {
      props: {
        initialResults: offline.results,
        query,
        slug,
totalCount: offline.totalCount,
      },
    };  }
};

}
}
}
}
}
}
}
}
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } else {;
      logErrorToProduction(;
        `Search API error: ${response.status} ${response.statusText}`);
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
      totalCount = offline.totalCount;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return {;
      props: {;
        initialResults: results;
        query,;
        slug,;
        totalCount}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
    return {;
      props: {;
        initialResults: offline.results,;
        query,;
        slug;
        totalCount: offline.totalCount}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
