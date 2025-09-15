import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 ROBOTICS REVOLUTION • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced Robotics 2026
          </h1>
          <p className="text-2xl text-slate-200 max-w-4xl mx-auto mb-8">
            Experience the future of robotics with autonomous systems, humanoid robots, and intelligent automation that's transforming every industry
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🤖 Explore Robotics →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold text-lg">
              🔧 Technical Specs
            </button>
          </div>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-600/30 to-gray-600/30 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Humanoid Robots</h3>
            <p className="text-slate-200 text-center">
              Advanced humanoid robots with natural movement, emotional intelligence, and human-like interaction capabilities
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">AI-Powered Autonomy</h3>
            <p className="text-cyan-200 text-center">
              Fully autonomous robots with advanced AI that can learn, adapt, and make complex decisions in real-time
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Swarm Intelligence</h3>
            <p className="text-emerald-200 text-center">
              Coordinated robot swarms working together to accomplish complex tasks with unprecedented efficiency
            </p>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-gray-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🔧 Advanced Robotics Technologies</h2>
            <p className="text-xl text-gray-200">Revolutionary innovations in robotic systems and automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🤖 Soft Robotics</h4>
                <p className="text-gray-300">
                  Flexible, adaptive robots made from soft materials that can safely interact with humans and delicate objects.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">👁️ Computer Vision</h4>
                <p className="text-gray-300">
                  Advanced visual recognition systems enabling robots to see, understand, and navigate complex environments.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🦾 Haptic Feedback</h4>
                <p className="text-gray-300">
                  Tactile sensing technology allowing robots to feel and manipulate objects with human-like precision.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🌐 Edge Computing</h4>
                <p className="text-gray-300">
                  On-board processing power enabling real-time decision making without cloud connectivity.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🔄 Self-Healing Materials</h4>
                <p className="text-gray-300">
                  Robotic components that can repair themselves and adapt to damage for extended operational life.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🎯 Predictive Maintenance</h4>
                <p className="text-gray-300">
                  AI-powered systems that predict and prevent equipment failures before they occur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏭 Industry Applications</h2>
            <p className="text-xl text-gray-300">Transforming every sector with robotic automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-600/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🏭</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Manufacturing</h3>
              <p className="text-slate-200 text-sm text-center">
                Fully automated production lines with collaborative robots and quality control
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🏥</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Healthcare</h3>
              <p className="text-cyan-200 text-sm text-center">
                Surgical robots, rehabilitation assistants, and patient care automation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🚗</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Transportation</h3>
              <p className="text-emerald-200 text-sm text-center">
                Autonomous vehicles, delivery drones, and smart logistics systems
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🏠</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Home Automation</h3>
              <p className="text-orange-200 text-sm text-center">
                Smart home robots for cleaning, security, and personal assistance
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">📊 Robotics Performance Metrics</h2>
            <p className="text-xl text-indigo-200">Measurable improvements in efficiency and capability</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-400 mb-2">95%</div>
              <div className="text-white font-semibold mb-2">Accuracy Rate</div>
              <div className="text-slate-200 text-sm">In complex tasks</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Operation</div>
              <div className="text-cyan-200 text-sm">Continuous operation capability</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <div className="text-emerald-200 text-sm">In operational expenses</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">10x</div>
              <div className="text-white font-semibold mb-2">Speed Increase</div>
              <div className="text-orange-200 text-sm">In processing tasks</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-600/30 to-gray-600/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate the Future?</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Join the robotics revolution and discover how advanced automation can transform your business and improve efficiency across all operations.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🤖 Start Automation Journey
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold text-lg">
                📞 Consult Robotics Experts
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedRobotics2026;