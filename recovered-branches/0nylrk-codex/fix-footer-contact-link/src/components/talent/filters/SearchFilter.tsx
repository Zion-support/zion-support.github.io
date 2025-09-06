
<<<<<<< HEAD
import { Input } from "@/components/ui/input",
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
=======
import { SearchIcon } from "lucide-react",
import { SearchFilterProps } from "@/types/filters",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}
=======
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
