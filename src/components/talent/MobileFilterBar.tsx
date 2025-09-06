<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { Button } from '@/components/ui/button'
import { Search, Sliders } from 'lucide-react'
import { Input } from '@/components/ui/input'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Input } from "@/components/ui/input";
>>>>>>> interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MobileFilterBar({
  searchTerm
  setSearchTerm
  setIsMobileFilterOpen

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
export function MobileFilterBar({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}: MobileFilterBarProps) {
  return (
export function MobileFilterBar({
}

export function MobileFilterBar({ 
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Search talents
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           Search talents
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          id="mobile-talent-search"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          id='mobile-talent-search'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='mobile-talent-search-help'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />
        <p id='mobile-talent-search-help' className='sr-only'>
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          aria-describedby="mobile-talent-search-help"
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />
        <p id="mobile-talent-search-help" className="sr-only">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Search by name or skill
        </p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Search by name or skill;
        </p>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
