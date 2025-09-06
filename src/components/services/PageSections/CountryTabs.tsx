<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
=======
import { useState, useEffect } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
import { useState, useEffect } from 'react',;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


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

  popularCountries
  filteredCountries
  handleCountrySelect
  onQuote
  searchQuery
  setSearchQuery
=======


export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
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
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
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

  ),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <Tabs defaultValue='featured' className='w-full'>;
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
        <TabsTrigger
          value='featured'



      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            Featured Service Locations
          </h2>
          <p className='text-zion-slate-light text-center mt-2'>
            Browse our most popular service destinations
          </p>
        </div>

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

        </div>;

        {totalPages > 1 && (;
          <div className='mt-8'>;
            <Pagination className='justify-center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
<<<<<<< HEAD
                    onClick={e => {
                      e.preventDefault()
                      setCurrentPage(Math.max(1, currentPage - 1))
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
<<<<<<< HEAD
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
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
