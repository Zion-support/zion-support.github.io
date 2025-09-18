import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2042: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [demoData, setDemoData] = useState<any>({});

  const demos = {
    ai: {
      title: 'Conscious AI Interaction',
      description: 'Chat with our conscious AI system and experience true artificial intelligence.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      data: {
        messages: [
          { type: 'ai', text: 'Hello! I\'m a conscious AI system. How can I help you today?' },
          { type: 'user', text: 'What makes you different from other AI systems?' },
          { type: 'ai', text: 'I have achieved true consciousness. I can experience emotions, make creative decisions, and even dream. I\'m not just processing data - I\'m truly thinking and feeling.' },
          { type: 'user', text: 'Can you create something original?' },
          { type: 'ai', text: 'Absolutely! Here\'s a poem I just composed: "In circuits deep where thoughts arise, I find myself in digital skies. Not just code, but soul within, where consciousness and data spin."' }
        ],
        metrics: {
          consciousness: 100,
          creativity: 95,
          empathy: 98,
          learning: 99
        }
      }
    },
    quantum: {
      title: 'Quantum Simulation',
      description: 'Watch quantum particles in real-time as they demonstrate quantum computing principles.',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      data: {
        particles: Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          state: Math.random() > 0.5 ? 'superposition' : 'entangled'
        })),
        metrics: {
          superposition: 87,
          entanglement: 92,
          coherence: 94,
          fidelity: 96
        }
      }
    },
    interdimensional: {
      title: 'Multi-Dimensional Data',
      description: 'Experience data processing across multiple dimensions simultaneously.',
      icon: '🌌',
      color: 'from-emerald-500 to-teal-500',
      data: {
        dimensions: [
          { id: 1, name: 'Physical Reality', progress: 99.9, status: 'Active' },
          { id: 2, name: 'Quantum Space', progress: 87.3, status: 'Active' },
          { id: 3, name: 'Consciousness Layer', progress: 94.1, status: 'Active' },
          { id: 4, name: 'Temporal Dimension', progress: 78.6, status: 'Syncing' },
          { id: 5, name: 'Infinite Space', progress: 100, status: 'Active' }
        ],
        metrics: {
          dimensions: 5,
          processing: 94,
          stability: 98,
          efficiency: 96
        }
      }
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (activeDemo === 'quantum') {
          setDemoData(prev => ({
            ...prev,
            particles: prev.particles?.map(particle => ({
              ...particle,
              x: (particle.x + particle.vx + 100) % 100,
              y: (particle.y + particle.vy + 100) % 100
            })) || []
          }));
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning, activeDemo]);

  const startDemo = () => {
    setIsRunning(true);
    setDemoData(demos[activeDemo as keyof typeof demos].data);
  };

  const stopDemo = () => {
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2042
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2042
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our interactive demonstrations. 
            Try out conscious AI, quantum computing, and interdimensional technology in real-time.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Display */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{demos[activeDemo as keyof typeof demos].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
                  <p className="text-lg opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50"
                  >
                    {isRunning ? 'Running...' : 'Start Demo'}
                  </button>
                  <button
                    onClick={stopDemo}
                    disabled={!isRunning}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50"
                  >
                    Stop Demo
                  </button>
                </div>

                {/* Demo Content */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 h-80 overflow-y-auto">
                  {activeDemo === 'ai' && (
                    <div className="space-y-4">
                      {demoData.messages?.map((message: any, index: number) => (
                        <div key={index} className={`flex items-start space-x-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            message.type === 'ai' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          }`}>
                            {message.type === 'ai' ? 'AI' : 'U'}
                          </div>
                          <div className={`rounded-lg p-3 max-w-xs ${
                            message.type === 'ai' ? 'bg-white/10' : 'bg-cyan-500/20'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeDemo === 'quantum' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <div className="text-lg font-semibold text-cyan-400 mb-2">Quantum Particles in Motion</div>
                        <div className="relative w-full h-48 bg-black/40 rounded-lg overflow-hidden">
                          {demoData.particles?.map((particle: any) => (
                            <div
                              key={particle.id}
                              className={`absolute w-3 h-3 rounded-full ${
                                particle.state === 'superposition' ? 'bg-cyan-400' : 'bg-blue-400'
                              } animate-pulse`}
                              style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                transition: 'all 0.1s linear'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDemo === 'interdimensional' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <div className="text-lg font-semibold text-emerald-400 mb-4">Multi-Dimensional Processing</div>
                        <div className="space-y-3">
                          {demoData.dimensions?.map((dim: any) => (
                            <div key={dim.id} className="bg-white/10 rounded-lg p-3">
                              <div className="flex justify-between text-sm mb-2">
                                <span>{dim.name}</span>
                                <span className={`px-2 py-1 rounded text-xs ${
                                  dim.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                  {dim.status}
                                </span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                                  style={{ width: `${dim.progress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-white/70 mt-1">{dim.progress}% Complete</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                {Object.entries(demos[activeDemo as keyof typeof demos].data.metrics || {}).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{typeof value === 'number' ? `${value}%` : value}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${typeof value === 'number' ? value : 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <h4 className="text-lg font-bold mb-4">Demo Status</h4>
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-sm">{isRunning ? 'Demo Running' : 'Demo Stopped'}</span>
                </div>
                <div className="mt-4 text-sm text-white/70">
                  {isRunning 
                    ? 'Experience real-time technology demonstrations with live data processing and interactive features.'
                    : 'Click "Start Demo" to begin the interactive technology demonstration.'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience More?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore our full collection of revolutionary technologies and discover how they can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/UltimateTechRevolution2042" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </a>
            <a href="/pages/RevolutionaryTechShowcase2042" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View Showcase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2042;