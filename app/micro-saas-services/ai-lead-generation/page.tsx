'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AILeadGeneration: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">
            AI Lead Generation
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Generate high-quality leads using AI-powered targeting and automation
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Configure Your Campaign</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Industry</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select industry...</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Target Audience</label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="e.g., CTOs, Marketing Directors"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select budget...</option>
                    <option value="under-10k">Under $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="over-100k">Over $100K</option>
                  </select>
                </div>
              </div>
              <button className="cyber-button w-full">
                Generate Leads
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Intelligent prospecting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Lead scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Email sequences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Social media targeting</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">CRM integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">A/B testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Compliance monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>100 leads/month</li>
                <li>Basic targeting</li>
                <li>Email sequences</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$599/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>1,000 leads/month</li>
                <li>Advanced AI targeting</li>
                <li>Multi-channel campaigns</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$1,499/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>Unlimited leads</li>
                <li>Custom AI models</li>
                <li>White-label option</li>
                <li>24/7 support</li>
                <li>Dedicated manager</li>
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
              Start Generating
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AILeadGeneration;