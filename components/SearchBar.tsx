import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

  componentDidCatch(error, errorInfo) {
import React, { useState, useRef, useEffect } from 'react';

import Link from 'next / link';




interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  href: string;
  icon?: React.ReactNode;
}

interface SearchBarProps {
  theme?: 'dark' | 'light';
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  theme = 'dark', 
  onSearch, 
  placeholder = "Search revolutionary services...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution 2044',
      description: 'Next-generation AI consciousness with emotional intelligence',
      type: 'AI Service',
      category: 'Artificial Intelligence',
      href: '/ai-consciousness-evolution-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '2',
      title: 'Quantum Neural Networks 2044',
      description: 'Quantum-powered AI with consciousness integration',
      type: 'Quantum Service',
      category: 'Quantum Computing',
      href: '/quantum-neural-network-platform-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '3',
      title: 'Space Resource Intelligence 2044',
      description: 'AI-powered space exploration with consciousness',
      type: 'Space Service',
      category: 'Space Technology',
      href: '/space-resource-intelligence-2044',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter mock results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);





  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {





        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
        
        
            <X className="w-4 h-4" />

      <AnimatePresence>
                      <ArrowRight className={`w-5 h-5 ${
      </AnimatePresence>

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;



export default SearchBar;
