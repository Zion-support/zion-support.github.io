
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Drawer } from "@/components/ui/drawer",
import { FilterSidebar } from "@/components/talent/FilterSidebar",
=======
import React from &quot;react&quot;;
import { Drawer } from &quot;@/components/ui/drawer&quot;;
import { FilterSidebar } from &quot;@/components/talent/FilterSidebar&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MobileFilterDrawerProps {
  isMobileFilterOpen: boolean,
  setIsMobileFilterOpen: (isOpen: boolean) => void,
  filterProps: any, // We'll pass all filter-related props through this object
}

export function MobileFilterDrawer({ 
  isMobileFilterOpen,
  setIsMobileFilterOpen, 
  filterProps
}: MobileFilterDrawerProps) {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <div className=&quot;p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto&quot;>
=======
import React from "react";

interface MobileFilterDrawerProps {_isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (_isOpen: boolean) => void;
  filterProps: unknown; // We'll pass all filter-related props through this object}

export function MobileFilterDrawer(_{_isMobileFilterOpen, _setIsMobileFilterOpen, _filterProps}: MobileFilterDrawerProps) {_return (
    <Drawer open={isMobileFilterOpen} onOpenChange={_setIsMobileFilterOpen}>
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <FilterSidebar 
          {_...filterProps}
          isMobileFilterOpen={_isMobileFilterOpen}
        />
      </div>
    </Drawer>
  )
}
