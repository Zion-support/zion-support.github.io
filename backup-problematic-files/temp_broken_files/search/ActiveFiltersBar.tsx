
>;
          {type}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

        >;
          {location}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

        >;
          {availability}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

          {selectedRating}+ Stars;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
    </div>;

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
;
interface SearchFilters {;
  types: string[];,;
  category: string;,;
  minPrice: number;,;
  maxPrice: number;,;
  minRating: number;,;
  sort:string;}
interface ActiveFiltersBarProps {;
  filters: SearchFilters;,;
  onFiltersChange: (filters:SearchFilters) => void;,;
  onClearAll: () => void;,;
  className?:string;
}
export const ActiveFiltersBar:React.FC<ActiveFiltersBarProps> = ({;

  const activeFilters: Array<{ key:string;, label: string;, value: string ;}> = [],;
  // Add type filters;
  filters.types.forEach(type => {;
    const labels:Record<string string> = {;
</string>)
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {;
    activeFilters.push({;
      key: 'price';,;
      label: 'Price';,;
      value: `$${filters.minPrice;} - $${filters.maxPrice}`;)
    }),;
  // Add rating filter;
  if (filters.minRating > 0) {;
      key: 'rating';,;
      label: 'Rating';,;`;
      value: `${filters.minRating;}+ stars`;)
  // Add sort filter (only if not default);
  if (filters.sort !== 'relevance') {;
    const sortLabels:Record<string string> = {;
</string>`;
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>;
</div>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>;"
        <Badge ;
          key={filter.key} ;"
          variant="secondary" ;""
          className="flex items-center gap-1 pl-2 pr-1";"
        >;
"
          <span className="text-xs">;"
</span>
          </span>;
          <Button;"
            variant="ghost";""
            size="sm";""
            className="h-4 w-4 p-0 hover:bg-transparent";"
            onClick={() => removeFilter(filter.key)}
            <X className="h-3 w-3" />;"

        size="sm";"
        onClick={onClearAll}"
        className="text-xs h-6 px-2";"

    </div>;
  activeFilters.map (filter => (<Badge key= {;
  filter.key ;
}variant="secondary" className="flex items-center gap-1 pl-2 pr-1" > > <X className="h-3 w-3" /> </Button> </Badge>) ) ;
}<Button > Clear all </Button> </div>) 
};


