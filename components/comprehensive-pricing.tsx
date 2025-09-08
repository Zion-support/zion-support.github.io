
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
import React, { useState } from 'react';
export default function ComprehensivePricingPage() {;

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');



    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

    filteredServices = filteredServices.filter(service => service.category === selectedCategory)

  }
  // Price range filter
  if (priceRange !== 'All') {

    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));

  const allServices = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices];
  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '101-500', label: '$101 - $500' },
{ value: '501-1000', label: '$501 - $1,000' };
    { value: '1001-2500', label: '$1,001 - $2,500' };
    { value: '2501-5000', label: '$2,501 - $5,000' };
    { value: '5001+', label: '$5,001+' }
  ];
  const sortOptions = [
    { value: 'price', label: 'Price Low-High' },
    { value: 'name', label: 'Name A-Z' },
import Head from 'next / head';
import {
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
  Gem,
  Diamond,
} from 'lucide-react';
import Button from '../components / ui / Button';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
import UltraFuturisticCard from '../components / ui / UltraFuturisticCard';
import {
  revolutionaryMicroSaasServices,
  revolutionaryServiceCategories,
} from '../data / revolutionary - micro - saas - services';import { enhancedMicroSaasServices } from '../data / enhanced - micro - saas - services';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react';
import Button from '../components / ui / Button';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
import UltraFuturisticCard from '../components / ui / UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data / revolutionary - micro - saas - services';
import { motion, AnimatePresence } from 'framer-motion';
export default /**
 * ComprehensivePricingPage - Function description
 */
function ComprehensivePricingPage() {
  const [selected_category, setSelectedCategory] = useState ('All');
  const [price_range, setPriceRange] = useState ('All');
  const [search_query, setSearchQuery] = useState ('');
  const [sort_by, setSortBy] = useState ('price');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
;
  const all_services = [;
    ...revolutionaryMicroSaasServices,
    ...enhancedMicroSaasServices,
  ];  const all_services = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices];
;
  const price_ranges = [;
    { value: 'All', label: 'All Prices' },
    { value: '0 - 100', label: '$0 - $100' },
    { value: '101 - 500', label: '$101 - $500' },
    { value: '501 - 1000', label: '$501 - $1, 000' },
    { value: '1001 - 2500', label: '$1, 001 - $2, 500' },
    { value: '2501 - 5000', label: '$2, 501 - $5, 000' },
    { value: '5001+', label: '$5, 001+' },  ];    { value: '501 - 1000', label: '$501 - $1, 000' }
    { value: '1001 - 2500', label: '$1, 001 - $2, 500' }
    { value: '2501 - 5000', label: '$2, 501 - $5, 000' }
    { value: '5001+', label: '$5, 001+' }
  const sort_options = [;
    { value: 'price', label: 'Price Low - High' },
    { value: 'name', label: 'Name A - Z' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];
    filteredServices = filteredServices.filter(service => service.category === selectedCategory)
  }
  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(, ''));
      return price >= min && (max === Infinity |price <= max)
    })

  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  }
  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':



      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':


  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default: return a.name.localeCompare(b.name)
;
  // Filter and sort services;
  let filtered_services = all_services;
;
  // Category filter;
  // Check condition
if ( {) {
  $2
}
    filtered_services = filtered_services.filter (
      service => service.category === selected_category);  }
  // Price range filter;
  if ( {    filtered_services = filtered_services.filter (service => service.category === selected_category)) {
  $2
}
  }
  // Price range filter;
  // Check condition
