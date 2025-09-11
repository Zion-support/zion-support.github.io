<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import Head from 'next/head';


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

<<<<<<< HEAD
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
=======


import React, { useState, useEffect } from 'react';
import Head from 'next/head';


import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

=======
import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';

import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  Palette,
  BookOpen,
  Truck,
  DollarSign,
  Settings,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  Palette as PaletteIcon,
  Code,
  Database,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
<<<<<<< HEAD
<<<<<<< HEAD
  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;


  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;
// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data / 2025 - innovative - real - micro - saas - services';
import { innovativeAIServicesEnhanced2025 } from '../data / 2025 - innovative - ai - services - enhanced';
import { innovativeITServicesEnhanced2025 } from '../data / 2025 - innovative - it - services - enhanced';
import { emergingTechServicesEnhanced2025 } from '../data / emerging - tech - services';
;
=======
  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon

// Import service data
import { innovativeRealMicroSaasServices2025  } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025  } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025  } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';


  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
<<<<<<< HEAD
<<<<<<< HEAD
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode;

  icon?: React.ReactNode;
const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service
    category: 'Micro SAAS'
    icon: <Rocket className='w-6 h-6' />
  }))
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service
    category: 'AI & Consciousness'
    icon: <Brain className='w-6 h-6' />
  }))
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service
    category: 'Enterprise IT'
    icon: <Shield className='w-6 h-6' />
  }))
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service
    category: 'Quantum & Emerging Tech'
    icon: <Atom className='w-6 h-6' />
=======
<<<<<<< HEAD
  market_size: string;
  growth_rate: string;
  launch_date: string;
  badge?: string;


  icon?: React.ReactNode;



  icon?: React.ReactNode;

interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  category: string,
  rating: number,
  reviews: number,
  customers: number,
  marketSize: string,
  growthRate: string,
  launchDate: string,
  badge?: string;
  icon?: React.ReactNode
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service;
    category: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />
  }));
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service;
    category: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />
  }));
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service;
    category: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />
  }));
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service;
    category: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }))
];
const categories = [
  {
    name: 'All Services'
    icon: <Globe className='w-5 h-5' />
    count: allServices.length
  }
  {
    name: 'Micro SAAS'
    icon: <Rocket className='w-5 h-5' />
    count: innovativeRealMicroSaasServices2025.length
  }
  {
    name: 'AI & Consciousness'
    icon: <Brain className='w-5 h-5' />
    count: innovativeAIServicesEnhanced2025.length
  }
  {
    name: 'Enterprise IT'
    icon: <Shield className='w-5 h-5' />
    count: innovativeITServicesEnhanced2025.length
  }
  {
    name: 'Quantum & Emerging Tech'
    icon: <Atom className='w-5 h-5' />
    count: emergingTechServicesEnhanced2025.length
  },];  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length }
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length }
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length }
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length }
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }
<<<<<<< HEAD
];

const priceRanges = [
const priceRanges = [


  { label: 'All Prices', value: 'all' }
  { label: 'Under $50/month', value: 'under-50' }
  { label: '$50 - $200/month', value: '50-200' }
  { label: '$200 - $500/month', value: '200-500' }
  { label: 'Over $500/month', value: 'over-500' },];  { label: 'Over $500/month', value: 'over-500' }
=======

];

