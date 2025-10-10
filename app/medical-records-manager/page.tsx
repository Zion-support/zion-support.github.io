'use client';
import React from 'react';
import { Shield, FileText, BarChart, Settings, Users, Zap, Lock, Heart } from 'lucide-react';

const MedicalRecordsManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Medical Records Manager
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Secure Healthcare Data Management System
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive medical records management system that ensures secure, 
            compliant, and efficient handling of patient data with HIPAA compliance.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">HIPAA Compliance</h3>
              <p className="text-gray-300">
                Full HIPAA compliance with encryption, 
                access controls, and audit trails.
              </p>
            </div>
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Digital Records</h3>
              <p className="text-gray-300">
                Digital medical records with easy 
                access, search, and retrieval capabilities.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Healthcare analytics with patient 
                insights, treatment outcomes, and trends.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Integration</h3>
              <p className="text-gray-300">
                Seamless integration with EHR systems, 
                lab systems, and other healthcare tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Patient Portal</h3>
              <p className="text-gray-300">
                Secure patient portal for accessing 
                medical records and communicating with providers.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated workflows for record updates, 
                notifications, and compliance reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
              <p className="text-gray-300 mb-4">
                Ensure patient data security and regulatory 
                compliance with advanced security features.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• HIPAA compliance</li>
                <li>• Data encryption</li>
                <li>• Access controls</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Streamline healthcare operations with 
                automated workflows and digital records.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Digital records</li>
                <li>• Automated workflows</li>
                <li>• Easy access</li>
              </ul>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1,000 patients</li>
                <li>Basic records management</li>
                <li>Standard security</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Medical Group</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10,000 patients</li>
                <li>Advanced records management</li>
                <li>Enhanced security</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Hospital System</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited patients</li>
                <li>Full records suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Secure Your Medical Records?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free healthcare data assessment and see how we can improve your records management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MedicalRecordsManagerPage;