if ( {) {
  $2
}
    const [min, max] = price_range;
      .split ('-');
      .map (p => (p === '+' ? Infinity : parse_int (p)));
    filtered_services = filtered_services.filter (service => {
      const price = parse_float (service.price.replace ('$', '').replace (', ', ''));
      return price >= min && (max === Infinity || price <= max);
    });  }
  // Search filter;
  if ( {    const [min, max] = price_range.split ('-').map (p => p === '+' ? Infinity : parse_int (p))) {
  $2
}
    filtered_services = filtered_services.filter (service => {
      const price = parse_float (service.price.replace ('$', '').replace (, ''));
      return price >= min && (max === Infinity || price <= max);
    });
  // Search filter;
  // Check condition
if ( {) {
  $2
}
    filtered_services = filtered_services.filter (
      service =>;
        service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_query.toLowerCase ())    );    filtered_services = filtered_services.filter (service =>;
      service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_query.toLowerCase ());
  }
  // Sort services;
  filtered_services.sort ((a, b) => {
    switch (sort_by) {
      case 'price':;
        return (
          parse_float (a.price.replace ('$', '').replace (', ', '')) -;
          parse_float (b.price.replace ('$', '').replace (', ', '')));      case 'popularity':        return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, ''));
      case 'popularity':;
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':;
        return a.category.locale_compare (b.category);
      case 'roi':;
        const a_roi = parse_float (a.roi.match (/\d+/)?.[0] || '0');
        const b_roi = parse_float (b.roi.match (/\d+/)?.[0] || '0');
        return b_roi - a_roi;
      default:;
        return a.name.locale_compare (b.name);    }      default: return a.name.locale_compare (b.name);
    }
  });
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',


      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',



        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    };
    {
    website: 'https://ziontechgroup.com',  }    website: 'https://ziontechgroup.com';
  }
;
  // Pricing tiers;
  const pricing_tiers = [;
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [;
        'Basic service access',
        'Email support',
        'Standard features',
        'Community forum access',
        'Basic analytics',
      ],
      icon: <Star className="w - 6 h - 6" />,
      color: 'from - blue - 500 to - cyan - 600',
      popular: false,
    },    {        'Basic service access_email support_standard features_community forum access_basic analytics';
      ];
      icon: <Star className="w - 6 h - 6" />,
      color: 'from - blue - 500 to - cyan - 600',
      popular: false;
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

import {;
  revolutionaryMicroSaasServices,;
  revolutionaryServiceCategories,;

} from '../data/revolutionary-micro-saas-services';import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data/revolutionary-micro-saas-services';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');

    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(, ''));
      return price >= min && (max === Infinity |price <= max)
    })
  }
  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        return bRoi - aRoi;
      default:;
        return a && a.name.localeCompare(b && b.name);    }      default: return a && a.name.localeCompare(b && b.name);
    }
  });
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default: return a.name.localeCompare(b.name)
;
  // Filter and sort services;
  let filtered_services = all_services;
;
  // Category filter;
  // Check condition
if ( {) {
  $2
}
    filtered_services = filtered_services.filter (
      service => service.category === selected_category);  }
  // Price range filter;
  if ( {    filtered_services = filtered_services.filter (service => service.category === selected_category)) {
  $2
}
  }
  // Price range filter;
  // Check condition