const priceRanges = [
=======
const priceRanges = [


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50/month', value: 'under-50' },
  { label: '$50 - $200/month', value: '50-200' },
  { label: '$200 - $500/month', value: '200-500' },
<<<<<<< HEAD
  { label: 'Over $500/month', value: 'over-500' },];

=======
  { label: 'Over $500/month', value: 'over-500' },];

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



];
const sortOptions = [

  icon?: React && React.ReactNode;

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { label: 'Over $500/month', value: 'over-500' },];  { label: 'Over $500/month', value: 'over-500' }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { label: 'Over $500/month', value: 'over-500' },];

];
const sortOptions = [
  icon?: React && React.ReactNode;
const allServices: Service[] = [;
  ...innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.map(service => ({;
    ...service,;
    category: 'Micro SAAS',;
    icon: <Rocket className='w-6 h-6' />,;
  })),;
  ...innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'AI & Consciousness',;
    icon: <Brain className='w-6 h-6' />,;
  })),;
  ...innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Enterprise IT',;
    icon: <Shield className='w-6 h-6' />,;
  })),;
  ...emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-6 h-6' />,;
  })),;
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export default function ComprehensiveServicesShowcase2025() {

export default function ComprehensiveServicesShowcase2025() {;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default function ComprehensiveServicesShowcase2025() {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export default function ComprehensiveServicesShowcase2025() {;


=======

export default function ComprehensiveServicesShowcase2025() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
<<<<<<< HEAD
<<<<<<< HEAD
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
  useEffect(() => {
    let filtered = allServices;
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          return b.customers - a.customers;
        case 'rating':;
          return b.rating - a.rating;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          return b.customers - a.customers;
        case 'rating':;
          return b.rating - a.rating;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Sort services;
    filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'popular':;
          return b && b.customers - a && a.customers;
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'newest':;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
          );
        case 'price-low':;
          return (
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
          );
        case 'price-high':;
          return (
            parseFloat(b && b.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
          );
        case 'newest':;
          return (
            new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ());
        case 'price - low':;
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));
        case 'price - high':;
          return (
            parse_float (b.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (a.price.replace (/[^0 - 9.]/g, '')));
        default:;
          return 0;
      }
    });
<<<<<<< HEAD

          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':

<<<<<<< HEAD
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {        case 'price-low':
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {        case 'price-low':
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0
      }
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {

    switch (category) {


<<<<<<< HEAD
    switch (category) {

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFilteredServices(filtered)
    switch (category) {

  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {
<<<<<<< HEAD
      case 'Micro SAAS':
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    switch (category) {

=======
=======
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {

=======
    switch (category) {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness':;
        return 'from-purple-500 to-pink-500';
      case 'Enterprise IT':;
        return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech':;
        return 'from-orange-500 to-red-500';
      default:;
        return 'from-gray-500 to-slate-500';    }      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500',;
      default: return 'from-gray-500 to-slate-500';
  };
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'Micro SAAS':;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />;
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />;
  };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Layout>;
      <Head>;
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>;
        <meta
          name='description'
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.'
        />;
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      </Head>;
      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
        {/* Animated Background */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </Head>;


      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
        {/* Animated Background */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0 && 0.1),transparent_50%)]'></div>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]'></div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }}            />
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };



          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div                top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  };
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
left: `${Math.random () * 100}%`,
=======
        <meta name="description" content="Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group" />
      </Head>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0];
                y: [0, -100, 0];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
;
    setFilteredServices (filtered);  }, [search_term, selected_category, selectedPriceRange, sort_by]);
;
  const getCategoryColor = (category: string) =>: any {
    switch (category) {        case 'price - low':;
          return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''));
        case 'price - high':;
          return parse_float (b.price.replace (/[^0 - 9.]/g, '')) - parse_float (a.price.replace (/[^0 - 9.]/g, ''));
        default: return 0;
      }
    });
;
    setFilteredServices (filtered);
  }, [search_term, selected_category, selectedPriceRange, sort_by]);
;
  const getCategoryColor = (category: string) =>: any {
    switch (category) {
      case 'Micro SAAS':;
        return 'from - blue - 500 to - cyan - 500';
      case 'AI & Consciousness':;
        return 'from - purple - 500 to - pink - 500';
      case 'Enterprise IT':;
        return 'from - green - 500 to - emerald - 500';
      case 'Quantum & Emerging Tech':;
        return 'from - orange - 500 to - red - 500';
      default:;
        return 'from - gray - 500 to - slate - 500';    }      case 'Micro SAAS': return 'from - blue - 500 to - cyan - 500';
      case 'AI & Consciousness': return 'from - purple - 500 to - pink - 500';
      case 'Enterprise IT': return 'from - green - 500 to - emerald - 500';
      case 'Quantum & Emerging Tech': return 'from - orange - 500 to - red - 500',
      default: return 'from - gray - 500 to - slate - 500';
  }
