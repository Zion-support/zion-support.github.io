'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Code, Database, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions to optimize your business performance and reduce costs',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      icon: Code,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      icon: Monitor,
      features: ['24/7 Support', 'Remote Monitoring', 'Proactive Maintenance', 'Help Desk']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with business goals',
      icon: Users,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  IT Services
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Comprehensive IT solutions to support your business infrastructure and drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Modernize Your IT?
                  </h2>
                  <p className="text-xl text-purple-100 mb-8">
                    Let's discuss how our IT services can help optimize your infrastructure.
                  </p>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;