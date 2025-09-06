<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx


<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import {

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void

import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
<<<<<<< HEAD
} from '@/components / ui / dropdown - menu';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
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
      <DropdownMenuContent
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light">;
        {SORT_OPTIONS && SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem
            key={option && option.value}
            onClick={() => setSortOption(option && option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option && option.value ? "bg-zion-purple/20 text-zion-purple" : "";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
            }`}
          >;
            {option && option.label}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </DropdownMenuItem>;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
      </DropdownMenuContent>;
    </DropdownMenu>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
          variant="outline"
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
{SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label |
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  );
<<<<<<< HEAD

}
;

=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""

  );


}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/SortDropdown.tsx
=======
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
