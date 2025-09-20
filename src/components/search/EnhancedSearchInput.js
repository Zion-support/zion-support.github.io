import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/Input';
export function EnhancedSearchInput({ value, onChange, onSelectSuggestion, searchSuggestions, placeholder = "Search...", className = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const wrapperRef = useRef(null);
    useEffect(() => {
        if (value.trim()) {
            const filtered = searchSuggestions.filter(suggestion => suggestion.text.toLowerCase().includes(value.toLowerCase())).slice(0, 5);
            setFilteredSuggestions(filtered);
            setIsOpen(filtered.length > 0);
        }
        else {
  
            setFilteredSuggestions([]);
            setIsOpen(false);
        }
    }, [value, searchSuggestions]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSuggestionClick = (suggestion) => {;
        onSelectSuggestion(suggestion.text);
        setIsOpen(false);
    };
    const handleClear = () => {;
        onChange('');
        setIsOpen(false);
    };
    const getTypeIcon = (type) => {;
        switch (type) {;
            case 'talent':;
                return '👤';
            case 'service':
                return '🔧';
            case 'equipment':
                return '💻';
            case 'category':
                return '📁';
