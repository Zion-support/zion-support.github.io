'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Brain, Shield, BarChart, Star, Clock, Users, Award } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      icon: Brain,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting'],
      price: '$99/month',
      users: 'Up to 10 users'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$149/month',
      users: 'Unlimited users'
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$79/month',
      users: 'Up to 25 users'
    },
    {
      icon: Users,
      title: 'Customer Support AI',
      description: 'Intelligent customer support automation with natural language processing.',
      features: ['AI chatbot', 'Ticket automation', 'Sentiment analysis', 'Multi-channel support'],
      price: '$129/month',
      users: 'Unlimited tickets'
    },
    {
      icon: Star,
      title: 'Marketing Automation',
      description: 'AI-driven marketing campaigns with personalized content and audience targeting.',
      features: ['Email automation', 'Social media management', 'A/B testing', 'ROI tracking'],
      price: '$199/month',
      users: 'Up to 50 campaigns'
    },
    {
      icon: Clock,
      title: 'Time Tracking AI',
      description: 'Smart time tracking with productivity insights and automated reporting.',
      features: ['Automatic time tracking', 'Productivity analytics', 'Team insights', 'Invoice generation'],
      price: '$59/month',
      users: 'Up to 20 users'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration',
    'AI-powered features',
    'Customizable workflows'
  ];

  const categories = [
    {
      name: 'Analytics & Reporting',
      count: '12 tools',
      description: 'Data visualization and business intelligence'
    },
    {
      name: 'Security & Compliance',
      count: '8 tools',
      description: 'Cybersecurity and regulatory compliance'
    },
    {
      name: 'Productivity & Collaboration',
      count: '15 tools',
      description: 'Team management and workflow optimization'
    },
    {
      name: 'Marketing & Sales',
      count: '10 tools',
      description: 'Customer acquisition and retention'
    },
    {
      name: 'Finance & Accounting',
      count: '7 tools',
      description: 'Financial management and reporting'
    },
    {
      name: 'Customer Support',
      count: '8 tools',
      description: 'Customer service and support automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaasTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
                <p className="text-gray-300 mb-6">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-white">{tool.price}</div>
                      <div className="text-sm text-gray-400">{tool.users}</div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tool Categories</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our tools organized by category to find exactly what your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <span className="text-cyan-400 text-sm font-medium">{category.count}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Explore Tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Micro SaaS?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our micro SaaS solutions offer the perfect balance of functionality, affordability, and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;