;
  const getCategoryIcon = (category: string) =>: any {
    switch (category) {
      case 'Micro SAAS':;
        return <Rocket className='w - 5 h - 5' />;
      case 'AI & Consciousness':;
        return <Brain className='w - 5 h - 5' />;
      case 'Enterprise IT':;
        return <Shield className='w - 5 h - 5' />;
      case 'Quantum & Emerging Tech':;
        return <Atom className='w - 5 h - 5' />;
      default:;
        return <Globe className='w - 5 h - 5' />;    }      case 'Micro SAAS': return <Rocket className="w - 5 h - 5" />;
      case 'AI & Consciousness': return <Brain className="w - 5 h - 5" />;
      case 'Enterprise IT': return <Shield className="w - 5 h - 5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w - 5 h - 5" />,
      default: return <Globe className="w - 5 h - 5" />;
  }
;
  return (
    <Layout>;
      <Head>;
        <title > Comprehensive Services Showcase 2025 - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.';
        />;
        <meta;
          name='keywords';
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group';
        />;
      </Head>;
      {/* Hero Section */}
      <div className='relative min - h-screen flex items - center justify - center overflow - hidden'>;
        {/* Animated Background */}
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - gray - 900 to - black'>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (6, 182, 212, 0.1), transparent_50%)]'></div>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (59, 130, 246, 0.1), transparent_50%)]'></div>;
        </div>;
        {/* Floating Elements */}
        <div className='absolute inset - 0 overflow - hidden'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={i}
              className='absolute w - 2 h - 2 bg - cyan - 400 rounded - full opacity - 20';
              animate={{
                coordinate_x: [0, 100, 0],
                coordinate_y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5}}
              style={{

                left: `${Math.random () * 100}%`,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                top: `${Math.random () * 100}%`,
              }}            />))}
        </div>;
        <div className='relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-6xl mx - auto'>          <motion.div                top: `${Math.random () * 100}%`}}
            />))}
        </div>;
        <div className='relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-6xl mx - auto'>        <div className="relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-6xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 4xl sm:text - 5xl lg:text - 7xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent'>;
              </span>;
              <br />;
              <span className='text - white'>Services Showcase</span>;
            </h1>;
            <p className='text - xl sm:text - 2xl text - cyan - 300 mb - 8 max - w-4xl mx - auto'>;
              Discover our complete portfolio of {all_services.length}+;
              innovative micro SAAS, AI, IT, and emerging technology services;
            </p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Stats */}
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12'>;
              {[;
                {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
<<<<<<< HEAD
=======
            
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Services', value: allServices.length, icon: <Globe className="w-8 h-8" /> },
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> },
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> },
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }
              ].map((stat, index) => (
<<<<<<< HEAD
        <meta
          name='description'
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.'
        />
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'
        />
      </Head>
      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]'></div>
        </div>
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{
                x: [0, 100, 0]
                y: [0, -100, 0]
                opacity: [0.2, 0.8, 0.2]
              }}              transition={{
                duration: 10 + i * 2
                repeat: Infinity
                delay: i * 0.5
              }}
              style={{
                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }}            />

            />
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div                top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
              </span>
              <br />
              <span className='text-white'>Services Showcase</span>
            </h1>
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Discover our complete portfolio of {allServices.length}+
              innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
                {
                  label: 'Total Services'
                  value: allServices.length
                  icon: <Globe className='w-8 h-8' />
                }
                {
                  label: 'AI Solutions'
                  value: innovativeAIServicesEnhanced2025.length
                  icon: <Brain className='w-8 h-8' />
                }
                {
                  label: 'IT Services'
                  value: innovativeITServicesEnhanced2025.length
                  icon: <Shield className='w-8 h-8' />
                }
                {
                  label: 'Emerging Tech'
                  value: emergingTechServicesEnhanced2025.length
                  icon: <Atom className='w-8 h-8' />
                },              ].map((stat, index) => (                { label: 'Total Services', value: allServices.length, icon: <Globe className="w-8 h-8" /> }
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> }
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> }
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <motion.div
                  key={stat.label}
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],
              }}              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0 && 0.5,
              }}
              style={{
                left: `${Math && Math.random() * 100}%`,
                top: `${Math && Math.random() * 100}%`,
              }}            />;
          ))}
        </div>;
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion && motion.div                top: `${Math && Math.random() * 100}%`}}
            />;
          ))}
        </div>;
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
              </span>;
              <br />;
              <span className='text-white'>Services Showcase</span>;
            </h1>;
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>;
              Discover our complete portfolio of {allServices && allServices.length}+;
              innovative micro SAAS, AI, IT, and emerging technology services;
            </p>;
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
              {[;
                {;
                  label: 'Total Services',;
                  value: allServices && allServices.length,;
                  icon: <Globe className='w-8 h-8' />,;
                },;
                {;
                  label: 'AI Solutions',;
                  value: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length,;
                  icon: <Brain className='w-8 h-8' />,;
                },;
                {;
                  label: 'IT Services',;
                  value: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length,;
                  icon: <Shield className='w-8 h-8' />,;
                },;
                {;
                  label: 'Emerging Tech',;
                  value: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length,;
                  icon: <Atom className='w-8 h-8' />,;
                },              ].map((stat, index) => (                { label: 'Total Services', value: allServices && allServices.length, icon: <Globe className="w-8 h-8" /> },;
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> },;
                { label: 'IT Services', value: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> },;
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }
                <motion&& motion.div
                  key={stat && stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======

            </div>;


            {/* Search Bar */}
            <div className='max-w-2xl mx-auto'>;
              <div className='relative'>;
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className='text-center'



<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
<<<<<<< HEAD

                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-cyan-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </motion.div>

              ))}
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Search Bar */}
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />



