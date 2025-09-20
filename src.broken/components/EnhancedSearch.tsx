import { useNavigate  } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
 from 'react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/hooks / useDebounce';
 from 'framer-motion';
import { motion, AnimatePresence  } from 'framer-motion';

  icon?: React.ComponentType < any>}

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchRef = useRef < HTMLDivElement> (null) ;
  const inputRef = useRef < HTMLInputElement> (null) ;
  const navigate = useNavigate () ;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: anyKeyboardEvent) => {
      if(event.key === 'Escape') {
        setIsOpen(false) ;
        setSelectedIndex(-1) ;
      } else if(event.key === 'ArrowDown') {
        event.preventDefault () ;
        setSelectedIndex(prev =>
          prev < results.length-1 ? prev + 1 : prev) ;
      } else if(event.key === 'ArrowUp') {
        event.preventDefault () ;
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1) ;
      } else if(event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault () ;
    const searchResults = searchData
      .filter(item => {
        const matchesQuery = item.title.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.description.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.tags.some(tag => tag.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ) ;

        const matchesFilters = filters.type.length === 0 || filters.type.includes(item.type) &&;
                              filters.category.length === 0 || filters.category.includes(item.category) &&;
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes (tag) ) ;

      }
    };

    document.addEventListener('mousedown', handleClickOutside);
      setRecentSearches(updated);
      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
