<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

import { 
  Search, Filter, Check, Star, Users, TrendingUp, Zap,
  Building, Brain, Server, Globe, Cloud, Shield, Target,
  DollarSign, Users as UsersIcon, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

// Create unified services array
const allServices = [
  ...advancedEnterpriseSolutions2025,
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices
];

// Service categories with pricing tiers
const pricingCategories = [
  {
    name: 'Micro SAAS Solutions',
    description: 'Affordable tools for small businesses and individuals',
    priceRange: '$29 - $89/month',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
    services: allServices.filter(s => s.category.toLowerCase().includes('micro') || s.category.toLowerCase().includes('social') || s.category.toLowerCase().includes('email') || s.category.toLowerCase().includes('project'))
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Enterprise-grade security solutions and compliance automation',
    services: advancedCybersecurityServices2025,
    color: 'from-red-600 to-pink-700'
  },
  {
    name: 'Enterprise Solutions',
    description: 'Comprehensive platforms for large organizations',
    priceRange: '$15,000 - $25,000/month',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    services: allServices.filter(s => s.category.toLowerCase().includes('enterprise') || s.category.toLowerCase().includes('erp') || s.category.toLowerCase().includes('financial'))
  },
  {
    name: 'IT Infrastructure',
    description: 'Advanced technology infrastructure and security',
    priceRange: '$3,500 - $12,000/month',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    services: allServices.filter(s => s.category.toLowerCase().includes('infrastructure') || s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('security') || s.category.toLowerCase().includes('network'))
  }
];

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    if (selectedCategory !== 'All Categories') {
      const category = pricingCategories.find(c => c.name === selectedCategory);
      if (category) {
        filtered = category.services;
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Enterprise Solutions': <Building className="w-5 h-5" />,
      'AI & Automation': <Brain className="w-5 h-5" />,
      'IT Infrastructure': <Server className="w-5 h-5" />,
      'Micro SAAS': <Globe className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'Analytics': <TrendingUp className="w-5 h-5" />,
      'Marketing': <Target className="w-5 h-5" />,
      'Finance': <DollarSign className="w-5 h-5" />,
      'HR & Operations': <UsersIcon className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Enterprise Solutions': 'from-blue-500 to-indigo-600',
      'AI & Automation': 'from-purple-500 to-violet-600',
      'IT Infrastructure': 'from-green-500 to-emerald-600',
      'Micro SAAS': 'from-orange-500 to-amber-600',
      'Cloud Services': 'from-cyan-500 to-blue-600',
      'Security': 'from-red-500 to-pink-600',
      'Analytics': 'from-teal-500 to-cyan-600',
      'Marketing': 'from-pink-500 to-rose-600',
      'Finance': 'from-emerald-500 to-green-600',
      'HR & Operations': 'from-amber-500 to-orange-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const 2025-comprehensive-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-comprehensive-pricing | Zion Tech Group</title>
        <meta name="description" content="2025-comprehensive-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-comprehensive-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-comprehensive-pricing;