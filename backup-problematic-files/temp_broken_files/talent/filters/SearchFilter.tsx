<<<<<<< HEAD
=======
import { Input } from "@/components/ui/input",;
import { SearchIcon } from 'lucide-react';
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import { SearchFilterProps } from "@/types/filters",;
;
export function SearchFilter({ searchTerm, setSearchTerm } SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
        <label htmlFor="talent-search" className="sr-only">;
          Search talents;
        </label>;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;
        <Input;
          id="talent-search";
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
=======
          aria-describedby="talent-search-help";
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  ),;}
 export function SearchFilter ({;
  searchTerm, setSearchTerm ;
}: SearchFilterProps) {;


  return (<div className="mb-6" > <div className="relative" > <label htmlFor="talent-search" className="sr-only" > absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"aria-hidden=" true"/> <Input id=" talent-search"type=" text"placeholder=" Search talents..."value= {;
  searchTerm ";
}/> <p id=" talent-search-help"className=" sr-only" > Type a name or skill to filter results </p> </div> </div>) ;
}"