<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                  label: 'Total Services',
                  value: all_services.length,
                  icon: <Globe className='w - 8 h - 8' />,
                },
                {
                  label: 'AI Solutions',
                  value: innovativeAIServicesEnhanced2025.length,
                  icon: <Brain className='w - 8 h - 8' />,
                },
                {
                  label: 'IT Services',
                  value: innovativeITServicesEnhanced2025.length,
                  icon: <Shield className='w - 8 h - 8' />,
                },
                {
                  label: 'Emerging Tech',
                  value: emergingTechServicesEnhanced2025.length,
                  icon: <Atom className='w - 8 h - 8' />,
                },              ].map ((stat, index) => (                { label: 'Total Services', value: all_services.length, icon: <Globe className="w - 8 h - 8" /> },
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className="w - 8 h - 8" /> },
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className="w - 8 h - 8" /> },
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className="w - 8 h - 8" /> }
                <motion.div;
                  key={stat.label}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className='text - center';
                >;
                  <div className='inline - flex items - center justify - center w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full mb - 3 text - cyan - 400'>;
                    {stat.icon}
                  </div>;
                  <div className='text - 3xl font - bold text - white mb - 1'>;
                    {stat.value}
                  </div>;
                  <div className='text - sm text - cyan - 300'>{stat.label}</div>                </motion.div>                >;
                  <div className="inline - flex items - center justify - center w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full mb - 3 text - cyan - 400">;
                    {stat.icon}
                  </div>;
                  <div className="text - 3xl font - bold text - white mb - 1">{stat.value}</div>;
                  <div className="text - sm text - cyan - 300">{stat.label}</div>;
                </motion.div>))}
            </div>;
            {/* Search Bar */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======


      {/* Filters and Controls */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;


<<<<<<< HEAD
      {/* Filters and Controls */}
            </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>;
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-900 text-white'>                    {range && range.label}              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e && e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50";
              >;
                {priceRanges && priceRanges.map((range) => (;
                  <option key={range && range.value} value={range && range.value} className="bg-gray-900 text-white">;
                    {range && range.label}
                  </option>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
=======
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  type="text"
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
<<<<<<< HEAD
=======
      <div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {categories.map(category => (                <button      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <button
            <div className='max - w-2xl mx - auto'>;
              <div className='relative'>;
                <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                <input;
                  type='text';
                  placeholder='Search for services, features, or solutions...';
                  value={search_term}
                  on_change={e => setSearchTerm (e.target.value)}
                  className='w - full pl - 12 pr - 4 py - 4 bg - white / 10 backdrop - blur - lg border border - cyan - 500 / 30 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50'                />                <input;
                  type="text";
                  placeholder="Search for services, features, or solutions...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full pl - 12 pr - 4 py - 4 bg - white / 10 backdrop - blur - lg border border - cyan - 500 / 30 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
                />;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Filters and Controls */}
      <div className='bg - black / 50 backdrop - blur - lg border - b border - cyan - 500 / 20 sticky top - 20 z - 40'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
          <div className='flex flex - col lg:flex - row lg:items - center lg:justify - between space - y-4 lg:space - y-0'>;
            {/* Category Filters */}
            <div className='flex flex - wrap items - center space - x-2'>;
              {categories.map (category => (                <button      <div className="bg - black / 50 backdrop - blur - lg border - b border - cyan - 500 / 20 sticky top - 20 z - 40">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6">;
          <div className="flex flex - col lg:flex - row lg:items - center lg:justify - between space - y-4 lg:space - y-0">;
            {/* Category Filters */}
            <div className="flex flex - wrap items - center space - x-2">;
              {categories.map ((category) => (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {categories.map(category => (                <button

                <button

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                      : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  {category.icon}
<<<<<<< HEAD

                  <span>{category.name}</span>;
                  <span className='bg - white / 20 px - 2 py - 1 rounded - full text - xs'>                    {category.count}                  <span className="bg - white / 20 px - 2 py - 1 rounded - full text - xs">;

<<<<<<< HEAD
                  <span>{category.name}</span>;
                  <span className='bg - white / 20 px - 2 py - 1 rounded - full text - xs'>                    {category.count}                  <span className="bg - white / 20 px - 2 py - 1 rounded - full text - xs">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {category.count}
                  </span>;
                </button>))}
            </div>;
            {/* Price and Sort Controls */}

<<<<<<< HEAD
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}

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
=======
            <div className='flex flex - wrap items - center space - x-4'>;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}

                    {category.count}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </span>
                </button>
              ))}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>

<<<<<<< HEAD
<<<<<<< HEAD
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}

              </select>;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-900 text-white'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >                    {range.label}              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
                    {range.label}
                  </option>
                ))}
              </select>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >                    {range.label}

                    {range.label}

                  </option>
                ))}
              </select>


<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Sort Options */}
              <select
                value={sortBy}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </select>
              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button
