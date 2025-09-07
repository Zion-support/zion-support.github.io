import { useState, useEffect } from 'react',;
<<<<<<< HEAD
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
=======

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
>>>>>>> merged-prs-20250907-203621
import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;
  PaginationPrevious} from '@/components/ui/pagination',;
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { CountryServiceCard } from '@/components/services/CountryServiceCard',;
import { CountryPricing } from '@/data/onsiteServicePricing',;
=======

>>>>>>> merged-prs-20250907-203621
;
interface CountryTabsProps {;
  popularCountries:string[],;
  filteredCountries:CountryPricing[],;
  handleCountrySelect:(country:CountryPricing) => void,;
<<<<<<< HEAD
  onQuote?:(country:CountryPricing) => void,;
=======

>>>>>>> merged-prs-20250907-203621
  searchQuery:string,;
  setSearchQuery:(query:string) => void;
}
;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
export function CountryTabs({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
<<<<<<< HEAD
  searchQuery,;
=======
  searchQuery,;)
>>>>>>> merged-prs-20250907-203621
  setSearchQuery} CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1),;
  const countriesPerPage = 50,;
  useEffect(() => {;
    setCurrentPage(1),;
  }, [searchQuery]),;
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),;
  const paginatedCountries = filteredCountries.slice(;)
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  ),;
  return (;
<<<<<<< HEAD
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
=======
    <Tabs defaultValue="featured" className="w-full">;"
"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"

        <TabsTrigger;"
          value="featured";""
          className="data-[state=active]:bg-zion-purple";"
        >;

>>>>>>> merged-prs-20250907-203621
;
      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">;
            Featured Service Locations;
          </h2>;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter((country) => popularCountries.includes(country.country));
            .map((country) => (;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
              <CountryServiceCard;
                key={country.country}                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
<<<<<<< HEAD
            ))}
        </div>;
      </TabsContent>;
;
=======

        </div>;

>>>>>>> merged-prs-20250907-203621
      <TabsContent value="all" className="mt-0">;
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
            <Input;
              type="text";
              placeholder="Search by country...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}

              onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
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
=======

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
              key={country.country}              country={country}
              isPopular={popularCountries.includes(country.country)}

          <div className="mt-8">;"
            <Pagination className="justify-center">;"

>>>>>>> merged-prs-20250907-203621
              <PaginationContent>;

                <PaginationItem>;

                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {;
<<<<<<< HEAD
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
=======

                    <PaginationItem key={page}>;

                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}

                  <PaginationNext;`;
                    href={`?page=${currentPage + 1}`}

>>>>>>> merged-prs-20250907-203621
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

>>>>>>> merged-prs-20250907-203621
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
<<<<<<< HEAD
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
=======
}isPopular= {;)"
  true ;"}/>) ) ";"}</div>  <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;"

}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;
<<<<<<< HEAD

}/>  {;
}, (, i) => i + 1) .map ( (page) => (<PaginationItem key= {;
=======
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
}</TabsContent> </Tabs>) ;"}"
=======
<<<<<<< HEAD
:temp_broken_files/services/PageSections/CountryTabs.tsx
}</TabsContent> </Tabs>) ;"}"
}</TabsContent> </Tabs>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/services/PageSections/CountryTabs.tsx
=======

}</TabsContent> </Tabs>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
