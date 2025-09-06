import React from "react";"
import { Button } from "@/components/ui/button";"
import { SORT_OPTIONS } from "@/data/sortOptions";"
import { SortDesc, ChevronDown } from "lucide-react";
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,";
} from "@/components/ui/dropdown-menu";

<<<<<<< HEAD
import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
<<<<<<< HEAD
<<<<<<< HEAD
=======





import React from './react';'
import { Button  } from '@/components / ui / button';'
import { SORT_OPTIONS  } from '@/data / sort_options';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SortDesc, ChevronDown  } from './lucide-react';

<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {SortDesc, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
=======
import React from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import {
=======
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
<<<<<<< HEAD
=======
import { SortDesc, ChevronDown  } from './lucide-react';import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { SortDesc, ChevronDown  } from './lucide-react';import {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";





import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';

import React from "react";
import {Button} from "@/components/ui/button";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {SortDesc, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} from '@/components / ui / dropdown - menu';
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
} from "@/components/ui/dropdown-menu";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
} from "@/components/ui/dropdown-menu";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
} from '@/components / ui / dropdown - menu';
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between border-zion-blue-light text-white"
        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find((opt) => opt.value === sortOption)?.label ||
              "Sort by"}
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </DropdownMenuTrigger>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <DropdownMenuContent
        align="start"
=======




import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

      <DropdownMenuContent"
        align="start""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
<<<<<<< HEAD
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""

=======
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
=======
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${}
              sortOption === option.value"
                ? "bg-zion-purple/20 text-zion-purple""
                : ""`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
;



            key={option.value}
<<<<<<< HEAD
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
<<<<<<< HEAD
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            onClick={() => setSortOption(option.value)}`
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            }`}
=======
      </DropdownMenuTrigger>            }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </DropdownMenuTrigger>            }`}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
import { SORT_OPTIONS } from "@/data/sortOptions",;"
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
  );


}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
