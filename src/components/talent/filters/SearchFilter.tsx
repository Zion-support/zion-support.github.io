<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from '@/types/filters'
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
=======
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className="mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <Input
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
        <Input
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
        <p id="talent-search-help" className="sr-only">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
<<<<<<< HEAD
};
;

>>>>>>> import { Input } from "@/components/ui/input",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
}
};
;
=======

};
;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Input } from "@/components/ui/input",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  );
}

import { Input } from '@/components / ui / input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types / filters';
  return (
    <div className='mb - 6'>;
      <div className='relative'>;
        <label html_for='talent - search' className='sr - only'>;
          Search talents;
        </label>;
        <SearchIcon;
          className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light';
          aria - hidden='true'        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" aria - hidden="true" />;
        <Input;
          id="talent - search";
          type="text";
          placeholder="Search talents...";
          value = {search_term, }
          on_change = {(e, ) => setSearchTerm (e.target.value), }
          aria - describedby="talent - search - help";
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light";
        />;
        <Input;
          id='talent - search';
          type='text';
          placeholder='Search talents...';
          value={search_term}
          on_change={e => setSearchTerm (e.target.value)}
          aria - describedby='talent - search - help';
          className='pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light';
        />;
        <p id='talent - search - help' className='sr - only'>          Type a name or skill to filter results        <p id="talent - search - help" className="sr - only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
