import React, { useState, useMemo, useCallback } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  icon?: React.ReactNode;
}

interface SearchComponentProps {
  placeholder?: string;
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search services, solutions, and more...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchData: SearchResult[] = useMemo(() => [
    // AI Services
    { title: 'AI Analytics Dashboard', description: 'Advanced AI-powered business intelligence platform', path: '/ai-analytics-dashboard-pro', category: 'AI Services' },
    { title: 'AI Content Generator', description: 'Generate high-quality content with AI', path: '/ai-content-generator', category: 'AI Services' },
    { title: 'AI Cybersecurity Suite', description: 'Comprehensive AI-powered security solutions', path: '/ai-cybersecurity-suite-pro', category: 'AI Services' },
    { title: 'AI Customer Support', description: 'Intelligent customer support automation', path: '/ai-customer-support-chatbot', category: 'AI Services' },
    { title: 'AI Code Assistant', description: 'AI-powered coding assistance and optimization', path: '/ai-code-assistant-pro', category: 'AI Services' },
    
    // IT Services
    { title: 'Cloud Infrastructure', description: 'Scalable cloud computing solutions', path: '/cloud-infrastructure', category: 'IT Services' },
    { title: 'Cybersecurity Solutions', description: 'Advanced security protection services', path: '/cybersecurity-solutions', category: 'IT Services' },
    { title: 'Web Development', description: 'Custom web application development', path: '/web-development', category: 'IT Services' },
    { title: 'Mobile Development', description: 'Native and cross-platform mobile apps', path: '/mobile-development', category: 'IT Services' },
    
    // Micro SAAS
    { title: 'Zion Analytics Pro', description: 'AI-powered business intelligence platform', path: '/zion-analytics-pro', category: 'Micro SAAS' },
    { title: 'Zion Security Shield', description: 'Comprehensive security monitoring solution', path: '/zion-security-shield', category: 'Micro SAAS' },
    { title: 'Zion Cloud Vault', description: 'Secure cloud storage and backup solution', path: '/zion-cloud-vault', category: 'Micro SAAS' },
    
    // 5G Solutions
    { title: '5G Data Analytics', description: 'Advanced analytics for 5G networks', path: '/5g-data-analytics', category: '5G Solutions' },
    { title: '5G Edge Computing', description: 'Edge computing solutions for 5G', path: '/5g-edge-computing', category: '5G Solutions' },
    { title: '5G IoT Solutions', description: 'Internet of Things solutions for 5G', path: '/5g-iot-solutions', category: '5G Solutions' },
    
    // General Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company' },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company' },
    { title: 'Careers', description: 'Join our innovative team', path: '/careers', category: 'Company' },
    { title: 'Blog', description: 'Latest insights and updates', path: '/blog', category: 'Company' }
  ], []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return searchData.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 8); // Limit to 8 results
  }, [query, searchData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  }, []);

  const handleResultClick = useCallback(() => {
    setQuery('');
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="p-2">
              {filteredResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  onClick={handleResultClick}
                  className="block p-3 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {result.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords or check our main navigation</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
