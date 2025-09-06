




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {SearchFilterProps} from "@/types/filters";
export function SearchFilter(): any ({ searchTerm, setSearchTerm }: SearchFilterProps) {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="mb-6">;
      <div className="relative">;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}


          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
      </div>;
    </div>;
  );





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