if ( {) {
  $2
}
    const [min, max] = price_range;
      .split ('-');
      .map (p => (p === '+' ? Infinity : parse_int (p)));
    filtered_services = filtered_services.filter (service => {
      const price = parse_float (service.price.replace ('$', '').replace (', ', ''));
      return price >= min && (max === Infinity || price <= max);
    });  }
  // Search filter;
  if ( {    const [min, max] = price_range.split ('-').map (p => p === '+' ? Infinity : parse_int (p))) {
  $2
}
    filtered_services = filtered_services.filter (service => {
      const price = parse_float (service.price.replace ('$', '').replace (, ''));
      return price >= min && (max === Infinity || price <= max);
    });
  // Search filter;
  // Check condition
if ( {) {
  $2
}
    filtered_services = filtered_services.filter (
      service =>;
        service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_query.toLowerCase ())    );    filtered_services = filtered_services.filter (service =>;
      service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_query.toLowerCase ());
  }
  // Sort services;
  filtered_services.sort ((a, b) => {
    switch (sort_by) {
      case 'price':;
        return (
          parse_float (a.price.replace ('$', '').replace (', ', '')) -;
          parse_float (b.price.replace ('$', '').replace (', ', '')));      case 'popularity':        return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, ''));
      case 'popularity':;
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':;
        return a.category.locale_compare (b.category);
      case 'roi':;
        const a_roi = parse_float (a.roi.match (/\d+/)?.[0] || '0');
        const b_roi = parse_float (b.roi.match (/\d+/)?.[0] || '0');
        return b_roi - a_roi;
      default:;
        return a.name.locale_compare (b.name);    }      default: return a.name.locale_compare (b.name);
    }
  });
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',


      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',



        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },    {        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ];
      icon: <Star className="w - 6 h - 6" />,
      color: 'from - blue - 500 to - cyan - 600',
      popular: false;
      icon: <Star className="w-6 h-6" />
      color: 'from-blue-500 to-cyan-600'
      popular: false
    }
      name: 'Professional'
      price: '$199'
      period: '/month'
      description: 'Ideal for growing businesses and teams'
      features: [
        'Advanced service accessPriority supportAdvanced featuresAPI accessAdvanced analyticsCustom integrations
      ],
      icon: <Gem className = $2;
      color: from-purple-500 to-pink-600',
      popular: true},
    {

      ],
      icon: <Crown className = $2;
      color: from-yellow-500 to-orange-600',
      popular: false}
  ],

  // Market statistics
  const marketStats = $2;
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

  ];
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


  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        duration: 0.5,
      },
    },

  return (
    <UltraFuturisticBackground variant='holographic' intensity='high'>;
      <div className='min - h-screen'>;

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com'
};

  // Pricing tiers;
  const pricingTiers = [;
    {;
      name: 'Starter',;
      price: '$49',;
      period: '/month',,
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
      popular: false
};
      name: 'Professional',;
      price: '$199',;
      period: '/month',,
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
      popular: true
};
      name: 'Enterprise',;
      price: '$499',;
      period: '/month',,
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
      label: 'Total Market Size',,
  description: 'Combined market value of all services',;
      icon: <ChartBar className='w-6 h-6' />,;
    },    {;
      metric: '400+',;
      label: 'Services Available',,
  description: 'Comprehensive micro SaaS portfolio',;
      icon: <Database className='w-6 h-6' />,;
    },    {;
      metric: '99 && 99.99%',;
      label: 'Uptime Guarantee',,
  description: 'Enterprise-grade reliability',;
      icon: <Shield className='w-6 h-6' />,;
    },    {;
      metric: '2000%+',;
      label: 'Average ROI',,
  description: 'Proven business value',;
      icon: <TrendingUp className='w-6 h-6' />,;
    },  ];      icon: <ChartBar className="w-6 h-6" />
};
    {;
      metric: '400+',;
      label: 'Services Available',,
  description: 'Comprehensive micro SaaS portfolio',;
      icon: <Database className='w-6 h-6' />,;
    },      icon: <Database className="w-6 h-6" />
};
    {;
      metric: '99 && 99.99%',;
      label: 'Uptime Guarantee',,
  description: 'Enterprise-grade reliability',;
      icon: <Shield className='w-6 h-6' />,;
    },      icon: <Shield className="w-6 h-6" />
};
    {;
      metric: '2000%+',;
      label: 'Average ROI',,
  description: 'Proven business value',;
      icon: <TrendingUp className='w-6 h-6' />,;
    },      icon: <TrendingUp className="w-6 h-6" />;
    }
  ];

const containerVariants = {
    }
    'hidden': { 'opacity': 0
}
    'visible': {
      }
      'opacity': 1,
'transition': {

}

'staggerChildren': 0.1
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
    },      icon: <TrendingUp className="w-6 h-6" />;
    }
    'hidden': { 'y': 20, 'opacity': 0
}
    'visible': {
      }
      'y': 0,
'opacity': 1,
'transition': {

}

