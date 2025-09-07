<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
import { Input  } from '@/components/ui/input';
origin/cursor/automate-test-improve-and-merge-code-2533
import { Button } from '@/components/ui/button';

=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react'
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
interface CountryTabsProps {
  popularCountries: string[]
  filteredCountries: CountryPricing[]
  handleCountrySelect: (country: CountryPricing) => void
  onQuote?: (country: CountryPricing) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
import { useState, useEffect } from 'react',;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
import {;

  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======
<<<<<<< HEAD
=======
  PaginationPrevious,;
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountryServiceCard } from '@/components/services/CountryServiceCard';
import { CountryPricing } from '@/data/onsiteServicePricing';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx

import { CountryPricing } from '@/data/onsiteServicePricing';
  setSearchQuery: (query:,  string) => void;,

  setSearchQuery: (query: string) => void;
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx

  useEffect(() => {;
    setCurrentPage(1);
  }, [searchQuery]);,
  const totalPages = Math && Math.ceil(filteredCountries && filteredCountries.length /,  countriesPerPage);
  const paginatedCountries = filteredCountries && filteredCountries.slice(;
  const paginatedCountries = filteredCountries && filteredCountries.slice(;)
pr-12325
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  );

export function CountryTabs({

  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,

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

interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void
export function CountryTabs({

  popularCountries
  filteredCountries
  handleCountrySelect
  onQuote
  searchQuery
  setSearchQuery
export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  setSearchQuery,
}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 50
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage)
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
    (currentPage - 1) * countriesPerPage
    currentPage * countriesPerPage
  )
  )
  const paginatedCountries = filteredCountries.slice(

  setSearchQuery}: CountryTabsProps) {

  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {}
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),

    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
<<<<<<< HEAD
  )
  ),
  return (
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
      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
=======

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======
  ),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
  return (
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

          value='featured'

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======

<<<<<<< HEAD
      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCountries
            .filter(country => popularCountries.includes(country.country))
=======

          className='data-[state=active]:bg-zion-purple'>;
          Featured Countries;
        </TabsTrigger>;'
        <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple'>;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
'
      <TabsContent value='featured' className='mt-0'>;'
        <div className='mb-6'>;'
          <h2 className='text-2xl font-bold text-white text-center'>;
            Featured Service Locations;
          </h2>;'
          <p className='text-zion-slate-light text-center mt-2'>;
            Browse our most popular service destinations;
          </p>;
        </div>;
'
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            .map(country => (              <CountryServiceCard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}
<<<<<<< HEAD
        </div>
      </TabsContent>
      <TabsContent value='all' className='mt-0'>
        <div className='mb-6 max-w-md mx-auto'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />
=======

        </div>;
      </TabsContent>;

            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
            <Input'
              type='text''
              placeholder='Search by country...''
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              type='text'
              placeholder='Search by country...'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}
<<<<<<< HEAD
              onChange={e => setSearchQuery(e.target.value)}            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {paginatedCountries.map(country => (            <CountryServiceCard
              key = {country.country,}
              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries && popularCountries.includes(country && country.country),}
            />;

=======

              onChange={e => setSearchQuery(e && e.target.value)}            />;
          </div>;
        </div>;
'
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard;
              key = {country && country.country,}

              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries.includes(country.country),}
            />
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={e => {
                      e.preventDefault()
                      setCurrentPage(Math.max(1, currentPage - 1))

                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries;
            .filter((country) => popularCountries.includes(country.country))
            .map((country) => (

                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
            ))}
        </div>
      </TabsContent>

              value={searchQuery}
              onChange={(e) = /> setSearchQuery(e.target.value)}
            />
          </div>
        </div>

          {paginatedCountries.map((country) => (
            <CountryServiceCard;
              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;

<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx

            .filter((country) => popularCountries.includes(country.country))
            .map((country) => (
              <CountryServiceCard;
                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
            ))}
        </div>
      </TabsContent>

            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input"
              type="text""
              placeholder="Search by country...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginatedCountries.map((country) => (
            <CountryServiceCard;
              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;
          ))}
        </div>;

                    onClick={e => {;
                      e && e.preventDefault();
                      setCurrentPage(Math && Math.max(1, currentPage - 1));
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
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
interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void

  popularCountries;
  filteredCountries;
  handleCountrySelect;
  onQuote;
  searchQuery;
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = null;
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
origin/cursor/automate-test-improve-and-merge-code-2533
                    }}

=======
<<<<<<< HEAD
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
                    }}
                  />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
                        onClick={e => {
                          e.preventDefault()
                          setCurrentPage(page) }}
                      />
                    </PaginationItem>
                  )
                        onClick={(e) => {;
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      />;
                    </PaginationItem>;
                  );
                )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
                    }}
                    onClick={e => {
                      e.preventDefault()
                      setCurrentPage(Math.min(totalPages, currentPage + 1)) }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
  )
}
  )
}
  );
};
  );
};
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }}
                  />;
                </PaginationItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
              </PaginationContent>;
            </Pagination>;
          </div>;

        )}
      </TabsContent>;
    </Tabs>;
  );
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
});
=======
}
<<<<<<< HEAD
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
}

