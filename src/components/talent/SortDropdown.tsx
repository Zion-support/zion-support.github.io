
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { SORT_OPTIONS } from &quot;@/data/sortOptions&quot;;
import { SortDesc, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant=&quot;outline&quot; 
          className=&quot;w-full justify-between border-zion-blue-light text-white&quot;
        >
          <div className=&quot;flex items-center gap-2&quot;>
            <SortDesc className=&quot;h-4 w-4 text-zion-purple&quot; />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || &quot;Sort by&quot;}
          </div>
          <ChevronDown className=&quot;h-4 w-4 ml-2 opacity-50&quot; />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align=&quot;start&quot; 
        className=&quot;w-[200px] bg-zion-blue-dark border-zion-blue-light&quot;
      >
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? &quot;bg-zion-purple/20 text-zion-purple&quot; : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
