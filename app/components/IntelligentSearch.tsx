/**
 * Intelligent Search with AI
 * Context-aware search with autocomplete and suggestions
 * Priority: HIGH
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';

type SearchResult = {
  title: string;
  description: string;
  url: string;
  category: string;
  popular?: boolean;
};

const POPULAR_SEARCHES = [
  'AI Business Advisor',
  'Financial Planning',
  'Healthcare AI',
  'HR Automation',
  'Fraud Detection',
  'Custom Development'
];

const SEARCH_INDEX: SearchResult[] = [
  { title: 'AI Business Advisor', description: 'Strategic AI consulting', url: '/ai-business-advisor', category: 'Consulting', popular: true },
  { title: 'AI Financial Services', description: 'Complete financial AI suite', url: '/ai-financial-services', category: 'Finance', popular: true },
  { title: 'AI Healthcare Solutions', description: 'Medical AI diagnostics', url: '/ai-healthcare', category: 'Healthcare', popular: true },
  { title: 'AI HR Assistant', description: 'HR automation tools', url: '/ai-hr', category: 'HR' },
  { title: 'AI Fraud Detection', description: 'Real-time fraud prevention', url: '/ai-fraud-detection', category: 'Security' },
  { title: 'AI Image Recognition', description: 'Computer vision solutions', url: '/ai-image-recognition', category: 'AI' },
  { title: 'AI Form Builder', description: 'No-code form creation', url: '/ai-form-builder', category: 'Tools' },
  { title: 'Custom AI Development', description: 'Bespoke AI solutions', url: '/contact', category: 'Services' }
];

export default function IntelligentSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    // Load recent searches
    try {
      const saved = JSON.parse(localStorage.getItem('zion_recent_searches') || '[]');
      setRecentSearches(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    // Fuzzy search
    const q = query.toLowerCase();
    const matched = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ).slice(0, 6);

    setResults(matched);
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    // Save to recent
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('zion_recent_searches', JSON.stringify(updated));

    // Navigate to first result or search page
    const matched = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (matched.length > 0) {
      window.location.href = matched[0].url;
    } else {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
      } else {
        handleSearch(query);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: '0 16px',
        transition: 'all 0.2s',
        boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.3)' : 'none'
      }}>
        <Search size={20} color="#666" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search AI solutions, services..."
          style={{
            flex: 1,
            padding: '14px',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '15px',
            outline: 'none'
          }}
        />
        {query && (
          <button onClick={() => { setQuery(''); inputRef.current?.focus(); }}>
            <X size={18} color="#666" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (results.length > 0 || query.length === 0) && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '8px',
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '12px',
          overflow: 'hidden',
          zIndex: 1000,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        }}>
          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div style={{ padding: '12px' }}>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                textTransform: 'uppercase', 
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                Recent Searches
              </div>
              {recentSearches.map((search, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(search)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 12px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Search size={14} style={{ marginRight: '8px', display: 'inline', color: '#666' }} />
                  {search}
                </button>
              ))}
            </div>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <div style={{ padding: '8px' }}>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                textTransform: 'uppercase', 
                marginBottom: '8px',
                letterSpacing: '1px',
                padding: '0 8px'
              }}>
                Results
              </div>
              {results.map((result, i) => (
                <a
                  key={i}
                  href={result.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: selectedIndex === i ? '#333' : 'transparent',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'background 0.1s'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}>
                    {result.popular ? <TrendingUp size={18} /> : <Search size={18} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>
                      {result.title}
                    </div>
                    <div style={{ color: '#888', fontSize: '12px' }}>
                      {result.description}
                    </div>
                  </div>
                  <ArrowRight size={16} color="#666" />
                </a>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {query.length === 0 && (
            <div style={{ padding: '12px', borderTop: '1px solid #333' }}>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                textTransform: 'uppercase', 
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                Popular Searches
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {POPULAR_SEARCHES.map((term, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearch(term)}
                    style={{
                      padding: '6px 12px',
                      background: '#333',
                      border: 'none',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
