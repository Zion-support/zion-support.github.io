<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious} from '@/components/ui/pagination',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { CountryServiceCard } from '@/components/services/CountryServiceCard',
import { CountryPricing } from '@/data/onsiteServicePricing',
interface CountryTabsProps {
  popularCountries: string[],
  filteredCountries: CountryPricing[],
  handleCountrySelect: (country: CountryPricing) => void,
  onQuote?: (country: CountryPricing) => void,
  searchQuery: string,
  setSearchQuery: (query: string) => void
}

export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  ),
  return (
    <Tabs defaultValue=&quot;featured&quot; className=&quot;w-full&quot;>
      <TabsList className=&quot;bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6&quot;>
=======
import {_Pagination, _PaginationContent, _PaginationItem, _PaginationButton, _PaginationNext, _PaginationPrevious} from '@/components/ui/pagination';

interface CountryTabsProps {_popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (_country: CountryPricing) => void;
  onQuote?: (_country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (_query: string) => void;}

export function CountryTabs(_{_popularCountries, _filteredCountries, _handleCountrySelect, _onQuote, _searchQuery, _setSearchQuery}: CountryTabsProps) {_const [currentPage, _setCurrentPage] = useState(1);
  const _countriesPerPage = 50;

  useEffect__(() => {
    setCurrentPage(1);}, [searchQuery]);

  const _totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const _paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  );
  return (_<Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <TabsTrigger
          value=&quot;featured&quot;
          className=&quot;data-[state=active]:bg-zion-purple&quot;
        >
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value=&quot;all&quot; className=&quot;data-[state=active]:bg-zion-purple&quot;>
          All Countries
        </TabsTrigger>
      </TabsList>

      <TabsContent value=&quot;featured&quot; className=&quot;mt-0&quot;>
        <div className=&quot;mb-6&quot;>
          <h2 className=&quot;text-2xl font-bold text-white text-center&quot;>
            Featured Service Locations
          </h2>
          <p className=&quot;text-zion-slate-light text-center mt-2&quot;>
            Browse our most popular service destinations
          </p>
        </div>

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {filteredCountries
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {_filteredCountries
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            .filter((country) => popularCountries.includes(country.country))
            .map(_(country) => (
              <CountryServiceCard
                key={country.country}
                country={_country}
                onSelect={_handleCountrySelect}
                onQuote={_onQuote}
                isPopular={_true}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value=&quot;all&quot; className=&quot;mt-0&quot;>
        <div className=&quot;mb-6 max-w-md mx-auto&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; />
            <Input
<<<<<<< HEAD
              type=&quot;text&quot;
              placeholder=&quot;Search by country...&quot;
              className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
=======
              type="text"
              placeholder="Search by country..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={_searchQuery}
              onChange={_(_e) => setSearchQuery(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
        </div>

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4&quot;>
          {paginatedCountries.map((country) => (
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {_paginatedCountries.map(_(country) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CountryServiceCard
              key={country.country}
              country={_country}
              onSelect={_handleCountrySelect}
              onQuote={_onQuote}
              isPopular={_popularCountries.includes(country.country)}
            />
          ))}
        </div>

<<<<<<< HEAD
        {totalPages > 1 && (
          <div className=&quot;mt-8&quot;>
            <Pagination className=&quot;justify-center&quot;>
=======
        {_totalPages > 1 && (_<div className="mt-8">
            <Pagination className="justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
<<<<<<< HEAD
                    onClick={(e) => {
                      e.preventDefault(),
                      setCurrentPage(Math.max(1, currentPage - 1))
                    }}
=======
                    onClick={_(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.max(1, _currentPage - 1));}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </PaginationItem>
                {_Array.from(_{ length: totalPages}, _(_, _i) => i + 1).map(_(page) => (_<PaginationItem key={_page}>
                      <PaginationButton
<<<<<<< HEAD
                        page={page}
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault(),
                          setCurrentPage(page)
                        }}
=======
                        page={_page}
                        isActive={_page === currentPage}
                        onClick={_(e) => {
                          e.preventDefault();
                          setCurrentPage(page);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
<<<<<<< HEAD
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {
                      e.preventDefault(),
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }}
=======
                    href={_`?page=${currentPage + 1}`}
                    onClick={_(_e) => {
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, _currentPage + 1));}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}
