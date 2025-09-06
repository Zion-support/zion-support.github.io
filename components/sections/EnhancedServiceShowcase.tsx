<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD

<<<<<<< HEAD
import {

=======

interface Service {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
  Database,
  Cloud,
import Button from '../ui / Button';
interface Service {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Star,;
  Users,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Zap,;
  Shield,;
  Rocket,;
  Brain,;
  Globe,;
  Lock,;
  Code,;
  Database,;
  Cloud,;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

  contact_info: {

=======
  contact_info: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    mobile: string;
    email: string;
    address: string;
    website: string;
  }
<<<<<<< HEAD

  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;

=======
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  customers: number;
  rating: number;
  reviews: number;
<<<<<<< HEAD

;
interface EnhancedServiceShowcaseProps {

=======
;
interface EnhancedServiceShowcaseProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title: string;
  subtitle: string;
  show_filters?: boolean;
  services?: Service[];
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { 
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  subtitle;
  showFilters = false;
  services = []
  maxServices = 12
<<<<<<< HEAD

}) => {

=======
}) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🧠' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];

=======
];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K/month' },
    { id: 'medium', name: '$1K - $5K/month' },
    { id: 'high', name: '$5K - $20K/month' },
    { id: 'premium', name: '$20K+/month' }
<<<<<<< HEAD

  ];
  const sortOptions = [

=======
];
  const sortOptions = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' }
<<<<<<< HEAD
  ];


=======
];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
        break;
      default:
        break;
    }
    return filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [
    {
      label: 'Total Services'
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

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI
        });
    return filtered.slice (0, max_services);
  }, [services, selected_category, selectedPriceRange, sort_by, max_services]);
;
  const stats = [;
    {
      label: 'Total Services',
      value: services.length,
      icon: Rocket,
      color: 'text - blue - 400',
    },
    {
      label: 'Active Customers',
      value: services.reduce ((sum, s) => sum + (s.customers || 0), 0),
      icon: Users,
      color: 'text - green - 400',
    },
    {
      label: 'Average Rating',
      value: (
        services.reduce ((sum, s) => sum + (s.rating || 0), 0) / services.length).to_fixed (1),
      icon: Star,
      color: 'text - yellow - 400',
    },
    {
      label: 'Market Growth',
      value: '300%+',
      icon: TrendingUp,
      color: 'text - purple - 400',
    },
  ];
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <div className='max - w-7xl mx - auto'>;
        {/* Header */}
        <div className='text - center mb - 16'>          <motion.h2;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'          >        });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        break;
      case 'price - low':;
        filtered.sort ((a, b) => parse_float (a.price.replace (/[$]/g, '')) - parse_float (b.price.replace (/[$]/g, '')));
        break;
      case 'price - high':;
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, '')) - parse_float (a.price.replace (/[$]/g, '')));
        break;
<<<<<<< HEAD


    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);

=======
    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ];
=======
  ];



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [;
    { label: 'Total Services', value: services && services.length, icon: Rocket, color: 'text-blue-400' },;
    { label: 'Active Customers', value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0), icon: Users, color: 'text-green-400' },;
    { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },;
<<<<<<< HEAD

    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
<<<<<<< HEAD
        <div className="text-center mb-16">
=======
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
        <div className="text-center mb-16">
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('DeFi') || service.category.includes('NFT'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') || service.category.includes('Autonomous') || service.category.includes('Space') || service.category.includes('Biotech'))),

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

=======
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
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

=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      label: 'Total Services'
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
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'          >        });
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, '')));
        break;
      default: break
    }
    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' }
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers |0), 0), icon: Users, color: 'text-green-400' }
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating |0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' }
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >

=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {title}
=======
<<<<<<< HEAD
className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
=======
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {title}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </motion && motion.h2>;
          <motion&& motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.2 }}

=======


            {subtitle}

          </motion && motion.p>;


=======

            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

            {subtitle}
          </motion.p>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion && motion.p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Stats */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
            {stats.map((stat, index) => (
=======
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
=======
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

            {subtitle}
          </motion.p>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======

          </motion && motion.div>;
        </div>;


=======


=======
<<<<<<< HEAD
            ))}
<<<<<<< HEAD
          </motion && motion.div>;
        </div>;
