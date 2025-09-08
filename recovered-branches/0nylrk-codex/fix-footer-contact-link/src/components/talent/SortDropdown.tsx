
import { SortDesc, ChevronDown  } from './lucide-react';



import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';



import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,


export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button


          variant="outline"
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />




              "Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>


      <DropdownMenuContent
        align="start"

        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}




