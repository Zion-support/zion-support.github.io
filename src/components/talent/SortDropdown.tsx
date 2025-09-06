
<<<<<<< HEAD
=======
import React from "react",
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import React from 'react'
import { Button } from '@/components/ui/button'
import { SORT_OPTIONS } from '@/data/sortOptions'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import {
>>>>>>>   DropdownMenu;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

interface SortDropdownProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'

=======
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  sortOption: string

  setSortOption: (option: string) => void
}
<<<<<<< HEAD



export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"

        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}

          </div>
=======
=======
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <Button
          variant='outline'
          className='w-full justify-between border-zion-blue-light text-white'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        >
          <div className='flex items-center gap-2'>
            <SortDesc className='h-4 w-4 text-zion-purple' />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |
              'Sort by'}
<<<<<<< HEAD
<<<<<<< HEAD
        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"
>>>>>>>         >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
>>>>>>>           </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button 
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${

              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {SORT_OPTIONS.map(option => (          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''            }`}        {SORT_OPTIONS.map((option,) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? 'bg-zion-purple/20 text-zion-purple'
                : ''        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${


>>>>>>>               sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>             {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;


              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>             }`}
          >;
            {option && option.label}
          </DropdownMenuItem>;
        ))}

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
<<<<<<< HEAD

  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
