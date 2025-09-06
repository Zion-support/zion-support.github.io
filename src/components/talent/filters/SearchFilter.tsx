<<<<<<< HEAD


import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {

=======
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
xport function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD

        <Input
=======
        <SearchIcon
          className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light'
          aria-hidden='true'        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value = {searchTerm,}
          onChange = {(e,) => setSearchTerm(e.target.value),}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
>>>>>>>         <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
<<<<<<< HEAD

          Type a name or skill to filter results
=======
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
>>>>>>>           Type a name or skill to filter results
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD

import { Input } from "@/components/ui/input",;
=======
}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          Type a name or skill to filter results
        </p>
      </div>
    </div>

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
};
;

>>>>>>> import { Input } from "@/components/ui/input",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {;
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
          aria-describedby="talent-search-help";
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";

        />;
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
