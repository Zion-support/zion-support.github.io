

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation to identify vulnerabilities and risks.',
      icon: Shield,
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Review']
    },
    {
      title: 'Security Implementation',
      description: 'Deploy robust security measures to protect your digital assets.',
      icon: Lock,
      features: ['Firewall Configuration', 'Access Control', 'Encryption Setup', 'Monitoring Systems']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents.',
      icon: AlertTriangle,
      features: ['24/7 Monitoring', 'Incident Detection', 'Response Planning', 'Recovery Support']
    },
    {
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices.',
      icon: Eye,
      features: ['Security Awareness', 'Phishing Training', 'Policy Development', 'Regular Updates']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business. Security assessments, implementation, monitoring, and incident response." />
        <meta name="keywords" content="cybersecurity, security assessment, penetration testing, incident response, security training" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions. 
                We provide security assessments, implementation, monitoring, and incident response.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-red-400" />
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
                </div>
              ))}
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our security experts for a comprehensive security assessment and protection plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call (302) 464-0950
                </button>
                <button className="border-2 border-red-600 text-red-400 py-3 px-8 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Get Security Assessment
                </button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};


export default SecurityPage;

"
