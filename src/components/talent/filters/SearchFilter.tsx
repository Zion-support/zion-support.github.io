<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
xport function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
=======
  return (
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
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {


=======
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}



          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
        </p>
      </div>
    </div>
  )
}
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}



        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
        <p id="talent-search-help" className="sr-only">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD
  )
}
};
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

};
;
import { Input } from "@/components/ui/input",;
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        />;
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
