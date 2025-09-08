import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,

<<<<<<< HEAD

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;

=======
} from '@/components / ui / dropdown - menu';
;
interface SortDropdownProps {
  // TODO: Implement
  sortOption: string;,
  setSortOption: (option: string) => void;
pr-12325


}
}
}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {


export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />

<<<<<<< HEAD



=======
            {SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label ||
              "Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
;

            key={option.value}

              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""

            }`}


  )
}
}
;
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""

  );


}
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
