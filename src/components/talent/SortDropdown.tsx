<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from 'lucide-react'

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

import {
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { SORT_OPTIONS } from '@/data/sortOptions';
import { SortDesc, ChevronDown } from 'lucide-react';
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';

interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
  sortOption: string,;
  setSortOption: (option: string,) => void;
}
import {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

<<<<<<< HEAD
interface SortDropdownProps {

  sortOption: string

  setSortOption: (option: string) => void
}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
=======
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant='outline'
<<<<<<< HEAD
          className='w-full justify-between border-zion-blue-light text-white'
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |
=======
          className='w-full justify-between border-zion-blue-light text-white'>;
          <div className='flex items-center gap-2'>;
            <SortDesc className='h-4 w-4 text-zion-purple' />;
            {SORT_OPTIONS && SORT_OPTIONS.find(opt => opt && opt.value === sortOption)?.label ||;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              'Sort by'}
          </div>;
          <ChevronDown className='h-4 w-4 ml-2 opacity-50' />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent
        align='start'
        className='w-[200px] bg-zion-blue-dark border-zion-blue-light'>;
        {SORT_OPTIONS && SORT_OPTIONS.map(option => (          <DropdownMenuItem
            key={option && option.value}
            onClick={() => setSortOption(option && option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value;
                ? 'bg-zion-purple/20 text-zion-purple';
                : ''            }`}        {SORT_OPTIONS && SORT_OPTIONS.map((option,) => (;
          <DropdownMenuItem
<<<<<<< HEAD
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
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
=======
            key = {option && option.value,}
            onClick = {(,) => setSortOption(option && option.value),}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value;
                ? 'bg-zion-purple/20 text-zion-purple';
                : ''        >;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
            {SORT_OPTIONS && SORT_OPTIONS.find(opt => opt && opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light">;
        {SORT_OPTIONS && SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem
            key={option && option.value}
            onClick={() => setSortOption(option && option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }`}
          >;
            {option && option.label}
          </DropdownMenuItem>;
        ))}
<<<<<<< HEAD
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
=======
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
