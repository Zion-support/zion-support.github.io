<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  Brain, 
  Atom, 
  Zap, 
  Rocket, 
  Eye, 
  BarChart3, 
  Shield, 
  Cloud,
  Sparkles,
  Crown,
  Infinity,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Database,
  Network,
  Code,
  Heart,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';
import { revolutionary2037FuturisticServices } from '../data/revolutionary-2037-futuristic-services';
import { revolutionary2037ITandAIServices } from '../data/revolutionary-2037-it-ai-services';
import { revolutionary2037MicroSaasServices } from '../data/revolutionary-2037-micro-saas-services';

const Comprehensive2037ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const allServices = [
    ...revolutionary2037FuturisticServices,
    ...revolutionary2037ITandAIServices,
    ...revolutionary2037MicroSaasServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Technology', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Space', name: 'Space Technology', icon: Rocket, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'Security', name: 'Security & Cloud', icon: Shield, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cloud')).length },
    { id: 'Business', name: 'Business & Operations', icon: TrendingUp, count: allServices.filter(s => s.category.includes('Business') || s.category.includes('Operations')).length },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Target, count: allServices.filter(s => s.category.includes('Micro') || s.category.includes('SAAS')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is already handled by the filter
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const comprehensive-2037-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-2037-services-showcase | Zion Tech Group</title>
        <meta name="description" content="comprehensive-2037-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-2037-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-2037-services-showcase;