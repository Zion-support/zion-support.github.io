

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {;
  revolutionaryMicroSaasServices,;
  revolutionaryServiceCategories,;

} from '../data/revolutionary-micro-saas-services';import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react';

      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    );
  }
  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
=======

        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const allServices = [;
    ...revolutionaryMicroSaasServices,;
    ...enhancedMicroSaasServices,;
  ];  const allServices = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices];
  const priceRanges = [;
    { value: 'All', label: 'All Prices' },;
    { value: '0-100', label: '$0 - $100' },;
    { value: '101-500', label: '$101 - $500' },;
    { value: '501-1000', label: '$501 - $1,000' },;
    { value: '1001-2500', label: '$1,001 - $2,500' },;
    { value: '2501-5000', label: '$2,501 - $5,000' },;
    { value: '5001+', label: '$5,001+' },  ];    { value: '501-1000', label: '$501 - $1,000' };
    { value: '1001-2500', label: '$1,001 - $2,500' };
    { value: '2501-5000', label: '$2,501 - $5,000' };
    { value: '5001+', label: '$5,001+' }
  const sortOptions = [;
    { value: 'price', label: 'Price Low-High' },;
    { value: 'name', label: 'Name A-Z' },;
    { value: 'popularity', label: 'Most Popular' },;
    { value: 'category', label: 'Category' },;
    { value: 'roi', label: 'Highest ROI' },  ];    { value: 'roi', label: 'Highest ROI' }
  ];
  // Filter and sort services;
  let filteredServices = allServices;
  // Category filter;
  if (selectedCategory !== 'All') {;
    filteredServices = filteredServices && filteredServices.filter(;
      service => service && service.category === selectedCategory;
    );  }
  // Price range filter;
  if (priceRange !== 'All') {    filteredServices = filteredServices && filteredServices.filter(service => service && service.category === selectedCategory);
  }
  // Price range filter;
  if (priceRange !== 'All') {;
    const [min, max] = priceRange;
      .split('-');
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = filteredServices && filteredServices.filter(service => {;
      const price = parseFloat(service && service.price.replace('$', '').replace(',', ''));
      return price >= min && (max === Infinity || price <= max);
    });  }
  // Search filter;
  if (searchQuery) {    const [min, max] = priceRange && priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices && filteredServices.filter(service => {;
      const price = parseFloat(service && service.price.replace('$', '').replace(, ''));
      return price >= min && (max === Infinity || price <= max);
    });
  // Search filter;
  if (searchQuery) {;
    filteredServices = filteredServices && filteredServices.filter(;
      service =>;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.category.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())    );    filteredServices = filteredServices && filteredServices.filter(service =>;
      service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.tagline.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
  }
  // Sort services;
  filteredServices && filteredServices.sort((a, b) => {;
    switch (sortBy) {;
      case 'price':;
        return (
          parseFloat(a && a.price.replace('$', '').replace(',', '')) -;
          parseFloat(b && b.price.replace('$', '').replace(',', ''));
        );      case 'popularity':        return parseFloat(a && a.price.replace('$', '').replace(, '')) - parseFloat(b && b.price.replace('$', '').replace(, ''));
      case 'popularity':;
        return (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0);
      case 'category':;
        return a && a.category.localeCompare(b && b.category);
      case 'roi':;
        const aRoi = parseFloat(a && a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b && b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:;
        return a && a.name.localeCompare(b && b.name);    }      default: return a && a.name.localeCompare(b && b.name);
    }
  });


=======  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
=======

      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',



=======        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    };
    {
  // Sort services
  filteredServices.sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),

      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      case 'category':
        return a.category.localeCompare(b.category),
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0')
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0')
        return bRoi - aRoi,
      default: return a.name.localeCompare(b.name)
    }
  }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Pricing tiers
  const pricingTiers = [

=======    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (
    <UltraFuturisticBackground variant=&quot;holographic&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Comprehensive Pricing | Zion Tech Group - Micro SaaS Services Pricing & Plans</title>
          <meta name=&quot;description&quot; content=&quot;Explore comprehensive pricing for all Zion Tech Group micro SaaS services. Transparent pricing, market analysis, ROI guarantees, and flexible plans for every business size.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;micro SaaS pricing, service pricing, business pricing, ROI guarantees, market analysis, transparent pricing, enterprise pricing&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Comprehensive Pricing | Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Transparent pricing for all micro SaaS services with market analysis and ROI guarantees.&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/comprehensive-pricing&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-pricing&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 overflow-hidden&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <div className=&quot;max-w-5xl mx-auto&quot;>
              <motion.h1 
                className=&quot;text-6xl md:text-8xl font-bold mb-8 futuristic-glow&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Comprehensive
                </span>
                <br />
                <span className=&quot;text-white&quot;>Pricing & Plans</span>
              </motion.h1>
              <motion.p 
                className=&quot;text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed&quot;

import React, { useState } from 'react',
import React, { useState } from 'react';
import Head from 'next/head';

import {
  Check
  Star
  Zap
  Shield
  Users
  Globe
  ArrowRight
  ExternalLink
  TrendingUp
  Clock
  Target
  Building
  Rocket
  Award
  DollarSign
  ChartBar
  Lock
  Cpu
  Database
  Cloud
  Smartphone
  Palette
  Search
  MessageSquare
  FileText
  Calendar
  CreditCard
  BarChart3
  Settings
  Zap as ZapIcon
  Code
  BookOpen
  Activity
  Database as DatabaseIcon
  Play
  Mail
  Phone
  MapPin
  Filter
  Grid
  List
  ChevronDown
  ChevronUp
  Sparkles
  FlaskConical
  Dna
  Car
  Leaf
  Factory
  Truck
  Microscope
  GraduationCap
  ShieldCheck
  Brain
  Atom
  Globe2
  Bot
  Eye
  Trophy
  FlaskConical as FlaskIcon
  Dna as DnaIcon
  Car as CarIcon
  Leaf as LeafIcon
  Factory as FactoryIcon
  Truck as TruckIcon
  Microscope as MicroscopeIcon
  GraduationCap as GraduationCapIcon
  ShieldCheck as ShieldCheckIcon
  Crown
  Gem
  Diamond;
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  Eye,
  Trophy,
  FlaskConical as FlaskIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,
  Crown,
  Gem,;
  Diamond,;
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  revolutionaryMicroSaasServices
  revolutionaryServiceCategories;
  revolutionaryMicroSaasServices,;
  revolutionaryServiceCategories,;
} from '../data/revolutionary-micro-saas-services';import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data/revolutionary-micro-saas-services';

import { motion, AnimatePresence } from 'framer-motion';
export default function ComprehensivePricingPage() {;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [
    ...revolutionaryMicroSaasServices
    ...enhancedMicroSaasServices
  ];  const allServices = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices];
  const priceRanges = [
    { value: 'All', label: 'All Prices' }
    { value: '0-100', label: '$0 - $100' }
    { value: '101-500', label: '$101 - $500' }
    { value: '501-1000', label: '$501 - $1,000' }
    { value: '1001-2500', label: '$1,001 - $2,500' }
    { value: '2501-5000', label: '$2,501 - $5,000' }
    { value: '5001+', label: '$5,001+' },  ];    { value: '501-1000', label: '$501 - $1,000' }
    { value: '1001-2500', label: '$1,001 - $2,500' }
    { value: '2501-5000', label: '$2,501 - $5,000' }
    { value: '5001+', label: '$5,001+' }
  const sortOptions = [
    { value: 'price', label: 'Price Low-High' }
    { value: 'name', label: 'Name A-Z' }
    { value: 'popularity', label: 'Most Popular' }
    { value: 'category', label: 'Category' }
    { value: 'roi', label: 'Highest ROI' },  ];    { value: 'roi', label: 'Highest ROI' }
  ];
  // Filter and sort services
  let filteredServices = allServices;
  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = filteredServices.filter(
      service => service.category === selectedCategory
    );  }
  // Price range filter
  if (priceRange !== 'All') {    filteredServices = filteredServices.filter(service => service.category === selectedCategory)
  }
  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange
      .split('-')
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(',', ''));
      return price >= min && (max === Infinity |price <= max);
    });  }
  // Search filter
  if (searchQuery) {    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(, ''));
      return price >= min && (max === Infinity |price <= max)
    })
  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(
      service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.category.toLowerCase().includes(searchQuery.toLowerCase())    );    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
  }
  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return (
          parseFloat(a.price.replace('$', '').replace(',', '')) -
          parseFloat(b.price.replace('$', '').replace(',', ''))
        );      case 'popularity':        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] |'0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] |'0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);    }      default: return a.name.localeCompare(b.name)
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
=======

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Starter'
      price: '$49'
      period: '/month'
      description: 'Perfect for small businesses and startups'
      features: [
        'Basic service access'
        'Email support'
        'Standard features'
        'Community forum access'
        'Basic analytics'
      ]
      icon: <Star className="w-6 h-6" />
      color: 'from-blue-500 to-cyan-600'
      popular: false
    },    {        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w-6 h-6" />
      color: 'from-blue-500 to-cyan-600'
      popular: false
    }
      name: 'Professional'
      price: '$199'
      period: '/month'
      description: 'Ideal for growing businesses and teams'
      features: [
        'Advanced service access'
        'Priority support'
        'Advanced features'
        'API access'
        'Advanced analytics'
        'Custom integrations'
      ]
      icon: <Gem className="w-6 h-6" />
      color: 'from-purple-500 to-pink-600'
      popular: true
    },    {        'Advanced service accessPriority supportAdvanced featuresAPI accessAdvanced analyticsCustom integrations'
      ];
      icon: <Gem className="w-6 h-6" />
      color: 'from-purple-500 to-pink-600'
      popular: true
    }
      name: 'Enterprise'
      price: '$499'
      period: '/month'
      description: 'For large organizations and enterprises'
      features: [
        'Full service access'
        '24/7 dedicated support'
        'All features'
        'Custom development'
        'Enterprise analytics'
        'White-label options'
        'SLA guarantees'
      ]
      icon: <Crown className="w-6 h-6" />
      color: 'from-yellow-500 to-orange-600'
      popular: false
    },  ];        'Full service access24/7 dedicated supportAll featuresCustom developmentEnterprise analyticsWhite-label optionsSLA guarantees'
      ];
      icon: <Crown className="w-6 h-6" />
      color: 'from-yellow-500 to-orange-600'
      popular: false
    }
  // Market statistics
  const marketStats = [
    {
      metric: '$15.2B'
      label: 'Total Market Size'
      description: 'Combined market value of all services'
      icon: <ChartBar className='w-6 h-6' />
    },    {
      metric: '400+'
      label: 'Services Available'
      description: 'Comprehensive micro SaaS portfolio'
      icon: <Database className='w-6 h-6' />
    },    {
      metric: '99.99%'
      label: 'Uptime Guarantee'
      description: 'Enterprise-grade reliability'
      icon: <Shield className='w-6 h-6' />
    },    {
      metric: '2000%+'
      label: 'Average ROI'
      description: 'Proven business value'
      icon: <TrendingUp className='w-6 h-6' />
    },  ];      icon: <ChartBar className="w-6 h-6" />
    }
    {
      metric: '400+'
      label: 'Services Available'
      description: 'Comprehensive micro SaaS portfolio'
      icon: <Database className='w-6 h-6' />
    },      icon: <Database className="w-6 h-6" />
    }
    {
      metric: '99.99%'
      label: 'Uptime Guarantee'
      description: 'Enterprise-grade reliability'
      icon: <Shield className='w-6 h-6' />
    },      icon: <Shield className="w-6 h-6" />
    }
    {

==============      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
      features: [;
        'Advanced service access',
        'Priority support',
        'Advanced features',
        'API access',
        'Advanced analytics',
        'Custom integrations',
      ],
      icon: <Gem className="w - 6 h - 6" />,
      color: 'from - purple - 500 to - pink - 600',
      popular: true,
    },    {        'Advanced service access_priority support_advanced featuresAPI access_advanced analytics_custom integrations';
      ];
      icon: <Gem className="w - 6 h - 6" />,
      color: 'from - purple - 500 to - pink - 600',
      popular: true;
    }

      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',

      features: [;
        'Full service access',
        '24 / 7 dedicated support',
        'All features',
        'Custom development',
        'Enterprise analytics',
        'White - label options',
        'SLA guarantees',
      ],
      icon: <Crown className="w - 6 h - 6" />,
      color: 'from - yellow - 500 to - orange - 600',
      popular: false,
    },  ];        'Full service access24 / 7 dedicated support_all features_custom development_enterprise analytics_white - label optionsSLA guarantees';

      ];
      icon: <Crown className="w - 6 h - 6" />,
      color: 'from - yellow - 500 to - orange - 600',
      popular: false;
    }

  // Market statistics;
  const market_stats = [;

    {
      metric: '$15.2B',
      label: 'Total Market Size',
      description: 'Combined market value of all services',

      icon: <ChartBar className='w - 6 h - 6' />,
    },    {
      metric: '400+',
      label: 'Services Available',
      description: 'Comprehensive micro SaaS portfolio',
      icon: <Database className='w - 6 h - 6' />,
    },    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Enterprise - grade reliability',
      icon: <Shield className='w - 6 h - 6' />,
    },    {
      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',

==============  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  };


  // Pricing tiers;
  const pricingTiers = [;
    {;
      name: 'Starter',;
      price: '$49',;
      period: '/month',;
      description: 'Perfect for small businesses and startups',;
      features: [;
        'Basic service access',;
        'Email support',;
        'Standard features',;
        'Community forum access',;
        'Basic analytics',;
      ],;
      icon: <Star className="w-6 h-6" />,;
      color: 'from-blue-500 to-cyan-600',;
      popular: false,;
    },    {        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics';
      ];
      icon: <Star className="w-6 h-6" />,;
      color: 'from-blue-500 to-cyan-600',;
      popular: false;
    };
      name: 'Professional',;
      price: '$199',;
      period: '/month',;
      description: 'Ideal for growing businesses and teams',;
      features: [;
        'Advanced service access',;
        'Priority support',;
        'Advanced features',;
        'API access',;
        'Advanced analytics',;
        'Custom integrations',;
      ],;
      icon: <Gem className="w-6 h-6" />,;
      color: 'from-purple-500 to-pink-600',;
      popular: true,;
    },    {        'Advanced service accessPriority supportAdvanced featuresAPI accessAdvanced analyticsCustom integrations';
      ];
      icon: <Gem className="w-6 h-6" />,;
      color: 'from-purple-500 to-pink-600',;
      popular: true;
    };
      name: 'Enterprise',;
      price: '$499',;
      period: '/month',;
      description: 'For large organizations and enterprises',;
      features: [;
        'Full service access',;
        '24/7 dedicated support',;
        'All features',;
        'Custom development',;
        'Enterprise analytics',;
        'White-label options',;
        'SLA guarantees',;
      ],;
      icon: <Crown className="w-6 h-6" />,;
      color: 'from-yellow-500 to-orange-600',;
      popular: false,;
    },  ];        'Full service access24/7 dedicated supportAll featuresCustom developmentEnterprise analyticsWhite-label optionsSLA guarantees';
      ];
      icon: <Crown className="w-6 h-6" />,;
      color: 'from-yellow-500 to-orange-600',;
      popular: false;
    }

  // Market statistics;
  const marketStats = [;
    {;
      metric: '$15 && 15.2B',;
      label: 'Total Market Size',;
      description: 'Combined market value of all services',;
      icon: <ChartBar className='w-6 h-6' />,;
    },    {;
      metric: '400+',;
      label: 'Services Available',;
      description: 'Comprehensive micro SaaS portfolio',;
      icon: <Database className='w-6 h-6' />,;
    },    {;
      metric: '99 && 99.99%',;
      label: 'Uptime Guarantee',;
      description: 'Enterprise-grade reliability',;
      icon: <Shield className='w-6 h-6' />,;
    },    {;
      metric: '2000%+',;
      label: 'Average ROI',;
      description: 'Proven business value',;
      icon: <TrendingUp className='w-6 h-6' />,;
    },  ];      icon: <ChartBar className="w-6 h-6" />;
    };
    {;
      metric: '400+',;
      label: 'Services Available',;
      description: 'Comprehensive micro SaaS portfolio',;
      icon: <Database className='w-6 h-6' />,;
    },      icon: <Database className="w-6 h-6" />;
    };
    {;
      metric: '99 && 99.99%',;
      label: 'Uptime Guarantee',;
      description: 'Enterprise-grade reliability',;
      icon: <Shield className='w-6 h-6' />,;
    },      icon: <Shield className="w-6 h-6" />;
    };
    {;
      metric: '2000%+',;
      label: 'Average ROI',;
      description: 'Proven business value',;
      icon: <TrendingUp className='w-6 h-6' />,;
    },      icon: <TrendingUp className="w-6 h-6" />;
    }
  ];

  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },;


  return (
    <UltraFuturisticBackground variant='holographic' intensity='high'>;
      <div className='min-h-screen'>;
      icon: <TrendingUp className='w - 6 h - 6' />,
    },      icon: <TrendingUp className="w - 6 h - 6" />;
    }
  ];
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },

