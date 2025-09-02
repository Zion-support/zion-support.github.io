import React, { useState, useEffect, useRef } from &apos;react&apos; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from &apos;lucide-react&apos; import { motion, AnimatePresence } from &apos;framer-motion&apos; import { Link } from &apos;react-router-dom&apos;  interface SearchResult {
   id: string;
   title: string;
   description: string;
   url: string;
   typ,e: &apos;service&apos; | &apos;solution&apos; | &apos;page&apos; | &apos;article';
   category?: string;
   tags?: string[]} interface SearchComponentProps {
   className?: string;
   placeholder?: string;
   showFilters?: boolean;
   onSearch?: (query: string, filters: SearchFilters) => void} interface SearchFilters {
   type: string[];
   category: string[]
   tag,s: string[]}&apos;&apos; export const SearchComponent: React.FC<SearchComponentProps> = ({ className = &apos;&apos;, placeholder = &apos;Search for AI services, solutions, and more...&apos;, showFilters = true, onSearch }) => {&apos;}&apos; const [query, setQuery] = useState(&apos;&apos;)&apos;&apos; const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<;<;<HTMLInputElement>(null) ';
&apos;'