
export default function Page() {
> {

  data: SearchResult[];
  onResultsChange?: (results: SearchResult[]) => void;
  placeholder?: string;
  showFilters?: boolean}

export const SearchAndFilterSystem: React.FC<SearchAndFilterSystemProps> = ({

  data,
  onResultsChange,
  placeholder = "Search services, articles, team members...",
  showFilters = true}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('relevance');

  // Filter options
  
      return acc}, {} as Record < string, any>) ;

      return acc}, {} as Record < string, any>) ;

        break;
      case 'rating':
        break;
      case 'name':
                    <Tag className="w-4 h-4"  />
                    {result.tags.slice(0, 3).join(',)}`
                    {result.tags.length > 3 && ` +${result.tags.length-3} more`}
