<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from 'lucide-react'
<<<<<<< HEAD
=======
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
interface SortDropdownProps {
  sortOption: string
  setSortOption: (option: string) => void
  sortOption: string
  setSortOption: (option: string,) => void
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import {
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

interface SortDropdownProps {
<<<<<<< HEAD
  sortOption: string;
=======
  sortOption: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  setSortOption: (option: string) => void
}
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { SORT_OPTIONS } from '@/data/sortOptions';
import { SortDesc, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |
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
                : ''            }`}        {SORT_OPTIONS.map((option,) => (
          <DropdownMenuItem
            key = {option.value,}
            onClick = {(,) => setSortOption(option.value),}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |"Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (
=======
        {SORT_OPTIONS.map(option => (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
=======
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
