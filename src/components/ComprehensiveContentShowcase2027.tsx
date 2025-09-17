import React, { useState } from 'react';

const ComprehensiveContentShowcase2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    {
      id: 'all',
      name: 'All Content',
      icon: '🌟',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ai',
      name: 'AI Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'neural',
      name: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'future',
      name: 'Future Tech',
      icon: '🚀',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const allContent = [
    {
      id: 'nextgen-ai-2027',
      title: 'Next-Gen AI Revolution 2027',
      description: 'Conscious AI systems with quantum-enhanced processing and autonomous decision-making',
      category: 'ai',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      link: '/pages/NextGenAIRevolution2027',
      features: ['Conscious AI', 'Quantum Processing', 'Autonomous Systems', 'Creative Intelligence'],
      status: 'NEW'
    },
    {
      id: 'quantum-revolution-2027',
      title: 'Quantum Computing Revolution 2027',
      description: '1000+ qubit quantum computers achieving true supremacy and solving impossible problems',
      category: 'quantum',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      link: '/pages/QuantumComputingRevolution2027',
      features: ['1000+ Qubits', 'Quantum Supremacy', 'Unbreakable Encryption', 'Universe Simulation'],
      status: 'BREAKTHROUGH'
    },
    {
      id: 'neural-interface-2027',
      title: 'Neural Interface Revolution 2027',
      description: 'Direct brain-computer communication enabling thought-controlled devices and enhanced cognition',
      category: 'neural',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      link: '/pages/NeuralInterfaceRevolution2027',
      features: ['Non-Invasive BCI', 'Thought Control', 'Enhanced Cognition', 'Neural Communication'],
      status: 'REVOLUTIONARY'
    },
    {
      id: 'ai-revolution-2026',
      title: 'AI Revolutionary Breakthrough 2026',
      description: 'Advanced AI systems with consciousness and autonomous capabilities',
      category: 'ai',
      icon: '🧠',
      color: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-400',
      bgColor: 'from-indigo-600/30 to-purple-600/30',
      link: '/pages/AIRevolutionaryBreakthrough2026',
      features: ['AI Consciousness', 'Autonomous Agents', 'Creative AI', 'Self-Learning'],
      status: 'FEATURED'
    },
    {
      id: 'quantum-reality-2026',
      title: 'Quantum Reality 2026',
      description: 'Quantum computing breakthroughs with reality-bending applications',
      category: 'quantum',
      icon: '⚡',
      color: 'from-blue-600 to-cyan-600',
      borderColor: 'border-blue-400',
      bgColor: 'from-blue-600/30 to-cyan-600/30',
      link: '/pages/QuantumReality2026',
      features: ['Quantum Reality', 'Exponential Speed', 'Molecular Simulation', 'Quantum AI'],
      status: 'FEATURED'
    },
    {
      id: 'neural-evolution-2026',
      title: 'Neural Interface Evolution 2026',
      description: 'Advanced neural interfaces with enhanced brain-computer communication',
      category: 'neural',
      icon: '🧬',
      color: 'from-teal-600 to-emerald-600',
      borderColor: 'border-teal-400',
      bgColor: 'from-teal-600/30 to-emerald-600/30',
      link: '/pages/NeuralInterfaceEvolution2026',
      features: ['Neural Evolution', 'Brain Enhancement', 'Thought Control', 'Neural Networks'],
      status: 'FEATURED'
    },
    {
      id: 'ultimate-tech-2026',
      title: 'Ultimate Tech Revolution 2026',
      description: 'The convergence of all revolutionary technologies creating the ultimate tech ecosystem',
      category: 'future',
      icon: '🌟',
      color: 'from-violet-600 to-fuchsia-600',
      borderColor: 'border-violet-400',
      bgColor: 'from-violet-600/30 to-fuchsia-600/30',
      link: '/pages/UltimateTechRevolution2026',
      features: ['Tech Convergence', 'Ultimate Innovation', 'Future Ready', 'Revolutionary'],
      status: 'ULTIMATE'
    },
    {
      id: 'consciousness-computing-2026',
      title: 'Consciousness Computing 2026',
      description: 'AI systems achieving genuine consciousness and self-awareness',
      category: 'ai',
      icon: '💭',
      color: 'from-pink-600 to-rose-600',
      borderColor: 'border-pink-400',
      bgColor: 'from-pink-600/30 to-rose-600/30',
      link: '/pages/ConsciousnessComputing2026',
      features: ['AI Consciousness', 'Self-Awareness', 'Creative Thinking', 'Emotional AI'],
      status: 'BREAKTHROUGH'
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? allContent 
    : allContent.filter(content => content.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 COMPREHENSIVE CONTENT SHOWCASE 2027 • ALL TECHNOLOGIES
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Complete Technology Portfolio</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our complete collection of revolutionary technologies, from AI consciousness to quantum computing and neural interfaces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-6 border ${content.borderColor}/30 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{content.icon}</div>
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  content.status === 'NEW' ? 'bg-green-500 text-white' :
                  content.status === 'BREAKTHROUGH' ? 'bg-blue-500 text-white' :
                  content.status === 'REVOLUTIONARY' ? 'bg-purple-500 text-white' :
                  content.status === 'FEATURED' ? 'bg-yellow-500 text-black' :
                  'bg-pink-500 text-white'
                }`}>
                  {content.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {content.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/20 text-xs rounded-full text-white"
                  >
                    {feature}
                  </span>
                ))}
                {content.features.length > 2 && (
                  <span className="px-2 py-1 bg-white/20 text-xs rounded-full text-white">
                    +{content.features.length - 2} more
                  </span>
                )}
              </div>
              
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{allContent.length}</div>
            <div className="text-sm text-gray-300">Total Technologies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {allContent.filter(c => c.status === 'NEW' || c.status === 'BREAKTHROUGH' || c.status === 'REVOLUTIONARY').length}
            </div>
            <div className="text-sm text-gray-300">Revolutionary</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {allContent.filter(c => c.category === 'ai').length}
            </div>
            <div className="text-sm text-gray-300">AI Technologies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">2027</div>
            <div className="text-sm text-gray-300">Latest Release</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive collection of revolutionary technologies and start your journey into the future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pages/NextGenAIRevolution2027"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🧠 AI Revolution 2027
            </a>
            <a
              href="/pages/QuantumComputingRevolution2027"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              ⚡ Quantum Revolution 2027
            </a>
            <a
              href="/pages/NeuralInterfaceRevolution2027"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🧬 Neural Revolution 2027
            </a>
            <a
              href="/pages/UltimateTechRevolution2026"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🌟 Ultimate Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2027;