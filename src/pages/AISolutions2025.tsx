import React, { useState } from 'react';

const AISolutions2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Conscious AI Systems",
      description: "Self-aware AI that understands context, emotions, and human intent",
      icon: "🧠",
      features: [
        "Emotional intelligence and empathy",
        "Contextual understanding",
        "Self-learning capabilities",
        "Human-AI collaboration",
        "Ethical decision making"
      ],
      pricing: "Custom",
      timeline: "3-6 months"
    },
    {
      title: "Quantum-Enhanced AI",
      description: "AI powered by quantum computing for exponential performance gains",
      icon: "⚡",
      features: [
        "Quantum neural networks",
        "Exponential processing speed",
        "Complex problem solving",
        "Real-time optimization",
        "Quantum error correction"
      ],
      pricing: "Enterprise",
      timeline: "6-12 months"
    },
    {
      title: "Neural Interface AI",
      description: "AI that interfaces directly with human neural networks",
      icon: "🧬",
      features: [
        "Direct brain-AI communication",
        "Thought-to-action conversion",
        "Memory enhancement",
        "Cognitive augmentation",
        "Consciousness integration"
      ],
      pricing: "Research",
      timeline: "12-18 months"
    },
    {
      title: "Autonomous AI Agents",
      description: "Self-operating AI systems that work independently",
      icon: "🤖",
      features: [
        "Autonomous decision making",
        "Self-healing capabilities",
        "Multi-agent coordination",
        "Continuous learning",
        "Goal-oriented behavior"
      ],
      pricing: "Standard",
      timeline: "2-4 months"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'services', label: 'Services', icon: '🚀' },
    { id: 'technology', label: 'Technology', icon: '⚙️' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 AI SOLUTIONS • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary AI Solutions 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the next generation of artificial intelligence that transcends traditional boundaries and creates unprecedented possibilities
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-semibold">
                ✅ Production Ready
              </div>
              <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-semibold">
                🚀 Live Demos
              </div>
              <div className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">
                🔬 Research Grade
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4">
        {activeTab === 'overview' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-purple-200">Why Choose Our AI Solutions?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">Conscious AI with emotional intelligence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">Quantum-enhanced processing power</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">Direct neural interface capabilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">Autonomous operation and self-healing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-purple-200">Performance Metrics</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-300 mb-2">99.97%</div>
                    <div className="text-sm text-white/70">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-300 mb-2">< 1ms</div>
                    <div className="text-sm text-white/70">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-300 mb-2">10^15x</div>
                    <div className="text-sm text-white/70">Speed Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-300 mb-2">24/7</div>
                    <div className="text-sm text-white/70">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                    selectedService === index ? 'ring-2 ring-purple-400' : ''
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-purple-100 mb-4">{service.description}</p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-white/20 rounded-full">{service.pricing}</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full">{service.timeline}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-purple-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-8 text-center text-purple-200">Advanced AI Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
                  <p className="text-white/80">Advanced deep learning architectures with consciousness simulation</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
                  <p className="text-white/80">Quantum-enhanced processing for exponential performance gains</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🧬</div>
                  <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
                  <p className="text-white/80">Direct brain-computer interfaces for seamless interaction</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-center">Starter</h3>
                <div className="text-4xl font-bold mb-4 text-center text-purple-300">$5,000/mo</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Basic AI consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Standard support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Monthly reports</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Professional</h3>
                <div className="text-4xl font-bold mb-4 text-center text-purple-300">$15,000/mo</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Full AI implementation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>24/7 expert support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Real-time monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
                <div className="text-4xl font-bold mb-4 text-center text-purple-300">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Custom AI solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Dedicated team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>On-premise deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>White-label options</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-8 text-center text-purple-200">Get Started with AI Solutions</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📧</div>
                      <span>ai@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📞</div>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🌐</div>
                      <span>www.ziontechgroup.com/ai</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Schedule a Demo</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Select Service</option>
                      <option value="conscious-ai">Conscious AI Systems</option>
                      <option value="quantum-ai">Quantum-Enhanced AI</option>
                      <option value="neural-ai">Neural Interface AI</option>
                      <option value="autonomous-ai">Autonomous AI Agents</option>
                    </select>
                    <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Schedule Demo
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISolutions2025;