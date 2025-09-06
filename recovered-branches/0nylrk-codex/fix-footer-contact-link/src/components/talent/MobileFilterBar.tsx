

import React from "react",
import { Button } from "@/components/ui/button",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface MobileFilterBarProps {

  searchTerm: string
  setSearchTerm: (value: string) => void

  setIsMobileFilterOpen: (isOpen: boolean) => void
}

  setSearchTerm,
  setIsMobileFilterOpen

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
=======

import React from "react";
import {Button} from "@/components/ui/button";
import {Search, Sliders} from "lucide-react";
import {Input} from "@/components/ui/input";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
