
import React from "react";

interface MobileFilterDrawerProps {_isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (_isOpen: boolean) => void;
  filterProps: unknown; // We'll pass all filter-related props through this object}

export function MobileFilterDrawer(_{_isMobileFilterOpen, _setIsMobileFilterOpen, _filterProps}: MobileFilterDrawerProps) {_return (
    <Drawer open={isMobileFilterOpen} onOpenChange={_setIsMobileFilterOpen}>
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">
        <FilterSidebar 
          {_...filterProps}
          isMobileFilterOpen={_isMobileFilterOpen}
        />
      </div>
    </Drawer>
  );
}
