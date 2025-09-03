import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const searchData: SearchResult[] = [
  {
    title: "Micro SaaS Products",
    description: "120+ innovative micro SaaS solutions including Cloud Cost Guard, Smart Invoice Processing, and AI-Powered Code Review",
    url: "/micro-saas",
    category: "Services"
  },
  {
    title: "AI Services",
    description: "80+ advanced AI services including healthcare diagnostics, cybersecurity threat detection, and smart manufacturing",
    url: "/ai-services",
    category: "Services"
  },
  {
    title: "IT Services",
    description: "80+ comprehensive IT solutions including enterprise integration, high-performance computing, and IoT platforms",
    url: "/it-services",
    category: "Services"
  },
  {
    title: "All Services",
    description: "Complete overview of all our 280+ innovative technology solutions and services",
    url: "/services",
    category: "Services"
  },
  {
    title: "Services Catalog",
    description: "Detailed catalog of all our micro SaaS products, AI services, and IT solutions",
    url: "/services-catalog",
    category: "Services"
  },
  {
    title: "Pricing",
    description: "Transparent pricing for all our services and solutions",
    url: "/pricing",
    category: "Business"
  },
  {
    title: "About Us",
    description: "Learn about Zion Tech Group's mission, vision, and team",
    url: "/about",
    category: "Company"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our experts for project discussions and quotes",
    url: "/contact",
    category: "Support"
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about our services and solutions",
    url: "/faq",
    category: "Support"
  }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
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

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className="block px-4 py-3 hover:bg-slate-700/50 transition-colors border-b border-white/10 last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-medium">{result.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{result.description}</p>
                </div>
                <span className="ml-2 px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">
                  {result.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length > 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 p-4">
          <p className="text-slate-300 text-center">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}