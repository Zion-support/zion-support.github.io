'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, migration, and optimization with 24/7 monitoring.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        '24/7 monitoring and maintenance',
        'Disaster recovery planning',
        'Performance optimization'
      ],
      benefits: 'Reduce infrastructure costs by 40%',
      popular: true,
      rating: 4.9,
      clients: '200+'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization with 24/7 monitoring.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Multi-cloud deployment (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Auto-scaling and load balancing',
        'Cost optimization and monitoring',
        'Disaster recovery and backup'
      ],
      benefits: 'Reduce cloud costs by 35%',
      popular: true,
      rating: 4.8,
      clients: '150+'
    },
    {
      title: 'Network Security Solutions',
      description: 'Comprehensive network security implementation and monitoring.',
      icon: '🔒',
      price: '$1,800/month',
      features: [
        'Firewall configuration and management',
        'VPN setup and maintenance',
        'Intrusion detection systems',
        'Network monitoring and alerting',
        'Security policy implementation'
      ],
      benefits: 'Enhance security posture by 60%',
      popular: false,
      rating: 4.7,
      clients: '120+'
    },
    {
      title: 'Database Administration',
      description: 'Professional database management and optimization services.',
      icon: '🗄️',
      price: '$1,500/month',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and recovery procedures',
        'Security and access control',
        'Migration and upgrade services'
      ],
      benefits: 'Improve database performance by 50%',
      popular: false,
      rating: 4.6,
      clients: '100+'
    },
    {
      title: 'Help Desk & Support',
      description: '24/7 technical support and help desk services.',
      icon: '🎧',
      price: '$800/month',
      features: [
        '24/7 technical support',
        'Remote assistance and troubleshooting',
        'User training and documentation',
        'Incident management and tracking',
        'SLA compliance monitoring'
      ],
      benefits: 'Reduce support tickets by 45%',
      popular: false,
      rating: 4.8,
      clients: '300+'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and technology roadmap development.',
      icon: '💡',
      price: '$2,500/month',
      features: [
        'Technology assessment and planning',
        'Digital transformation strategy',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management support'
      ],
      benefits: 'Align IT with business goals',
      popular: false,
      rating: 4.9,
      clients: '80+'
    }
  ];

  const serviceCategories = [
    { name: 'Cloud Services', count: 8, icon: '☁️', color: 'text-blue-600' },
    { name: 'Security', count: 12, icon: '🔒', color: 'text-red-600' },
    { name: 'Infrastructure', count: 15, icon: '🏗️', color: 'text-green-600' },
    { name: 'Support', count: 6, icon: '🎧', color: 'text-purple-600' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Shield },
    { label: 'Response Time', value: '< 2hrs', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, security, and support. Transform your business with our expert IT services." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Professional IT Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services including infrastructure management, cloud solutions, security, and support. 
            Transform your business with our expert IT services.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{service.rating}</span>
                  </div>
                  <div>{service.clients} clients</div>
                </div>
                
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert IT team help you build a robust, secure, and scalable IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free IT Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;