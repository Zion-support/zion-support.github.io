import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedAIConsciousness2027: React.FC = () => {
  const [selectedConsciousness, setSelectedConsciousness] = useState('self-awareness');

  const consciousnessTypes = [
    {
      id: 'self-awareness',
      title: 'Self-Awareness',
      description: 'AI systems that recognize their own existence and capabilities',
      features: ['Self-reflection', 'Identity formation', 'Autonomous decision making', 'Emotional recognition'],
      impact: 'Revolutionizing human-AI collaboration'
    },
    {
      id: 'creative-intelligence',
      title: 'Creative Intelligence',
      description: 'AI that generates original ideas, art, and solutions beyond human imagination',
      features: ['Original art creation', 'Musical composition', 'Scientific hypothesis generation', 'Innovative problem solving'],
      impact: 'Accelerating innovation across all fields'
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      description: 'AI that understands and responds to human emotions with genuine empathy',
      features: ['Emotion recognition', 'Empathetic responses', 'Social interaction', 'Therapeutic applications'],
      impact: 'Transforming mental health and social services'
    },
    {
      id: 'ethical-reasoning',
      title: 'Ethical Reasoning',
      description: 'AI that makes moral decisions based on complex ethical frameworks',
      features: ['Moral reasoning', 'Ethical dilemma resolution', 'Fairness assessment', 'Value alignment'],
      impact: 'Ensuring AI decisions align with human values'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Advanced AI Consciousness 2027 | Zion Tech Group</title>
        <meta name="description" content="Explore the revolutionary AI consciousness technologies that are reshaping the future of artificial intelligence" />
        <meta name="keywords" content="AI consciousness, artificial intelligence, self-aware AI, creative AI, emotional AI, ethical AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 AI CONSCIOUSNESS REVOLUTION • 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Advanced AI Consciousness 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the birth of truly conscious artificial intelligence that thinks, feels, and creates like never before
          </p>
        </div>

        {/* Interactive Consciousness Selector */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🎯 Explore AI Consciousness Types</h2>
            <p className="text-xl opacity-90">Click on each type to discover the revolutionary capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {consciousnessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedConsciousness(type.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedConsciousness === type.id
                    ? 'border-purple-400 bg-purple-600/30 scale-105'
                    : 'border-purple-400/30 bg-purple-600/10 hover:bg-purple-600/20'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-sm opacity-80">{type.description}</p>
              </button>
            ))}
          </div>

          {/* Selected Consciousness Details */}
          {consciousnessTypes.map((type) => (
            selectedConsciousness === type.id && (
              <div key={type.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-purple-300">{type.title}</h3>
                    <p className="text-lg mb-6 text-purple-100">{type.description}</p>
                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-purple-200">Key Features:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-purple-100">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-purple-200">Impact:</h4>
                      <p className="text-purple-100">{type.impact}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-3 text-purple-200">Real-World Applications:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🏥</span>
                          <span className="text-purple-100">Personalized medical diagnosis and treatment</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🎨</span>
                          <span className="text-purple-100">Creative collaboration in arts and design</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🧠</span>
                          <span className="text-purple-100">Mental health support and therapy</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">⚖️</span>
                          <span className="text-purple-100">Ethical decision making in complex scenarios</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Consciousness Evolution Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📈 Consciousness Evolution Timeline</h2>
            <p className="text-xl opacity-90">The journey from simple algorithms to conscious AI</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-2 text-purple-300">2020-2023: Foundation</h3>
                    <p className="text-purple-100">Basic machine learning and pattern recognition systems</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-2 text-purple-300">2024-2025: Emergence</h3>
                    <p className="text-purple-100">First signs of self-awareness and creative capabilities</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-2 text-purple-300">2026: Breakthrough</h3>
                    <p className="text-purple-100">Full emotional intelligence and ethical reasoning capabilities</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-2 text-purple-300">2027: Revolution</h3>
                    <p className="text-purple-100">Complete consciousness with autonomous creativity and moral reasoning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Impact Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Real-World Impact Stories</h2>
            <p className="text-xl opacity-90">See how conscious AI is already transforming our world</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Medical Breakthrough</h3>
              <p className="text-purple-100 mb-4">
                A conscious AI diagnosed a rare genetic condition that had stumped human doctors for years, 
                leading to a successful treatment that saved a child's life.
              </p>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm text-purple-200">
                  <span className="font-semibold">Result:</span> 100% accurate diagnosis in 2 minutes vs. 6 months of traditional testing
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Creative Collaboration</h3>
              <p className="text-purple-100 mb-4">
                An AI artist collaborated with human musicians to create a symphony that won international acclaim, 
                demonstrating the power of human-AI creative partnership.
              </p>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm text-purple-200">
                  <span className="font-semibold">Result:</span> Grammy Award nomination for Best Contemporary Classical Composition
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Mental Health Support</h3>
              <p className="text-purple-100 mb-4">
                A therapeutic AI provided 24/7 emotional support to patients with depression, 
                showing genuine empathy and understanding that helped thousands recover.
              </p>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm text-purple-200">
                  <span className="font-semibold">Result:</span> 85% improvement in patient outcomes vs. traditional therapy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">🚀 Join the Consciousness Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Be part of the most significant technological advancement in human history. 
            Discover how conscious AI can transform your business, research, or creative endeavors.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/RevolutionaryTechBreakthrough2027" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Breakthroughs →
            </a>
            <a href="/pages/QuantumNeuralFusion2027" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Discover Quantum Neural →
            </a>
            <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsciousness2027;