=======
        duration: 0.5
      }
    }        duration: 0.5,
      },
    },


            href='https://ziontechgroup && ziontechgroup.com/comprehensive-pricing'
          />;
        </Head>;


        {/* Hero Section */}

        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0 && 0.8 }}>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>        <section className="relative py-20 overflow-hidden">;
          <div className="container mx-auto px-4 text-center">;
            <div className="max-w-5xl mx-auto">;
              <motion&& motion.h1 

                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                animate={{ opacity: 1, y: 0 }}
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Transparent pricing for all our revolutionary micro SaaS services. 
                Choose the perfect plan for your business with guaranteed ROI and enterprise-grade reliability.
              </motion.p>
              

              {/* Market Stats */}
              </motion && motion.div>;
                Transparent pricing for all our revolutionary micro SaaS
                services. Choose the perfect plan for your business with
                guaranteed ROI and enterprise-grade reliability.
              </motion.p>
              {/* Market Stats */}
              <motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'                initial={{ opacity: 0, y: 20 }}              </motion.p>
              {/* Market Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
=======
=======

                Transparent pricing for all our revolutionary micro SaaS services. 
                Choose the perfect plan for your business with guaranteed ROI and enterprise-grade reliability.
              </motion.p>
              {/* Market Stats */}              <motion.div
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
                Transparent pricing for all our revolutionary micro SaaS;
                services. Choose the perfect plan for your business with;
                guaranteed ROI and enterprise-grade reliability.                  Comprehensive;
                </span>;
                <br />;
                <span className="text-white">Pricing & Plans</span>;
              </motion && motion.h1>;
              <motion&& motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
                Transparent pricing for all our revolutionary micro SaaS;
                services. Choose the perfect plan for your business with;
                guaranteed ROI and enterprise-grade reliability.;
              </motion && motion.p>;
              {/* Market Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'                initial={{ opacity: 0, y: 20 }}              </motion && motion.p>;
              {/* Market Stats */}
              <motion&& motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {marketStats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>
                      {stat.metric}
                    </div>
                    <div className='text-gray-400 text-sm'>{stat.label}</div>
                    <div className='text-gray-500 text-xs'>
                      {stat.description}
                    </div>                  </div>                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.description}</div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                ))}
              </motion.div>
                  </div>

                ))}
              </motion.div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* CTA Buttons */}
              <motion&& motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center items-center'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0 && 0.8, delay: 0 && 0.6 }}>              <motion&& motion.div 

              >              <motion.div 

                className="flex flex-col sm:flex-row gap-4 justify-center items-center"


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>;
                    document;
                      .getElementById('pricing-tiers');
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                  View Pricing Tiers;
                  <DollarSign className='ml-2 w-5 h-5' />;
                </Button>;
                <Button
                  variant='futuristic'
                  size='lg'
                  onClick={() =>;
                    document;
                      .getElementById('services-pricing');
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                >;
                  Browse All Services;
                  <Search className='ml-2 w-5 h-5' />                </Button>                  <Search className="ml-2 w-5 h-5" />;
                </Button>;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Information Banner */}
        <section className='py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-purple-400/20'>;
          <div className='container mx-auto px-4'>;
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>;
              <div className='flex items-center gap-4'>;
                <Phone className='w-5 h-5 text-cyan-400' />;
                <span className='text-white'>{contactInfo && contactInfo.mobile}</span>;
                <Mail className='w-5 h-5 text-purple-400' />;
                <span className='text-white'>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center gap-4'>;
                <MapPin className='w-5 h-5 text-green-400' />;
                <span className='text-white'>{contactInfo && contactInfo.address}</span>;
                <Globe className='w-5 h-5 text-blue-400' />;
                <span className='text-white'>{contactInfo && contactInfo.website}</span>              </div>              <div className="flex items-center gap-4">;
                <MapPin className="w-5 h-5 text-green-400" />;
                <span className="text-white">{contactInfo && contactInfo.address}</span>;
                <Globe className="w-5 h-5 text-blue-400" />;
                <span className="text-white">{contactInfo && contactInfo.website}</span>;
            </div>;
          </div>;
        </section>;
        {/* Pricing Tiers */}
        <section id='pricing-tiers' className='py-20'>;
          <div className='container mx-auto px-4'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 20 }}        <section id="pricing-tiers" className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div 
              className="text-center mb-16"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                  Flexible Pricing;
                </span>;
                <br />;
                <span className='text-white'>for Every Business</span>;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Choose the perfect plan that scales with your business. All;
                plans include our 21-day free trial and ROI guarantee.;
              </p>;
            </motion && motion.div>;
            <motion&& motion.div


            <motion.div 

            <motion.div 
            <motion.div
            <motion.div 
