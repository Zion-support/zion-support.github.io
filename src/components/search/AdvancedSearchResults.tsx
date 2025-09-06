
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  Search,
  Filter,
  X,
  SortAsc,
  SortDesc,
  GridIcon,
  List,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Badge } from '@/components / ui / badge';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import { Checkbox } from '@/components / ui / checkbox';
import { Slider } from '@/components / ui / slider';
import { Separator } from '@/components / ui / separator';
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components / ui / sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { logErrorToProduction, log_info } from '@/utils / production_logger';
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];

  date?: string;

interface SearchFilters {;

  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;

  sort: string;

interface SearchResponse {;

  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;

const HighlightText: React.FC<{
  text: string
  searchTerm: string
  className?: string
}> = ({ text, searchTerm, className = '' }) => {  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>
  }
  const parts = text.split(
    new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  )
  return (
    <span className={className}>
      {parts.map((part, index) =>        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className='bg-yellow-200 text-black px-1 rounded'>

            {part}
          </mark>
        ) : (
          part
        )
      )}

        </div>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">

          <div>
            <h3 className='font-semibold text-lg mb-1'>
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant='secondary' className='text-xs'>
  const card_class =;
    view_mode === 'grid';
      ? 'bg - card border rounded - lg p - 4 hover:shadow - lg transition - shadow cursor - pointer';
      : 'bg - card border rounded - lg p - 4 hover:shadow - lg transition - shadow cursor - pointer flex gap - 4';
  return (
    <div on_click={handle_click} className={card_class}>;
      {result.image && (
        <div className={view_mode === 'grid' ? 'mb - 3' : 'flex - shrink - 0'}>;
          <img;
            src={result.image}
            alt={result.title}
            className={
              view_mode === 'grid';
                ? 'w - full h - 48 object - cover rounded';
                : 'w - 20 h - 20 object - cover rounded';
            }          />;
        </div>)}
      <div className='flex - 1'>;
        <div className='flex items - start justify - between mb - 2'>;
          <div>;
            <h3 className='font - semibold text - lg mb - 1'>;
              <HighlightText text={result.title} search_term={search_term} />;
            </h3>;
            <Badge variant='secondary' className='text - xs'>;
              {result.type}
            </Badge>;
          </div>;
          {result.price && (


      <div className='flex-1'>;
        <div className='flex items-start justify-between mb-2'>;
          <div>;
            <h3 className='font-semibold text-lg mb-1'>;
              <HighlightText text={result && result.title} searchTerm={searchTerm} />;
            </h3>;
            <Badge variant='secondary' className='text-xs'>;
              {result && result.type}
            </Badge>;
          </div>;
          {result && result.price && (;
            <div className='text-right'>;
              <span className='font-bold text-primary'>;
                {result && result.currency === 'USD' ? '$' : ''}
                {result && result.price}
              </span>;
              {result && result.type === 'talent' && (;
                <span className='text-sm text-muted-foreground'>/hr</span>;

              )}
            </div>;
          )}

                <span className='text - sm text - muted - foreground'>/hr</span>)}
            </div>)}
            <div className="text-right">
              <span className="font-bold text-primary">
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>
              {result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
            </div>
          )}
        </div>

