<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {

  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from "@/components/ui/select";

import { SortFilterProps } from "@/types/filters";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
SelectValue} from "@/components/ui/select",
import { SortFilterProps } from "@/types/filters",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
  );
}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
========
<<<<<<< HEAD
import {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {SortFilterProps} from "@/types/filters";
export function SortFilter(): any ({ sortOption, setSortOption }: SortFilterProps) {;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
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
          <SelectItem value="price-low">Price: Low to High</SelectItem>;
          <SelectItem value="price-high">Price: High to Low</SelectItem>;
        </SelectContent>;
      </Select>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
;
<<<<<<< HEAD

=======
}

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SortFilter.tsx
=======
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
