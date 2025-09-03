import: React { useState, useEffect, useRef } from,
  react' import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from;';
  'lucide-react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: { Link } from;';
  'react-router-dom'  interface: SearchResult {';
   id: string;
   title: string;
   description: string;

   category?: string;
   tags?: string[]} interface: SearchComponentProps {
   className?: string;
   placeholder?: string;
   showFilters?: boolean;


