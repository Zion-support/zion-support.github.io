<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState, useEffect  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
=======
import { useState, useEffect } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Pagination
  PaginationContent
  PaginationItem
  PaginationButton
  PaginationNext
  PaginationPrevious
} from '@/components/ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CountryServiceCard } from '@/components/services/CountryServiceCard'
import { CountryPricing } from '@/data/onsiteServicePricing'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
interface CountryTabsProps {
  popularCountries: string[]
  filteredCountries: CountryPricing[]
  handleCountrySelect: (country: CountryPricing) => void
  onQuote?: (country: CountryPricing) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from 'react',;
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
<<<<<<< HEAD
  PaginationPrevious,;
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountryServiceCard } from '@/components/services/CountryServiceCard';
import { CountryPricing } from '@/data/onsiteServicePricing';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


  setSearchQuery: (query: string) => void;
}
<<<<<<< HEAD

export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,

=======
>>>>>>> 
=======
  PaginationPrevious} from '@/components/ui/pagination',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { CountryServiceCard } from '@/components/services/CountryServiceCard',;
import { CountryPricing } from '@/data/onsiteServicePricing',;
interface CountryTabsProps {;
  popularCountries: string[],;
  filteredCountries: CountryPricing[],;
  handleCountrySelect: (country: CountryPricing) => void,;
  onQuote?: (country: CountryPricing) => void,;
  searchQuery: string,;
  setSearchQuery: (query: string) => void;
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void
export function CountryTabs({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  popularCountries
  filteredCountries
  handleCountrySelect
  onQuote
  searchQuery
  setSearchQuery
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
<<<<<<< HEAD

=======
<<<<<<< HEAD
  setSearchQuery,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 50
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage)
<<<<<<< HEAD
=======
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
<<<<<<< HEAD

  return (
=======
>>>>>>>   const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage
    currentPage * countriesPerPage
  )
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage
    currentPage * countriesPerPage
<<<<<<< HEAD
  )
=======
  ),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
        <TabsTrigger
          value="featured"
          className="data-[state=active]:bg-zion-purple"
        >
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">
          All Countries
        </TabsTrigger>
      </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
>>>>>>>             Featured Service Locations
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (
    <Tabs defaultValue='featured' className='w-full'>;
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
        <TabsTrigger
          value='featured'


=======
      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Featured Service Locations
>>>>>>>           </h2>
          <p className='text-zion-slate-light text-center mt-2'>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Browse our most popular service destinations
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

          ))}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCountries
            .filter(country => popularCountries.includes(country.country))
            .map(country => (              <CountryServiceCard
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}
<<<<<<< HEAD

        </div>;
      </TabsContent>;

      <TabsContent value='all' className='mt-0'>;
        <div className='mb-6 max-w-md mx-auto'>;
          <div className='relative'>;
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;

=======
        </div>
      </TabsContent>
      <TabsContent value='all' className='mt-0'>
        <div className='mb-6 max-w-md mx-auto'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              type='text'
              placeholder='Search by country...'
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}
<<<<<<< HEAD

              onChange={e => setSearchQuery(e && e.target.value)}            />;
          </div>;
        </div>;

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard
              key = {country && country.country,}

=======
              onChange={e => setSearchQuery(e.target.value)}            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {paginatedCountries.map(country => (            <CountryServiceCard
              key = {country.country,}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries.includes(country.country),}
            />
<<<<<<< HEAD
>>>>>>>           ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries
            .filter((country) => popularCountries.includes(country.country))
            .map((country) => (
              <CountryServiceCard
                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
            ))}
        </div>
      </TabsContent>

      <TabsContent value="all" className="mt-0">
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input
              type="text"
              placeholder="Search by country..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginatedCountries.map((country) => (
            <CountryServiceCard
              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                    onClick={e => {
                      e.preventDefault()
                      setCurrentPage(Math.max(1, currentPage - 1))
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                     }}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    }}
                  />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        onClick={e => {
                          e.preventDefault()
                          setCurrentPage(page) }}
                      />
                    </PaginationItem>
                  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        onClick={(e) => {;
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      />;
                    </PaginationItem>;
                  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
<<<<<<< HEAD
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                    }}
=======
<<<<<<< HEAD
                    onClick={e => {
                      e.preventDefault()
                      setCurrentPage(Math.min(totalPages, currentPage + 1)) }}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
<<<<<<< HEAD
      </TabsContent>
    </Tabs>
  )
<<<<<<< HEAD
  )
}
  )
}
=======
=======
  );
};
  );
};
=======
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }}
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
        )}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </TabsContent>;
    </Tabs>;
  );
}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));


>>>>>>>                     }}
>>>>>>>                   />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
<<<<<<< HEAD

=======
                        onClick={e => {
                          e.preventDefault()
                          setCurrentPage(page) }}
                      />
                    </PaginationItem>
                  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        onClick={(e) => {;
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      />;
                    </PaginationItem>;
                  );
<<<<<<< HEAD

                )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}

                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

=======
>>>>>>>                 )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
                    }}
  )
}
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </TabsContent>;
    </Tabs>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
