import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ExternalLink, Star, Clock, Users, Zap, Brain, Cpu, Shield } from 'lucide-react';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling thought-controlled computing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Thought-to-text conversion',
        'Direct neural data processing',
        'Enhanced cognitive capabilities',
        'Seamless human-AI integration'
      ],
      stats: {
        accuracy: '99.7%',
        speed: '1000x faster',
        users: '50K+',
        rating: 4.9
      },
      demo: '/demos/neural-interface',
      learnMore: '/tech/neural-interfaces'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum-AI Fusion',
      description: 'Revolutionary combination of quantum computing and artificial intelligence',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Quantum machine learning algorithms',
        'Exponential speed improvements',
        'Advanced pattern recognition',
        'Unprecedented problem-solving'
      ],
      stats: {
        accuracy: '99.9%',
        speed: '10,000x faster',
        users: '25K+',
        rating: 4.8
      },
      demo: '/demos/quantum-ai',
      learnMore: '/tech/quantum-ai'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Business Systems',
      description: 'Self-managing AI systems that run entire business operations',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      features: [
        'Self-optimizing workflows',
        'Predictive decision making',
        'Autonomous resource allocation',
        'Continuous performance improvement'
      ],
      stats: {
        accuracy: '99.5%',
        speed: '24/7 operation',
        users: '100K+',
        rating: 4.9
      },
      demo: '/demos/autonomous-systems',
      learnMore: '/tech/autonomous-systems'
    },
    {
      id: 'quantum-security',
      title: 'Quantum Security Protocols',
      description: 'Unbreakable encryption using quantum principles',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Quantum key distribution',
        'Unbreakable encryption',
        'Future-proof security',
        'Zero-trust architecture'
      ],
      stats: {
        accuracy: '100%',
        speed: 'Real-time',
        users: '75K+',
        rating: 4.7
      },
      demo: '/demos/quantum-security',
      learnMore: '/tech/quantum-security'
    }
  ];

  const currentTech = technologies[activeTech];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
          </h2>
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
            2025 Showcase
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the cutting-edge technologies that will define the future of business, 
            computing, and human-machine interaction.
          </p>
        </div>

        {/* Technology Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {tech.title}
              </button>
            );
          })}
        </div>

        {/* Technology Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Technology Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentTech.color} mr-4`}>
                  <currentTech.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentTech.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {currentTech.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTech.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {currentTech.stats.accuracy}
                  </div>
                  <div className="text-gray-400 text-sm">Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {currentTech.stats.speed}
                  </div>
                  <div className="text-gray-400 text-sm">Performance</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {currentTech.stats.users}
                  </div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center text-2xl font-bold text-white mb-1">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    {currentTech.stats.rating}
                  </div>
                  <div className="text-gray-400 text-sm">Rating</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  to={currentTech.demo}
                  className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Demo
                </Link>
                <Link
                  to={currentTech.learnMore}
                  className="flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Learn More
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Technology Visualization */}
            <div className="relative">
              <div className={`w-full h-96 bg-gradient-to-br ${currentTech.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                </div>
                
                {/* Technology Icon */}
                <div className="relative z-10">
                  <currentTech.icon className="w-32 h-32 text-white/80" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
              </div>

              {/* Technology Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                NEW 2025
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                  activeTech === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveTech(index)}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {tech.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {tech.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{tech.stats.rating}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/revolutionary-tech-2025"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Technologies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechShowcase2025;