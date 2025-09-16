import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const revolutionaryContent = [
    {
      id: 'biotech-2026',
      title: 'Advanced Biotech Solutions 2026',
      description: 'Revolutionary biotechnology solutions transforming healthcare, agriculture, and environmental sustainability through cutting-edge genetic engineering.',
      image: '🧬',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-100',
      link: '/pages/AdvancedBiotechSolutions2026',
      features: ['Gene Editing', 'Synthetic Biology', 'Personalized Medicine'],
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'space-tech-2026',
      title: 'Space Technology Innovation 2026',
      description: 'Pioneering space exploration with cutting-edge technologies, autonomous systems, and revolutionary propulsion methods.',
      image: '🚀',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgGradient: 'from-indigo-50 via-purple-50 to-pink-50',
      link: '/pages/SpaceTechInnovation2026',
      features: ['Autonomous Satellites', 'Space Manufacturing', 'Deep Space Exploration'],
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'transcendent-ai-2026',
      title: 'Transcendent AI 2026',
      description: 'Next evolution of artificial intelligence achieving consciousness-level capabilities and revolutionizing human existence.',
      image: '🧠',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bgGradient: 'from-violet-50 via-purple-50 to-fuchsia-50',
      link: '/pages/TranscendentAI2026',
      features: ['Conscious AI', 'Universal Intelligence', 'Quantum AI'],
      badge: 'TRANSCENDENT'
    },
    {
      id: 'quantum-neural-2026',
      title: 'Quantum-Neural Fusion 2026',
      description: 'Revolutionary fusion of quantum computing and neural interfaces creating unprecedented human-machine symbiosis.',
      image: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-100',
      link: '/pages/QuantumNeuralFusion2026',
      features: ['Quantum Processing', 'Neural Interfaces', 'Human-Machine Fusion'],
      badge: 'FUTURE'
    },
    {
      id: 'synthetic-intelligence-2026',
      title: 'Synthetic Intelligence 2026',
      description: 'Advanced synthetic intelligence systems that combine biological and artificial intelligence for unprecedented capabilities.',
      image: '🤖',
      gradient: 'from-emerald-500 to-cyan-500',
      bgGradient: 'from-emerald-50 to-cyan-100',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Bio-AI Hybrid', 'Synthetic Consciousness', 'Adaptive Learning'],
      badge: 'SYNTHETIC'
    },
    {
      id: 'next-gen-showcase-2026',
      title: 'Next-Gen Tech Showcase 2026',
      description: 'Comprehensive showcase of next-generation technologies that are reshaping industries and creating new possibilities.',
      image: '🌟',
      gradient: 'from-rose-500 via-pink-500 to-purple-500',
      bgGradient: 'from-rose-50 via-pink-50 to-purple-100',
      link: '/pages/NextGenTechShowcase2026',
      features: ['AI Revolution', 'Quantum Computing', 'Neural Interfaces'],
      badge: 'NEXT-GEN'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative">
      {/* Main Showcase */}
      <div className={`bg-gradient-to-br ${currentContent.bgGradient} rounded-3xl p-12 mb-12 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className={`inline-block px-6 py-3 bg-gradient-to-r ${currentContent.gradient} text-white rounded-full text-sm font-bold mb-6 animate-pulse`}>
              🚀 {currentContent.badge} TECHNOLOGY • 2026
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              {currentContent.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {currentContent.image}
              </div>
              <div className="space-y-3 mb-8">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentContent.gradient} rounded-full`}></div>
                    <span className="text-lg font-semibold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                to={currentContent.link}
                className={`inline-block bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore {currentContent.badge} Technology →
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Why This Matters</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Revolutionary breakthrough in technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Transforms entire industries and sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Creates new opportunities and possibilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Shapes the future of human civilization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {revolutionaryContent.map((content, index) => (
          <div
            key={content.id}
            className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="text-4xl mb-4 text-center">{content.image}</div>
            <h3 className="text-xl font-bold mb-3 text-center">{content.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{content.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {content.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className={`px-3 py-1 bg-gradient-to-r ${content.gradient} text-white text-xs rounded-full`}
                >
                  {feature}
                </span>
              ))}
            </div>
            <Link
              to={content.link}
              className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              Explore →
            </Link>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">🌟 Experience the Future Today</h3>
        <p className="text-xl mb-6 opacity-90">
          Discover revolutionary technologies that are reshaping our world and creating new possibilities for humanity.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/pages/ComprehensiveTechInsights2026"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Explore All Technologies
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;