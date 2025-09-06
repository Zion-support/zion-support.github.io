<<<<<<< HEAD





=======
<<<<<<< HEAD

<<<<<<< HEAD
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
=======
=======
>>>>>>> main
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  SelectValue,
} from "@/components/ui/select";
import { SortFilterProps } from "@/types/filters";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
export function SortFilter(): any ({ sortOption, setSortOption }: SortFilterProps) {;
  return (
=======
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { SortFilterProps } from "@/types/filters";
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  )

          <SelectItem value="price-low">Price:Low to High</SelectItem>;
          <SelectItem value="price-high">Price:High to Low</SelectItem>;
        </SelectContent>;
      </Select>;
    </div>;
  );}
 export function SortFilter ({
  sortOption, setSortOption 
}: SortFilterProps) {
  return (<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light mb-2 block" > Sort by </label> <Select value= {
  sortOption 
}onValueChange= {
  setSortOption 
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Sort by" /> bg-zion-blue border-zion-blue-light text-white"> <SelectItem value=" relevance">Relevance</SelectItem> <SelectItem value=" rating">Highest Rating</SelectItem> <SelectItem value=" experience">Most Experienced</SelectItem> <SelectItem value=" price-low">Price: Low to High</SelectItem> <SelectItem value=" price-high" >Price: High to Low</SelectItem> </SelectContent> </Select> </div>) 
}
);
}
}
;

}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
