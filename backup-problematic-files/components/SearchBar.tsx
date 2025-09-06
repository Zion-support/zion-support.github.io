import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = '',
) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim() {
      onSearch(query.trim();
    };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={'relative ' + className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => {}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );

export default SearchBar;
import React { useState, useRef, useEffect } from 'react',;
import Link from 'next/link',;
interface SearchResult {,;
  titl: e: string,;
  descriptio: n: string,;
  ur: l: string,;
  typ: e: 'service' | 'page' | 'category';
,;
const: SearchBar: React.FC = () => {,;
  const [query, setQuery] = useState(''),;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [isOpen, setIsOpen] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const searchRef = useRef<HTMLDivElement>(null),;
  const inputRef = useRef<HTMLInputElement>(null),;
  // Mock search data - in a real app, this would come from an API,;
  const: searchData: SearchResult[] = [,;
    {,;
      titl: e: 'Micro SaaS Products',;
      descriptio: n: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',;
      ur: l: '/micro-saas',;
      typ: e: 'category';
    },;
    {,;
      titl: e: 'AI Services',;
      descriptio: n: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',;
      ur: l: '/ai-services',;
      typ: e: 'category';
    },;
    {,;
      titl: e: 'IT Services',;
      descriptio: n: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',;
      ur: l: '/it-services',;
      typ: e: 'category';
    },;
    {,;
      titl: e: 'Cloud Cost Guard',;
      descriptio: n: 'FinOps Assistant for anomaly detection and cost optimization',;
      ur: l: '/services',;
      typ: e: 'service';
    },;
    {,;
      titl: e: 'Contact Us',;
      descriptio: n: 'Get in touch with our experts for consultation and quotes',;
      ur: l: '/contact',;
      typ: e: 'page';
    },;
    {,;
      titl: e: 'Pricing',;
      descriptio: n: 'View our transparent pricing for all services',;
      ur: l: '/pricing',;
      typ: e: 'page';
    }
  ],;
  const handleSearch = async (searchQuer: y: string) => {,;
    if (!searchQuery.trim() {,;
      setResults([]),;
      setIsOpen(false),;
      return;
    },;
    setIsLoading(true),;
    // Simulate API delay,;
    await new Promise(resolve => setTimeout(resolve, 300),;
    const filteredResults = searchData.filter(item =>,;
      item.title.toLowerCase().includes(searchQuery.toLowerCase() ||,;
      item.description.toLowerCase().includes(searchQuery.toLowerCase(),;
    ),;
    setResults(filteredResults),;
    setIsOpen(true),;
    setIsLoading(false);
  },;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {,;
    const value = e.target.value,;
    setQuery(value),;
    handleSearch(value);
  },;
  const handleResultClick = () => {,;
    setIsOpen(false),;
    setQuery('');
  },;
  const handleKeyDown = (e: React.KeyboardEvent) => {,;
    if (e.key = = 'Escape') {,;
      setIsOpen(false),;
      inputRef.current?.blur();
    },;
  useEffect() => {,;
    const handleClickOutside = (even: t: MouseEvent) => {,;
      if (searchRef.current && !searchRef.current.contains(event.target as Node) {,;
        setIsOpen(false);
      }
,;
export default SearchBar;
