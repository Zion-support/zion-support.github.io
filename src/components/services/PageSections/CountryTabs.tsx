
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
    (currentPage - 1) * countriesPerPage
    currentPage * countriesPerPage

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

            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>

          ))}
        </div>
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
                  />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}

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

                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

      </TabsContent>;
    </Tabs>;
  );
}
;

