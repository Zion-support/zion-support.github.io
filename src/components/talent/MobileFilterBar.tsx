
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Search, Sliders } from 'lucide-react'
import { Input } from "@/components/ui/input",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Search, Sliders } from 'lucide-react'
import { Input } from &quot;@/components/ui/input&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MobileFilterBarProps {
  searchTerm: string,
  setSearchTerm: (value: string) => void,
  setIsMobileFilterOpen: (isOpen: boolean) => void
}

export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
    <div className=&quot;lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4&quot;>
=======
import React from "react";

interface MobileFilterBarProps {_searchTerm: string;
  setSearchTerm: (_value: string) => void;
  setIsMobileFilterOpen: (_isOpen: boolean) => void;}

export function MobileFilterBar(_{_searchTerm, _setSearchTerm, _setIsMobileFilterOpen}: MobileFilterBarProps) {_return (_<div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Button 
        onClick={() => setIsMobileFilterOpen(true)} 
        variant=&quot;outline&quot;
        className=&quot;w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light&quot;
      >
        <Sliders className=&quot;h-4 w-4&quot; />
        Filter Talents
      </Button>
      
      <div className=&quot;relative mt-4&quot;>
        <label htmlFor=&quot;mobile-talent-search&quot; className=&quot;sr-only&quot;>
          Search talents
        </label>
        <Search className=&quot;absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate&quot; />
        <Input
<<<<<<< HEAD
          id=&quot;mobile-talent-search&quot;
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
<<<<<<< HEAD
=======
          id="mobile-talent-search"
          placeholder="Search talents..."
          value={_searchTerm}
          onChange={_e => setSearchTerm(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          aria-describedby="mobile-talent-search-help"
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
=======
          aria-describedby=&quot;mobile-talent-search-help&quot;
          className=&quot;pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        />
        <p id=&quot;mobile-talent-search-help&quot; className=&quot;sr-only&quot;>
          Search by name or skill
        </p>
      </div>
    </div>
  )
}
