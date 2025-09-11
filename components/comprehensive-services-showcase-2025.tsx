import React, { useState, useEffect } from 'react';
import Head from 'next/head';


import Head from 'next/head',
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;

import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';



// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';

import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';


  Search
  Filter
  Grid3X3
  List
  Star
  Users
  TrendingUp
  Zap
  Brain
  Atom
  Shield
  Rocket
  Palette
  BookOpen
  Truck
  DollarSign
  Settings
  ArrowRight
  ChevronDown
  CheckCircle
  Clock
  Award
  Target
  Globe
  Sparkles
  Cpu
  Lock
  Cloud
  BarChart3
  Eye
  Heart
  Lightbulb
  Palette as PaletteIcon
  Code
  Database
  Shield as ShieldIcon
  Globe as GlobeIcon
  Zap as ZapIcon
  Target as TargetIcon;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List


import React, { useState, useEffect } from 'react';
import Head from 'next/head';


import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import Head from 'next / head';
import Layout from '../components / layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;

import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';


// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';

import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';



  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;
// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data / 2025 - innovative - real - micro - saas - services';
import { innovativeAIServicesEnhanced2025 } from '../data / 2025 - innovative - ai - services - enhanced';
import { innovativeITServicesEnhanced2025 } from '../data / 2025 - innovative - it - services - enhanced';
import { emergingTechServicesEnhanced2025 } from '../data / emerging - tech - services';
;
  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;
];
const categories = [;
  {;
    name: 'All Services',;
    icon: <Globe className='w-5 h-5' />,;
    count: allServices && allServices.length,;
  },;
  {;
    name: 'Micro SAAS',;
    icon: <Rocket className='w-5 h-5' />,;
    count: innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.length,;
  },;
  {;
    name: 'AI & Consciousness',;
    icon: <Brain className='w-5 h-5' />,;
    count: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length,;
  },;
  {;
    name: 'Enterprise IT',;
    icon: <Shield className='w-5 h-5' />,;
    count: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length,;
  },;
  {;
    name: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-5 h-5' />,;
    count: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length,;
  },];  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices && allServices.length },;
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.length },;
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length },;
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length },;
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length }
const priceRanges = [;
  { label: 'All Prices', value: 'all' },;
  { label: 'Under $50/month', value: 'under-50' },;
  { label: '$50 - $200/month', value: '50-200' },;
  { label: '$200 - $500/month', value: '200-500' },;
  { label: 'Over $500/month', value: 'over-500' },];  { label: 'Over $500/month', value: 'over-500' }
];
const sortOptions = [;
  { label: 'Most Popular', value: 'popular' },;
  { label: 'Highest Rated', value: 'rating' },;
  { label: 'Newest', value: 'newest' },;
  { label: 'Price: Low to High', value: 'price-low' },;
  { label: 'Price: High to Low', value: 'price-high' },];  { label: 'Price: High to Low', value: 'price-high' }
];
export default function ComprehensiveServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
// Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
  useEffect(() => {;
    let filtered = allServices;
    // Filter by search term;
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        service =>;
          service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );    }
    // Filter by category;
    if (selectedCategory !== 'All Services') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );    }      filtered = filtered && filtered.filter(service =>;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    // Filter by category;
    if (selectedCategory !== 'All Services') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );      filtered = filtered && filtered.filter(service => service && service.category === selectedCategory);
    }
    // Filter by price range;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        const price = parseFloat(service && service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {;
          case 'under-50':;



            return price < 50;
          case '50-200':;
            return price >= 50 && price <= 200;
          case '200-500':;
            return price > 200 && price <= 500;
          case 'over-500':;
            return price > 500;
          default:;
            return true;        }          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true
        }
      });
    }
;
const all_services: Service[] = [;
  ...innovativeRealMicroSaasServices2025.map (service => ({
    ...service,
    category: 'Micro SAAS',
    icon: <Rocket className='w - 6 h - 6' />,
  })),
  ...innovativeAIServicesEnhanced2025.map (service => ({
    ...service,
    category: 'AI & Consciousness',
    icon: <Brain className='w - 6 h - 6' />,
  })),
  ...innovativeITServicesEnhanced2025.map (service => ({
    ...service,
    category: 'Enterprise IT',
    icon: <Shield className='w - 6 h - 6' />,
  })),
  ...emergingTechServicesEnhanced2025.map (service => ({
    ...service,
    category: 'Quantum & Emerging Tech',
    icon: <Atom className='w - 6 h - 6' />,
  })),
];
;
const categories = [;
  {
    name: 'All Services',
    icon: <Globe className='w - 5 h - 5' />,
    count: all_services.length,
  },
  {
    name: 'Micro SAAS',
    icon: <Rocket className='w - 5 h - 5' />,
    count: innovativeRealMicroSaasServices2025.length,
  },
  {
    name: 'AI & Consciousness',
    icon: <Brain className='w - 5 h - 5' />,
    count: innovativeAIServicesEnhanced2025.length,
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className='w - 5 h - 5' />,
    count: innovativeITServicesEnhanced2025.length,
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className='w - 5 h - 5' />,
    count: emergingTechServicesEnhanced2025.length,
  }, ];  { name: 'All Services', icon: <Globe className="w - 5 h - 5" />, count: all_services.length },
  { name: 'Micro SAAS', icon: <Rocket className="w - 5 h - 5" />, count: innovativeRealMicroSaasServices2025.length },
  { name: 'AI & Consciousness', icon: <Brain className="w - 5 h - 5" />, count: innovativeAIServicesEnhanced2025.length },
  { name: 'Enterprise IT', icon: <Shield className="w - 5 h - 5" />, count: innovativeITServicesEnhanced2025.length },
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w - 5 h - 5" />, count: emergingTechServicesEnhanced2025.length }
const price_ranges = [;
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50 / month', value: 'under - 50' },
  { label: '$50 - $200 / month', value: '50 - 200' },
  { label: '$200 - $500 / month', value: '200 - 500' },
  { label: 'Over $500 / month', value: 'over - 500' }, ];  { label: 'Over $500 / month', value: 'over - 500' }
];
;
const sort_options = [;
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price - low' },
  { label: 'Price: High to Low', value: 'price - high' }, ];  { label: 'Price: High to Low', value: 'price - high' }
];
;
export default /**
 * ComprehensiveServicesShowcase2025 - Function description
 */
function ComprehensiveServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState ('all');
  const [sort_by, setSortBy] = useState ('popular');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtered_services, setFilteredServices] =;
    useState < Service[]>(all_services);  const [filtered_services, setFilteredServices] = useState < Service[]>(all_services);
;
  useEffect (() => {
    let filtered = all_services;
;
    // Filter by search term;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service =>;
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()));    }
    // Filter by category;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service => service.category === selected_category);    }      filtered = filtered.filter (service =>;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_term.toLowerCase ()));
    // Filter by category;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service => service.category === selected_category);      filtered = filtered.filter (service => service.category === selected_category);
    }
    // Filter by price range;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        const price = parse_float (service.price.replace (/[^0 - 9.]/g, ''));
        switch (selectedPriceRange) {
          case 'under - 50':;
            return price < 50;
          case '50 - 200':;
            return price >= 50 && price <= 200;
          case '200 - 500':;
            return price > 200 && price <= 500;
          case 'over - 500':;
            return price > 500;
          default:;
            return true;        }          case 'under - 50': return price < 50;
          case '50 - 200': return price >= 50 && price <= 200;
          case '200 - 500': return price > 200 && price <= 500;
          case 'over - 500': return price > 500;
          default: return true;
      });
    }
    // Sort services;
    filtered.sort ((a, b) => {
      switch (sort_by) {
        case 'popular':;
          return b.customers - a.customers;
        case 'rating':;
          return b.rating - a.rating;





  const getCategoryColor = (category: string) => {;
    switch (category) {        case 'price-low':;
          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':;
          return parseFloat(b && b.price.replace(/[^0-9.]/g, '')) - parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
        default: return 0;
      }
    });
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'Micro SAAS':;

      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500',;
      default: return 'from-gray-500 to-slate-500';
  };
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'Micro SAAS':;
        return <Rocket className='w-5 h-5' />;
      case 'AI & Consciousness':;
        return <Brain className='w-5 h-5' />;
      case 'Enterprise IT':;
        return <Shield className='w-5 h-5' />;
      case 'Quantum & Emerging Tech':;
        return <Atom className='w-5 h-5' />;
      default:;
        return <Globe className='w-5 h-5' />;    }      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />;
  };



      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
        {/* Animated Background */}

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{
                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }}            />
  };



          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div                top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    // Sort services
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'popular':
          return b.customers - a.customers,
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')),
        default: return 0
      }
    }),

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500',
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500',
      case 'Enterprise IT': return 'from-green-500 to-emerald-500',
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500',
      default: return 'from-gray-500 to-slate-500'
    }
  },

  }
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
              ))}
            </div>

                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input
                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </div>;

      {/* Filters and Controls */}
            </div>;


      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
                  placeholder="Search for services, features, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Filters and Controls */}
      <div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>

              {categories.map(category => (                <button

                <button


                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                      : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  {category.icon}
                    {category.count}


                  </span>
                </button>
              ))}
            </div>


            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>


              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}

              </select>;


                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-900 text-white'

                  >                    {range.label}

            <div className='flex flex - wrap items - center space - x-4'>;
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}
              </select>;
                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
            <div className='flex flex - wrap items - center space - x-4'>;

                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}

                    {category.count}


                  </span>
                </button>
              ))}
            </div>
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>

              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}

              </select>;



                    {range.label}

                  </option>
                ))}
              </select>


                <button


              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button

                <button


              {/* Sort Options */}
              <select
                value={sortBy}
              </select>;
              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">;
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
                    {option.label}
                  </option>
              {/* Sort Options */}
              <select
                value={sortBy}


              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button

                ))}
              </select>

              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">

                <button


              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button

                <button


                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'grid';
                      ? 'bg-cyan-500 text-white';
                      : 'text-gray-400 hover:text-white';
                  }`}


                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500 text-white';
                      : 'text-white';
                  }`}

                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;


      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          </p>
        </div>
        {viewMode === 'grid' ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                {/* Price */}

                  {service.description}
                </p>

                {/* Price */}


                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">;
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className="ml-2">{service && service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                <div className="mb-4">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">;
                    {service && service.icon}
                  </div>;
                </div>;
                {/* Service Info */}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                  {service && service.name}
                </h3>;
                <p className='text-gray-400 mb-3 line-clamp-2'>;
                  {service && service.tagline}
                </p>;
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service && service.description}
                </p>;
                {/* Price */}                  {service && service.name}
                </h3>;
                <p className="text-gray-400 mb-3 line-clamp-2">;
                  {service && service.tagline}
                </p>;
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">;
                  {service && service.description}
                </p>;
                {/* Price */}
                <div className='mb-4'>;
                  <span className='text-2xl font-bold text-cyan-400'>;
                    {service && service.price}
                  </span>;
                  <span className='text-gray-500 text-sm ml-2'>/month</span>;
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>;
                  <div className='flex items-center space-x-1 text-yellow-400'>;
                    <Star className='w-4 h-4 fill-current' />;
                    <span className='text-white'>{service && service.rating}</span>;
                    <span className='text-gray-500'>({service && service.reviews})</span>;
                  </div>;
                  <div className='flex items-center space-x-1 text-gray-400'>;
                    <Users className='w-4 h-4' />                    <span>{service && service.customers.toLocaleString()}</span>                  <div className="flex items-center space-x-1 text-gray-400">;
                    <Users className="w-4 h-4" />;
                    <span>{service && service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;
                {/* Features Preview */}

                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                <div className="mb-4 text-xs text-gray-500">

                  <div className="flex items-center justify-between">
                {/* Market Info */}
                <div className='mb-4 text-xs text-gray-500'>
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className='mb-4 text-xs text-gray-500'>
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service.marketSize}</span>

                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
                key={service.id}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'



              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-shrink-0">;
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">;
                      {service && service.icon}
                    </div>;
                  </div>;


                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
                          {service.name}
                        </h3>
                        <p className='text-lg text-cyan-300 mb-2'>
                          {service.tagline}
                        </p>
                        <p className='text-gray-400 mb-4'>
                          {service.description}
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>
                          {service.price}
                        </div>
                        <div className='text-gray-500 text-sm'>/month</div>



                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
              >
                <div className='flex items-start space-x-6'>
                  {/* Service Icon */}
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                      {service.icon}              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  {/* Service Details */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>

                      <div>
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
                          {service.name}
                        </h3>
                        <p className='text-lg text-cyan-300 mb-2'>
                          {service.tagline}
                        </p>
                        <p className='text-gray-400 mb-4'>
                          {service.description}
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>
                          {service.price}
                        </div>
                        <div className='text-gray-500 text-sm'>/month</div>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}
                        >                          {service.category}                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>

                          {service.category}



                          {service.category}




                      </div>


                      </div>

                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Users className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.customers.toLocaleString()}
                        </span>
                        <span className='text-gray-500'>customers</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <TrendingUp className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.growthRate}
                        </span>
                        <span className='text-gray-500'>growth</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Globe className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.marketSize}
                        </span>
                        <span className='text-gray-500'>market</span>                      </div>
                    </div>
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{service.marketSize}</span>
                        <span className="text-gray-500">market</span>
                      </div>
                    </div>
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>                          {service && service.category}                      <div className="text-right">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                        <div className="text-gray-500 text-sm">/month</div>;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items-center space-x-8 mb-4 text-sm'>;
                      <div className='flex items-center space-x-1 text-yellow-400'>;
                        <Star className='w-4 h-4 fill-current' />;
                        <span className='text-white font-medium'>;
                          {service && service.rating}
                        </span>;
                        <span className='text-gray-500'>;
                          ({service && service.reviews} reviews);
                        </span>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Users className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.customers.toLocaleString()}
                        </span>;
                        <span className='text-gray-500'>customers</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <TrendingUp className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.growthRate}
                        </span>;
                        <span className='text-gray-500'>growth</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Globe className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.marketSize}
                        </span>;
                        <span className='text-gray-500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">;
                        <Globe className="w-4 h-4" />;
                        <span className="text-white font-medium">{service && service.marketSize}</span>;
                        <span className="text-gray-500">market</span>;
                    </div>;
                    {/* Features */}

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>

                            <span>{feature}</span>

                          </div>
                        ))}
                      </div>
                    </div>


                    {/* CTA */}
                    <div className='flex items-center justify-between'>
                      <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>
                        Learn More
                      </button>
                      <div className='text-xs text-gray-500'>
                        Launched:{' '}
                        {new Date(service.launchDate).toLocaleDateString()}                      </div>                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {new Date(service.launchDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.div>
                        ))}

                      </div>;
                    </div>;



                    {/* CTA */}


            ))}
