
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from &quot;@/components/ui/select&quot;;
import { SortFilterProps } from &quot;@/types/filters&quot;;

export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <label className=&quot;text-sm font-medium text-zion-slate-light mb-2 block&quot;>
        Sort by
      </label>
      <Select value={sortOption} onValueChange={setSortOption}>
        <SelectTrigger className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
          <SelectValue placeholder=&quot;Sort by&quot; />
        </SelectTrigger>
        <SelectContent className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
          <SelectItem value=&quot;relevance&quot;>Relevance</SelectItem>
          <SelectItem value=&quot;rating&quot;>Highest Rating</SelectItem>
          <SelectItem value=&quot;experience&quot;>Most Experienced</SelectItem>
          <SelectItem value=&quot;price-low&quot;>Price: Low to High</SelectItem>
          <SelectItem value=&quot;price-high&quot;>Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
