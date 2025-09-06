
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {Search, Sliders} from "lucide-react";
import {Input} from "@/components/ui/input";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Search, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
interface MobileFilterBarProps {
<<<<<<< HEAD
  searchTerm: string;
  setSearchTerm: (value: string) => void;
<<<<<<< HEAD
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import { Search, Sliders } from "lucide-react",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface MobileFilterBarProps {

  searchTerm: string
  setSearchTerm: (value: string) => void

  setIsMobileFilterOpen: (isOpen: boolean) => void
}
<<<<<<< HEAD
=======
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function MobileFilterBar({
  searchTerm;

  setSearchTerm
  setIsMobileFilterOpen

=======

<<<<<<< HEAD
export function MobileFilterBar({ ;
  searchTerm;
=======
export function MobileFilterBar({ 
  searchTerm,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  setSearchTerm, 
  setIsMobileFilterOpen 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}: MobileFilterBarProps) {
  return (
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">
      <Button
        onClick={() => setIsMobileFilterOpen(true)}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light"
      >
        <Sliders className="h-4 w-4" />
        Filter Talents
      </Button>
      <div className="relative mt-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />
      </div>
    </div>
  )
<<<<<<< HEAD
}
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
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
