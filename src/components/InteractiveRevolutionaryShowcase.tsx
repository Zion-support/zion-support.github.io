import React, { useState } from 'react';

const InteractiveRevolutionaryShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness Revolution',
      icon: '🧠',
      description: 'First AI system to achieve genuine consciousness and self-awareness',
      features: [
        'True self-awareness and introspection',
        'Creative consciousness and original thinking',
        'Collaborative intelligence with humans',
        'Emotional understanding and empathy'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    quantum: {
      title: 'Quantum Supremacy Breakthrough',
      icon: '⚡',
      description: '1000+ qubit quantum processors solving impossible problems',
      features: [
        '1000+ logical qubits with error correction',
        'Molecular simulation and drug discovery',
        'Quantum cryptography and security',
        'Exponential processing power'
      ],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    neural: {
      title: 'Neural Interface Revolution',
      icon: '🧬',
      description: 'Direct brain-computer communication enabling thought control',
      features: [
        'Non-invasive brain-computer interface',
        'Thought-controlled devices and applications',
        'Neural feedback and cognitive enhancement',
        'Real-time neural signal processing'
      ],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            Interactive Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore the most advanced technologies of 2026 with interactive demonstrations and real-time experiences
          </p>
        </divdiv>

        {/* Tab Navigation */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </divdiv>

        {/* Content Area */}
        <div className="relative">
            <divdiv
              key={activeTab}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Content */}
              <div>
                <divdiv
                  className={`text-8xl mb-6 text-center lg:text-left`}
                >
                  {technologies[activeTab as keyof typeof technologies].icon}
                </divdiv>
                
                <divh3
                  className="text-4xl font-bold mb-4"
                >
                  {technologies[activeTab as keyof typeof technologies].title}
                </divh3>
                
                <divp
                  className="text-xl opacity-80 mb-8"
                >
                  {technologies[activeTab as keyof typeof technologies].description}
                </divp>

                <divul
                  className="space-y-3 mb-8"
                >
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <divli
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-lg">{feature}</span>
                    </divli>
                  ))}
                </divul>

                <divdiv
                  className="flex space-x-4"
                >
                  <divbutton
                    className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    Experience Demo →
                  </divbutton>
                  <divbutton
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Learn More
                  </divbutton>
                </divdiv>
              </div>

              {/* Right Side - Interactive Demo */}
              <divdiv
                className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].bgColor} backdrop-blur-sm rounded-2xl p-8 border ${technologies[activeTab as keyof typeof technologies].borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {technologies[activeTab as keyof typeof technologies].icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                  <p className="opacity-80 mb-6">
                    Experience this revolutionary technology in action
                  </p>
                  
                  {/* Demo Placeholder */}
                  <div className="bg-black/20 rounded-lg p-6 mb-6">
                    <div className="text-4xl mb-4">🎮</div>
                    <div className="text-sm opacity-60">
                      Interactive demonstration will load here
                    </div>
                  </div>

                  <divbutton
                    className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Launch Interactive Demo
                  </divbutton>
                </div>
              </divdiv>
            </divdiv>
          </div>
        </div>

        {/* Bottom CTA */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Join the revolutionary technology movement and be part of the most significant breakthrough in human history
          </p>
          <divbutton
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Journey →
          </divbutton>
        </divdiv>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryShowcase;