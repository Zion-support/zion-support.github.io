import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  tags: string[];
  relevance: number;
}

export default function EnhancedSearch2026() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const allContent: SearchResult[] = [
    {
      id: 'ai-2026-trends',
      title: 'AI 2026: Revolutionary Trends That Will Transform Everything',
      description: 'Discover the groundbreaking AI trends for 2026 that will revolutionize industries, from quantum AI to neural interfaces and autonomous systems.',
      category: 'Blog Post',
      href: '/blog/ai-2026-revolutionary-trends',
      tags: ['AI Trends', '2026 Predictions', 'Technology', 'Quantum AI', 'Neural Interfaces'],
      relevance: 100
    },
    {
      id: 'retail-transformation',
      title: 'Global Retail Giant AI Transformation: $2.3B Revenue Increase',
      description: 'How a Fortune 500 retail company achieved unprecedented growth through comprehensive AI transformation.',
      category: 'Case Study',
      href: '/case-studies/ai-transformation-global-retail-giant-2026',
      tags: ['Retail', 'AI Transformation', 'ROI', 'Fortune 500', 'Success Story'],
      relevance: 95
    },
    {
      id: 'implementation-guide',
      title: 'AI 2026 Implementation Master Guide: Complete Blueprint',
      description: 'The definitive guide to implementing AI in 2026. Complete blueprint with frameworks, checklists, and templates.',
      category: 'Resource',
      href: '/resources/ai-2026-implementation-master-guide',
      tags: ['Implementation', 'Guide', 'Framework', 'Blueprint', 'Templates'],
      relevance: 90
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Breakthrough: The Future of Machine Learning',
      description: 'Explore how quantum computing is revolutionizing machine learning algorithms and enabling solutions to impossible problems.',
      category: 'Blog Post',
      href: '/blog/ai-2026-quantum-machine-learning-revolution',
      tags: ['Quantum AI', 'Machine Learning', 'Breakthrough', 'Quantum Computing'],
      relevance: 85
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Revolution: Brain-Computer Interfaces in 2026',
      description: 'Discover the latest developments in brain-computer interface technology and how it\'s transforming healthcare.',
      category: 'Blog Post',
      href: '/blog/ai-2026-neural-interface-breakthrough',
      tags: ['Neural Interfaces', 'BCI', 'Healthcare', 'Brain-Computer Interface'],
      relevance: 80
    },
    {
      id: 'manufacturing-breakthrough',
      title: 'Fortune 500 Manufacturing AI Breakthrough: 60% Efficiency Gains',
      description: 'How a manufacturing giant achieved unprecedented efficiency gains through AI automation and predictive maintenance.',
      category: 'Case Study',
      href: '/case-studies/ai-transformation-fortune-500-breakthrough-2025',
      tags: ['Manufacturing', 'Automation', 'Efficiency', 'Fortune 500'],
      relevance: 75
    }
  ];

  const searchContent = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filteredResults = allContent
        .filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 6);
      
      setResults(filteredResults);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchContent(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder="Search AI content, case studies, guides..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query || results.length > 0) && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-sm text-gray-500 mt-2">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {result.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {result.category}
                        </span>
                        <div className="flex space-x-1">
                          {result.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {result.relevance}%
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {results.length >= 6 && (
                <div className="border-t border-gray-200 px-4 py-3">
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View all results for "{query}"
                  </Link>
                </div>
              )}
            </div>
          ) : query ? (
            <div className="p-4 text-center">
              <p className="text-sm text-gray-500">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try different keywords or check spelling</p>
            </div>
          ) : null}
        </div>
      )}

      {/* Popular Searches */}
      {isOpen && !query && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {['AI 2026 trends', 'AI implementation', 'Case studies', 'Quantum AI', 'Neural interfaces', 'ROI calculator'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    searchContent(term);
                  }}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}