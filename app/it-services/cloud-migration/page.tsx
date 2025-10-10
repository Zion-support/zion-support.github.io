'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CloudMigration: React.FC = () => {
  const [currentInfrastructure, setCurrentInfrastructure] = useState('');
  const [targetCloud, setTargetCloud] = useState('');
  const [migrationScope, setMigrationScope] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">
            Cloud Migration Services
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Seamlessly migrate your infrastructure to the cloud with zero downtime
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Migration Assessment</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Current Infrastructure</label>
                  <select
                    value={currentInfrastructure}
                    onChange={(e) => setCurrentInfrastructure(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select current setup...</option>
                    <option value="on-premise">On-Premise</option>
                    <option value="hybrid">Hybrid Cloud</option>
                    <option value="other-cloud">Other Cloud Provider</option>
                    <option value="legacy">Legacy Systems</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Target Cloud</label>
                  <select
                    value={targetCloud}
                    onChange={(e) => setTargetCloud(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select target...</option>
                    <option value="aws">Amazon Web Services</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="multi-cloud">Multi-Cloud</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Migration Scope</label>
                  <select
                    value={migrationScope}
                    onChange={(e) => setMigrationScope(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select scope...</option>
                    <option value="lift-shift">Lift & Shift</option>
                    <option value="replatform">Replatform</option>
                    <option value="refactor">Refactor</option>
                    <option value="rearchitect">Rearchitect</option>
                  </select>
                </div>
              </div>
              <button className="cyber-button w-full">
                Get Migration Plan
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <span className="text-gray-300">Assessment & Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <span className="text-gray-300">Architecture Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <span className="text-gray-300">Migration Execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">4</div>
                  <span className="text-gray-300">Testing & Validation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">5</div>
                  <span className="text-gray-300">Go-Live Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">6</div>
                  <span className="text-gray-300">Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">7</div>
                  <span className="text-gray-300">Training & Documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">8</div>
                  <span className="text-gray-300">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Reduced infrastructure costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Improved scalability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Enhanced security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Better performance</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Disaster recovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Global accessibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Automated backups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Compliance support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Small Business</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$2,500</div>
              <ul className="text-gray-300 space-y-2">
                <li>Up to 10 servers</li>
                <li>Basic migration</li>
                <li>1-month support</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$15,000</div>
              <ul className="text-gray-300 space-y-2">
                <li>Up to 100 servers</li>
                <li>Advanced migration</li>
                <li>3-month support</li>
                <li>Training included</li>
                <li>24/7 monitoring</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Custom</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Quote</div>
              <ul className="text-gray-300 space-y-2">
                <li>Unlimited servers</li>
                <li>Custom solution</li>
                <li>6-month support</li>
                <li>Dedicated team</li>
                <li>SLA guarantee</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Migration Quote
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigration;