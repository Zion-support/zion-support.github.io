<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";

import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;
import { Input } from "@/components/ui/input",;
import { SearchIcon } from "lucide-react",;
import { SearchFilterProps } from "@/types/filters",;
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="mb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react",
import { SearchFilterProps } from "@/types/filters",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
=======
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={(e) => setSearchTerm(e.target.value)}
=======

        <Input"
          type="text""
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
)
<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}

  );

}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { Input  } from '@/components / ui / input';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;  );
}import { Input  } from '@/components / ui / input';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
  );
}

  );
}

}

import { Input  } from '@/components / ui / input';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { SearchIcon  } from './lucide-react';
=======

import { Input  } from '@/components / ui / input';'
import { SearchIcon  } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SearchFilterProps  } from '@/types / filters';
export /**;
 * SearchFilter - Function description;
 */
function SearchFilter() {
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate-light" />;
        <Input;
          type="text";
          placeholder="Search talents...";
          value={search_term}
          on_change={(e) => setSearchTerm (e.target.value)}
<<<<<<< HEAD
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate-light";
=======
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate-light";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        />;
      </div>;
    </div>);
}

  )

  ),;}
 export function SearchFilter() { return null; }
  return (<div className="mb-6" > <div className="relative" > <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> text"placeholder=" Search talents..." value= {}
  searchTerm;
}/> </div> </div>) 
}
);
}
}
;

}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  )

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  )

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
