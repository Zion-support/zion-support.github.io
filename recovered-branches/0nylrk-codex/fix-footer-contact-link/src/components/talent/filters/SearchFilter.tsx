<<<<<<< HEAD
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react",
import { SearchFilterProps } from "@/types/filters",
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
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
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
=======
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  );
  );
}

}

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

  )

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  )

  ),;}
 export function SearchFilter ({
  searchTerm, setSearchTerm 
}: SearchFilterProps) {
  return (<div className="mb-6" > <div className="relative" > <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> text"placeholder=" Search talents..." value= {
  searchTerm 
}/> </div> </div>) 
}
);
}
}
;

}
;

  )

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
