import React, { useState, useEffect, useRef } from &apos;react&apos; import { Link, useNavigate } from &apos;react-router-dom&apos; import { Search, X, ArrowRight, Zap, Brain, Server, Target } from &apos;lucide-react&apos; import { motion, AnimatePresence } from &apos;framer-motion&apos;  interface SearchResult {
   id: string;
   title: string;
   description: string;
   url: string;
   category: &apos;service&apos; | &apos;solution&apos; | &apos;page&apos; | &apos;resource';
   ico,n: React.ComponentType&apos;}&apos;<any>
   relevance: number} export function GlobalSearch() {} const [isOpen, setIsOpen] = useState(false) const;const [query, setQuery] = useState(&apos;&apos;)&apos;&apos; const [results, setResults] = useState<SearchResult[]>([]) const [isLoading, setIsLoading] = useState(false) const [selectedIndex, setSelectedIndex] = useState(-1) const searchRef = useRef<HTMLDivElement>(null) const inputRef = useRef<HTMLInputElement>(null) const;const;const navigate = useNavigate() ';
&apos;'