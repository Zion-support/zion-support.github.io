<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Search, Sliders } from 'lucide-react'
import { Input } from '@/components/ui/input'

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Input } from "@/components/ui/input";
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
export function MobileFilterBar({
  searchTerm
  setSearchTerm
  setIsMobileFilterOpen

}: MobileFilterBarProps) {
  return (
export function MobileFilterBar({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

export function MobileFilterBar({ 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>
      <Button
        onClick={() => setIsMobileFilterOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD



          Search talents
        </label>
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant='outline'
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >
        <Sliders className='h-4 w-4' />
        Filter Talents
      </Button>
      <div className='relative mt-4'>
        <label htmlFor='mobile-talent-search' className='sr-only'>
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">
      <Button 
        onClick={() => setIsMobileFilterOpen(true)} 
        variant="outline"
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light"
      >
        <Sliders className="h-4 w-4" />
        Filter Talents
      </Button>
      
      <div className="relative mt-4">
        <label htmlFor="mobile-talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />
        variant='outline';
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >;
        <Sliders className='h-4 w-4' />;
        Filter Talents;
      </Button>;

      <div className='relative mt-4'>;
        <label htmlFor='mobile-talent-search' className='sr-only'>;
          Search talents;
        </label>;
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />;
        <Input
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          id="mobile-talent-search"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          id='mobile-talent-search'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='mobile-talent-search-help'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />
        <p id='mobile-talent-search-help' className='sr-only'>
=======
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          Search by name or skill
        </p>
      </div>
    </div>;
  );
};
}

          id="mobile-talent-search"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby="mobile-talent-search-help"
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />
        <p id="mobile-talent-search-help" className="sr-only">
          Search by name or skill
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD
}
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='mobile-talent-search-help';
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />;
        <p id='mobile-talent-search-help' className='sr-only'>;


import React from "react",;
import { Button } from "@/components/ui/button",;
import { Search, Sliders } from 'lucide-react';
import { Input } from "@/components/ui/input",;
interface MobileFilterBarProps {;
  searchTerm: string,;
  setSearchTerm: (value: string) => void,;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}
;
export function MobileFilterBar({;
  searchTerm;
  setSearchTerm;
  setIsMobileFilterOpen;
}: MobileFilterBarProps) {;
  return (;
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">;
      <Button;
        onClick={() => setIsMobileFilterOpen(true)} ;
        variant="outline";
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light";
      >;
        <Sliders className="h-4 w-4" />;
        Filter Talents;
      </Button>;
      <div className="relative mt-4">;
        <label htmlFor="mobile-talent-search" className="sr-only">;
          Search talents;
        </label>;
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />;
        <Input;
          id="mobile-talent-search";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby="mobile-talent-search-help";
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate";
        />;
        <p id="mobile-talent-search-help" className="sr-only">;
          Search by name or skill;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
;


import React from 'react';
import { Button } from '@/components / ui / button';
import { Search, Sliders } from 'lucide-react';
import { Input } from '@/components / ui / input';
interface MobileFilterBarProps {
  search_term: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (is_open: boolean) => void;
export /**
 * MobileFilterBar - Function description
 */
function MobileFilterBar() {
  return (
    <div className='lg:hidden mb - 4 sticky top - 0 z - 20 bg - zion - blue pt - 2 pb - 4'>;
      <Button;
        on_click={() => setIsMobileFilterOpen (true)}
        variant='outline';
        className='w - full flex items - center justify - center gap - 2 border - zion - blue - light text - zion - slate - light'      >;
        <Sliders className='h - 4 w - 4' />;
        Filter Talents;
      </Button>;
      <div className='relative mt - 4'>;
        <label html_for='mobile - talent - search' className='sr - only'>;
          Search talents;
        </label>;
        <Search className='absolute left - 2 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate' />;
        <Input;
          id='mobile - talent - search';
          placeholder='Search talents...';
          value={search_term}
          on_change={e => setSearchTerm (e.target.value)}
          aria - describedby='mobile - talent - search - help';
          className='pl - 8 bg - zion - blue border - zion - blue - light text - white placeholder:text - zion - slate'        />;
        <p id='mobile - talent - search - help' className='sr - only'>;
          Search by name or skill;
        </p>;
      </div>;
    </div>);
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
