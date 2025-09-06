<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
<<<<<<< HEAD
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
;
interface SortDropdownProps {
  sort_option: string;
  setSortOption: (option: string) => void;
}
export /**
 * SortDropdown - Function description
 */
function SortDropdown() {
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger as_child>;
        <Button;
          variant="outline";
          className="w - full justify - between border - zion - blue - light text - white";
        >;
          <div className="flex items - center gap - 2">;
            <SortDesc className="h - 4 w - 4 text - zion - purple" />;
            {SORT_OPTIONS.find ((opt) => opt.value === sort_option)?.label ||;

              "Sort by"}
          </div>;
          <ChevronDown className="h - 4 w - 4 ml - 2 opacity - 50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg - zion - blue - dark border - zion - blue - light";
      >;
        {SORT_OPTIONS.map ((option) => (
          <DropdownMenuItem;
            key={option.value}

interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white">;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
            {SORT_OPTIONS && SORT_OPTIONS.find(opt => opt && opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
=======
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
<<<<<<< HEAD
            key={option && option.value}
            onClick={() => setSortOption(option && option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value ? "bg-zion-purple/20 text-zion-purple" : "";

            }`}
          >;
            {option && option.label}
          </DropdownMenuItem>;
        ))}

      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}

=======
            on_click={() => setSortOption (option.value)}
            className={`text - white hover:bg - zion - blue - light / 30 cursor - pointer ${
              sort_option === option.value;
                ? "bg - zion - purple / 20 text - zion - purple";
                : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>))}
      </DropdownMenuContent>;
    </DropdownMenu>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
<<<<<<< HEAD

              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""

  );


}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
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
  );


}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
