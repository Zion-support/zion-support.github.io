import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Search,;
  Filter,;
  X,;
  ChevronDown,;
  Check,;
  Star,;
  Tag,;
  MapPin,;
  Calendar,;
  Users,;
  Zap,;
  Brain,;
  Cloud,;
  Shield,;
  Globe;
} from "lucide-react"
interface SearchResult {;
  id: string,title: string,description: string,category: string,tags: string[]
  location?: string,;
  date?: string,;
  rating?: number,;
  type: 'service' | 'article' | 'team' | 'technology'
};

interface FilterOption {;
  id: string,label: string,value: string,count: number;
};

interface SearchAndFilterSystemProps {;
  data: SearchResult[]
  onResultsChange?: (results: SearchResult[]) => void;
  placeholder?: string,;
  showFilters?: boolean;
};

export const SearchAndFilterSystem: React.FC<SearchAndFilterSystemProps> = ({;
  data;
  onResultsChange,;
  placeholder = "Search services, articles, team members...",;
  showFilters = true;
}) => {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [isSearchFocused, setIsSearchFocused] = useState(false),;
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set()),;
  const [showFilterPanel, setShowFilterPanel] = useState(false),;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'rating' | 'name'>('relevance'),;

  //[^;]*
  const filterOptions = useMemo(() => {;
    const categories = data.reduce((acc, item) => {;
      acc[item.category] = (acc[item.category] || 0) + 1,
      return acc,;
    }, {} as Record<string, number>),;

    const types = data.reduce((acc, item) => {;
      acc[item.type] = (acc[item.type] || 0) + 1,
      return acc,;
    }, {} as Record<string, number>),;

    return {;
      categories: Object.entries(categories).map(([key, count]) => ({;
        id: key,label: key.charAt(0).toUpperCase() + key.slice(1),value: key;
        count;
      })),;
      types: Object.entries(types).map(([key, count]) => ({;
        id: key,label: key.charAt(0).toUpperCase() + key.slice(1),value: key;
        count;
      }));
    },;
  }, [data]),;

  //[^;]*
  const filteredResults = useMemo(() => {;
    let results = data.filter(item => {;
      //[^;]*
      const matchesSearch = searchQuery === '' ||;
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;

      //[^;]*
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory

      //[^;]*
      const matchesFilters = activeFilters.size === 0 ||;
        Array.from(activeFilters).some(filter =>;
          item.tags.includes(filter) ||;
          item.type === filter ||;
          item.category === filter;
        ),;

      return matchesSearch && matchesCategory && matchesFilters,;&& matchesCategory && matchesFilters,; matchesCategory && matchesFilters,
    }),;

    //[^;]*
    switch (sortBy) {;
      case 'date':;
        results = results.sort((a, b) => {;
          if (!a.date || !b.date) return 0,
          return new Date(b.date).getTime() - new Date(a.date).getTime(),;
        }),;
        break,;
      case 'rating':;
        results = results.sort((a, b) => {;
          if (!a.rating || !b.rating) return 0,
          return b.rating - a.rating,;
        }),;
        break,;
      case 'name':;
        results = results.sort((a, b) => a.title.localeCompare(b.title)),;
        break,;
      default: //[^;]*
        //[^;]*
        break;
    };

    return results;
  }, [data, searchQuery, selectedCategory, activeFilters, sortBy]),;

  //[^;]*
  useEffect(() => {;
    onResultsChange?.(filteredResults),;
  }, [filteredResults, onResultsChange]),;

  //[^;]*
  const toggleFilter = (filterId: string) => {;
    const newFilters = new Set(activeFilters)
    if (newFilters.has(filterId)) {;
      newFilters.delete(filterId)
    } else {;
      newFilters.add(filterId),;
    };
    setActiveFilters(newFilters),;
  },;

  //[^;]*
  const clearAllFilters = () => {;
    setActiveFilters(new Set()),;
    setSelectedCategory('all'),;
    setSortBy('relevance'),;
  },;

  //[^;]*
  const getTypeIcon = (type: string) => {;
    switch (type) {;
      case 'service': return <[^>]*/>
      case 'article': return <Tag className="w-4 h-4" />,;
      case 'team': return <Users className="w-4 h-4" />,;
      case 'technology': return <Brain className="w-4 h-4" />,;
      default: return <[^>]*/>
    };
  };
  //[^;]*
  const getCategoryColor = (category: string) => {;
    const colors = {;
      'ai': 'text-purple-400cloud': 'text-blue-400security': 'text-red-400development': 'text-green-400consulting': 'text-yellow-400digital-transformation': 'text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'text-zinc-400',
  },;

  return (
    <div className="w-full max-w-6xl mx-auto">;
      {/* Search Bar */};
      <div className="relative mb-6">;
        <div className="relative">;
          <[^>]*/>
          <input;
            type="text"
            value={searchQuery};
            onChange={(e) => setSearchQuery(e.target.value)};
            onFocus={() => setIsSearchFocused(true)};
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)};
            placeholder={placeholder};
            className="[^"]*"
          />;
          {searchQuery && (;&& (; (
            <button;
              onClick={() => setSearchQuery('')};
              className="[^"]*"
            >;
              <[^>]*/>
            </[^>]*>
          )};
        </[^>]*>

        {/* Search Suggestions */};
        <AnimatePresence>;
          {isSearchFocused && searchQuery && (;&& searchQuery && (; searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }};
              animate={{ opacity: 1, y: 0 }};
              exit={{ opacity: 0, y: -10 }};
              className="[^"]*"
            >;
              {filteredResults.slice(0, 5).map((result) => (;
                <div;
                  key={result.id};
                  className="[^"]*"
                >;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan">;
                      {getTypeIcon(result.type)};
                    </[^>]*>
                    <div className="flex-1 min-w-0">;
                      <div className="text-sm font-medium text-white">{result.title}</[^>]*>
                      <div className="text-xs text-zinc-400 truncate">{result.description}</[^>]*>
                    </[^>]*>
                    <span className={`text-xs px-2 py-1 rounded-full bg-zinc-800/50 ${getCategoryColor(result.category)}`}>;
                      {result.category};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Filters and Sort */};
      {showFilters && (;&& (; (
        <div className="flex flex-wrap items-center gap-4 mb-6">;
          {/* Category Filter */};
          <div className="relative">;
            <select;
              value={selectedCategory};
              onChange={(e) => setSelectedCategory(e.target.value)};
              className="[^"]*"
            >;
              <option value="all">All Categories</[^>]*>
              {filterOptions.categories.map((category) => (;
                <option key={category.id} value={category.value}>;
                  {category.label} ({category.count});
                </[^>]*>
              ))};
            </[^>]*>
            <[^>]*/>
          </[^>]*>

          {/* Sort Options */};
          <div className="relative">;
            <select;
              value={sortBy};
              onChange={(e) => setSortBy(e.target.value as any)};
              className="[^"]*"
            >;
              <option value="relevance">Relevance</[^>]*>
              <option value="date">Date</[^>]*>
              <option value="rating">Rating</[^>]*>
              <option value="name">Name</[^>]*>
            </[^>]*>
            <[^>]*/>
          </[^>]*>

          {/* Filter Toggle */};
          <button;
            onClick={() => setShowFilterPanel(!showFilterPanel)};
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
              showFilterPanel;
                ? 'bg-zion-cyan text-white'
                : 'bg-zinc-900/50 text-zinc-300 hover:text-white border border-zinc-700/50'
            }`};
          >;
            <[^>]*/>
            Filters;
            {activeFilters.size > 0 && (;&& (; (
              <span className="ml-1 px-2 py-0.5 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                {activeFilters.size};
              </[^>]*>
            )};
          </[^>]*>

          {/* Clear Filters */};
          {activeFilters.size > 0 && (;&& (; (
            <button;
              onClick={clearAllFilters};
              className="[^"]*"
            >;
              Clear all;
            </[^>]*>
          )};
        </[^>]*>
      )};

      {/* Filter Panel */};
      <AnimatePresence>;
        {showFilterPanel && (;&& (; (
          <motion.div
            initial={{ height: 0, opacity: 0 }};
            animate={{ height: 'auto', opacity: 1 }};
            exit={{ height: 0, opacity: 0 }};
            transition={{ duration: 0.3, ease: 'easeOut' }};
            className="[^"]*"
          >;
            <div className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">;
              <h3 className="text-sm font-medium text-white mb-4">Advanced Filters</[^>]*>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
                {/* Type Filters */};
                <div>;
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Type</[^>]*>
                  <div className="space-y-2">;
                    {filterOptions.types.map((type) => (;
                      <label key={type.id} className="flex items-center gap-2 cursor-pointer">;
                        <input;
                          type="checkbox"
                          checked={activeFilters.has(type.value)};
                          onChange={() => toggleFilter(type.value)};
                          className="[^"]*"
                        />;
                        <span className="text-sm text-zinc-300">{type.label}</[^>]*>
                        <span className="text-xs text-zinc-500">({type.count})</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Tag Filters */};
                <div>;
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Popular Tags</[^>]*>
                  <div className="flex flex-wrap gap-2">;
                    {['AICloud', 'SecurityDevOps', 'Digital TransformationMachine Learning'].map((tag) => (;
                      <button;
                        key={tag};
                        onClick={() => toggleFilter(tag.toLowerCase())};
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${;
                          activeFilters.has(tag.toLowerCase());
                            ? 'bg-zion-cyan text-white'
                            : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50'
                        }`};
                      >;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Location Filters */};
                <div>;
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Location</[^>]*>
                  <div className="space-y-2">;
                    {['GlobalNorth America', 'EuropeAsia Pacific'].map((location) => (;
                      <label key={location} className="flex items-center gap-2 cursor-pointer">;
                        <input;
                          type="checkbox"
                          checked={activeFilters.has(location.toLowerCase())};
                          onChange={() => toggleFilter(location.toLowerCase())};
                          className="[^"]*"
                        />;
                        <span className="text-sm text-zinc-300">{location}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Results Count */};
      <div className="mb-4 text-sm text-zinc-400">;
        Showing {filteredResults.length} of {data.length} results;
        {searchQuery && ` for "${searchQuery}"`};&& ` for "${searchQuery}"`}; ` for "${searchQuery}"`}
      </[^>]*>

      {/* Search Results */};
      <div className="space-y-4">;
        {filteredResults.map((result) => (;
          <motion.div
            key={result.id};
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            className="[^"]*"
          >;
            <div className="flex items-start gap-4">;
              <div className="flex-shrink-0 p-3 bg-zinc-800/50 rounded-lg text-zion-cyan group-hover:bg-zion-cyan/20 transition-colors">;
                {getTypeIcon(result.type)};
              </[^>]*>

              <div className="flex-1 min-w-0">;
                <div className="flex items-start justify-between mb-2">;
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">;
                    {result.title};
                  </[^>]*>
                  <div className="flex items-center gap-2">;
                    {result.rating && (;&& (; (
                      <div className="flex items-center gap-1 text-yellow-400">;
                        <[^>]*/>
                        <span className="text-sm">{result.rating}</[^>]*>
                      </[^>]*>
                    )};
                    <span className={`text-xs px-2 py-1 rounded-full bg-zinc-800/50 ${getCategoryColor(result.category)}`}>;
                      {result.category};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <p className="text-zinc-300 mb-3 line-clamp-2">{result.description}</[^>]*>

                <div className="flex items-center gap-4 text-sm text-zinc-400">;
                  {result.location && (;&& (; (
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      {result.location};
                    </[^>]*>
                  )};
                  {result.date && (;&& (; (
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      {result.date};
                    </[^>]*>
                  )};
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    {result.tags.slice(0, 3).join(', ')};
                    {result.tags.length > 3 && ` +${result.tags.length - 3} more`};&& ` +${result.tags.length - 3} more`}; ` +${result.tags.length - 3} more`}
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        ))};
      </[^>]*>

      {/* No Results */};
      {filteredResults.length === 0 && (;&& (; (
        <motion.div
          initial={{ opacity: 0 }};
          animate={{ opacity: 1 }};
          className="[^"]*"
        >;
          <[^>]*/>
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No results found</[^>]*>
          <p className="text-zinc-400 mb-4">;
            Try adjusting your search terms or filters;
          </[^>]*>
          <button;
            onClick={clearAllFilters};
            className="[^"]*"
          >;
            Clear all filters;
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
};