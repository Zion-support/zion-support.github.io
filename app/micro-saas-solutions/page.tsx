'use client';'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics solution with AI-driven insights and real-time data visualization.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Data export capabilities",
        "Multi-user access"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $99/month",
      benefits: ["Increased efficiency", "Better decision making", "Cost savings"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis"],
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Content Generator",
      description: "Advanced content creation tool powered by artificial intelligence for blogs, social media, and marketing.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation",
        "Multiple content types",
        "SEO optimization",
        "Brand voice consistency",
        "Content scheduling",
        "Performance analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $79/month",
      benefits: ["Time savings", "Consistent quality", "SEO optimization"],
      useCases: ["Content marketing", "Social media", "Blog management"],
      href: "/micro-saas/content-generator"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent chatbot solution that provides 24/7 customer support with natural language processing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language processing",
        "24/7 availability",
        "Multi-language support",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      benefits: ["24/7 support", "Reduced costs", "Improved satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation"],
      href: "/micro-saas/ai-customer-support-chatbot"
    },
    {
      title: "AI Project Manager",
      description: "Intelligent project management tool with AI-powered task optimization and team collaboration features.",
      icon: CogIcon,
      features: [
        "AI task optimization",
        "Team collaboration",
        "Progress tracking",
        "Resource management",
        "Automated scheduling",
        "Performance insights"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $129/month",
      benefits: ["Better organization", "Improved productivity", "Resource optimization"],
      useCases: ["Project management", "Team coordination", "Task automation"],
      href: "/micro-saas/ai-project-manager"
    },
    {
      title: "AI Inventory Manager",
      description: "Smart inventory management system with predictive analytics and automated reordering capabilities.",
      icon: EyeIcon,
      features: [
        "Predictive analytics",
        "Automated reordering",
        "Stock optimization",
        "Multi-location support",
        "Integration APIs",
        "Real-time tracking"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      benefits: ["Reduced waste", "Optimized stock", "Cost savings"],
      useCases: ["Inventory management", "Supply chain", "Retail operations"],
      href: "/micro-saas/ai-inventory-manager"
    },
    {
      title: "AI Expense Tracker",
      description: "Intelligent expense tracking and categorization system with automated receipt processing and reporting.",
      icon: CurrencyDollarIcon,
      features: [
        "Automated categorization",
        "Receipt processing",
        "Expense reporting",
        "Budget tracking",
        "Tax preparation",
        "Multi-currency support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $59/month",
      benefits: ["Time savings", "Better tracking", "Tax compliance"],
      useCases: ["Expense management", "Financial tracking", "Tax preparation"],
      href: "/micro-saas/ai-expense-tracker"
    }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
      icon: CloudIcon
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: CogIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: UserGroupIcon
    }
  ];
import React from 'react';
import { Helmet } from 'react-helmet-async'

const Page = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16"></>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicroSaaSSolutionsPage;

