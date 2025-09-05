 interface ServiceTypeStepProps {
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void 
}//Sample data - would come from an API in a real application const SAMPLE LISTINGS: ListingItem[] = [ const handleTypeSelect = (type: ServiceType) => {
  updateFormData ({
  serviceType: type 
}) 
};
const handleItemSelect = (item: ListingItem) => {
  updateFormData ({
  specificItem: item;
serviceCategory: item.category;
serviceType: item.category.toLowerCase () as ServiceType 
}) 
};
const filteredListings = SAMPLE LISTINGS.filter (item => {
  //Filter by category only when a service type has been selected 
}return item.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || item.category.toLowerCase () .includes (searchQuery.toLowerCase () ) 
});
return (<div className="space-y-6"> <div> <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <Card > <h4 className="font-medium text-white">Services</h4> <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p> </Card> <Card > <h4 className="font-medium text-white">Talent</h4> <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p> </Card> <Card > <h4 className="font-medium text-white">Equipment</h4> <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p> </Card> </div> </div> {
  formData.serviceType && (<div className="space-y-4"> <h3 className="text-xl font-semibold text-white">Select a specific {
  formData.serviceType 
}</h3> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" /> <Input placeholder= {
  `Search $ {
  formData.serviceType 
}...` 
}value= {
  searchQuery 
}onChange= {
  (e) => setSearchQuery (e.target.value) 
}className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple" /> </div> <div className="grid grid-cols-1 gap-4 mt-4"> {
  filteredListings.length > 0 ? (filteredListings.map ( (item) => (<div key= {
  item.id 
}/> </div>) ) ) : (<div className="text-center py-8 text-zion-slate-light" > No items found. Please try a different search. </div>) 
}</div> </div>) 
}</div>) 
}