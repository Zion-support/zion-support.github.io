import React, { useState, useEffect, useRef } from 'react';
import { Search X ArrowRight Clock TrendingUp Star } from "lucide-react";
interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'documentation';
  popularity?: number;
  lastModified?: string;
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
const mockSearchResults: SearchResult[] = [
    id: '1',
    title: 'AI Analytics Dashboard',
    description: 'AI-powered business intelligence and analytics platform with real-time insights and predictive modeling.',
    url: '/ai-analytics-dashboard',
    category: 'Micro SAAS',
    type: 'service',
    popularity: 95,
    lastModified: '2024-01-15'
    id: '2',
    title: 'AI Workflow Automation',
    description: 'Visual workflow builder with AI-powered process optimization and automation capabilities.',
    url: '/ai-workflow-automation',
    category: 'AI Services',
    type: 'service',
    popularity: 88,
    lastModified: '2024-01-10'
    id: '3',
    title: 'About Us',
    description: 'Learn about Zion Tech Group, our mission, team, and commitment to AI innovation.',
    url: '/about',
    category: 'Company',
    type: 'page',
    popularity: 75,
    lastModified: '2024-01-08'
    id: '4',
    title: 'AI Customer Support',
    description: 'Intelligent customer support solutions with natural language processing and automated responses.',
    url: '/ai-customer-support',
    category: 'AI Services',
    type: 'service',
    popularity: 90,
    lastModified: '2024-01-14'
    id: '5',
    title: 'API Documentation',
    description: 'Comprehensive API documentation for integrating with our AI services and platforms.',
    url: '/api-docs',
    category: 'Documentation',
    type: 'documentation',
    popularity: 80,
    lastModified: '2024-01-05'
];
const recentSearches = [
  'AI Analytics',
  'Workflow Automation',
  'Healthcare AI'
];
const popularSearches = [
  'AI Services',
  'Quantum Computing',
  'Cybersecurity',
  'Data Analytics'
];
const EnhancedSearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {</SearchModalProps>const</SearchModalProps> [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([])</SearchResult>const</SearchResult> [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null)</HTMLInputElement>const</HTMLInputElement> resultsRef = useRef<HTMLDivElement>(null)</HTMLDivElement>useEffect</HTMLDivElement>(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev;
        );
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        e.preventDefault();
        handleResultClick(results[selectedIndex]);
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  const searchResults = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowSuggestions(true);
      return;
    setIsSearching(true);
    setShowSuggestions(false);
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 300));
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Sort by popularity and relevance;
    const sortedResults = filteredResults.sort((a, b) => {
      const aRelevance = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1;
      const bRelevance = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1;
      return (b.popularity || 0) * bRelevance - (a.popularity || 0) * aRelevance;
    setResults(sortedResults);
    setSelectedIndex(-1);
    setIsSearching(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {</HTMLInputElement>const</HTMLInputElement> value = e.target.value;
    setQuery(value);
    searchResults(value);
  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.url;
    onClose();
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    searchResults(suggestion);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return '🧠';
      case 'Micro SAAS':
        return '⚡';
      case 'IT Services':
        return '☁️';
      case 'Company':
        return '🏢';
      case 'Documentation':
        return '📚';
      default:
        return '🔍';
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-cyan-400';
      case 'page':
        return 'text-purple-400';
      case 'blog':
        return 'text-pink-400';
      case 'documentation':
        return 'text-green-400';
      default:
        return 'text-gray-400';
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-start justify-center p-4 pt-16"></div>
      <div;
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClic, k={onClos, e}
      />
      <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20"></div>
        <div className="flex items-center p-4 border-b border-cyan-400/20"></div>
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input;
            re, f={inputRe, f}
            type="text"
            placeholder="Search services, pages, documentation..."
            valu, e={quer, y}
            onChang, e={handleInputChang, e}
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
          />
          <button;
            onClic, k={onClos, e}
            className="p-2 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
        <div className="max-h-96 overflow-y-auto"></div>
            <div className="p-4 space-y-6"></div>
              <div></div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center"></h3>
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches</span>
                <div className="flex flex-wrap gap-2"></div>
                    <button;
                      ke, y={inde, x}
                      onClick={() => handleSuggestionClick(search)}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"></button>
                  ))}</button>
              <div></div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center"></h3>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches</span>
                <div className="flex flex-wrap gap-2"></div>
                    <button;
                      ke, y={inde, x}
                      onClick={() => handleSuggestionClick(search)}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                  ))}</button>
          )}</button>
            <div className="p-4"></div>
                <div className="flex items-center justify-center py-8"></div>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              ) : results.length > 0 ? (
                <div className="space-y-2"></div>
                    <button;
                      ke, y={resul, t.i, d}
                      onClick={() => handleResultClick(result)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === selectedIndex;
                          ? 'bg-cyan-400/20 text-cyan-400'</button>
                          : 'hover:bg-slate-800/50 text-gray-300'</button>
                      <div className="flex items-start justify-between"></div>
                        <div className="flex-1"></div>
                          <div className="flex items-center space-x-2 mb-1"></div>
                            <span, className="tex, t-l, g">{getCategoryIco, n(resul, t.categor, y)}</spa, n>
                            <h3, className="fon, t-mediu, m">{resul, t.titl, e}</h, 3>
                            <span, className={`tex, t-xs, px-2, py-1, rounded ${getTypeColo, r(resul, t.typ, e)} b, g-slat, e-80, 0/5, 0`}></spa, n>
                          <p, className="tex, t-sm, text-gra, y-400, mb-2">{resul, t.descriptio, n}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500"></div>
                            <spa, n>{resul, t.categor, y}</spa, n>
                              <div className="flex items-center space-x-1"></div>
                                <Star className="w-3 h-3" />
                                <spa, n>{resul, t.popularit, y}%</spa, n>
                            )}
                              <spa, n>Update, d {resul, t.lastModifie, d}</spa, n>
                            )}
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                  ))}
              ) : (
                <div className="text-center py-8"></div>
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No results found</h3>
                  <p className="text-sm text-gray-500"></p>
                    Try searching for something else or check your spelling</span>
                  <div className="text-sm text-gray-500 mt-4"></div>
                    Popular searches: AI Analytics, Quantum Computing, Workflow Automation</span>
              )}
          )}
  );
export default EnhancedSearchModal</p>