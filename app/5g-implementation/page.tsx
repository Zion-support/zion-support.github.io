'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance for 5G network infrastructure.',
      benefits: ['End-to-end encryption', 'Compliance standards', 'Threat protection']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide 5G network deployment with seamless connectivity across regions.',
      benefits: ['Global reach', 'Seamless roaming', 'Multi-region support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network optimization and insights.',
      benefits: ['Real-time metrics', 'Performance insights', 'Optimization recommendations']
    }
  ];

  const services = [
    {
      title: '5G Network Planning',
      description: 'Comprehensive 5G network planning and design services',
      features: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Interference analysis']
    },
    {
      title: 'Infrastructure Deployment',
      description: 'Complete 5G infrastructure deployment and installation',
      features: ['Base station installation', 'Antenna configuration', 'Backhaul setup', 'Testing & validation']
    },
    {
      title: 'Network Optimization',
      description: 'Ongoing 5G network optimization and performance tuning',
      features: ['Performance monitoring', 'Capacity optimization', 'Coverage enhancement', 'Interference mitigation']
    },
    {
      title: 'Support & Maintenance',
      description: '24/7 support and maintenance for 5G networks',
      features: ['Round-the-clock monitoring', 'Proactive maintenance', 'Rapid response', 'Performance optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services with ultra-low latency, global coverage, and enterprise-grade security. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G implementation, 5G network design, 5G deployment, ultra-low latency, 5G security, network optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                5G Implementation
                <span className="block text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Our expert team delivers 
                ultra-low latency, high-speed connectivity, and enterprise-grade security for your 5G network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our 5G Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive 5G solutions with unmatched performance, security, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our 5G Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive 5G solutions from planning to deployment and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-blue-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our 5G experts to discuss your network requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;