
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, Star, Zap, Brain, Atom, Shield, Rocket } from 'lucide-react';
interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  slug: string;
  relevance: number;
  features?: string[];
  pricing?: {
    starter?: string;
    enterprise?: string
  }
}

interface SearchProps {
  onSearch: (query: string) => void;
  onResultSelect: (result: SearchResult) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean
}

const EnhancedSearch: React.FC<SearchProps> = ({
  onSearch;
  onResultSelect;
  placeholder;

