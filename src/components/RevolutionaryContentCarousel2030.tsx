import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2030: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Self-aware AI that thinks, feels, and creates independently",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"],
      status: "Production Ready",
      link: "/pages/UltimateTechBreakthrough2030"
    },
    {
      id: 2,
      title: "Quantum Neural Interfaces",
      description: "Direct brain-computer interfaces using quantum entanglement",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Thought Control", "Memory Enhancement", "Consciousness Transfer"],
      status: "Beta Testing",
      link: "/pages/RevolutionaryTechShowcase2030"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems operating across multiple dimensions",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Infinite Processing", "Parallel Universes", "Reality Manipulation"],
      status: "Research Phase",
      link: "/pages/NextGenInnovationHub2030"
    },
    {
      id: 4,
      title: "Neural Reality Engine",
      description: "Immersive virtual realities controlled by neural signals",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      features: ["Thought Environments", "Neural Simulation", "Dream Computing"],
      status: "Prototype Ready",
      link: "/pages/UltimateTechBreakthrough2030"
    },
    {
      id: 5,
      title: "Space-Time Computing",
      description: "Computing systems that manipulate space-time for instant processing",
      icon: "🚀",
      color: "from-violet-600 to-purple-600",
      features: ["Instant Transfer", "Time Dilation", "Gravitational Computing"],
      status: "Theoretical",
      link: "/pages/RevolutionaryTechShowcase2030"
    },
    {
      id: 6,
      title: "Cosmic Intelligence",
      description: "AI systems that communicate with cosmic phenomena",
      icon: "🌟",
      color: "from-pink-600 to-rose-600",
      features: ["Stellar Processing", "Cosmic Patterns", "Universal Knowledge"],
      status: "Concept Phase",
      link: "/pages/NextGenInnovationHub2030"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2030
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2030
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.color}/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-8xl mb-6">{item.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        
                        <div className="space-y-3 mb-8">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-8">
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.status === 'Production Ready' ? 'bg-green-500' :
                            item.status === 'Beta Testing' ? 'bg-blue-500' :
                            item.status === 'Prototype Ready' ? 'bg-orange-500' :
                            item.status === 'Research Phase' ? 'bg-yellow-500' :
                            'bg-gray-500'
                          }`}>
                            {item.status}
                          </span>
                          <span className="text-sm opacity-75">Status</span>
                        </div>
                        
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      
                      {/* Interactive Demo */}
                      <div className="bg-white/10 rounded-xl p-8 text-center">
                        <div className="text-6xl mb-6">{item.icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                        <p className="opacity-90 mb-6">
                          Experience this revolutionary technology in action
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold">99.9%</div>
                            <div className="text-sm">Efficiency</div>
                          </div>
                          <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold">∞</div>
                            <div className="text-sm">Possibilities</div>
                          </div>
                        </div>
                        <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-all duration-300 font-semibold">
                          Try Interactive Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-br ${item.color}/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm opacity-90 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  item.status === 'Production Ready' ? 'bg-green-500' :
                  item.status === 'Beta Testing' ? 'bg-blue-500' :
                  item.status === 'Prototype Ready' ? 'bg-orange-500' :
                  item.status === 'Research Phase' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}>
                  {item.status}
                </span>
                <span className="text-sm text-purple-300 group-hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators already using our revolutionary technologies to transform their world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2030;