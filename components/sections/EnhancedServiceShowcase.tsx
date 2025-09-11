<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ExternalLink, Star, Users, TrendingUp, 
  Shield, Zap, Brain, Rocket, Dna, Globe, Cpu,
  CheckCircle, Clock, DollarSign, Target
} from 'lucide-react';
import { innovativeAIServices } from '../../data/innovative-ai-services';
import { quantumSpaceServices } from '../../data/quantum-space-services';
import { enterpriseITServices } from '../../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../../data/comprehensive-it-solutions';
import { marketValidatedServices } from '../../data/market-validated-services';
import { newRealInnovations } from '../../data/new-real-innovations';
import { realMarketServices } from '../../data/real-market-services';
import { realOperationalServices } from '../../data/real-operational-services';
import { realVerifiedServices } from '../../data/real-verified-services';
=======
>>>>>>> main


interface Service {
=======


import Button from '../ui/Button';
interface Service {;
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  market_size: string;
  growth_rate: string;
  variant: string;
  contact_info: {
=======

  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  }
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;

  customers: number;
  rating: number;
  reviews: number;

;
interface EnhancedServiceShowcaseProps {

=======import { 
  Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Zap, Shield, Rocket;
  Brain, Globe, Lock, Code, Database, Cloud
} from 'lucide-react';
import Button from '../ui/Button';
interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  variant: string,
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
},
    realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}
interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean;
  services?: Service[];
  maxServices?: number
}
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  subtitle;
  showFilters = false;
  services = []
  maxServices = 12
}) => {
=======

}) => {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  max_services?: number;
;
const EnhancedServiceShowcase: React.FC < EnhancedServiceShowcaseProps> = ({
  title,
  subtitle,
  show_filters = false,
  services = [],
  max_services = 12, }) => {  title;
  subtitle;
  show_filters = false;
  services = [],
  max_services = 12;
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState < string>('all');
  const [sort_by, setSortBy] = useState < string>('popular');
;
  const categories = [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🧠' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K/month' },
    { id: 'medium', name: '$1K - $5K/month' },
    { id: 'high', name: '$5K - $20K/month' },
    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [

  const filteredServices = useMemo(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' |
                             (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') |service.category.includes('DeFi') |service.category.includes('NFT'))) |
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') |service.category.includes('Autonomous') |service.category.includes('Space') |service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' |
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice
    });
    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
      case 'roi':
        filtered.sort((a, b) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({;
  title,;
  subtitle,;
  showFilters = false,;
  services = [],;
  maxServices = 12,}) => {  title;

  subtitle;
  showFilters = false;
  services = [],;
  maxServices = 12;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'ai', name: 'AI & ML', icon: '🧠' },;
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },;
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },;
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },;
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' },  ];    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices' },;
    { id: 'low', name: 'Under $1K/month' },;
    { id: 'medium', name: '$1K - $5K/month' },;
    { id: 'high', name: '$5K - $20K/month' },;
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [;
    { id: 'popular', name: 'Most Popular' },;
    { id: 'rating', name: 'Highest Rated' },;
    { id: 'roi', name: 'Best ROI' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
  ];
  const filteredServices = useMemo(() => {;
    let filtered = services && services.filter(service => {;
      const matchesCategory =;
        selectedCategory === 'all' ||;
        (selectedCategory === 'ai' &&;
          (service && service.category.includes('AI') ||;
            service && service.category.includes('Machine Learning'))) ||;
        (selectedCategory === 'quantum' &&;
          (service && service.category.includes('Quantum') ||;
            service && service.category.includes('Space'))) ||;
        (selectedCategory === 'blockchain' &&;
          (service && service.category.includes('Blockchain') ||;
            service && service.category.includes('DeFi') ||;
            service && service.category.includes('NFT'))) ||;
        (selectedCategory === 'enterprise' &&;
          (service && service.category.includes('Enterprise') ||;
            service && service.category.includes('IT'))) ||;
        (selectedCategory === 'emerging' &&;
          (service && service.category.includes('Neural') ||;
            service && service.category.includes('Autonomous') ||;
            service && service.category.includes('Space') ||;
            service && service.category.includes('Biotech')));
      const matchesPrice =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;
        (selectedPriceRange === 'premium' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;    });  ];
  const filteredServices = useMemo(() => {;
    const filtered = services && services.filter(service => {;
      const matchesCategory = selectedCategory === 'all' || ;
                             (selectedCategory === 'ai' && (service && service.category.includes('AI') || service && service.category.includes('Machine Learning'))) ||;
                             (selectedCategory === 'quantum' && (service && service.category.includes('Quantum') || service && service.category.includes('Space'))) ||;
                             (selectedCategory === 'blockchain' && (service && service.category.includes('Blockchain') || service && service.category.includes('DeFi') || service && service.category.includes('NFT'))) ||;
                             (selectedCategory === 'enterprise' && (service && service.category.includes('Enterprise') || service && service.category.includes('IT'))) ||;
                             (selectedCategory === 'emerging' && (service && service.category.includes('Neural') || service && service.category.includes('Autonomous') || service && service.category.includes('Space') || service && service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === 'medium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;
                          (selectedPriceRange === 'high' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;
                          (selectedPriceRange === 'premium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;
    });
    // Sort services;
    switch (sortBy) {;
      case 'popular':;
        filtered && filtered.sort((a, b) => (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0));
        break;
      case 'rating':;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;
      case 'roi':;
        filtered && filtered.sort((a, b) => {;
          const aROI = parseInt(a && a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b && b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI;
        });
        break;
      case 'price-low':;
        filtered && filtered.sort(;
          (a, b) =>;
            parseFloat(a && a.price.replace(/[$]/g, '')) -;
            parseFloat(b && b.price.replace(/[$]/g, ''));
        );
        break;
      case 'price-high':;
        filtered && filtered.sort(;
          (a, b) =>;
            parseFloat(b && b.price.replace(/[$]/g, '')) -;
            parseFloat(a && a.price.replace(/[$]/g, ''));
        );
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K / month' },
    { id: 'medium', name: '$1K - $5K / month' },
    { id: 'high', name: '$5K - $20K / month' },
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
;
  const sort_options = [;
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price - low', name: 'Price Low to High' },
    { id: 'price - high', name: 'Price High to Low' },
  ];
;
  const filtered_services = useMemo (() => {
    let filtered = services.filter (service => {
      const matches_category =;
        selected_category === 'all' ||;
        (selected_category === 'ai' &&;
          (service.category.includes ('AI') ||;
            service.category.includes ('Machine Learning'))) ||;
        (selected_category === 'quantum' &&;
          (service.category.includes ('Quantum') ||;
            service.category.includes ('Space'))) ||;
        (selected_category === 'blockchain' &&;
          (service.category.includes ('Blockchain') ||;
            service.category.includes ('DeFi') ||;
            service.category.includes ('NFT'))) ||;
        (selected_category === 'enterprise' &&;
          (service.category.includes ('Enterprise') ||;
            service.category.includes ('IT'))) ||;
        (selected_category === 'emerging' &&;
          (service.category.includes ('Neural') ||;
            service.category.includes ('Autonomous') ||;
            service.category.includes ('Space') ||;
            service.category.includes ('Biotech')));
;
      const matches_price =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 1000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 5000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;
        (selectedPriceRange === 'premium' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 20000);
;
      return matches_category && matches_price;    });  ];
;
  const filtered_services = useMemo (() => {
    const filtered = services.filter (service => {
      const matches_category = selected_category === 'all' ||;
                            (selected_category === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning'))) ||;
                            (selected_category === 'quantum' && (service.category.includes ('Quantum') || service.category.includes ('Space'))) ||;
                            (selected_category === 'blockchain' && (service.category.includes ('Blockchain') || service.category.includes ('DeFi') || service.category.includes ('NFT'))) ||;
                            (selected_category === 'enterprise' && (service.category.includes ('Enterprise') || service.category.includes ('IT'))) ||;
                            (selected_category === 'emerging' && (service.category.includes ('Neural') || service.category.includes ('Autonomous') || service.category.includes ('Space') || service.category.includes ('Biotech')));
;
      const matches_price = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === 'medium' && parse_float (service.price.replace (/[$]/g, '')) >= 1000 && parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
                          (selectedPriceRange === 'high' && parse_float (service.price.replace (/[$]/g, '')) >= 5000 && parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;
                          (selectedPriceRange === 'premium' && parse_float (service.price.replace (/[$]/g, '')) >= 20000);
;
      return matches_category && matches_price;
    });
;
    // Sort services;
    switch (sort_by) {
      case 'popular':;
        filtered.sort ((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':;
        filtered.sort ((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'roi':;
        filtered.sort ((a, b) => {
          const aROI = parse_int (a.roi.match (/\d+/)?.[0] || '0');
          const bROI = parse_int (b.roi.match (/\d+/)?.[0] || '0');
          return bROI - aROI;
        });
        break;
      case 'price - low':;
        filtered.sort (
          (a, b) =>;
            parse_float (a.price.replace (/[$]/g, '')) -;
            parse_float (b.price.replace (/[$]/g, '')));
        break;
      case 'price - high':;
        filtered.sort (
          (a, b) =>;
            parse_float (b.price.replace (/[$]/g, '')) -;
            parse_float (a.price.replace (/[$]/g, '')));
        break;
      default:;
        break;
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI
        });
    return filtered.slice (0, max_services);
  }, [services, selected_category, selectedPriceRange, sort_by, max_services]);
;
  const stats = [;
    {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        break;
      case 'price - low':;
        filtered.sort ((a, b) => parse_float (a.price.replace (/[$]/g, '')) - parse_float (b.price.replace (/[$]/g, '')));
        break;
      case 'price - high':;
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, '')) - parse_float (a.price.replace (/[$]/g, '')));
        break;

    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [;
    {;
      label: 'Total Services',;
      value: services && services.length,;
      icon: Rocket,;
      color: 'text-blue-400',;
    },;
    {;
      label: 'Active Customers',;
      value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0),;
      icon: Users,;
      color: 'text-green-400',;
    },;
    {;
      label: 'Average Rating',;
      value: (;
        services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length;
      ).toFixed(1),;
      icon: Star,;
      color: 'text-yellow-400',;
    },;
    {;
      label: 'Market Growth',;
      value: '300%+',;
      icon: TrendingUp,;
      color: 'text-purple-400',;
    },;  ];
  ];



  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}
        <div className='text-center mb-16'>          <motion&& motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>        });
        break;
      case 'price-low':;
        filtered && filtered.sort((a, b) => parseFloat(a && a.price.replace(/[$]/g, '')) - parseFloat(b && b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':;
        filtered && filtered.sort((a, b) => parseFloat(b && b.price.replace(/[$]/g, '')) - parseFloat(a && a.price.replace(/[$]/g, '')));
        break;
      default: break;
    }
    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [;
    { label: 'Total Services', value: services && services.length, icon: Rocket, color: 'text-blue-400' },;
    { label: 'Active Customers', value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0), icon: Users, color: 'text-green-400' },;
    { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },;    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000),

      return matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)),
        break,
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0')
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0')
          return bROI - aROI
        }),
        break,
    }

    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]),

  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ],

  return (
    <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Zap
  Shield
  Rocket
  Brain
  Globe
  Lock
  Code
  Database
  Cloud;

  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  Lock,
  Code,
  Database,;
  Cloud,;
import Button from '../ui/Button';
interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string;
  }

  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;

  reviews: number;

interface EnhancedServiceShowcaseProps {
  title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];

  maxServices?: number;
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title
  subtitle
  showFilters = false
  services = []
  maxServices = 12,}) => {  title;
  subtitle;
  showFilters = false;
  services = []
  maxServices = 12
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' }
    { id: 'ai', name: 'AI & ML', icon: '🧠' }
    { id: 'quantum', name: 'Quantum', icon: '⚛️' }
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' }
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' }
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' },  ];    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices' }
    { id: 'low', name: 'Under $1K/month' }
    { id: 'medium', name: '$1K - $5K/month' }
    { id: 'high', name: '$5K - $20K/month' }
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' }
    { id: 'rating', name: 'Highest Rated' }
    { id: 'roi', name: 'Best ROI' }
    { id: 'price-low', name: 'Price Low to High' }
    { id: 'price-high', name: 'Price High to Low' }
  ];
  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' &&
          (service.category.includes('AI') |
            service.category.includes('Machine Learning'))) |
        (selectedCategory === 'quantum' &&
          (service.category.includes('Quantum') |
            service.category.includes('Space'))) |
        (selectedCategory === 'blockchain' &&
          (service.category.includes('Blockchain') |
            service.category.includes('DeFi') |
            service.category.includes('NFT'))) |
        (selectedCategory === 'enterprise' &&
          (service.category.includes('Enterprise') |
            service.category.includes('IT'))) |
        (selectedCategory === 'emerging' &&
          (service.category.includes('Neural') |
            service.category.includes('Autonomous') |
            service.category.includes('Space') |
            service.category.includes('Biotech')));
      const matchesPrice =
        selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' &&
          parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
        (selectedPriceRange === 'medium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 1000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
        (selectedPriceRange === 'high' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 5000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
        (selectedPriceRange === 'premium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;    });  ];
  const filteredServices = useMemo(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' |
                             (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') |service.category.includes('DeFi') |service.category.includes('NFT'))) |
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') |service.category.includes('Autonomous') |service.category.includes('Space') |service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' |
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice
    });
    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] |'0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] |'0');
          return bROI - aROI;
        });
        break;
      case 'price-low':
        filtered.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[$]/g, '')) -
            parseFloat(b.price.replace(/[$]/g, ''))
        );
        break;
      case 'price-high':
        filtered.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[$]/g, '')) -
            parseFloat(a.price.replace(/[$]/g, ''))
        );
        break;
      default:
        break;
    }
    return filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [
    {
=======      label: 'Total Services'
      value: services.length
      icon: Rocket
      color: 'text-blue-400'
    }
    {
      label: 'Active Customers'
      value: services.reduce((sum, s) => sum + (s.customers |0), 0)
      icon: Users
      color: 'text-green-400'
    }
    {
      label: 'Average Rating'
      value: (
        services.reduce((sum, s) => sum + (s.rating |0), 0) / services.length
      ).toFixed(1)
      icon: Star
      color: 'text-yellow-400'
    }
    {
      label: 'Market Growth'
      value: '300%+'
      icon: TrendingUp
      color: 'text-purple-400'
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <div className="mb-20">
            <motion.h3
              className="text-2xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ⭐ Featured Services
              </span>
            </motion.h3>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75`} />
                  
                  {/* Service Card */}
                  <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Star className="w-3 h-3 inline mr-1" />
                        POPULAR
                      </div>
                    )}

                    {/* Service Header */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`text-4xl ${service.textColor}`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300">{service.customers}+ users</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300">{service.rating}/5 ({service.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{service.growthRate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{service.trialDays} day trial</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 mt-6">
                        <Link
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Regular Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regularServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Card */}
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 overflow-hidden hover:border-cyan-400/30 transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`text-2xl ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Statistics */}
        {showStats && (
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
=======
        break;
      case 'price - low':;
        filtered.sort ((a, b) => parse_float (a.price.replace (/[$]/g, '')) - parse_float (b.price.replace (/[$]/g, '')));
        break;
      case 'price - high':;
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, '')) - parse_float (a.price.replace (/[$]/g, '')));
        break;


    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);

  const stats = [;
    {;
      label: 'Total Services',;
      value: services && services.length,;
      icon: Rocket,;
      color: 'text-blue-400',;
    },;
    {;
      label: 'Active Customers',;
      value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0),;
      icon: Users,;
      color: 'text-green-400',;
    },;
    {;
      label: 'Average Rating',;
      value: (;
        services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length;
      ).toFixed(1),;
      icon: Star,;
      color: 'text-yellow-400',;
    },;
    {;
      label: 'Market Growth',;
      value: '300%+',;
      icon: TrendingUp,;
      color: 'text-purple-400',;
    },;

  ];
=======
  ];


  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}
        <div className='text-center mb-16'>          <motion&& motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>        });
        break;
      case 'price-low':;
        filtered && filtered.sort((a, b) => parseFloat(a && a.price.replace(/[$]/g, '')) - parseFloat(b && b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':;
        filtered && filtered.sort((a, b) => parseFloat(b && b.price.replace(/[$]/g, '')) - parseFloat(a && a.price.replace(/[$]/g, '')));
        break;
      default: break;
    }


    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [;
    { label: 'Total Services', value: services && services.length, icon: Rocket, color: 'text-blue-400' },;
    { label: 'Active Customers', value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0), icon: Users, color: 'text-green-400' },;
    { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },;

    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}



            {title}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >

            {title}
=======

            {subtitle}

          </motion && motion.p>;




=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {title}
          </motion && motion.h2>;
          <motion&& motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            {subtitle}

          </motion && motion.p>;


=======
=======
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

            {subtitle}
          </motion.p>



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            {stats.map((stat, index) => (
=======          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'

          >
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className='w-8 h-8' />
                </div>
                <div className='text-2xl font-bold text-white'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>              </div>          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>

=======
            ))}
          </motion.div>
        </div>

            ))}
          </motion.div>
        </div>

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Filters */}
        {showFilters && (;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-12'
==============
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-12'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Price Range Filter */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {range.name}

                  </select>;
                </div>;



=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Sort Options */}


                        {option.name}
                      </option>
=======                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                    {categories.map(category => (                      <option key={category.id} value={category.id}>

                        {category.icon} {category.name}
                      </option>
=======
=======
                        {category.icon} {category.name}
                      </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </select>
                </div>


=======


                {/* Price Range Filter */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Price Range
                  </label>
                  <select
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    value={selectedPriceRange}
                    onChange={e => setSelectedPriceRange(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>


=======


                {/* Sort Options */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Sort By
                  </label>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>

                        {option.name}
                      </option>
                    ))}
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                        {option.name}
                      </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}

                      </option>))}
                  </select>;
                </div>;
                {/* Sort Options */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Sort By;
                  </label>;
                  <select;
                    value={sort_by}
                    on_change={e => setSortBy (e.target.value)}
                    className='w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                  >;
                    {sort_options.map (option => (                      <option key={option.id} value={option.id}>                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  >;
                    {sort_options.map ((option) => (
                      <option key={option.id} value={option.id}>;
                        {option.name}
                      </option>))}

                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
<<<<<<< HEAD
      </div>
    </section>
=======

        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


        {/* Services Grid */}
        <motion.div
=======
        {/* Services Grid */}
        <motion&& motion.div          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
          </motion.div>)}
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          <AnimatePresence>;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}



              >
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>
                  {/* Popular Badge */}
                  {service.popular && (


                      ⭐ Most Popular



                    </div>
                  )}

                  {/* Header */}

                while_hover={{ coordinate_y: -5, scale: 1.02 }}
                className='group';
              >;
                <div className='relative bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 h - full'>;
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute -top - 3 left - 6 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white text - xs font - bold px - 3 py - 1 rounded - full'>                      ⭐ Most Popular              >;
                <div className="relative bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 h - full">;
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top - 3 left - 6 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white text - xs font - bold px - 3 py - 1 rounded - full">;
                      ⭐ Most Popular;
                    </div>)}
                  {/* Header */}
                  <div className='mb - 6'>;
                    <div className='flex items - center justify - between mb - 4'>;
                      <div className='text - 3xl'>{service.icon}</div>;
                      <div className='text - right'>;
                        <div className='text - 2xl font - bold text - white'>;
                          {feature}
                        </li>;
                      ))}
                    </ul>
                  </div>


                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>



                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

=======
                    </ul>;
                  </div>;
                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'>Rating</div>;
                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.customers?.toLocaleString() || '0'}
                      </div>;
                      <div className='text-xs text-gray-400'>Customers</div>;
                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.trialDays}
                      </div>;
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.rating}</div>;
                      <div className="text-xs text-gray-400">Rating</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.customers?.toLocaleString() || '0'}</div>;
                      <div className="text-xs text-gray-400">Customers</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.trialDays}</div>;
                      <div className="text-xs text-gray-400">Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}
                  <div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'>;
                    <div className='text-sm text-green-400 font-semibold mb-1'>;
                      🚀 ROI Promise;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service && service.roi}                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">;
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>;
                    <div className="text-xs text-gray-300 leading-relaxed">;
                      {service && service.roi}
                    </div>;
                  </div>;
                  {/* Market Position */}
                  <div className='mb-6 p-4 bg-gray-800/30 rounded-lg'>;
                    <div className='text-sm text-cyan-400 font-semibold mb-2'>;
                      📊 Market Position;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service && service.marketPosition}                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">;
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>;
                    <div className="text-xs text-gray-300 leading-relaxed">;
                      {service && service.marketPosition}
                    </div>;
                  </div>;

                  {/* CTA */}

                  {/* CTA */}
                  <div className='mt-auto'>
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      href={service && service.link}
                      variant='primary'


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
                    <Button
                      href={service.link}
                      variant="primary"
                      className="w-full group-hover:bg-cyan-500 transition-colors">;
                      Get Started;
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />;
                    </Button>;
                  </div>;
