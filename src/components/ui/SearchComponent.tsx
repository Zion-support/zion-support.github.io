<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap  } from 'lucide-react'; import { motion, AnimatePresence  } from 'framer-motion'; import { Link  } from 'react-router-dom'; ; interface SearchResult {; id: string; title: string; description: string; url: string; type: 'service' | 'solution' | 'page' | 'article'; category?: string; tags?: string[]; }; interface SearchComponentProps {; className?: string; placeholder?: string; showFilters?: boolean; onSearch?: (query: string, filters: SearchFilters) => void; }; interface SearchFilters {; type: string[]; category: string[]; tags: string[]; }; export const SearchComponent: React.FC<SearchComponentProps> = ({; className = '',; placeholder = 'Search for AI services, solutions, and more...',; showFilters = true,; onSearch; }) => {; const [query, setQuery] = useState(''); const [isOpen, setIsOpen] = useState(false); const [results, setResults] = useState<SearchResult[]>([]); const [filters, setFilters] = useState<SearchFilters>({; type: [],; category: [],; tags: []; }); const [showFiltersPanel, setShowFiltersPanel] = useState(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [trendingSearches, setTrendingSearches] = useState<string[]>([]); ; const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); ;
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap    } from 'lucide-react'; import { motion, AnimatePresence    } from 'framer-motion'; import { Link    } from 'react-router-dom'; ; interface SearchResult { id: string; title: string; description: string; url: string; type: 'service' | 'solution' | 'page' | 'article'; category?: string; tags?: string[];  }; interface SearchComponentProps { className?: string; placeholder?: string; showFilters?: boolean; onSearch?: (query: string, filters: SearchFilters) => void; }; interface SearchFilters { type: string[]; category: string[]; tags: string[];  }; export const SearchComponent: React.FC<SearchComponentProps> = ({; className = '',; placeholder = 'Search for AI services, solutions, and more...',; showFilters = true,; onSearch; }) => {; const [query, setQuery] = useState(''); const [isOpen, setIsOpen] = useState(false); const [results, setResults] = useState<SearchResult[]>([]); const [filters, setFilters] = useState<SearchFilters>({; type: [],; category: [],; tags: []; }); const [showFiltersPanel, setShowFiltersPanel] = useState(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [trendingSearches, setTrendingSearches] = useState<string[]>([]); ; const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); ;
=======
<<<<<<< HEAD

import React, { useState, useEffect, useRef } from 'react'; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react'; import { motion, AnimatePresence } from 'framer-motion'; import { Link } from 'react-router-dom'; ; interface SearchResult {; id: string; title: string; description: string; url: string; type: 'service' | 'solution' | 'page' | 'article'; category?: string; tags?: string[]; }; interface SearchComponentProps {; className?: string; placeholder?: string; showFilters?: boolean; onSearch?: (query: string, filters: SearchFilters) => void; }; interface SearchFilters {; type: string[]; category: string[]; tags: string[]; }; export const SearchComponent: React.FC<SearchComponentProps> = ({; className = '',; placeholder = 'Search for AI services, solutions, and more...',; showFilters = true,; onSearch; }) => {; const [query, setQuery] = useState(''); const [isOpen, setIsOpen] = useState(false); const [results, setResults] = useState<SearchResult[]>([]); const [filters, setFilters] = useState<SearchFilters>({; type: [],; category: [],; tags: []; }); const [showFiltersPanel, setShowFiltersPanel] = useState(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [trendingSearches, setTrendingSearches] = useState<string[]>([]); ; const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); ;'';,"});,"})
;,"});,"})
import React, { useState, useEffect, useRef } from 'react'; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap    } from 'lucide-react'; import { motion, AnimatePresence    } from 'framer-motion'; import { Link    } from 'react-router-dom'; ; interface SearchResult { id: string; title: string; description: string; url: string; type: 'service' | 'solution' | 'page' | 'article'; category?: string; tags?: string[];  }; interface SearchComponentProps { className?: string; placeholder?: string; showFilters?: boolean; onSearch?: (query: string, filters: SearchFilters) => void; }; interface SearchFilters { type: string[]; category: string[]; tags: string[];  }; export const SearchComponent: React.FC<SearchComponentProps> = ({; className = '',; placeholder = 'Search for AI services, solutions, and more...',; showFilters = true,; onSearch; }) => {; const [query, setQuery] = useState(''); const [isOpen, setIsOpen] = useState(false); const [results, setResults] = useState<SearchResult[]>([]); const [filters, setFilters] = useState<SearchFilters>({; type: [],; category: [],; tags: []; }); const [showFiltersPanel, setShowFiltersPanel] = useState(false); const [recentSearches, setRecentSearches] = useState<string[]>([]); const [trendingSearches, setTrendingSearches] = useState<string[]>([]); ; const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); ;,"});,"})
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff;,"});,"})
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react' import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react' import { motion, AnimatePresence } from 'framer-motion' import { Link } from 'react-router-dom'  interface SearchResult { id: string;
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react' import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react' import { motion, AnimatePresence } from 'framer-motion' import { Link } from 'react-router-dom'  interface SearchResult {;
=======
<<<<<<< HEAD
import React, {useState, useEffect, useRef } from 'react' ;
import {Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react' import {motion, AnimatePresence } from 'framer-motion' import {Link } from 'react-router-dom'  interface SearchResult {;
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from &apos;react&apos; import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from &apos;lucide-react&apos; import { motion, AnimatePresence } from &apos;framer-motion&apos; import { Link } from &apos;react-router-dom&apos;  interface SearchResult {
>>>>>>> main
>>>>>>> main
   id: string;
>>>>>>> main
   title: string;
   description: string;
<<<<<<< HEAD
   ur,
    l: string;""
   typ,
    e: 'service' | 'solution' | 'page' | 'article';
=======
   url: string;
   typ,e: &apos;service&apos; | &apos;solution&apos; | &apos;page&apos; | &apos;article';
=======
import React, { useState, useEffect, useRef } from 'react' import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react' import { motion, AnimatePresence } from 'framer-motion' import { Link }  from 'react-router-dom';interface SearchResult {;
   id: string;
   title: string;
   description: string;""
   url: string;""
   type: 'service' | 'solution' | 'page' | 'article';
>>>>>>> main
>>>>>>> main
   category?: string;
<<<<<<< HEAD
   tags?: string[]  } interface SearchComponentProps {
   className?: string;
   placeholder?: string;
   showFilters?: boolean;
   onSearch?: (query: string, filters: SearchFilters) => void} interface SearchFilters { type: string[]
   category: string[]
   tags: string[]  } export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ''
=======
<<<<<<< HEAD
   tags?: string[]} interface SearchComponentProps {;
   className?: string;
   placeholder?: string;
   showFilters?: boolean;
   onSearch?: (query: string, filters: SearchFilters) => void} interface SearchFilters {;
   type: string[];
   category: string[];
<<<<<<< HEAD
   tags: string[];
} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';;
=======
   tags: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = ', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState(') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';
=======
   tags?: string[]} interface SearchComponentProps {className?: string;
   placeholder?: string;
   showFilters?: boolean;
<<<<<<< HEAD
   onSearch?: (query: string, filters: SearchFilters) => void} interface SearchFilters {type: string[];
   category: string[]
   tags: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({className='', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => {const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';'
=======
   onSearch?: (query: string, filters: SearchFilters) => void} interface SearchFilters {
   type: string[];
<<<<<<< HEAD
   categor,
    y: string[]
   tag,
    s: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';
'
=======
<<<<<<< HEAD
   category: string[]""
   tags: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult []" >([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string []" >([]) const [trendingSearches, setTrendingSearches] = useState<string []" >([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';'"
""
}
=======
<<<<<<< HEAD
   category: string[]
<<<<<<< HEAD
   tag,s: string[]}&apos;&apos; export const SearchComponent: React.FC<SearchComponentProps> = ({ className = &apos;&apos;, placeholder = &apos;Search for AI services, solutions, and more...&apos;, showFilters = true, onSearch }) => {&apos;}&apos; const [query, setQuery] = useState(&apos;&apos;)&apos;&apos; const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<;<;<HTMLInputElement>(null) ';
&apos;'
=======
   tags: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult[]>([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string[]>([]) const [trendingSearches, setTrendingSearches] = useState<string[]>([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) ';'
=======
   category: string[]"
   tags: string[]} export const SearchComponent: React.FC<SearchComponentProps> = ({ className = '', placeholder = 'Search for AI services, solutions, and more...', showFilters = true, onSearch }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [results, setResults] = useState<SearchResult []" >([]) const [filters, setFilters] = useState<SearchFilters>({ type: [], category: [], tags: [] }) const [showFiltersPanel, setShowFiltersPanel] = useState(false) const [recentSearches, setRecentSearches] = useState<string []" >([]) const [trendingSearches, setTrendingSearches] = useState<string []" >([])  const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) 
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
