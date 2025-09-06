import {


import { SortFilterProps } from "@/types/filters";

<<<<<<< HEAD
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",
=======


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",
  SelectValue,
} from "@/components/ui/select";
import { SortFilterProps } from "@/types/filters";
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
  );
}
  )
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { SortFilterProps } from "@/types/filters";
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {;
  return (;
=======

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
export function SortFilter(): any ({ sortOption, setSortOption }: SortFilterProps) {;
  return (
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  )
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { SortFilterProps } from "@/types/filters";
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {;
  return (;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    <div className="mb-6">;
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">;
        Sort by;
      </label>;
      <Select value={sortOption} onValueChange={setSortOption}>;
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
          <SelectValue placeholder="Sort by" />;
        </SelectTrigger>;
        <SelectContent className="bg-zion-blue border-zion-blue-light text-white">;
          <SelectItem value="relevance">Relevance</SelectItem>;
          <SelectItem value="rating">Highest Rating</SelectItem>;
          <SelectItem value="experience">Most Experienced</SelectItem>;
          <SelectItem value="price-low">Price: Low to High</SelectItem>;
          <SelectItem value="price-high">Price: High to Low</SelectItem>;
        </SelectContent>;
      </Select>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
;
}
;
=======
=======
  );
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}

  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import { SortFilterProps  } from '@/types / filters';
export /**
 * SortFilter - Function description
 */
function SortFilter() {
  return (
    <div className="mb - 6">;
      <label className="text - sm font - medium text - zion - slate - light mb - 2 block">;
        Sort by;
      </label>;
      <Select value={sort_option} onValueChange={setSortOption}>;
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
          <SelectValue placeholder="Sort by" />;
        </SelectTrigger>;
        <SelectContent className="bg - zion - blue border - zion - blue - light text - white">;
          <SelectItem value="relevance">Relevance</SelectItem>;
          <SelectItem value="rating">Highest Rating</SelectItem>;
          <SelectItem value="experience">Most Experienced</SelectItem>;
          <SelectItem value="price - low">Price: Low to High</SelectItem>;
          <SelectItem value="price - high">Price: High to Low</SelectItem>;
        </SelectContent>;
      </Select>;
    </div>);
}

  )

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
