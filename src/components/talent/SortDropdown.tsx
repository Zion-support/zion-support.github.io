<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { Button } from '@/components/ui/button';
import { SORT_OPTIONS } from '@/data/sortOptions';
import { SortDesc, ChevronDown } from 'lucide-react';
<<<<<<< HEAD
=======
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';

interface SortDropdownProps {
<<<<<<< HEAD
  sortOption: string;
  setSortOption: (option: string) => void;
=======
<<<<<<< HEAD
  sortOption: string;
  setSortOption: (option: string) => void;
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from 'lucide-react'
import {
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  sortOption: string,
  setSortOption: (option: string) => void
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
=======
        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label ||
              'Sort by'}
          </div>
          <ChevronDown className='h-4 w-4 ml-2 opacity-50' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        className='w-[200px] bg-zion-blue-dark border-zion-blue-light'
      >
<<<<<<< HEAD
        {SORT_OPTIONS.map(option => (          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''            }`}
=======
<<<<<<< HEAD
        {SORT_OPTIONS.map(option => (
=======
        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        {SORT_OPTIONS.map((option) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
<<<<<<< HEAD
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''
=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }`}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
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
