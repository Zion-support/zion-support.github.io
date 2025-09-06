


<<<<<<< HEAD
import React from "react",
import { Drawer } from "@/components/ui/drawer";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
import { Drawer } from "@/components/ui/drawer",
import { FilterSidebar } from "@/components/talent/FilterSidebar",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface MobileFilterDrawerProps {

  isMobileFilterOpen: boolean
  setIsMobileFilterOpen: (isOpen: boolean) => void

  filterProps: any, // We'll pass all filter-related props through this object
}
export function MobileFilterDrawer({
  isMobileFilterOpen;



export function MobileFilterDrawer({ ;
  isMobileFilterOpen;
export function MobileFilterDrawer({ 
  isMobileFilterOpen,
  setIsMobileFilterOpen, 
  filterProps
}: MobileFilterDrawerProps) {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">
        <FilterSidebar
        <FilterSidebar 


<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />
      </div>
    </Drawer>
  )
}


