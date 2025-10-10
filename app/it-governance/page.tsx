'use client';
import React from 'react';
import { Shield, CheckCircle, FileText, BarChart, Settings, Users, Zap, Lock } from 'lucide-react';

const ITGovernancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Governance Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Strategic IT Governance & Risk Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive IT governance services that align technology with business objectives, 
            manage risks, and ensure compliance with industry standards.
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
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">
                Comprehensive risk assessment and management 
                strategies for IT operations and security.
              </p>
            </div>
            <div className="cyber-card p-6">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-gray-300">
                Ensure compliance with industry regulations 
                and standards through governance frameworks.
              </p>
            </div>
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Policy Development</h3>
              <p className="text-gray-300">
                Develop and implement IT policies and 
                procedures that align with business goals.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Performance Monitoring</h3>
              <p className="text-gray-300">
                Monitor IT performance and governance 
                effectiveness with key performance indicators.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Process Optimization</h3>
              <p className="text-gray-300">
                Optimize IT processes and workflows for 
                better efficiency and governance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Training & Education</h3>
              <p className="text-gray-300">
                Provide training and education on IT governance 
                best practices and compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Governance Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Alignment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• IT strategy alignment</li>
                <li>• Business-IT integration</li>
                <li>• Technology roadmaps</li>
                <li>• Investment prioritization</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Risk & Security</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Risk assessment</li>
                <li>• Security governance</li>
                <li>• Incident response</li>
                <li>• Business continuity</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Basic Governance</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,999/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic governance framework</li>
                <li>Policy development</li>
                <li>Standard reporting</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Governance</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$4,999/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced governance framework</li>
                <li>Risk management</li>
                <li>Compliance monitoring</li>
                <li>Priority support</li>
                <li>Custom policies</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Governance</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full governance suite</li>
                <li>Custom frameworks</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
                <li>Dedicated governance officer</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement IT Governance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free governance assessment and see how we can improve your IT governance.
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

export default ITGovernancePage;