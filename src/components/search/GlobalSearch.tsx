import React, { useState, useEffect, useRef } from 'react'; import { Link, useNavigate  } from 'react-router-dom'; import { Search, X, ArrowRight, Zap, Brain, Server, Target  } from 'lucide-react'; import { motion, AnimatePresence  } from 'framer-motion'; ; interface SearchResult {; id: string; title: string; description: string; url: string; category: 'service' | 'solution' | 'page' | 'resource'; icon: React.ComponentType<any>; relevance: number; }; export function GlobalSearch() {; const [isOpen, setIsOpen] = useState(false); const [query, setQuery] = useState(''); const [results, setResults] = useState<SearchResult[]>([]); const [isLoading, setIsLoading] = useState(false); const [selectedIndex, setSelectedIndex] = useState(-1); const searchRef = useRef<HTMLDivElement>(null); const inputRef = useRef<HTMLInputElement>(null); const navigate = useNavigate(); ;

   id: string;

   title: string;
   description: string;
   url: string;
   category: &apos;service&apos; | &apos;solution&apos; | &apos;page&apos; | &apos;resource';
   ico,n: React.ComponentType&apos;}&apos;<any>
   relevance: number} export function GlobalSearch() {} const [isOpen, setIsOpen] = useState(false) const;const [query, setQuery] = useState(&apos;&apos;)&apos;&apos; const [results, setResults] = useState<SearchResult[]>([]) const [isLoading, setIsLoading] = useState(false) const [selectedIndex, setSelectedIndex] = useState(-1) const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) const;const;const navigate = useNavigate() ';
&apos';










