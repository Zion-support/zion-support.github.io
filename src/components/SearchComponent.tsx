import React, { useState, useRef, useEffect } from "react"; import { _motion, AnimatePresence  } from "framer-motion"; import { _Search, X, Clock, TrendingUp, Star  } from "lucide-react"; interface SearchResult { id: string; title: string; description: string; type: "service" | "page" | "feature"; url: string; icon?: React.ComponentTypeg<div>;   } interface SearchComponentProps { placeholder?: string; onSearch?: (query: string) => void; className?: string; } const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder = "Search services, features, and more...", onSearch, className = "" }) => { const [query, setQuery] = useState(""); const [isOpen, setIsOpen] = useState(false); const [selectedIndex, setSelectedIndex] = useState(-1); const _inputRef = useRef<HTMLInputElement>(null); const _resultsRef = useRef<HTMLDivElement>(null);

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
const features = [];
const services = [];