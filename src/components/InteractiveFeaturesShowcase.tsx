import React, { useState, useEffect } from 'react';

const InteractiveFeaturesShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    {
      id: 1,
      title: "Real-time AI Demos",
      description: "Experience live AI agents making decisions, learning, and adapting in real-time",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      interactive: true,
      demo: {
        type: "ai-agent",
        status: "Active",
        metrics: ["99.7% accuracy", "0.1s response", "Continuous learning"]
      }
    },
    {
      id: 2,
      title: "Quantum Simulation",
      description: "Interact with quantum circuits and see quantum phenomena in action",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      interactive: true,
      demo: {
        type: "quantum-sim",
        status: "Processing",
        metrics: ["1000+ qubits", "Quantum supremacy", "Molecular modeling"]
      }
    },
    {
      id: 3,
      title: "Neural Interface Demo",
      description: "Control digital interfaces with your thoughts and see neural activity",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      interactive: true,
      demo: {
        type: "neural-interface",
        status: "Connected",
        metrics: ["95% accuracy", "Real-time", "Non-invasive"]
      }
    },
    {
      id: 4,
      title: "3D Holographic Display",
      description: "View and interact with 3D holographic projections of data and models",
      icon: "🔮",
      gradient: "from-orange-600 to-red-600",
      interactive: true,
      demo: {
        type: "hologram",
        status: "Rendering",
        metrics: ["4K resolution", "360° view", "Touch interaction"]
      }
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "See future predictions and trends based on real-time data analysis",
      icon: "📊",
      gradient: "from-indigo-600 to-purple-600",
      interactive: true,
      demo: {
        type: "predictive",
        status: "Analyzing",
        metrics: ["99.9% accuracy", "Real-time", "Multi-dimensional"]
      }
    },
    {
      id: 6,
      title: "Voice AI Assistant",
      description: "Interact with advanced AI through natural conversation and voice commands",
      icon: "🎤",
      gradient: "from-pink-600 to-rose-600",
      interactive: true,
      demo: {
        type: "voice-ai",
        status: "Listening",
        metrics: ["Natural language", "Context aware", "Multi-language"]
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentFeature = features[activeFeature];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.1s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE FEATURES • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience Technology Like Never Before
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with cutting-edge technologies through immersive demos, real-time simulations, 
            and hands-on experiences that bring the future to life.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-2xl">
              <div
                key={activeFeature}
                className={`bg-gradient-to-br ${currentFeature.gradient} p-12 rounded-2xl relative overflow-hidden`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Interactive Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce" />
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-6xl">{currentFeature.icon}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">{currentFeature.demo.status}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-bold mb-6">{currentFeature.title}</h3>
                    <p className="text-xl opacity-90 mb-8">{currentFeature.description}</p>
                    
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {currentFeature.demo.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="font-semibold">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                      >
                        Try Interactive Demo →
                      </button>
                      <button
                        className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <h4 className="text-2xl font-bold mb-6 text-center">Live Demo</h4>
                      
                      {/* Interactive Demo Area */}
                      <div className="relative h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl animate-spin">
                            {currentFeature.icon}
                          </div>
                        </div>
                        
                        {/* Animated Elements */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                        
                        {/* Data Visualization */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 bg-white/30 rounded"
                                  scale: [1, 1.5, 1],
                                  opacity: [0.3, 1, 0.3]
                                }}
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.1
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <div className="text-sm opacity-80 mb-2">Interactive Status</div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold">Active & Responsive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={() => setActiveFeature((prev) => (prev - 1 + features.length) % features.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveFeature((prev) => (prev + 1) % features.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              whileInView={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                activeFeature === index ? 'ring-4 ring-white/30' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{feature.icon}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold">{feature.demo.status}</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-sm opacity-90 mb-4">{feature.description}</p>
              
              <div className="space-y-2 mb-4">
                {feature.demo.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="text-xs bg-white/20 rounded px-2 py-1 text-center">
                    {metric}
                  </div>
                ))}
              </div>
              
              <button
                className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
              >
                Try Demo
              </button>
            </div>
          ))}
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeaturesShowcase;