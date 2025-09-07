
class ErrorBoundary extends React.Component {



              }}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />
          </div>
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Active filters display */}
            <ActiveFiltersBar
              selectedProductTypes={selectedProductTypes}
                selectedProductTypes;
                selectedLocations;
                selectedAvailability,

                value={searchQuery}
                onChange={setSearchQuery}"
                placeholder="Search the marketplace...""
                searchSuggestions={searchSuggestions}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
          <div className="lg: col-span-1">;"
        {/* Main layout with sidebar and results */}"
                selectedAvailability;
                selectedProductTypes,
                selectedLocations,

                selectedRating;
                selected_locations;
                selected_availability,
                selected_rating;
              }}
              filter_options={filter_options}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
          {/* Main content */}"
          <div className="lg:col-span-3">;"

            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}
              selected_locations={selected_locations}
              selected_availability={selected_availability}
              selected_rating={selected_rating}
              search_query={search_query}
              onRemoveFilter={handleFilterChange}
            {/* Results count */}"
            <div className="mb-6">;"
          <div className="lg:col-span-3">"
pr-12325
</div>
            <ActiveFiltersBar;
              selectedProductTypes={selectedProductTypes}

              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />
            {/* Results count */}
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {filteredListings.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <ProductListingCard
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.
                  </p>
              </p>;
            </div>;

            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              {filteredListings && filteredListings.length > 0 ? (;
                filteredListings && filteredListings.map((listing) => (;
                  <ProductListingCard

              onRemoveFilter={handleFilterChange})
              onRemoveRating={() => setSelectedRating(null)}
</ActiveFiltersBar>"
            <div className="mb-6">"
</div>"
              <p className="text-zion-slate-light">"
</p>
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />
</ProductListingCard>"
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">"
</div>"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>""
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">"
</p>
                  </p>
              </p>;
            </div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
                  <ProductListingCard;
                    key={listing && listing.id} 
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />;
                ));
              ) : (;
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.;
                  </p>;
                  <Button
                    onClick={clearAllFilters}
                    className="bg-zion-purple hover:bg-zion-purple-dark">;
                    Clear Filters;
                  </Button>;
                </div>;
              )}

              onRemoveRating={() => setSelectedRating (null)}
              onClearSearch={() => setSearchQuery ("")}
            />;
            {/* Results count */}
            <div className="mb - 6">;
              <p className="text - zion - slate - light">;
                Showing {filtered_listings.length} results;
                {search_query && ` for "${search_query}"`}
              onRemoveFilter={handleFilterChange})
              onRemoveRating={() => setSelectedRating(null)}
            <div className="mb-6">"
              <p className="text-zion-slate-light">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</ProductListingCard>"
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;"
</div>"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;""
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;"
</p>
                  </p>;
                  <Button;
                    onClick={clearAllFilters}"
                    className="bg-zion-purple hover:bg-zion-purple-dark">;"
</Button>
                  </Button>;
                </div>;"
            <div className="mb - 6">;"
</div>"
              <p className="text - zion - slate - light">;"
</p>
              </p>;
            </div>;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
</div>
                  <ProductListingCard;
                    key={listing.id}
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>""
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
                    key={listing && listing.id} 
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">;"
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>;""
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">;"
                  <Button;
                    onClick={clearAllFilters}"
                    className="bg-zion-purple hover:bg-zion-purple-dark">;"

            <div className="mb - 6">;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
                  />))) : (
                <div className="col - span - 2 text - center py - 16 bg - zion - blue - dark border border - zion - blue - light rounded - lg">;"
                  <h2 className="text - 2xl font - bold text - white mb - 4">No Results Found</h2>;""
                  <p className="text - zion - slate - light max - w-md mx - auto mb - 8">;"
                    on_click={clearAllFilters}"
                    className="bg - zion - purple hover:bg - zion - purple - dark";"
                  >;

          ;
          {/* Main content */}
          <div className="lg:col-span-3">;
            {/* Active filters display */}
                  ;)
                </div>)}"
            <ActiveFiltersBar ;
              selectedProductTypes={selectedProductTypes}              selectedLocations={selectedLocations}
                  <ProductListingCard ;
                    key={listing.id} ;
                  <Button ;
                    className="bg-zion-purple hover:bg-zion-purple-dark";"

                    className="bg-zion-purple hover:bg-zion-purple-dark""
                  >

      </main>
    </AppLayout>
  )
}
            </div>;
          </div>;
        </div>;
      </main>;

    </AppLayout>);
}

;
    </AppLayout>;
  ),; const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions ();
const filterOptions = generateFilterOptions ();
//Search filter if (searchQuery && !listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) && !listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) {
  return true;
});
switch (filterType) {
  case 'productType': setSelectedProductTypes (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;
case 'location': setSelectedLocations (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break;
case 'availability': setSelectedAvailability (prev => prev.includes (value) ? prev.filter (item => item !== value) : [...prev, value]);
break 
}
;

};
const clearAllFilters = () => {
  //Handle requesting a quote const handleRequestQuote = (listingId: string) => {
  const listing = MARKETPLACE LISTINGS.find (item => item.id === listingId);
if (listing) {
  toast ({
  title: "Quote Requested";
description: `Your quote request for $ {
  listing.title 
}has been sent.` 
});
//Navigate to the quote request page with the listing information navigate ("/request-quote", {
  state: {
  serviceType: listing.category;
specificItem: {
  id: listing.id;
title: listing.title;
category: listing.category;
image: listing.images?.[0] 
}
}
}) 
}
};
Discover professional services and products for your AI and tech projects. Browse our curated collection of solutions from verified providers. </p> </div> /> </div> <div className="flex gap-2" > <Button variant="ghost" size="icon" className="text-zion-slate-light" > <Grid3X3 className="h-4 w-4" /> </Button> <Button variant="ghost" size="icon" className="text-zion-slate-light" > <ListFilter className="h-4 w-4" /> </Button> </div> </div> </div> <FilterSidebar filters= {
      </main>;
Discover professional services and products for your AI and tech projects. Browse our curated collection of solutions from verified providers. </p> </div> /> </div> <div className="flex gap-2" > <Button variant="ghost" size="icon" className="text-zion-slate-light" > <Grid3X3 className="h-4 w-4" />  <Button variant="ghost" size="icon" className="text-zion-slate-light" > <ListFilter className="h-4 w-4" />  </div> </div> </div> <FilterSidebar filters= {"
  {
  selectedProductTypes, selectedLocations, selectedAvailability, selectedRating;
}filterOptions= {
  filterOptions;
}onFilterChange= {
  handleFilterChange;
}onRatingChange= {
  setSelectedRating;
}onClearFilters= {
  clearAllFilters;
}/> </div> <ActiveFiltersBar selectedProductTypes= {
}selectedLocations= {
}selectedAvailability= {
}selectedRating= {
}searchQuery= {
  searchQuery;
}onRemoveFilter= {
}onRemoveRating= {
  () => setSelectedRating (null) 
}<div className="mb-6"> </p> </div> {""
}<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {"
  filteredListings.length > 0 ? (filteredListings.map ( (listing) => (<ProductListingCard key= {
  listing.id;
}listing= {
  listing;
}onRequestQuote= {
  handleRequestQuote;)"
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters  </div>)"
}</div> </div> </div> </main> ) 
    ;"`;
pr-12325
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {'
</ProductListingCard>)'
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters </Button> </div>)"
}</div> </div> </div> </main> </AppLayout>) 
}
    </AppLayout>;
  );
}
;
    </AppLayout>;"

