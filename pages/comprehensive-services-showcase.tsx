<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Head from 'next/head';

import { 
  Search, Grid, List, Star, Users, TrendingUp,
  Brain, Atom, Shield, Target, ArrowRight, Check, 
  Building, Cpu, Cloud
} from 'lucide-react';

// Import all service data
import { innovative2026MicroSaasExpansions } from '../data/innovative-2026-micro-saas-expansions';
import { innovative2026ITServicesExpansions } from '../data/innovative-2026-it-services-expansions';
import { innovative2026AIServicesExpansions } from '../data/innovative-2026-ai-services-expansions';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2026MicroSaasExpansions,
    ...innovative2026ITServicesExpansions,
    ...innovative2026AIServicesExpansions
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
        default:
          return (b.customers || 0) - (a.customers || 0);
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('cyber')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('enterprise')).length },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('cloud')).length },
    { id: 'devops', name: 'DevOps & Automation', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('devops')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('micro')).length }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const comprehensive-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-services-showcase | Zion Tech Group</title>
        <meta name="description" content="comprehensive-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-services-showcase;