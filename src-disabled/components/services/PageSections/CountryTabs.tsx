

import {;

  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;



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




      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">



            Featured Service Locations
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>


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


                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />
            ))}


        </div>;
      </TabsContent>;

            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;


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


              </PaginationContent>;
            </Pagination>;
          </div>;

        )}
      </TabsContent>;
    </Tabs>;
  );

}


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

                <PaginationItem>;
                  <PaginationNext;

