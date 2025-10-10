'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, BarChart, Zap, ArrowRight, CheckCircle, Star, Users, Clock } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasTools: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting'],
      pricing: '$99/month',
      category: 'Analytics'
    },
    {
      id: '2',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      pricing: '$149/month',
      category: 'Security'
    },
    {
      id: '3',
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      pricing: '$79/month',
      category: 'Productivity'
    },
    {
      id: '4',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Automation Workflow',
      description: 'Streamline business processes with intelligent automation and workflow optimization.',
      features: ['Process automation', 'Workflow optimization', 'Integration management', 'Performance monitoring'],
      pricing: '$129/month',
      category: 'Automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Business Tools</title>
        <meta name="description" content="Discover our specialized micro SaaS solutions designed to solve specific business challenges with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, security monitoring, project management, automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Specialized business tools powered by AI and automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized business tools designed to solve specific challenges with AI-powered automation and intelligent insights.
          </p>
        </div>

        {/* Micro SaaS Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {microSaasTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
              </div>

              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Our Micro SaaS Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm">Get up and running in minutes with our intuitive setup process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300 text-sm">Grows with your business from startup to enterprise</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock support to keep your business running</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Choose from our specialized micro SaaS solutions or let us create a custom tool for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Browse Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Request Custom Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
