

interface CountryTabsProps {_popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (_country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (_query: string) => void;}

export function CountryTabs(_{_popularCountries, _filteredCountries, _handleCountrySelect, _searchQuery, _setSearchQuery}: CountryTabsProps) {_return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">
          All Countries
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries
            .filter(country => popularCountries.includes(country.country))
            .map(country => (
              <CountryServiceCard 
                key={country.country} 
                country={_country} 
                onSelect={_handleCountrySelect}
                isPopular={_true}
              />
            ))
          }
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
          {_filteredCountries.slice(0, _12).map(country => (
            <CountryServiceCard 
              key={country.country} 
              country={_country} 
              onSelect={_handleCountrySelect}
              isPopular={_popularCountries.includes(country.country)}
            />
          ))}
        </div>
        
        {_filteredCountries.length > 12 && (_<div className="text-center mt-8">
            <Button
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth'})}
              variant="outline"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            >
              View All {_filteredCountries.length} Countries
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