import { Button } from '@/components / ui / button';
import {}
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,';
} from '@/components / ui / pagination';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { CountryServiceCard } from '@/components / services / CountryServiceCard';'
import { CountryPricing } from '@/data / onsiteServicePricing';

 */
function CountryTabs() {}
  const [current_page, setCurrentPage] = useState (1);
  const countriesPerPage = 50;
  useEffect (() => {}
    setCurrentPage (1);
  }, [search_query]);,
  const total_pages = Math.ceil (filtered_countries.length /,  countriesPerPage);
  const paginated_countries = filtered_countries.slice (
    (current_page - 1) * countriesPerPage,
    current_page * countriesPerPage);
  return ('
    <Tabs default_value='featured' className='w - full'>;'
      <TabsList className='bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6'>;

          All Countries;
        </TabsTrigger>;
      </TabsList>;'
      <TabsContent value='featured' className='mt - 0'>;'
        <div className='mb - 6'>;'
          <h2 className='text - 2xl font - bold text - white text - center'>;
            Featured Service Locations;
          </h2>;'
          <p className='text - zion - slate - light text - center mt - 2'>;
            Browse our most popular service destinations;
          </p>;
        </div>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {filtered_countries;
            .filter (country => popular_countries.includes (country.country));

      <TabsContent value="all" className="mt-0">"
        <div className="mb-6 max-w-md mx-auto">"
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />"

            <Input;"
              type="text"""
              placeholder="Search by country..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              onChange={(e) => setSearchQuery(e.target.value)}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">"
              isPopular={popularCountries.includes(country.country)}

        </div>;"
          <div className='mt-8'>;
            <Pagination className='justify-center'>;

              <PaginationContent>;

                <PaginationItem>;

                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
                    onClick={e => {;

    <Tabs default_value='featured' className='w - full'>;

      <TabsList className='bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6'>;

          value='featured';
          className='data-[state = active]:bg - zion - purple';
        >;

        <TabsTrigger value='all' className='data-[state = active]:bg - zion - purple'>;

      <TabsContent value='featured' className='mt - 0'>;

        <div className='mb - 6'>;
          <h2 className='text - 2xl font - bold text - white text - center'>;
          <p className='text - zion - slate - light text - center mt - 2'>;
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
pr-12325
            .map (country => (              <CountryServiceCard;
                key = {country.country, }
                country = {country, }
                on_select = {handleCountrySelect, }
                on_quote = {on_quote, }
                is_popular = {true, }
              />))}
        </div>;
      </TabsContent>;'
      <TabsContent value='all' className='mt - 0'>;'
        <div className='mb - 6 max - w-md mx - auto'>;'
          <div className='relative'>;'
            <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;

              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
              value={search_query}
              on_change={e = /> setSearchQuery (e.target.value)}            />;
          </div>;
        </div>;'
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4'>;
          {paginated_countries.map (country => (            <CountryServiceCard;
              key = {country.country, }
              country = {country, }
              on_select = {handleCountrySelect, }
              on_quote = {on_quote, }
              is_popular = {popular_countries.includes (country.country), }
            />))}
        </div>;
        {total_pages > 1 && ('
          <div className='mt - 8'>;'
            <Pagination className='justify - center'>;
              <PaginationContent>;
                <PaginationItem>;

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
                        on_click={e => {}
                          e.prevent_default ();
                          setCurrentPage (page) }}
                      />;
                    </PaginationItem>))}
                <PaginationItem>;

                      e.prevent_default ();
                      setCurrentPage (Math.min (total_pages, current_page + 1)) }}
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>)}
      </TabsContent>;
    </Tabs>));
});
}
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
        </div>
=======
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx

                    }}

                  />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}

        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4'>;
          {paginated_countries.map (country => (            <CountryServiceCard;
              on_quote = {on_quote, })
              is_popular = {popular_countries.includes (country.country), }

          <div className='mt - 8'>;
            <Pagination className='justify - center'>;

                  <PaginationPrevious;`;
                    href={`?page=${current_page - 1}`}
                    on_click={e => {

                    <PaginationItem key={page}>;

                      <PaginationButton;
                        page={page}
                        is_active={page === current_page}

                    ))}

                  <PaginationNext;`;
                    href={`?page=${current_page + 1}`}

          </div>)}
    ));

pr-12325
                        isActive={page === currentPage}
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx

=======
                        onClick={e => {
                          e.preventDefault()
                          setCurrentPage(page) }}
                      />
                    </PaginationItem>
                  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
                        onClick={(e) => {;
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      />;
                    </PaginationItem>;
                  );
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
                )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}

=======
                <PaginationItem>;
                  <PaginationNext;
<<<<<<< HEAD
                    href={`?page=${currentPage + 1}`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
                    }}
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
        )}
=======
  )
}
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
      </TabsContent>;
    </Tabs>;
  );
}
;
<<<<<<< HEAD:src-disabled/components/services/PageSections/CountryTabs.tsx

                )}
                <PaginationItem>;
=======
ursor/fix-website-loading-errors-and-merge-6662
;
                    href={`?page=${currentPage + 1}`}
=======
                    href={`?page=${currentPage + 1}`}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/services/PageSections/CountryTabs.tsx
