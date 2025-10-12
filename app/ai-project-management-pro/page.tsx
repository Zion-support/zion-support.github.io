'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  BarChart3, 
  Clock, 
  Shield, 
  Target,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  GitBranch,
  AlertCircle,
  Sparkles,
  Workflow,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function AiProjectManagementProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['Smart task prioritization', 'Resource allocation', 'Risk prediction', 'Timeline optimization']
    },
    {
      icon: <Workflow className="w-8 h-8 text-green-400" />,
      title: 'Automated Workflows',
      description: 'Streamline your processes with AI-driven workflow automation',
      benefits: ['Custom automation rules', 'Smart notifications', 'Auto-assignment', 'Progress tracking']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive project insights with real-time performance metrics',
      benefits: ['Performance dashboards', 'Predictive analytics', 'Team productivity', 'ROI tracking']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication tools',
      benefits: ['Smart messaging', 'Meeting optimization', 'Knowledge sharing', 'Conflict resolution']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance management',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'GDPR compliance']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Integration',
      description: 'Seamless integration with 100+ popular business tools',
      benefits: ['API integrations', 'Data synchronization', 'Custom connectors', 'Third-party apps']
    }
  ];

  const capabilities = [
    {
      category: 'Project Planning',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      items: [
        'AI-powered project scoping',
        'Intelligent timeline estimation',
        'Resource requirement analysis',
        'Risk assessment and mitigation',
        'Milestone optimization'
      ]
    },
    {
      category: 'Task Management',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      items: [
        'Smart task prioritization',
        'Automated task assignment',
        'Progress tracking',
        'Dependency management',
        'Deadline optimization'
      ]
    },
    {
      category: 'Team Management',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      items: [
        'Workload balancing',
        'Skill-based assignments',
        'Performance monitoring',
        'Team communication',
        'Collaboration tools'
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: <PieChart className="w-6 h-6 text-orange-400" />,
      items: [
        'Real-time dashboards',
        'Performance metrics',
        'Predictive analytics',
        'Custom reports',
        'Data visualization'
      ]
    },
    {
      category: 'Integration & Automation',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      items: [
        '100+ tool integrations',
        'Workflow automation',
        'API access',
        'Custom webhooks',
        'Third-party connectors'
      ]
    },
    {
      category: 'Mobile & Accessibility',
      icon: <Smartphone className="w-6 h-6 text-pink-400" />,
      items: [
        'Mobile applications',
        'Offline capabilities',
        'Cross-platform sync',
        'Accessibility features',
        'Multi-language support'
      ]
    }
  ];
