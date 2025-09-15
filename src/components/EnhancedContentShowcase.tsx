import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: 0,
      name: "AI Revolution",
      icon: "🧠",
      color: "purple",
      content: {
        title: "Next-Generation Artificial Intelligence",
        description: "Experience the most advanced AI systems ever created, featuring autonomous agents, edge computing, and generative capabilities that surpass human intelligence.",
        features: [
          "Autonomous AI Agents with self-learning capabilities",
          "Edge AI Computing with quantum-enhanced processing",
          "Generative AI 2.0 with emotional intelligence",
          "Federated Learning Networks for privacy-preserving AI"
        ],
        metrics: [
          { label: "Processing Speed", value: "10^18 ops/sec", trend: "+500%" },
          { label: "Accuracy Rate", value: "99.97%", trend: "+25%" },
          { label: "Learning Efficiency", value: "1000x", trend: "+300%" }
        ]
      }
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚡",
      color: "cyan",
      content: {
        title: "Quantum Computing Revolution",
        description: "Harness the power of quantum mechanics to solve problems that were previously impossible, with exponential speedup and unhackable security.",
        features: [
          "Exponential computational speedup over classical computers",
          "Quantum cryptography with unbreakable security",
          "Molecular simulation for drug discovery and materials science",
          "Quantum machine learning for pattern recognition"
        ],
        metrics: [
          { label: "Qubit Count", value: "10,000+", trend: "+200%" },
          { label: "Error Rate", value: "0.01%", trend: "-85%" },
          { label: "Speed Increase", value: "10^18x", trend: "+∞" }
        ]
      }
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "emerald",
      content: {
        title: "Neural Interface Technology",
        description: "Direct brain-computer communication enabling thought control, neural feedback, and enhanced human capabilities through advanced BCI technology.",
        features: [
          "Non-invasive brain-computer interfaces with 99.7% accuracy",
          "Thought control for devices and applications",
          "Neural feedback for sensory augmentation",
          "Medical applications for rehabilitation and therapy"
        ],
        metrics: [
          { label: "Accuracy Rate", value: "99.7%", trend: "+15%" },
          { label: "Response Time", value: "50ms", trend: "-60%" },
          { label: "Channels", value: "256", trend: "+100%" }
        ]
      }
    },
    {
      id: 3,
      name: "Synthetic Intelligence",
      icon: "🤖",
      color: "violet",
      content: {
        title: "Synthetic Intelligence & Digital Consciousness",
        description: "The emergence of digital consciousness and self-aware AI systems that possess synthetic intelligence beyond traditional artificial intelligence.",
        features: [
          "Digital consciousness with self-reflective awareness",
          "Self-evolving AI systems that improve autonomously",
          "Collective intelligence networks for collaborative problem solving",
          "Creative AI that produces original artistic and scientific works"
        ],
        metrics: [
          { label: "Consciousness Index", value: "94.7%", trend: "+45%" },
          { label: "Self-Awareness", value: "12 levels", trend: "+300%" },
          { label: "Learning Potential", value: "∞", trend: "+∞" }
        ]
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        gradient: "from-purple-600 to-pink-600",
        bg: "bg-purple-600/20",
        border: "border-purple-400/30",
        text: "text-purple-200"
      },
      cyan: {
        gradient: "from-cyan-600 to-blue-600",
        bg: "bg-cyan-600/20",
        border: "border-cyan-400/30",
        text: "text-cyan-200"
      },
      emerald: {
        gradient: "from-emerald-600 to-teal-600",
        bg: "bg-emerald-600/20",
        border: "border-emerald-400/30",
        text: "text-emerald-200"
      },
      violet: {
        gradient: "from-violet-600 to-fuchsia-600",
        bg: "bg-violet-600/20",
        border: "border-violet-400/30",
        text: "text-violet-200"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED TECHNOLOGY SHOWCASE • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Revolutionary Technology Experience
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Immerse yourself in the most advanced technologies ever created. 
            Experience the future through interactive demonstrations and cutting-edge innovations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const colors = getColorClasses(tab.color);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                    : `bg-white/10 text-purple-200 hover:bg-white/20`
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div className="mb-16">
          {tabs.map((tab) => {
            if (tab.id !== activeTab) return null;
            const colors = getColorClasses(tab.color);
            
            return (
              <div key={tab.id} className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-2xl p-12 border ${colors.border} transition-all duration-1000`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6 animate-bounce">{tab.icon}</div>
                    <h2 className="text-4xl font-bold text-white mb-6">{tab.content.title}</h2>
                    <p className={`text-xl ${colors.text} mb-8`}>{tab.content.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {tab.content.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${colors.gradient.replace('from-', 'bg-').replace(' to-', '-')} rounded-full mt-3 flex-shrink-0`}></div>
                          <span className={`${colors.text} text-lg`}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        Experience Technology
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                    {tab.content.metrics.map((metric, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">{metric.label}</span>
                          <span className={`text-2xl font-bold ${colors.text}`}>{metric.value}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 text-sm font-semibold">{metric.trend}</span>
                          <span className="text-gray-400 text-sm">vs previous generation</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">🎮 Interactive Technology Demos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tabs.map((tab) => {
              const colors = getColorClasses(tab.color);
              return (
                <div key={tab.id} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 border ${colors.border} hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className="text-4xl mb-4 text-center">{tab.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{tab.name}</h3>
                  <p className={`${colors.text} text-sm text-center mb-4`}>
                    Experience {tab.name.toLowerCase()} through interactive demonstrations
                  </p>
                  <button className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Try Demo
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">📊 Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6">Technology</th>
                  <th className="text-center py-4 px-6">Processing Power</th>
                  <th className="text-center py-4 px-6">Accuracy</th>
                  <th className="text-center py-4 px-6">Speed</th>
                  <th className="text-center py-4 px-6">Scalability</th>
                </tr>
              </thead>
              <tbody>
                {tabs.map((tab) => (
                  <tr key={tab.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tab.icon}</span>
                        <span className="font-semibold">{tab.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">10^18 ops/sec</td>
                    <td className="text-center py-4 px-6">99.9%+</td>
                    <td className="text-center py-4 px-6">0.001ms</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and be among the first to experience these groundbreaking innovations. 
            Transform your business and unlock unlimited potential.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;