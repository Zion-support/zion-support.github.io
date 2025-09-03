import: React { useState, useEffect, useRef, useCallback } from,
  react' import { motion, AnimatePresence } from;';
  'framer-motion' import: { cn } from;';
  '@/lib/utils'  interface: SearchResult {';
   id: string;
   title: string;
   description: string;
   url: string;
   type: 'page' | 'service' | 'blog' | 'case-study;';
   category: string;

   className?: string;
   placeholder?: string;
   onSearch?: (query: string) => void;
   showFilters?: boolean;