=======

        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {result.category && (
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                {result.category}
              </Badge>
            )}

              </Badge>)}
            {result.tags?.slice (0, 3).map ((tag, index) => (
              <Badge key={index} variant='outline' className='text - xs'>                <HighlightText text={tag} search_term={search_term} />;
              </Badge>))}
          </div>;

          {result.rating && (
            <div className='flex items - center gap - 1'>;
              <span className='text - yellow - 500'>★</span>;
              <span className='text - sm'>{result.rating.to_fixed (1)}</span>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
// Filter Sidebar Component;
const FilterSidebar: React.FC<{

  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  available_categories: string[];
}> = ({ filters, onFiltersChange, available_categories }) => {  const type_options = [;
    { id: 'product', label: 'Products' },
    { id: 'talent', label: 'Talent' },
    { id: 'service', label: 'Services' },
    { id: 'blog', label: 'Blog Posts' },
  ];
  const handleTypeChange = (type_id: string, checked: boolean) =>: any {
    const new_types = checked      ? [...filters.types, type_id];
      : filters.types.filter (t => t !== type_id);
    onFiltersChange ({ ...filters, types: new_types });
  }
  const handlePriceChange = (values: number[]) =>: any {
    onFiltersChange ({
      ...filters,
      min_price: values[0] ?? 0,
      max_price: values[1] ?? 10000,
    });

  }
          </div>;

          {result && result.rating && (;
            <div className='flex items-center gap-1'>;
              <span className='text-yellow-500'>★</span>;
              <span className='text-sm'>{result && result.rating.toFixed(1)}</span>;
            </div>;
          )}
            {result.tags?.slice(0, 3).map((tag, index) => (

          {result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
            </div>
          )}

  return (

                id={option.id}
                checked={filters.types.includes(option.id)}

                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>

          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}

          </SelectContent>;
        </Select>;
      </div>;

      <Separator />;

      <div>;
        <h3 className='font-semibold mb-3'>Price Range</h3>;
        <div className='px-2'>;

          <Slider
            value={[filters && filters.minPrice, filters && filters.maxPrice]}
            {available_categories.map (category => (
              <SelectItem key={category} value={category}>;
                {category}
              </SelectItem>))}
          </SelectContent>;
        </Select>;
      </div>;
      <Separator />;
      <div>;
        <h3 className='font - semibold mb - 3'>Price Range</h3>;
        <div className='px - 2'>;
          <Slider;
            value={[filters.min_price, filters.max_price]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}

            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div>

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>

                {suggestion}
              </Button>;
            ))}
          </div>
        </div>

            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
=======
},

// Main Search Results Page Component
export const AdvancedSearchResults: React.FC = () => {
  const router = useRouter(),
  const [searchTerm, setSearchTerm] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const [totalCount, setTotalCount] = useState(0),
  const [currentPage, setCurrentPage] = useState(1),
  const [hasMore, setHasMore] = useState(false),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState(false),
  


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,

    sort: 'relevance'
  }),
  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {

    (filters.minRating > 0 ? 1 : 0)

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={suggestion => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}

          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
        {searchTerm && (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-muted-foreground">
                {loading ? 'Searching...' : `${totalCount} results for "${searchTerm}"`}
              </p>
            </div>

<<<<<<< HEAD
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price_asc">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              {/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}

                </Button>
              </div>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Load More Results'
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

}> <SelectTrigger className="w-40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h-4 w-4" /> </Button> <Button > <List className="h-4 w-4" /> </Button> </div> {
  /* Mobile Filter Toggle */
}<Sheet open= {
  showFilters
}onOpenChange= {
  setShowFilters "
}> <SheetTrigger asChild> </Button> </SheetTrigger> <SheetContent side="left" className="w-80" > <SheetHeader> <SheetTitle>Search Filters</SheetTitle> </SheetHeader> <div className="mt-6" > <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </SheetContent> </Sheet> </div> </div>) "
}</div> <Button variant="ghost" size="sm" onClick={
  () => setFilters ({'
  types: [], category: '', minPrice: 0, maxPrice: 10000,  minRating: 0, sort: 'relevance'
})
}> Clear All </Button>)
}</div> <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </div> </div>) : results.length === 0 && searchTerm ? (<NoResultsState searchTerm= {
  searchTerm
}onNewSearch= {
  handleSearch
}/> <SearchResultCard key= {
  `$ {
  result.type
}-$ {
  result.id
}`
}result= {
  result
}searchTerm= {
  searchTerm
}viewMode= {
  viewMode
}/>) )
}</div> > {'"
  loading ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Loading... </>) : ('Load More Results')
}</Button> </div>)
}</>)
}</div> </div>)
}</div>)
}
export default AdvancedSearchResults
'"
<<<<<<< HEAD
