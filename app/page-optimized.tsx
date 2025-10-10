'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Star, CheckCircle, TrendingUp, Globe, Target, Award } from 'lucide-react';

// Dynamically import heavy components for better performance;
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner');
const ContentCarousel = lazy(() => import('./components/ContentCarousel');
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase');
const ContentStatistics = lazy(() => import('./components/ContentStatistics');
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup');

// Preload critical components;
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render;
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
const preloadComponents = () => {}
    }, 100);
  }
};

// Loading skeleton component;
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"><div className="h-4 bg-gray-200 rounded mb-2"><div className="h-4 bg-gray-200 rounded w-5/6">;
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div><div className="h-4 bg-gray-200 rounded mb-2"></div><div className="h-4 bg-gray-200 rounded w-5/6">;
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';</div>
</div>
export default HomePage;</div>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
const
  ServiceCardSkeleton: React.FC = memo(() => (<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>"
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>"
    <div className="h-4 bg-gray-200 rounded mb-2"></div>"
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>)
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export default HomePage;

export default HomePage;"
