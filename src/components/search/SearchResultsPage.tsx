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
    </span>;
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


          {result.rating && (
            <div className="flex items-center gap-1">
        </div>
      </div>
    </div>
  )
}
// Filter Sidebar Component
const FilterSidebar: React.FC<{
  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters) => void
  availableCategories: string[]
}> = ({ filters, onFiltersChange, availableCategories }) => {  const typeOptions = [
    { id: 'product', label: 'Products' }
    { id: 'talent', label: 'Talent' }
    { id: 'service', label: 'Services' }
    { id: 'blog', label: 'Blog Posts' }
  ]
  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId)
    onFiltersChange({ ...filters, types: newTypes })
  }
  const handlePriceChange = (values: number[]) => {
    onFiltersChange({
      ...filters
      minPrice: values[0] ?? 0
      maxPrice: values[1] ?? 10000
    })
  }
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


            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">




        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>




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




  search_term: string;
  onNewSearch: (term: string) => void;
}> = ({ search_term, onNewSearch }) => {  const suggestions = [;
    'AI & Machine Learning',
    'Web Development',
    'Mobile App Development',
    'Data Analysis',
    'UI / UX Design',
    'Blockchain Development',
  ];
  return (
    <div className='text - center py - 12'>;
      <div className='mb - 6'>;
        <Search className='mx - auto h - 16 w - 16 text - muted - foreground mb - 4' />;
        <h2 className='text - 2xl font - semibold mb - 2'>No results found</h2>;
        <p className='text - muted - foreground mb - 6'>;
          We couldn't find anything matching "{search_term}". Try adjusting your;
          search or filters.;
        </p>;
      </div>;
      <div className='max - w-md mx - auto space - y-4'>;
        <div>;
          <h3 className='font - semibold mb - 3'>Search Suggestions:</h3>;
          <div className='flex flex - wrap gap - 2 justify - center'>;
            {suggestions.map ((suggestion, index) => (
              <Button;
                key={index}
                variant='outline';
                size='sm';
                on_click={() => onNewSearch (suggestion)}              >;
                {suggestion}
              </Button>))}
          </div>;
        </div>;
        <div className='text - sm text - muted - foreground'>;
          <p > Tips for better results:</p>;
          <ul className='mt - 2 space - y-1'>;
            <li>• Try different keywords</li>;
            <li>• Check your spelling</li>;
            <li>• Use fewer filters</li>;
            <li>• Search for broader terms</li>;
          </ul>;
        </div>;
      </div>;
    </div>);

}
// Main Search Results Page Component;
export const SearchResultsPage: React.FC = () => {



ursor/fix-website-loading-errors-and-merge-6662
      const urlTerm = router.query.q as string,
      setSearchTerm(urlTerm)



            <div className="flex items-center gap-2">
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value })
              }>
                <SelectTrigger className="w-40">
                  <SelectValue />


              >;
                <SelectTrigger className='w-40'>                  <SelectValue />;
  // Active filters count;
  const activeFiltersCount =;
    filters.types.length +;
    (filters.category ? 1 : 0) +;
    (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) +;
    (filters.min_rating > 0 ? 1 : 0);
  return (
    <div className='container mx - auto px - 4 py - 6'>;
      {/* Search Header */}
      <div className='mb - 6'>;
        <div className='flex gap - 4 mb - 4'>;
          <div className='flex - 1'>;
            <EnhancedSearchInput;
              value={search_term}
              on_change={setSearchTerm}
              onSelectSuggestion={suggestion => handle_search (suggestion.text)}
              search_suggestions={suggestions}
              placeholder='Search products, talent, services, and more...'            />;
          </div>;
          <Button;
            on_click={() => handle_search (search_term)}
            disabled={!search_term.trim ()}
          >;
            <Search className='h - 4 w - 4' />;
          </Button>;
        </div>;
        {search_term && (
          <div className='flex items - center justify - between'>;
            <div>;
              <h1 className='text - 2xl font - bold'>Search Results</h1>;
              <p className='text - muted - foreground'>;
                {loading;
                  ? 'Searching...';
                  : `${total_count} results for "${search_term}"`}
              </p>;
            </div>;
            <div className='flex items - center gap - 2'>;
              {/* Sort Options */}
              <Select;
                value={filters.sort}
                onValueChange={value => set_filters ({ ...filters, sort: value })}
              >;
                <SelectTrigger className='w - 40'>                  <SelectValue />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value='relevance'>Relevance</SelectItem>;
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                </SelectContent>;
              </Select>;


                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />


                </Button>
              </div>
                      filters = {filters,}
                      onFiltersChange = {handleFiltersChange,}
                      availableCategories = {availableCategories,}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>


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

                </div>;


                {/* Load More Button */}
                {hasMore && (;
                  <div className='text-center'>;
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

                      result = {result,}
                      searchTerm = {searchTerm,}
                      viewMode = {viewMode,}
                    />
                      {loading ? (
                        <>

export default SearchResultsPage, ;
export default SearchResultsPage;



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
