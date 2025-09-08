import {

  Select,
  SelectContent,
  SelectItem,


  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortFilterProps } from "@/types/filters";
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {
  return (
    <div className="mb-6">
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">
        Sort by

      </label>


