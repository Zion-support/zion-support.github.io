'use client';
import React from 'react';
import { Shield, FileText, Users, Lock, Clock, CheckCircle, AlertTriangle, Database } from 'lucide-react';

const MedicalRecordsManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Medical Records Manager
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Secure, AI-powered medical records management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Streamline medical records management with our HIPAA-compliant, AI-powered platform. 
            Ensure patient data security while improving efficiency and reducing administrative burden.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">HIPAA Compliance</h3>
              <p className="text-gray-300">
                Full HIPAA compliance with end-to-end encryption, audit trails, and secure data handling.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Digital Records</h3>
              <p className="text-gray-300">
                Convert paper records to digital format with OCR technology and intelligent data extraction.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Patient Portal</h3>
              <p className="text-gray-300">
                Secure patient portal for accessing medical records, test results, and appointment scheduling.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Access Control</h3>
              <p className="text-gray-300">
                Role-based access control with multi-factor authentication and permission management.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Clock className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Updates</h3>
              <p className="text-gray-300">
                Real-time record updates with instant notifications and automated backup systems.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Database className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300">
                Comprehensive analytics for patient trends, treatment outcomes, and operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Security & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Data Security</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  End-to-end encryption (AES-256)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Secure cloud infrastructure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Regular security audits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Automated backup systems
                </li>
              </ul>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Compliance Standards</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  HIPAA compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SOC 2 Type II certified
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  GDPR compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  HITRUST certified
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits for Healthcare Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-4">75%</div>
              <h3 className="text-xl font-bold text-white mb-4">Reduction in Admin Time</h3>
              <p className="text-gray-300">
                Automate record management tasks and focus more on patient care.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">99.9%</div>
              <h3 className="text-xl font-bold text-white mb-4">Uptime Guarantee</h3>
              <p className="text-gray-300">
                Reliable access to patient records with enterprise-grade infrastructure.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4">50%</div>
              <h3 className="text-xl font-bold text-white mb-4">Faster Record Retrieval</h3>
              <p className="text-gray-300">
                AI-powered search and intelligent categorization for instant access.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Small Practice</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1,000 patients</li>
                <li>Basic record management</li>
                <li>Email support</li>
                <li>Standard security</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center border-2 border-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-4">Medical Group</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10,000 patients</li>
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
                <li>Analytics dashboard</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Hospital System</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited patients</li>
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>White-label options</li>
                <li>Custom compliance</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your Medical Records?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join healthcare providers using our secure, AI-powered medical records management system to improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Demo
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MedicalRecordsManagerPage;