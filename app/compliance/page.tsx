'use client';
import React from 'react';
import { Shield, CheckCircle, FileCheck, CheckCircle as Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CompliancePage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="Compliance Services - Regulatory Compliance | Zion Tech Group"
        description="Professional compliance services including GDPR, HIPAA, SOX, and other regulatory requirements. Ensure your business meets all compliance standards."
        keywords={['compliance services', 'gdpr', 'hipaa', 'sox', 'regulatory compliance', 'compliance management', 'audit preparation']}
        canonicalUrl="https://ziontechgroup.com/compliance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Compliance Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional compliance services including GDPR, HIPAA, SOX, and other regulatory requirements. 
              Ensure your business meets all compliance standards.
            </p>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300">Ensure compliance with GDPR, HIPAA, SOX, and other regulations</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Audit Preparation</h3>
                <p className="text-gray-300">Prepare for regulatory audits and assessments</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Risk Assessment</h3>
                <p className="text-gray-300">Comprehensive risk assessment and mitigation strategies</p>
              </div>
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
                { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
                { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
                { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
                { name: 'ISO 27001', description: 'Information Security Management System' },
                { name: 'SOC 2', description: 'Service Organization Control 2 compliance' }
              ].map((standard, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing</h2>
            <div className="cyber-card p-8 max-w-2xl mx-auto text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-4">$1,300/month</div>
              <p className="text-gray-300 mb-6">Compliance Services</p>
              <ul className="space-y-3 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Regulatory compliance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Audit preparation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Risk assessment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Policy development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Training & education
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
              </ul>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 mt-6 inline-block"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Need Compliance Support?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let our compliance experts help you meet all regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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

export default CompliancePage;