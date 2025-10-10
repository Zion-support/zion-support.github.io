'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, Brain, Settings, Mail, Search, FileText, Calendar, CheckSquare, Globe, Code } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: any;
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
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: Brain,
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '7',
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization with AI insights',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO'],
      price: '$89/month',
      users: 'Up to 10 websites',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: FileText,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, and social media automation',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation', 'SEO optimization'],
      price: '$199/month',
      users: 'Unlimited content',
      popular: true,
      category: 'Content'
    },
    {
      id: '9',
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs'],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '10',
      icon: CheckSquare,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI prioritization', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Project templates'],
      price: '$49/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '11',
      icon: Globe,
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive'],
      price: '$79/month',
      users: 'Unlimited pages',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '12',
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation'],
      price: '$59/month',
      users: 'Up to 10 developers',
      popular: false,
      category: 'Development'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Content', 'Productivity', 'Development'];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Focused AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. Quick deployment, scalable, and cost-effective." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;