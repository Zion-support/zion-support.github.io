import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchItems = [
    { title: 'AI Solutions', description: 'Machine learning and artificial intelligence services', url: '/services/ai' },
    { title: 'IT Services', description: 'Comprehensive IT support and infrastructure management', url: '/services/it' },
    { title: 'Cloud Solutions', description: 'Cloud migration and infrastructure services', url: '/services/cloud' },
    { title: 'Cybersecurity', description: 'Advanced security solutions and threat protection', url: '/services/security' },
    { title: 'Data Analytics', description: 'Business intelligence and data visualization', url: '/services/analytics' },
    { title: 'Digital Transformation', description: 'Complete digital transformation services', url: '/services/transformation' },
    { title: 'About Us', description: 'Learn more about Zion Tech Group', url: '/about' },
    { title: 'Contact', description: 'Get in touch with our team', url: '/contact' },
    { title: 'Pricing', description: 'View our service packages and pricing', url: '/pricing' },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search services, pages, or topics..."
            className="flex-1 outline-none text-lg"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {query.trim() ? (
            results.length > 0 ? (
              <div className="p-2">
                {results.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    onClick={onClose}
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-2">Try searching for AI, IT, Cloud, or Security</p>
              </div>
            )
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Start typing to search our services and pages</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Press Enter to search</span>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
