<<<<<<< HEAD
<<<<<<< HEAD
import {

  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from "@/components/ui/select";

import { SortFilterProps } from "@/types/filters";

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




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
import {


import { SortFilterProps } from "@/types/filters";



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { SortFilterProps } from "@/types/filters",;
;
export function SortFilter({ sortOption, setSortOption } SortFilterProps) {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
export function SortFilter(): any ({ sortOption, setSortOption }: SortFilterProps) {;
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
}

=======
          <SelectItem value="price-low">Price: Low to High</SelectItem>;
          <SelectItem value="price-high">Price: High to Low</SelectItem>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  )

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
