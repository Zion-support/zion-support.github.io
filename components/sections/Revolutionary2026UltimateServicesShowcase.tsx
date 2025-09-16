<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';

import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud, Search, Filter, Grid, List, Phone } from 'lucide-react';
import Link from 'next/link';

// Import all the new service data
import { revolutionary2026AIAutomationServices } from '../../data/revolutionary-2026-ai-automation-services';
import { revolutionary2026EmergingTechServices } from '../../data/revolutionary-2026-emerging-tech-services';
import { revolutionary2026HealthcareBiotechServices } from '../../data/revolutionary-2026-healthcare-biotech-services';
import { revolutionary2026FintechBlockchainServices } from '../../data/revolutionary-2026-fintech-blockchain-services';

const Revolutionary2026UltimateServicesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all services
  const allServices = [
    ...revolutionary2026AIAutomationServices,
    ...revolutionary2026EmergingTechServices,
    ...revolutionary2026HealthcareBiotechServices,
    ...revolutionary2026FintechBlockchainServices
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI', name: 'AI & Automation', count: revolutionary2026AIAutomationServices.length, icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Emerging', name: 'Emerging Tech', count: revolutionary2026EmergingTechServices.length, icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare', name: 'Healthcare & Biotech', count: revolutionary2026HealthcareBiotechServices.length, icon: Shield, color: 'from-teal-500 to-cyan-500' },
    { id: 'Fintech', name: 'Fintech & Blockchain', count: revolutionary2026FintechBlockchainServices.length, icon: Zap, color: 'from-yellow-500 to-orange-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const Revolutionary2026UltimateServicesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Revolutionary2026UltimateServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Revolutionary2026UltimateServicesShowcase;