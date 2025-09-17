import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const mockResults = [
    'AI Solutions',
    'Quantum Computing',
    'Cybersecurity',
    'Machine Learning',
    'Cloud Services',
    'Data Analytics',
    'Blockchain',
    'IoT Solutions'
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockResults.filter(result =>
        result.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Search</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for services, solutions, or topics..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              autoFocus
            />
          </div>

          {searchResults.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Results</h3>
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700"
                    onClick={() => {
                      // Handle search result click
                      console.log('Selected:', result);
                      onClose();
                    }}
                  >
                    {result}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchQuery.trim() && searchResults.length === 0 && (
            <div className="mt-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;