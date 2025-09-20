import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Rocket,
  Atom,
  Lock,
  Cpu,
  Leaf,
  ShoppingCart,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Eye,
  PenTool,
  Heart,
  Building,
  Car,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Sparkles,
  Crown,
  Flame,
  Infinity,
  Gauge,
  GitFork,
  Truck,
  Scale,
  Building2,
  Home,
  Calculator,
  PieChart,
  TrendingDown,
  Calendar,
  CreditCard,
  Gift,
  ShieldCheck,
  Zap as Lightning
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2030, serviceCategories2030, pricingBenefits2030 } from '../data/revolutionaryServices2030';
import { SEO } from '../components/SEO';

export default function ComprehensivePricingGuide2030(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');
  const [selectedROI, setSelectedROI] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('featured');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showROICalculator, setShowROICalculator] = useState<any>(false);

  const filteredServices = REVOLUTIONARY_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price < 10000) ||
                        (selectedPriceRange === 'mid' && service.price >= 10000 && service.price < 30000) ||
                        (selectedPriceRange === 'premium' && service.price >= 30000);

    const matchesROI = selectedROI === 'all' || 
                       (selectedROI === 'low' && parseInt(service.roi.replace('%', '')) < 300) ||
                       (selectedROI === 'medium' && parseInt(service.roi.replace('%', '')) >= 300 && parseInt(service.roi.replace('%', '')) < 600) ||
                       (selectedROI === 'high' && parseInt(service.roi.replace('%', '')) >= 600);

    return matchesCategory && matchesPrice && matchesROI;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', '').replace('%', ''));
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
      default:
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
    }
  });

  const getCategoryIcon = (props: any) => {
    switch (category) {
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Neural Technology': return <Brain className="w-6 h-6" />;
      case 'AI & Automation': return <Cpu className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Accessibility': return <Eye className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (props: any) => {
    switch (level) {
      case 'Revolutionary': return 'from-purple-600 to-pink-600';
      case 'Advanced': return 'from-blue-600 to-cyan-600';
      case 'Innovative': return 'from-green-600 to-emerald-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 9999, annual: 8999 },
      description: 'Perfect for small businesses starting their digital transformation journey',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 10 Users'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false,
      savings: '10%'
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 24999, annual: 22499 },
      description: 'Ideal for growing companies with advanced technology needs',
      features: [
        'Everything in Starter',
        'Advanced AI Solutions',
        'Quantum Computing Access',
        '24/7 Support',
        'Priority Support',
        'Up to 100 Users',
        'Custom Integrations',
        'Quarterly Strategy Sessions'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true,
      savings: '10%'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 49999, annual: 44999 },
      description: 'Comprehensive solutions for large enterprises and corporations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Full Digital Transformation',
        'Quantum Security',
        'Dedicated Account Manager',
        'Unlimited Users',
        'Onsite Support',
        'Custom SLA Agreements'
      ],
      color: 'from-amber-500 to-orange-600',
      popular: false,
      savings: '10%'
    }
  ];

  const addOnServices = [
    {
      name: 'Quantum AI Model Training',
      description: 'Custom quantum AI model development and training',
      price: { monthly: 15000, annual: 135000 },
      icon: Brain,
      category: 'Quantum Computing'
    },
    {
      name: 'Neural Interface Development',
      description: 'Custom neural interface solutions',
      price: { monthly: 25000, annual: 225000 },
      icon: Cpu,
      category: 'Neural Technology'
    },
    {
      name: 'Space Technology Integration',
      description: 'Space-based services and satellite integration',
      price: { monthly: 35000, annual: 315000 },
      icon: Rocket,
      category: 'Space Technology'
    },
    {
      name: 'AI-Powered Cybersecurity',
      description: 'Advanced AI-driven security solutions',
      price: { monthly: 12000, annual: 108000 },
      icon: Shield,
      category: 'Cybersecurity'
    }
  ];

const ComprehensivePricingGuide2030: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensivePricingGuide2030 | Zion Tech Group</title>
        <meta name="description" content="ComprehensivePricingGuide2030 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ComprehensivePricingGuide2030</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2030;
