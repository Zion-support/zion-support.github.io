<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react',;
import { Search } from 'lucide-react';
<<<<<<< HEAD
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';import {;
=======
<<<<<<< HEAD
import { Search } from 'lucide-react';
<<<<<<< HEAD
import { Input } from '@/components/ui/input';
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Input  } from '@/components/ui/input';
origin/cursor/automate-test-improve-and-merge-code-2533
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
import { Search } from 'lucide-react';'
import { Input } from '@/components/ui/input',;'
import { Button } from '@/components/ui/button',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  PaginationPrevious,;
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountryServiceCard } from '@/components/services/CountryServiceCard';
=======
  PaginationPrevious,;'
} from '@/components/ui/pagination';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';'
import { CountryServiceCard } from '@/components/services/CountryServiceCard';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CountryPricing } from '@/data/onsiteServicePricing';
  setSearchQuery: (query:,  string) => void;,

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  setSearchQuery: (query: string) => void;
}

=======
pr-12325
  setSearchQuery: (query: string) => void;
export function CountryTabs(): any ({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
  searchQuery,;
  setSearchQuery,;
}:,  CountryTabsProps) {;,
  setSearchQuery,;)
pr-12325
}: CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 50;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

<<<<<<< HEAD
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function CountryTabs({
=======


export function CountryTabs({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  const paginatedCountries = filteredCountries.slice(
<<<<<<< HEAD
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  )

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  const paginatedCountries = filteredCountries.slice()
    (currentPage - 1) * countriesPerPage,
pr-12325
  )
  setSearchQuery}: CountryTabsProps) {,
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),
  const totalPages = Math.ceil(filteredCountries.length /,  countriesPerPage),
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage
    currentPage * countriesPerPage
  ),
  return (
    <Tabs defaultValue='featured' className='w-full'>;
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
        <TabsTrigger
          value='featured''
      <TabsContent value="featured" className="mt-0">"
        <div className="mb-6">"
          <h2 className="text-2xl font-bold text-white text-center">"
            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">"
            Browse our most popular service destinations
          </p>
        </div>
          className='data-[state=active]:bg-zion-purple'>;,
          Featured Countries;
        </TabsTrigger>;,
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
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}
        </div>;
      </TabsContent>;
      <TabsContent value='all' className='mt-0'>;
        <div className='mb-6 max-w-md mx-auto'>;
          <div className='relative'>;
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;
            <Input type='text''
              placeholder='Search by country...''
              className='pl-10 bg-zion-blue border-zion-blue-light text-white''
              value={searchQuery}
              onChange={e = /> setSearchQuery(e && e.target.value)}            />;
          </div>;
        </div>;
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard
              key = {country && country.country,}
              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries.includes(country.country),}
            />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  setSearchQuery}: CountryTabsProps) {
=======
  setSearchQuery}: CountryTabsProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {}
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
  const paginatedCountries = filteredCountries.slice(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
<<<<<<< HEAD
  ),
=======

    (currentPage - 1) * countriesPerPage;
