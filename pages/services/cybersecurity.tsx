import React from 'react';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import SEOHead from '../../src/components/SEOHead';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Globe, Database, Network, Zap, Award, Phone, Mail } from 'lucide-react';

const CybersecurityServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cybersecurity Services",
    "description": "Comprehensive cybersecurity solutions to protect your business from digital threats",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      icon: Shield,
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Audit']
    },
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure from cyber threats',
      icon: Network,
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data with advanced encryption and backup',
      icon: Database,
      features: ['Data Encryption', 'Backup Solutions', 'Access Control', 'Data Loss Prevention']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      icon: AlertTriangle,
      features: ['24/7 Monitoring', 'Incident Investigation', 'Forensic Analysis', 'Recovery Planning']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', description: 'Service Organization Control 2 compliance' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity Services - Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity solutions. Expert security assessment, network protection, and incident response services."
        keywords="cybersecurity, network security, data protection, security assessment, compliance, SOC 2, ISO 27001"
        structuredData={structuredData}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-600">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Protect your business from evolving cyber threats with our comprehensive security solutions. 
                From risk assessment to incident response, we keep your data and systems secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Security Assessment
                </Link>
                <Link href="/solutions" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive security solutions tailored to protect your business from modern cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Standards</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We help you meet industry standards and regulatory requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{framework.name}</h3>
                  <p className="text-sm text-gray-600">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Cybersecurity Services?</h2>
              <p className="text-lg text-gray-600">
                Expert security professionals with proven track record
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">Certified security professionals with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock security monitoring and incident response</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h3>
                <p className="text-gray-600">Quick incident detection and response to minimize damage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment and protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Security Assessment
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CybersecurityServices;