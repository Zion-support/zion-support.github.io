<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {SortDesc, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
>>>>>>> main
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
>>>>>>> main

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}
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
            {SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label ||
              "Sort by"}
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
<<<<<<< HEAD
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
<<<<<<< HEAD
=======
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
>>>>>>> main
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
  )
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
=======
  );
>>>>>>> main
}
;
  ),;}
 import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
interface SortDropdownProps {
  sortOption: string;
setSortOption: (option: string) => void 
}sortOption, setSortOption 
}: SortDropdownProps) {
  return (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="outline" className="w-full justify-between border-zion-blue-light text-white" > <div className="flex items-center gap-2" > <SortDesc className="h-4 w-4 text-zion-purple" /> {
  SORT OPTIONS.find (opt => opt.value === sortOption) ?.label || "Sort by" 
}</div> <ChevronDown className="h-4 w-4 ml-2 opacity-50" /> </Button> </DropdownMenuTrigger> <DropdownMenuContent align="start" className="w-[200px] bg-zion-blue-dark border-zion-blue-light" > {
  SORT OPTIONS.map ( (option) => (<DropdownMenuItem key= {
  option.value 
}> {
  option.label 
}</DropdownMenuItem>) ) 
}</DropdownMenuContent> </DropdownMenu>) 
}
}
}
;

  );
}
}
;
