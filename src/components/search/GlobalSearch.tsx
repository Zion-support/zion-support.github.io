import React, { useState, useEffect, useRef } from 'react' import { Link, useNavigate } from 'react-router-dom' import { ArrowRight, Brain, Common, File, Search, Server, Target, User, X, Zap } from 'lucide-react'; import { motion, AnimatePresence } from 'framer-motion'  interface SearchResult {
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


   id: string;
   title: string;
   description: string;
   url: string;
   category: 'service' | 'solution' | 'page' | 'resource';
   icon: React.ComponentType<unknown>
   relevance: number} export function GlobalSearch() { const [isOpen, setIsOpen] = useState(false) const [query, setQuery] = useState('') const [results, setResults] = useState<SearchResult[]>([]) const [isLoading, setIsLoading] = useState(false) const [selectedIndex, setSelectedIndex] = useState(-1) const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) const navigate = useNavigate() ';
