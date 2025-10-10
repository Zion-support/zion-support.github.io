'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AILeadGeneration: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24"></mai>
        <div className="max-w-4 xl mx-auto"></div>
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text text-center"></h1></<<<h1>AI</h1></<<h1>Lead</h1> Generation<p className="text-xl text-gray-300 text-center mb-12">Generate high-quality leads using AI-powered targeting and automation</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Configure Your Campaign</h>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Industry</label><select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select industry...</option><option value="technology">Technology</optio>
                    <option value="healthcare">Healthcare</option><option value="finance">Finance</optio>
                    <option value="retail">Retail</option><option value="manufacturing">Manufacturing</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Target Audience</label><input
                    type="text"
                    value={targetAudience}
                    onChange={(e) =>setTargetAudience(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="e.g., CTOs, Marketing Directors"</input>
                  /></input>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Budget Range</label><select
                    value={budget}
                    onChange={(e) =>setBudget(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select budget...</option><option value="under-10 k">Under $10 K</optio>
                    <option value="10 k-50 k">$10 K - $50 K</option><option value="50 k-100 k">$50 K - $100 K</option><option value="over-100 k">Over $100 K</option><button className="cyber-button w-full">Generate Leads</butto>
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">AI-Powered Features</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Intelligent prospecting</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Lead scoring</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Email sequences</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Social media targeting</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">CRM integration</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Performance tracking</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">A/B testing</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Compliance monitoring</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Starter</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>100 leads/month</li><<<<li>Basic</li></<<li>targeting</li></li>
                <<<<li>Email</li></<<li>sequences</li><<<<li>Email</li></<<li>support</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Professional</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$599/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>1,000 leads/month</li><<<<li>Advanced</li></<<li>AI</li></<li>targeting</li>
                <<<<li>Multi</li></li>-channel campaigns<<<<li>Priority</li></<<li>support</li><<<<li>Analytics</li></<<li>dashboard</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Enterprise</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$1,499/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Unlimited</li></<<li>leads</li><<<<li>Custom</li></<<li>AI</li></<li>models</li>
                <<<<li>White</li></li>-label option<li>24/7 support</li><<<<li>Dedicated</li></<<li>manager</li></li>
              </ul>
            </div>
          </div>

          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-0950</a><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Start Generating</a>
            </a>
          </div>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AILeadGeneration;