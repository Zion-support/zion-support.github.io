

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';











  searchQuery,;)


    <Tabs defaultValue="featured" className="w-full">;"
"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"
        <TabsTrigger;"
          value="featured";""
          className="data-[state=active]:bg-zion-purple";"
        >;













        </div>;







        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
              key={country.country}              country={country}
              isPopular={popularCountries.includes(country.country)}

          <div className="mt-8">;"
            <Pagination className="justify-center">;"
                    <PaginationItem key={page}>;

                      <PaginationButton;
                        page={page}
                        isActive={page === currentPage}

                  <PaginationNext;`;
                    href={`?page=${currentPage + 1}`}




  ),;}
 <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > Featured Countries </TabsTrigger> <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple" > All Countries </TabsTrigger> </TabsList> <TabsContent value="featured" className="mt-0" > <div className="mb-6" > <h2 className="text-2xl font-bold text-white text-center" > Featured Service Locations </h2> <p className="text-zion-slate-light text-center mt-2" > Browse our most popular service destinations </p> </div> .filter ( (country) => popularCountries.includes (country.country) ) .map ( (country) => (<CountryServiceCard key= {;



}isPopular= {;)"
  true ;"}/>) ) ";"}</div>  <TabsContent value="all" className="mt-0" > <div className="mb-6 max-w-md mx-auto" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {;"
}</div> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;


