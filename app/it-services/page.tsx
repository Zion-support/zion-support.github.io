'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Globe, 
  Cpu,
  Database,
  BarChart,
  Phone,
  Mail,
  MapPin,
  Settings,
  Cloud,
  Smartphone
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: [
        'React/Next.js development',
        'Full-stack solutions',
        'API development',
        'Database design'
      ],
      price: 'Starting at $4,000/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      features: [
        'AWS/Azure/GCP setup',
        'DevOps implementation',
        'Auto-scaling solutions',
        'Cost optimization'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your assets',
      features: [
        'Security audits',
        'Threat monitoring',
        'Compliance management',
        'Incident response'
      ],
      price: 'Starting at $2,500/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and maintain your database systems',
      features: [
        'Database design',
        'Performance tuning',
        'Backup strategies',
        'Data migration'
      ],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS/Android apps',
        'React Native development',
        'App store deployment',
        'Maintenance support'
      ],
      price: 'Starting at $5,000/month'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic guidance for your technology decisions',
      features: [
        'Technology assessment',
        'Digital transformation',
        'Process optimization',
        'Vendor management'
      ],
      price: 'Starting at $1,500/month'
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education',
    'Government'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '25+', label: 'Countries Served' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Explore our comprehensive IT services including web development, cloud infrastructure, cybersecurity, and mobile development." />
        <meta name="keywords" content="IT services, web development, cloud infrastructure, cybersecurity, mobile development, database management, IT consulting, Zion Tech Group" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to power your business. From web development 
              to cloud infrastructure, we provide the technology foundation you need to succeed.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <button className="w-full text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center py-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-white font-medium">{industry}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your IT needs and create a customized solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItServicesPage;