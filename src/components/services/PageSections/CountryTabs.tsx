import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
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
  setSearchQuery: (query: string) => void;
export function CountryTabs(): any ({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
  searchQuery,;
  setSearchQuery,;)
}: CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 50;

  useEffect(() => {;
    setCurrentPage(1);
  }, [searchQuery]);
  const totalPages = Math && Math.ceil(filteredCountries && filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries && filteredCountries.slice(;)
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  );



export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,

  const paginatedCountries = filteredCountries.slice()
    (currentPage - 1) * countriesPerPage,
  )

  setSearchQuery}: CountryTabsProps) {
  const [currentPage, setCurrentPage] = useState(1),
  const countriesPerPage = 50,

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery]),

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),
    (currentPage - 1) * countriesPerPage;
  ),

  return (
    <Tabs defaultValue='featured' className='w-full'>;

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
                key = {country.country,}
                country = {country,}
                onSelect = {handleCountrySelect,}
                onQuote = {onQuote,}
                isPopular = {true,}
              />

      <TabsContent value='all' className='mt-0'>;

        <div className='mb-6 max-w-md mx-auto'>;
          <div className='relative'>;
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light' />;

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
                key={country.country}
                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;

      
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
            .map (country => (              <CountryServiceCard;
                key = {country.country, }
                country = {country, }
                on_select = {handleCountrySelect, }
                on_quote = {on_quote, }
                is_popular = {true, })
              />))}

      <TabsContent value='all' className='mt - 0'>;

        <div className='mb - 6 max - w-md mx - auto'>;
            <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;

              type='text';
              placeholder='Search by country...';
              className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
              value={search_query}
              on_change={e => setSearchQuery (e.target.value)}            />;

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

                        isActive={page === currentPage}


                )}

                    href={`?page=${currentPage + 1}`}`;