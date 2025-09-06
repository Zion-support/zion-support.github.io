<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import {;
  Search,;
  Filter,;
  X,;
  SortAsc,;
  SortDesc,;
  GridIcon,;
  List,;
  Loader2,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {;
  Sheet,;
  SheetContent,;
  SheetHeader,;
  SheetTitle,;
  SheetTrigger,;
} from '@/components/ui/sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface SearchResult {;
import React, { useState, useEffect, useMemo } from 'react';
import { use_router } from 'next / router';
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import {
  Search
  Filter
  X
  SortAsc
  SortDesc
  GridIcon
  List
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
  Sheet
  SheetContent
  SheetHeader
  SheetTitle
  SheetTrigger
} from '@/components/ui/sheet'
import { EnhancedSearchInput } from './EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import { logErrorToProduction, logInfo } from '@/utils/productionLogger'

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
  date?: string
interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string
interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
  hasMore: boolean
// Highlight search terms in text

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
<<<<<<< HEAD
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React, { useState, useEffect, useMemo } from 'react',;
import { useRouter } from 'next/router',;
import { Search, Filter, X, SortAsc, SortDesc, GridIcon, List, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Badge } from '@/components/ui/badge',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Checkbox } from '@/components/ui/checkbox',;
import { Slider } from '@/components/ui/slider',;
import { Separator } from '@/components/ui/separator',;
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet',;
import { EnhancedSearchInput } from './EnhancedSearchInput',;
import { generateSearchSuggestions } from '@/data/marketplaceData',;
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',;
interface SearchResult {;
  id: string,;
  title: string,;
  description: string,;
  type: 'product' | 'talent' | 'blog' | 'service',;
  category?: string,;
  url?: string,;
  image?: string,;
  price?: number,;
  currency?: string,;
  rating?: number,;
  tags?: string[],;
  date?: string;
}
;
interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;
}
;
interface SearchResponse {;
  results: SearchResult[],;
  totalCount: number,;
  page: number,;
  limit: number,;
  query: string,;
  hasMore: boolean;
}
;
// Highlight search terms in text;
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({;
  text,;
  searchTerm,;
  className = '';
}) => {;
  if (!searchTerm.trim()) {;
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')),
  
  return (
    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {part}
          </mark>
        ) : (
          part
        )
      )}
<<<<<<< HEAD
    </span>
  )
}
// Search Result Card Component
const SearchResultCard: React.FC<{
  result: SearchResult
  searchTerm: string
  viewMode: 'grid' | 'list'
}> = ({ result, searchTerm, viewMode }) => {
  const router = useRouter()
  const handleClick = () => {
    if (result.url) {
      router.push(result.url)
    }
  }

    </span>;
  );
};

// Search Result Card Component;
const SearchResultCard: React.FC<{;
  result: SearchResult;
  searchTerm: string;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {;
  const router = useRouter();
  const handleClick = () => {;
    if (result && result.url) {;
      router && router.push(result && result.url);
    }
  };

  const cardClass =;
    viewMode === 'grid';
      ? 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer';
      : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4';


  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>
          <img
            src={result.image}
            alt={result.title}
            className={
              viewMode === 'grid'
                ? 'w-full h-48 object-cover rounded'
                : 'w-20 h-20 object-cover rounded'
<<<<<<< HEAD
            }          />
        </div>
=======
            }          />;
        </div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      )}