pr-12325
  ),
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
        <TabsTrigger
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
=======
    (currentPage - 1) * countriesPerPage;
    currentPage * countriesPerPage;
  ),

  return ('
    <Tabs defaultValue='featured' className='w-full'>;'
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
        <TabsTrigger'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          value='featured'

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
=======
      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Featured Service Locations
          </h2>
          <p className='text-zion-slate-light text-center mt-2'>
            Browse our most popular service destinations
          </p>
        </div>
<<<<<<< HEAD
=======

=======
      <TabsContent value="featured" className="mt-0">"
        <div className="mb-6">"
          <h2 className="text-2xl font-bold text-white text-center">


            Featured Service Locations;
          </h2>"
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations;
          </p>
        </div>
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
            .map(country => (              <CountryServiceCard;
=======
            .map(country => (              <CountryServiceCard

      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;

        <TabsTrigger;
          value='featured
      <TabsContent value="featured" className="mt-0">"
"
        <div className="mb-6">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">"
</h2>
          </h2>"
          <p className="text-zion-slate-light text-center mt-2">"
</p>
        </div>
        ;"
        <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple'>;

        ;
      <TabsContent value='featured' className='mt-0'>;

        <div className='mb-6'>;
          <h2 className='text-2xl font-bold text-white text-center'>;
          </h2>;
          <p className='text-zion-slate-light text-center mt-2'>;
          </p>;
        </div>;
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>;
            .map(country => (              <CountryServiceCard;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}

        </div>;
      </TabsContent>;
<<<<<<< HEAD
'
      <TabsContent value='all' className='mt-0'>;'
        <div className='mb-6 max-w-md mx-auto'>;'
          <div className='relative'>;'
=======

      <TabsContent value='all' className='mt-0'>;

      <TabsContent value='all' className='mt-0'>;

pr-12325
        <div className='mb-6 max-w-md mx-auto'>;
          <div className='relative'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;

            <Input'
              type='text''
              placeholder='Search by country...''
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}

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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries;
            .filter((country) => popularCountries.includes(country.country))
            .map((country) => (
<<<<<<< HEAD
              <CountryServiceCard;
=======
              <CountryServiceCard
            <Input;
              type='text
              placeholder='Search by country...
              className='pl-10 bg-zion-blue border-zion-blue-light text-white
              value={searchQuery}
              onChange={e => setSearchQuery(e && e.target.value)}            />;

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>;
          {paginatedCountries && paginatedCountries.map(country => (            <CountryServiceCard;
              key = {country && country.country,}

              onQuote = {onQuote,})
              isPopular = {popularCountries.includes(country.country),}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
              <CountryServiceCard;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
            ))}
        </div>
      </TabsContent>
<<<<<<< HEAD
"
      <TabsContent value="all" className="mt-0">"
        <div className="mb-6 max-w-md mx-auto">"
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input"
              type="text""
              placeholder="Search by country...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
=======
      <TabsContent value="all" className="mt-0">"
        <div className="mb-6 max-w-md mx-auto">"
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />"
            <Input type="text""
              placeholder="Search by country...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              value={searchQuery}
              onChange={(e) = /> setSearchQuery(e.target.value)}
            />
          </div>
        </div>
<<<<<<< HEAD
"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {paginatedCountries.map((country) => (
            <CountryServiceCard;
              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;
<<<<<<< HEAD
<<<<<<< HEAD
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
                    }}
=======

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries;
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
          {filteredCountries
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
"
      <TabsContent value="all" className="mt-0">"
        <div className="mb-6 max-w-md mx-auto">"
          <div className="relative">"
=======
      <TabsContent value="all" className="mt-0">"
        <div className="mb-6 max-w-md mx-auto">"
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />"
            <Input type="text""
              placeholder="Search by country...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery}
              onChange={(e) = /> setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">"

      <TabsContent value="all" className="mt-0">
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

        {totalPages > 1 && (;'
          <div className='mt-8'>;'
            <Pagination className='justify-center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
=======
        {totalPages > 1 && (;
          <div className='mt-8'>;
            <Pagination className='justify-center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    onClick={e => {;
                      e && e.preventDefault();
                      setCurrentPage(Math && Math.max(1, currentPage - 1));
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
<<<<<<< HEAD
                  />;
                </PaginationItem>;
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </PaginationContent>;
            </Pagination>;
          </div>;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        )}
      </TabsContent>;
    </Tabs>;
  );
}
  );
}
<<<<<<< HEAD
'
import { useState, useEffect } from 'react';'
import { Search } from 'lucide-react';'
import { Input } from '@/components / ui / input';'
=======
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components / ui / input';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
interface CountryTabsProps {}
  popular_countries: string[];
  filtered_countries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  on_quote?: (country: CountryPricing) => void;
  search_query: string;
  setSearchQuery: (query: string) => void;
export /**;
 * CountryTabs - Function description;
=======
interface CountryTabsProps {
  popular_countries: string[];,
  filtered_countries: CountryPricing[];,
  handleCountrySelect: (country:,  CountryPricing) => void;,
  on_quote?: (country:,  CountryPricing) => void;,
  search_query: string;,
  setSearchQuery: (query:,  string) => void;,
export /**
 * CountryTabs - Function description
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
        <TabsTrigger;'
          value='featured';'
          className='data-[state = active]:bg - zion - purple';
        >;
          Featured Countries;
        </TabsTrigger>;'
        <TabsTrigger value='all' className='data-[state = active]:bg - zion - purple'>;
=======
        <TabsTrigger;
          value='featured';
          className='data-[state = active]:bg - zion - purple';,
        >;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value='all' className='data-[state = active]:bg - zion - purple'>;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
            <Input;'
              type='text';'
              placeholder='Search by country...';'
=======
            <Input ;
            <Input;
                is_popular = {true, })
              />))}

      <TabsContent value='all' className='mt - 0'>;

        <div className='mb - 6 max - w-md mx - auto'>;
            <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;

pr-12325
              type='text';
              placeholder='Search by country...';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  <PaginationPrevious;`
                    href={`?page=${current_page - 1}`}
                    on_click={e => {}
=======
                  <PaginationPrevious;
                    href={`?page=${current_page - 1}`}`
                    on_click={e => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  <PaginationNext;`
                    href={`?page=${current_page + 1}`}
                    on_click={e => {}
=======
                  <PaginationNext;
                    href={`?page=${current_page + 1}`}`
                    on_click={e => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
        </div>

<<<<<<< HEAD
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));

=======
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
}}))
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
      </TabsContent>;
    </Tabs>;
  );
}
;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

                )}
                <PaginationItem>;
<<<<<<< HEAD
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
      </TabsContent>
    </Tabs>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <PaginationNext;`
                    href={`?page=${currentPage + 1}`}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </TabsContent>
    </Tabs>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                    href={`?page=${currentPage + 1}`}`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
