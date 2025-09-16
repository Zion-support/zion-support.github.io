<<<<<<< HEAD
import React from 'react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryContentShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'ai', label: 'AI Revolution', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Tech', icon: '⚛️' },
    { id: 'neural', label: 'Neural Interface', icon: '🧬' },
    { id: 'autonomous', label: 'Autonomous Systems', icon: '🤖' }
  ];

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness Revolution 2025",
      description: "Breakthrough in artificial consciousness with emergent intelligence capabilities",
      category: 'ai',
      image: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AIRevolution2025',
      features: ['Contextual Understanding', 'Emotional Intelligence', 'Self-Improvement'],
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum algorithms solving impossible problems exponentially faster",
      category: 'quantum',
      image: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumComputingBreakthrough',
      features: ['1000x Speed', 'Quantum Cryptography', 'Molecular Simulation'],
      status: 'Beta Access',
      statusColor: 'bg-blue-500'
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless mind-machine communication",
      category: 'neural',
      image: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NeuralInterfaceRevolution2025',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      status: 'Prototype',
      statusColor: 'bg-yellow-500'
    },
    {
      id: 4,
      title: "Autonomous AI Systems 2025",
      description: "Self-managing AI agents that operate independently with human-level decision making",
      category: 'autonomous',
      image: '🤖',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/AutonomousBusinessRevolution2026',
      features: ['Self-Management', 'Independent Operation', 'Adaptive Learning'],
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 5,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation synthetic intelligence that transcends traditional AI limitations",
      category: 'ai',
      image: '🌟',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Transcendent AI', 'Creative Problem Solving', 'Intuitive Understanding'],
      status: 'Coming Soon',
      statusColor: 'bg-purple-500'
    },
    {
      id: 6,
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented capabilities",
      category: 'quantum',
      image: '⚡',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/QuantumNeuralFusion2026',
      features: ['Quantum Neural Networks', 'Hybrid Processing', 'Exponential Learning'],
      status: 'Research Phase',
      statusColor: 'bg-indigo-500'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our groundbreaking content covering the most advanced technologies that are reshaping the future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Image/Icon Header */}
              <div className={`bg-gradient-to-r ${content.gradient} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.image}
                  </div>
                  <div className="flex justify-center">
                    <span className={`${content.statusColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {content.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {content.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={content.link}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Explore Technology →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary technology content and discover how these innovations can transform your organization
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/pages/ComprehensiveServices2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default RevolutionaryContentShowcase2025;