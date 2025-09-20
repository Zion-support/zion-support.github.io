interface SearchResult {
category: string;
minPrice: number;
maxPrice: number;
minRating: number;
sort: string;
interface SearchResponse {
totalCount: number;
page: number;
limit: number;,
query: string;,
hasMore: boolean;
// Highlight search terms in text;
}
}}