'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
}

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData: SearchResult[] = [
    // Main Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group and our mission', href: '/about', category: 'Company' },
    { title: 'Our Services', description: 'Comprehensive AI and IT solutions', href: '/services', category: 'Services' },
    { title: 'AI Services', description: 'Advanced artificial intelligence solutions', href: '/ai-services', category: 'Services' },
    { title: 'IT Services', description: 'Complete IT infrastructure and support', href: '/it-services', category: 'Services' },
    { title: 'Micro SAAS', description: 'AI-powered micro SaaS solutions', href: '/micro-saas', category: 'Services' },
    { title: 'Pricing', description: 'Flexible pricing plans for all business sizes', href: '/pricing', category: 'Company' },
    { title: 'Contact Us', description: 'Get in touch with our team', href: '/contact', category: 'Company' },
    { title: 'Our Team', description: 'Meet our expert team members', href: '/team', category: 'Company' },
    { title: 'Careers', description: 'Join our growing team', href: '/careers', category: 'Company' },
    { title: 'Case Studies', description: 'Success stories from our clients', href: '/case-studies', category: 'Resources' },
    { title: 'Blog', description: 'Latest insights and industry news', href: '/blog', category: 'Resources' },
    
    // AI Services
    { title: 'AI Project Manager Pro', description: 'Intelligent project management with AI', href: '/ai-project-manager', category: 'AI Services' },
    { title: 'AI Analytics Dashboard', description: 'AI-powered business intelligence', href: '/ai-analytics-dashboard', category: 'AI Services' },
    { title: 'AI Content Studio', description: 'Complete content creation suite', href: '/ai-content-studio', category: 'AI Services' },
    { title: 'AI Customer Support Bot', description: '24/7 AI customer support', href: '/ai-customer-support-bot', category: 'AI Services' },
    { title: 'AI Email Marketing Suite', description: 'Intelligent email campaigns', href: '/ai-email-marketing', category: 'AI Services' },
    { title: 'AI Social Media Manager', description: 'Automated social media management', href: '/ai-social-media-manager', category: 'AI Services' },
    { title: 'AI Financial Advisor', description: 'Personalized financial planning', href: '/ai-financial-advisor', category: 'AI Services' },
    { title: 'AI Workflow Automation', description: 'Visual workflow builder', href: '/ai-workflow-automation', category: 'AI Services' },
    
    // IT Services
    { title: 'Cloud Migration', description: 'Seamless cloud migration services', href: '/cloud-migration', category: 'IT Services' },
    { title: 'Cybersecurity', description: 'Comprehensive security solutions', href: '/cybersecurity', category: 'IT Services' },
    { title: 'IT Infrastructure', description: 'Scalable infrastructure design', href: '/it-infrastructure', category: 'IT Services' },
    { title: 'IT Support', description: '24/7 technical support', href: '/it-support', category: 'IT Services' },
    
    // Support
    { title: 'Documentation', description: 'Technical documentation and guides', href: '/docs', category: 'Support' },
    { title: 'API Reference', description: 'Complete API documentation', href: '/api-docs', category: 'Support' },
    { title: 'Support Center', description: 'Get help and support', href: '/support', category: 'Support' },
    { title: 'System Status', description: 'Real-time system health status', href: '/status', category: 'Support' },
    { title: 'System Health', description: 'Detailed system performance metrics', href: '/health', category: 'Support' },
    
    // Legal
    { title: 'Privacy Policy', description: 'How we protect your data', href: '/privacy', category: 'Legal' },
    { title: 'Terms of Service', description: 'Terms and conditions', href: '/terms', category: 'Legal' },
    { title: 'Cookie Policy', description: 'Cookie usage and management', href: '/cookies', category: 'Legal' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults.slice(0, 8));
      setIsLoading(false);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      window.location.href = results[0].href;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search services, pages, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-10 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {isOpen && (query.length > 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-gray-600 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400 mx-auto"></div>
              <p className="mt-2">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.href}
                  className="block px-4 py-3 hover:bg-slate-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{result.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{result.description}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {result.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 2 ? (
            <div className="p-4 text-center text-gray-400">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords or check spelling</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;