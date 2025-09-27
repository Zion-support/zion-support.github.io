import React, { useState, useEffect, useRef } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  ur, l: string;
  typ, e: 'page' | 'service' | 'blog' | 'faq';
  category?: string;
  tags?: string[];
}

interface SearchProps {
  placeholder?: string;
  onResultClick?: (result: SearchResult) => void;
  className?: string;
}

export const AdvancedSearch: React.FC<SearchProps> = ({ 
  placeholder = "Search...", 
  onResultClick,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      i, d: '1',
      title: 'AI & Machine Learning Services',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      url: '/services#ai-ml',
      type: 'service',
      category: 'Services',
      tags: ['AI', 'Machine Learning', 'Automation']
    },
    {
      id: '2',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      url: '/services#cloud',
      type: 'service',
      category: 'Services',
      tags: ['Cloud', 'Infrastructure', 'DevOps']
    },
    {
      id: '3',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      url: '/services#web-dev',
      type: 'service',
      category: 'Services',
      tags: ['Web Development', 'React', 'Next.js']
    },
    {
      id: '4',
      title: 'About Us',
      description: 'Learn about Zion App\'s mission, values, and commitment to delivering cutting-edge technology solutions.',
      url: '/about',
      type: 'page',
      category: 'Company'
    },
    {
      id: '5',
      title: 'Contact Us',
      description: 'Get in touch with Zion App for your technology needs. We\'re here to help transform your business.',
      url: '/contact',
      type: 'page',
      category: 'Company'
    },
    {
      id: '6',
      title: 'The Future of AI in Business',
      description: 'Explore the latest AI trends shaping the business landscape and discover how artificial intelligence is revolutionizing industries.',
      url: '/blog/future-ai-business-trends-2024',
      type: 'blog',
      category: 'Blog',
      tags: ['AI', 'Business', 'Technology']
    },
    {
      id: '7',
      title: 'What services does Zion App offer?',
      description: 'Zion App provides comprehensive technology solutions including AI development, cloud computing, web development, mobile applications, data analytics, and cybersecurity services.',
      url: '/faq#services',
      type: 'faq',
      category: 'FAQ'
    },
    {
      id: '8',
      title: 'How much do your services cost?',
      description: 'Our pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including fixed-price projects and hourly rates.',
      url: '/faq#pricing',
      type: 'faq',
      category: 'FAQ'
    }
  ];

  const searchResults = (query: string): SearchResult[] => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return searchData.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      item.category?.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 8);
  };

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const searchResults = searchResults(query);
        setResults(searchResults);
        setIsLoading(false);
        setIsOpen(true);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    } else {
      window.location.href = result.url;
    }
    setIsOpen(false);
    setQuery('');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🔧';
      case 'page':
        return '📄';
      case 'blog':
        return '📝';
      case 'faq':
        return '❓';
      default:
        return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-blue-600bg-blue-100';
      case 'page':
        return 'text-green-600bg-green-100';
      case 'blog':
        return 'text-purple-600bg-purple-100';
      case 'faq':
        return 'text-orange-600bg-orange-100';
      default:
        return 'text-gray-600bg-gray-100';
    }
  };

  return (
    <div ref={searchRef} className={`relative `}>
      <div className="relative">
        <div className="absolute inset-y-0left-0pl-3flex items-centerpointer-events-none">
          <svg className="h-5w-5text-gray-400" fill="none" stroke="currentColor" viewBox="002424">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2121l-6-6m2-5a77011-14077001140z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="block w-full pl-10pr-3py-2border border-gray-300rounded-md leading-5bg-white placeholder-gray-500focus:outline-none focus:placeholder-gray-400focus:ring-1focus:ring-blue-500focu, s:border-blue-500s,m:text-sm"
          placeholder={placeholder}
          aria-label="Search"
        />
        {isLoading && (
          <div className="absolute inset-y-0right-0pr-3flexitems-center">
            <svg className="animate-spin h-5w-5text-gray-400" fill="none" viewBox="002424">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M412a880018-8V0C5.373005.373012h4zm25.291A7.9627.962001412H0c03.0421.1355.82437.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50mt-1w-full bg-white shadow-lg max-h-96rounded-md py-1text-base ring-1ring-black ring-opacity-5overflow-auto focus:outline-none s,m:text-sm">
          {results.map((result, index) => (
            <div
              key={result.id}
              role="button" tabIndex={0} onClick={() => handleResultClick(result)}
              className={`cursor-pointer select-none relative py-3px-4hover:bg-gray-50 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flexitems-center">
                <div className="flex-shrink-0mr-3">
                  <span className="text-lg">{getTypeIcon(result.type)}</span>
                </div>
                <div className="flex-1min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900truncate">
                      {result.title}
                    </p>
                    <span className={`inline-flex items-center px-2py-0.5rounded-full text-xs font-medium ${getTypeColor(result.type)}`}
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500truncate">
                    {result.description}
                  </p>
                  {result.tags && result.tags.length > 0 && (
                    <div className="mt-1flex flex-wrapgap-1">
                      {result.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2py-0.5rounded text-xs font-medium bg-gray-100text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && !isLoading && (
        <div className="absolute z-50mt-1w-full bg-white shadow-lg rounded-md py-3px-4text-center text-smtext-gray-500">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
};