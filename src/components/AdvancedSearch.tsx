<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from 'react'; import { motion, AnimatePresence  } from 'framer-motion'; import { ; Search,; X,; Filter,; TrendingUp,; Clock,; Star,; MapPin,; Users,; Building,; Code,; Shield,; Brain,; Zap,; ArrowRight,; ChevronDown,; CheckCircle,; Sparkles,; Target,; Globe,; Cpu,; Database,; Network,; Smartphone,; Server,; Lock,; Eye,; Settings,; BookOpen,; FileText,; Video,; Microphone,; Camera,; Lightbulb,; Rocket,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; MessageCircle,; BarChart,; Users2,; Palette,; Heart,; Share2,; Download,; ExternalLink;  } from 'lucide-react'; ; interface SearchResult { "id": "string; "title": string; "description": string; "type": 'service' | 'page' | 'article' | 'case-study' | 'tool'; "category": string; "tags": string[]; "url": string; "relevance": number; "lastUpdated": Dat e; "views": number; "rating": number;   "}; interface SearchFilter { "type": "string[]; "category": string[]; "tags": string[]; "dateRange": 'all' | 'week' | 'month' | 'year'; "sortBy": 'relevance' | 'date' | 'popularity' | 'rating';   "}; export function AdvancedSearch("props": "any) {; const [isOpen", setIsOpen] = useState<any>(false); const [query, setQuery] = useState<any>(''); const [results, setResults] = useState<SearchResult[]>([]); const [suggestions, setSuggestions] = useState<string[]>([]); const [filters, setFilters] = useState<SearchFilter>({; "type": "[]",; "category": "[]",; "tags": "[]",; "dateRange": 'all',; "sortBy": 'relevance'; }); const [isSearching, setIsSearching] = useState<any>(false); const [showFilters, setShowFilters] = useState<any>(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [popularSearches, setPopularSearches] = useState<string[]>([]); ; const searchInputRef = useRef<HTMLInputElement>(null); const searchTimeoutRef = useRef<NodeJS.Timeout>(); ;
;
</NodeJS>;
</HTMLInputElement>;
</string>;
</string>;
</any>;
</any>;
</SearchFilter>;
</string>;
</SearchResult>;
</any>;
</any>
import React, { useState, useEffect, useRef, useCallback } from 'react'; import { motion, AnimatePresence  } from 'framer-motion'; import { ; Search,; X,; Filter,; TrendingUp,; Clock,; Star,; MapPin,; Users,; Building,; Code,; Shield,; Brain,; Zap,; ArrowRight,; ChevronDown,; CheckCircle,; Sparkles,; Target,; Globe,; Cpu,; Database,; Network,; Smartphone,; Server,; Lock,; Eye,; Settings,; BookOpen,; FileText,; Video,; Microphone,; Camera,; Lightbulb,; Rocket,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; MessageCircle,; BarChart,; Users2,; Palette,; Heart,; Share2,; Download,; ExternalLink;  } from 'lucide-react'; ; interface SearchResult { id: string; title: string; description: string; type: 'service' | 'page' | 'article' | 'case-study' | 'tool'; category: string; tags: string[]; url: string; relevance: number; lastUpdated: Dat e; views: number; rating: number;   }; interface SearchFilter { type: string[]; category: string[]; tags: string[]; dateRange: 'all' | 'week' | 'month' | 'year'; sortBy: 'relevance' | 'date' | 'popularity' | 'rating';   }; export function AdvancedSearch(props: any) {; const [isOpen, setIsOpen] = useState<any>(false); const [query, setQuery] = useState<any>(''); const [results, setResults] = useState<SearchResult[]>([]); const [suggestions, setSuggestions] = useState<string[]>([]); const [filters, setFilters] = useState<SearchFilter>({; type: [],; category: [],; tags: [],; dateRange: 'all',; sortBy: 'relevance'; }
    ); const [isSearching, setIsSearching] = useState<any>(false); const [showFilters, setShowFilters] = useState<any>(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [popularSearches, setPopularSearches] = useState<string[]>([]); ; const searchInputRef = useRef<HTMLInputElement>(null); const searchTimeoutRef = useRef<NodeJS.Timeout>(); ;
</NodeJS>
</string>
</string>
</any>
</any>
</SearchFilter>
</string>
</SearchResult>
</any>
</any>
import React,{ useState,useEffect,useRef,useCallback } from &apos;react&apos;; import { motion,AnimatePresence } from &apos;framer-motion&apos;; import { ; Search,; X,; Filter,; TrendingUp,; Clock,; Star,; MapPin,; Users,; Building,; Code,; Shield,; Brain,; Zap,; ArrowRight,; ChevronDown,; CheckCircle,; Sparkles,; Target,; Globe,; Cpu,; Database,; Network,; Smartphone,; Server,; Lock,; Eye,; Settings,; BookOpen,; FileText,; Video,; Microphone,; Camera,; Lightbulb,; Rocket,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; MessageCircle,; BarChart,; Users2,; Palette,; Heart,; Share2,; Download,; ExternalLink} from &apos;lucide-react&apos;; ; interface SearchResult { id: string; title: string; description: string; type: &apos;service&apos; | &apos;page&apos; | &apos;article&apos; | &apos;case-study&apos; | &apos;tool&apos;; category: string; tags: string[]; url: string; relevance: number; lastUpdated: Dat e; views: number; rating: number}; interface SearchFilter { type: string[]; category: string[]; tags: string[]; dateRange: &apos;all&apos; | &apos;week&apos; | &apos;month&apos; | &apos;year&apos;; sortBy: &apos;relevance&apos; | &apos;date&apos; | &apos;popularity&apos; | &apos;rating&apos;}; export function AdvancedSearch($1) {; const [isOpen,setIsOpen] = useState<any>(false); const [query,setQuery] = useState<any>(&quot;); const [results,setResults] = useState<SearchResult[]>([]); const [suggestions,setSuggestions] = useState<string[]>([]); const [filters,setFilters] = useState<SearchFilter>({; type: [],; category: [],; tags: [],; dateRange: &apos;all&apos;,sortBy: &apos;relevance&apos;}); const [isSearching,setIsSearching] = useState<any>(false); const [showFilters,setShowFilters] = useState<any>(false); const [recentSearches,setRecentSearches] = useState<string[]>([]); const [popularSearches,setPopularSearches] = useState<string[]>([]); ; const searchInputRef = useRef<HTMLInputElement>(null); const searchTimeoutRef = useRef<NodeJS.Timeout>(); ; </NodeJS> </HTMLInputElement> </string> </any> </SearchFilter> </string> </SearchResult> </any> </any>;&apos;;&apos;;
const React,{ useState,useEffect,useRef,useCallback } from "react"; import { motion,AnimatePresence } from "framer-motion"; import { ; Search,; X,; Filter,; TrendingUp,; Clock,; Star,; MapPin,; Users,; Building,; Code,; Shield,; Brain,; Zap,; ArrowRight,; ChevronDown,; CheckCircle,; Sparkles,; Target,; Globe,; Cpu,; Database,; Network,; Smartphone,; Server,; Lock,; Eye,; Settings,; BookOpen,; FileText,; Video,; Microphone,; Camera,; Lightbulb,; Rocket,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; MessageCircle,; BarChart,; Users2,; Palette,; Heart,; Share2,; Download,; ExternalLink} from "lucide-react"; ; interface SearchResult { id: string; title: string; description: string; type:"
  "service" | "page" | "article" | "case-study" | "tool"; category: string; tags: string[]; url: string; relevance: number; lastUpdated: Dat e; views: number; rating: number}; interface SearchFilter { type: string[]; category: string[]; tags: string[]; dateRange:"
  "all" | "week" | "month" | "year"; sortBy:"
  "relevance" | "date" | "popularity" | "rating"}; export function AdvancedSearch($1) {; const [isOpen,setIsOpen] = useState<any>(false); const [query,setQuery] = useState<any>("
  "); const [results,setResults] = useState<SearchResult[]>([]); const [suggestions,setSuggestions] = useState<string[]>([]); const [filters,setFilters] = useState<SearchFilter>({; type: [],; category: [],; tags: [],; dateRange:"
  "all",sortBy:"
  "relevance"}); const [isSearching,setIsSearching] = useState<any>(false); const [showFilters,setShowFilters] = useState<any>(false); const [recentSearches,setRecentSearches] = useState<string[]>([]); const [popularSearches,setPopularSearches] = useState<string[]>([]); ; const searchInputRef = useRef<HTMLInputElement>(null); const searchTimeoutRef = useRef<NodeJS.Timeout>(); ; </NodeJS> </HTMLInputElement> </string> </any> </SearchFilter> </string> </SearchResult> </any> </any>;"
  ";"
  ";'"'"
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect,useRef,useCallback } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { ; Search,; X,; Filter,; TrendingUp,; Clock,; Star,; MapPin,; Users,; Building,; Code,; Shield,; Brain,; Zap,; ArrowRight,; ChevronDown,; CheckCircle,; Sparkles,; Target,; Globe,; Cpu,; Database,; Network,; Smartphone,; Server,; Lock,; Eye,; Settings,; BookOpen,; FileText,; Video,; Microphone,; Camera,; Lightbulb,; Rocket,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; MessageCircle,; BarChart,; Users2,; Palette,; Heart,; Share2,; Download,; ExternalLink} from 'lucide-react'; ; interface SearchResult { id: string; title: string; description: string; type: 'service' | 'page' | 'article' | 'case-study' | 'tool'; category: string; tags: string[]; url: string; relevance: number; lastUpdated: Dat e; views: number; rating: number}; interface SearchFilter { type: string[]; category: string[]; tags: string[]; dateRange: 'all' | 'week' | 'month' | 'year'; sortBy: 'relevance' | 'date' | 'popularity' | 'rating'}; export function AdvancedSearch(_) {; const [isOpen,setIsOpen] = useState<any>(false); const [query,setQuery] = useState<any>("); const [results,setResults] = useState<SearchResult[]>([]); const [suggestions,setSuggestions] = useState<string[]>([]); const [filters,setFilters] = useState<SearchFilter>({; type: [],; category: [],; tags: [],; dateRange: 'all,sortBy: 'relevance'}); const [isSearching,setIsSearching] = useState<any>(false); const [showFilters,setShowFilters] = useState<any>(false); const [recentSearches,setRecentSearches] = useState<string[]>([]); const [popularSearches,setPopularSearches] = useState<string[]>([]); ; const searchInputRef = useRef<HTMLInputElement>(null); const searchTimeoutRef = useRef<NodeJS.Timeout>(); ; </NodeJS> </HTMLInputElement> </string> </any> </SearchFilter> </string> </SearchResult> </any> </any>;';';
=======
import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, Filter, TrendingUp, Clock, Star } from 'lucide-react';
const mockSuggestions = [
    { id: '1', text: 'AI Development Services', type: 'service', relevance: 95, category: 'AI & ML' },
    { id: '2', text: 'Cloud Infrastructure', type: 'service', relevance: 88, category: 'DevOps' },
    { id: '3', text: 'React Native Apps', type: 'technology', relevance: 82, category: 'Mobile' },
    { id: '4', text: 'Blockchain Solutions', type: 'trending', relevance: 90, category: 'Web3' },
    { id: '5', text: 'Data Analytics', type: 'service', relevance: 85, category: 'Data Science' },
    { id: '6', text: 'Cybersecurity', type: 'trending', relevance: 92, category: 'Security' },
    { id: '7', text: 'Machine Learning', type: 'technology', relevance: 87, category: 'AI & ML' },
    { id: '8', text: 'Web Development', type: 'service', relevance: 80, category: 'Frontend' },
];
export function AdvancedSearch() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);
    const categories = ['AI & ML', 'DevOps', 'Mobile', 'Web3', 'Data Science', 'Security', 'Frontend', 'Backend'];
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    useEffect(() => {
        if (query.trim()) {
            const filtered = mockSuggestions
                .filter(suggestion => suggestion.text.toLowerCase().includes(query.toLowerCase()) ||
                suggestion.category?.toLowerCase().includes(query.toLowerCase()))
                .sort((a, b) => b.relevance - a.relevance)
                .slice(0, 8);
            setSuggestions(filtered);
            setShowSuggestions(true);
        }
        else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [query]);
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.text);
        setShowSuggestions(false);
        // Here you would typically trigger a search
    };
    const toggleFilter = (category) => {
        setSelectedFilters(prev => prev.includes(category)
            ? prev.filter(f => f !== category)
            : [...prev, category]);
    };
    const clearFilters = () => {
        setSelectedFilters([]);
    };
    const getSuggestionIcon = (type) => {
        switch (type) {
            case 'service': return <Star className="w-4 h-4 text-zion-cyan"/>;
            case 'technology': return <Sparkles className="w-4 h-4 text-zion-purple"/>;
            case 'trending': return <TrendingUp className="w-4 h-4 text-zion-emerald"/>;
            case 'recent': return <Clock className="w-4 h-4 text-zion-gold"/>;
            default: return <Search className="w-4 h-4 text-zion-slate"/>;
        }
    };
    const getSuggestionColor = (type) => {
        switch (type) {
            case 'service': return 'bg-zion-cyan/10 border-zion-cyan/20';
            case 'technology': return 'bg-zion-purple/10 border-zion-purple/20';
            case 'trending': return 'bg-zion-emerald/10 border-zion-emerald/20';
            case 'recent': return 'bg-zion-gold/10 border-zion-gold/20';
            default: return 'bg-zion-slate/10 border-zion-slate/20';
        }
    };
    return (<div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zion-slate-light"/>
        </div>
        
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} placeholder="Search for services, technologies, or solutions..." className="block w-full pl-10 pr-12 py-3 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-200 text-zion-slate placeholder-zion-slate-light"/>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-zion-slate-light hover:text-zion-slate transition-colors" title="Advanced Filters">
            <Filter className="h-5 w-5"/>
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isExpanded && (<div className="mt-4 p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-zion-slate">Filter by Category</h3>
            {selectedFilters.length > 0 && (<button onClick={clearFilters} className="text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Clear All
              </button>)}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (<button key={category} onClick={() => toggleFilter(category)} className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${selectedFilters.includes(category)
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'bg-transparent text-zion-slate border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'}`}>
                {category}
              </button>))}
          </div>
        </div>)}

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (<div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {suggestions.map(suggestion => (<button key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className="w-full p-3 text-left hover:bg-zion-slate-light/10 transition-colors border-b border-zion-slate-light last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getSuggestionColor(suggestion.type)}`}>
                  {getSuggestionIcon(suggestion.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zion-slate">{suggestion.text}</span>
                    <span className="text-xs text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded">
                      {suggestion.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-zion-slate-light">
                      {suggestion.type.charAt(0).toUpperCase() + suggestion.type.slice(1)}
                    </span>
                    <span className="text-xs text-zion-emerald">
                      {suggestion.relevance}% relevant
                    </span>
                  </div>
                </div>
              </div>
            </button>))}
          
          <div className="p-3 bg-zion-slate-light/5 border-t border-zion-slate-light">
            <div className="flex items-center gap-2 text-xs text-zion-slate-light">
              <Sparkles className="w-3 h-3"/>
              AI-powered suggestions based on your query
            </div>
          </div>
        </div>)}

      {/* No Results */}
      {showSuggestions && query.trim() && suggestions.length === 0 && (<div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50 text-center">
          <div className="text-zion-slate-light mb-2">No results found for "{query}"</div>
          <div className="text-xs text-zion-slate-light">
            Try different keywords or browse our categories
          </div>
        </div>)}
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
