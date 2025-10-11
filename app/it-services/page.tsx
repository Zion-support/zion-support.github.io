'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Server, Cloud, Shield, Database, Monitor, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Design, deploy, and manage scalable cloud solutions for your business needs.',
      icon: Cloud,
      features: [
        'Cloud migration services',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring'
      ],
      price: 'Starting at $1,299/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and threat monitoring.',
      icon: Shield,
      features: [
        'Security assessment',
        'Threat detection',
        'Incident response',
        'Security training',
        'Compliance support'
      ],
      price: 'Starting at $999/month'
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      icon: Database,
      features: [
        'Database design',
        'Performance tuning',
        'Backup and recovery',
        'Data migration',
        'Monitoring and alerts'
      ],
      price: 'Starting at $799/month'
    },
    {
      id: 4,
      title: 'Network Infrastructure',
      description: 'Build and maintain robust network infrastructure for seamless connectivity.',
      icon: Server,
      features: [
        'Network design',
        'VPN setup',
        'Firewall configuration',
        'Load balancing',
        'Network monitoring'
      ],
      price: 'Starting at $1,199/month'
    },
    {
      id: 5,
      title: 'Desktop Support',
      description: 'Comprehensive desktop and workstation support for your team.',
      icon: Monitor,
      features: [
        'Hardware setup',
        'Software installation',
        'Troubleshooting',
        'Remote support',
        'Asset management'
      ],
      price: 'Starting at $299/month'
    },
    {
      id: 6,
      title: 'Mobile Solutions',
      description: 'Develop and manage mobile applications and device management solutions.',
      icon: Smartphone,
      features: [
        'Mobile app development',
        'Device management',
        'Security policies',
        'App deployment',
        'User support'
      ],
      price: 'Starting at $1,499/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, database management, and network solutions. Keep your business running smoothly." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, database management, network solutions, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to keep your business running smoothly. From cloud infrastructure to cybersecurity, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support to keep your systems running smoothly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300">Comprehensive security measures to protect your data and systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">IT infrastructure that grows with your business needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cloud Expertise</h3>
                <p className="text-gray-300">Deep expertise in cloud platforms and migration strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help streamline your operations and improve your business efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ItServicesPage;