=======
=======

=======

            <motion.div 

                      ))}
                    </div>

=======
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >;
                      <Grid className='w-4 h-4' />                      <Grid className="w-4 h-4" />;
                    </button>;
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}

=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </button>;
                  </div>;
                </div>;
              </div>;


              className={viewMode === 'grid' 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 

              viewport={{ once: true }}

==============
              whileInView="visible"
              whileInView='visible'              viewport={{ once: true }}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}>;
                  <UltraFuturisticCard
=======
=======
                    variant={service.variant as any || 'quantum-advanced'}

=======
                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}


=======
=======                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service.variant as any || 'quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              variants={container_variants}
              initial='hidden';
              whileInView='visible'              viewport={{ once: true }}            <motion.div;
              className={view_mode === 'grid';
                ? "grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 8";
                : "space - y-6",
              }
              variants={container_variants}
              initial="hidden";
              whileInView="visible";
            >;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={item_variants}
                  while_hover={{ coordinate_y: -5 }}
                >;
                  <UltraFuturisticCard;
                    variant={(service.variant as any) || 'quantum - advanced'}                    size={view_mode === 'grid' ? 'large' : 'medium'}                    variant={service.variant as any || 'quantum - advanced'}
                    size={view_mode === 'grid' ? 'large' : 'medium'}
                    className={`h - full cursor - pointer ${view_mode === 'list' ? 'flex flex - col md:flex - row' : ''}`}
                  >;
                    {view_mode === 'grid' ? (
                      // Grid View;
                      <div className='text - center'>;
                        <div className='text - 4xl mb - 4'>{service.icon}</div>;
                        <h3 className='text - xl font - bold text - white mb - 2'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          {service.name}
                        </h3>;
                        <p className='text - gray - 300 mb - 4 text - sm'>;
                          {service.tagline}
                        </p>;
                        <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;
                          {service.price}
                        </div>;
                        <div className='text - sm text - gray - 400 mb - 4'>;
                          {service.period}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant={(service && service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service && service.variant as any || 'quantum-advanced'}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>;
                    {viewMode === 'grid' ? (;
                      // Grid View;
                      <div className='text-center'>;
                        <div className='text-4xl mb-4'>{service && service.icon}</div>;
                        <h3 className='text-xl font-bold text-white mb-2'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 mb-4 text-sm'>;
                          {service && service.tagline}
                        </p>;
                        <div className='text-2xl font-bold text-cyan-400 mb-2'>;
                          {service && service.price}
                        </div>;
                        <div className='text-sm text-gray-400 mb-4'>;
                          {service && service.period}
                        </div>;
                        <div className='space-y-2 mb-6'>;
                          {service && service.features.slice(0, 3).map((feature, idx) => (;
                            <div
                              key={idx}
                              className='flex items-center gap-2 text-sm'>;
                              <Check className='w-3 h-3 text-green-400 flex-shrink-0' />;
                              <span className='text-gray-300'>{feature}</span>                            </div>;

                          ))}
                        </div>;
                      <div className="text-center">;
                        <div className="text-4xl mb-4">{service && service.icon}</div>;
                        <h3 className="text-xl font-bold text-white mb-2">{service && service.name}</h3>;
                        <p className="text-gray-300 mb-4 text-sm">{service && service.tagline}</p>;
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                        <div className="text-sm text-gray-400 mb-4">{service && service.period}</div>;
                        <div className="space-y-2 mb-6">;
                          {service && service.features.slice(0, 3).map((feature, idx) => (;
                            <div key={idx} className="flex items-center gap-2 text-sm">;
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />;
                              <span className="text-gray-300">{feature}</span>;
=======                          ))}
                        </div>
                        <div className='text-center space-y-2'>
                          <Button
                            variant='primary'
                            size='sm'
                        </div>
                      </div>
                    ) : (
                      // List View
<div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="text-4xl md:text-5xl flex-shrink-0">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                              <p className="text-gray-300 text-sm">{service.tagline}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-sm text-gray-400">{service.period}</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
<h4 className="text-sm font-semibold text-purple-400 mb-2">Market Info</h4>
                              <div className="space-y-1 text-sm text-gray-300">
                                <div><span className="text-gray-400">ROI:</span> {service.roi}</div>
                                <div><span className="text-gray-400">Market:</span> {service.marketSize}</div>
                                <div><span className="text-gray-400">Growth:</span> {service.growthRate}</div>
                              </div>
                            </div>
                          </div>
=======
                      </div>
                    ) : (
                      // List View
                      <div className='flex flex-col md:flex-row gap-6 w-full'>
                        <div className='text-4xl md:text-5xl flex-shrink-0'>
                          {service.icon}
                        </div>
                        <div className='flex-1'>
                          <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                            <div>
                              <h3 className='text-xl font-bold text-white mb-2'>
                                {service.name}
                              </h3>
                              <p className='text-gray-300 text-sm'>
                                {service.tagline}
                              </p>
                            </div>
                            <div className='text-right mt-2 md:mt-0'>
                              <div className='text-2xl font-bold text-cyan-400'>
                                {service.price}
                              </div>
                              <div className='text-sm text-gray-400'>
                                {service.period}
                              </div>
                            </div>
                          </div>
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                              <h4 className='text-sm font-semibold text-cyan-400 mb-2'>
                                Key Features
                              </h4>
                              <div className='space-y-1'>
                                {service.features
                                  .slice(0, 4)
                                  .map((feature, idx) => (
                                    <div
                                      key={idx}
                                      className='flex items-center gap-2 text-sm'
                                    >
                                      <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
                                      <span className='text-gray-300'>
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                            <div>
                              <h4 className='text-sm font-semibold text-purple-400 mb-2'>
                                Market Info
                              </h4>
                              <div className='space-y-1 text-sm text-gray-300'>
                                <div>
                                  <span className='text-gray-400'>ROI:</span>{' '}
                                  {service.roi}
                                </div>
                                <div>
                                  <span className='text-gray-400'>Market:</span>{' '}
                                  {service.marketSize}
                                </div>
                                <div>
                                  <span className='text-gray-400'>Growth:</span>{' '}
                                  {service.growthRate}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex gap-2'>
                            <Button
                              variant='primary'
                              size='sm'
                              onClick={() =>
                                window.open(service.link, '_blank')
                              }
                            >
                              Learn More
                              <ExternalLink className='ml-2 w-4 h-4' />
                            </Button>
                            <Button
                              variant='futuristic'
                              size='sm'
                              onClick={() =>
                                window.open(
                                  'https://ziontechgroup.com/contact'
                                  '_blank'
                                )
                              }
                            >
                              Get Pricing
                              <DollarSign className='ml-2 w-4 h-4' />
                            </Button>                          </div>                          <div className="flex gap-2">
                                                         <Button
                               variant="primary"
                               size="sm"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                               size="sm"
=======                               onClick={() => window && window.open('https: //ziontechgroup && ziontechgroup.com/contact_blank')}
                             >;
                               Get Pricing;
                               <DollarSign className="ml-2 w-4 h-4" />;
                             </Button>;
                        </div>;
                      </div>;
                    )}
                  </UltraFuturisticCard>;
                </motion && motion.div>;
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </motion && motion.div>;
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                className='text-center py-16'                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 && 0.6 }}>              <motion&& motion.div 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 && 0.6 }}>;
                <div className='text-6xl mb-4'>🔍</div>;
                <h3 className='text-2xl font-bold text-white mb-2'>;
                  No Services Found;
                </h3>;
                <p className='text-gray-400 mb-6'>;
                  Try adjusting your search criteria or filters.;
                </p>;
                <Button
                  variant='primary'
                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                             </Button>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
            {filteredServices.length === 0 && (
              <motion.div
                className='text-center py-16'                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >              <motion.div
                className="text-center py-16"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
=======

                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                transition={{ duration: 0.6 }}
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No Services Found
                </h3>
                <p className='text-gray-400 mb-6'>
                  Try adjusting your search criteria or filters.
                </p>
                <Button
                  variant='primary'
=======

                >;
                  Clear Filters;
                </Button>              </motion && motion.div>                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>;
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                 <Button
                   variant="primary"
                   onClick={() => {;
                     setSearchQuery('');
                     setSelectedCategory('All');

                   }}


            )}

        <section className="py-20">

          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-4xl mx-auto"

              initial={{ opacity: 0, y: 20 }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
                >;
                  Schedule Demo;
                  <Calendar className='ml-2 w-5 h-5' />;
                </Button>;
              </div>;
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>;
                <div>;
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.mobile}
                  </div>;
                  <div className='text-gray-400 text-sm'>Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.email}
                  </div>;
                  <div className='text-gray-400 text-sm'>Email us 24/7</div>;
                </div>;
                <div>;
                  <MapPin className='w-8 h-8 text-green-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.address}
                  </div>;
                  <div className='text-gray-400 text-sm'>Visit our office</div>                </div>                Ready to Get Started?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Contact our sales team to discuss pricing, custom plans, and implementation options.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">;
                <Button
                  variant="primary" 
                  size="lg"
                  onClick={() => window && window.open('https://ziontechgroup && ziontechgroup.com/contact_blank')}
                >;
                  Contact Sales;
                  <Mail className="ml-2 w-5 h-5" />;
                </Button>;
                <Button
                  variant="futuristic" 
                  size="lg"
                  onClick={() => window && window.open('https://ziontechgroup && ziontechgroup.com/contact_blank')}
                >;
                  Schedule Demo;
                  <Calendar className="ml-2 w-5 h-5" />;
                </Button>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
                <div>;
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.mobile}</div>;
                  <div className="text-gray-400 text-sm">Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.email}</div>;
                  <div className="text-gray-400 text-sm">Email us 24/7</div>;
                </div>;
                <div>;
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.address}</div>;
                  <div className="text-gray-400 text-sm">Visit our office</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraFuturisticBackground>;
  );  );
}

=======
);  )
}
  );
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

<<<<<<< HEAD>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
