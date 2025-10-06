import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Brain, Zap, Shield } from 'lucide-react';

const GlobalAITransformationHub: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Synthetic Consciousness',
      description: 'True AI awareness and decision-making capabilities',
      link: '/ai/consciousness'
    },
    {
      icon: Zap,
      title: 'Quantum Edge Processing',
      description: 'Sub-millisecond processing speeds for real-time applications',
      link: '/ai/quantum-processing'
    },
    {
      icon: Target,
      title: 'Autonomous Mesh',
      description: 'Self-organizing systems that adapt and optimize automatically',
      link: '/ai/autonomous-mesh'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable protection using quantum encryption',
      link: '/ai/quantum-security'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
              🌍 GLOBAL AI TRANSFORMATION HUB
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of artificial intelligence with our revolutionary transformation hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {feature.description}
              </p>
              
              <Link
                to={feature.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:translate-x-1"
              >
                Explore
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/ai-transformation"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your AI Transformation Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalAITransformationHub;