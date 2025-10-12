'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive modeling, and automated insights for data-driven decision making',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Machine learning insights', 'Custom alerts', 'Data visualization'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Complete customer relationship management with AI-driven lead scoring, automated follow-ups, and personalized customer journeys',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Pipeline management', 'Customer segmentation', 'Performance analytics'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'CRM'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Enterprise Security Monitor',
      description: 'Comprehensive cybersecurity monitoring with threat detection, vulnerability assessment, and automated incident response',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Real-time alerts', 'Incident response', 'Security analytics', 'Penetration testing', 'Security training'],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Backup Enterprise',
      description: 'Enterprise-grade cloud backup and disaster recovery with AI-powered optimization and cross-platform synchronization',
      features: ['Automated backups', 'Disaster recovery', 'Version control', 'Cross-platform sync', 'Encryption', 'Compliance tools', 'Bandwidth optimization', 'Recovery testing'],
      price: '$179/month',
      users: 'Unlimited',
      popular: true,
      category: 'Backup'
    },
    {
      id: '5',
      icon: MessageSquare,
      title: 'AI Customer Support Pro',
      description: 'Advanced customer support platform with AI chatbots, sentiment analysis, and seamless human handoff capabilities',
      features: ['AI chatbot', 'Multi-language support', 'Human handoff', 'Analytics dashboard', 'Custom training', 'Sentiment analysis', 'Knowledge base', 'Live chat integration'],
      price: '$129/month',
      users: 'Up to 500 conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '6',
      icon: TrendingUp,
      title: 'Marketing Automation Hub',
      description: 'Complete marketing automation platform with AI-driven campaigns, social media management, and advanced analytics',
      features: ['Email campaigns', 'Social media scheduling', 'Lead nurturing', 'A/B testing', 'ROI tracking', 'Customer journey mapping', 'Personalization engine', 'Attribution modeling'],
      price: '$249/month',
      users: 'Up to 150 users',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '7',
      icon: BarChart3,
      title: 'Financial Analytics Suite',
      description: 'Comprehensive financial management and analytics platform with AI-powered forecasting and automated reporting',
      features: ['Financial dashboards', 'Cash flow forecasting', 'Budget tracking', 'Expense categorization', 'Tax preparation', 'Investment analysis', 'Risk assessment', 'Compliance reporting'],
      price: '$189/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '8',
      icon: Users,
      title: 'HR Management Pro',
      description: 'Complete human resources management system with AI-powered recruitment, performance tracking, and employee analytics',
      features: ['Employee database', 'Recruitment tools', 'Performance tracking', 'Payroll integration', 'Time tracking', 'Training management', 'Benefits administration', 'Analytics dashboard'],
      price: '$219/month',
      users: 'Up to 300 employees',
      popular: true,
      category: 'HR'
    },
    {
      id: '9',
      icon: Cloud,
      title: 'Project Management Hub',
      description: 'Advanced project management platform with AI-powered resource allocation, timeline optimization, and team collaboration tools',
      features: ['Project planning', 'Task management', 'Resource allocation', 'Timeline tracking', 'Team collaboration', 'Budget management', 'Risk assessment', 'Progress reporting'],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Project Management'
    },
    {
      id: '10',
      icon: MessageSquare,
      title: 'E-commerce Analytics Pro',
      description: 'Specialized e-commerce analytics platform with AI-driven insights, conversion optimization, and customer behavior analysis',
      features: ['Sales analytics', 'Customer behavior tracking', 'Conversion optimization', 'Inventory management', 'Pricing optimization', 'Market analysis', 'Competitor tracking', 'ROI analysis'],
      price: '$279/month',
      users: 'Up to 25 stores',
      popular: true,
      category: 'E-commerce'
    },
    {
      id: '11',
      icon: Shield,
      title: 'Compliance Management Suite',
      description: 'Comprehensive compliance management platform with automated monitoring, reporting, and regulatory updates',
      features: ['Compliance monitoring', 'Regulatory updates', 'Audit trails', 'Risk assessment', 'Document management', 'Training modules', 'Reporting tools', 'Alert system'],
      price: '$349/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Compliance'
    },
    {
      id: '12',
      icon: TrendingUp,
      title: 'Sales Intelligence Platform',
      description: 'AI-powered sales intelligence platform with lead generation, prospect research, and sales performance optimization',
      features: ['Lead generation', 'Prospect research', 'Sales forecasting', 'Territory management', 'Pipeline analysis', 'Competitive intelligence', 'Sales coaching', 'Performance metrics'],
      price: '$199/month',
      users: 'Up to 50 sales reps',
      popular: true,
      category: 'Sales'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Backup', 'Support', 'Marketing', 'Finance', 'HR', 'Project Management', 'E-commerce', 'Compliance', 'Sales'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built for the cloud with automatic scaling and high availability'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Designed for non-technical users with intuitive interfaces'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed for small to medium businesses. Analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, CRM, security, backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;