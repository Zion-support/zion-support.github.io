import {
<<<<<<< HEAD
<<<<<<< HEAD
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select",
=======
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from "@/components/ui/select";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import { SortFilterProps } from "@/types/filters";
=======
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,;
} from '@/components/ui/select';
import { SortFilterProps } from '@/types/filters';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {
  return (
    <div className="mb-6">
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">
        Sort by
      </label>
      <Select value={sortOption} onValueChange={setSortOption}>
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-zion-blue border-zion-blue-light text-white">
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="rating">Highest Rating</SelectItem>
          <SelectItem value="experience">Most Experienced</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}