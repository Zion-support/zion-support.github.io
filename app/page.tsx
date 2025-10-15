'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business.',
      href: '/ai-solutions'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      href: '/cybersecurity'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      href: '/cloud-solutions'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your operations.',
      href: '/digital-transformation'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence"
      />
      
      <div className="min-h-screen bg-slate-900 text-white cyber-grid-advanced">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden cyber-scan">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8 cyber-glow">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-medium text-lg">Innovation • Excellence • Future</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 cyber-text neon-pulse">
                Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  to="/contact"
                  className="cyber-button px-10 py-4 text-lg font-semibold group"
                >
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="cyber-button-secondary px-10 py-4 text-lg font-semibold group"
                >
                  <span className="flex items-center">
                    Learn More
                    <StarIcon className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cyber-card p-6 cyber-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300 neon-pulse">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="cyber-text neon-pulse">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive exponential business growth with cutting-edge innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group cyber-card p-8 cyber-float hover:cyber-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 cyber-data-flow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Why Choose <span className="cyber-text neon-pulse">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value and competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 group hover:cyber-glow transition-all duration-300 cyber-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-8 h-8 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 cyber-glow" />
                    <span className="text-gray-300 font-medium text-lg group-hover:text-cyan-300 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 cyber-scan">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text neon-pulse">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how our cutting-edge solutions can accelerate your digital transformation and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button px-10 py-4 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/demo"
                className="cyber-button-secondary px-10 py-4 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  Schedule Demo
                  <PlayIcon className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;