
import React from "react";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {_sortOption: string;
  setSortOption: (_option: string) => void;}

export function SortDropdown(_{_sortOption, _setSortOption}: SortDropdownProps) {_return (
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
        {_SORT_OPTIONS.map(_(option) => (_<DropdownMenuItem
            key={option.value}
            onClick={_() => setSortOption(option.value)}
            className={_`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""}`}
          >
            {_option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
