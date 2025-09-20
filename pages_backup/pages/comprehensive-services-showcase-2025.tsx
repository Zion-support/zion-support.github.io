<<<<<<< HEAD
import React from 'react',

const comprehensive-services-showcase-2025: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>comprehensive-services-showcase-2025 | Zion Tech Group</title>,
        <meta name="description" content="comprehensive-services-showcase-2025 - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-showcase-2025</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default comprehensive-services-showcase-2025;
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart
} from 'lucide-react';

import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const categories = [
  'All Services',
  'AI & Machine Learning',
  'Customer Success',
  'Supply Chain',
  'Financial Planning',
  'Sales Intelligence',
  'HR Analytics',
  'Decision Intelligence',
  'Content Marketing',
  'CRM & Customer Intelligence',
  'Business Intelligence'
];

const pricingRanges = [
  'All Prices',
  'Under $300',
  '$300 - $500',
  '$500 - $800',
  '$800+'
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter services based on selections
  const filteredServices = comprehensiveRealServices2025.filter(service => {
    const categoryMatch = selectedCategory === 'All Services' || service.category.includes(selectedCategory);
    
    let priceMatch = true;
    if (selectedPriceRange !== 'All Prices') {
      const price = parseInt(service.price.replace('$', ''));
      switch (selectedPriceRange) {
        case 'Under $300':
          priceMatch = price < 300;
          break;
        case '$300 - $500':
          priceMatch = price >= 300 && price <= 500;
          break;
        case '$500 - $800':
          priceMatch = price > 500 && price <= 800;
          break;
        case '$800+':
          priceMatch = price > 800;
          break;
      }
    }
    
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace('$', ''));
    if (numPrice < 300) return 'Under $300';
    if (numPrice <= 500) return '$300 - $500';
    if (numPrice <= 800) return '$500 - $800';
    return '$800+';
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    );
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    );
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600';
  };

const comprehensive-services-showcase-2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-services-showcase-2025 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-services-showcase-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-showcase-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-services-showcase-2025;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
