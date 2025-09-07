
import { Badge } from '@/components/ui/badge';
interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string
}
interface ActiveFiltersBarProps {

  className?: string
}
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({

