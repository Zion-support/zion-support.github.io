'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const solutions = [
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      description: 'Automate your social media posts across all platforms with AI-powered content optimization.',
      price: '$29/month',
      features: ['Multi-platform posting', 'AI content suggestions', 'Analytics dashboard', 'Team collaboration'],
      icon: <Zap className="w-8 h-8" />,
      category: 'marketing',
      popular: true
    },
    {
      id: 'expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'Track and categorize expenses automatically with receipt scanning and AI categorization.',
      price: '$19/month',
      features: ['Receipt scanning', 'Auto categorization', 'Tax reporting', 'Budget alerts'],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'finance',
      popular: false
    },
    {
      id: 'project-manager',
      name: 'Project Management Pro',
      description: 'Streamline project workflows with task automation and team collaboration tools.',
      price: '$39/month',
      features: ['Task automation', 'Team collaboration', 'Time tracking', 'Progress reports'],
      icon: <Target className="w-8 h-8" />,
      category: 'productivity',
      popular: true
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing Suite',
      description: 'Create and send professional email campaigns with advanced automation and analytics.',
      price: '$49/month',
      features: ['Drag & drop editor', 'Email automation', 'A/B testing', 'Advanced analytics'],
      icon: <Users className="w-8 h-8" />,
      category: 'marketing',
      popular: false
    },
    {
      id: 'inventory-manager',
      name: 'Inventory Manager',
      description: 'Track inventory levels, automate reordering, and manage suppliers efficiently.',
      price: '$59/month',
      features: ['Real-time tracking', 'Auto reordering', 'Supplier management', 'Analytics'],
      icon: <Server className="w-8 h-8" />,
      category: 'business',
      popular: false
    },
    {
      id: 'customer-support',
      name: 'Customer Support Hub',
      description: 'Manage customer inquiries with AI-powered chatbots and ticket automation.',
      price: '$79/month',
      features: ['AI chatbot', 'Ticket automation', 'Knowledge base', 'Multi-channel support'],
      icon: <Shield className="w-8 h-8" />,
      category: 'support',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', count: solutions.length },
    { id: 'marketing', name: 'Marketing', count: solutions.filter(s => s.category === 'marketing').length },
    { id: 'finance', name: 'Finance', count: solutions.filter(s => s.category === 'finance').length },
    { id: 'productivity', name: 'Productivity', count: solutions.filter(s => s.category === 'productivity').length },
    { id: 'business', name: 'Business', count: solutions.filter(s => s.category === 'business').length },
    { id: 'support', name: 'Support', count: solutions.filter(s => s.category === 'support').length }
  ];

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">SaaS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused software solutions designed to solve specific business problems. 
            Start small, scale fast, and grow your business with our micro SaaS tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
              Explore Solutions
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <div key={solution.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                {solution.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                    <div className="text-2xl font-bold text-purple-400">{solution.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose from our suite of micro SaaS solutions or let us build a custom solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;
