

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'

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
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
