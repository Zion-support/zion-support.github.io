import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Search, GitBranch, Database, Shield, CheckCircle, Zap, Brain, BarChart, Users } from 'lucide-react';

const AICodeAssistantProPage: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const useCases = [
    {
      title: 'Rapid Prototyping',
      description: 'Quickly build and test new features with AI-generated code',
      benefits: ['Reduce development time by 70%', 'Generate boilerplate code instantly', 'Focus on business logic']
    },
    {
      title: 'Code Review & Optimization',
      description: 'Automatically review code for best practices and performance',
      benefits: ['Catch bugs before deployment', 'Improve code quality', 'Learn from AI suggestions']
    },
    {
      title: 'Legacy Code Modernization',
      description: 'Update and modernize existing codebases with AI assistance',
      benefits: ['Refactor complex code', 'Update deprecated patterns', 'Maintain functionality']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI features',
        '5 programming languages',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced AI features',
        'All programming languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI-powered code generation and assistance tool. Boost productivity with intelligent code completion, debugging, and analysis." />
        <meta name="keywords" content="AI code assistant, code generation, programming AI, developer tools, code completion" />
      </Helmet>