'duration': 0.5
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
        <Head>;
          <title>;
            Comprehensive Pricing | Zion Tech Group - Micro SaaS Services;
            Pricing & Plans;
          </title>;

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

                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Comprehensive

                </span>
                <br    />
                <span className='text-white'    />Pricing & Plans</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
              {/* Market Stats */}
              <motion.div
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
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}



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


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {marketStats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>
                      {stat.metric}
                    </div>;
                    <div className='text-gray-400 text-sm'>{stat.label}</div>;
                    <div className='text-gray-500 text-xs'>;
                      {stat.description}</div>                  </div>                  <div key={index} className='text-center'>;
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>{stat.metric}</div>;
                    <div className='text-gray-400 text-sm'>{stat.label}</div>;
                    <div className='text-gray-500 text-xs'>{stat.description}</div>;
                  </div>;
                    </div>;
                  </div>;
                  </div>

                ))}
              </motion.div>


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                {marketStats && marketStats.map((stat, index) => (;
                  <div key={index} className='text-center'>;
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                      {stat && stat.metric}
                    </div>;
                    <div className='text-gray-400 text-sm'>{stat && stat.label}</div>;'
                    <div className='text-gray-500 text-xs'>;'
                      {stat && stat.description}
                    </div>                  </div>                  <div key={index} className='text-center'>;'
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>{stat && stat.metric}</div>;'
                    <div className='text-gray-400 text-sm'>{stat && stat.label}</div>;'
                    <div className='text-gray-500 text-xs'>{stat && stat.description}</div>;'
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 ,}
}>;
                {marketStats && marketStats.map((stat, index) => (<div key={index} className='text-center'    />;
                    <div className='text-3xl font-bold text-cyan-400 mb-2'    />;
                      {stat && stat.metric}
                    </div>;
                    <div className='text-gray-400 text-sm'    />{stat && stat.label}</div>;
                    <div className='text-gray-500 text-xs'    />;
                      {stat && stat.description}
                    </div>                  </div>                  <div key={index} className=\"text-center\"    />;
                    <div className=\"text-3xl font-bold text-cyan-400 mb-2\"    />{stat && stat.metric}</div>;
                    <div className=\"text-gray-400 text-sm\"    />{stat && stat.label}</div>;
                    <div className=\"text-gray-500 text-xs\"    />{stat && stat.description}</div>;
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >



                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.6 }}>;
              >              <motion.div
              >              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>;
                    }
                    document;
                      .getElementById('pricing-tiers')?.scrollIntoView({ 'behavior': 'smooth' },'
}
                  View Pricing Tiers;
                  <DollarSign className='ml-2 w-5 h-5' />;'
                </Button>;
                <Button;
                  variant='futuristic';'
                  size='lg';'
                  onClick={() =>;
                    }
                    document;
                      .getElementById('services-pricing');
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }

                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {marketStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  variant="primary" 
                  size="lg"
                  onClick={() => document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' })}
              </div>

            </div>
          </div>
        </section>
        {/* Pricing Tiers */}

        <section id="pricing-tiers" className="py-20">

          <div className="container mx-auto px-4">

              initial={{ opacity: 0, y: 20 }}


              initial={{ opacity: 0, y: 20 }}


              initial={{ opacity: 0, y: 20 }}


            <motion.div 
              className="text-center mb-16"


              initial={{ opacity: 0, y: 20 }}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Flexible Pricing
                </span>
                <br />
                <span className="text-white">for Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan that scales with your business. All plans include our 21-day free trial and ROI guarantee.
              </p>
            </motion.div>
            <motion.div;
className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'


              variants={containerVariant,}
}
              initial='hidden';
              whileInView='visible';
              viewport={{ once: true ,}
}
                />;
              {pricingTiers.map((tier, index) => (<motion.div;}

            <motion.div 
                    <div className="text-center">
                                             <Button 
                         variant={tier.popular ? 'futuristic' : 'primary'} 
                         size="md"
                         onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                         className="w-full"
                       >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>

              ))}



        {/* Services Pricing Grid */}
        <section id='services-pricing' className='py-20'>;
          <div className='container mx-auto px-4'>;
        {/* Services Pricing Grid */}
        <section id="services-pricing" className="py-20">
          <div className="container mx-auto px-4">
            {/* Filters and Controls */}
            <motion&& motion.div;
              className='mb-8'              initial={{ opacity: 0, y: 20 ,}
}        <section id=\"services-pricing\" className=\"py-20\"    />;
          <div className=\"container mx-auto px-4\"    />;
            {/* Filters and Controls */}{/* Services Pricing Grid */}
