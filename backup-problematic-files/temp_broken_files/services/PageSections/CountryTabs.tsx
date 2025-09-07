
import { useState, useEffect } from 'react',;''
import { Search } from 'lucide-react';''
import { Input } from '@/components/ui/input',;''
import { Button } from '@/components/ui/button',;'

import {;
  Pagination,;
  PaginationContent,;
  PaginationItem,;

  PaginationButton,;
  PaginationNext,;'
  PaginationPrevious} from '@/components/ui/pagination',;''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;''
import { CountryServiceCard } from '@/components/services/CountryServiceCard',;''
import { CountryPricing } from '@/data/onsiteServicePricing',;'

;
interface CountryTabsProps {;
  popularCountries:string[],;
  filteredCountries:CountryPricing[],;
  handleCountrySelect:(country:CountryPricing) => void,;
  onQuote?:(country:CountryPricing) => void,;
  searchQuery:string,;}
  setSearchQuery:(query:string) => void;}
}
;
export function CountryTabs({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;

  onQuote,;
  searchQuery,;)

  setSearchQuery} CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1),;
  const countriesPerPage = 50,;
;
  useEffect(() => {;}
    setCurrentPage(1),;}
  }, [searchQuery]),;
;
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage),;
  const paginatedCountries = filteredCountries.slice(;)
    (currentPage - 1) * countriesPerPage,;
    currentPage * countriesPerPage;
  ),;

  return (;'
    <Tabs defaultValue="featured" className="w-full">;"
</Tabs>"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"
</TabsList>
        <TabsTrigger;"
          value="featured";""
          className="data-[state=active]:bg-zion-purple";"
        >;
</TabsTrigger>
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;"
</TabsTrigger>
        </TabsTrigger>;
      </TabsList>;"
      <TabsContent value="featured" className="mt-0">;"
</TabsContent>"
        <div className="mb-6">;"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">;"
</h2>
          </h2>;"
          <p className="text-zion-slate-light text-center mt-2">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
              <CountryServiceCard;

                key={country.country}                country={country}
                onSelect={handleCountrySelect}
                onQuote={onQuote}
                isPopular={true}
              />;
</CountryServiceCard>
        </div>;

      </TabsContent>;"
      <TabsContent value="all" className="mt-0">;"
</TabsContent>"
        <div className="mb-6 max-w-md mx-auto">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"
</Search>
            <Input;"
              type="text";""
              placeholder="Search by country...";""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
              value={searchQuery})
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>;
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
</div>
            <CountryServiceCard;

              key={country.country}              country={country}
              onSelect={handleCountrySelect}
              onQuote={onQuote}
              isPopular={popularCountries.includes(country.country)}
            />;

</CountryServiceCard>
        </div>;"
          <div className="mt-8">;"
</div>"
            <Pagination className="justify-center">;"
</Pagination>
              <PaginationContent>;
</PaginationContent>
                <PaginationItem>;
</PaginationItem>
                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`}
                    onClick={(e) => {;
</PaginationPrevious>
                </PaginationItem>;
                    <PaginationItem key={page}>;
</PaginationItem>
                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}
                        onClick={(e) => {;
</PaginationButton>
                    </PaginationItem>;
                <PaginationItem>;
</PaginationItem>
                  <PaginationNext;
                    href={`?page=${currentPage + 1}`}
                    onClick={(e) => {;
</PaginationNext>

                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
      </TabsContent>;

    </Tabs>;"
 <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > Featured Countries </TabsTrigger> <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple" > All Countries </TabsTrigger> </TabsList> <TabsContent value="featured" className="mt-0" > <div className="mb-6" > <h2 className="text-2xl font-bold text-white text-center" > Featured Service Locations </h2> <p className="text-zion-slate-light text-center mt-2" > Browse our most popular service destinations </p> </div> .filter ( (country) => popularCountries.includes (country.country) ) .map ( (country) => (<CountryServiceCard key= {;"
  country.country ;
}country= {;
  country ;
}onSelect= {;
  handleCountrySelect ;
}onQuote= {;
  onQuote ;
}isPopular= {;)"
  true ;"}/>) ) ";"}</div> </TabsContent> <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;"
</TabsContent>
}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;
</PaginationContent>
}/> </PaginationItem> {;
}, (, i) => i + 1) .map ( (page) => (<PaginationItem key= {;
  page ;)
}> <PaginationButton /> </PaginationItem>) ) ;
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ;"
}</TabsContent> </Tabs>) ;"}""
}</TabsContent> </Tabs>) ;"

