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

  );
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
          <SelectItem value="experience">Most Experienced</SelectItem>;  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

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
<<<<<<< HEAD
    <div className="mb - 6">;
      <label className="text - sm font - medium text - zion - slate - light mb - 2 block">;
        Sort by;
      </label>;
      <Select value={sort_option} onValueChange={setSortOption}>;
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
          <SelectValue placeholder="Sort by" />;
        </SelectTrigger>;
        <SelectContent className="bg - zion - blue border - zion - blue - light text - white">;
=======
    <div className="mb-6">;
      <label className="text - sm font - medium text - zion - slate - light mb-2 block">;
        Sort by;
      </label>;
      <Select value={sort_option} onValueChange={setSortOption}>;
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text-white">;
          <SelectValue placeholder="Sort by" />;
        </SelectTrigger>;
        <SelectContent className="bg - zion - blue border - zion - blue - light text-white">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

  )


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

  )

import {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
