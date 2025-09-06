import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,

export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  setSearchQuery,
}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 50;

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  );
  return (
    <Tabs defaultValue='featured' className='w-full'>
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>
        <TabsTrigger
          value='featured'
          className='data-[state=active]:bg-zion-purple'
        >
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple'>
          All Countries
        </TabsTrigger>
      </TabsList>

      <TabsContent value='featured' className='mt-0'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-white text-center'>
            Featured Service Locations
          </h2>
          <p className='text-zion-slate-light text-center mt-2'>
            Browse our most popular service destinations
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCountries

              <CountryServiceCard
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent value='all' className='mt-0'>
        <div className='mb-6 max-w-md mx-auto'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />
            <Input

            />
          </div>
        </div>

            <CountryServiceCard
              key = {country.country,}
              country = {country,}
              onSelect = {handleCountrySelect,}
              onQuote = {onQuote,}
              isPopular = {popularCountries.includes(country.country),}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className='mt-8'>
            <Pagination className='justify-center'>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}

                        }}
                      />
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href={`?page=${currentPage + 1}`}

                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );