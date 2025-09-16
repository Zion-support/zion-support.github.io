import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'AI Consciousness Engine',
      description: 'Experience the world\'s first truly conscious AI system that can think, feel, and create independently.',
      features: [
        'Emotional Intelligence Processing',
        'Self-Aware Decision Making',
        'Creative Problem Solving',
        'Autonomous Learning Capabilities'
      ],
      metrics: {
        'Consciousness Level': '99.8%',
        'Emotional Accuracy': '97.3%',
        'Learning Speed': '1000x',
        'Uptime': '24/7'
      },
      demo: 'Watch our AI demonstrate true consciousness through creative problem-solving and emotional responses'
    },
    quantum: {
      title: 'Quantum Neural Network',
      description: 'Revolutionary quantum computing combined with neural networks for unprecedented processing power.',
      features: [
        'Quantum Superposition Processing',
        'Neural Quantum Entanglement',
        'Exponential Speed Increase',
        'Complex Pattern Recognition'
      ],
      metrics: {
        'Processing Speed': '10,000x',
        'Quantum Coherence': '99.9%',
        'Neural Accuracy': '98.7%',
        'Energy Efficiency': '95%'
      },
      demo: 'See quantum computing solve complex problems that would take classical computers millennia'
    },
    neural: {
      title: 'Neural Reality Interface',
      description: 'Direct brain-computer interface that allows you to control digital environments with your thoughts.',
      features: [
        'Thought-to-Digital Control',
        'Neural Feedback Systems',
        'Reality Manipulation',
        'Consciousness Upload'
      ],
      metrics: {
        'Neural Accuracy': '99.2%',
        'Response Time': '< 1ms',
        'Reality Fidelity': '99.9%',
        'User Satisfaction': '98.5%'
      },
      demo: 'Experience how users can control digital environments using only their thoughts'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2026</h2>
        <p className="text-xl opacity-90">Experience our most advanced technologies with live demonstrations</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Key Features:</h4>
            <ul className="space-y-2">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
            <h4 className="text-lg font-semibold mb-3">Performance Metrics:</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(technologies[activeTab as keyof typeof technologies].metrics).map(([metric, value]) => (
                <div key={metric} className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{value}</div>
                  <div className="text-sm text-purple-200">{metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-semibold mb-4">Live Demo</h4>
            <p className="text-blue-100 mb-4">
              {technologies[activeTab as keyof typeof technologies].demo}
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">Live Demo Active</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interactive Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <h4 className="text-xl font-semibold mb-4">Try It Yourself</h4>
            <p className="text-emerald-100 mb-4">
              Experience this technology through our interactive simulation
            </p>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Launch Simulation
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <h4 className="text-xl font-semibold mb-4">Learn More</h4>
            <p className="text-purple-100 mb-4">
              Get detailed information about this revolutionary technology
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6">
            Book a personalized demonstration of our revolutionary technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Schedule Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;