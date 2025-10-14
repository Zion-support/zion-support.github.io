'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  BrainIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ServerIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Solutions - Zion Tech Group",
    "description": "Advanced AI solutions for businesses. Machine learning, computer vision, natural language processing, and AI automation services.",
    "url": "https://ziontechgroup.com/ai-solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
}
}