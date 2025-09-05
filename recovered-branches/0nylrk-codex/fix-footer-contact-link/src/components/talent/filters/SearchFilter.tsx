
<<<<<<< HEAD
import { Input } from "@/components/ui/input",;
import { SearchIcon } from "lucide-react",;
import { SearchFilterProps } from "@/types/filters",;
;
export function SearchFilter({ searchTerm, setSearchTerm } SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input;
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
  ),;
=======
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react",
import { SearchFilterProps } from "@/types/filters",export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <div className=&quot;relative&quot;>
        <SearchIcon className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; />

export function SearchFilter(_{_searchTerm, _setSearchTerm}: SearchFilterProps) {_return (_<div className="mb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <Input
          type=&quot;text&quot;
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light&quot;        />
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
