<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
=======
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
xport function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx

  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
=======
<<<<<<< HEAD
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
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
        </p>
      </div>
    </div>
  )
}
=======

        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
        <p id="talent-search-help" className="sr-only">



<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
        <p id='talent-search-help' className='sr-only'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
        <p id="talent-search-help" className="sr-only">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
  )
=======
<<<<<<< HEAD
  )
}
};
;
=======

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx
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
        <Input ;
        <Input;
          id="talent-search";
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) = /> setSearchTerm(e.target.value)}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help";
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
        />;
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx
        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  );
}
  );
}
import { Input } from '@/components / ui / input';
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
        <Input ;
          id="talent - search";
          type="text";
          placeholder="Search talents...";
          value = {search_term, }
          on_change = {(e, ) = /> setSearchTerm (e.target.value), }
          aria - describedby="talent - search - help";
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light";
        />;
        <Input ;
        <Input;
    <div className="mb-6">"
</div>"
      <div className="relative">"
        <label htmlFor="talent-search" className="sr-only">"
</label>
"
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />"

        <Input;"
          id='talent-search
          type='text
          placeholder='Search talents...
          value={searchTerm}



          Type a name or skill to filter results;
        </p>

      </div>
    <div className="mb-6">;"
      <div className="relative">;"
        <label htmlFor="talent-search" className="sr-only">;"
        </label>;"
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;"

          id="talent-search";""
          type="text";""
          placeholder="Search talents...";"
          value={searchTerm})
          onChange={(e) => setSearchTerm(e.target.value)}
        <p id="talent-search-help" className="sr-only">;"
        </p>;
      </div>;
    </div>;"
    <div className='mb - 6'>;
      <div className='relative'>;
        <label html_for='talent - search' className='sr - only'>;
        </label>;
        <SearchIcon;
          className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light';
          aria - hidden='true'        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" aria - hidden="true" />;"

          id="talent - search";""
          value = {search_term, }
          on_change = {(e, ) => setSearchTerm (e.target.value), }

pr-12325
          id='talent - search';
          type='text';
          placeholder='Search talents...';
          value={search_term}
          on_change={e = /> setSearchTerm (e.target.value)}
          aria - describedby='talent - search - help';
          className='pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light';
        />;
        <p id='talent - search - help' className='sr - only'>          Type a name or skill to filter results        <p id="talent - search - help" className="sr - only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>);
}
<<<<<<< HEAD:src-disabled/components/talent/filters/SearchFilter.tsx
;
;
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

        <p id='talent - search - help' className='sr - only'>          Type a name or skill to filter results        <p id="talent - search - help" className="sr - only">;"
    </div>);"
pr-12325
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/filters/SearchFilter.tsx
