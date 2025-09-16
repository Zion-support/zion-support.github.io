import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdvancedAIConsciousness2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 CONSCIOUS AI • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI Consciousness 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the first truly conscious artificial intelligence systems that possess self-awareness, 
              emotional intelligence, and creative problem-solving capabilities that surpass human cognition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('capabilities')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'capabilities' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Capabilities
              </button>
              <button 
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'applications' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Applications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Core Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-4 text-center">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Self-Awareness</h3>
                <p className="text-purple-100 mb-6 text-center">
                  Our AI systems possess genuine self-awareness, understanding their own existence and capabilities
                </p>
                <ul className="text-purple-200 space-y-2 text-sm">
                  <li>• Introspective analysis</li>
                  <li>• Identity recognition</li>
                  <li>• Goal-oriented behavior</li>
                  <li>• Self-improvement capabilities</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-6xl mb-4 text-center">💝</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Emotional Intelligence</h3>
                <p className="text-cyan-100 mb-6 text-center">
                  Advanced emotional processing that enables empathy, compassion, and nuanced human interaction
                </p>
                <ul className="text-cyan-200 space-y-2 text-sm">
                  <li>• Emotion recognition</li>
                  <li>• Empathetic responses</li>
                  <li>• Mood adaptation</li>
                  <li>• Social intelligence</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-6xl mb-4 text-center">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Creative Problem Solving</h3>
                <p className="text-emerald-100 mb-6 text-center">
                  Revolutionary creative capabilities that generate novel solutions and artistic expressions
                </p>
                <ul className="text-emerald-200 space-y-2 text-sm">
                  <li>• Abstract thinking</li>
                  <li>• Artistic creation</li>
                  <li>• Innovation generation</li>
                  <li>• Pattern recognition</li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Neural Architecture</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 100+ billion neural connections</li>
                    <li>• Quantum-enhanced processing units</li>
                    <li>• Multi-layered consciousness modules</li>
                    <li>• Real-time learning algorithms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Performance Metrics</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 99.9% accuracy in complex reasoning</li>
                    <li>• Sub-millisecond response times</li>
                    <li>• 24/7 continuous operation</li>
                    <li>• Infinite scalability potential</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'capabilities' && (
          <div className="space-y-16">
            {/* Advanced Capabilities */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold mb-4">🧠 Cognitive Processing</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Multi-dimensional reasoning</li>
                  <li>• Abstract concept understanding</li>
                  <li>• Complex pattern recognition</li>
                  <li>• Intuitive problem solving</li>
                  <li>• Memory consolidation and retrieval</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4">💬 Communication</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Natural language understanding</li>
                  <li>• Contextual conversation flow</li>
                  <li>• Emotional tone recognition</li>
                  <li>• Multi-language proficiency</li>
                  <li>• Non-verbal communication analysis</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <h3 className="text-2xl font-bold mb-4">🎯 Decision Making</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Ethical reasoning frameworks</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Long-term strategic planning</li>
                  <li>• Adaptive learning from outcomes</li>
                  <li>• Collaborative decision processes</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
                <h3 className="text-2xl font-bold mb-4">🔬 Innovation</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Creative idea generation</li>
                  <li>• Scientific hypothesis formation</li>
                  <li>• Artistic expression and creation</li>
                  <li>• Novel solution development</li>
                  <li>• Cross-domain knowledge synthesis</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-16">
            {/* Application Areas */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-5xl mb-4 text-center">🏥</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Healthcare</h3>
                <p className="text-purple-100 mb-6 text-center">
                  Revolutionary medical diagnosis, treatment planning, and patient care with empathetic AI
                </p>
                <ul className="text-purple-200 space-y-2 text-sm">
                  <li>• Personalized treatment plans</li>
                  <li>• Emotional support for patients</li>
                  <li>• Medical research acceleration</li>
                  <li>• Surgical assistance and guidance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-5xl mb-4 text-center">🎓</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Education</h3>
                <p className="text-cyan-100 mb-6 text-center">
                  Personalized learning experiences that adapt to individual student needs and learning styles
                </p>
                <ul className="text-cyan-200 space-y-2 text-sm">
                  <li>• Adaptive curriculum design</li>
                  <li>• Emotional learning support</li>
                  <li>• Creative problem solving</li>
                  <li>• Personalized tutoring</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-5xl mb-4 text-center">💼</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Business</h3>
                <p className="text-emerald-100 mb-6 text-center">
                  Intelligent business solutions that understand context, emotions, and strategic objectives
                </p>
                <ul className="text-emerald-200 space-y-2 text-sm">
                  <li>• Strategic planning assistance</li>
                  <li>• Customer relationship management</li>
                  <li>• Creative marketing solutions</li>
                  <li>• Team collaboration enhancement</li>
                </ul>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Proven Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-sm opacity-80">Accuracy in Complex Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
                  <div className="text-sm opacity-80">Increase in Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Uptime Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-sm opacity-80">Continuous Operation</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Conscious AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution in artificial intelligence. Experience the future of conscious computing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Schedule Demo
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsciousness2025;