'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
<<<<<<< HEAD
=======
import { Phone, Mail, MapPin, Clock, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Star, CheckCircle, TrendingUp, Globe, Target, Award } from 'lucide-react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
// Dynamically import heavy components for better performance;
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components;
<<<<<<< HEAD
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render;
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
=======
const preloadComponents = () => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    }, 100);
  }
};

// Loading skeleton component;
<<<<<<< HEAD
const ServiceCardSkeleton: React.FC = memo(() => (
<<<<<<< HEAD
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
<<<<<<< HEAD
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"><div className="h-4 bg-gray-200 rounded mb-2"><div className="h-4 bg-gray-200 rounded w-5/6">));
=======
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div><div className="h-4 bg-gray-200 rounded mb-2"></div><div className="h-4 bg-gray-200 rounded w-5/6">));
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';</div>
</div>
export default HomePage;</div>
=======
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
=======
const,
  ServiceCardSkeleton: React.FC = memo(() => (<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>"
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>"
    <div className="h-4 bg-gray-200 rounded mb-2"></div>"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>)
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';
<<<<<<< HEAD
,
export default HomePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======

export default HomePage;"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
