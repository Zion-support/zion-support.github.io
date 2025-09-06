
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

  return (
    <Tabs defaultValue='featured' className='w-full'>;
      <TabsList className='bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6'>;
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

          ))}

        </div>;

        {totalPages > 1 && (;
          <div className='mt-8'>;
            <Pagination className='justify-center'>;
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}

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
