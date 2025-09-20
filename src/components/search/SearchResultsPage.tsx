interface SearchResult {
<<<<<<< HEAD
id: string;,
title: string;,
description: string;,
=======
  id: string;
title: string;
  description: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
type: 'product' | 'talent' | 'blog' | 'service';
category?: string;
url?: string;
image?: string;
price?: number;
currency?: string;
rating?: number;
tags?: string[];
date?: string,
interface SearchFilters {
<<<<<<< HEAD
types: string[];,
category: string;,
minPrice: number;,
maxPrice: number;,
minRating: number;,
sort: string,
interface SearchResponse {
results: SearchResult[];,
totalCount: number;,
page: number;,
limit: number;,
query: string;,
hasMore: boolean;
// Highlight search terms in text;
}}}
=======
  types: string[];
category: string;
  minPrice: number;
maxPrice: number;
  minRating: number;
sort: string,
interface SearchResponse {
  results: SearchResult[];
totalCount: number;
  page: number;
limit: number;
  query: string;
hasMore: boolean
// Highlight search terms in text
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
