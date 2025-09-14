'use client';


import React, { useState, useRef, useEffect } from 'react',
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
  const [query, setQuery] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [isOpen, setIsOpen] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const searchRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
,
  // Mock search data - in a real app, this would come from an API,
  const searchData: SearchResult[] = [,
    {,
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',
      url: '/micro-saas',
      type: 'category'
    },
    {,
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',
      url: '/ai-services',
      type: 'category'
    },
    {,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',
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
    await new Promise(resolve => setTimeout(resolve, 300)),
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
