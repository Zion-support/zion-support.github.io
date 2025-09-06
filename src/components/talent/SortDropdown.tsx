
import { SortDesc, ChevronDown } from 'lucide-react'

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
interface SortDropdownProps {
  sortOption: string
  setSortOption: (option: string) => void
  sortOption: string
  setSortOption: (option: string,) => void
}

import {
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",

interface SortDropdownProps {

  sortOption: string

  setSortOption: (option: string) => void
}



export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        >
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-zion-purple" />
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}

          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >

          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${

            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;


              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
=======
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""


            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
            }`}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>;
  );
};
}
}
}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>))}
      </DropdownMenuContent>;
    </DropdownMenu>);
}
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
<<<<<<< HEAD
            onClick={() => setSortOption(option.value)}

            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
;
