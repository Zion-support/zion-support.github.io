import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<<<<<<< HEAD




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
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';import {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
<<<<<<< HEAD
} from '@/components / ui / dropdown - menu';
;
=======
} from "@/components/ui/dropdown-menu";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
            }`}
=======
      </DropdownMenuTrigger>            }`}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from "lucide-react",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
  );

<<<<<<< HEAD

}
;
=======
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
