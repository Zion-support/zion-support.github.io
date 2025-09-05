
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Search, Sliders } from "lucide-react",
import { Input } from "@/components/ui/input",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Search, Sliders } from &quot;lucide-react&quot;;
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
<<<<<<< HEAD
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
=======
          className=&quot;pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        />
      </div>
    </div>
  )
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Search, Sliders } from "lucide-react",;
import { Input } from "@/components/ui/input",;
interface MobileFilterBarProps {;
  searchTerm: string,;
  setSearchTerm: (value: string) => void,;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}
;
export function MobileFilterBar({;
  searchTerm;
  setSearchTerm;
  setIsMobileFilterOpen;
}: MobileFilterBarProps) {;
  return (;
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">;
      <Button;
        onClick={() => setIsMobileFilterOpen(true)} ;
        variant="outline";
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light";
      >;
        <Sliders className="h-4 w-4" />;
        Filter Talents;
      </Button>;
      <div className="relative mt-4">;
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />;
        <Input;
          placeholder="Search talents...";
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate";
        />;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;