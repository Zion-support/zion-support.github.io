<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new service data
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { advancedITInfrastructureServices2025 } from '../data/advanced-it-infrastructure-services-2025';
import { comprehensiveServicesAdvertising2025, marketingContent } from '../data/comprehensive-services-advertising-2025';

const Comprehensive2025Q4ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2025Q4NewServices,
    ...advancedITInfrastructureServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.customers - a.customers;
      }
    });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'DevOps & Automation').length },
    { id: 'Customer Experience', name: 'Customer Experience', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Customer Experience').length },
    { id: 'FinTech', name: 'FinTech', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'FinTech').length },
    { id: 'Healthcare & Biotech', name: 'Healthcare & Biotech', icon: <Heart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Healthcare & Biotech').length },
    { id: 'Education & eLearning', name: 'Education & eLearning', icon: <GraduationCap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Education & eLearning').length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain & Logistics', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Supply Chain & Logistics').length },
    { id: 'Marketing & Advertising', name: 'Marketing & Advertising', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Marketing & Advertising').length },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cloud Infrastructure').length },
    { id: 'Network Security', name: 'Network Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Network Security').length },
    { id: 'Data Management', name: 'Data Management', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Data Management').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Container & Kubernetes', name: 'Container & Kubernetes', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Container & Kubernetes').length },
    { id: 'Database & Storage', name: 'Database & Storage', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Database & Storage').length },
    { id: 'API Management', name: 'API Management', icon: <ExternalLink className="w-5 h-5" />, count: allServices.filter(s => s.category === 'API Management').length }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const comprehensive-2025-q4-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-2025-q4-services-showcase | Zion Tech Group</title>
        <meta name="description" content="comprehensive-2025-q4-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-2025-q4-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-2025-q4-services-showcase;