
;
import React, { useState, useRef, useEffect } from 'react' import { motion, AnimatePresence    } from 'framer-motion' import { Clock, Common, File, Search, Star, TrendingUp, User, X } from 'lucide-react'; interface SearchResult { id: string title: string description: string type: 'service' | 'page' | 'feature' url: string icon?: React.ComponentType<unknown>  } interface SearchComponentProps { placeholder?: string onSearch?: (query: string) => void className?: string } const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder = 'Search services, features, and more...', onSearch, className = '' }) => { const [query, setQuery] = useState('') const [isOpen, setIsOpen] = useState(false) const [selectedIndex, setSelectedIndex] = useState(-1) const inputRef = useRef<HTMLInputElement>(null) const resultsRef = useRef<HTMLDivElement>(null
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

)