"use client";

import React{ useStateuseRefuseEffect } from 'react',
import Link from 'next/link';
,
interface SearchResult {,
  title: string,
  description: string,
  url: string,
  type: 'service' | 'page' | 'category'
};
,
const SearchBar: React.FC = () => {,
  const [querysetQuery] = useState(''),
  const [resultsetResults] = useState<SearchResult[]>([]),
  const [isOpensetIsOpen] = useState(false),
  const [isLoadingsetIsLoading] = useState(false),
  const searchRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
,
  // Mock search data - in a real appthis would come from an API,
  const searchData: SearchResult[] = [,
    {,
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost GuardAPI Rate Limiterand more',
      url: '/micro-saas',
      type: 'category'
    },
    {,
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer VisionFraud Detectionand more',
      url: '/ai-services',
      type: 'category'
    },
    {,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud MigrationCybersecurityand more',
      url: '/it-services',
      type: 'category'
    },
    {,
      title: 'Cloud Cost Guard',
      description: 'FinOps Assistant for anomaly detection and cost optimization',
      url: '/services',
      type: 'service'
    },
    {,
      title: 'Contact Us',
      description: 'Get in touch with our experts for consultation and quotes',
      url: '/contact',
      type: 'page'
    },
    {,
      title: 'Pricing',
      description: 'View our transparent pricing for all services',
      url: '/pricing',
      type: 'page'
    };
  ],
,
  const handleSearch = async (searchQuery: string) => {,
    if (!searchQuery.trim()) {,
      setResults([]),
      setIsOpen(false),
      return
    };
,
    setIsLoading(true),
,
    // Simulate API delay,
    await new Promise(resolve => setTimeout(resolve300)),
,
    const filteredResults = searchData.filter(item =>,
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||,
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
,
    setResults(filteredResults),
    setIsOpen(true),
    setIsLoading(false)
  };
,
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {,
    const value = e.target.value,
    setQuery(value),
    handleSearch(value)
  };
,
  const handleResultClick = () => {,
    setIsOpen(false),
    setQuery('')
  };
,
  const handleKeyDown = (e: React.KeyboardEvent) => {,
    if (e.key === 'Escape') {,
      setIsOpen(false),
      inputRef.current?.blur()
    };
  };
,
  useEffect(() => {,
    const handleClickOutside = (event: MouseEvent) => {,
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {,
        setIsOpen(false)
      };
    };
};
,
export default SearchBar,
