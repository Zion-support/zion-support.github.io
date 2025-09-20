<<<<<<< HEAD
import React from 'react',

const Services: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>Services | Zion Tech Group</title>,
        <meta name="description" content="Services - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">Services</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default Services;
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Cpu,
  Lock,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Award,
  Rocket,
  Lightbulb,
  Target,
  BarChart3,
  Code,
  Server,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'popularity' | 'newest'>('popularity');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: 0 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'data', name: 'Data Analytics', icon: Database, count: 0 },
    { id: 'web', name: 'Web Development', icon: Code, count: 0 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 0 },
    { id: 'consulting', name: 'Consulting', icon: Users, count: 0 }
  ];

  const services = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      category: 'ai',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      pricing: '$2,500/month',
      rating: 4.9,
      reviews: 127,
      delivery: '2-3 weeks',
      popularity: 'high',
      isNew: false,
      icon: Brain,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Cloud Migration & Optimization',
      category: 'cloud',
      description: 'Seamlessly migrate to the cloud and optimize your infrastructure for maximum performance.',
      features: ['AWS/Azure migration', 'Cost optimization', 'Performance tuning', '24/7 monitoring'],
      pricing: '$5,000/project',
      rating: 4.8,
      reviews: 89,
      delivery: '4-6 weeks',
      popularity: 'high',
      isNew: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Cybersecurity Assessment & Implementation',
      category: 'security',
      description: 'Comprehensive security evaluation and implementation of enterprise-grade protection.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security framework', 'Compliance audit'],
      pricing: '$8,000/project',
      rating: 4.9,
      reviews: 156,
      delivery: '3-4 weeks',
      popularity: 'high',
      isNew: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      name: 'Data Pipeline & ETL Solutions',
      category: 'data',
      description: 'Build robust data pipelines for seamless data integration and transformation.',
      features: ['ETL automation', 'Data quality checks', 'Real-time streaming', 'Scalable architecture'],
      pricing: '$3,500/month',
      rating: 4.7,
      reviews: 73,
      delivery: '3-4 weeks',
      popularity: 'medium',
      isNew: true,
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Full-Stack Web Development',
      category: 'web',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'Deployment & hosting'],
      pricing: '$15,000/project',
      rating: 4.8,
      reviews: 234,
      delivery: '8-12 weeks',
      popularity: 'high',
      isNew: false,
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Mobile App Development',
      category: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native development', 'Cross-platform', 'App store submission', 'Maintenance support'],
      pricing: '$25,000/project',
      rating: 4.9,
      reviews: 189,
      delivery: '12-16 weeks',
      popularity: 'high',
      isNew: false,
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      name: 'IT Strategy Consulting',
      category: 'consulting',
      description: 'Strategic IT planning and digital transformation consulting for enterprises.',
      features: ['Technology assessment', 'Roadmap planning', 'Vendor selection', 'Implementation guidance'],
      pricing: '$200/hour',
      rating: 4.9,
      reviews: 67,
      delivery: 'Ongoing',
      popularity: 'medium',
      isNew: false,
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      name: 'AI Chatbot Development',
      category: 'ai',
      description: 'Intelligent chatbots powered by natural language processing and machine learning.',
      features: ['NLP integration', 'Multi-language support', 'Analytics dashboard', 'Easy deployment'],
      pricing: '$4,000/project',
      rating: 4.6,
      reviews: 45,
      delivery: '4-5 weeks',
      popularity: 'medium',
      isNew: true,
      icon: Bot,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  // Update category counts
  categories.forEach(cat => {
    cat.count = services.filter(service => cat.id === 'all' || service.category === cat.id).length;
  });

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
        filtered.sort((a, b) => {
          const popularityOrder = { high: 3, medium: 2, low: 1 };
          return popularityOrder[b.popularity] - popularityOrder[a.popularity];
        });
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
