'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, Star, CheckCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  excerpt: string;
  url: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    improvement?: string;
    satisfaction?: string;
    timeframe?: string;
  };
  isNew?: boolean;
  tags: string[];
}

const NewContent2025Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

>>>>>>> cursor/create-and-deploy-new-content-d764

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

>>>>>>> cursor/create-and-deploy-new-content-d764
      </div>
    </div>
  );
};

export default NewContent2025Showcase;