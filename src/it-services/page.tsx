'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Configuration'],
      price: 'Starting at $1,299/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions including threat detection, vulnerability assessment, and compliance.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Security Monitoring'],
      price: 'Starting at $799/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      icon: Settings,
      features: ['CI/CD Pipeline', 'Automated Testing', 'Deployment Automation', 'Monitoring Setup'],
      price: 'Starting at $599/month'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      icon: Database,
      features: ['Database Design', 'Performance Optimization', 'Migration Services', 'Backup & Recovery'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and database management."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Comprehensive IT Solutions for Your Business
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT infrastructure with our expert services. From cloud migration to cybersecurity, 
              we provide end-to-end IT solutions to keep your business running smoothly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-4 text-cyan-400">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our IT services can optimize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ITServicesPage;