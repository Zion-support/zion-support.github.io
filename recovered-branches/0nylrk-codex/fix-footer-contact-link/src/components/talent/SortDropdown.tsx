
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDescChevronDown } from "lucide-react",
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
interface SortDropdownProps {,
sortOption: string,
  setSortOption: (option: string) => void}
,
export function SortDropdown({ sortOptionsetSortOption }: SortDropdownProps) {
