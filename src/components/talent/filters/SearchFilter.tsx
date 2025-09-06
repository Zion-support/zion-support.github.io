<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
=======
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types/filters';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className='mb-6'>
      <div className='relative'>
        <label htmlFor='talent-search' className='sr-only'>
          Search talents
        </label>
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
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">
=======
        <p id='talent-search-help' className='sr-only'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
