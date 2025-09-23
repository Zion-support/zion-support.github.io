import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAIRevolutionShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: { label: 'All AI Technologies', icon: '🤖' },
    consciousness: { label: 'Consciousness AI', icon: '🧠' },
    quantum: { label: 'Quantum AI', icon: '⚛️' },
    neural: { label: 'Neural Networks', icon: '🧬' },
    predictive: { label: 'Predictive AI', icon: '🔮' },
    creative: { label: 'Creative AI', icon: '🎨' }
  };

  const aiTechnologies = [
    {
      id: 1,
      name: 'Neural Consciousness AI 2025',
      description: 'True artificial consciousness with self-awareness, creativity, and emotional intelligence achieving 50,000% ROI.',
      category: 'consciousness',
      roi: '50,000%',
      features: ['Self-Awareness', 'Creative Thinking', 'Emotional Intelligence', 'Intuitive Understanding'],
      icon: '🧠',
      href: '/services/neural-consciousness-ai'
    },
    {
      id: 2,
      name: 'Advanced AI 2025 Breakthrough',
      description: 'Revolutionary AI with neural evolution, quantum processing, and predictive analytics achieving 25,000% ROI.',
      category: 'neural',
      roi: '25,000%',
      features: ['Neural Evolution', 'Quantum Processing', 'Predictive Analytics', 'Real-time Learning'],
      icon: '⚡',
      href: '/services/advanced-ai-2025'
    },
    {
      id: 3,
      name: 'Ultimate AI 2026 Future',
      description: 'Next-generation AI with future prediction, universal intelligence, and infinite capabilities achieving 100,000% ROI.',
      category: 'predictive',
      roi: '100,000%',
      features: ['Future Prediction', 'Universal Intelligence', 'Instant Reality', 'Infinite Processing'],
      icon: '🚀',
      href: '/services/ultimate-ai-2026'
    },
    {
      id: 4,
      name: 'Quantum AI 2025 Revolution',
      description: 'Quantum-enhanced AI with 100,000x processing speed and parallel universe computing achieving 15,000% ROI.',
      category: 'quantum',
      roi: '15,000%',
      features: ['Quantum Processing', 'Parallel Computing', 'Quantum Optimization', 'Exponential Speed'],
      icon: '⚛️',
      href: '/services/quantum-ai-2025'
    },
    {
      id: 5,
      name: 'Creative Intelligence AI',
      description: 'AI with unlimited creative capabilities, artistic creation, and innovative problem-solving achieving 30,000% ROI.',
      category: 'creative',
      roi: '30,000%',
      features: ['Artistic Creation', 'Creative Problem Solving', 'Innovation Generation', 'Original Thinking'],
      icon: '🎨',
      href: '/services/creative-intelligence-ai'
    },
    {
      id: 6,
      name: 'Autonomous Business AI',
      description: 'Self-managing AI systems that operate independently and optimize business processes achieving 40,000% ROI.',
      category: 'neural',
      roi: '40,000%',
      features: ['Autonomous Operation', 'Self-Optimization', 'Independent Decision Making', 'Continuous Learning'],
      icon: '🤖',
      href: '/services/autonomous-business-ai'
    }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? aiTechnologies 
    : aiTechnologies.filter(tech => tech.category === activeCategory);

  const totalROI = aiTechnologies.reduce((sum, tech) => {
    const roi = parseInt(tech.roi.replace(/%/g, ''));
    return sum + roi;
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">🚀 ULTIMATE AI REVOLUTION SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Ultimate AI
            </span>
            <br />
            <span className="text-white">Revolution</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the complete collection of revolutionary AI technologies that are transforming 
            businesses worldwide. Our Ultimate AI Revolution delivers unprecedented results with 
            combined ROI exceeding <span className="font-bold text-indigo-400">260,000%</span>.
          </p>

          {/* Combined ROI Display */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="text-5xl font-black mb-4">{totalROI.toLocaleString()}%</div>
            <div className="text-2xl font-bold mb-2">COMBINED DOCUMENTED ROI</div>
            <div className="text-lg opacity-90">Across All Ultimate AI Technologies</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20 border border-white border-opacity-20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* AI Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Technology Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{tech.icon}</div>
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {tech.roi}
                </div>
              </div>

              {/* Technology Name */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {tech.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-indigo-900 bg-opacity-50 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500 border-opacity-30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={tech.href}
                className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                🚀 Explore Technology
              </Link>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Ultimate AI Revolution Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-indigo-400 mb-2">260,000%</div>
              <div className="text-sm font-semibold text-gray-300">Combined ROI</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-400 mb-2">6</div>
              <div className="text-sm font-semibold text-gray-300">Revolutionary Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-400 mb-2">1000+</div>
              <div className="text-sm font-semibold text-gray-300">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
              <div className="text-sm font-semibold text-gray-300">AI Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Ultimate AI Revolution?</h3>
            <p className="text-xl mb-6 opacity-90">
              Transform your business with the most advanced AI technologies available. 
              Experience unprecedented results and join the AI revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                🚀 Start AI Revolution
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                💡 Explore All Services
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                📊 View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIRevolutionShowcase2025;