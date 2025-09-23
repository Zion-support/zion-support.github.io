
import { Drawer } from "@/components/ui/drawer";
import { FilterSidebar } from "@/components/talent/FilterSidebar";

interface MobileFilterDrawerProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
  filterProps: any; // We'll pass all filter-related props through this object
}

export function MobileFilterDrawer({ 
