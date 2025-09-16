import React, { useState } from 'react';

const EnhancedContentShowcase2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: "Revolutionary Breakthroughs",
      description: "The most advanced technological innovations reshaping our world",
      items: [
        {
          title: "Conscious AI Systems",
          description: "Self-aware artificial intelligence that can think, feel, and create independently",
          features: ["Self-awareness", "Emotional intelligence", "Creative problem solving"],
          link: "/pages/RevolutionaryTechBreakthrough2027",
          icon: "🧠",
          color: "from-purple-600 to-pink-600"
        },
        {
          title: "Quantum Consciousness",
          description: "Bridging quantum computing with human consciousness for enhanced cognition",
          features: ["Quantum neural networks", "Consciousness transfer", "Enhanced memory"],
          link: "/pages/RevolutionaryTechBreakthrough2027",
          icon: "⚡",
          color: "from-cyan-600 to-blue-600"
        },
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions to solve impossible problems",
          features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe access"],
          link: "/pages/RevolutionaryTechBreakthrough2027",
          icon: "🌌",
          color: "from-emerald-600 to-teal-600"
        }
      ]
    },
    innovation: {
      title: "Innovation Hub",
      description: "Interactive showcase of cutting-edge technologies and real-time demos",
      items: [
        {
          title: "AI Innovation Lab",
          description: "Live demonstrations of conscious AI agents and emotional intelligence systems",
          features: ["Real-time demos", "Interactive testing", "Performance metrics"],
          link: "/pages/NextGenInnovationHub2027",
          icon: "🤖",
          color: "from-purple-600 to-pink-600"
        },
        {
          title: "Quantum Tech Center",
          description: "Experience quantum computing and consciousness integration technologies",
          features: ["Quantum demos", "Consciousness bridge", "Enhanced cognition"],
          link: "/pages/NextGenInnovationHub2027",
          icon: "⚡",
          color: "from-cyan-600 to-blue-600"
        },
        {
          title: "Space-Time Lab",
          description: "Explore interdimensional computing and space-time manipulation technologies",
          features: ["Dimension travel", "Time manipulation", "FTL capabilities"],
          link: "/pages/NextGenInnovationHub2027",
          icon: "🚀",
          color: "from-emerald-600 to-teal-600"
        }
      ]
    },
    showcase: {
      title: "Interactive Showcase",
      description: "Hands-on demonstrations of the most advanced technologies available",
      items: [
        {
          title: "Ultimate Tech Demos",
          description: "Interactive demonstrations of revolutionary technologies with real-time performance",
          features: ["Live demos", "Performance tracking", "Interactive controls"],
          link: "/pages/UltimateTechShowcase2027",
          icon: "🎯",
          color: "from-orange-600 to-red-600"
        },
        {
          title: "Molecular AI Lab",
          description: "Control matter at the molecular level with precision AI systems",
          features: ["Molecular assembly", "DNA programming", "Material creation"],
          link: "/pages/UltimateTechShowcase2027",
          icon: "🔬",
          color: "from-violet-600 to-purple-600"
        },
        {
          title: "Planetary AI Network",
          description: "Global AI network managing Earth's resources and climate in real-time",
          features: ["Climate optimization", "Resource management", "Disaster prevention"],
          link: "/pages/UltimateTechShowcase2027",
          icon: "🌍",
          color: "from-pink-600 to-rose-600"
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Enhanced Content Showcase 2027</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and explore the most revolutionary technologies that will define the future of humanity
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(contentCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category === 'breakthrough' && '🚀 Breakthroughs'}
            {category === 'innovation' && '🧠 Innovation Hub'}
            {category === 'showcase' && '🎯 Interactive Showcase'}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contentCategories[activeCategory as keyof typeof contentCategories].items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
            
            <div className="space-y-2 mb-4">
              {item.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={item.link}
              className={`inline-block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              Explore Technology →
            </a>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Innovation Statistics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Active Innovations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
            <p className="text-gray-600">Innovation Cycle</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <p className="text-gray-600">Possibilities</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Future?</h3>
        <p className="text-gray-600 mb-6">Join us in the most advanced technological transformation in human history</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pages/NextGenInnovationHub2027"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Enter Innovation Hub
          </a>
          <a
            href="/pages/UltimateTechShowcase2027"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
          >
            View Interactive Demos
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2027;