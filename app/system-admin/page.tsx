'use client';
import React from 'react';
import { Settings, Shield, Monitor, Database, ArrowRight, CheckCircle, Star, Users, Clock, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemAdminPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Expert configuration and optimization of your IT infrastructure for maximum performance and reliability.',
      benefits: ['Performance tuning', 'Resource optimization', 'System monitoring']
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security administration including access controls, vulnerability management, and compliance.',
      benefits: ['Access control', 'Security patches', 'Compliance monitoring']
    },
    {
      icon: Monitor,
      title: 'Server Management',
      description: 'Complete server administration including installation, configuration, maintenance, and troubleshooting.',
      benefits: ['Server setup', 'Performance monitoring', 'Backup management']
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Professional database management including optimization, backup, recovery, and security.',
      benefits: ['Database optimization', 'Backup strategies', 'Performance tuning']
    }
  ];

  const services = [
    {
      title: 'Windows Server Administration',
      description: 'Complete Windows Server management and optimization services.',
      icon: Monitor
    },
    {
      title: 'Linux System Administration',
      description: 'Expert Linux server setup, configuration, and maintenance.',
      icon: Settings
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'AWS, Azure, and Google Cloud platform administration.',
      icon: Shield
    },
    {
      title: 'Network Administration',
      description: 'Network infrastructure setup, monitoring, and optimization.',
      icon: Zap
    }
  ];

  const stats = [
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Monitoring' },
    { number: '15min', label: 'Response Time' },
    { number: '100%', label: 'Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              System Administration
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional system administration services to keep your IT infrastructure running smoothly. 
              Our expert administrators ensure maximum uptime, security, and performance for your critical systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive System Management</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our system administration services cover all aspects of IT infrastructure management, 
              from initial setup to ongoing maintenance and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
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
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Administration Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized system administration services tailored to your specific technology stack and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let Us Manage Your Systems</h2>
          <p className="text-xl mb-8 text-purple-100">
            Focus on your business while we handle all your system administration needs with expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemAdminPage;