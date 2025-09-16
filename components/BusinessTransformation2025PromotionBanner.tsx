<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  TrendingUp
  Building2
  DollarSign
  Star,
  ChevronRight,
  X,
  Users,
  Award,
  Clock,
  Sparkles,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const BusinessTransformation2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentMetricsetCurrentMetric] = useState(0);

  const metrics = [
    { icon: DollarSignvalue: '340%'label: 'Revenue 'Increase', 'color: 'text-green-400' },
    { icon: TrendingUpvalue: '65%'label: 'Cost 'Reduction', 'color: 'text-blue-400' },
    { icon: BarChart3value: '280%'label: 'Efficiency 'Gain', 'color: 'text-yellow-400' },
    { icon: Starvalue: '98%'label: 'Customer 'Satisfaction', 'color: 'text-purple-400' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through metrics
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }2500);

    return () => clearInterval(interval);
  }[]);

  const currentMetricData = metrics[currentMetric];

  if (isDismissed || !isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BusinessTransformation2025PromotionBanner: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessTransformation2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BusinessTransformation2025PromotionBanner;