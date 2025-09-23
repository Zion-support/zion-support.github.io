
import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
<<<<<<< HEAD
import { SortDescChevronDown } from "lucide-react";
=======
import { SortDesc, ChevronDown } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
=======
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
>>>>>>> origin/auto/autonomy-17186719616

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
<<<<<<< HEAD
=======
  );
>>>>>>> main
}

export function SortDropdown({ sortOptionsetSortOption }: SortDropdownProps) {
=======
}

export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
