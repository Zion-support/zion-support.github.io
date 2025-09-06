 export function SearchFilter ({
  searchTerm, setSearchTerm 
}: SearchFilterProps) {
  return (<div className="mb-6" > <div className="relative" > <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> text"placeholder=" Search talents..." value= {
  searchTerm 
}/> </div> </div>) 
}