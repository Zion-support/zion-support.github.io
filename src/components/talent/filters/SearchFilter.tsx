<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types/filters';

<<<<<<< HEAD
=======
=======
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className='mb-6'>
      <div className='relative'>
        <label htmlFor='talent-search' className='sr-only'>
          Search talents
        </label>
        <SearchIcon
          className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light'
          aria-hidden='true'
        />
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>
=======
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only" htmlFor="input-
          Search talents
        ">
          Search talents
        </label>
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results
=======
        <p id="talent-search-help" className="sr-only">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <p id="talent-search-help" className="sr-only">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Type a name or skill to filter results
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
