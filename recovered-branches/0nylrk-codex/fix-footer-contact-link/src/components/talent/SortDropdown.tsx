
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { SORT_OPTIONS } from &quot;@/data/sortOptions&quot;;
import { SortDesc, ChevronDown } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
=======
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}
=======
import React from "react";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {_sortOption: string;
  setSortOption: (_option: string) => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function SortDropdown(_{_sortOption, _setSortOption}: SortDropdownProps) {_return (
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
        {_SORT_OPTIONS.map(_(option) => (_<DropdownMenuItem
            key={option.value}
<<<<<<< HEAD
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? &quot;bg-zion-purple/20 text-zion-purple&quot; : ""
            }`}
=======
            onClick={_() => setSortOption(option.value)}
            className={_`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
