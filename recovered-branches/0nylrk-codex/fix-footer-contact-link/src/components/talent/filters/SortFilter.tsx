
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <label className=&quot;text-sm font-medium text-zion-slate-light mb-2 block&quot;>
        Sort by
      </label>
      <Select value={sortOption} onValueChange={setSortOption}>
        <SelectTrigger className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
          <SelectValue placeholder=&quot;Sort by&quot; />
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";

export function SortFilter(_{_sortOption, _setSortOption}: SortFilterProps) {_return (
    <div className="mb-6">
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">
        Sort by
      </label>
      <Select value={sortOption} onValueChange={_setSortOption}>
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
          <SelectValue placeholder="Sort by" />
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
  )
}
