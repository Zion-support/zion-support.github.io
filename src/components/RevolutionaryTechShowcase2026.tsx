import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation 2026',
      description: 'Revolutionary artificial intelligence that transcends traditional limitations',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Autonomous AI Agents',
        'Edge AI Computing',
        'Generative AI 2.0',
        'Neural Architecture Search'
      ],
      link: '/pages/AIInnovation2026'
    },
    {
      id: 'quantum-solutions',
      title: 'Quantum Solutions 2026',
      description: 'Harness quantum computing power for impossible problem solving',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Supremacy',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Quantum Machine Learning'
      ],
      link: '/pages/QuantumSolutions2026'
    },
    {
      id: 'neural-computing',
      title: 'Neural Computing 2026',
      description: 'Bridge human intelligence with artificial systems',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Brain-Computer Interfaces',
        'Neural Processing Units',
        'Neural Networks 2.0',
        'Neuromorphic Computing'
      ],
      link: '/pages/NeuralComputing2026'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY 2026 • INTERACTIVE SHOWCASE
            </div>
            <h2 className="text-5xl font-bold mb-4">🌟 Future Technology Experience</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Explore the cutting-edge technologies that are reshaping our world with interactive demonstrations
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{technologies[activeTab].icon}</span>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{technologies[activeTab].title}</h3>
                    <p className="text-xl opacity-90">{technologies[activeTab].description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={technologies[activeTab].link}
                    className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                  >
                    Explore {technologies[activeTab].title} →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Interactive Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 border border-white/30">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold mb-2">Interactive Preview</h4>
                    <p className="opacity-90">Experience the technology in action</p>
                  </div>
                  
                  {/* Animated Technology Visualization */}
                  <div className="relative h-64 bg-gradient-to-br from-white/10 to-transparent rounded-xl overflow-hidden">
                    {activeTab === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 bg-purple-400 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 border-4 border-cyan-400 rounded-full animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 border-2 border-blue-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-12 h-12 bg-emerald-400 rounded-lg animate-bounce"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Performance Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1000x</div>
                      <div className="text-sm opacity-90">Faster</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">∞</div>
                      <div className="text-sm opacity-90">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Comparison */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                    activeTab === index ? 'border-white/50 scale-105' : 'border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                    <p className="text-sm opacity-90 mb-4">{tech.description}</p>
                    <div className="text-xs opacity-75">
                      {tech.features.slice(0, 2).join(' • ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;