<<<<<<< HEAD
=======
=======

              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                ))}
              </select>

              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">

                <button

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button

                <button

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'grid';
                      ? 'bg-cyan-500 text-white';
                      : 'text-gray-400 hover:text-white';
                  }`}
<<<<<<< HEAD
<<<<<<< HEAD
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500 text-white';
                      : 'text-white';
                  }`}
<<<<<<< HEAD
<<<<<<< HEAD
                >
                  <List className='w-4 h-4' />                </button>                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;


      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Results Count */}
        <div className='mb-8'>;
          <p className='text-gray-400'>            Showing {filteredServices && filteredServices.length} of {allServices && allServices.length} services      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        {/* Results Count */}
<<<<<<< HEAD
<<<<<<< HEAD
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Services Grid/List */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-gray-400'>            Showing {filteredServices.length} of {allServices.length} services      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
          </p>
        </div>
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {filteredServices.map((service, index) => (          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            Showing {filteredServices.length} of {allServices.length} services

          </p>
        </div>
        {viewMode === 'grid' ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
        <div className="mb-8">;
          <p className="text-gray-400">;
          </p>;
        </div>;
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {filteredServices && filteredServices.map((service, index) => (          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices && filteredServices.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
<<<<<<< HEAD


              >
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className='ml-2'>{service && service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service && service.icon}              >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'

              >
<<<<<<< HEAD
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                  >
                    {getCategoryIcon(service.category)}
                    <span className='ml-2'>{service.category}</span>                  </span>
                </div>
=======
=======
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'




              >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span

                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className='ml-2'>{service && service.category}</span>                  </span>;
                </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Service Icon */}
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service.icon}              >
                {/* Category Badge */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
                  </span>
                </div>
                {/* Service Icon */}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <div className="mb-4">

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}


                    {service.icon}


                  </div>
                </div>
                {/* Service Info */}

<<<<<<< HEAD
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
=======
=======
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}


                    {service.icon}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                </div>
                {/* Service Info */}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Services Grid / List */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
        {/* Results Count */}
        <div className='mb - 8'>;
          <p className='text - gray - 400'>            Showing {filtered_services.length} of {all_services.length} services      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
        {/* Results Count */}
        <div className="mb - 8">;
          <p className="text - gray - 400">;
          </p>;
        </div>;
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {filtered_services.map ((service, index) => (          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                {/* Category Badge */}
                <div className='absolute top - 4 right - 4'>;
                  <span;
                    className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}
                  >;
                    {getCategoryIcon (service.category)}
                    <span className='ml - 2'>{service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                    {service.icon}              >;
                {/* Category Badge */}
                <div className="absolute top - 4 right - 4">;
                  <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                    {getCategoryIcon (service.category)}
                    <span className="ml - 2">{service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                <div className="mb - 4">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {service.icon}

                    {service.icon}

                  </div>
                </div>
                {/* Service Info */}
<<<<<<< HEAD



=======
=======
                    {service.icon}
                  </div>;
                </div>;
                {/* Service Info */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;

=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {service.name}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'>;
                  {service.tagline}
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}
                </h3>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>

                  {service.name}
                </h3>
                <p className='text-gray-400 mb-3 line-clamp-2'>
                  {service.tagline}
                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service.description}
                </p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}

<<<<<<< HEAD
                {/* Price */}                  {service.name}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service.description}
                </p>
                {/* Price */}                  {service.name}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                </p>;
                <p className='text - sm text - gray - 500 mb - 4 line - clamp - 3'>                  {service.description}
                </p>;
                {/* Price */}                  {service.name}
                </h3>;
                <p className="text - gray - 400 mb - 3 line - clamp - 2">;
                  {service.tagline}
                </p>;
                <p className="text - sm text - gray - 500 mb - 4 line - clamp - 3">;
                  {service.description}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
<<<<<<< HEAD
<<<<<<< HEAD
                    <Users className="w-4 h-4" />
=======

                    <Users className="w-4 h-4" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    <Users className="w-4 h-4" />

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Price */}

                  {service.description}
                </p>

                {/* Price */}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
<<<<<<< HEAD

                    )}

                <div className="mb-4 text-xs text-gray-500">

                  <div className="flex items-center justify-between">
<<<<<<< HEAD

                    )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
<<<<<<< HEAD
=======
=======

                    )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>
                </div>

                {/* Market Info */}
                <div className='mb-4 text-xs text-gray-500'>
