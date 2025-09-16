import React, { useState, useEffect } from 'react';

const AIFutureInnovation2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH AI TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Future Innovation 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the next generation of artificial intelligence that's reshaping industries, 
            creating new possibilities, and transforming how we work, live, and innovate.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start AI Journey
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-900 transition-all duration-300 font-semibold">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            {['overview', 'capabilities', 'applications', 'impact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Revolutionary AI Overview</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Our AI Future Innovation 2025 represents the pinnacle of artificial intelligence technology, 
                    combining advanced machine learning, neural networks, and quantum computing principles to 
                    create systems that think, learn, and adapt at unprecedented speeds.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🧠</span>
                      <span>Advanced Neural Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <span>Real-time Learning & Adaptation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔮</span>
                      <span>Predictive Analytics Engine</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4">Key Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Processing Speed:</span>
                      <span className="font-bold">1000x faster</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy Rate:</span>
                      <span className="font-bold">99.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Learning Efficiency:</span>
                      <span className="font-bold">95% improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'capabilities' && (
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">AI Capabilities Matrix</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-xl p-6 border border-blue-400/30">
                    <div className="text-4xl mb-4 text-center">🤖</div>
                    <h4 className="text-xl font-bold mb-3 text-center">Autonomous Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Self-healing systems</li>
                      <li>• Automated decision making</li>
                      <li>• Continuous optimization</li>
                      <li>• Predictive maintenance</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-xl p-6 border border-green-400/30">
                    <div className="text-4xl mb-4 text-center">🧬</div>
                    <h4 className="text-xl font-bold mb-3 text-center">Natural Language Processing</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Context-aware conversations</li>
                      <li>• Multi-language support</li>
                      <li>• Sentiment analysis</li>
                      <li>• Creative content generation</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6 border border-purple-400/30">
                    <div className="text-4xl mb-4 text-center">🔮</div>
                    <h4 className="text-xl font-bold mb-3 text-center">Predictive Intelligence</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Future trend analysis</li>
                      <li>• Risk assessment</li>
                      <li>• Market prediction</li>
                      <li>• Behavioral modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">Industry Applications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-xl font-bold mb-3 flex items-center">
                        <span className="text-2xl mr-3">🏥</span>
                        Healthcare & Medicine
                      </h4>
                      <p className="opacity-90 mb-3">Revolutionary diagnostic capabilities and personalized treatment plans.</p>
                      <div className="text-sm space-y-1">
                        <div>• AI-powered drug discovery</div>
                        <div>• Predictive health analytics</div>
                        <div>• Surgical assistance robots</div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-xl font-bold mb-3 flex items-center">
                        <span className="text-2xl mr-3">🏭</span>
                        Manufacturing & Industry
                      </h4>
                      <p className="opacity-90 mb-3">Smart factories with autonomous production and quality control.</p>
                      <div className="text-sm space-y-1">
                        <div>• Predictive maintenance systems</div>
                        <div>• Quality assurance automation</div>
                        <div>• Supply chain optimization</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-xl font-bold mb-3 flex items-center">
                        <span className="text-2xl mr-3">💰</span>
                        Finance & Banking
                      </h4>
                      <p className="opacity-90 mb-3">Advanced fraud detection and algorithmic trading systems.</p>
                      <div className="text-sm space-y-1">
                        <div>• Real-time fraud prevention</div>
                        <div>• Algorithmic trading</div>
                        <div>• Credit risk assessment</div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-xl font-bold mb-3 flex items-center">
                        <span className="text-2xl mr-3">🚗</span>
                        Transportation & Mobility
                      </h4>
                      <p className="opacity-90 mb-3">Autonomous vehicles and smart traffic management.</p>
                      <div className="text-sm space-y-1">
                        <div>• Self-driving vehicles</div>
                        <div>• Traffic optimization</div>
                        <div>• Route planning algorithms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">Transformative Impact</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold mb-6">Economic Impact</h4>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Productivity Increase</span>
                          <span className="text-2xl font-bold text-green-400">+300%</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Cost Reduction</span>
                          <span className="text-2xl font-bold text-blue-400">-60%</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Innovation Speed</span>
                          <span className="text-2xl font-bold text-purple-400">+500%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-6">Societal Benefits</h4>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold mb-2">🌍 Environmental Sustainability</h5>
                        <p className="text-sm opacity-90">AI-driven optimization reduces energy consumption by 40% across industries.</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold mb-2">🎓 Education Revolution</h5>
                        <p className="text-sm opacity-90">Personalized learning experiences tailored to individual needs and pace.</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold mb-2">🏥 Healthcare Access</h5>
                        <p className="text-sm opacity-90">Democratized medical expertise through AI-powered diagnostic tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our AI Future Innovation 2025 platform.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-purple-400 px-10 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFutureInnovation2025;