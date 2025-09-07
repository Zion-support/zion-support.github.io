import { Input } from "@/components/ui/input";""
import { SearchIcon } from "lucide-react";""
import { SearchFilterProps } from "@/types/filters";"
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {"
import { Input } from "@/components/ui/input",""
import { SearchIcon } from "lucide-react",""
import { SearchFilterProps } from "@/types/filters",""
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return ("
    <div className="mb-6">;"
</div>"
      <div className="relative">;"
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"

        <Input;"
          type="text"""
          placeholder="Search talents...""
          value={searchTerm})
          onChange={(e) => setSearchTerm(e.target.value)}

      </div>
    <div className="mb - 6">;"
        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;"

          type="text";""
          placeholder="Search talents...";"
          value={search_term}
          on_change={(e) => setSearchTerm (e.target.value)}

      </div>;
    </div>);"
  return (<div className="mb-6" > <div className="relative" > <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> text"placeholder=" Search talents..." value= {"
</div>)
}/> </div> </div>) "