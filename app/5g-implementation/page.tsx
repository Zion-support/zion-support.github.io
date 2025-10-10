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
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance for 5G networks and connected devices.',
      benefits: ['End-to-end encryption', 'Compliance standards', 'Threat protection']
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Worldwide 5G connectivity solutions for international businesses and operations.',
      benefits: ['Global coverage', 'Seamless roaming', 'Multi-carrier support']
    }
  ];

  const services = [
    {
      title: '5G Network Planning',
      description: 'Comprehensive 5G network planning and design services',
      price: '$50,000',
      features: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Interference analysis']
    },
    {
      title: '5G Implementation',
      description: 'End-to-end 5G network implementation and deployment',
      price: '$150,000',
      features: ['Equipment installation', 'Network configuration', 'Testing & validation', 'Go-live support']
    },
    {
      title: '5G Optimization',
      description: 'Ongoing 5G network optimization and performance tuning',
      price: '$25,000/month',
      features: ['Performance monitoring', 'Capacity optimization', 'Coverage improvement', '24/7 support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services including planning, deployment, and optimization for enterprise clients." />
        <meta name="keywords" content="5G implementation, 5G network, 5G deployment, 5G optimization, 5G services" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            5G Implementation Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Next-Generation Connectivity Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with cutting-edge 5G technology. Our expert team delivers 
            complete 5G network solutions from planning to optimization.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Our 5G Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our 5G Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full cyber-button-enhanced">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card-enhanced p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement 5G?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our 5G experts for a free consultation and discover how 5G can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button-enhanced"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FiveGImplementationPage;