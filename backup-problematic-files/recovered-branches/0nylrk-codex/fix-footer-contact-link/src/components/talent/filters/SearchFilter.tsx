<<<<<<< HEAD
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
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
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
<<<<<<< HEAD
  );
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
