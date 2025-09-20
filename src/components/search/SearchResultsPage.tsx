interface SearchResult {
  
  id: string;
title: string;
  description: string;
  
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