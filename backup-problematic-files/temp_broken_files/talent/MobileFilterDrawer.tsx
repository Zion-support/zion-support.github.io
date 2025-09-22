
=======
import React from "react",;
import { Drawer } from "@/components/ui/drawer",;
import { FilterSidebar } from "@/components/talent/FilterSidebar",;
;
interface MobileFilterDrawerProps {;
  isMobileFilterOpen:boolean,;
  setIsMobileFilterOpen:(isOpen:boolean) => void,;
  filterProps:any, // We'll pass all filter-related props through this object;
}
;
export function MobileFilterDrawer({ ;
  isMobileFilterOpen,;
  setIsMobileFilterOpen, ;
  filterProps;
} MobileFilterDrawerProps) {;
  return (;
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">;
        <FilterSidebar ;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />;
      </div>;
    </Drawer>;
<<<<<<< HEAD
