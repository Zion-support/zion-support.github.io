import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Sliders } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function MobileFilterBar({
  searchTerm,
  setSearchTerm,
  setIsMobileFilterOpen,
}: MobileFilterBarProps) {
  return (

      >
        <Sliders className='h-4 w-4' />
        Filter Talents
      </Button>

      <div className='relative mt-4'>
        <label htmlFor='mobile-talent-search' className='sr-only'>
          Search talents
        </label>
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />
        <Input

        />
        <p id='mobile-talent-search-help' className='sr-only'>
          Search by name or skill
        </p>
      </div>
    </div>
  );