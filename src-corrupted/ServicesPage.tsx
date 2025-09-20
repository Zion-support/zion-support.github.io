<<<<<<< HEAD
import React from 'react',

const ServicesPage: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">ServicesPage</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default ServicesPage;
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES  } from '@/data/innovativeMicroSaasServices2025';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-orange to-zion-green' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_SERVICES,
    ...ADDITIONAL_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_SPECIALIZED_SERVICES
  ];
  
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice});

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0}
  });

  const getCategoryIcon = (category: string)  => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap};

  const getCategoryColor = (category: string)  => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue'};

const ServicesPage: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServicesPage</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ServicesPage;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
