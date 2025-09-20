<<<<<<< HEAD
import React from 'react',

const SEOEnhancer.js: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">SEOEnhancer.js</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default SEOEnhancer.js;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Play,
  Search,
  Filter,
  ArrowRight,
  Award,
  Globe,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Code
} from 'lucide-react';
import { CUTTING_EDGE_SERVICES_2025 } from '../data/enhanced-2025-cutting-edge-services';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/specialized-industry-solutions-2025';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('price');

  const allServices = [...CUTTING_EDGE_SERVICES_2025, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const industries = ['all', ...Array.from(new Set(SPECIALIZED_INDUSTRY_SOLUTIONS_2025.map(service => service.industry)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || 
      ('industry' in service ? service.industry === selectedIndustry : true);
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
      default:
        return 0;
    }
  });

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
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Cloud') || category.includes('Infrastructure')) return Cloud;
    if (category.includes('Security') || category.includes('Cybersecurity')) return Shield;
    if (category.includes('Quantum')) return Cpu;
    if (category.includes('Edge')) return Zap;
    if (category.includes('Blockchain')) return Globe;
    if (category.includes('DevOps')) return Code;
    return Star;
  };

const SEOEnhancer.js: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SEOEnhancer.js</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default SEOEnhancer.js;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
