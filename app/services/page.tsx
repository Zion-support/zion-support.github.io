'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions for your business needs',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Complete IT infrastructure and cloud solutions',
      href: '/it-services'
    },
    {
      icon: Code,
      title: 'Micro SAAS',
      description: '50+ AI-powered tools and applications',
      href: '/micro-saas'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions and monitoring',
      href: '/cybersecurity'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Business intelligence and data insights',
      href: '/data-analytics'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert technology consulting services',
      href: '/consultation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, and more. Transform your business with our expert technology services." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, data analytics, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
