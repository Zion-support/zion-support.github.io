import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AIRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 BREAKTHROUGH TECHNOLOGY 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            The AI Revolution: 2025 Edition
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how artificial intelligence is reshaping industries, creating new opportunities, 
            and transforming the way we work, live, and innovate in 2025.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start AI Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* AI Trends Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous AI Agents</h3>
            <p className="text-gray-300 mb-6">
              Self-managing AI systems that can make decisions, execute tasks, and adapt to new situations without human intervention.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Intelligent process automation</li>
              <li>• Self-healing systems</li>
              <li>• Adaptive learning algorithms</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Edge AI Computing</h3>
            <p className="text-gray-300 mb-6">
              Bringing AI processing to the edge of networks for real-time decision making and reduced latency.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Real-time data processing</li>
              <li>• Reduced bandwidth usage</li>
              <li>• Enhanced privacy & security</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Generative AI 2.0</h3>
            <p className="text-gray-300 mb-6">
              Next-generation AI models that can create, design, and innovate across multiple domains with unprecedented accuracy.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Multi-modal generation</li>
              <li>• Creative problem solving</li>
              <li>• Cross-domain expertise</li>
            </ul>
          </div>
        </div>

        {/* Industry Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Transformation</h2>
            <p className="text-xl text-blue-100">See how AI is revolutionizing key sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-semibold text-white mb-2">Healthcare</h4>
              <p className="text-blue-100 text-sm">AI-powered diagnostics, personalized treatment, and drug discovery</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-semibold text-white mb-2">Manufacturing</h4>
              <p className="text-blue-100 text-sm">Predictive maintenance, quality control, and smart factories</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Finance</h4>
              <p className="text-blue-100 text-sm">Fraud detection, algorithmic trading, and risk assessment</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="text-lg font-semibold text-white mb-2">Transportation</h4>
              <p className="text-blue-100 text-sm">Autonomous vehicles, traffic optimization, and logistics</p>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Predictions for 2025</h2>
            <p className="text-xl text-gray-600">What to expect in the coming year</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-First Companies</h3>
                  <p className="text-gray-600">Organizations will restructure around AI capabilities, with AI becoming the primary driver of business strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-AI Collaboration</h3>
                  <p className="text-gray-600">New interfaces and workflows will emerge that seamlessly blend human creativity with AI capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethical AI Framework</h3>
                  <p className="text-gray-600">Comprehensive regulations and ethical guidelines will be established for AI development and deployment.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join the AI Revolution?</h3>
              <p className="text-gray-600 mb-6">
                Partner with Zion Tech Group to implement cutting-edge AI solutions that drive real business results.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule AI Consultation
                </button>
                <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                  Download AI Strategy Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$2.3T</div>
            <div className="text-gray-300">Global AI Market Value</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">85%</div>
            <div className="text-gray-300">Companies Using AI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">300%</div>
            <div className="text-gray-300">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50M</div>
            <div className="text-gray-300">AI-Powered Jobs Created</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies already leveraging AI to gain competitive advantages, 
            reduce costs, and unlock new opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey Today
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIRevolution2025;