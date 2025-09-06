 const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions ();
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
  {
  selectedProductTypes, selectedLocations, selectedAvailability, selectedRating 
}
}filterOptions= {
  filterOptions 
}onFilterChange= {
  handleFilterChange 
}onRatingChange= {
  setSelectedRating 
}onClearFilters= {
  clearAllFilters 
}/> </div> <ActiveFiltersBar selectedProductTypes= {
  selectedProductTypes 
}selectedLocations= {
  selectedLocations 
}selectedAvailability= {
  selectedAvailability 
}selectedRating= {
  selectedRating 
}searchQuery= {
  searchQuery 
}onRemoveFilter= {
  handleFilterChange 
}onRemoveRating= {
  () => setSelectedRating (null) 
}onClearSearch= {
  () => setSearchQuery ("") 
}/> {
  /* Results count */ 
}<div className="mb-6"> </p> </div> {
  /* Display actual marketplace listings */ 
}<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {
  filteredListings.length > 0 ? (filteredListings.map ( (listing) => (<ProductListingCard key= {
  listing.id 
}listing= {
  listing 
}onRequestQuote= {
  handleRequestQuote 
}/>) ) ) : (<div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg"> <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2> <p className="text-zion-slate-light max-w-md mx-auto mb-8"> We couldn't find any listings matching your filters. Try adjusting your search criteria. </p> <Button onClick= {
  clearAllFilters 
}className="bg-zion-purple hover:bg-zion-purple-dark" > Clear Filters </Button> </div>) 
}</div> </div> </div> </main> </AppLayout>) 
}