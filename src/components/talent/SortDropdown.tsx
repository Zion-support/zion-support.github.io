<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import React from 'react'
import { Button } from '@/components/ui/button'
import { SORT_OPTIONS } from '@/data/sortOptions'
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
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";

import {
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}

import {
  DropdownMenu;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

<<<<<<< HEAD
interface SortDropdownProps {
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  sortOption: string

  setSortOption: (option: string) => void
}
<<<<<<< HEAD
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |
              'Sort by'}
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
        {SORT_OPTIONS.map(option => (          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''            }`}        {SORT_OPTIONS.map((option,) => (
        {SORT_OPTIONS.map((option) => (
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |"Sort by"}
=======



export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}

            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;


              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option && option.label}
          </DropdownMenuItem>;
        ))}

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
<<<<<<< HEAD
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
=======


              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
<<<<<<< HEAD
      </DropdownMenuContent>
    </DropdownMenu>;
  );
};
}
}
}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
<<<<<<< HEAD
=======

  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
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
ursor/fix-website-loading-errors-and-merge-6662
;
            onClick={() => setSortOption(option.value)}
=======
            onClick={() => setSortOption(option.value)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
