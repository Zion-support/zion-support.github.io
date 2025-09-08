import { useState, useEffect } from 'react',;
<<<<<<< HEAD


import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

=======
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
  PaginationPrevious} from '@/components/ui/pagination',;
<<<<<<< HEAD



=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { CountryServiceCard } from '@/components/services/CountryServiceCard',;
import { CountryPricing } from '@/data/onsiteServicePricing',;
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface CountryTabsProps {;
  popularCountries:string[],;
  filteredCountries:CountryPricing[],;
  handleCountrySelect:(country:CountryPricing) => void,;
<<<<<<< HEAD



=======
  onQuote?:(country:CountryPricing) => void,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  searchQuery:string,;
  setSearchQuery:(query:string) => void;
}
;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function CountryTabs({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
<<<<<<< HEAD

  searchQuery,;)

=======
  searchQuery,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  setSearchQuery} CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1),;
  const countriesPerPage = 50,;
;
  useEffect(() => {;
    setCurrentPage(1),;
  }, [searchQuery]),;
;
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),;
  const paginatedCountries = filteredCountries.slice(;
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  ),;
  return (;
<<<<<<< HEAD

    <Tabs defaultValue="featured" className="w-full">;"
"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"

        <TabsTrigger;"
          value="featured";""
          className="data-[state=active]:bg-zion-purple";"
        >;


=======
    <Tabs defaultValue="featured" className="w-full">;
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;
        <TabsTrigger;
          value="featured";
          className="data-[state=active]:bg-zion-purple";
        >;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">;
            Featured Service Locations;
          </h2>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter((country) => popularCountries.includes(country.country));
            .map((country) => (;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <CountryServiceCard;
                key={country.country}                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
<<<<<<< HEAD


        </div>;


=======
            ))}
        </div>;
      </TabsContent>;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <TabsContent value="all" className="mt-0">;
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Input;
              type="text";
              placeholder="Search by country...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
              key={country.country}              country={country}
              isPopular={popularCountries.includes(country.country)}

          <div className="mt-8">;"
            <Pagination className="justify-center">;"


=======
            />;
          </div>;
        </div>;
;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;
          {paginatedCountries.map((country) => (;
            <CountryServiceCard;
              key={country.country}              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;
          ))}
        </div>;
;
        {totalPages > 1 && (;
          <div className="mt-8">;
            <Pagination className="justify-center">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {;
<<<<<<< HEAD


                    <PaginationItem key={page}>;

                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}

                  <PaginationNext;`;
                    href={`?page=${currentPage + 1}`}


=======
                      e.preventDefault(),;
                      setCurrentPage(Math.max(1, currentPage - 1)),;
                    }}
                  />;
                </PaginationItem>;
                {Array.from({ length:totalPages }, (_, i) => i + 1).map(;
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
                        onClick={(e) => {;
                          e.preventDefault(),;
                          setCurrentPage(page),;
                        }}
                      />;
                    </PaginationItem>;
                  );
                )}
                <PaginationItem>;
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {;
                      e.preventDefault(),;
                      setCurrentPage(Math.min(totalPages, currentPage + 1)),;
                    }}
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        )}
      </TabsContent>;
    </Tabs>;
<<<<<<< HEAD


  ),;}
 <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > Featured Countries </TabsTrigger> <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple" > All Countries </TabsTrigger> </TabsList> <TabsContent value="featured" className="mt-0" > <div className="mb-6" > <h2 className="text-2xl font-bold text-white text-center" > Featured Service Locations </h2> <p className="text-zion-slate-light text-center mt-2" > Browse our most popular service destinations </p> </div> .filter ( (country) => popularCountries.includes (country.country) ) .map ( (country) => (<CountryServiceCard key= {;


=======
  ),;}
 <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > Featured Countries </TabsTrigger> <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple" > All Countries </TabsTrigger> </TabsList> <TabsContent value="featured" className="mt-0" > <div className="mb-6" > <h2 className="text-2xl font-bold text-white text-center" > Featured Service Locations </h2> <p className="text-zion-slate-light text-center mt-2" > Browse our most popular service destinations </p> </div> .filter ( (country) => popularCountries.includes (country.country) ) .map ( (country) => (<CountryServiceCard key= {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
<<<<<<< HEAD

}isPopular= {;)"
  true ;"}/>) ) ";"}</div>  <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;"

}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;


=======
}isPopular= {;
  true ;"}/>) ) ";"}</div> </TabsContent> <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
}isPopular= {;
  popularCountries.includes (country.country) ;
}/>) ) ;
}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;
  `?page=$ {;
  currentPage - 1 ;
}` ;
}/> </PaginationItem> {;
  Array.from ({;
  length: totalPages ;
}, (, i) => i + 1) .map ( (page) => (<PaginationItem key= {;
  page ;
}> <PaginationButton /> </PaginationItem>) ) ;
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ;
}</TabsContent> </Tabs>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
