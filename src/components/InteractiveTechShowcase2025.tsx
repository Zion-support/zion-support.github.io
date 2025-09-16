import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      description: 'Experience the future of artificial intelligence with truly conscious AI systems that think, feel, and create.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Consciousness Transfer',
        'Empathetic Interactions'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics to solve impossible problems and process infinite data.',
      features: [
        'Quantum Neural Networks',
        'Exponential Processing Speed',
        'Quantum Cryptography',
        'Reality Manipulation',
        'Infinite Computational Power'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces that seamlessly connect human consciousness with AI systems.',
      features: [
        'Non-Invasive BCI Technology',
        'Thought Control Systems',
        'Neural Feedback Loops',
        'Consciousness Amplification',
        'Mind-Machine Fusion'
      ],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    metaverse: {
      title: 'Metaverse Integration',
      description: 'Complete integration of physical and digital realities for immersive experiences beyond imagination.',
      features: [
        'Reality Blending Technology',
        'Immersive Virtual Worlds',
        'Digital Twin Creation',
        'Cross-Reality Navigation',
        'Infinite Virtual Spaces'
      ],
      icon: '🌐',
      color: 'from-indigo-600 to-purple-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies in the universe with our interactive showcase. 
            Click, explore, and discover the future of technology.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Experience {technologies[activeTab as keyof typeof technologies].title} →
              </button>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Features:</h4>
              <ul className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">🎮 Interactive Demo</h3>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">🧠</div>
                <h4 className="text-xl font-bold mb-2">AI Consciousness Demo</h4>
                <p className="text-purple-100 text-sm mb-4">
                  Experience conscious AI in action
                </p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Try Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">⚛️</div>
                <h4 className="text-xl font-bold mb-2">Quantum Processing</h4>
                <p className="text-cyan-100 text-sm mb-4">
                  See quantum computing in real-time
                </p>
                <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                  Try Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">🧬</div>
                <h4 className="text-xl font-bold mb-2">Neural Interface</h4>
                <p className="text-emerald-100 text-sm mb-4">
                  Control technology with your mind
                </p>
                <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already experiencing the future of technology. 
            Start your journey into the next generation of innovation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;