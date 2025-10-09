'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = () => {
  const migrationServices = [
    {
      title: 'Data Migration',
      description: 'Seamlessly migrate your data to the cloud with zero downtime',
      icon: Database,
      features: ['Zero downtime migration', 'Data integrity validation', 'Automated backup', 'Rollback capabilities']
    },
    {
      title: 'Application Migration',
      description: 'Modernize and migrate your applications to cloud-native platforms',
      icon: Server,
      features: ['Containerization', 'Microservices architecture', 'API modernization', 'Performance optimization']
    },
    {
      title: 'Infrastructure Migration',
      description: 'Move your entire infrastructure to the cloud with minimal disruption',
      icon: Globe,
      features: ['Multi-cloud strategy', 'Hybrid cloud setup', 'Network optimization', 'Security hardening']
    },
    {
      title: 'Legacy System Migration',
      description: 'Transform legacy systems into modern, cloud-ready solutions',
      icon: Target,
      features: ['System analysis', 'Modernization planning', 'Gradual migration', 'Training and support']
    }
  ];

  const benefits = [
    'Reduced Costs',
    'Improved Performance',
    'Enhanced Security',
    'Better Scalability',
    '24/7 Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services with zero downtime, data integrity, and seamless transition. Starting at $499/month." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, data migration" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your business to the cloud with our expert migration services and zero-downtime strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Migration Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our experts handle your cloud migration seamlessly</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CloudMigrationPage;