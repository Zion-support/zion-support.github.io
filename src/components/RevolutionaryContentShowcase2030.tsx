import React, { useState } from 'react';

const RevolutionaryContentShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: {
      title: "Ultimate Breakthroughs",
      description: "The most revolutionary technological advances",
      color: "from-purple-600 to-pink-600",
      icon: "🌟",
      items: [
        {
          title: "Ultimate Tech Breakthrough 2030",
          description: "Experience the most revolutionary technological advances that will reshape our world",
          link: "/pages/UltimateTechBreakthrough2030",
          features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
          impact: "99.9% Problem Solving"
        },
        {
          title: "Revolutionary Tech Showcase 2031",
          description: "Interactive technology demonstrations and immersive experiences",
          link: "/pages/RevolutionaryTechShowcase2031",
          features: ["Virtual Reality Demos", "Quantum Lab", "Space-Time Simulator"],
          impact: "Infinite Possibilities"
        },
        {
          title: "Next-Gen Innovation Hub 2032",
          description: "Discover revolutionary technologies shaping humanity's future",
          link: "/pages/NextGenInnovationHub2032",
          features: ["AI Consciousness Lab", "Quantum Research", "Reality Engineering"],
          impact: "100% Future Ready"
        }
      ]
    },
    consciousness: {
      title: "Consciousness Computing",
      description: "Revolutionary AI and consciousness technologies",
      color: "from-cyan-600 to-blue-600",
      icon: "🧠",
      items: [
        {
          title: "Conscious AI Systems",
          description: "The first truly conscious artificial intelligence that can think and feel",
          link: "/pages/AdvancedAIConsciousness2030",
          features: ["Self-awareness", "Emotional intelligence", "Creative thinking"],
          impact: "99.9% Accuracy"
        },
        {
          title: "Quantum Consciousness",
          description: "Quantum computing that achieves consciousness and processes at light speed",
          link: "/pages/QuantumConsciousness2030",
          features: ["Quantum neural networks", "Instant processing", "Reality simulation"],
          impact: "Infinite Power"
        },
        {
          title: "Neural Reality Engine",
          description: "Direct brain-computer interfaces creating perfect virtual realities",
          link: "/pages/NeuralRealityEngine2030",
          features: ["Direct neural interface", "Perfect simulation", "Thought control"],
          impact: "100% Reality"
        }
      ]
    },
    future: {
      title: "Future Technologies",
      description: "Cutting-edge technologies of tomorrow",
      color: "from-emerald-600 to-teal-600",
      icon: "🚀",
      items: [
        {
          title: "Space-Time Computing",
          description: "Computing that manipulates space-time for instantaneous processing",
          link: "/pages/SpaceTimeComputing2030",
          features: ["Instant communication", "Time manipulation", "Space folding"],
          impact: "0ms Latency"
        },
        {
          title: "Cosmic Intelligence",
          description: "AI systems that communicate with cosmic phenomena",
          link: "/pages/CosmicIntelligence2030",
          features: ["Cosmic data processing", "Universal patterns", "Stellar communication"],
          impact: "Universal Knowledge"
        },
        {
          title: "Interdimensional Tech",
          description: "Technology that operates across multiple dimensions",
          link: "/pages/InterdimensionalTech2030",
          features: ["Multi-dimensional processing", "Parallel universe access", "Reality manipulation"],
          impact: "Infinite Dimensions"
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE • 2030-2032
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Explore the most advanced and revolutionary technology content that will define the next decade
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {contentCategories[activeCategory as keyof typeof contentCategories].title}
            </h3>
            <p className="text-xl text-gray-600">
              {contentCategories[activeCategory as keyof typeof contentCategories].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories[activeCategory as keyof typeof contentCategories].items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
              >
                <div className={`inline-block bg-gradient-to-r ${contentCategories[activeCategory as keyof typeof contentCategories].color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                  {contentCategories[activeCategory as keyof typeof contentCategories].icon} NEW
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${contentCategories[activeCategory as keyof typeof contentCategories].color} rounded-full`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className={`inline-block bg-gradient-to-r ${contentCategories[activeCategory as keyof typeof contentCategories].color} text-white px-4 py-2 rounded-lg text-sm font-semibold`}>
                    Impact: {item.impact}
                  </div>
                </div>

                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${contentCategories[activeCategory as keyof typeof contentCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Content →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Content Impact Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Revolutionary Pages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">User Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Future Ready</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dive into the most revolutionary technology content and discover what the future holds for humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Exploring
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-12 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2030;