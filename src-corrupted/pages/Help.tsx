<<<<<<< HEAD
import React from 'react',

const Help: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>Help | Zion Tech Group</title>,
        <meta name="description" content="Help - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">Help</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default Help;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BookOpen, MessageCircle, Phone, Mail, 
  Video, FileText, Users, Globe, Zap, Brain, Shield,
  Cloud, Code, ArrowRight, CheckCircle, Clock, Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Help = (props: any) => {
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [selectedCategory, setSelectedCategory] = useState<any>('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min' },
        { title: 'Account Setup', description: 'Create and configure your account', readTime: '3 min' },
        { title: 'First Project', description: 'Create your first AI project', readTime: '7 min' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'AI Model Training', description: 'Train custom AI models', readTime: '10 min' },
        { title: 'API Integration', description: 'Integrate AI services into your apps', readTime: '8 min' },
        { title: 'Model Deployment', description: 'Deploy models to production', readTime: '12 min' }
      ]
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        { title: 'Infrastructure Setup', description: 'Set up cloud infrastructure', readTime: '15 min' },
        { title: 'Scaling Resources', description: 'Scale your applications', readTime: '6 min' },
        { title: 'Monitoring & Alerts', description: 'Monitor system performance', readTime: '8 min' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Security Best Practices', description: 'Secure your applications', readTime: '12 min' },
        { title: 'Compliance Guidelines', description: 'Meet regulatory requirements', readTime: '10 min' },
        { title: 'Access Control', description: 'Manage user permissions', readTime: '6 min' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Plans',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Pricing Plans', description: 'Choose the right plan for you', readTime: '4 min' },
        { title: 'Billing Management', description: 'Manage your billing account', readTime: '5 min' },
        { title: 'Usage Analytics', description: 'Track your resource usage', readTime: '3 min' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Common Issues', description: 'Solutions to frequent problems', readTime: '8 min' },
        { title: 'Error Codes', description: 'Understand error messages', readTime: '6 min' },
        { title: 'Performance Issues', description: 'Optimize your applications', readTime: '10 min' }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Train Your First AI Model',
      description: 'Step-by-step guide to training AI models with our platform',
      category: 'AI Services',
      readTime: '10 min read',
      views: '2.5k'
    },
    {
      title: 'Setting Up Cloud Infrastructure',
      description: 'Complete guide to setting up scalable cloud infrastructure',
      category: 'Cloud Platform',
      readTime: '15 min read',
      views: '1.8k'
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security practices for your applications',
      category: 'Security',
      readTime: '12 min read',
      views: '1.2k'
    },
    {
      title: 'API Integration Guide',
      description: 'Integrate our AI services into your applications',
      category: 'AI Services',
      readTime: '8 min read',
      views: '980'
    }
  ];

  const supportChannels = [
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and API references',
      href: '/documentation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides',
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with other developers',
      href: '/community',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our team',
      href: '/chat',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredCategories = helpCategories.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.id === selectedCategory;
  });

const Help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Help | Zion Tech Group</title>
        <meta name="description" content="Help - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Help</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
