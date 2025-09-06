<<<<<<< HEAD


export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {


=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
=======
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from '@/types/filters'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>

        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
=======
        <p id="talent-search-help" className="sr-only">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

};
;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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

        />;
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
