'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, Globe, Lock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Machine learning, natural language processing, and AI-powered automation',
      color: 'blue',
      link: '/ai-chatbots'
    },
    {
      icon: Zap,
      title: '5G Technology',
      description: 'Next-generation wireless technology for ultra-fast connectivity',
      color: 'purple',
      link: '/5g-data-analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services',
      color: 'green',
      link: '/cloud-migration'
    },
    {
      icon: Globe,
      title: 'IoT Solutions',
      description: 'Connected devices and smart infrastructure solutions',
      color: 'yellow',
      link: '/iot-connectivity'
    },
    {
      icon: Lock,
      title: 'Blockchain',
      description: 'Secure blockchain development and smart contracts',
      color: 'red',
      link: '/blockchain-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and threat protection',
      color: 'orange',
      link: '/cybersecurity-audit'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      yellow: 'text-yellow-400',
      red: 'text-red-400',
      orange: 'text-orange-400'
    };
    return colors[color as keyof typeof colors] || 'text-blue-400';
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, 5G, Cloud, IoT, Blockchain, and Cybersecurity solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions to transform your business and drive innovation
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <service.icon className={`h-12 w-12 ${getColorClasses(service.color)} mr-4`} />
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center ${getColorClasses(service.color)} hover:opacity-80 font-medium group-hover:translate-x-2 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
