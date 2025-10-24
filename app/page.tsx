'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Zap, Target, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';
import SEOOptimizer from './components/SEOOptimizer';

const HomePage = () => {
  const services = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      stats: '40% efficiency boost',
      link: '/ai-services',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure and cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% uptime',
      link: '/it-services',
    },
    {
      title: 'Performance Optimization',
      description: 'Advanced performance monitoring and optimization for maximum efficiency',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      stats: '3x faster',
      link: '/performance',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality assurance to ensure reliable solutions',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      stats: '100% tested',
      link: '/quality',
    },
  ];

  const features = [
    'Advanced AI Integration',
    '24/7 Technical Support',
    'Scalable Solutions',
    'Custom Development',
    'Security First Approach',
    'Performance Optimization',
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '1000+', label: 'Projects Completed' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="ZionTechGroup - AI & IT Solutions"
        description="Transform your business with cutting-edge AI and IT solutions. Expert consulting, development, and support services."
        keywords="AI solutions, IT services, technology consulting, digital transformation, artificial intelligence"
      />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, efficiency, and innovation for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Services
              </Link>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <Link href={service.link}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-400">
                          {service.stats}
                        </span>
                        <Link
                          href={service.link}
                          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Why Choose ZionTechGroup?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Start Your Journey
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;