=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    </span>;
  );
},;
// Search Result Card Component;
const SearchResultCard: React.FC<{;
  result: SearchResult,;
  searchTerm: string,;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {;
  const router = useRouter(),;
  const handleClick = () => {;
    if (result.url) {;
      router.push(result.url);
    }
  },

  const cardClass = viewMode === 'grid' 
    ? "bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer"
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4",

  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>
          <img 
            src={result.image} 
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          <div>
            <h3 className="font-semibold text-lg mb-1">
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant="secondary" className="text-xs">
              {result.type}
            </Badge>
          </div>
          {result.price && (
            <div className="text-right">
              <span className="font-bold text-primary">
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>
              {result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
            </div>
          )}
        </div>
<<<<<<< HEAD
        <p className='text-muted-foreground mb-3 line-clamp-2'>
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 flex-wrap'>
            {result.category && (
              <Badge variant='outline' className='text-xs'>

        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {result.category && (
              <Badge variant="outline" className="text-xs">
  },;
  const cardClass = viewMode === 'grid';
    ? "bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer";
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4",;
  return (;
    <div onClick={handleClick} className={cardClass}>;
      {result.image && (;
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>;
          <img;
            src={result.image} ;
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />;

        </div>;
        <p className='text - muted - foreground mb - 3 line - clamp - 2'>;
          <HighlightText text={result.description} search_term={search_term} />;
        </p>;

        <div className="flex items-center justify-between">;
          <div className="flex gap-2 flex-wrap">;
            {result.category && (;
              <Badge variant="outline" className="text-xs">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


                {result.category}

        </div>;
      )}
;
      <div className="flex-1">;
        <div className="flex items-start justify-between mb-2">;
          <div>;
            <h3 className="font-semibold text-lg mb-1">;
              <HighlightText text={result.title} searchTerm={searchTerm} />;
            </h3>;
            <Badge variant="secondary" className="text-xs">;
              {result.type}
            </Badge>;
          </div>;
          {result.price && (;
            <div className="text-right">;
              <span className="font-bold text-primary">;
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>;
              {result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
            </div>;
          )}
        </div>;
        <p className="text-muted-foreground mb-3 line-clamp-2">;
          <HighlightText text={result.description} searchTerm={searchTerm} />;
        </p>;

        <div className='flex items-center justify-between'>;
          <div className='flex gap-2 flex-wrap'>;
            {result && result.category && (;
              <Badge variant='outline' className='text-xs'>;
                {result && result.category}
              </Badge>;

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
              <Badge key={index} variant='outline' className='text-xs'>                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
          
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {result.category}
              </Badge>
            )}
            {result.tags?.slice(0, 3).map((tag, index) => (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          {result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
            </div>
          )}
<<<<<<< HEAD

        </div>;
      </div>;
    </div>;
  );
},;
// Filter Sidebar Component;
const FilterSidebar: React.FC<{;
  filters: SearchFilters,;
  onFiltersChange: (filters: SearchFilters) => void,;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {;
  const typeOptions = [;
    { id: 'product', label: 'Products' },;
    { id: 'talent', label: 'Talent' },;
    { id: 'service', label: 'Services' },;
    { id: 'blog', label: 'Blog Posts' }
  ],

  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId),
    
    onFiltersChange({ ...filters, types: newTypes })
  },

  const handlePriceChange = (values: number[]) => {
    onFiltersChange({ 
      ...filters, 
      minPrice: values[0] ?? 0, 
      maxPrice: values[1] ?? 10000 
    })
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Content Type</h3>
        <div className="space-y-2">
          {typeOptions.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={filters.types.includes(option.id)}
<<<<<<< HEAD
                onCheckedChange={checked =>
                  handleTypeChange(option.id, !!checked)
                }              />
              <label htmlFor={option.id} className='text-sm'>
                onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />
              <label htmlFor={option.id} className="text-sm">
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
<<<<<<< HEAD
        <h3 className='font-semibold mb-3'>Category</h3>
        <Select
          value={filters && filters.category}
          onValueChange={value =>;
            onFiltersChange({;
              ...filters,;
              category: value === 'all' ? '' : value,;
            });

    <div className='space - y-6'>;
      <div>;
        <h3 className='font - semibold mb - 3'>Content Type</h3>;
        <div className='space - y-2'>;
          {type_options.map (option => (
            <div key={option.id} className='flex items - center space - x-2'>;
              <Checkbox;
                id={option.id}
                checked={filters.types.includes (option.id)}
                onCheckedChange={checked =>;
                  handleTypeChange (option.id, !!checked);
                }              />;
              <label html_for={option.id} className='text - sm'>;
                {option.label}
              </label>;
            </div>))}
        </div>;
      </div>;
      <Separator />;
      <div>;
        <h3 className='font - semibold mb - 3'>Category</h3>;
        <Select;
          value={filters.category}
          onValueChange={value =>;
            onFiltersChange ({
              ...filters,
              category: value === 'all' ? '' : value,
            });
          }
        >          <SelectTrigger>
            <SelectValue placeholder='All Categories' />
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={filters.category} onValueChange={(value) => 
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
<<<<<<< HEAD
            className='mb-2'          />
          <div className='flex justify-between text-sm text-muted-foreground'>
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div>
<<<<<<< HEAD
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>
        <Select
          value={filters && filters.minRating.toString()}
          onValueChange={value =>;
            onFiltersChange({ ...filters, minRating: parseFloat(value) });
          }
        >          <SelectTrigger>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
<<<<<<< HEAD
}
// No Results Component;
const NoResultsState: React.FC<{
  searchTerm: string
  onNewSearch: (term: string) => void
}> = ({ searchTerm, onNewSearch }) => {  const suggestions = [
    'AI & Machine Learning'
    'Web Development'
    'Mobile App Development'
    'Data Analysis'
    'UI/UX Design'
    'Blockchain Development'
  ]
},

// No Results Component
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = [
    "AI & Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ],

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>
<<<<<<< HEAD

        >          <SelectTrigger>;


      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
            className="mb-2";
          />;
          <div className="flex justify-between text-sm text-muted-foreground">;
            <span>${filters.minPrice}</span>;
            <span>${filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;
      <Separator />;
      <div>;
        <h3 className="font-semibold mb-3">Minimum Rating</h3>;
        <Select value={filters.minRating.toString()} onValueChange={(value) =>;
          onFiltersChange({ ...filters, minRating: parseFloat(value) });
        }>;
          <SelectTrigger>;

            <SelectValue />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="0">Any Rating</SelectItem>;
            <SelectItem value="1">1+ Stars</SelectItem>;
            <SelectItem value="2">2+ Stars</SelectItem>;
            <SelectItem value="3">3+ Stars</SelectItem>;
            <SelectItem value="4">4+ Stars</SelectItem>;
            <SelectItem value="4.5">4.5+ Stars</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
    </div>;
  );
},;
// No Results Component;
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({;
  searchTerm,;
  onNewSearch;
}) => {;
  const suggestions = [;
    "AI & Machine Learning",;
    "Web Development",;
    "Mobile App Development",;
    "Data Analysis",;
    "UI/UX Design",;
    "Blockchain Development";
  ],;
  return (;
    <div className="text-center py-12">;
      <div className="mb-6">;
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />;
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>;
        <p className="text-muted-foreground mb-6">;
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.;
        </p>;
      </div>;
      <div className="max-w-md mx-auto space-y-4">;
        <div>;
          <h3 className='font-semibold mb-3'>Search Suggestions:</h3>;
          <div className='flex flex-wrap gap-2 justify-center'>;
            {suggestions && suggestions.map((suggestion, index) => (;
              <Button
                key={index}

                variant="outline";
                size="sm";
                onClick={() => onNewSearch(suggestion)}
              >;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
<<<<<<< HEAD
        <div className='text-sm text-muted-foreground'>
          <p>Tips for better results:</p>
          <ul className='mt-2 space-y-1'>

        <div className="text-sm text-muted-foreground">
          <p>Tips for better results: </p>
          <ul className="mt-2 space-y-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
},

// Main Search Results Page Component
export const SearchResultsPage: React.FC = () => {
  const router = useRouter(),
  const [searchTerm, setSearchTerm] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const [totalCount, setTotalCount] = useState(0),
  const [currentPage, setCurrentPage] = useState(1),
  const [hasMore, setHasMore] = useState(false),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState(false),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    sort: 'relevance'
  }),
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  const suggestions = generateSearchSuggestions(),

  // Extract available categories from results for filter
  const availableCategories = useMemo(() => {
    const categories = new Set<string>(),
    results.forEach(result => {
      if (result.category) categories.add(result.category)
    }),
    return Array.from(categories).sort()
  }, [results]),

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {
<<<<<<< HEAD

  const router = use_router ();
  const [search_term, setSearchTerm] = useState ('');
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
  const [total_count, setTotalCount] = useState (0);
  const [current_page, setCurrentPage] = useState (1);
  const [has_more, setHasMore] = useState (false);
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [show_filters, setShowFilters] = useState (false);
  const [filters, set_filters] = useState < SearchFilters>({
    types: [],
    category: '',
    min_price: 0,
    max_price: 10000,
    min_rating: 0,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    sort: 'relevance',
  });
  const suggestions = generateSearchSuggestions ();
  // Extract available categories from results for filter;
<<<<<<< HEAD
  const availableCategories = useMemo(() => {;
    const categories = new Set<string>();    results.forEach(result => {
      if (result.category) categories.add(result.category)
    })
    return Array.from(categories).sort()
  }, [results])
    sort: 'relevance'
  }),

  const suggestions = generateSearchSuggestions(),

  // Extract available categories from results for filter
  const availableCategories = useMemo(() => {
    const categories = new Set<string>(),
    results.forEach(result => {
      if (result.category) categories.add(result.category)
    }),
    return Array.from(categories).sort()
  }, [results]),

  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {
      const urlTerm = router.query.q as string
      setSearchTerm(urlTerm)
=======
  const available_categories = useMemo (() => {
    const categories = new Set < string>();    results.for_each (result => {
      if (categories.add (result.category)) {
  $2
}
    });
    return Array.from (categories).sort ();
  }, [results]);
  // Sync search term with URL;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      const url_term = router.query.q as string;
      setSearchTerm (url_term);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  }, [router.is_ready, router.query.q]);
  // Search function;
  const perform_search = async (
    term: string,
    page: number = 1,
    new_filters?: SearchFilters) => {    if () {) {
  $2
}
      set_results ([]);
      setTotalCount (0);
      return;
    }
    set_loading (true);
    try {
      const search_filters = new_filters || filters;
      const params = new URLSearchParams ({
        query: term,
        page: page.to_string (),
        limit: '20',
      });
      // Check condition
if ( {) {
  $2
}
        params.append ('type', search_filters.types.join (', '));

      }
      if (searchFilters.category) {
        params.append('category', searchFilters.category)
      }
      if (searchFilters.minPrice > 0) {
        params.append('minPrice', searchFilters.minPrice.toString())
      }
      if (searchFilters.maxPrice < 10000) {
        params.append('maxPrice', searchFilters.maxPrice.toString())
      }
      if (searchFilters.minRating > 0) {
        params.append('minRating', searchFilters.minRating.toString())
      }
      if (searchFilters.sort !== 'relevance') {
        params.append('sort', searchFilters.sort)
      }

      const response = await fetch (`/api / search?${params}`);
      const data: SearchResponse = await response.json ();
      // Check condition
if ( {) {
  $2
}
        set_results (data.results);

      } else {
        setResults(prev => [...prev, ...data.results])
      }

      setTotalCount (data.total_count);
      setCurrentPage (data.page);
      setHasMore (data.has_more);
      log_info ('Search completed', {
        term,
        result_count: data.results.length,
        total_count: data.total_count,
      });

    } catch (error) {
      logErrorToProduction('Search failed', { data: error })
      setResults([])
      setTotalCount(0)
    } finally {
      setLoading(false)
    }
  }
  // Search when term or filters change
  useEffect((,) => {
    if (searchTerm.trim()) {
      performSearch(searchTerm, 1, filters)
      setCurrentPage(1)
    }

  }, [search_term, filters]);
  // Handle search input;
  const handle_search = (term: string) =>: any {
    setSearchTerm (term);
    router.push (`/search?q=${encodeURIComponent (term)}`, undefined, {
      shallow: true,
    });

  }
  // Handle filter changes
  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
  }
  // Load more results
  const loadMore = () => {
    if (hasMore && !loading) {
      performSearch(searchTerm, currentPage + 1)
    }
  }
<<<<<<< HEAD
  // Active filters count
  const activeFiltersCount =
    filters.types.length +
    (filters.category ? 1 : 0) +
    (filters.minPrice > 0 |filters.maxPrice < 10000 ? 1 : 0) +
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const activeFiltersCount = null;
    filters.types.length +
    (filters.category ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    (filters.minRating > 0 ? 1 : 0)
=======
      const urlTerm = router.query.q as string,
      setSearchTerm(urlTerm)
          </div>;
        </div>;
        <div className="text-sm text-muted-foreground">;
          <p>Tips for better results: </p>;
          <ul className="mt-2 space-y-1">;
            <li>• Try different keywords</li>;
            <li>• Check your spelling</li>;
            <li>• Use fewer filters</li>;
            <li>• Search for broader terms</li>;
          </ul>;
        </div>;
      </div>;
    </div>;
  );
},;
// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {;
  const router = useRouter(),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [totalCount, setTotalCount] = useState(0),;
  const [currentPage, setCurrentPage] = useState(1),;
  const [hasMore, setHasMore] = useState(false),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [showFilters, setShowFilters] = useState(false),;
  const [filters, setFilters] = useState<SearchFilters>({;
    types: [],;
    category: '',;
    minPrice: 0,;
    maxPrice: 10000,;
    minRating: 0,;
    sort: 'relevance';
  }),;
  const suggestions = generateSearchSuggestions(),;
  // Extract available categories from results for filter;
  const availableCategories = useMemo(() => {;
    const categories = new Set<string>(),;
    results.forEach(result => {;
      if (result.category) categories.add(result.category);
    }),;
    return Array.from(categories).sort();
  }, [results]),;
  // Sync search term with URL;
  useEffect(() => {;
    if (router.isReady && router.query.q) {;
      const urlTerm = router.query.q as string,;
      setSearchTerm(urlTerm);
    }
  }, [router.isReady, router.query.q]),;
  // Search function;
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {;
    if (!term.trim()) {;
      setResults([]),;
      setTotalCount(0),;
      return;
    }
;
    setLoading(true),;
    try {;
      const searchFilters = newFilters || filters,;
      const params = new URLSearchParams({;
        query: term,;
        page: page.toString(),;
        limit: '20';
      }),;
      if (searchFilters.types.length > 0) {;
        params.append('type', searchFilters.types.join());
      }
      if (searchFilters.category) {;
        params.append('category', searchFilters.category);
      }
      if (searchFilters.minPrice > 0) {;
        params.append('minPrice', searchFilters.minPrice.toString());
      }
      if (searchFilters.maxPrice < 10000) {;
        params.append('maxPrice', searchFilters.maxPrice.toString());
      }
      if (searchFilters.minRating > 0) {;
        params.append('minRating', searchFilters.minRating.toString());
      }
      if (searchFilters.sort !== 'relevance') {;
        params.append('sort', searchFilters.sort);
      }
;
      const response = await fetch(`/api/search?${params}`),;
      const data: SearchResponse = await response.json(),;
      if (page === 1) {;
        setResults(data.results);
      } else {;
        setResults(prev => [...prev, ...data.results]);
      }
;
      setTotalCount(data.totalCount),;
      setCurrentPage(data.page),;
      setHasMore(data.hasMore),;
      logInfo('Search completed', {;
        term,;
        resultCount: data.results.length,;
        totalCount: data.totalCount;
      });
    } catch (error) {;
      logErrorToProduction('Search failed', { data: error }),;
      setResults([]),;
      setTotalCount(0);
    } finally {;
      setLoading(false);
    }
  },;
  // Search when term or filters change;
  useEffect(() => {;
    if (searchTerm.trim()) {;
      performSearch(searchTerm, 1, filters),;
      setCurrentPage(1);
    }
  }, [searchTerm, filters]),;
  // Handle search input;
  const handleSearch = (term: string) => {;
    setSearchTerm(term),;
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true });
  },;
  // Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {;
    setFilters(newFilters);
  },;
  // Load more results;
  const loadMore = () => {;
    if (hasMore && !loading) {;
      performSearch(searchTerm, currentPage + 1);
    }
  },

  // Active filters count
  const activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
              placeholder='Search products, talent, services, and more...'            />
              placeholder="Search products, talent, services, and more..."
            />
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
            <div className='flex items-center gap-2'>
              {/* Sort Options */}
              <Select
                value={filters.sort}
                onValueChange={value => setFilters({ ...filters, sort: value })}
              >
                <SelectTrigger className='w-40'>                  <SelectValue />

            <div className="flex items-center gap-2">
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value })
              }>
                <SelectTrigger className="w-40">
                  <SelectValue />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                </Button>
              </div>
              {/* Mobile Filter Toggle */}
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar
<<<<<<< HEAD
                      filters = {filters,}
                      onFiltersChange = {handleFiltersChange,}
                      availableCategories = {availableCategories,}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
                      filters={filters}
                      onFiltersChange={handleFiltersChange}
                      availableCategories={availableCategories}
                    />;
                  </div>;
                </SheetContent>;
              </Sheet>;
            </div>;

          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        )}
      </div>
      {searchTerm && (
        <div className="flex gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-card border rounded-lg p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                {activeFiltersCount > 0 && (
                  <Button
<<<<<<< HEAD
                    variant='ghost'
                    size='sm'
                    onClick={() =>
                      setFilters({
                        types: []
                        category: ''
                        minPrice: 0
                        maxPrice: 10000
                        minRating: 0
                        sort: 'relevance'
                      })
                    }                  >
                    Clear All
                  </Button>
                )}
              </div>
              <FilterSidebar
                filters = {filters,}
                onFiltersChange = {handleFiltersChange,}
                availableCategories = {availableCategories,}


                    variant="ghost"
                    size="sm"
                    onClick={() => setFilters({
                      types: [],
                      category: '',
                      minPrice: 0,
                      maxPrice: 10000,
                      minRating: 0,
                      sort: 'relevance'
                    })}
                  >;
                    Clear All;
                  </Button>;
                )}
              </div>;
              <FilterSidebar;
                filters={filters}
                onFiltersChange={handleFiltersChange}
                availableCategories={availableCategories}

              />;
            </div>;
          </div>;

          {/* Main Content */}
<<<<<<< HEAD

                </div>;


                {/* Load More Button */}
                {hasMore && (
<<<<<<< HEAD
                  <div className='text-center'>
                    <Button
                      onClick={loadMore}
                      disabled={loading}
                      variant='outline'>;
                      {loading ? (;
                        <>;
                          <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
                          Loading...;
                        </>;
                      ) : (;
                        'Load More Results';
          <div className="flex-1">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          <div className="flex-1">
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {loading && results.length === 0 ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : results.length === 0 && searchTerm ? (
<<<<<<< HEAD
              <NoResultsState
                searchTerm={searchTerm}
                onNewSearch={handleSearch}              />
            ) : (
              <>
                {/* Results Grid/List */}
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6'
                      : 'space-y-4 mb-6'
                  }
                >
                  {results.map(result => (                    <SearchResultCard
                      key={`${result.type}-${result.id}`}
                      result = {result,}
                      searchTerm = {searchTerm,}
                      viewMode = {viewMode,}
                    />
              <NoResultsState 
                searchTerm={searchTerm} 
                onNewSearch={handleSearch}
              />;
            ) : (;
              <>;
                {/* Results Grid/List */}
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6"
                  : "space-y-4 mb-6"
                }>
                  {results.map((result) => (
                    <SearchResultCard
                      key={`${result.type}-${result.id}`}
                      result={result}
                      searchTerm={searchTerm}
                      viewMode={viewMode}
                    />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  ))}
                </div>
                {/* Load More Button */}
                {hasMore && (
<<<<<<< HEAD
                  <div className='text-center'>
                    <Button
                      onClick={loadMore}
                      disabled={loading}
                      variant='outline'                    >
                  <div className="text-center">
                    <Button 
                      onClick={loadMore} 
                      disabled={loading}
                      variant="outline"
                    >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      {loading ? (
                        <>
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
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}
export default SearchResultsPage
  suggestion
}</Button>) )
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>)
}
//Main Search Results Page Component setTotalCount (data.totalCount)
setCurrentPage (data.page)
setHasMore (data.hasMore)
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 |filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);"
setCurrentPage (data.page);
setHasMore (data.hasMore);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);"
=======


setCurrentPage (data.page);
setHasMore (data.hasMore);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);"


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
export default SearchResultsPage
'"
<<<<<<< HEAD
<<<<<<< HEAD
export default SearchResultsPage
export default SearchResultsPage
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export default SearchResultsPage, ;
export default SearchResultsPage;


=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    </div>;
  );
};
export default SearchResultsPage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


          </div>)}
      </div>;
      {search_term && (
        <div className='flex gap - 6'>;
          {/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w - 64 flex - shrink - 0'>;
            <div className='bg - card border rounded - lg p - 4 sticky top - 4'>;
              <div className='flex items - center justify - between mb - 4'>;
                <h2 className='font - semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (
                  <Button;
                    variant='ghost';
                    size='sm';
                    on_click={() =>;
                      set_filters ({
                        types: [],
                        category: '',
                        min_price: 0,
                        max_price: 10000,
                        min_rating: 0,
                        sort: 'relevance',
                      });
                    }                  >;
                    Clear All;
                  </Button>)}
              </div>;
              <FilterSidebar;
                filters = {filters, }
                onFiltersChange = {handleFiltersChange, }
                available_categories = {available_categories, }
              />;
            </div>;
          </div>;
          {/* Main Content */}
          <div className='flex - 1'>;
            {loading && results.length === 0 ? (
              <div className='flex justify - center py - 12'>;
                <Loader2 className='h - 8 w - 8 animate - spin' />;
              </div>) : results.length === 0 && search_term ? (
              <NoResultsState;
                search_term={search_term}
                onNewSearch={handle_search}              />) : (
              <>;
                {/* Results Grid / List */}
                <div;
                  className={
                    view_mode === 'grid';
                      ? 'grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6';
                      : 'space - y-4 mb - 6';
                  }
                >;
                  {results.map (result => (                    <SearchResultCard;
                      key={`${result.type}-${result.id}`}
                      result = {result, }
                      search_term = {search_term, }
                      view_mode = {view_mode, }
                    />))}
                </div>;
                {/* Load More Button */}
                {has_more && (
                  <div className='text - center'>;
                    <Button;
                      on_click={load_more}
                      disabled={loading}
                      variant='outline'                    >;
                      {loading ? (
                        <>;
                          <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
                          Loading...;
                        </>) : (
                        'Load More Results')}
                    </Button>;
                  </div>)}
              </>)}
          </div>;
        </div>)}
    </div>);
}
export default SearchResultsPage;
  suggestion;
}</Button>) );
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>);
}
//Main Search Results Page Component setTotalCount (data.total_count);
setCurrentPage (data.page);
setHasMore (data.has_more);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) + (filters.min_rating > 0 ? 1 : 0);";
}> <SelectTrigger className="w - 40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h - 4 w - 4" /> </Button> <Button > <List className="h - 4 w - 4" /> </Button> </div> {
  /* Mobile Filter Toggle */;
}<Sheet open= {
  show_filters;
}onOpenChange= {
  setShowFilters ";
}> <SheetTrigger as_child> </Button> </SheetTrigger> <SheetContent side="left" className="w - 80" > <SheetHeader> <SheetTitle > Search Filters</SheetTitle> </SheetHeader> <div className="mt - 6" > <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </SheetContent> </Sheet> </div> </div>) ";
}</div> <Button variant="ghost" size="sm" on_click={
  () => set_filters ({';
  types: [], category: '', min_price: 0, max_price: 10000,  min_rating: 0, sort: 'relevance';
});
}> Clear All </Button>);
}</div> <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </div> </div>) : results.length === 0 && search_term ? (<NoResultsState search_term= {
  search_term;
}onNewSearch= {
  handle_search;
}/> <SearchResultCard key= {
  `$ {
  result.type;
}-$ {
  result.id;
}`;
}result= {
  result;
}search_term= {
  search_term;
}view_mode= {
  view_mode;
}/>) );
}</div> > {'";
  loading ? (<> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Loading... </>) : ('Load More Results');
}</Button> </div>);
}</>);
}</div> </div>);
}</div>);
}
export default SearchResultsPage;
'";
export default SearchResultsPage,
export default SearchResultsPage,
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
