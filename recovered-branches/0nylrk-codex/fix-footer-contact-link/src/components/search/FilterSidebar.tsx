 interface FilterSidebarProps {
  filters: {
  selectedProductTypes: string[];
selectedLocations: string[];
selectedAvailability: string[];
selectedRating: number | null 
};
filterOptions: FilterOptions;
onFilterChange: (filterType: string, value: string) => void;
onRatingChange: (rating: number | null) => void;
onClearFilters: () => void 
}export function FilterSidebar ({
  filters;
filterOptions;
onFilterChange;
onRatingChange;
onClearFilters 
}: FilterSidebarProps) {
  return (<div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4" > <div className="flex items-center justify-between mb-4" > <h3 className="text-lg font-medium text-white flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters outline"size=" sm"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick= {
  onClearFilters 
}> Clear All </Button> </div> > {
  type.label 
}</label> </div>) ) 
}</div> </div> > {
  location.label 
}</label> </div>) ) 
}</div> </div> > {
  availability.label 
}</label> </div>) ) 
}</div> </div>) ) 
}<span className=" ml-1" >& Up</span> </div>) 
}</Button>) ) 
}</div> </div> </div>) 
}