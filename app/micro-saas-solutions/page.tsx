import React from 'react';
import { Helmet } from 'react-helmet-async';
import {CheckCircle, BarChart3, Database, Globe, Target, MessageSquare} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Advanced task management with AI-powered insights and team collaboration',
      longDescription: 'Streamline your workflow with our intelligent task management platform that adapts to your team\'s needs.',
      features: [
        'AI-powered task prioritization',
        'Team collaboration tools',
        'Time tracking & analytics',
        'Custom workflows',
        'Mobile app included',
        'API integration',
        'Advanced reporting',
        'Cloud synchronization'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Improve team coordination',
        'Real-time progress tracking'
      ],
      category: 'Productivity',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      popular: true
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      price: '$39/mo',
      originalPrice: '$69/mo',
      description: 'Comprehensive business analytics with real-time insights and custom reports',
      longDescription: 'Transform your data into actionable insights with our powerful analytics platform designed for small to medium businesses.',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Automated report generation',
        'Data export capabilities',
        'Multi-source integration',
        'Predictive analytics',
        'Mobile-responsive design',
        'White-label options'
      ],
      benefits: [
        'Make data-driven decisions',
        'Save 10+ hours weekly on reporting',
        'Identify growth opportunities',
        'Improve business performance'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      popular: false
    },
    {
      id: 'customer-support-hub',
      name: 'Customer Support Hub',
      price: '$49/mo',
      originalPrice: '$89/mo',
      description: 'All-in-one customer support platform with AI chatbot and ticket management',
      longDescription: 'Deliver exceptional customer service with our comprehensive support platform featuring AI-powered assistance and streamlined ticket management.',
      features: [
        'AI-powered chatbot',
        'Multi-channel support',
        'Ticket management system',
        'Knowledge base builder',
        'Customer satisfaction surveys',
        'Live chat integration',
        'Performance analytics',
        'Team collaboration tools'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response times by 80%',
        'Increase customer satisfaction',
        'Scale support operations'
      ],
      category: 'Customer Service',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      popular: true
    },
    {
      id: 'inventory-manager',
      name: 'Inventory Manager',
      price: '$35/mo',
      originalPrice: '$59/mo',
      description: 'Smart inventory management with automated reordering and demand forecasting',
      longDescription: 'Optimize your inventory with our intelligent management system that predicts demand and automates reordering processes.',
      features: [
        'Automated reorder points',
        'Demand forecasting',
        'Multi-location tracking',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting & analytics',
        'Mobile accessibility'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 30%',
        'Improve cash flow',
        'Streamline operations'
      ],
      category: 'Inventory',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      popular: false
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      price: '$25/mo',
      originalPrice: '$45/mo',
      description: 'Schedule and manage social media posts across multiple platforms with AI optimization',
      longDescription: 'Boost your social media presence with our intelligent scheduling platform that optimizes posting times and content for maximum engagement.',
      features: [
        'Multi-platform scheduling',
        'AI-optimized posting times',
        'Content calendar',
        'Hashtag suggestions',
        'Analytics & insights',
        'Team collaboration',
        'Content library',
        'Automated responses'
      ],
      benefits: [
        'Increase engagement by 65%',
        'Save 15+ hours weekly',
        'Improve content strategy',
        'Grow social following'
      ],
      category: 'Marketing',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      popular: false
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker Pro',
      price: '$19/mo',
      originalPrice: '$35/mo',
      description: 'Automated expense tracking with receipt scanning and tax preparation features',
      longDescription: 'Simplify expense management with our intelligent tracking system that automatically categorizes expenses and prepares tax-ready reports.',
      features: [
        'Receipt scanning (OCR)',
        'Automatic categorization',
        'Tax preparation tools',
        'Multi-currency support',
        'Expense approval workflows',
        'Integration with accounting software',
        'Mobile receipt capture',
        'Compliance reporting'
      ],
      benefits: [
        'Save 8+ hours monthly on expense management',
        'Reduce errors by 90%',
        'Simplify tax preparation',
        'Improve financial visibility'
      ],
      category: 'Finance',
      icon: <Target className="w-8 h-8 text-red-400" />,
      popular: true
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19/mo',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 3 micro SAAS products',
        'Basic support',
        'Standard integrations',
        'Mobile apps included',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 micro SAAS products',
        'Priority support',
        'Advanced integrations',
        'Custom branding',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      description: 'For large organizations',
      features: [
        'Unlimited micro SAAS products',
        '24/7 dedicated support',
        'Custom development',
        'White-label solutions',
        'Advanced security',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (<>
      <Helmet>
        <title>Micro SAAS Solutions - Innovative Software for Modern Businesses | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions designed to streamline business operations. From task management to analytics, find the perfect tools for your business." />
        <meta name="keywords" content="micro SAAS, business software, _productivity tools, _analytics, _customer support, _inventory management, _social media scheduling, expense tracking" />
        <meta property="og:title" content="Micro SAAS Solutions - Innovative Software for Modern Businesses" />
        <meta property="og:description" content="Discover our comprehensive micro SAAS solutions designed to streamline business operations." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>
    </>
  );
};

export default MicroSaasSolutionsPage;
