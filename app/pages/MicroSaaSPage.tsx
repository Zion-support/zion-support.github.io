'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Custom Micro SaaS Development',
      description: 'Tailored micro SaaS solutions designed to solve specific business challenges with scalable architecture.',
      features: ['Custom development', 'Scalable architecture', 'API integration', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Intelligent micro SaaS applications powered by artificial intelligence and machine learning.',
      features: ['AI integration', 'Machine learning', 'Predictive analytics', 'Automated workflows']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting solutions for your micro SaaS applications.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Business intelligence']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Deployment & Scaling',
      description: 'Seamless deployment and automatic scaling solutions for your micro SaaS applications.',
      features: ['Cloud deployment', 'Auto-scaling', 'Load balancing', 'Performance optimization']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Online retail solutions' },
    { name: 'Healthcare', description: 'Medical practice management' },
    { name: 'Finance', description: 'Financial services tools' },
    { name: 'Education', description: 'Learning management systems' },
    { name: 'Real Estate', description: 'Property management tools' },
    { name: 'Manufacturing', description: 'Production optimization' }
  ];

  return (
    <React.Fragment>
      <SEO
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS development and deployment solutions for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-600 to-blue-700 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Micro SaaS Solutions</h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Build and scale your micro SaaS applications with our expert development team
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Micro SaaS Services</h2>
              <p className="text-xl text-gray-300">
                End-to-end micro SaaS development and deployment solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <service.icon className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300">
                Micro SaaS solutions across various industries
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                    <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-300">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
              <p className="text-xl text-green-100 mb-8">
                Let our experts help you create and deploy your micro SaaS application
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}