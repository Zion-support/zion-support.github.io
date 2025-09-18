<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Heart, 
  Shield, 
  Cloud, 
  Cpu, 
  Atom, 
  Globe, 
  ShoppingCart, 
  Rocket, 
  Sparkles, 
  Flame, 
  Crown, 
  Infinity, 
  Gauge, 
  GitFork, 
  Truck, 
  BarChart3, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  Key, 
  Globe2, 
  ShieldCheck, 
  CheckCircle, 
  ArrowUpRight, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  Target,
  Award,
  Lightbulb,
  Lock,
  Unlock,
  Scale,
  Building,
  Leaf,
  Car,
  Factory,
  City,
  Home,
  Building2,
  HeartHandshake,
  BookOpen,
  FileText,
  Users as UsersIcon,
  MessageCircle,
  HelpCircle,
  Code,
  Settings,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Atom as AtomIcon,
  Globe as GlobeIcon,
  ShoppingCart as ShoppingCartIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Flame as FlameIcon,
  Crown as CrownIcon,
  Infinity as InfinityIcon,
  Gauge as GaugeIcon,
  GitFork as GitForkIcon,
  Truck as TruckIcon,
  BarChart3 as BarChart3Icon,
  Eye as EyeIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Clock as ClockIcon,
  Key as KeyIcon,
  Globe2 as Globe2Icon,
  ShieldCheck as ShieldCheckIcon,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensivePricingGuide2027(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('rating');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Scale, color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: PenTool, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: MessageCircle, color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target, color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Rocket, color: 'from-purple-500 to-pink-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0 - $500)', range: '0-500' },
    { id: 'mid-range', name: 'Mid-Range ($500 - $2000)', range: '500-2000' },
    { id: 'premium', name: 'Premium ($2000 - $5000)', range: '2000-5000' },
    { id: 'enterprise', name: 'Enterprise ($5000+)', range: '5000+' }
  ];

  const sortOptions = [
    { id: 'rating', name: 'Highest Rated', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'roi', name: 'Highest ROI', icon: TrendingUp },
    { id: 'setup-time', name: 'Quickest Setup', icon: Clock }
  ];

  // Filter services based on selected criteria
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'budget' && service.price <= 500) ||
      (selectedPriceRange === 'mid-range' && service.price > 500 && service.price <= 2000) ||
      (selectedPriceRange === 'premium' && service.price > 2000 && service.price <= 5000) ||
      (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return categoryMatch && priceMatch;
  });

  // Sort services based on selected criteria
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi':
        const aRoi = parseInt(a.roi?.match(/\d+/)?.[0] || '0');
        const bRoi = parseInt(b.roi?.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      case 'setup-time':
        const aWeeks = parseInt(a.setupTime?.match(/\d+/)?.[0] || '999');
        const bWeeks = parseInt(b.setupTime?.match(/\d+/)?.[0] || '999');
        return aWeeks - bWeeks;
      default:
        return 0;
    }
  });

  const getPriceRangeColor = (props: any) => {
    if (price <= 500) return 'text-green-400';
    if (price <= 2000) return 'text-yellow-400';
    if (price <= 5000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPriceRangeBadge = (props: any) => {
    if (price <= 500) return { text: 'Budget', color: 'bg-green-500/20 text-green-400' };
    if (price <= 2000) return { text: 'Mid-Range', color: 'bg-yellow-500/20 text-yellow-400' };
    if (price <= 5000) return { text: 'Premium', color: 'bg-orange-500/20 text-orange-400' };
    return { text: 'Enterprise', color: 'bg-red-500/20 text-red-400' };
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const ComprehensivePricingGuide2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensivePricingGuide2027 | Zion Tech Group</title>
        <meta name="description" content="ComprehensivePricingGuide2027 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ComprehensivePricingGuide2027</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
