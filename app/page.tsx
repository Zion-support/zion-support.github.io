import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Globe } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions for immediate deployment',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity and infrastructure services',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cybersecurity, and IT services. Transform your business with cutting-edge technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI solutions, cybersecurity, and IT services. 
              Transform your business with cutting-edge technology and expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 hover:border-gray-400 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br ${service.color} text-white transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}