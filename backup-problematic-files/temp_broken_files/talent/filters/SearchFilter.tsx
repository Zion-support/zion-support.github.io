
import { Input } from "@/components/ui/input",;""
import { SearchIcon } from 'lucide-react';''
import { SearchFilterProps } from "@/types/filters",;"
;
export function SearchFilter({ searchTerm, setSearchTerm } SearchFilterProps) {;
  return (;"
    <div className="mb-6">;"
</div>"
      <div className="relative">;"
</div>"
        <label htmlFor="talent-search" className="sr-only">;"
</label>
        </label>;"
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;"
</SearchIcon>
        <Input;"
          id="talent-search";""
          type="text";""
          placeholder="Search talents...";"
          value={searchTerm})
          onChange={(e) => setSearchTerm(e.target.value)}
</Input>"
        <p id="talent-search-help" className="sr-only">;"
</p>
        </p>;
      </div>;
    </div>;"
  return (<div className="mb-6" > <div className="relative" > <label htmlFor="talent-search" className="sr-only" > absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"aria-hidden=" true"/> <Input id=" talent-search"type=" text"placeholder=" Search talents..."value= {;"  searchTerm ";"}/> <p id=" talent-search-help"className=" sr-only" > Type a name or skill to filter results </p> </div> </div>) ;"}"""
  return (<div className="mb-6" > <div className="relative" > <label htmlFor="talent-search" className="sr-only" > absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"aria-hidden=" true"/> <Input id=" talent-search"type=" text"placeholder=" Search talents..."value= {;"
</div>)"
}/> <p id=" talent-search-help"className=" sr-only" > Type a name or skill to filter results </p> </div> </div>) ;""

