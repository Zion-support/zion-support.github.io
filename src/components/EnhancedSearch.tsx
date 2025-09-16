import React, { useState, useEffect } from 'react';

interface SearchResult {
  title: string;
  href: string;
  description: string;
  category: string;
  icon: string;
}

const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchData: SearchResult[] = [
    {
      title: 'Advanced AI Systems 2026',
      href: '/pages/AdvancedAISystems2026',
      description: 'Next-generation AI systems with autonomous learning capabilities',
      category: 'AI Solutions',
      icon: '🧠'
    },
    {
      title: 'Space Technology & AI 2025',
      href: '/pages/SpaceTechAI2025',
      description: 'AI-powered space exploration and satellite intelligence',
      category: 'Space Technology',
      icon: '🚀'
    },
    {
      title: 'Biotech AI Revolution 2025',
      href: '/pages/BiotechAIRevolution2025',
      description: 'Revolutionary biotechnology and personalized medicine',
      category: 'Biotechnology',
      icon: '🧬'
    },
    {
      title: 'Quantum Computing Revolution 2026',
      href: '/pages/QuantumComputingRevolution2026',
      description: 'Breakthrough quantum computing solutions',
      category: 'Quantum Computing',
      icon: '⚡'
    },
    {
      title: 'Neural Interface Revolution 2026',
      href: '/pages/NeuralInterfaceRevolution2026',
      description: 'Advanced brain-computer interface technology',
      category: 'Neural Interfaces',
      icon: '🧬'
    },
    {
      title: 'AI Services Page',
      href: '/pages/AIServicesPage',
      description: 'Comprehensive AI services and solutions',
      category: 'AI Services',
      icon: '🤖'
    },
    {
      title: 'AI Content Generator',
      href: '/pages/AIContentGenerator',
      description: 'AI-powered content generation tools',
      category: 'AI Tools',
      icon: '📝'
    },
    {
      title: 'AI Matcher',
      href: '/pages/AIMatcher',
      description: 'Intelligent matching and recommendation system',
      category: 'AI Tools',
      icon: '🎯'
    },
    {
      title: 'AI Autonomous Research Assistant',
      href: '/pages/AIAutonomousResearchAssistant',
      description: 'Autonomous AI research and analysis tools',
      category: 'AI Research',
      icon: '🔬'
    },
    {
      title: 'AI Powered IT Asset Management',
      href: '/pages/AIPoweredITAssetManagement',
      description: 'AI-driven IT asset management solutions',
      category: 'IT Management',
      icon: '💻'
    },
    {
      title: 'Innovation Landing 2025',
      href: '/pages/InnovationLanding2025',
      description: 'Comprehensive innovation showcase and insights',
      category: 'Innovation',
      icon: '💡'
    },
    {
      title: 'Revolutionary Tech Blog 2026',
      href: '/pages/RevolutionaryTechBlog2026',
      description: 'Latest insights and trends in revolutionary technology',
      category: 'Blog',
      icon: '📚'
    }
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleResultClick = (href: string) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    window.location.href = href;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Search for AI solutions, technology, services..."
        />
        {query.length > 0 && (
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
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="py-2">
            {results.map((result, index) => (
              <div
                key={index}
                onClick={() => handleResultClick(result.href)}
                className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{result.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="px-4 py-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching for "AI", "Quantum", "Space", or "Biotech"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedSearch;