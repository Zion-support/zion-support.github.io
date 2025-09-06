<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx

<<<<<<< HEAD
<<<<<<< HEAD

import { Input } from "@/components/ui/input",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
=======
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";

=======
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
import { SearchIcon } from "lucide-react",
import { SearchFilterProps } from "@/types/filters",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className="mb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
  );
}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Input } from "@/components/ui/input",;
import { SearchIcon } from "lucide-react",;
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input;
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
=======

          onChange={(e) => setSearchTerm(e && e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          onChange={(e) => setSearchTerm(e && e.target.value)}
=======

import { Input } from "@/components/ui/input",;
import { SearchIcon } from "lucide-react",;
import { SearchFilterProps } from "@/types/filters",;
;
export function SearchFilter({ searchTerm, setSearchTerm } SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input;
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
;
<<<<<<< HEAD

=======
}

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
import { Input  } from '@/components / ui / input';
import { SearchIcon  } from './lucide-react';
import { SearchFilterProps  } from '@/types / filters';
export /**
 * SearchFilter - Function description
 */
function SearchFilter() {
  return (
    <div className="mb - 6">;
      <div className="relative">;
        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;
        <Input;
          type="text";
          placeholder="Search talents...";
          value={search_term}
          on_change={(e) => setSearchTerm (e.target.value)}
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light";
        />;
      </div>;
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 export function SearchFilter ({
  searchTerm, setSearchTerm 
}: SearchFilterProps) {
  return (<div className="mb-6" > <div className="relative" > <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> text"placeholder=" Search talents..." value= {
  searchTerm 
}/> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SearchFilter.tsx
=======
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
