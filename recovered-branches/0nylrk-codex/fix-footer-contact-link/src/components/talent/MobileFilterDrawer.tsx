
import React from "react",
<<<<<<< HEAD
import { Drawer } from "@/components/ui/drawer";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
=======
import { Drawer } from "@/components/ui/drawer",
import { FilterSidebar } from "@/components/talent/FilterSidebar",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface MobileFilterDrawerProps {

  isMobileFilterOpen: boolean
  setIsMobileFilterOpen: (isOpen: boolean) => void

  filterProps: any, // We'll pass all filter-related props through this object
}
<<<<<<< HEAD
export function MobileFilterDrawer({
  isMobileFilterOpen;

  setIsMobileFilterOpen

=======

export function MobileFilterDrawer({ 
  isMobileFilterOpen,
  setIsMobileFilterOpen, 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  filterProps
}: MobileFilterDrawerProps) {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">
<<<<<<< HEAD
        <FilterSidebar
=======
        <FilterSidebar 
import React from "react",;
import { Drawer } from "@/components/ui/drawer",;
import { FilterSidebar } from "@/components/talent/FilterSidebar",;
interface MobileFilterDrawerProps {;
  isMobileFilterOpen: boolean,;
  setIsMobileFilterOpen: (isOpen: boolean) => void,;
  filterProps: any, // We'll pass all filter-related props through this object;
}
;
export function MobileFilterDrawer({;
  isMobileFilterOpen;
  setIsMobileFilterOpen;
  filterProps;
}: MobileFilterDrawerProps) {;
  return (;
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">;
        <FilterSidebar;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />
      </div>
    </Drawer>
  )
}