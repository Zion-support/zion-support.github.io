import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
  PaginationPrevious,;
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountryServiceCard } from '@/components/services/CountryServiceCard';
import { CountryPricing } from '@/data/onsiteServicePricing';
interface CountryTabsProps {;
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
export function CountryTabs(): any ({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
  searchQuery,;
  setSearchQuery,;
}: CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 50;
  useEffect(() => {;
    setCurrentPage(1);
  }, [searchQuery]);
  const totalPages = Math && Math.ceil(filteredCountries && filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries && filteredCountries.slice(;
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  );
  return (
    <Tabs defaultValue='featured' className='w-full'>;
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
        <TabsTrigger
          value='featured'
          className='data-[state=active]:bg-zion-purple'>;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple'>;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='featured' className='mt-0'>;
        <div className='mb-6'>;
          <h2 className='text-2xl font-bold text-white text-center'>;
            Featured Service Locations;
          </h2>;
          <p className='text-zion-slate-light text-center mt-2'>;
            Browse our most popular service destinations;
          </p>;
        </div>;
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));
            .map(country => (              <CountryServiceCard
                key = {country && country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />;
            ))}
        </div>;
      </TabsContent>;
      <TabsContent value='all' className='mt-0'>;
        <div className='mb-6 max-w-md mx-auto'>;
          <div className='relative'>;
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;
            <Input
              type='text'
              placeholder='Search by country...'
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}
              onChange={e => setSearchQuery(e && e.target.value)}            />;
          </div>;
        </div>;
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard
              key = {country && country.country,}
              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries && popularCountries.includes(country && country.country),}
            />;
          ))}
        </div>;
        {totalPages > 1 && (;
          <div className='mt-8'>;
            <Pagination className='justify-center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={e => {;
                      e && e.preventDefault();
                      setCurrentPage(Math && Math.max(1, currentPage - 1));
                    }}
                  />;
                </PaginationItem>;
                {Array && Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  page => (;
                    <PaginationItem key={page}>;
                      <PaginationButton
                        page={page}
                        isActive={page === currentPage}
                        onClick={e => {;
                          e && e.preventDefault();
                          setCurrentPage(page);                        }}
                      />;
                    </PaginationItem>;
                  );
                )}
                <PaginationItem>;
                  <PaginationNext
                    href={`?page=${currentPage + 1}`}
                    onClick={e => {;
                      e && e.preventDefault();
                      setCurrentPage(Math && Math.min(totalPages, currentPage + 1));                    }}
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
        )}
      </TabsContent>;
    </Tabs>;
  );
  );
}
  );
}
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from '@/components / ui / pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { CountryServiceCard } from '@/components / services / CountryServiceCard';
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryTabsProps {
  popular_countries: string[];
  filtered_countries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  on_quote?: (country: CountryPricing) => void;
  search_query: string;
  setSearchQuery: (query: string) => void;
export /**
 * CountryTabs - Function description
 */
function CountryTabs() {
  const [current_page, setCurrentPage] = useState (1);
  const countriesPerPage = 50;
  useEffect (() => {
    setCurrentPage (1);
  }, [search_query]);
  const total_pages = Math.ceil (filtered_countries.length / countriesPerPage);
  const paginated_countries = filtered_countries.slice (
    (current_page - 1) * countriesPerPage,
    current_page * countriesPerPage);
  return (
    <Tabs default_value='featured' className='w - full'>;
      <TabsList className='bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6'>;
        <TabsTrigger;
          value='featured';
          className='data-[state = active]:bg - zion - purple';
        >;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value='all' className='data-[state = active]:bg - zion - purple'>;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='featured' className='mt - 0'>;
        <div className='mb - 6'>;
          <h2 className='text - 2xl font - bold text - white text - center'>;
            Featured Service Locations;
          </h2>;
          <p className='text - zion - slate - light text - center mt - 2'>;
            Browse our most popular service destinations;
          </p>;
        </div>;
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {filtered_countries;
            .filter (country => popular_countries.includes (country.country));
            .map (country => (              <CountryServiceCard;
                key = {country.country, }
                country = {country, }
                on_select = {handleCountrySelect, }
                on_quote = {on_quote, }
                is_popular = {true, }
              />))}
        </div>;
      </TabsContent>;
      <TabsContent value='all' className='mt - 0'>;
        <div className='mb - 6 max - w-md mx - auto'>;
          <div className='relative'>;
            <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;
            <Input;
              type='text';
              placeholder='Search by country...';
              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
              value={search_query}
              on_change={e => setSearchQuery (e.target.value)}            />;
          </div>;
        </div>;
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4'>;
          {paginated_countries.map (country => (            <CountryServiceCard;
              key = {country.country, }
              country = {country, }
              on_select = {handleCountrySelect, }
              on_quote = {on_quote, }
              is_popular = {popular_countries.includes (country.country), }
            />))}
        </div>;
        {total_pages > 1 && (
          <div className='mt - 8'>;
            <Pagination className='justify - center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious;
                    href={`?page=${current_page - 1}`}
                    on_click={e => {
                      e.prevent_default ();
                      setCurrentPage (Math.max (1, current_page - 1));
                    }}
                  />;
                </PaginationItem>;
                {Array.from ({ length: total_pages }, (_, i) => i + 1).map (
                  page => (
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        is_active={page === current_page}
                        on_click={e => {
                          e.prevent_default ();
                          setCurrentPage (page) }}
                      />;
                    </PaginationItem>))}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${current_page + 1}`}
                    on_click={e => {
                      e.prevent_default ();
                      setCurrentPage (Math.min (total_pages, current_page + 1)) }}
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>)}
      </TabsContent>;
    </Tabs>));
}
  );
}