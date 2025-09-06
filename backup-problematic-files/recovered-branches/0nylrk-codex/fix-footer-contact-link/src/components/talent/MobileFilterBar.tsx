
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Search, Sliders } from "lucide-react",;
import { Input } from "@/components/ui/input",;
;
interface MobileFilterBarProps {;
  searchTerm:string,;
  setSearchTerm:(value:string) => void,;
  setIsMobileFilterOpen:(isOpen:boolean) => void;
}
;
export function MobileFilterBar({ ;
  searchTerm,;
  setSearchTerm, ;
  setIsMobileFilterOpen ;
} MobileFilterBarProps) {;
  return (;
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">;
      <Button ;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        onClick={() => setIsMobileFilterOpen(true)} ;
        variant="outline";
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light";
      >;
        <Sliders className="h-4 w-4" />;
        Filter Talents;
      </Button>;
<<<<<<< HEAD

