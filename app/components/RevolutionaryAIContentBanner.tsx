<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  BookOpen, 
  Star,
  CheckCircle,
  Clock,
  Target,
  Zap,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface ContentPreview {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  readTime: string;
  metrics: {
    roi?: string;
    satisfaction?: string;
    projects?: string;
    savings?: string;
    accuracy?: string;
    reduction?: string;
  };
  tags: string[];
  featured: boolean;
  isNew: boolean;
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const RevolutionaryAIContentBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryAIContentBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default RevolutionaryAIContentBanner;
