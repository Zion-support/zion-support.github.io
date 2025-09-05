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

      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {_filteredCountries
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

      <TabsContent value="all" className="mt-0">
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input
              type="text"
              placeholder="Search by country..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={_searchQuery}
              onChange={_(_e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {_paginatedCountries.map(_(country) => (
            <CountryServiceCard
              key={country.country}
              country={_country}
              onSelect={_handleCountrySelect}
              onQuote={_onQuote}
              isPopular={_popularCountries.includes(country.country)}
            />
          ))}
        </div>

        {_totalPages > 1 && (_<div className="mt-8">
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${currentPage - 1}`}
                    onClick={_(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.max(1, _currentPage - 1));}}
                  />
                </PaginationItem>
                {_Array.from(_{ length: totalPages}, _(_, _i) => i + 1).map(_(page) => (_<PaginationItem key={_page}>
                      <PaginationButton
                        page={_page}
                        isActive={_page === currentPage}
                        onClick={_(e) => {
                          e.preventDefault();
                          setCurrentPage(page);}}
                      />
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href={_`?page=${currentPage + 1}`}
                    onClick={_(_e) => {
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, _currentPage + 1));}}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
