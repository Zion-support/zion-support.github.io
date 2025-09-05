
import { Input } from &quot;@/components/ui/input&quot;;
import { SearchIcon } from &quot;lucide-react&quot;;
import { SearchFilterProps } from &quot;@/types/filters&quot;;

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <div className=&quot;relative&quot;>
        <SearchIcon className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; />
        <Input
          type=&quot;text&quot;
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light&quot;
        />
      </div>
    </div>
  );
}
