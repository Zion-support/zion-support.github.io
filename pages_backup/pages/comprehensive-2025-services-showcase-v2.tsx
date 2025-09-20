<<<<<<< HEAD
import React from 'react',

const comprehensive-2025-services-showcase-v2: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>comprehensive-2025-services-showcase-v2 | Zion Tech Group</title>,
        <meta name="description" content="comprehensive-2025-services-showcase-v2 - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">comprehensive-2025-services-showcase-v2</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default comprehensive-2025-services-showcase-v2;
=======
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, Database, Network,
  Cloud, Server, Code, Users, TrendingUp, Star, Phone, Mail, MapPin, Search
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansionV2 } from '../data/2025-innovative-it-infrastructure-expansion-v2';
import { cuttingEdgeAIServicesExpansionV2 } from '../data/2025-cutting-edge-ai-services-expansion-v2';

const Comprehensive2025ServicesShowcaseV2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all new services
  const allNewServices = [
    ...innovativeMicroSaasExpansionV2,
    ...innovativeITInfrastructureExpansionV2,
    ...cuttingEdgeAIServicesExpansionV2
  ];

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-gray-500 to-slate-500',
      description: 'Complete portfolio of innovative services'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Innovative micro SAAS solutions'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: <Building className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Cutting-edge infrastructure solutions'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      description: 'Advanced AI and automation services'
    }
  ];

  const getServiceCategory = (service: any) => {
    if (service.type === 'Micro SAAS') return 'micro-saas';
    if (service.type === 'IT Infrastructure') return 'it-infrastructure';
    if (service.type === 'AI Services') return 'ai-services';
    return 'other';
  };

  const filteredServices = allNewServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || getServiceCategory(service) === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

const comprehensive-2025-services-showcase-v2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-2025-services-showcase-v2 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-2025-services-showcase-v2 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-2025-services-showcase-v2</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-2025-services-showcase-v2;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
