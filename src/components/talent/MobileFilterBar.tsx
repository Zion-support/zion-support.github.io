<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { Search, Sliders } from 'lucide-react'
import { Input } from '@/components/ui/input'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
=======
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
<<<<<<< HEAD



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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
=======
<<<<<<< HEAD
export function MobileFilterBar({
=======
}

export function MobileFilterBar({ 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>
      <Button
        onClick={() => setIsMobileFilterOpen(true)}
        variant='outline'
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >
        <Sliders className='h-4 w-4' />
        Filter Talents
      </Button>
      <div className='relative mt-4'>
        <label htmlFor='mobile-talent-search' className='sr-only'>
=======
<<<<<<< HEAD
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Search talents
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
<<<<<<< HEAD
          id='mobile-talent-search'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='mobile-talent-search-help'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />
        <p id='mobile-talent-search-help' className='sr-only'>
<<<<<<< HEAD
=======
          Search by name or skill
        </p>
      </div>
    </div>;
  );
};
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          id="mobile-talent-search"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby="mobile-talent-search-help"
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />
        <p id="mobile-talent-search-help" className="sr-only">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Search by name or skill
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
