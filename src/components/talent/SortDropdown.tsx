DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu","
  sortOption: string;,
  setSortOption: (option: string) => void;
}



export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (


          </div>"
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />"
</ChevronDown>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent;"
        align="start"""
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light""
      >
</DropdownMenuContent>
          <DropdownMenuItem;
            key={option.value})
            onClick={() => setSortOption(option.value)}
</DropdownMenuItem>
    <DropdownMenu>;
</DropdownMenu>
      <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>
        <Button;"
          variant="outline";""
          className="w-full justify-between border-zion-blue-light text-white";"
        >;
</Button>"
          <div className="flex items-center gap-2">;"
</div>"
            <SortDesc className="h-4 w-4 text-zion-purple" />;"
</SortDesc>
          </div>;"
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;"
</ChevronDown>
        </Button>;
      </DropdownMenuTrigger>;
          </DropdownMenuItem>
      </DropdownMenuContent>;
    </DropdownMenu>;
    <DropdownMenu>;
</DropdownMenu>
      <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>
        <Button;"
          variant='outline';''
          className='w - full justify - between border - zion - blue - light text - white';'
        >;
</Button>'
          <div className='flex items - center gap - 2'>;'
</div>'
            <SortDesc className='h - 4 w - 4 text - zion - purple' />;'
</SortDesc>
          </div>;'
          <ChevronDown className='h - 4 w - 4 ml - 2 opacity - 50' />;'
</ChevronDown>
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;'
        align='start';''
        className='w-[200px] bg - zion - blue - dark border - zion - blue - light';'
      >;
</DropdownMenuContent>
        {SORT_OPTIONS.map (option => (          <DropdownMenuItem;
            key={option.value})
            on_click={() => setSortOption (option.value)}
</DropdownMenuItem>
          <DropdownMenuItem;
            key = {option.value, }
            on_click = {(, ) => setSortOption (option.value), }
</DropdownMenuItem>'
          <div className="flex items - center gap - 2">;"
</div>"
            <SortDesc className="h - 4 w - 4 text - zion - purple" />;"
</SortDesc>
          </div>;"
          <ChevronDown className="h - 4 w - 4 ml - 2 opacity - 50" />;"
</ChevronDown>
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;"
        align="start";""
        className="w-[200px] bg - zion - blue - dark border - zion - blue - light";"
      >;
</DropdownMenuContent>
          <DropdownMenuItem;
            key={option.value}
            on_click={() => setSortOption (option.value)}
</DropdownMenuItem>
          </DropdownMenuItem>))}
      </DropdownMenuContent>;
    </DropdownMenu>);
      <DropdownMenuContent;"
        align="start";""
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";"
      >;
</DropdownMenuContent>
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
</DropdownMenuItem>"