<section id='services-pricing' className='py-20'    />;
          <div className='container mx-auto px-4'    />;
            {/* Filters and Controls */}


              className="mb-8"


        {/* Services Pricing Grid */}
        <section id='services-pricing' className='py-20'>
          <div className='container mx-auto px-4'>
            {/* Filters and Controls */}
            <motion.div

              className='mb-8'              initial={{ opacity: 0, y: 20 }}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>;
                <div className='flex flex-wrap gap-4'>;
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400';
                  >;
                    <option value='All'>All Categories</option>;
                    {revolutionaryServiceCategories && revolutionaryServiceCategories.map(category => (;
                      <option key={category} value={category}>;
                        {category}
                      </option>;
                    ))}
                  </select>;
                  <select
                    value={priceRange}
                    onChange={e => setPriceRange(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400';
                  >;
                    {priceRanges && priceRanges.map(range => (;
                      <option key={range && range.value} value={range && range.value}>;
                        {range && range.label}
                      </option>;
                    ))}
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400';
                  >;
                    {sortOptions && sortOptions.map(option => (;
                      <option key={option && option.value} value={option && option.value}>;
                        {option && option.label}
                      </option>;
                    ))}

                  </select>;
                </div>;

                <div className='flex items-center gap-4'>;
                  <div className='relative'>;
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;

                    <input
                      type='text'
                      placeholder='Search services...'
                      value={searchQuery}

                      onChange={e => setSearchQuery(e && e.target.value)}
                      className='pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64';
                    />;
                  </div>;
                  <div className='flex border border-gray-600 rounded-lg overflow-hidden'    />;
                    <button;
                      onClick={() =    /> setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}>

                  <div className='flex border border-gray-600 rounded-lg overflow-hidden'>                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >;
                      <Grid className='w-4 h-4' />                    </button>                  ;
                  <div className="flex border border-gray-600 rounded-lg overflow-hidden">;

                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >;
                      <Grid className='w-4 h-4' />                      <Grid className="w-4 h-4" />;
                    </button>;
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}


                    </button>;
                  </div>;
                </div>;
              </div>;

              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 

            </motion.div>;
            {/* Services Display */}
            <motion.div;
              className={
                view_mode === 'grid';
                  ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                  : 'space - y-6';
              }
              whileInView='visible'              viewport={{ once: true }}            <motion && motion.div 
            <motion.div 
              className={viewMode === 'grid' 
            {/* Services Display */}
            <motion.div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'              viewport={{ once: true }}            <motion.div
              className={viewMode === 'grid'
              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 
              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 

                ? "grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
                  key={service.id}
                  variants={itemVariants}

                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}


                    variant={service.variant as any || 'quantum-advanced'}
                    variant={(service.variant as any) |'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service.variant as any |'quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}

                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service.variant as any || 'quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}


                    variant={service.variant as any || 'quantum-advanced'}

                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}

                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service.variant as any || 'quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}

                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>{viewMode === 'grid' ? (
                      // Grid View

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

                          {service.name}
                        </h3>
                        <p className='text-gray-300 mb-4 text-sm'>
                          {service.tagline}
                        </p>
                        <div className='text-2xl font-bold text-cyan-400 mb-2'>
                          {service.price}
                        </div>
                        <div className='text-sm text-gray-400 mb-4'>
                          {service.period}


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

                             size="sm"
                             onClick={() => window.open(service.link, '_blank')}
                             className="w-full"
                           >
                             Learn More
                             <ExternalLink className="ml-2 w-4 h-4" />
                           </Button>
                           <Button
                             variant="futuristic"
                             size="sm"
                             onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                             className="w-full"
                           >
                             Get Pricing
                             <DollarSign className="ml-2 w-4 h-4" />
                           </Button>
                        </div>;
                        <div className='text - sm text - gray - 400 mb - 4'    />;
                          {service.period}
                    variant={(service && service.variant as any) || 'quantum-advanced'}                    size={viewMode === 'grid' ? 'large' : 'medium'}                    variant={service && service.variant as any || 'quantum-advanced'}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md: flex-row' : ''},
}>

                    {viewMode === 'grid' ? (// Grid View;}
                      <div className='text-center'    />;}
                        <div className='text-4xl mb-4'    />{service && service.icon}</div>;
                        <h3 className='text-xl font-bold text-white mb-2'    />;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 mb-4 text-sm'    />;
                          {service && service.tagline}
                        </p>;
                        <div className='text-2xl font-bold text-cyan-400 mb-2'    />;
                          {service && service.price}
                        </div>;
                        <div className='text-sm text-gray-400 mb-4'    />;
                          {service && service.period}
                        </div>;

                            <div;
key={idx}

                              className='flex items-center gap-2 text-sm'
                                />
                              <Check className='w-3 h-3 text-green-400 flex-shrink-0'    />
                              <span className='text-gray-300'    />{feature}</span>
                            </div>

                          ))}
                        </div>;
