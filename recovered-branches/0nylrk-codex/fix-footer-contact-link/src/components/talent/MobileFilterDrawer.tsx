
import React from &quot;react&quot;;
import { Drawer } from &quot;@/components/ui/drawer&quot;;
import { FilterSidebar } from &quot;@/components/talent/FilterSidebar&quot;;

interface MobileFilterDrawerProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
  filterProps: any; // We'll pass all filter-related props through this object
}

export function MobileFilterDrawer({ 
  isMobileFilterOpen, 
  setIsMobileFilterOpen, 
  filterProps
}: MobileFilterDrawerProps) {
  return (
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
      <div className=&quot;p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto&quot;>
        <FilterSidebar 
          {...filterProps}
          isMobileFilterOpen={isMobileFilterOpen}
        />
      </div>
    </Drawer>
  );
}
