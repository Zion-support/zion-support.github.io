'use client';
import React from 'react';
import { Target, Users, BarChart, Settings, Zap, Clock, Shield, Globe } from 'lucide-react';

const ITProjectManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Project Management
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Professional IT Project Delivery & Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Expert IT project management services that ensure successful delivery 
            of complex technology projects with proven methodologies and experienced teams.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Project Planning</h3>
              <p className="text-gray-300">
                Comprehensive project planning with detailed timelines, 
                resource allocation, and risk assessment.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Team Management</h3>
              <p className="text-gray-300">
                Expert team management with skilled professionals 
                and clear communication channels.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-300">
                Real-time progress tracking with detailed reporting 
                and milestone management.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-300">
                Rigorous quality assurance processes with testing, 
                validation, and compliance checks.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Agile Methodology</h3>
              <p className="text-gray-300">
                Agile project management with iterative development 
                and continuous improvement.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">
                Proactive risk management with identification, 
                assessment, and mitigation strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Project Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom application development</li>
                <li>• System integration projects</li>
                <li>• Legacy system modernization</li>
                <li>• Mobile app development</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Infrastructure Projects</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Cloud migration projects</li>
                <li>• Network infrastructure upgrades</li>
                <li>• Security implementation</li>
                <li>• Data center projects</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Small Projects</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/hour</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 3 months duration</li>
                <li>Basic project management</li>
                <li>Weekly progress reports</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Medium Projects</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399/hour</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>3-12 months duration</li>
                <li>Advanced project management</li>
                <li>Daily progress reports</li>
                <li>Priority support</li>
                <li>Dedicated project manager</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Large Projects</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>12+ months duration</li>
                <li>Full project management suite</li>
                <li>Real-time reporting</li>
                <li>24/7 dedicated support</li>
                <li>On-site project team</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your IT Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free project consultation and see how we can deliver your IT project successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Consultation
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

export default ITProjectManagementPage;