            .map(country => (  filteredCountries, ;
  handleCountrySelect, ;
  searchQuery, ;
  setSearchQuery ;    <Tabs defaultValue="featured" className="w-full">;
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;

        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;
          Featured Countries;
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;

          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));
            .map(country => (;              <CountryServiceCard
                key={country && country.country} 
                country={country} 

