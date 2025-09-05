import { Input } from &quot;@/components/ui/input&quot;;
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from &quot;@/types/filters&quot;;

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <div className=&quot;relative&quot;>
        <label htmlFor=&quot;talent-search&quot; className=&quot;sr-only&quot;>
          Search talents
        </label>
        <SearchIcon className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; aria-hidden=&quot;true&quot; />
        <Input
          id=&quot;talent-search&quot;
          type=&quot;text&quot;
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby=&quot;talent-search-help&quot;
          className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light&quot;
        />
        <p id=&quot;talent-search-help&quot; className=&quot;sr-only&quot;>
          Type a name or skill to filter results
        </p>
      </div>
    </div>
  );
}
