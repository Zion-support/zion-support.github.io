<<<<<<< HEAD

import React from "react",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { SORT_OPTIONS } from '@/data/sortOptions'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import {
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

interface SortDropdownProps {
=======
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
<<<<<<< HEAD
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |
              'Sort by'}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >

        {SORT_OPTIONS.map((option) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
<<<<<<< HEAD
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
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button;
          variant="outline";
          className="w-full justify-between border-zion-blue-light text-white";
        >;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;


=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
interface SortDropdownProps {
  sort_option: string,
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
          variant='outline';
          className='w - full justify - between border - zion - blue - light text - white';
        >;
          <div className='flex items - center gap - 2'>;
            <SortDesc className='h - 4 w - 4 text - zion - purple' />;
            {SORT_OPTIONS.find (opt => opt.value === sort_option)?.label ||;
              'Sort by'}
          </div>;
          <ChevronDown className='h - 4 w - 4 ml - 2 opacity - 50' />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align='start';
        className='w-[200px] bg - zion - blue - dark border - zion - blue - light';
      >;
        {SORT_OPTIONS.map (option => (          <DropdownMenuItem;
            key={option.value}
            on_click={() => setSortOption (option.value)}
            className={`text - white hover:bg - zion - blue - light / 30 cursor - pointer ${
              sort_option === option.value;
                ? 'bg - zion - purple / 20 text - zion - purple';
                : ''            }`}        {SORT_OPTIONS.map ((option, ) => (
          <DropdownMenuItem;
            key = {option.value, }
            on_click = {(, ) => setSortOption (option.value), }
            className={`text - white hover:bg - zion - blue - light / 30 cursor - pointer ${
              sort_option === option.value;
                ? 'bg - zion - purple / 20 text - zion - purple';
                : ''        >;
          <div className="flex items - center gap - 2">;
            <SortDesc className="h - 4 w - 4 text - zion - purple" />;
            {SORT_OPTIONS.find (opt => opt.value === sort_option)?.label || "Sort by"}
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
            on_click={() => setSortOption (option.value)}
            className={`text - white hover:bg - zion - blue - light / 30 cursor - pointer ${
              sort_option === option.value ? "bg - zion - purple / 20 text - zion - purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>))}
      </DropdownMenuContent>;
    </DropdownMenu>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>;
  );
};
}
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
