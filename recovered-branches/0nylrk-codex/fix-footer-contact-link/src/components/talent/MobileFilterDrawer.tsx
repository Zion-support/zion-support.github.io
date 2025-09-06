
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Drawer} from "@/components/ui/drawer";
import {FilterSidebar} from "@/components/talent/FilterSidebar";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { Drawer } from "@/components/ui/drawer";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
=======
import { Drawer } from "@/components/ui/drawer",
import { FilterSidebar } from "@/components/talent/FilterSidebar",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

<<<<<<< HEAD
export function MobileFilterDrawer({ ;
  isMobileFilterOpen;
=======
export function MobileFilterDrawer({ 
  isMobileFilterOpen,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />
      </div>
    </Drawer>
  )
}