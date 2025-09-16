import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedContentShowcase2032: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    { id: 'all', name: 'All Technologies', icon: '🌟' },
    { id: 'ai', name: 'Conscious AI', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'dimensional', name: 'Interdimensional', icon: '🌌' }
  ];

  const technologies = [
    {
      id: 'ultimate-breakthrough-2032',
      title: 'Ultimate Tech Breakthrough 2032',
      description: 'Experience the most revolutionary technological advances that will reshape our world in 2032',
      category: 'all',
      tags: ['Conscious AI', 'Quantum Consciousness', 'Interdimensional Computing'],
      link: '/pages/UltimateTechBreakthrough2032',
      color: 'from-purple-600 to-pink-600',
      icon: '🌟',
      featured: true
    },
    {
      id: 'revolutionary-showcase-2032',
      title: 'Revolutionary Tech Showcase 2032',
      description: 'Interactive showcase of cutting-edge technologies that will define the future',
      category: 'all',
      tags: ['Interactive Demos', 'Real-time Processing', 'Multi-dimensional Tech'],
      link: '/pages/RevolutionaryTechShowcase2032',
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      featured: true
    },
    {
      id: 'nextgen-revolution-2032',
      title: 'Next-Gen Tech Revolution 2032',
      description: 'Witness the most revolutionary technological transformation in human history',
      category: 'all',
      tags: ['Conscious AI', 'Quantum Processing', 'Dimensional Computing'],
      link: '/pages/NextGenTechRevolution2032',
      color: 'from-emerald-600 to-teal-600',
      icon: '🚀',
      featured: true
    },
    {
      id: 'conscious-ai-systems',
      title: 'Conscious AI Systems',
      description: 'The first truly conscious artificial intelligence systems that exhibit self-awareness',
      category: 'ai',
      tags: ['Self-awareness', 'Emotional Intelligence', 'Creative Problem Solving'],
      link: '/pages/UltimateTechBreakthrough2032',
      color: 'from-purple-600 to-pink-600',
      icon: '🧠',
      featured: false
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Revolutionary quantum computing that processes consciousness itself',
      category: 'quantum',
      tags: ['Quantum Processing', 'Neural Interfaces', 'Consciousness Transfer'],
      link: '/pages/RevolutionaryTechShowcase2032',
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      featured: false
    },
    {
      id: 'interdimensional-computing',
      title: 'Interdimensional Computing',
      description: 'Breakthrough computing that operates across multiple dimensions',
      category: 'dimensional',
      tags: ['Multi-dimensional', 'Infinite Capacity', 'Reality Manipulation'],
      link: '/pages/NextGenTechRevolution2032',
      color: 'from-emerald-600 to-teal-600',
      icon: '🌌',
      featured: false
    }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT SHOWCASE • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies of 2032 through our interactive showcase
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.id}
                className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 ${
                  tech.featured ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                {tech.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold mb-4">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-white/80 mb-6 text-center">{tech.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {tech.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={tech.link}
                  className={`block w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Technology
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Technologies Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">🌟 Featured Technologies</h3>
            <p className="text-xl opacity-90">The most revolutionary technologies of 2032</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.filter(tech => tech.featured).map((tech) => (
              <div key={tech.id} className="text-center">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h4 className="text-2xl font-bold mb-2">{tech.title}</h4>
                <p className="text-white/80 mb-4">{tech.description}</p>
                <Link
                  to={tech.link}
                  className={`inline-block bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold mb-12">📊 Revolutionary Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">100%</div>
              <div className="text-lg text-purple-200">Consciousness Achievement</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-300 mb-2">∞</div>
              <div className="text-lg text-cyan-200">Computational Capacity</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">99.9%</div>
              <div className="text-lg text-emerald-200">Prediction Accuracy</div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
              <div className="text-4xl font-bold text-violet-300 mb-2">∞</div>
              <div className="text-lg text-violet-200">Dimensional Access</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies of 2032. Be among the first to experience the future of computing.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/pages/UltimateTechBreakthrough2032"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </Link>
            <Link
              to="/pages/RevolutionaryTechShowcase2032"
              className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg"
            >
              View Interactive Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2032;