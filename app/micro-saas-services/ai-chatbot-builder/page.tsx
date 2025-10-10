'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIChatbotBuilder: React.FC = () => {
  const [botName, setBotName] = useState('');
  const [botPurpose, setBotPurpose] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24"></mai>
        <div className="max-w-4 xl mx-auto"></div>
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text text-center"></h1></<<<h1>AI</h1></<<h1>Chatbot</h1> Builder<p className="text-xl text-gray-300 text-center mb-12">Create intelligent chatbots for your website without coding</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Build Your Chatbot</h>
            <div className="space-y-6"></div>
              <div></div>
                <label className="block text-white font-medium mb-2">Bot Name</label><input
                  type="text"
                  value={botName}
                  onChange={(e) =>setBotName(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your bot name..."</input>
                /></input>
              </div>
              <div></div>
                <label className="block text-white font-medium mb-2">Bot Purpose</label><select
                  value={botPurpose}
                  onChange={(e) =>setBotPurpose(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                ></select>
                  <option value="">Select purpose...</option><option value="customer-support">Customer Support</optio>
                  <option value="sales">Sales Assistant</option><option value="lead-generation">Lead Generation</optio>
                  <option value="faq">FAQ Bot</option><option value="booking">Booking Assistant</option><button className="cyber-button w-full">Create Chatbot</butto>
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Features</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Drag-and-drop builder</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Natural language processing</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Multi-language support</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Analytics dashboard</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Integration with CRM</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Custom branding</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Live chat handoff</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">API access</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Basic</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$49/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>1 chatbot</li><li>1,000 conversations/month</l>
                <<<<li>Basic</li></<<li>templates</li><<<<li>Email</li></<<li>support</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Professional</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$149/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>5 chatbots</li><li>10,000 conversations/month</l>
                <<<<li>Advanced</li></<<li>features</li><<<<li>Priority</li></<<li>support</li><<<<li>Analytics</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Enterprise</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$399/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Unlimited</li></<<li>chatbots</li><<<<li>Unlimited</li></<<li>conversations</li></li>
                <<<<li>Custom</li></<<li>integrations</li><li>24/7 support</li><<<<li>White</li></li>-label option</li>
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
            >Start Building</a>
            </a>
          </div>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AIChatbotBuilder;