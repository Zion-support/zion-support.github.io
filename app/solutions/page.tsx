'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Brain, Database, Zap, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SolutionsPage() {
  const solutionCategories = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      solutions: [
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced data analytics powered by AI' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Automate complex business processes' },
        { name: 'AI Customer Support', href: '/ai-customer-support', description: 'Intelligent customer service solutions' },
        { name: 'AI Healthcare', href: '/ai-healthcare', description: 'AI-driven healthcare innovations' },
        { name: 'AI Fintech', href: '/ai-fintech', description: 'Financial technology powered by AI' },
      ]
    },
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions for modern businesses',
      solutions: [
        { name: 'Cloud Services', href: '/cloud-services', description: 'Scalable cloud computing solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'Networking', href: '/networking', description: 'Professional networking services' },
        { name: 'IT Support', href: '/it-support', description: '24/7 technical support services' },
      ]
    },
    {
      icon: Zap,
      title: 'Specialized Solutions',
      description: 'Innovative solutions for emerging technologies and specialized needs',
      solutions: [
        { name: 'Quantum Computing', href: '/quantum-computing', description: 'Next-generation quantum solutions' },
        { name: 'Robotics', href: '/robotics', description: 'Advanced robotics and automation' },
        { name: '5G Implementation', href: '/5g-implementation', description: '5G network deployment and optimization' },
        { name: 'Blockchain', href: '/blockchain-solutions', description: 'Blockchain and Web3 solutions' },
        { name: 'Edge Computing', href: '/edge-computing', description: 'Distributed computing at the edge' },
      ]
    }
  ];

  const features = [
    'Customized solutions for your specific needs',
    'Cutting-edge technology and innovation',
    'Expert implementation and support',
    'Scalable and future-proof solutions',
    'Proven track record of success',
    '24/7 monitoring and maintenance'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive technology solutions including AI, IT infrastructure, and specialized services. Transform your business with our expert solutions." />
        <meta name="keywords" content="technology solutions, AI solutions, IT infrastructure, cloud services, cybersecurity, quantum computing, robotics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation. From AI to infrastructure, we have the expertise to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Solution Categories</h2>
              <p className="text-xl text-gray-300">Comprehensive solutions across all technology domains</p>
            </div>
            
            <div className="space-y-16">
              {solutionCategories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-6">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <h4 className="text-xl font-semibold text-white mb-2">{solution.name}</h4>
                        <p className="text-gray-300 mb-4">{solution.description}</p>
                        <a
                          href={solution.href}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
              <p className="text-xl text-gray-300">We deliver exceptional value through our comprehensive approach</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our solutions can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}