=======
          </motion.div>
        </div>
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ))}
          </motion.div>
        </div>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Filters */}
        {showFilters && (;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-12'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
            className="mb-12"
          >
=======
            className='mb-12'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Category Filter */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Category
                  </label>
                  <select
                    value={selectedCategory}
<<<<<<< HEAD
<<<<<<< HEAD
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >

=======

=======
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
<<<<<<< HEAD
                    {categories.map(category => (                      <option key={category.id} value={category.id}>          >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Category Filter */}
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-Category">Category</label>;
                  <select
                    value={selectedCategory}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        {category.icon} {category.name}
                      </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}
<<<<<<< HEAD
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Price Range
                  </label>
                  <select
                    value={selectedPriceRange}
                    onChange={e => setSelectedPriceRange(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >

                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >

=======

                  </select>;
                </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Price Range Filter */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        {range.name}

                  </select>;
                </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Sort Options */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        {option.name}
                      </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}

=======
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
=======
                    {categories.map(category => (                      <option key={category.id} value={category.id}>

                      <option key={category.id} value={category.id}>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {category.icon} {category.name}
                      </option>
                    ))}
<<<<<<< HEAD
                  </select>;
                </div>;
=======
                  </select>
                </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-Price Range">Price Range</label>
                  <select
      default: break;
    }
    return filtered.slice (0, max_services);
  }, [services, selected_category, selectedPriceRange, sort_by, max_services]);
;
  const stats = [;
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text - blue - 400' },
    { label: 'Active Customers', value: services.reduce ((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text - green - 400' },
    { label: 'Average Rating', value: (services.reduce ((sum, s) => sum + (s.rating || 0), 0) / services.length).to_fixed (1), icon: Star, color: 'text - yellow - 400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text - purple - 400' }
  ];
;
  return (
    <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
      <div className="max - w-7xl mx - auto">;
        {/* Header */}
        <div className="text - center mb - 16">;
          <motion.h2;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'            className="text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6";
          >;
            {title}
          </motion.h2>;
          <motion.p;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'          >            className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto";
          >;
            {subtitle}
          </motion.p>;
          {/* Stats */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto';
          >;
            {stats.map ((stat, index) => (
              <div key={index} className='text - center'>;
                <div className={`${stat.color} mb - 2 flex justify - center`}>;
                  <stat.icon className='w - 8 h - 8' />;
                </div>;
                <div className='text - 2xl font - bold text - white'>;
                  {stat.value}
                </div>;
                <div className='text - sm text - gray - 400'>{stat.label}</div>              </div>          >;
            {stats.map ((stat, index) => (
              <div key={index} className="text - center">;
                <div className={`${stat.color} mb - 2 flex justify - center`}>;
                  <stat.icon className="w - 8 h - 8" />;
                </div>;
                <div className="text - 2xl font - bold text - white">{stat.value}</div>;
                <div className="text - sm text - gray - 400">{stat.label}</div>;
              </div>))}
          </motion.div>;
        </div>;
        {/* Filters */}
        {show_filters && (
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb - 12';
          >;
            <div className='bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50'>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
                {/* Category Filter */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Category;
                  </label>;
                  <select;
                    value={selected_category}
                    on_change={e => setSelectedCategory (e.target.value)}
                    className='w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                  >;
                    {categories.map (category => (                      <option key={category.id} value={category.id}>          >;
            <div className="bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50">;
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
                {/* Category Filter */}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 3" html_for="input - Category">Category</label>;
                  <select;
                    value={selected_category}
                    on_change={(e) => setSelectedCategory (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  >;
                    {categories.map ((category) => (
                      <option key={category.id} value={category.id}>;
                        {category.icon} {category.name}
                      </option>))}
                  </select>;
                </div>;
                {/* Price Range Filter */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Price Range;
                  </label>;
                  <select;
                    value={selectedPriceRange}
<<<<<<< HEAD
                    on_change={e => setSelectedPriceRange (e.target.value)}
                    className='w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                  >;
                    {price_ranges.map (range => (                      <option key={range.id} value={range.id}>                  <select;
                    value={selectedPriceRange}
                    on_change={(e) => setSelectedPriceRange (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  >;
                    {price_ranges.map ((range) => (
                      <option key={range.id} value={range.id}>;
                        {range.name}
                  </select>;
                </div>;
=======
                    onChange={e => setSelectedPriceRange(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
<<<<<<< HEAD
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
=======
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>

                      <option key={range.id} value={range.id}>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-Sort By">Sort By</label>
                  <select
                    value={sortBy}
<<<<<<< HEAD
=======
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
<<<<<<< HEAD
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>                  <select
                    value={sortBy}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
=======
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>

                      <option key={option.id} value={option.id}>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {option.name}
                      </option>
                    ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </select>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD

                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.8 }}

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
<<<<<<< HEAD
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
                whileHover={{ y: -5, scale: 1.02 }}
                className='group'

=======

                className='group'




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>
                  {/* Popular Badge */}
                  {service.popular && (

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular

                      ⭐ Most Popular

<<<<<<< HEAD
                    </div>
                  )}

                  {/* Header */}
                  <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-3xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
                          {service.price}
                        </div>
                        <div className='text-sm text-gray-400'>
                          {service.period}
                        </div>

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </div>
                  )}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Header */}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
                whileHover={{ y: -5, scale: 1.02 }}
                className='group'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              >
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>
                  {/* Popular Badge */}
                  {service.popular && (
<<<<<<< HEAD
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Most Popular
<<<<<<< HEAD
                    </div>
                  )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular

                      ⭐ Most Popular

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </div>
                  )}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  {/* Header */}
                  <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-3xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          {service.price}
                        </div>;
                        <div className='text - sm text - gray - 400'>;
                          {service.period}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                      {service.name}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
<<<<<<< HEAD

=======
=======
                        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>
<<<<<<< HEAD
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}                      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    </h3>;
                    <p className='text - gray - 300 text - sm leading - relaxed'>                      {service.tagline}                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
                      {service.name}
                    </h3>;
                    <p className="text - gray - 300 text - sm leading - relaxed">;
                      {service.tagline}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className='mb-6'>;
                    <div className='flex items-center justify-between mb-4'>;
                      <div className='text-3xl'>{service && service.icon}</div>;
                      <div className='text-right'>;
                        <div className='text-2xl font-bold text-white'>;
                          {service && service.price}
                        </div>;
                        <div className='text-sm text-gray-400'>;
                          {service && service.period}
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service && service.tagline}                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                      {service && service.name}
                    </h3>;
                    <p className="text-gray-300 text-sm leading-relaxed">;
                      {service && service.tagline}
                    </p>;
                  </div>;
<<<<<<< HEAD


                  {/* Features */}

                        </div>




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>
<<<<<<< HEAD

=======

                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}

                      {service.tagline}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </p>
                  </div>
                  {/* Features */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      Key Features
                    </h4>
                    <ul className='space-y-2'>
                      {service.features.slice(0, 4).map((feature, idx) => (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <li
                          key={idx}
                          className='text-sm text-gray-400 flex items-start'>;
                          <span className='text-cyan-400 mr-2'>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className="space-y-2">;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;
                        <li key={idx} className="text-sm text-gray-400 flex items-start">;
                          <span className="text-cyan-400 mr-2">•</span>;

=======
=======
                  {/* Features */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
=======
=======
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}

                      {service.tagline}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </p>
                  </div>
                  {/* Features */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          {feature}
                        </li>;
                      ))}
<<<<<<< HEAD
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
=======
                    </ul>
                  </div>
<<<<<<< HEAD

=======



                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>
=======

                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.rating}
                      </div>
                      <div className='text-xs text-gray-400'>Rating</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.customers?.toLocaleString() |'0'}
                      </div>
                      <div className='text-xs text-gray-400'>Customers</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.trialDays}
                      </div>
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |'0'}</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>
                  {/* ROI Highlight */}
<<<<<<< HEAD
<<<<<<< HEAD

=======

                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">

=======
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
=======
<<<<<<< HEAD
                  <div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'>
                    <div className='text-sm text-green-400 font-semibold mb-1'>
                      🚀 ROI Promise
                    </div>
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service.roi}                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.roi}
=======

<<<<<<< HEAD

                      {service.roi}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </div>
                  </div>
                  {/* Market Position */}

                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">

=======
                      {service.roi}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </div>
                  </div>
                  {/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.marketPosition}
                    </div>
                  </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


                  {/* CTA */}

                  {/* CTA */}
                  <div className='mt-auto'>

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <Button
                      href={service && service.link}
                      variant='primary'

=======
                  {/* CTA */}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className='w-full group-hover:bg-cyan-500 transition-colors'>;
                      Get Started;
                      <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />                    </Button>;
                  </div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {/* Contact Info */}                    <Button
                      href={service && service.link}
                  <div className="mt-auto">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                  <div className='mt-auto'>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Button
                      href={service.link}
                      variant="primary"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="w-full group-hover:bg-cyan-500 transition-colors">;
                      Get Started;
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />;
                    </Button>;
                  </div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
<<<<<<< HEAD
                    </div>
                  </div>
                </div>
              </motion.div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
<<<<<<< HEAD
          </AnimatePresence>
        </motion.div>

=======

          </AnimatePresence>;
        </motion && motion.div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                    </div>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
</AnimatePresence>;
        </motion && motion.div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text-center mt-16'

=======
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. 
              Get started today and see the future of business technology.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
                View Pricing Plans
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
                Schedule a Consultation
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
              <Button href=&quot;/pricing&quot; variant=&quot;secondary&quot; className=&quot;text-lg px-8 py-4&quot;>
                View Pricing Plans
                <DollarSign className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
            </div>
            <div className=&quot;mt-6 text-sm text-gray-400&quot;>
              <p>📞 Call us: <span className=&quot;text-cyan-400&quot;>+1 302 464 0950</span></p>
              <p>📧 Email: <span className=&quot;text-cyan-400&quot;>kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className=&quot;text-cyan-400&quot;>https://ziontechgroup.com</span></p>

            </div>
=======
          </AnimatePresence>
        </motion.div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text-center mt-16'
<<<<<<< HEAD
=======

        >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of companies already achieving breakthrough results
              with our cutting-edge AI, quantum, and blockchain solutions. Get
              started today and see the future of business technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  );
<<<<<<< HEAD

export default EnhancedServiceShowcase;  )
}
export default EnhancedServiceShowcase;

}
}
}
}
}
}

export default EnhancedServiceShowcase;

=======


=======
              <Button
                href='/contact'
                variant='primary'
                className='text-lg px-8 py-4'
              >
                Schedule a Consultation
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                href='/pricing'
                variant='secondary'
                className='text-lg px-8 py-4'
              >
                View Pricing Plans
                <DollarSign className='ml-2 w-5 h-5' />
              </Button>
            </div>
            <div className='mt-6 text-sm text-gray-400'>
              <p>
                📞 Call us:{' '}
                <span className='text-cyan-400'>+1 302 464 0950</span>
              </p>
              <p>
                📧 Email:{' '}
                <span className='text-cyan-400'>kleber@ziontechgroup.com</span>
              </p>
              <p>
                🌐 Visit:{' '}
                <span className='text-cyan-400'>https://ziontechgroup.com</span>
              </p>            </div>            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default EnhancedServiceShowcase;  );
};
export default EnhancedServiceShowcase;
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </p>;
                  </div>;
                  {/* Features */}
                  <div className='mb - 6'>;
                    <h4 className='text - sm font - semibold text - gray - 300 mb - 3 flex items - center'>;
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400' />;
                      Key Features;
                    </h4>;
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li;
                          key={idx}
                          className='text - sm text - gray - 400 flex items - start';
                        >;
                          <span className='text - cyan - 400 mr - 2'>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className="space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li key={idx} className="text - sm text - gray - 400 flex items - start">;
                          <span className="text - cyan - 400 mr - 2">•</span>;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;
                  {/* Stats */}
                  <div className='grid grid - cols - 3 gap - 4 mb - 6 text - center'>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.rating}
                      </div>;
                      <div className='text - xs text - gray - 400'>Rating</div>;
                    </div>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.customers?.toLocaleString () || '0'}
                      </div>;
                      <div className='text - xs text - gray - 400'>Customers</div>;
                    </div>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.trial_days}
                      </div>;
                      <div className='text - xs text - gray - 400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                      <div className="text - lg font - bold text - white">{service.rating}</div>;
                      <div className="text - xs text - gray - 400">Rating</div>;
                    </div>;
                    <div>;
                      <div className="text - lg font - bold text - white">{service.customers?.toLocaleString () || '0'}</div>;
                      <div className="text - xs text - gray - 400">Customers</div>;
                    </div>;
                    <div>;
                      <div className="text - lg font - bold text - white">{service.trial_days}</div>;
                      <div className="text - xs text - gray - 400">Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}
                  <div className='mb - 6 p - 4 bg - gradient - to - r from - green - 900 / 20 to - blue - 900 / 20 rounded - lg border border - green - 500 / 20'>;
                    <div className='text - sm text - green - 400 font - semibold mb - 1'>;
                      🚀 ROI Promise;
                    </div>;
                    <div className='text - xs text - gray - 300 leading - relaxed'>                      {service.roi}                  <div className="mb - 6 p - 4 bg - gradient - to - r from - green - 900 / 20 to - blue - 900 / 20 rounded - lg border border - green - 500 / 20">;
                    <div className="text - sm text - green - 400 font - semibold mb - 1">🚀 ROI Promise</div>;
                    <div className="text - xs text - gray - 300 leading - relaxed">;
                      {service.roi}
                    </div>;
                  </div>;
                  {/* Market Position */}
                  <div className='mb - 6 p - 4 bg - gray - 800 / 30 rounded - lg'>;
                    <div className='text - sm text - cyan - 400 font - semibold mb - 2'>;
                      📊 Market Position;
                    </div>;
                    <div className='text - xs text - gray - 300 leading - relaxed'>                      {service.market_position}                  <div className="mb - 6 p - 4 bg - gray - 800 / 30 rounded - lg">;
                    <div className="text - sm text - cyan - 400 font - semibold mb - 2">📊 Market Position</div>;
                    <div className="text - xs text - gray - 300 leading - relaxed">;
                      {service.market_position}
                    </div>;
                  </div>;
                  {/* CTA */}
                  <div className='mt - auto'>;
                    <Button;
                      href={service.link}
                      variant='primary';
                      className='w - full group - hover:bg - cyan - 500 transition - colors';
                    >;
                      Get Started;
                      <ArrowRight className='ml - 2 w - 4 h - 4 group - hover:translate - x-1 transition - transform' />                    </Button>;
                  </div>;
                  {/* Contact Info */}                    <Button;
                      href={service.link}
                      variant="primary";
                      className="w - full group - hover:bg - cyan - 500 transition - colors";
                    >;
                      Get Started;
                      <ArrowRight className="ml - 2 w - 4 h - 4 group - hover:translate - x-1 transition - transform" />;
                    </Button>;
                  </div>;
                  {/* Contact Info */}
                  <div className='mt - 4 text - center'>;
                    <div className='text - xs text - gray - 500'>;
                      Contact:{' '}
                      <span className='text - cyan - 400'>;
                        {service.contact_info.mobile}
                      </span>;
                    </div>;
                    <div className='text - xs text - gray - 500'>;
                      Email:{' '}
                      <span className='text - cyan - 400'>;
                        {service.contact_info.email}
                      </span>                    </div>                  <div className="mt - 4 text - center">;
                    <div className="text - xs text - gray - 500">;
                      Contact: <span className="text - cyan - 400">{service.contact_info.mobile}</span>;
                    </div>;
                    <div className="text - xs text - gray - 500">;
                      Email: <span className="text - cyan - 400">{service.contact_info.email}</span>;
                  </div>;
                </div>;
              </motion.div>))}
          </AnimatePresence>;
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text - center mt - 16';
          <div className='bg - gradient - to - r from - cyan - 900 / 20 to - purple - 900 / 20 backdrop - blur - sm rounded - 2xl p - 8 border border - cyan - 500 / 20'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting - edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='/contact';
                variant='primary';
                className='text - lg px - 8 py - 4';
              >;
                Schedule a Consultation;
                <ArrowRight className='ml - 2 w - 5 h - 5' />;
              </Button>;
              <Button;
                href='/pricing';
                variant='secondary';
                className='text - lg px - 8 py - 4';
              >;
                View Pricing Plans;
                <DollarSign className='ml - 2 w - 5 h - 5' />;
              </Button>;
            </div>;
            <div className='mt - 6 text - sm text - gray - 400'>;
              <p>;
                📞 Call us:{' '}
                <span className='text - cyan - 400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{' '}
                <span className='text - cyan - 400'>kleber@ziontechgroup.com</span>;
              </p>;
              <p>;
                🌐 Visit:{' '}
                <span className='text - cyan - 400'>https://ziontechgroup.com</span>;
              </p>            </div>            <div className="mt - 6 text - sm text - gray - 400">;
              <p>📞 Call us: <span className="text - cyan - 400">+1 302 464 0950</span></p>;
              <p>📧 Email: <span className="text - cyan - 400">kleber@ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text - cyan - 400">https://ziontechgroup.com</span></p>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default EnhancedServiceShowcase);
}
;
export default EnhancedServiceShowcase;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default EnhancedServiceShowcase;  )
}
export default EnhancedServiceShowcase;

<<<<<<< HEAD
=======
export default EnhancedServiceShowcase;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
}
}
}
}
=======
export default EnhancedServiceShowcase;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
