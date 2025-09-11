



interface MobileFilterDrawerProps {

  isMobileFilterOpen: boolean
  setIsMobileFilterOpen: (isOpen: boolean) => void

  filterProps: any, // We'll pass all filter-related props through this object
}




  setIsMobileFilterOpen
export function MobileFilterDrawer({
  isMobileFilterOpen;


export function MobileFilterDrawer({ ;
  isMobileFilterOpen;
export function MobileFilterDrawer({ 
  isMobileFilterOpen,
  setIsMobileFilterOpen, =======  filterProps
}: MobileFilterDrawerProps) {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">

        <FilterSidebar 
        <FilterSidebar
        <FilterSidebar 

          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />
      </div>
    </Drawer>
  )
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

export function MobileFilterDrawer(): any ({ ;
  isMobileFilterOpen;
  setIsMobileFilterOpen, ;
  filterProps;
}: MobileFilterDrawerProps) {;
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">;
        <FilterSidebar          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />;
      </div>;
    </Drawer>;
  ),;}
 interface MobileFilterDrawerProps {
  isMobileFilterOpen: boolean;
setIsMobileFilterOpen: (isOpen: boolean) => void;
filterProps: any, //We'll pass all filter-related props through this object 
}export function MobileFilterDrawer ({
  isMobileFilterOpen;
setIsMobileFilterOpen;
filterProps 
}: MobileFilterDrawerProps) {
  return (<Drawer open= {
  isMobileFilterOpen 
}onOpenChange= {
  setIsMobileFilterOpen 
}> <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto" > ...filterProps 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> </div> </Drawer>) 
}
}
import React from './react';
import { Drawer } from '@/components / ui / drawer';
import { FilterSidebar } from '@/components / talent / FilterSidebar';
interface MobileFilterDrawerProps {
  isMobileFilterOpen: boolean,
  setIsMobileFilterOpen: (is_open: boolean) => void,
  filter_props: any, // We'll pass all filter - related props through this object;
}
export /**
 * MobileFilterDrawer - Function description
 */
function MobileFilterDrawer() {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;
      <div className="p - 4 bg - zion - blue - dark border - t border - zion - blue - light h-[85vh] overflow - auto">;
        <FilterSidebar;
          {...filter_props}
          isMobileFilterOpen={isMobileFilterOpen}
        />;
      </div>;
    </Drawer>);
}
