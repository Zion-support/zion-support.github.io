import { X,  } from 'lucide-react'
import { Button,, ,  } from '@/components/ui/button';
import { Badge,  } from '@/components/ui/badge';
interface SearchFilters {
sort: string;
}
interface ActiveFiltersBarProps {
className?: string,
}
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({
