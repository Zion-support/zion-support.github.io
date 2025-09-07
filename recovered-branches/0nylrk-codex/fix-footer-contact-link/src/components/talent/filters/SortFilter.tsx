import {
  // TODO: Implement
}
  Select,
  SelectContent,
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";""
import { SortFilterProps } from "@/types/filters";"
export function SortFilter({ sortOption, setSortOption }: SortFilterProps) {
  return ("
    <div className="mb-6">"
</div>"
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">"
</label>
      </label>
      <Select value={sortOption} onValueChange={setSortOption}>
</Select>"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
</SelectTrigger>"
          <SelectValue placeholder="Sort by" />"
</SelectValue>
        </SelectTrigger>"
        <SelectContent className="bg-zion-blue border-zion-blue-light text-white">"
</SelectContent>"
          <SelectItem value="relevance">Relevance</SelectItem>""
          <SelectItem value="rating">Highest Rating</SelectItem>""
          <SelectItem value="experience">Most Experienced</SelectItem>""
          <SelectItem value="price-low">Price: Low to High</SelectItem>""
          <SelectItem value="price-high">Price: High to Low</SelectItem>"
        </SelectContent>
      </Select>
    </div>"
    <div className="mb - 6">;"
</div>"
      <label className="text - sm font - medium text - zion - slate - light mb - 2 block">;"
</label>
      </label>;
      <Select value={sort_option} onValueChange={setSortOption}>;
</Select>"
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;"
</SelectTrigger>"
          <SelectValue placeholder="Sort by" />;"
</SelectValue>
        </SelectTrigger>;"
        <SelectContent className="bg - zion - blue border - zion - blue - light text - white">;"
</SelectContent>"
          <SelectItem value="relevance">Relevance</SelectItem>;""
          <SelectItem value="rating">Highest Rating</SelectItem>;""
          <SelectItem value="experience">Most Experienced</SelectItem>;""
          <SelectItem value="price - low">Price: Low to High</SelectItem>;""
          <SelectItem value="price - high">Price: High to Low</SelectItem>;"
        </SelectContent>;
      </Select>;)
    </div>);"
          <SelectItem value="price-low">Price:Low to High</SelectItem>;""
          <SelectItem value="price-high">Price:High to Low</SelectItem>;"
        </SelectContent>;
      </Select>;
    </div>;"
  return (<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light mb-2 block" > Sort by </label> <Select value= {"
</div>)"
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Sort by" /> bg-zion-blue border-zion-blue-light text-white"> <SelectItem value=" relevance">Relevance</SelectItem> <SelectItem value=" rating">Highest Rating</SelectItem> <SelectItem value=" experience">Most Experienced</SelectItem> <SelectItem value=" price-low">Price: Low to High</SelectItem> <SelectItem value=" price-high" >Price: High to Low</SelectItem> </SelectContent> </Select> </div>)"
</SelectTrigger>"

