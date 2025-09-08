import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, TrendingUp, Users, Globe, Cpu, Database, ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AIService {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: React.ComponentType<any>;
  route: string;
  status: 'active' | 'beta' | 'coming-soon';
  {/* Removed stray closing brace */}

const AdvancedAIServicesHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

  const aiServices: AIService[] = [
    {
      id: 'ai-project-management',
      name: 'AI-Powered Project Management',
      description: 'Intelligent project planning, resource allocation, and predictive analytics for optimal project delivery.',
      category: 'project-management',
      features: ['AI Task Prioritization', 'Smart Resource Allocation', 'Predictive Analytics', 'Risk Assessment'],
      pricing: { starter: 99, professional: 299, enterprise: 599 },
      icon: Brain,
      route: '/services/ai-project-management',
      status: 'active'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      description: 'Automated customer service with intelligent chatbots, ticket routing, and sentiment analysis.',
      category: 'customer-support',
      features: ['Intelligent Chatbots', 'Automated Ticket Routing', 'Sentiment Analysis', '24/7 Support'],
      pricing: { starter: 79, professional: 199, enterprise: 399 },
      icon: Users,
      route: '/services/ai-customer-support-automation',
      status: 'active'
    },
    {
      id: 'ai-financial-analytics',
      name: 'AI Financial Analytics Platform',
      description: 'Advanced financial forecasting, risk assessment, and compliance monitoring powered by AI.',
      category: 'finance',
      features: ['Financial Forecasting', 'Risk Assessment', 'Compliance Monitoring', 'Real-time Analytics'],
      pricing: { starter: 149, professional: 399, enterprise: 799 },
      icon: TrendingUp,
      route: '/services/ai-financial-analytics',
      status: 'active'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent audience segmentation, content personalization, and multi-channel campaign orchestration.',
      category: 'marketing',
      features: ['Audience Segmentation', 'Content Personalization', 'Multi-channel Campaigns', 'ROI Optimization'],
      pricing: { starter: 129, professional: 349, enterprise: 699 },
      icon: Globe,
      route: '/services/ai-marketing-automation',
      status: 'active'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Engine',
      description: 'Advanced data processing, pattern recognition, and predictive modeling for business intelligence.',
      category: 'analytics',
      features: ['Data Processing', 'Pattern Recognition', 'Predictive Modeling', 'Business Intelligence'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Database,
      route: '/services/ai-data-analytics',
      status: 'beta'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Intelligent threat detection, automated response, and proactive security monitoring.',
      category: 'security',
      features: ['Threat Detection', 'Automated Response', 'Security Monitoring', 'Incident Prevention'],
      pricing: { starter: 179, professional: 449, enterprise: 899 },
      icon: Shield,
      route: '/services/ai-cybersecurity',
      status: 'coming-soon'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Cpu },
    { id: 'project-management', name: 'Project Management', icon: Brain },
    { id: 'customer-support', name: 'Customer Support', icon: Users },
    { id: 'finance', name: 'Financial Analytics', icon: TrendingUp },
    { id: 'marketing', name: 'Marketing Automation', icon: Globe },
    { id: 'analytics', name: 'Data Analytics', icon: Database },
    { id: 'security', name: 'Cybersecurity', icon: Shield }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter - b.pricing.starter;
      case 'popularity':
        return b.pricing.starter - a.pricing.starter; // Higher price = more popular for demo
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
  )}
