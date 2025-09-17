<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';

import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, DollarSign, Shield, Rocket, Brain, Globe, Cpu, Atom } from 'lucide-react';
import { innovative2026Services } from '../../data/innovative-2026-services';
import { emergingTech2026Services } from '../../data/emerging-tech-2026-services';

interface EnhancedServiceShowcase2026Props {
  title?: string;
  subtitle?: string;
  showPricing?: boolean;
  maxServices?: number;
}

const EnhancedServiceShowcase2026: React.FC<EnhancedServiceShowcase2026Props> = ({
  title = "Revolutionary 2026 Services",
  subtitle = "Experience the future with our cutting-edge AI, quantum, and emerging technology solutions",
  showPricing = true,
  maxServices = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...innovative2026Services, ...emergingTech2026Services];
  
  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices.slice(0, maxServices)
    : allServices.filter(service => service.category.includes(selectedCategory)).slice(0, maxServices);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category.split('&')[0].trim())))];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category.includes('Neural')) return <Brain className="w-5 h-5" />;
    if (category.includes('Holographic')) return <Globe className="w-5 h-5" />;
    if (category.includes('Space')) return <Rocket className="w-5 h-5" />;
    if (category.includes('Robotics')) return <Cpu className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-600 to-indigo-700';
    if (category.includes('Quantum')) return 'from-purple-600 to-pink-700';
    if (category.includes('Neural')) return 'from-pink-600 to-rose-700';
    if (category.includes('Holographic')) return 'from-cyan-600 to-blue-700';
    if (category.includes('Space')) return 'from-slate-600 to-gray-700';
    if (category.includes('Robotics')) return 'from-blue-600 to-indigo-700';
    return 'from-green-600 to-emerald-700';
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedServiceShowcase2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedServiceShowcase2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedServiceShowcase2026;