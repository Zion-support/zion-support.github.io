import React, { useState, useEffect, useRef } from 'react' import { Link, useNavigate } from 'react-router-dom'; ;import { Search, X, ArrowRight, Zap, Brain, Server, Target } from 'lucide-react'; ;import { motion, AnimatePresence } from 'framer-motion' ; ;interface SearchResult {
   id: string;
   title: string;
   description: string;
   url: string;
   category: 'service' | 'solution' | 'page' | 'resource";
   icon: React.ComponentType<any></an></any>
   relevance: number} export function GlobalSearch() { const [isOpen, setIsOpen] = useState(false) const [query, setQuery] = useState(") const [results, setResults] = useState<SearchResult[]></SearchResul></SearchResult>([]) const [isLoading, setIsLoading] = useState(false) const [selectedIndex, setSelectedIndex] = useState(-1) const searchRef = useRef<HTMLDivElement></HTMLDivElemen></HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement></HTMLInputElemen></HTMLInputElement>(null) const navigate = useNavigate() ';
