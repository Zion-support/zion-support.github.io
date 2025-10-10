'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users'
    },
    {
      icon: Users,
      title: 'Customer Relationship Manager',
      description: 'AI-powered CRM with automated lead scoring and personalized customer interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - affordable, scalable AI and IT tools designed for growing businesses. Start with low monthly costs." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, AI tools, affordable software, subscription software" />
      </Helmet>

<<<<<<< HEAD
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Micro
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}SaaS
              </span>
              {' '}Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, scalable AI and IT tools designed for growing businesses. 
              Start with low monthly costs and scale as you grow.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Compare Plans</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-white font-semibold">Features</th>
                    <th className="pb-4 text-white font-semibold text-center">AI Analytics</th>
                    <th className="pb-4 text-white font-semibold text-center">CRM</th>
                    <th className="pb-4 text-white font-semibold text-center">Security Suite</th>
                    <th className="pb-4 text-white font-semibold text-center">Cloud Manager</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr>
                    <td className="py-3 text-gray-300">Users</td>
                    <td className="py-3 text-gray-300 text-center">Up to 50</td>
                    <td className="py-3 text-gray-300 text-center">Up to 100</td>
                    <td className="py-3 text-gray-300 text-center">Up to 200</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">Storage</td>
                    <td className="py-3 text-gray-300 text-center">100GB</td>
                    <td className="py-3 text-gray-300 text-center">500GB</td>
                    <td className="py-3 text-gray-300 text-center">1TB</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">API Access</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">24/7 Support</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

<<<<<<< HEAD
=======
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the micro SaaS solution that fits your business needs. 
              Start with a free trial and scale as you grow.
            </p>
<<<<<<< HEAD
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;