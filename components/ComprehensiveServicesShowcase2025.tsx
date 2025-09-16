<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  Brain
  Cpu
  Database
  Shield
  Zap
  Globe,
  ArrowRight,
  Play,
  Download,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Lightbulb,
  Rocket,
  Settings
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const [activeServicesetActiveService] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Custom Dashboard Creation',
        'Automated Reporting',
        'Machine Learning Models'
      ],
      benefits: [
        '300% faster decision making',
        '95% accuracy in predictions',
        '50% reduction in manual analysis',
        'ROI within 3 months'
      ],
      pricing: 'Starting at $299/month',
      href: '/ai-business-intelligence',
      stats: { users: '15,000+'rating: 4.9projects: '2,500+' }
    },
    {
      id: 2,
      title: 'Enterprise Automation Suite',
      description: 'Streamline operations with intelligent automation that adapts to your business needs.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'API Integration',
        'Custom Triggers',
        'Performance Monitoring'
      ],
      benefits: [
        '60% cost reduction',
        '80% time savings',
        '99.9% uptime guarantee',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $199/month',
      href: '/enterprise-automation',
      stats: { users: '25,000+'rating: 4.8projects: '5,000+' }
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: [
        'Quantum Algorithm Development',
        'Secure Quantum Communication',
        'Optimization Problems',
        'Cryptographic Solutions',
        'Research & Development'
      ],
      benefits: [
        '1000x faster processing',
        'Unbreakable encryption',
        'Future-proof technology',
        'Competitive advantage'
      ],
      pricing: 'Starting at $999/month',
      href: '/quantum-computing-solutions',
      stats: { users: '2,000+'rating: 4.9projects: '500+' }
    },
    {
      id: 4,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with comprehensive security solutions and compliance management.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: [
        'Zero-Trust Architecture',
        'Threat Detection & Response',
        'Compliance Management',
        'Security Auditing',
        'Incident Response'
      ],
      benefits: [
        '99.9% threat detection rate',
        'Zero security breaches',
        'Full compliance coverage',
        '24/7 security monitoring'
      ],
      pricing: 'Starting at $149/month',
      href: '/cybersecurity-solutions',
      stats: { users: '30,000+'rating: 4.9projects: '8,000+' }
    },
    {
      id: 5,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalablesecureand efficient cloud solutions with automated deployment pipelines.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: [
        'Multi-Cloud Architecture',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ],
      benefits: [
        '99.99% uptime',
        'Auto-scaling capabilities',
        '50% faster deployments',
        'Reduced infrastructure costs'
      ],
      pricing: 'Starting at $399/month',
      href: '/cloud-infrastructure',
      stats: { users: '20,000+'rating: 4.8projects: '3,000+' }
    },
    {
      id: 6,
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions from collection to visualization and insights.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      features: [
        'Data Warehousing',
        'ETL/ELT Processes',
        'Real-time Analytics',
        'Data Visualization',
        'Data Governance'
      ],
      benefits: [
        'Unified data platform',
        'Real-time insights',
        'Data quality assurance',
        'Regulatory compliance'
      ],
      pricing: 'Starting at $249/month',
      href: '/data-management',
      stats: { users: '18,000+'rating: 4.7projects: '2,200+' }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }6000);
    return () => clearInterval(interval);
  }[]);

  const currentService = services[activeService];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ComprehensiveServicesShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ComprehensiveServicesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;