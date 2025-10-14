'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis and insights for better decision making.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards'],
      price: 'Starting at $99/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for growing businesses.',
      features: ['Auto-scaling', '99.9% uptime', 'Global CDN'],
      price: 'Starting at $149/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Suite',
      description: 'Comprehensive security solutions for your applications.',
      features: ['SSL certificates', 'DDoS protection', 'Security monitoring'],
      price: 'Starting at $79/month'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance Optimization',
      description: 'Speed up your applications with our optimization tools.',
      features: ['Code optimization', 'Caching solutions', 'Performance monitoring'],
      price: 'Starting at $199/month'
    }
  ];

  const benefits = [
    'No upfront costs',
    'Scalable pricing',
    '24/7 support',
    'Easy integration',
    'Regular updates',
    'API access'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions for small and medium businesses. AI-powered tools, cloud infrastructure, and security services." />
        <meta name="keywords" content="micro SaaS, small business solutions, AI tools, cloud services, affordable software" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable, scalable software solutions designed specifically for small and medium businesses. 
              Get enterprise-level features without the enterprise price tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Portfolio</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our range of specialized solutions designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-purple-400 font-semibold">{solution.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Micro SaaS?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Micro SaaS solutions offer the perfect balance of functionality and affordability, 
                  making enterprise-level tools accessible to businesses of all sizes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Join thousands of businesses that have transformed their operations with our micro SaaS solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-300">Choose the plan that fits your business needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Up to 5 users
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Email support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 border border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Up to 25 users
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$399<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Custom analytics
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    24/7 support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with our micro SaaS solutions today. No long-term contracts, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-purple-600 text-purple-400 font-semibold py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}