<<<<<<< HEAD
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service.marketSize}</span>                <div className="mb-4 text-xs text-gray-500">
=======

                <div className="mb-4 text-xs text-gray-500">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="flex items-center justify-between">
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className='mb-4 text-xs text-gray-500'>
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service.marketSize}</span>

<<<<<<< HEAD
=======
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service.marketSize}</span>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                {/* CTA Button */}
                <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>                  Learn More                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
=======
<<<<<<< HEAD
</div>;
                </div>;
                {/* Market Info */}
                <div className='mb-4 text-xs text-gray-500'>;
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service && service.marketSize}</span>                <div className="mb-4 text-xs text-gray-500">;
                  <div className="flex items-center justify-between">;
                    <span>Market Size: {service && service.marketSize}</span>;
                    <span>Growth: {service && service.growthRate}</span>;
                  </div>;
                </div>;
                {/* CTA Button */}

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
<<<<<<< HEAD
          <div className='space-y-6'>            {filteredServices.map((service, index) => (          <div className="space-y-6">
=======
          <div className="space-y-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {filteredServices.map((service, index) => (
              <motion.div
                </p>;
                {/* Price */}
                <div className='mb - 4'>;
                  <span className='text - 2xl font - bold text - cyan - 400'>;
                    {service.price}
                  </span>;
                  <span className='text - gray - 500 text - sm ml - 2'>/month</span>;
                {/* Stats */}
                <div className='flex items - center justify - between mb - 4 text - sm'>;
                  <div className='flex items - center space - x-1 text - yellow - 400'>;
                    <Star className='w - 4 h - 4 fill - current' />;
                    <span className='text - white'>{service.rating}</span>;
                    <span className='text - gray - 500'>({service.reviews})</span>;
                  </div>;
                  <div className='flex items - center space - x-1 text - gray - 400'>;
                    <Users className='w - 4 h - 4' />                    <span>{service.customers.toLocaleString ()}</span>                  <div className="flex items - center space - x-1 text - gray - 400">;
                    <Users className="w - 4 h - 4" />;
                    <span>{service.customers.toLocaleString ()}</span>;
                  </div>;
                </div>;
                {/* Features Preview */}
                <div className='mb - 4'>;
                  <div className='text - xs text - gray - 500 mb - 2'>;
                    Key Features:;
                  </div>;
                  <div className='space - y-1'>;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center space - x-2 text - sm text - gray - 400';
                      >;
                        <CheckCircle className='w - 3 h - 3 text - cyan - 400' />;
                        <span className='line - clamp - 1'>{feature}</span>;
                      </div>))}
                    {service.features.length > 3 && (
                      <div className='text - xs text - cyan - 400'>                        +{service.features.length - 3} more features                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 400">;
                        <CheckCircle className="w - 3 h - 3 text - cyan - 400" />;
                        <span className="line - clamp - 1">{feature}</span>;
                      </div>))}
                    {service.features.length > 3 && (
                      <div className="text - xs text - cyan - 400">;
                        +{service.features.length - 3} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Market Info */}
                <div className='mb - 4 text - xs text - gray - 500'>;
                  <div className='flex items - center justify - between'>                    <span > Market Size: {service.market_size}</span>                <div className="mb - 4 text - xs text - gray - 500">;
                  <div className="flex items - center justify - between">;
                    <span > Market Size: {service.market_size}</span>;
                    <span > Growth: {service.growth_rate}</span>;
                  </div>;
                </div>;
                {/* CTA Button */}
                <button className='w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 4 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105'>                  Learn More                <button className="w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 4 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105">;
                  Learn More;
                </button>;
              </motion.div>))}
          </div>) : (
          <div className='space - y-6'>            {filtered_services.map ((service, index) => (          <div className="space - y-6">;
            {filtered_services.map ((service, index) => (
              <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={service.id}
                initial={{ opacity: 0, coordinate_x: -20 }}
                animate={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
=======

=======
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Service Details */}
                  <div className='flex-1 min-w-0'>;
                    <div className='flex items-start justify-between mb-3'>;
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-lg text-cyan-300 mb-2'>;
                          {service && service.tagline}
                        </p>;
                        <p className='text-gray-400 mb-4'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='text-right'>;
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                          {service && service.price}
                        </div>;
                        <div className='text-gray-500 text-sm'>/month</div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Service Details */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                        <span




<<<<<<< HEAD
                        <span
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <span

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                          {service.category}
<<<<<<< HEAD
                        </span>
                      </div>
                    </div>
{/* Stats Row */}
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-white font-medium">{service.customers.toLocaleString()}</span>
                        <span className="text-gray-500">customers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-white font-medium">{service.growthRate}</span>
                        <span className="text-gray-500">growth</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'

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

=======

=======

                          {service.category}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </span>
                      </div>
                    </div>
                    {/* Stats Row */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className='flex items-center space-x-8 mb-4 text-sm'>
                      <div className='flex items-center space-x-1 text-yellow-400'>
                        <Star className='w-4 h-4 fill-current' />
                        <span className='text-white font-medium'>
                          {service.rating}
                        </span>
                        <span className='text-gray-500'>
                          ({service.reviews} reviews)
                        </span>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      </div>


<<<<<<< HEAD
<<<<<<< HEAD

                      </div>

                      </div>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
<<<<<<< HEAD
<<<<<<< HEAD
                          </div>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        ))}
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Features */}

                            <span>{feature}</span>

                          </div>
                        ))}
                      </div>
                    </div>

=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        ))}

                      </div>;
                    </div>;


=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {/* CTA */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
</div>;
        )}

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className='text-center py-20'>
            <div className='w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-cyan-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-gray-400 mb-6'>
              Try adjusting your search terms or filters to find what you're
              looking for.            </p>          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
<<<<<<< HEAD

                      </div>;
                    </div>;




                    {/* CTA */}


            ))}
          </div>;
        )}


            </p>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button
              onClick={() => {;
                setSearchTerm('');
                setSelectedCategory('All Services');

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'            >                setSelectedPriceRange('all');
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200";
            >;
              Clear All Filters;
            </button>;
          </div>;
        )}
      </div>;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200'            >                setSelectedPriceRange ('all');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }}
              className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200";
            >;
              Clear All Filters;
            </button>;
          </div>)}
      </div>;
      {/* CTA Section */}
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'>              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement the perfect solution for your needs. ;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <a
                href="/contact"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              <a
                href="/contact"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  filtered = filtered && filtered.filter (service => service && service.name.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.description.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.tagline.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) ;
}//Sort services filtered && filtered.sort ( (a, b) => {;
  switch (sortBy) {;
  case 'popular': return b && b.customers - a && a.customers;
case 'rating': return b && b.rating - a && a.rating;
case 'newest': return new Date (b && b.launchDate) .getTime () - new Date (a && a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered) ;
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
};
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {;
  Math && Math.random () * 100 ;
}%`;
top: `$ {;
  Math && Math.random () * 100 ;
}%` ;
}/>) ) ;
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion&& motion.div initial= {
  {
  opacity: 0, y: 30
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  duration: 0 && 0.8 
}viewport= {
  {
  once: true 
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion && motion.div> </div> </div> </Layout>)   );
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20'>;
}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

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
=======

=======

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}//Sort services filtered.sort ( (a, b) => {
  switch (sort_by) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launch_date) .get_time () - new Date (a.launch_date) .get_time ();
case 'price - low': setFilteredServices (filtered);
}, [search_term, selected_category, selectedPriceRange, sort_by]);
;
}
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100;
}%`;
top: `$ {
  Math.random () * 100;
}%`;
}/>) );
}</div> <div className=" relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-6xl mx - auto"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}> <h1 className=" text - 4xl sm:text - 5xl lg:text - 7xl font - bold text - white mb - 6"> <span className=" bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent"> Comprehensive </span> <br /> <span className=" text - white">Services Showcase</span> </h1> </motion.div>) );
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name;
}on_click= {
  () => setSelectedCategory (category.name);
}className= {
  `flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 $ {
  selected_category === category.name ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25' : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
}`;
}> </span> </button>) );
}</div> </option>) );
}</select> {
  /* Sort Options */;
}<select </option>) );
}</select> <button on_click= {
  () => setViewMode ('grid');
}className= {
  `p - 2 rounded - md transition - all duration - 200 $ {
  view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
}`;
}> <Grid3X3 className=" w - 4 h - 4"/> </button> <button on_click= {
  () => setViewMode ('list');
}className= {
  `p - 2 rounded - md transition - all duration - 200 $ {
  view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - white';
}`;
}> <List className=" w - 4 h - 4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3;
}more features </div>);
}</div> </div> Learn More </button> </motion.div>) );
}</div> </span> </div> </div> </div>) );
}</div> </div> </div> </div> </div> </div> </motion.div>) );
}</div>);
}</div> <h3 className=" text - 2xl font - bold text - white mb - 2">No services found</h3> <p className=" text - gray - 400 mb - 6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button on_click= {
  () => {
  > Clear All Filters </button> </div>);
}</div> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
  {
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
  once: true;
}> <h2 className=" text - 4xl font - bold text - white mb - 6"> Ready to Transform Your Business? </h2> <p className=" text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105"> Get Started Today </a> <a href=" /pricing"className=" border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

=======
  once: true 


}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
