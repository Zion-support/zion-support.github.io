'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  BarChart, 
  Calendar, 
  FileText, 
  Video, 
  Smartphone, 
  Mail, 
  Users, 
  DollarSign, 
  Settings, 
  Shield, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Rocket,
  Truck,
  Stethoscope
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    { 
      name: 'AI Project Manager Pro', 
      href: '/ai-project-manager', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights and automation',
      features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment'],
      popular: true,
      rating: 4.8
    },
    { 
      name: 'AI Smart Calendar Pro', 
      href: '/ai-smart-calendar', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management with smart scheduling and optimization',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights'],
      popular: true,
      rating: 4.7
    },
    { 
      name: 'AI Content Writer Pro', 
      href: '/ai-content-writer', 
      icon: FileText, 
      category: 'Content', 
      price: '$129/mo',
      description: 'Advanced AI content creation with SEO optimization and brand consistency',
      features: ['SEO Optimization', 'Brand Voice', 'Content Templates', 'Multi-language Support'],
      popular: true,
      rating: 4.9
    },
    { 
      name: 'AI Video Generator Pro', 
      href: '/ai-video-generator', 
      icon: Video, 
      category: 'Content', 
      price: '$199/mo',
      description: 'Create professional videos with AI-powered editing and effects',
      features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library'],
      popular: false,
      rating: 4.6
    },
    { 
      name: 'AI Social Media Manager Pro', 
      href: '/ai-social-media-manager', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$99/mo',
      description: 'Automated social media management with AI content and scheduling',
      features: ['Auto Posting', 'Content Generation', 'Analytics', 'Engagement Optimization'],
      popular: true,
      rating: 4.8
    },
    { 
      name: 'AI Email Marketing Suite', 
      href: '/ai-email-marketing', 
      icon: Mail, 
      category: 'Marketing', 
      price: '$79/mo',
      description: 'Intelligent email marketing with personalization and automation',
      features: ['Personalization', 'A/B Testing', 'Automation', 'Analytics'],
      popular: true,
      rating: 4.7
    },
    { 
      name: 'AI Financial Analyzer Pro', 
      href: '/ai-financial-analyzer', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$149/mo',
      description: 'Advanced financial analysis and investment insights powered by AI',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Market Prediction', 'Investment Recommendations'],
      popular: true,
      rating: 4.8
    },
    { 
      name: 'AI Code Assistant Pro', 
      href: '/ai-code-assistant', 
      icon: Code, 
      category: 'Development', 
      price: '$179/mo',
      description: 'Intelligent coding assistant with AI-powered code generation and optimization',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation'],
      popular: true,
      rating: 4.9
    },
    { 
      name: 'AI Password Manager Pro', 
      href: '/ai-password-manager', 
      icon: Lock, 
      category: 'Security', 
      price: '$49/mo',
      description: 'AI-powered password management with advanced security features',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Auto-fill'],
      popular: false,
      rating: 4.6
    },
    { 
      name: 'AI CRM Assistant Pro', 
      href: '/ai-crm-assistant', 
      icon: Users, 
      category: 'Business', 
      price: '$159/mo',
      description: 'Intelligent CRM with AI-powered customer insights and automation',
      features: ['Lead Scoring', 'Customer Segmentation', 'Sales Forecasting', 'Automation'],
      popular: true,
      rating: 4.7
    },
    { 
      name: 'AI Invoice Generator Pro', 
      href: '/ai-invoice-generator', 
      icon: FileText, 
      category: 'Business', 
      price: '$79/mo',
      description: 'Automated invoice generation with AI-powered customization and tracking',
      features: ['Auto Generation', 'Custom Templates', 'Payment Tracking', 'Tax Calculation'],
      popular: false,
      rating: 4.5
    },
    { 
      name: 'AI Expense Tracker Pro', 
      href: '/ai-expense-tracker', 
      icon: Calculator, 
      category: 'Finance', 
      price: '$59/mo',
      description: 'Smart expense tracking with AI-powered categorization and insights',
      features: ['Auto Categorization', 'Receipt Scanning', 'Budget Analysis', 'Tax Preparation'],
      popular: true,
      rating: 4.6
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://ziontechgroup.com${service.href}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="w-full border border-purple-400 text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all block text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial today and experience the power of AI-driven micro SaaS tools
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;