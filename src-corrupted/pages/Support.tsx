import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { motion  } from 'framer-motion';
import { HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  Search, 
  BookOpen, 
  Video, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Lock,
  Cpu,
  Star
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Support', icon: HelpCircle, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-600' },
    { id: 'quantum', name: 'Quantum Tech', icon: Star, color: 'from-indigo-500 to-purple-600' }
  ];

  const commonIssues = [
    {
      category: 'ai',
      title: 'AI Model Training Issues',
      description: 'Problems with AI model training and optimization',
      solution: 'Check data quality, adjust hyperparameters, and verify GPU resources',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'cloud',
      title: 'Cloud Deployment Failures',
      description: 'Issues with cloud infrastructure deployment',
      solution: 'Verify credentials, check resource limits, and review deployment logs',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'security',
      title: 'Authentication Problems',
      description: 'User login and access control issues',
      solution: 'Reset credentials, check permissions, and verify network access',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      category: 'infrastructure',
      title: 'Performance Degradation',
      description: 'Slow system performance and bottlenecks',
      solution: 'Monitor resource usage, optimize queries, and scale resources',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'quantum',
      title: 'Quantum Algorithm Errors',
      description: 'Issues with quantum computing algorithms',
      solution: 'Verify qubit states, check error correction, and optimize circuits',
      icon: Star,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-600',
      availability: '24/7',
      responseTime: '< 2 minutes',
      features: ['AI-powered responses', 'Human escalation', 'File sharing', 'Screen sharing']
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      features: ['Direct expert access', 'Complex issue resolution', 'Training support', 'Emergency response']
    },
    {
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      availability: '24/7',
      responseTime: '< 4 hours',
      features: ['Detailed documentation', 'Screenshot support', 'Code review', 'Long-form solutions']
    }
  ];

  const quickActions = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600',
      link: '/docs',
      articles: '500+ articles'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      color: 'from-green-500 to-emerald-600',
      link: '/training',
      videos: '200+ videos'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      link: '/community',
      members: '10K+ members'
    },
    {
      title: 'API Documentation',
      description: 'Technical API references and examples',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      link: '/api',
      endpoints: '100+ endpoints'
    }
  ];

  const filteredIssues = selectedCategory === 'all' 
    ? commonIssues 
    : commonIssues.filter(issue => issue.category === selectedCategory);

  const filteredSearchIssues = searchQuery 
    ? filteredIssues.filter(issue => 
        issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredIssues;

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Support - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Support</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
