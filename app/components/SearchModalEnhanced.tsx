import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Code, Brain, Shield, BarChart3, Cloud, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  icon: React.ReactNode;
}

interface SearchModalEnhancedProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModalEnhanced: React.FC<SearchModalEnhancedProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allResults: SearchResult[] = [
    // AI Services
    { title: 'AI Analytics Dashboard', description: 'Advanced AI-powered analytics and insights', path: '/ai-analytics-dashboard-pro', category: 'AI Services', icon: <BarChart3 className="w-4 h-4" /> },
    { title: 'AI Code Assistant', description: 'AI-powered code generation and review', path: '/zion-ai-code-assistant', category: 'AI Services', icon: <Code className="w-4 h-4" /> },
    { title: 'AI Marketing Automation', description: 'Automated marketing campaigns with AI', path: '/zion-ai-marketing-automation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Content Generation', description: 'Generate content with artificial intelligence', path: '/ai-content-generation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Customer Service', description: 'AI-powered customer support solutions', path: '/ai-customer-service', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    
    // IT Services
    { title: 'Cloud Infrastructure', description: 'Scalable cloud computing solutions', path: '/cloud-infrastructure', category: 'IT Services', icon: <Cloud className="w-4 h-4" /> },
    { title: 'Cybersecurity Solutions', description: 'Advanced security protection', path: '/cybersecurity-solutions', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Web Development', description: 'Custom web applications and sites', path: '/web-development', category: 'IT Services', icon: <Code className="w-4 h-4" /> },
    { title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Code className="w-4 h-4" /> },
    
    // Micro SAAS
    { title: 'Zion Analytics Pro', description: 'Business intelligence platform', path: '/zion-analytics-pro', category: 'Micro SAAS', icon: <BarChart3 className="w-4 h-4" /> },
    { title: 'Zion Security Shield', description: 'Advanced cybersecurity protection', path: '/zion-security-shield', category: 'Micro SAAS', icon: <Shield className="w-4 h-4" /> },
    { title: 'Zion Cloud Vault', description: 'Secure cloud storage solution', path: '/zion-cloud-vault', category: 'Micro SAAS', icon: <Cloud className="w-4 h-4" /> },
    { title: 'Zion Quantum Analytics', description: 'Quantum-powered data analytics', path: '/zion-quantum-analytics', category: 'Micro SAAS', icon: <BarChart3 className="w-4 h-4" /> },
    { title: 'Zion Blockchain Security', description: 'DeFi and smart contract security', path: '/zion-blockchain-security', category: 'Micro SAAS', icon: <Shield className="w-4 h-4" /> },
    
    // 5G Solutions
    { title: '5G Data Analytics', description: 'High-speed data processing with 5G', path: '/5g-data-analytics', category: '5G Solutions', icon: <BarChart3 className="w-4 h-4" /> },
    { title: '5G Edge Computing', description: 'Edge computing with 5G networks', path: '/5g-edge-computing', category: '5G Solutions', icon: <Zap className="w-4 h-4" /> },
    
    // Company Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <Brain className="w-4 h-4" /> },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <Brain className="w-4 h-4" /> },
    { title: 'Pricing', description: 'View our service pricing', path: '/pricing', category: 'Company', icon: <BarChart3 className="w-4 h-4" /> },
    { title: 'Case Studies', description: 'Success stories and case studies', path: '/case-studies', category: 'Company', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = allResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
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
        window.location.href = results[selectedIndex].path;
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-gray-700">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, solutions, or pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-6 text-center text-gray-400">
                <Search className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <p>Start typing to search our services and solutions</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center text-gray-400">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                <p>No results found for "{query}"</p>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={onClose}
                    className={`flex items-center p-4 rounded-lg transition-all duration-200 group ${
                      index === selectedIndex
                        ? 'bg-cyan-500/20 border border-cyan-500/30'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mr-4 group-hover:scale-110 transition-transform">
                      {result.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-400 truncate">
                        {result.description}
                      </p>
                      <span className="inline-block mt-1 px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700 text-xs text-gray-400 text-center">
            Use ↑↓ to navigate, Enter to select, Esc to close
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModalEnhanced;