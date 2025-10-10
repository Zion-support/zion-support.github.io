'use client';
import React from 'react';
import { Shield, CheckCircle, FileText, BarChart, Settings, Users, Zap, Lock } from 'lucide-react';

const ComplianceServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Compliance Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Comprehensive Regulatory Compliance Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Expert compliance services that ensure your business meets all regulatory 
            requirements with automated monitoring, reporting, and audit support.
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
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring of regulatory changes and 
                automated compliance updates.
              </p>
            </div>
            <div className="cyber-card p-6">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance Audits</h3>
              <p className="text-gray-300">
                Comprehensive compliance audits with detailed 
                reports and remediation recommendations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300">
                Automated compliance documentation and 
                policy management systems.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Reporting</h3>
              <p className="text-gray-300">
                Automated compliance reporting with real-time 
                dashboards and analytics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Policy Management</h3>
              <p className="text-gray-300">
                Centralized policy management with version 
                control and approval workflows.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Training</h3>
              <p className="text-gray-300">
                Compliance training programs and certification 
                management for your team.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• GDPR Compliance</li>
                <li>• CCPA Compliance</li>
                <li>• HIPAA Compliance</li>
                <li>• SOX Compliance</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Security Standards</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• ISO 27001</li>
                <li>• SOC 2 Type II</li>
                <li>• PCI DSS</li>
                <li>• NIST Framework</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic compliance monitoring</li>
                <li>Standard reporting</li>
                <li>Email support</li>
                <li>Documentation templates</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced compliance monitoring</li>
                <li>Automated reporting</li>
                <li>Priority support</li>
                <li>Custom policies</li>
                <li>Audit support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full compliance suite</li>
                <li>Custom integrations</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
                <li>Dedicated compliance officer</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free compliance assessment and see how we can help you meet all regulatory requirements.
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

export default ComplianceServicesPage;