import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Clock, Globe } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog';
  category?: string;
}

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addNotification } = useNotifications();

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Services',
      description:
        'Custom AI solutions powered by machine learning and deep learning technologies',
      url: '/services/ai-services',
      type: 'service',
      category: 'Services',
    },
    {
      id: '2',
      title: 'IT Services',
      description:
        'Comprehensive IT infrastructure and digital transformation solutions',
      url: '/services/it-services',
      type: 'service',
      category: 'Services',
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      url: '/services/cybersecurity',
      type: 'service',
      category: 'Services',
    },
    {
      id: '4',
      title: 'About Us',
      description:
        'Learn about Zion Tech Group and our mission to transform businesses',
      url: '/about',
      type: 'page',
      category: 'Pages',
    },
    {
      id: '5',
      title: 'Pricing',
      description: 'Flexible pricing plans for all your technology needs',
      url: '/pricing',
      type: 'page',
      category: 'Pages',
    },
    {
      id: '6',
      title: 'Contact Us',
      description: 'Get in touch with our team for consultations and support',
      url: '/contact',
      type: 'page',
      category: 'Pages',
    },
    {
      id: '7',
      title: 'The Future of AI in Business',
      description: 'Explore the latest AI trends that are reshaping industries',
      url: '/blog/future-ai-business-trends-2024',
      type: 'blog',
      category: 'Blog',
    },
    {
      id: '8',
      title: 'Cybersecurity Best Practices',
      description:
        'Learn essential cybersecurity strategies for small to medium businesses',
      url: '/blog/cybersecurity-best-practices-smb',
      type: 'blog',
      category: 'Blog',
    },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category?.toLowerCase().includes(query.toLowerCase()),
      );

      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleResultClick(results[selectedIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleResultClick = (result: SearchResult) => {
    addNotification({
      type: 'info',
      title: 'Navigating...',
      message: `Going to ${result.title}`,
      duration: 2000,
    });

    window.location.href = result.url;
    onClose();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'page':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'blog':
        return <Clock className="w-4 h-4 text-purple-400" />;
      default:
        return <Globe className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-2xl mx-auto mt-20 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-gray-700/50">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, pages, and content..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
              />
              <button
                onClick={onClose}
                className="ml-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center text-gray-400">
                  <div className="animate-spin w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                  Searching...
                </div>
              ) : results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <motion.button
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleResultClick(result)}
                      className={`w-full text-left p-4 hover:bg-gray-800/50 transition-colors flex items-center ${
                        index === selectedIndex ? 'bg-gray-800/50' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 mr-3">
                        {getTypeIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium truncate">
                            {result.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
                        </div>
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                            {result.category}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : query.length >= 2 ? (
                <div className="p-8 text-center text-gray-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-1">
                    Try different keywords or check spelling
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Start typing to search...</p>
                </div>
              )}
            </div>

            {/* Search Tips */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-800/30">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>Esc Close</span>
                </div>
                <span>{results.length} results</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
