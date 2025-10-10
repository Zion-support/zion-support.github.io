'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Code, Smartphone, Globe, BarChart } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      href: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      href: '/cybersecurity-solutions'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration solutions.',
      href: '/devops-cicd'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and management solutions.',
      href: '/database-management'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'API development and management services.',
      href: '/api-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android mobile application development.',
      href: '/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications and websites.',
      href: '/web-development'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions.',
      href: '/data-analytics-bi'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, DevOps, and custom software development." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technology infrastructure solutions to modernize your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;