</div>;
        )}

                      </div>;
                    </div>;




                    {/* CTA */}


            ))}
          </div>;
        )}


            </p>
            <button
              onClick={() => {;
                setSearchTerm('');
                setSelectedCategory('All Services');


      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion && motion.div      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'>;
                Get Started Today;
              </a>;
              <a
                href='/pricing'
                setSelectedPriceRange('all')
                className='group bg - gradient - to - r from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-6'>;
                  {/* Service Icon */}
                  <div className='flex - shrink - 0'>;
                    <div className='w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                      {service.icon}              >;
                <div className="flex items - start space - x-6">;
                  {/* Service Icon */}
                  <div className="flex - shrink - 0">;
                    <div className="w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300">;
                      {service.icon}
                    </div>;
                  </div>;
                  {/* Service Details */}
                  <div className='flex - 1 min - w-0'>;
                    <div className='flex items - start justify - between mb - 3'>;
                        <h3 className='text - 2xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;
                          {service.name}
                        </h3>;
                        <p className='text - lg text - cyan - 300 mb - 2'>;
                          {service.tagline}
                        </p>;
                        <p className='text - gray - 400 mb - 4'>;
                          {service.description}
                        </p>;
                      </div>;
                      <div className='text - right'>;
                        <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                          {service.price}
                        </div>;
                        <div className='text - gray - 500 text - sm'>/month</div>;
                        <span;
                          className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}
                        >                          {service.category}                      <div className="text - right">;
                        <div className="text - 3xl font - bold text - cyan - 400 mb - 2">{service.price}</div>;
                        <div className="text - gray - 500 text - sm">/month</div>;
                        <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items - center space - x-8 mb - 4 text - sm'>;
                      <div className='flex items - center space - x-1 text - yellow - 400'>;
                        <Star className='w - 4 h - 4 fill - current' />;
                        <span className='text - white font - medium'>;
                          {service.rating}
                        </span>;
                        <span className='text - gray - 500'>;
                          ({service.reviews} reviews);
                        </span>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Users className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.customers.toLocaleString ()}
                        </span>;
                        <span className='text - gray - 500'>customers</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <TrendingUp className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.growth_rate}
                        </span>;
                        <span className='text - gray - 500'>growth</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Globe className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.market_size}
                        </span>;
                        <span className='text - gray - 500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items - center space - x-1 text - gray - 400">;
                        <Globe className="w - 4 h - 4" />;
                        <span className="text - white font - medium">{service.market_size}</span>;
                        <span className="text - gray - 500">market</span>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <div className='text - sm text - gray - 500 mb - 2'>;
                        Key Features:;
                      </div>;
                      <div className='grid grid - cols - 2 gap - 2'>;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div;
                            key={idx}
                            className='flex items - center space - x-2 text - sm text - gray - 400';
                          >;
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="mb - 4">;
                      <div className="text - sm text - gray - 500 mb - 2">Key Features:</div>;
                      <div className="grid grid - cols - 2 gap - 2">;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 400">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 flex - shrink - 0" />;
                          </div>))}
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>;
                      <button className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105'>;
                        Learn More;
                      </button>;
                      <div className='text - xs text - gray - 500'>;
                        Launched:{' '}
                        {new Date (service.launch_date).toLocaleDateString ()}                      </div>                    <div className="flex items - center justify - between">;
                      <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover: from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105">;
                        Learn More;
                      </button>;
                      <div className="text - xs text - gray - 500">;
                        Launched: {new Date (service.launch_date).toLocaleDateString ()}
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>)}
        {/* No Results */}
        {filtered_services.length === 0 && (
          <div className='text - center py - 20'>;
            <div className='w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6'>;
              <Search className='w - 12 h - 12 text - cyan - 400' />;
            </div>;
            <h3 className='text - 2xl font - bold text - white mb - 2'>;
              No services found;
            </h3>;
            <p className='text - gray - 400 mb - 6'>;
              Try adjusting your search terms or filters to find what you're;
              looking for.            </p>          <div className="text - center py - 20">;
            <div className="w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6">;
              <Search className="w - 12 h - 12 text - cyan - 400" />;
            </div>;
            <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
            <p className="text - gray - 400 mb - 6">;
              Try adjusting your search terms or filters to find what you're looking for.;
            <button;
              on_click={() => {
                setSearchTerm ('');
                setSelectedCategory ('All Services');
                setSelectedPriceRange ('all');
              }}
              }}
              className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200";
            >;
              Clear All Filters;
            </button>;
          </div>)}
      </div>;
      {/* CTA Section */}


            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">

  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 


                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () )
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered)
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
}
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100
}%`;
top: `$ {
  Math.random () * 100
}%`
}/>) )
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion.div initial= {
  duration: 0 && 0.8 
}> <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"> <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion && motion.div>) ) ;
}</div> /> </div> </div> </motion && motion.div> </div> </div> key= {;
  category && category.name ;
}onClick= {;
  () => setSelectedCategory (category && category.name) ;
}className= {;
  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {;
  selectedCategory === category && category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' ;
}` ;
}> </span> </button>) ) ;
}</div> </option>) ) ;
}</select> {;
  /* Sort Options */ ;
}<select </option>) ) ;
}</select> <buttononClick= {
  () => setViewMode ('grid') ;
}className= {;
  `p-2 rounded-md transition-all duration-200 $ {;
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' ;
}` ;
}> <Grid3X3 className=" w-4 h-4"/> </button> <buttononClick= {
  () => setViewMode ('list') ;
}className= {;
  `p-2 rounded-md transition-all duration-200 $ {;
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' ;
}` ;
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {;
  service && service.features.length - 3 ;
}more features </div>) ;
}</div> </div> Learn More </button> </motion && motion.div>) ) ;
}</div> </span> </div> </div> </div>) ) ;
}</div> </div> </div> </div> </div> </div> </motion && motion.div>) ) ;
}</div>) ;
}</div> <h3 className=" text-2xl font-bold text-white mb-2">No services found</h3> <p className=" text-gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <buttononClick= {
  () => {;
  > Clear All Filters </button> </div>) ;
}</div> <motion&& motion.div initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0 && 0.8 
}viewport= {
  {
  once: true 
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion && motion.div> </div> </div> </Layout>)   );
      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion.div      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>
              Our team of experts is ready to help you implement the perfect
              solution for your needs. Get in touch today and discover how our
              innovative services can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'              >              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () )
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 


}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )}
      <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20 text - center'>          <motion.div      <div className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105'              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'              >              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto">;
              Our team of experts is ready to help you implement the perfect solution for your needs.;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;
            <div className="flex flex - col sm: flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6">;
              <a;
                href="/contact";
                className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105";
              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'                href="/pricing";
                className="border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200";
              >;
                View Pricing Plans;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </Layout>);
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || service.tagline.toLowerCase () .includes (search_term.toLowerCase () );
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true 


}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
}
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
}
;
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true 


}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

