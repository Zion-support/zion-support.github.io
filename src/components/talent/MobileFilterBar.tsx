<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { Search, Sliders } from 'lucide-react'
import { Input } from '@/components/ui/input'

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>
      <Button
        onClick={() => setIsMobileFilterOpen(true)}
<<<<<<< HEAD
        variant='outline'
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >
        <Sliders className='h-4 w-4' />
        Filter Talents
      </Button>
      <div className='relative mt-4'>
        <label htmlFor='mobile-talent-search' className='sr-only'>
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
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
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Sliders } from 'lucide-react';
import { Input } from '@/components/ui/input';
interface MobileFilterBarProps {;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
export function MobileFilterBar(): any ({;
  searchTerm,;
  setSearchTerm,;
  setIsMobileFilterOpen,;
}: MobileFilterBarProps) {;
  return (
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>;
      <Button
        onClick={() => setIsMobileFilterOpen(true)}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Search talents
        </label>
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
<<<<<<< HEAD
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Search by name or skill
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='mobile-talent-search-help';
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />;
        <p id='mobile-talent-search-help' className='sr-only'>;


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Search by name or skill;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
