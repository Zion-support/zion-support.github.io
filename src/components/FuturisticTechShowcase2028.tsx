import React, { useState, useEffect } from 'react';

const FuturisticTechShowcase2028: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const techCategories = [
    {
      title: "Artificial General Intelligence",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      description: "True AI that can understand, learn, and apply knowledge across any domain",
      features: [
        "Human-level reasoning",
        "Cross-domain learning",
        "Autonomous problem solving",
        "Creative thinking"
      ],
      applications: [
        "Scientific research",
        "Medical diagnosis",
        "Space exploration",
        "Climate solutions"
      ]
    },
    {
      title: "Quantum Supremacy",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500",
      description: "Quantum computers that outperform classical computers in practical applications",
      features: [
        "Exponential speedup",
        "Quantum error correction",
        "Fault-tolerant operations",
        "Scalable architecture"
      ],
      applications: [
        "Drug discovery",
        "Financial modeling",
        "Cryptography",
        "Climate simulation"
      ]
    },
    {
      title: "Neural Interfaces",
      icon: "🔗",
      color: "from-green-500 to-teal-500",
      description: "Direct brain-computer interfaces for seamless human-AI collaboration",
      features: [
        "Thought-to-text",
        "Memory enhancement",
        "Sensory augmentation",
        "Telepathic communication"
      ],
      applications: [
        "Medical rehabilitation",
        "Education",
        "Entertainment",
        "Space missions"
      ]
    },
    {
      title: "Synthetic Biology",
      icon: "🧬",
      color: "from-orange-500 to-red-500",
      description: "Engineering biological systems for unprecedented capabilities",
      features: [
        "Programmable cells",
        "Biological computers",
        "Living materials",
        "Synthetic organisms"
      ],
      applications: [
        "Medicine",
        "Manufacturing",
        "Environmental cleanup",
        "Space colonization"
      ]
    }
  ];

  return (
    <div className={`py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-full text-sm font-bold mb-6">
            🚀 FUTURISTIC TECH 2028
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Now
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Experience the most advanced technologies that will define the next decade. 
            From AGI to quantum supremacy, the future is here.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center mb-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 bg-gradient-to-r ${techCategories[activeCategory].color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <span className="text-4xl">{techCategories[activeCategory].icon}</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-cyan-400">
              {techCategories[activeCategory].title}
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {techCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Key Features</h4>
              <div className="space-y-4">
                {techCategories[activeCategory].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{feature}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-6">Applications</h4>
              <div className="space-y-4">
                {techCategories[activeCategory].applications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">→</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{application}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future Timeline */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">Future Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2028</span>
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-2">AGI Breakthrough</h4>
              <p className="text-slate-300">First artificial general intelligence systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2029</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">Quantum Supremacy</h4>
              <p className="text-slate-300">Practical quantum advantage achieved</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2030</span>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-2">Neural Integration</h4>
              <p className="text-slate-300">Brain-computer interfaces become mainstream</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2031</span>
              </div>
              <h4 className="text-xl font-bold text-orange-400 mb-2">Synthetic Life</h4>
              <p className="text-slate-300">First synthetic biological systems deployed</p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-slate-300">Performance Increase</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-slate-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-slate-300">Continuous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-slate-300">Possibilities</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join us in building the technologies that will define the next decade and beyond. 
            The future starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticTechShowcase2028;