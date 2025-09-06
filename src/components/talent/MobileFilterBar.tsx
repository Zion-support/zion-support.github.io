
import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
<<<<<<< HEAD
<<<<<<< HEAD
}

export function MobileFilterBar({ 
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
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
<<<<<<< HEAD
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
  return (
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>;
      <Button
        onClick={() => setIsMobileFilterOpen(true)}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          Search talents
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
<<<<<<< HEAD
<<<<<<< HEAD
          id='mobile-talent-search'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='mobile-talent-search-help'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />
        <p id='mobile-talent-search-help' className='sr-only'>
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          Search by name or skill
        </p>
      </div>
    </div>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          Search by name or skill
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='mobile-talent-search-help';
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />;
        <p id='mobile-talent-search-help' className='sr-only'>;


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD


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
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
