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
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Incident response', 'Compliance management', 'Security training'],
      price: 'Starting at $800/month',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development workflow with automated testing, deployment, and monitoring.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization', 'Team training'],
      price: 'Starting at $1,200/month',
      category: 'DevOps'
    },
    {
      title: 'Database Management',
      description: 'Expert database design, optimization, migration, and management services.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Migration services', 'Backup & recovery', 'Security hardening', '24/7 monitoring'],
      price: 'Starting at $600/month',
      category: 'Database'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      icon: Smartphone,
      features: ['Native iOS/Android', 'Cross-platform apps', 'UI/UX design', 'App store optimization', 'Performance tuning', 'Maintenance & updates'],
      price: 'Starting at $2,000/month',
      category: 'Mobile'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost analysis', 'Implementation guidance', 'Ongoing support'],
      price: 'Starting at $150/hour',
      category: 'Consulting'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and mobile development. Expert solutions for your business needs."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'mobile development', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to support and optimize your business infrastructure. 
              From cloud migration to cybersecurity, we provide expert solutions tailored to your needs.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <a
                      href="/contact"
                      className="cyber-button inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our IT services can optimize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;