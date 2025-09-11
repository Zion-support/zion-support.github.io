


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MobileFilterBarProps {

  searchTerm: string
  setSearchTerm: (value: string) => void

  setIsMobileFilterOpen: (isOpen: boolean) => void
}




  setSearchTerm
  setIsMobileFilterOpen
=======
export function MobileFilterBar({
  searchTerm;


export function MobileFilterBar({ ;
  searchTerm;
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen =======}: MobileFilterBarProps) {
  return (
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">
      <Button
        onClick={() => setIsMobileFilterOpen(true)}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light"
      >
        <Sliders className="h-4 w-4" />
        Filter Talents
      </Button>
      <div className="relative mt-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />
      </div>
    </div>
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}import React from "react",;
import { Button } from "@/components/ui/button",;
import { Search, Sliders } from "lucide-react",;
import { Input } from "@/components/ui/input",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface MobileFilterBarProps {;
  searchTerm: string,;
  setSearchTerm: (value: string) => void,;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

      <div className="relative mt-4">;
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />;
        <Input
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e && e.target.value)}
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate";
        />;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
import React from './react';
import { Button } from '@/components / ui / button';
import { Search, Sliders } from './lucide-react';
import { Input } from '@/components / ui / input';
interface MobileFilterBarProps {
  search_term: string,
  setSearchTerm: (value: string) => void,
  setIsMobileFilterOpen: (is_open: boolean) => void;
}
export /**
 * MobileFilterBar - Function description
 */
function MobileFilterBar() {
  return (
    <div className="lg:hidden mb - 4 sticky top - 0 z - 20 bg - zion - blue pt - 2 pb - 4">;
      <Button;
        on_click={() => setIsMobileFilterOpen (true)}
        variant="outline";
        className="w - full flex items - center justify - center gap - 2 border - zion - blue - light text - zion - slate - light";
      >;
        <Sliders className="h - 4 w - 4" />;
        Filter Talents;
      </Button>;
      <div className="relative mt - 4">;
        <Search className="absolute left - 2 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate" />;
        <Input;
          placeholder="Search talents...";
          value={search_term}
          on_change={e => setSearchTerm (e.target.value)}
          className="pl - 8 bg - zion - blue border - zion - blue - light text - white placeholder: text - zion - slate";
        />;
      </div>;
    </div>);
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662