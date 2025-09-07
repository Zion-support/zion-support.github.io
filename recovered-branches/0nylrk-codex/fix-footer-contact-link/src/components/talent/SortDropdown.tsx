<<<<<<< HEAD
=======
import { SortDesc, ChevronDown  } from './lucide-react';

<<<<<<< HEAD
import {
=======



<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import React from "react";
import {Button} from "@/components/ui/button";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {SortDesc, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
<<<<<<< HEAD
import {

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
=======
import {

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
>>>>>>> merged-prs-20250907-203621

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void
<<<<<<< HEAD
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

interface SortDropdownProps {
  sortOption: string,
  setSortOption: (option: string) => void
}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';
<<<<<<< HEAD

import React from "react";
import {Button} from "@/components/ui/button";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {SortDesc, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
<<<<<<< HEAD

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

import React from "react";""
import { Button } from "@/components/ui/button";""
import { SORT_OPTIONS } from "@/data/sortOptions";""
import { SortDesc, ChevronDown } from "lucide-react";"

import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,
  DropdownMenuTrigger,"
} from "@/components/ui/dropdown-menu";""
import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';
import {Button} from "@/components/ui/button";""
import {SORT_OPTIONS} from "@/data/sortOptions";""
import {SortDesc, ChevronDown} from "lucide-react";""
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";"
  // TODO: Implement
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from '@/components / ui / dropdown - menu';
;
interface SortDropdownProps {
  // TODO: Implement
  sortOption: string;,
  setSortOption: (option: string) => void;
pr-12325

<<<<<<< HEAD
}
}
}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
>>>>>>> merged-prs-20250907-203621
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          variant="outline" 
          className="w-full justify-between border-zion-blue-light text-white">;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
            {SORT_OPTIONS && SORT_OPTIONS.find(opt => opt && opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light">;
        {SORT_OPTIONS && SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem
            key={option && option.value}
            onClick={() => setSortOption(option && option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option && option.label}

import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
;
interface SortDropdownProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
}
;
export function SortDropdown({ sortOption, setSortOption } SortDropdownProps) {;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button ;
          variant="outline" ;
          className="w-full justify-between border-zion-blue-light text-white";
        >;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent ;
        align="start" ;
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" :"";
            }`}
          >;            {option.label}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
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
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;

}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          variant="outline"
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
<<<<<<< HEAD
            {SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label |
=======
<<<<<<< HEAD
            {SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label ||
=======
{SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label |
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              "Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
<<<<<<< HEAD
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
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
=======

      <DropdownMenuContent
        align="start"

        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
<<<<<<< HEAD
            onClick={() => setSortOption(option.value)});
}
;

            key={option.value}

              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""

            }`}

          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
<<<<<<< HEAD
    </DropdownMenu>
=======
    </DropdownMenu>"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/chore/fix-lint-and-merge
import { SORT_OPTIONS } from "@/data/sortOptions",;"
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
  );

}
;
=======
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
>>>>>>> merged-prs-20250907-203621
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD
  )
}
}
;
=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
  )
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
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""

  );


}
;
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
