import React from 'react';
:src/pages/Solutions.tsx
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  DollarSign, 
  Target,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  TrendingUp,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';
export function Solutions() {
  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed for large organizations and complex business requirements.',
      icon: Building2,
      color: 'from-blue-600 to-purple-600',
      features: [
        'Scalable Architecture',
        'Enterprise Security',
        'Integration Services',
        '24/7 Support',
        'Compliance Management',
        'Custom Development'
      ],
      href: '/solutions/enterprise'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'Specialized technology solutions for healthcare organizations, ensuring compliance and patient data security.',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      features: [
        'HIPAA Compliance',
        'Patient Data Management',
        'Telemedicine Platforms',
        'AI Diagnostics',
        'Electronic Health Records',
        'Secure Communication'
      ],
      href: '/solutions/healthcare'
    },
    {
      id: 'finance',
      title: 'Financial Solutions',
      description: 'Advanced fintech solutions for banks, financial institutions, and fintech companies.',
      icon: DollarSign,
      color: 'from-green-600 to-blue-600',
      features: [
        'Payment Processing',
        'Risk Management',
        'Fraud Detection',
        'Regulatory Compliance',
        'Blockchain Integration',
        'Real-time Analytics'
      ],
      href: '/solutions/finance'
    },
    {
      id: 'retail',
      title: 'Retail Solutions',
      description: 'E-commerce and retail technology solutions to enhance customer experience and operational efficiency.',
      icon: Target,
      color: 'from-orange-600 to-red-600',
      features: [
        'E-commerce Platforms',
        'Inventory Management',
        'Customer Analytics',
        'Omnichannel Solutions',
        'AI Recommendations',
        'Supply Chain Optimization'
      ],
      href: '/solutions/retail'
    }
  ];
  const technologies = [
    {
      name: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered automation',
      icon: Brain,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation computing power for complex problem solving',
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Cloud Computing',
      description: 'Scalable, secure, and cost-effective cloud infrastructure',
      icon: Cloud,
      color: 'from-green-600 to-blue-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges 
              and opportunities in your industry.
            </p>
          </div>