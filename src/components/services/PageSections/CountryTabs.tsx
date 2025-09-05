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

        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {filteredCountries
            .filter((country) => popularCountries.includes(country.country))
            .map((country) => (
              <CountryServiceCard
                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value=&quot;all&quot; className=&quot;mt-0&quot;>
        <div className=&quot;mb-6 max-w-md mx-auto&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; />
            <Input
              type=&quot;text&quot;
              placeholder=&quot;Search by country...&quot;
              className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4&quot;>
          {paginatedCountries.map((country) => (
            <CountryServiceCard
              key={country.country}
              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className=&quot;mt-8&quot;>
            <Pagination className=&quot;justify-center&quot;>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {
                      e.preventDefault(),
                      setCurrentPage(Math.max(1, currentPage - 1))
                    }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationButton
                        page={page}
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault(),
                          setCurrentPage(page)
                        }}
                      />
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {
                      e.preventDefault(),
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }}
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
