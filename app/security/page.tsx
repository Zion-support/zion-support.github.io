'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and vulnerability assessment',
      features: ['Security audit', 'Penetration testing', 'Risk assessment', 'Compliance check'],
      price: '$3,500'
    },
    {
      icon: Lock,
      title: 'Security Implementation',
      description: 'Complete security infrastructure setup and configuration',
      features: ['Firewall setup', 'Encryption implementation', 'Access controls', 'Monitoring systems'],
      price: '$5,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business. Security assessments, implementation, and ongoing protection." />
        <meta name="keywords" content="cybersecurity, security assessment, penetration testing, data protection, network security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cybersecurity Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions. 
                We provide security assessments, implementation, and ongoing protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {securityServices.map((service, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-500/20 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <button className="w-full cyber-button py-3 px-6 rounded-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <section className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our security experts for a free consultation and security assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SecurityPage;