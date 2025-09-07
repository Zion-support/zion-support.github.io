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

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (


          </div>"
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />"

        
      
      <DropdownMenuContent;"
        align="start"""
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light""
      >

          <DropdownMenuItem;
            key={option.value})
            onClick={() => setSortOption(option.value)}

    <DropdownMenu>;

      <DropdownMenuTrigger asChild>;

        <Button;"
          variant="outline";""
          className="w-full justify-between border-zion-blue-light text-white";"
        >;
"
          <div className="flex items-center gap-2">;"
            <SortDesc className="h-4 w-4 text-zion-purple" />;"

          </div>;"
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;"

        ;
          

      <DropdownMenuTrigger as_child>;

          variant='outline';
          className='w - full justify - between border - zion - blue - light text - white';

          <div className='flex items - center gap - 2'>;
</div>
            <SortDesc className='h - 4 w - 4 text - zion - purple' />;

          </div>;
          <ChevronDown className='h - 4 w - 4 ml - 2 opacity - 50' />;

      <DropdownMenuContent;
        align='start';
        className='w-[200px] bg - zion - blue - dark border - zion - blue - light';

        {SORT_OPTIONS.map (option => (          <DropdownMenuItem;
            on_click={() => setSortOption (option.value)}

            key = {option.value, }
            on_click = {(, ) => setSortOption (option.value), }

          <div className="flex items - center gap - 2">;"
            <SortDesc className="h - 4 w - 4 text - zion - purple" />;"

          <ChevronDown className="h - 4 w - 4 ml - 2 opacity - 50" />;"

        align="start";""
        className="w-[200px] bg - zion - blue - dark border - zion - blue - light";"

            key={option.value}

          ))}
    );
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";"
