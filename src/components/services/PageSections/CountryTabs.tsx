import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
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

  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  )
  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  popularCountries
  filteredCountries
  handleCountrySelect
  onQuote
  searchQuery
  setSearchQuery
}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 50
  useEffect(() => {
    setCurrentPage(1)
  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
        <TabsTrigger
            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>
            .map(country => (              <CountryServiceCard
                key = {country && country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />;
            ))}
            <Input
              type='text'
              placeholder='Search by country...'
              className='pl-10 bg-zion-blue border-zion-blue-light text-white'
              value={searchQuery}

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
                  />;
                </PaginationItem>;
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
