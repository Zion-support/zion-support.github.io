
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Search, Sliders } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;

interface MobileFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

export function MobileFilterBar({ 
  searchTerm, 
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
    <div className=&quot;lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4&quot;>
      <Button 
        onClick={() => setIsMobileFilterOpen(true)} 
        variant=&quot;outline&quot;
        className=&quot;w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light&quot;
      >
        <Sliders className=&quot;h-4 w-4&quot; />
        Filter Talents
      </Button>
      
      <div className=&quot;relative mt-4&quot;>
        <Search className=&quot;absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate&quot; />
        <Input
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className=&quot;pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate&quot;
        />
      </div>
    </div>
  );
}