=======

                  {/* Contact Info */}
                  <div className='mt-4 text-center'>;
                    <div className='text-xs text-gray-500'>;
                      Contact:{' '}
                      <span className='text-cyan-400'>;
                        {service && service.contactInfo.mobile}
                      </span>;
                    </div>;
                    <div className='text-xs text-gray-500'>;
                      Email:{' '}
                      <span className='text-cyan-400'>;
                        {service && service.contactInfo.email}
                      </span>                    </div>                  <div className="mt-4 text-center">;
                    <div className="text-xs text-gray-500">;
                      Contact: <span className="text-cyan-400">{service && service.contactInfo.mobile}</span>;
                    </div>;
                    <div className="text-xs text-gray-500">;
                      Email: <span className="text-cyan-400">{service && service.contactInfo.email}</span>;
                  </div>;
                </div>;
              </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
          </AnimatePresence>;
        </motion && motion.div>;



        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

              <Button
                href='/contact'
                variant='primary'
                className='text-lg px-8 py-4'>;
                Schedule a Consultation;
                <ArrowRight className='ml-2 w-5 h-5' />;
              </Button>;
              <Button
                href='/pricing'
                variant='secondary'
                className='text-lg px-8 py-4'>;
                View Pricing Plans;
                <DollarSign className='ml-2 w-5 h-5' />;
              </Button>;
            </div>;
            <div className='mt-6 text-sm text-gray-400'>;
              <p>;
                📞 Call us:{' '}
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{' '}
                <span className='text-cyan-400'>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;
                🌐 Visit:{' '}
                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
              </p>            </div>            <div className="mt-6 text-sm text-gray-400">;
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>;
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup && ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
>>>>>>> main
  );



=======
};


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
