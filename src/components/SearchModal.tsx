import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Star, Clock } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  icon?: React.ComponentType<any>;
  popular?: boolean;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // AI Services
    { title: 'AI Workflow Automation', description: 'Automate your business processes with AI', url: '/ai-workflow-automation', category: 'AI Services', popular: true },
    { title: 'AI Customer Support', description: '24/7 AI-powered customer support', url: '/ai-customer-support', category: 'AI Services', popular: true },
    { title: 'AI Data Analytics', description: 'Get insights from your data with AI', url: '/ai-data-analytics', category: 'AI Services' },
    { title: 'AI Content Generation', description: 'Create content automatically with AI', url: '/ai-content-generation', category: 'AI Services', popular: true },
    { title: 'AI Healthcare Solutions', description: 'AI-powered healthcare solutions', url: '/ai-healthcare', category: 'AI Services' },
    { title: 'AI Fintech Platform', description: 'Financial AI and fraud detection', url: '/ai-fintech', category: 'AI Services' },
    { title: 'AI Computer Vision', description: 'Advanced image recognition', url: '/ai-computer-vision', category: 'AI Services' },
    { title: 'AI Machine Learning', description: 'Complete ML platform', url: '/ai-ml-platform', category: 'AI Services' },
    { title: 'AI Quantum Computing', description: 'Next-gen quantum solutions', url: '/ai-quantum-computing', category: 'AI Services' },
    
    // IT Services
    { title: 'Cloud Migration', description: 'Migrate to the cloud seamlessly', url: '/cloud-migration', category: 'IT Services', popular: true },
    { title: 'Cybersecurity', description: 'Enterprise-grade security solutions', url: '/cybersecurity', category: 'IT Services', popular: true },
    { title: 'IT Infrastructure', description: 'Design and implement IT infrastructure', url: '/it-infrastructure', category: 'IT Services' },
    { title: 'IT Support', description: '24/7 IT support services', url: '/it-support', category: 'IT Services' },
    { title: 'Custom Development', description: 'Custom software development', url: '/custom-development', category: 'IT Services' },
    { title: 'DevOps & CI/CD', description: 'Streamlined development processes', url: '/devops-cicd', category: 'IT Services' },
    
    // Micro SAAS
    { title: 'AI Project Manager Pro', description: 'Intelligent project management', url: '/ai-project-manager', category: 'Micro SAAS', popular: true },
    { title: 'AI Social Media Manager', description: 'Automate your social media', url: '/ai-social-media-manager', category: 'Micro SAAS' },
    { title: 'AI Analytics Dashboard', description: 'Get insights from your data', url: '/ai-analytics-dashboard', category: 'Micro SAAS', popular: true },
    
    // Company Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', url: '/about', category: 'Company' },
    { title: 'Contact', description: 'Get in touch with us', url: '/contact', category: 'Company' },
    { title: 'Team', description: 'Meet our team', url: '/team', category: 'Company' },
    { title: 'Careers', description: 'Join our team', url: '/careers', category: 'Company' },
    { title: 'Pricing', description: 'View our pricing plans', url: '/pricing', category: 'Company' },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8)); // Limit to 8 results
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
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
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center px-4 pt-16 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="inline-block w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle">
          <div className="bg-white px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search services, pages, or features..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {query && (
            <div className="border-t border-gray-200 max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div ref={resultsRef} className="py-2">
                  {results.map((result, index) => (
                    <a
                      key={result.url}
                      href={result.url}
                      className={`flex items-center px-6 py-3 hover:bg-gray-50 transition-colors ${
                        index === selectedIndex ? 'bg-cyan-50 border-r-4 border-cyan-500' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-medium text-gray-900">{result.title}</h3>
                          {result.popular && (
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{result.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {result.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <Search className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          )}

          {!query && (
            <div className="border-t border-gray-200 px-6 py-8">
              <div className="text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Search Zion Tech Group</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Find AI services, IT solutions, and more
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Popular searches</h4>
                <div className="flex flex-wrap gap-2">
                  {['AI Automation', 'Cloud Migration', 'Cybersecurity', 'AI Analytics', 'IT Support'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;