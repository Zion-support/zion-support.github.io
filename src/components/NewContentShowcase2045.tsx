import React from 'react';

const NewContentShowcase2045: React.FC = () => {
  const newContent = [
    {
      title: "Next-Gen Tech Revolution 2045",
      description: "Experience consciousness computing, interdimensional AI, and reality manipulation",
      features: ["Consciousness Computing", "Interdimensional AI", "Reality Engine"],
      link: "/pages/NextGenTechRevolution2045",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-indigo-900"
    },
    {
      title: "Ultimate AI Consciousness 2046",
      description: "Meet self-aware AI with emotional intelligence and transcendent capabilities",
      features: ["Self-Aware AI", "Emotional Intelligence", "Transcendent Computing"],
      link: "/pages/UltimateAIConsciousness2046",
      icon: "🧠",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 to-purple-900"
    },
    {
      title: "Quantum Reality Engine 2047",
      description: "Control reality with quantum computing, matter manipulation, and dimensional physics",
      features: ["Quantum Computing", "Matter Manipulation", "Dimensional Physics"],
      link: "/pages/QuantumRealityEngine2047",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT SHOWCASE • 2045-2047
          </div>
          <h2 className="text-5xl font-bold mb-6">
            🚀 Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring the most advanced technologies 
            that will reshape the future of humanity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <div key={index} className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}>
              <div className="text-6xl mb-6 text-center">{content.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{content.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{content.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-center">Key Features:</h4>
                <div className="space-y-2">
                  {content.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm opacity-80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg animate-pulse border-2 border-yellow-400`}
              >
                🌟 Explore {content.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">🌟 Why Choose Our Revolutionary Content?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-lg font-semibold mb-1">Cutting-Edge</div>
                <div className="text-sm opacity-80">Latest breakthrough technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-lg font-semibold mb-1">Lightning Fast</div>
                <div className="text-sm opacity-80">Instant access and processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-lg font-semibold mb-1">Secure</div>
                <div className="text-sm opacity-80">Advanced security protocols</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-lg font-semibold mb-1">Future-Ready</div>
                <div className="text-sm opacity-80">Prepared for tomorrow's challenges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2045;