<<<<<<< HEAD
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types/filters';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from "@/types/filters";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className='mb-6'>
      <div className='relative'>
        <label htmlFor='talent-search' className='sr-only'>
          Search talents
        </label>
<<<<<<< HEAD
        <SearchIcon
          className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light'
          aria-hidden='true'
=======
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value = {searchTerm,}
          onChange = {(e,) => setSearchTerm(e.target.value),}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        />
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results
=======
        <p id="talent-search-help" className="sr-only">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Type a name or skill to filter results
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </p>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
