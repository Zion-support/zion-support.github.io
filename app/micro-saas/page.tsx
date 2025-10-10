'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Star, ArrowRight, Users, Shield, Clock, Award } from 'lucide-react';

interface MicroSaaS {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSAAS: MicroSaaS[] = [
    {
      id: '1',
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI',
      features: ['Multiple content types', 'SEO optimization', 'Brand voice training', 'Bulk generation', 'API access'],
      price: '$49/month',
      users: 'Up to 10,000 words',
      popular: true,
      category: 'Content'
    },
    {
      id: '2',
      title: 'Email Marketing Automation',
      description: 'Automate your email campaigns with intelligent segmentation and personalization',
      features: ['Drag-and-drop builder', 'A/B testing', 'Analytics dashboard', 'CRM integration', 'Template library'],
      price: '$79/month',
      users: 'Up to 5,000 subscribers',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '3',
      title: 'Social Media Scheduler',
      description: 'Schedule and manage your social media posts across multiple platforms',
      features: ['Multi-platform posting', 'Content calendar', 'Hashtag suggestions', 'Performance analytics', 'Team collaboration'],
      price: '$39/month',
      users: 'Up to 10 accounts',
      popular: false,
      category: 'Social'
    },
    {
      id: '4',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business metrics',
      features: ['Real-time data', 'Custom reports', 'Data visualization', 'Export options', 'API integration'],
      price: '$99/month',
      users: 'Unlimited data points',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '5',
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
    }
  ];

  const categories = ['all', ...Array.from(new Set(microSAAS.map(saas => saas.category)))];

  const filteredSAAS = microSAAS.filter(saas => 
    selectedCategory === 'all' || saas.category === selectedCategory
  );

  const benefits = [
    'No upfront costs or setup fees',
    'Cancel anytime with 30 days notice',
    'Regular updates and new features',
    '24/7 customer support',
    '99.9% uptime guarantee',
    'Secure and compliant hosting'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed and performance'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 uptime guarantee'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by industry leaders'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions. Ready-to-use business tools for content generation, marketing automation, analytics, and more." />
        <meta name="keywords" content="micro SaaS, business tools, content generation, marketing automation, analytics, customer support, ready-to-use software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use business tools that solve specific problems. No development needed, just subscribe and start using.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Available Solutions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSAAS.map((saas) => (
                <div key={saas.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group relative">
                  {saas.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {saas.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{saas.description}</p>
                    
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{saas.price}</span>
                      <span className="text-gray-400 text-sm">{saas.users}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {saas.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {filteredSAAS.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No solutions found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What You Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Choose any solution and start your free trial today. No credit card required.
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2 mx-auto">
                Browse All Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;
