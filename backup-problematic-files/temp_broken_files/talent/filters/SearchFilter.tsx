<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx

=======
import { Input } from "@/components/ui/input",;
import { SearchIcon } from "lucide-react",;
=======
import { Input } from "@/components/ui/input",;
import { SearchIcon } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/SearchFilter.tsx
=======
import { Input } from "@/components/ui/input",;
import { SearchIcon } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { SearchFilterProps } from "@/types/filters",;
;
export function SearchFilter({ searchTerm, setSearchTerm } SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <label htmlFor="talent-search" className="sr-only">;
          Search talents;
        </label>;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;
        <Input;
          id="talent-search";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/filters/SearchFilter.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;

=======
          aria-describedby="talent-search-help";
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
:temp_broken_files/talent/filters/SearchFilter.tsx
  return (<div className="mb-6" > <div className="relative" > <label htmlFor="talent-search" className="sr-only" > absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"aria-hidden=" true"/> <Input id=" talent-search"type=" text"placeholder=" Search talents..."value= {;"  searchTerm ";"}/> <p id=" talent-search-help"className=" sr-only" > Type a name or skill to filter results </p> </div> </div>) ;"}"
  return (<div className="mb-6" > <div className="relative" > <label htmlFor="talent-search" className="sr-only" > absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light"aria-hidden=" true"/> <Input id=" talent-search"type=" text"placeholder=" Search talents..."value= {;
  searchTerm ";
}/> <p id=" talent-search-help"className=" sr-only" > Type a name or skill to filter results </p> </div> </div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/filters/SearchFilter.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
