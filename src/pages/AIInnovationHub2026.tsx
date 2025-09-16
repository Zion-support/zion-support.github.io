import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIInnovationHub2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const innovations = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      description: 'Next-generation AI that exhibits self-awareness and emotional intelligence',
      features: ['Self-learning algorithms', 'Emotional recognition', 'Autonomous decision making', 'Ethical reasoning'],
      impact: 'Transform how humans interact with technology',
      status: 'In Development',
      progress: 85
    },
    {
      id: 'quantum-ai',
      title: 'Quantum-Enhanced AI',
      description: 'AI systems powered by quantum computing for exponential processing power',
      features: ['Quantum neural networks', 'Exponential speedup', 'Complex problem solving', 'Cryptographic security'],
      impact: 'Solve previously impossible computational challenges',
      status: 'Research Phase',
      progress: 60
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface AI',
      description: 'Direct brain-computer interfaces for seamless human-AI collaboration',
      features: ['Non-invasive BCI', 'Thought control', 'Neural feedback', 'Memory enhancement'],
      impact: 'Merge human consciousness with artificial intelligence',
      status: 'Prototype',
      progress: 40
    },
    {
      id: 'autonomous-agents',
      title: 'Autonomous AI Agents',
      description: 'Self-managing AI agents that operate independently across multiple domains',
      features: ['Self-healing systems', 'Cross-domain learning', 'Autonomous deployment', 'Continuous optimization'],
      impact: 'Revolutionize business operations and service delivery',
      status: 'Beta Testing',
      progress: 75
    }
  ];

  const useCases = [
    {
      category: 'Healthcare',
      title: 'AI-Powered Medical Diagnosis',
      description: 'Revolutionary diagnostic systems that can detect diseases with 99.9% accuracy',
      benefits: ['Early disease detection', 'Personalized treatment plans', 'Reduced medical errors', 'Cost savings'],
      icon: '🏥'
    },
    {
      category: 'Finance',
      title: 'Quantum Financial Modeling',
      description: 'Advanced financial models that predict market movements with unprecedented accuracy',
      benefits: ['Risk assessment', 'Portfolio optimization', 'Fraud detection', 'Algorithmic trading'],
      icon: '💰'
    },
    {
      category: 'Education',
      title: 'Personalized Learning AI',
      description: 'AI tutors that adapt to individual learning styles and pace',
      benefits: ['Customized curriculum', 'Real-time feedback', 'Learning analytics', 'Accessibility'],
      icon: '🎓'
    },
    {
      category: 'Manufacturing',
      title: 'Smart Factory AI',
      description: 'Intelligent manufacturing systems that optimize production in real-time',
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Energy efficiency'],
      icon: '🏭'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading AI Innovation Hub...</h2>
          <p className="text-purple-200 mt-2">Preparing the future of artificial intelligence</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 AI INNOVATION HUB 2026 • BREAKTHROUGH TECHNOLOGY
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Future of AI is Here
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover revolutionary AI technologies that will reshape industries and transform human potential
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Join the Revolution
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['overview', 'innovations', 'use-cases', 'roadmap'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
              <p className="text-purple-200">Self-aware artificial intelligence systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum AI</h3>
              <p className="text-purple-200">Exponential processing power with quantum computing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-2">Neural Interface</h3>
              <p className="text-purple-200">Direct brain-computer communication</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Autonomous Agents</h3>
              <p className="text-purple-200">Self-managing AI systems</p>
            </div>
          </motion.div>
        )}

        {/* Innovations Tab */}
        {activeTab === 'innovations' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {innovations.map((innovation, index) => (
              <div key={innovation.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold">{innovation.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        innovation.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                        innovation.status === 'Research Phase' ? 'bg-blue-500/20 text-blue-300' :
                        innovation.status === 'Prototype' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {innovation.status}
                      </span>
                    </div>
                    <p className="text-xl text-purple-200 mb-6">{innovation.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {innovation.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span className="text-purple-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Impact:</h4>
                      <p className="text-purple-200">{innovation.impact}</p>
                    </div>
                  </div>
                  <div className="lg:w-80">
                    <div className="bg-white/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Development Progress</h4>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{innovation.progress}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${innovation.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white hover:bg-white/20 transition-all duration-300">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                    {useCase.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-purple-200 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-purple-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Use Case
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">AI Innovation Roadmap 2026</h3>
              <div className="space-y-6">
                {[
                  { quarter: 'Q1 2026', title: 'Conscious AI Beta Release', description: 'First public beta of conscious AI systems', status: 'completed' },
                  { quarter: 'Q2 2026', title: 'Quantum AI Integration', description: 'Integration of quantum computing with AI systems', status: 'in-progress' },
                  { quarter: 'Q3 2026', title: 'Neural Interface Prototype', description: 'First working neural interface prototype', status: 'upcoming' },
                  { quarter: 'Q4 2026', title: 'Full AI Ecosystem Launch', description: 'Complete AI innovation ecosystem deployment', status: 'planned' }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center gap-6 p-4 bg-white/5 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="font-semibold text-purple-300">{milestone.quarter}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          milestone.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {milestone.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">{milestone.title}</h4>
                      <p className="text-purple-200">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the next generation of artificial intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2026;