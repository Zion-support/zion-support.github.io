<<<<<<< HEAD
import React from 'react';
=======
"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';

import { 
  Search, X, Filter, TrendingUp, Clock, 
  Star, Zap, Brain, Shield, Rocket, 
  Globe, Cpu, Database, Cloud
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  lastUpdated: string;
  tags: string[];
  type: 'service' | 'page' | 'blog' | 'case-study';
}

interface SearchFilters {
  category: string[];
  type: string[];
  dateRange: 'all' | 'week' | 'month' | 'year';
  relevance: 'all' | 'high' | 'medium' | 'low';
}

interface EnhancedSearchProps {
  placeholder?: string;
  showFilters?: boolean;
  onSearch?: (query: string, filters: SearchFilters) => void;
  onResultClick?: (result: SearchResult) => void;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  placeholder = "Search for AI, Quantum, Space Tech solutions...",
  showFilters = true,
  onSearch,
  onResultClick
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    type: [],
    dateRange: 'all',
    relevance: 'all'
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mock search results - in real app, this would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'Quantum AI Brain-Computer Interface',
      description: 'Revolutionary neural interface powered by quantum AI for unprecedented human-computer symbiosis',
      category: 'AI & Neuroscience',
      url: '/quantum-ai-brain-computer-interface',
      relevance: 0.95,
      lastUpdated: '2024-08-23',
      tags: ['AI', 'Quantum', 'Neuroscience', 'Brain-Computer Interface'],
      type: 'service'
    },
    {
      id: '2',
      title: 'Holographic Quantum Workspace 2045',
      description: 'Immersive 3D workspace powered by quantum computing for unprecedented productivity',
      category: 'Quantum & Emerging Tech',
      url: '/holographic-quantum-workspace-2045',
      relevance: 0.92,
      lastUpdated: '2024-08-22',
      tags: ['Quantum', 'Holographic', '3D', 'Productivity'],
      type: 'service'
    },
    {
      id: '3',
      title: 'AI Autonomous Business Operations',
      description: 'Fully autonomous business process automation powered by advanced AI',
      category: 'AI & Automation',
      url: '/ai-autonomous-business-operations',
      relevance: 0.89,
      lastUpdated: '2024-08-21',
      tags: ['AI', 'Automation', 'Business', 'Operations'],
      type: 'service'
    },
    {
      id: '4',
      title: 'Space Resource Intelligence Platform',
      description: 'Advanced AI platform for space resource discovery and optimization',
      category: 'Space Technology',
      url: '/space-resource-intelligence-2040',
      relevance: 0.87,
      lastUpdated: '2024-08-20',
      tags: ['Space', 'AI', 'Resources', 'Intelligence'],
      type: 'service'
    },
    {
      id: '5',
      title: 'Quantum Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by quantum computing',
      category: 'Cybersecurity',
      url: '/quantum-cybersecurity-platform',
      relevance: 0.85,
      lastUpdated: '2024-08-19',
      tags: ['Quantum', 'Cybersecurity', 'Security', 'Platform'],
      type: 'service'
    }
  ];

  // Popular searches
  const popularSearchesData = [
    'AI automation', 'Quantum computing', 'Space technology', 
    'Cybersecurity', 'Machine learning', 'Neural networks',
    'Autonomous systems', 'Digital transformation', 'Cloud solutions'
  ];

  // Categories
  const categories = [
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Cpu className="w-4 h-4" /> },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain', icon: <Globe className="w-4 h-4" /> }
  ];

  // Types
  const types = [
    { id: 'service', name: 'Services', icon: <Star className="w-4 h-4" /> },
    { id: 'page', name: 'Pages', icon: <Globe className="w-4 h-4" /> },
    { id: 'blog', name: 'Blog Posts', icon: <Clock className="w-4 h-4" /> },
    { id: 'case-study', name: 'Case Studies', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        // Failed to load recent searches
      }
    }
    
    setPopularSearches(popularSearchesData);
  }, []);

  // Handle search input changes
  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Debounce search
    if (value.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(value);
      }, 300);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, []);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter results based on query and filters
      let filteredResults = mockSearchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = filters.category.length === 0 || 
                               filters.category.some(cat => result.category.toLowerCase().includes(cat));
        
        const matchesType = filters.type.length === 0 || 
                           filters.type.includes(result.type);
        
        return matchesQuery && matchesCategory && matchesType;
      });
      
      // Sort by relevance
      filteredResults.sort((a, b) => b.relevance - a.relevance);
      
      setResults(filteredResults);
      setIsOpen(true);
      
      // Add to recent searches
      if (!recentSearches.includes(searchQuery)) {
        const newRecentSearches = [searchQuery, ...recentSearches.slice(0, 4)];
        setRecentSearches(newRecentSearches);
        localStorage.setItem('recent-searches', JSON.stringify(newRecentSearches));
      }
      
      // Call onSearch callback
      onSearch?.(searchQuery, filters);
      
    } catch (error) {
      // Search failed
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [filters, recentSearches, onSearch]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    // Add to search history
    // setSearchHistory(prev => [result, ...prev.slice(0, 9)]); // This line was removed
    
    // Call onResultClick callback
    onResultClick?.(result);
    
    // Close search
    setIsOpen(false);
    setQuery('');
  }, [onResultClick]);

  // Handle filter change
  const handleFilterChange = useCallback((filterType: keyof SearchFilters, value: string | boolean | string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    // Re-search if we have a query
    if (query.trim()) {
      performSearch(query);
    }
  }, [query, performSearch]);

  // Handle popular search click
  const handlePopularSearchClick = useCallback((popularSearch: string) => {
    setQuery(popularSearch);
    performSearch(popularSearch);
  }, [performSearch]);

  // Handle recent search click
  const handleRecentSearchClick = useCallback((recentSearch: string) => {
    setQuery(recentSearch);
    performSearch(recentSearch);
  }, [performSearch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    searchInputRef.current?.focus();
  }, []);

  // Close search on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedSearch: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedSearch</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedSearch;