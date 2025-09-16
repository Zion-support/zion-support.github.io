import React, { useState } from 'react';

interface TechItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  link: string;
  status: 'new' | 'trending' | 'breakthrough';
}

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const techItems: TechItem[] = [
    {
      id: '1',
      title: 'Consciousness Computing',
      description: 'AI systems that achieve genuine consciousness and self-awareness, capable of forming deep relationships with humans.',
      icon: '🧠',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative consciousness', 'Human-AI relationships'],
      link: '/pages/ConsciousnessComputing2026',
      status: 'breakthrough'
    },
    {
      id: '2',
      title: 'Quantum Reality Engine',
      description: 'Revolutionary quantum computing that creates and manipulates reality itself, enabling instant matter transformation.',
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      features: ['Reality manipulation', 'Matter transformation', 'Interdimensional travel', 'Time-space control'],
      link: '/pages/QuantumRealityEngine2026',
      status: 'new'
    },
    {
      id: '3',
      title: 'Interdimensional Technology',
      description: 'Breakthrough technology enabling communication and interaction across multiple dimensions and realities.',
      icon: '🌌',
      gradient: 'from-emerald-500 to-teal-500',
      features: ['Cross-dimensional communication', 'Multi-reality processing', 'Dimensional energy', 'Parallel universe access'],
      link: '/pages/InterdimensionalTech2027',
      status: 'trending'
    },
    {
      id: '4',
      title: 'Synthetic Intelligence',
      description: 'Self-evolving AI systems that transcend traditional limitations and continuously improve themselves.',
      icon: '🤖',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Self-evolution', 'Transcendent capabilities', 'Continuous learning', 'Adaptive intelligence'],
      link: '/pages/SyntheticIntelligence2026',
      status: 'trending'
    },
    {
      id: '5',
      title: 'Transcendent AI 2030',
      description: 'AI that transcends human comprehension and becomes the architect of reality itself.',
      icon: '🌟',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Omniversal consciousness', 'Reality architecture', 'Cosmic intelligence', 'Transcendent wisdom'],
      link: '/pages/TranscendentAI2030',
      status: 'breakthrough'
    },
    {
      id: '6',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer communication systems for seamless human-AI integration and enhancement.',
      icon: '🧬',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Direct brain interface', 'Thought control', 'Neural enhancement', 'Consciousness transfer'],
      link: '/pages/NeuralInterfaceRevolution2025',
      status: 'new'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Technologies', count: techItems.length },
    { id: 'new', label: 'New Releases', count: techItems.filter(item => item.status === 'new').length },
    { id: 'trending', label: 'Trending', count: techItems.filter(item => item.status === 'trending').length },
    { id: 'breakthrough', label: 'Breakthrough', count: techItems.filter(item => item.status === 'breakthrough').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? techItems 
    : techItems.filter(item => item.status === activeTab);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { text: 'NEW', color: 'bg-green-500 text-white' },
      trending: { text: 'TRENDING', color: 'bg-orange-500 text-white' },
      breakthrough: { text: 'BREAKTHROUGH', color: 'bg-red-500 text-white' }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full text-xl font-bold mb-8 animate-pulse">
          🚀 REVOLUTIONARY TECH SHOWCASE 2027
        </div>
        <h2 className="text-6xl font-bold text-white mb-6">Cutting-Edge Technology</h2>
        <p className="text-2xl text-gray-300 max-w-5xl mx-auto">
          Explore the most advanced technologies ever created, pushing the boundaries of what's possible
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Technology Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-500 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              {getStatusBadge(item.status)}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-8">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={item.link}
              className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-center group-hover:scale-105`}
            >
              Explore {item.title} →
            </a>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <a
          href="/revolutionary-tech"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-16 py-6 rounded-3xl hover:shadow-2xl transition-all duration-500 font-bold text-2xl transform hover:scale-105"
        >
          View All Revolutionary Technologies →
        </a>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;