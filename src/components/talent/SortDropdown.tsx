
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
;
interface SortDropdownProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
}
;
export function SortDropdown({ sortOption, setSortOption } SortDropdownProps) {;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button ;
          variant="outline" ;
          className="w-full justify-between border-zion-blue-light text-white";
        >;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent ;
        align="start" ;
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" :"";
            }`}
          >;
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { SORTOPTIONS } from "@/data/sortOptions",import { SortDesc, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}
import React from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {sortOption: string,
  setSortOption: (option: string) => void}

export function SortDropdown(_{sortOption, setSortOption}: SortDropdownProps) {return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button,
variant=&quot;outline&quot; 
          className=&quot;w-full justify-between border-zion-blue-light text-white&quot;
        >
          <div className=&quot;flex items-center gap-2&quot;>
            <SortDesc className=&quot;h-4 w-4 text-zion-purple&quot; />
            {SORTOPTIONS.find(opt => opt.value === sortOption)?.label || &quot;Sort by&quot}
          </div>
          <ChevronDown className=&quot;h-4 w-4 ml-2 opacity-50&quot; />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent,
align=&quot;start&quot; 
        className=&quot;w-[200px] bg-zion-blue-dark border-zion-blue-light&quot;
      >
        {SORT_OPTIONS.map(_(option) => (_<DropdownMenuItem,
key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? &quot;bg-zion-purple/20 text-zion-purple&quot; : ""
            }`}          >
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            {option.label}
          </DropdownMenuItem>;
        ))}
<<<<<<< HEAD
      </DropdownMenuContent>;
    </DropdownMenu>;
  ),;
=======
      </DropdownMenuContent>
    </DropdownMenu>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
