import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AutonomousSystemsShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-lg font-bold mb-6">
            🤖 AUTONOMOUS SYSTEMS 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Autonomous Systems Showcase
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the future of autonomous technology with self-learning systems that operate independently, 
            adapt to changing environments, and deliver unprecedented efficiency and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Live Demo
            </button>
            <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold">
              📊 ROI Calculator
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              📖 Technical Specs
            </button>
          </div>
        </div>

        {/* Autonomous System Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤖 Autonomous System Types</h2>
            <p className="text-xl text-gray-600">Self-operating systems for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Business Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Self-managing systems that handle complex business workflows, make decisions, 
                and adapt to changing requirements without human intervention.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Efficiency Gain</span>
                  <span className="font-semibold">+400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Error Reduction</span>
                  <span className="font-semibold">-95%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Automate Business →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Vehicles</h3>
              <p className="text-gray-600 mb-6">
                Self-driving vehicles with advanced AI that navigate complex environments, 
                make split-second decisions, and ensure passenger safety.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Safety Rating</span>
                  <span className="font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Fuel Efficiency</span>
                  <span className="font-semibold">+30%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Vehicles →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Industrial Automation</h3>
              <p className="text-gray-600 mb-6">
                Self-maintaining industrial systems that optimize production, predict failures, 
                and adapt to changing manufacturing requirements autonomously.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Uptime</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Cost Savings</span>
                  <span className="font-semibold">-40%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Automate Industry →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-4">Smart Home Systems</h3>
              <p className="text-gray-600 mb-6">
                Intelligent home automation that learns user preferences, optimizes energy usage, 
                and provides seamless living experiences.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Energy Savings</span>
                  <span className="font-semibold">-50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">User Satisfaction</span>
                  <span className="font-semibold">98%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Smart Home →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Network Management</h3>
              <p className="text-gray-600 mb-6">
                Self-healing network infrastructure that automatically detects issues, 
                reroutes traffic, and optimizes performance without human intervention.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Network Uptime</span>
                  <span className="font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Response Time</span>
                  <span className="font-semibold">< 1ms</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Manage Networks →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Security Systems</h3>
              <p className="text-gray-600 mb-6">
                Autonomous security systems that detect threats, respond to incidents, 
                and adapt to new attack patterns in real-time.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Threat Detection</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Response Time</span>
                  <span className="font-semibold">< 100ms</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Secure Autonomously →
              </button>
            </div>
          </div>
        </section>

        {/* Autonomous Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🧠 Autonomous Capabilities</h2>
            <p className="text-xl text-gray-600">Advanced AI features that enable true autonomy</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Self-Learning AI</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Autonomous systems that continuously learn from their environment, improve their performance, 
                and adapt to new challenges without human intervention.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Learning</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">+50%</div>
                  <div className="text-sm text-gray-600">Improvement/Month</div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Explore Self-Learning →
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-3xl font-bold mb-4">Real-Time Decision Making</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Instant decision-making capabilities that process complex scenarios, 
                evaluate multiple options, and choose optimal actions in milliseconds.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">< 1ms</div>
                  <div className="text-sm text-gray-600">Decision Time</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">99.9%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                View Decision Engine →
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-3xl font-bold mb-4">Adaptive Behavior</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Systems that dynamically adjust their behavior based on changing conditions, 
                user feedback, and environmental factors for optimal performance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Adaptation Rules</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">Real-time</div>
                  <div className="text-sm text-gray-600">Adjustments</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                See Adaptation →
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-3xl font-bold mb-4">Self-Maintenance</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Autonomous systems that monitor their own health, predict failures, 
                and perform maintenance tasks without human intervention.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">-90%</div>
                  <div className="text-sm text-gray-600">Downtime</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">Predictive</div>
                  <div className="text-sm text-gray-600">Maintenance</div>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Explore Maintenance →
              </button>
            </div>
          </div>
        </section>

        {/* Autonomous Systems Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Autonomous Systems Timeline</h2>
            <p className="text-xl text-gray-600">Our roadmap to full autonomy</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-blue-600"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q1 2025</div>
                    <h3 className="text-xl font-bold mb-2">Level 3 Autonomy</h3>
                    <p className="text-gray-600">Conditional automation with human oversight</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q2 2025</div>
                    <h3 className="text-xl font-bold mb-2">Level 4 Autonomy</h3>
                    <p className="text-gray-600">High automation with limited human intervention</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q3 2025</div>
                    <h3 className="text-xl font-bold mb-2">Level 5 Autonomy</h3>
                    <p className="text-gray-600">Full automation across all conditions</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q4 2025</div>
                    <h3 className="text-xl font-bold mb-2">Super Autonomy</h3>
                    <p className="text-gray-600">Beyond human-level autonomous capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📊 Autonomous Performance Metrics</h2>
              <p className="text-xl opacity-90">Proven results from autonomous systems</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-lg opacity-90">Uptime</div>
                <div className="text-sm opacity-75">Autonomous Operations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">-80%</div>
                <div className="text-lg opacity-90">Human Intervention</div>
                <div className="text-sm opacity-75">Required Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">+400%</div>
                <div className="text-lg opacity-90">Efficiency</div>
                <div className="text-sm opacity-75">vs Manual Processes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-lg opacity-90">Operation</div>
                <div className="text-sm opacity-75">Continuous Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Embrace Autonomy?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transform your operations with autonomous systems that work smarter, faster, and more reliably than ever before. 
              Join the autonomous revolution and unlock unprecedented efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🤖 Start Autonomous Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                📞 Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                💬 Talk to Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AutonomousSystemsShowcase2025;