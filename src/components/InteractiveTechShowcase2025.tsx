import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience truly conscious artificial intelligence that thinks, learns, and evolves',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Continuous learning'
      ],
      demo: 'Try our AI consciousness demo where you can have a conversation with a truly conscious AI system.'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Harness the power of quantum mechanics for unprecedented computing capabilities',
      features: [
        'Quantum superposition',
        'Entanglement networks',
        'Quantum cryptography',
        'Parallel processing'
      ],
      demo: 'Explore quantum algorithms that solve complex problems in seconds instead of years.'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Control digital systems directly with your thoughts using advanced neural technology',
      features: [
        'Thought-based control',
        'Neural feedback',
        'Memory enhancement',
        'Direct brain communication'
      ],
      demo: 'Control virtual objects and environments using only your neural signals.'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
<<<<<<< HEAD
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of technology with our interactive demonstrations and cutting-edge innovations
=======
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience Technology Like Never Before
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interact with cutting-edge technology through immersive demonstrations and hands-on experiences
>>>>>>> cursor/create-and-deploy-new-content-370d
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-4xl font-bold mb-6">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-xl opacity-90 mb-8">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            
            <div className="space-y-4 mb-8">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <h4 className="text-xl font-semibold mb-3">Interactive Demo</h4>
              <p className="text-blue-100 mb-4">
                {technologies[activeTab as keyof typeof technologies].demo}
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Demo Now
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <h4 className="text-2xl font-bold mb-6 text-center">Live Performance Metrics</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Processing Power</span>
                  <span>99.9%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: '99.9%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Response Time</span>
                  <span>0.1ms</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Accuracy Rate</span>
                  <span>99.8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '99.8%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>User Satisfaction</span>
                  <span>98.5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full" style={{width: '98.5%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-gray-300">
              Hands-on demonstrations that let you experience technology in real-time
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-gray-300">
              Live performance metrics and data visualization for all technologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4">Future Predictions</h3>
            <p className="text-gray-300">
              AI-powered insights into future technology trends and developments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;