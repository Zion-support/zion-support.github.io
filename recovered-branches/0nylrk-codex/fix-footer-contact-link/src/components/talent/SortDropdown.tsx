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

import { SortDesc, ChevronDown  } from './lucide-react';import {
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
import React from "react",
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from "lucide-react",
import React from "react";
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
;
} from '@/components / ui / dropdown - menu';
;
} from "@/components/ui/dropdown-menu";
interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

import React from "react";""
import { Button } from "@/components/ui/button";""
import { SORT_OPTIONS } from "@/data/sortOptions";""
import { SortDesc, ChevronDown } from "lucide-react";"

import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,
  DropdownMenuTrigger,"
} from "@/components/ui/dropdown-menu";""
import React from './react';
import { Button  } from '@/components / ui / button';
import { SORT_OPTIONS  } from '@/data / sort_options';
import { SortDesc, ChevronDown  } from './lucide-react';
import {Button} from "@/components/ui/button";""
import {SORT_OPTIONS} from "@/data/sortOptions";""
import {SortDesc, ChevronDown} from "lucide-react";""
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";"
  // TODO: Implement
} from '@/components / ui / dropdown - menu';
;
interface SortDropdownProps {
  // TODO: Implement
  sortOption: string;,
  setSortOption: (option: string) => void;
pr-12325

}
}
}
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {

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
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
            }`}
      </DropdownMenuTrigger>            }`}
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
              sortOption === option.value
                ? "bg-zion-purple/20 text-zion-purple"
                : ""
            onClick={() => setSortOption(option.value)}`
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${}`
            }`}
      </DropdownMenuTrigger>            }`}
      </DropdownMenuTrigger>            }`}
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

'"`

</DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button;
          variant="outline"""
          className="w-full justify-between border-zion-blue-light text-white""
        >
"
          <div className="flex items-center gap-2">"
</div>"
            <SortDesc className="h-4 w-4 text-zion-purple" />"

          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />"

</ChevronDown>

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent;"
        align="start"""
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light""

          <DropdownMenuItem;
            key={option.value})
            onClick={() => setSortOption(option.value)}

pr-12325
</DropdownMenuItem>

          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>"

