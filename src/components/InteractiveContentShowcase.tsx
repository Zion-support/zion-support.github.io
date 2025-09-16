import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const contentCategories = [
    {
      id: 0,
      name: "AI Revolution",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
      content: [
        {
          title: "Consciousness Computing",
          description: "AI systems that achieve genuine consciousness and self-awareness",
          image: "🌟",
          status: "Breakthrough",
          views: "2.3M",
          likes: "156K"
        },
        {
          title: "Quantum AI Processing",
          description: "Quantum-enhanced AI that solves impossible problems",
          image: "⚡",
          status: "Revolutionary",
          views: "1.8M",
          likes: "134K"
        },
        {
          title: "Synthetic Intelligence",
          description: "Creating digital minds that think and feel independently",
          image: "🤖",
          status: "Advanced",
          views: "1.5M",
          likes: "98K"
        }
      ]
    },
    {
      id: 1,
      name: "Quantum Tech",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      content: [
        {
          title: "Quantum Supremacy",
          description: "Achieving computational power beyond classical computers",
          image: "🔮",
          status: "Breakthrough",
          views: "3.1M",
          likes: "245K"
        },
        {
          title: "Quantum Neural Networks",
          description: "Combining quantum computing with neural processing",
          image: "🧬",
          status: "Revolutionary",
          views: "2.7M",
          likes: "198K"
        },
        {
          title: "Quantum Reality Control",
          description: "Manipulating reality at the quantum level",
          image: "🌌",
          status: "Experimental",
          views: "1.9M",
          likes: "167K"
        }
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      content: [
        {
          title: "Brain-Computer Fusion",
          description: "Direct neural interfaces for seamless human-AI interaction",
          image: "🔗",
          status: "Breakthrough",
          views: "2.8M",
          likes: "189K"
        },
        {
          title: "Thought Control Systems",
          description: "Controlling devices through pure thought",
          image: "💭",
          status: "Advanced",
          views: "2.2M",
          likes: "156K"
        },
        {
          title: "Memory Enhancement",
          description: "Augmenting human memory with AI assistance",
          image: "🧠",
          status: "Revolutionary",
          views: "1.7M",
          likes: "123K"
        }
      ]
    },
    {
      id: 3,
      name: "Future Tech",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      content: [
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions simultaneously",
          image: "🌍",
          status: "Theoretical",
          views: "1.4M",
          likes: "89K"
        },
        {
          title: "Reality Simulation",
          description: "Creating indistinguishable virtual realities",
          image: "🎮",
          status: "Advanced",
          views: "2.1M",
          likes: "145K"
        },
        {
          title: "Consciousness Transfer",
          description: "Transferring human consciousness to digital substrates",
          image: "💫",
          status: "Breakthrough",
          views: "3.5M",
          likes: "267K"
        }
      ]
    }
  ];

  const stats = [
    { label: "Total Views", value: "50M+", icon: "👁️" },
    { label: "Active Users", value: "2.5M+", icon: "👥" },
    { label: "Content Pieces", value: "500+", icon: "📚" },
    { label: "Breakthroughs", value: "25+", icon: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 INTERACTIVE SHOWCASE • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Content Showcase
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore our revolutionary content through interactive experiences. 
            Discover, engage, and immerse yourself in the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
          <div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {contentCategories[activeTab].content.map((item, index) => (
              <div
                key={index}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                      item.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                      item.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                      item.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                      'bg-gradient-to-r from-gray-600 to-gray-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <span className="mr-1">👁️</span>
                        {item.views}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">❤️</span>
                        {item.likes}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    className={`w-full bg-gradient-to-r ${contentCategories[activeTab].color} py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Content →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Features */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎮 Interactive Features</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our content through immersive interactive features and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-xl border border-purple-400/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Interactive Demos</h3>
              <p className="text-gray-300 text-sm mb-4">Hands-on demonstrations of revolutionary technologies</p>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Try Demo
              </button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl border border-cyan-400/30">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Virtual Reality</h3>
              <p className="text-gray-300 text-sm mb-4">Immersive VR experiences of future technologies</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Enter VR
              </button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl border border-emerald-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI Chat</h3>
              <p className="text-gray-300 text-sm mb-4">Chat with AI systems about the latest breakthroughs</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users exploring the most revolutionary content in technology history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;