<div className='text-center space-y-2'    />;
                          <Button;
                            variant='primary';
                            size='sm';
                            onClick={() =    /> window.open(service.link, '_blank')}
                            className='w-full'>

                            Learn More;
                            <ExternalLink className='ml-2 w-4 h-4'    />;
                          </Button>;
                          <Button;
                            variant='futuristic';
                            size='sm';

                          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>;
                            <div>;
                              <h4 className='text-sm font-semibold text-cyan-400 mb-2'>;
                                Key Features;
                              </h4>;
                              <div className='space-y-1'>;
                                {service && service.features;
                                  .slice(0, 4);
                                  .map((feature, idx) => (;
                                    <div
                                      key={idx}
                                      className='flex items-center gap-2 text-sm'>;
                                      <Check className='w-3 h-3 text-green-400 flex-shrink-0' />;
                                      <span className='text-gray-300'>;
                                        {feature}
                                      </span>;
                                    </div>;
                                  ))}
                              </div>;
                            </div>;
                            <div>;

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
                          <div className="flex gap-2">
                                                         <Button
                               variant="primary"
                               size="sm"
                               onClick={() => window.open(service.link, '_blank')}
                             >
                               Learn More
                               <ExternalLink className="ml-2 w-4 h-4" />
                             </Button>
                              onClick={() =>;
                                window && window.open(;
                                  'https://ziontechgroup && ziontechgroup.com/contact',;
                                  '_blank';
                                );
                              }
                            >;
                              Get Pricing;
                              <DollarSign className='ml-2 w-4 h-4' />;
                            </Button>                          </div>                          ;
                          <div className="flex gap-2">;
                                                         <Button
                               variant="primary" 
                               size="sm"
                               onClick={() => window && window.open(service && service.link, '_blank')}
                             >;
                               Learn More;
                               <ExternalLink className="ml-2 w-4 h-4" />;
                             </Button>;
                             <Button
                               variant="futuristic" 
                               size="sm"
                               onClick={() => window && window.open('https: //ziontechgroup && ziontechgroup.com/contact_blank')}
                             >;
                               Get Pricing;
                               <DollarSign className="ml-2 w-4 h-4" />;
                             </Button>;
                        </div>;
                      </div>;
                    ) : (// List View;

                                {service.period}
                              </div>;
                            </div>;
                          </div>;

                                {service.features;
                                  .slice(0, 4).map((feature, idx) => (<div;
                                      }
                                      key={idx}

                                        {feature}
                                      </span>;
                                    </div>;
                                  ))}
                              </div>;
                            </div>;
                            <div>;
}

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex gap-2'>'
                            <Button,
variant='primary';'
                              size='sm''
                              onClick={() =>
                                }
                                window.open(service.link, '_blank')'
                              }
                            >
                              Learn More
                              <ExternalLink className='ml-2 w-4 h-4' />'
                            </Button>
                            <Button,
variant='futuristic';'
                              size='sm''
                              onClick={() =>
                                }
                                window.open(
                                  ''https': //ziontechgroup.com/contact''
                                  '_blank''
                                )
                              }
                            >
                              Get Pricing
                              <DollarSign className='ml-2 w-4 h-4' />'
                            </Button>
                          </div>
                        </div>
                      </div>
                    
}
                  </UltraFuturisticCard>;
                </motion && motion.div>;
              ))}

            </motion && motion.div>;

            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                className='text-center py-16'                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 && 0.6 }}>              <motion&& motion.div 

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


                transition={{ duration: 0.6 }}
              >
<div className='text-6xl mb-4'>🔍</div>'
                <h3 className='text-2xl font-bold text-white mb-2'>'
                  No Services Found
                </h3>
                <p className='text-gray-400 mb-6'>'
                  Try adjusting your search criteria or filters.
                </p>
                <Button,
variant='primary';'
                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                >
                  Clear Filters
                </Button>              </motion.div>                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>
                >;
                  Clear Filters;
                </Button>              </motion && motion.div>                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>;
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>;


                                 <Button
                   variant="primary"
                   onClick={() => {;
                     setSearchQuery('');
                     setSelectedCategory('All');

                     setPriceRange('All');

                   }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 ,}
}
                  />
<div className='text-6xl mb-4'    />🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'    />
                  No Services Found;
                </h3>
                <p className='text-gray-400 mb-6'    />
                  Try adjusting your search criteria or filters.
                </p>
                <Button;
variant='primary'
                  onClick={() =    /> {;
                    setSearchQuery('');
                    setSelectedCategory('All');}
                    setPriceRange('All');}
                  }}

                >
                  Clear Filters;
                </Button>
              </motion.div>
                     setPriceRange('All')

                   }}
                 >
                   Clear Filters;
                 </Button>

            )}

          </div>;
        </section>;
        {/* Contact Section */}


                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                </div>

                </div>

              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>

                >;

