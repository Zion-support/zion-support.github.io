import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AIEnterpriseCopilot2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
            🧭 AI ENTERPRISE COPILOT 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            AI Enterprise Copilot
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business operations with AI-powered copilots that work alongside your teams, 
            automate complex workflows, and provide intelligent insights for better decision-making.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Deploy AI Copilot
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* AI Copilot Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
            <p className="text-gray-300 mb-6">
              AI copilots that understand your business context and automate repetitive tasks 
              while maintaining quality and compliance standards.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Process automation</li>
              <li>• Intelligent routing</li>
              <li>• Quality assurance</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6">
              Advanced machine learning models that predict trends, identify opportunities, 
              and provide actionable insights for strategic decision-making.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Demand forecasting</li>
              <li>• Risk assessment</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Contextual Assistance</h3>
            <p className="text-gray-300 mb-6">
              AI assistants that understand your specific business needs and provide 
              personalized recommendations and support across all departments.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Personalized insights</li>
              <li>• Real-time assistance</li>
              <li>• Cross-functional support</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise AI Solutions</h2>
            <p className="text-xl text-purple-100">Comprehensive AI copilot solutions for every business function</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Finance Copilot</h4>
              <p className="text-purple-100 text-sm">Automated financial analysis, budgeting, and forecasting</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-lg font-semibold text-white mb-2">HR Copilot</h4>
              <p className="text-purple-100 text-sm">Intelligent recruitment, performance management, and employee engagement</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-semibold text-white mb-2">Sales Copilot</h4>
              <p className="text-purple-100 text-sm">Lead scoring, pipeline management, and customer insights</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Operations Copilot</h4>
              <p className="text-purple-100 text-sm">Supply chain optimization, resource planning, and quality control</p>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Copilot Implementation</h2>
            <p className="text-xl text-gray-600">Our proven process for deploying AI copilots in your organization</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">Analyze your current processes and identify automation opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">Create custom AI copilot solutions tailored to your business needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy</h3>
              <p className="text-gray-600">Implement and integrate AI copilots into your existing systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize</h3>
              <p className="text-gray-600">Continuously improve and scale AI copilot capabilities</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-indigo-100">Real impact from AI copilot implementations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">75%</div>
              <div className="text-indigo-100">Reduction in Manual Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60%</div>
              <div className="text-indigo-100">Faster Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">45%</div>
              <div className="text-indigo-100">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-indigo-100">User Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600">AI copilots transforming businesses across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  🏭
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-gray-600">Predictive maintenance, quality control, and supply chain optimization with AI copilots.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  🏥
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                  <p className="text-gray-600">Patient care coordination, medical record analysis, and treatment optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  🏦
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services</h3>
                  <p className="text-gray-600">Risk assessment, fraud detection, and automated customer service.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Deploy AI Copilots?</h3>
              <p className="text-gray-600 mb-6">
                Partner with Zion Tech Group to implement AI copilots that transform your business operations 
                and drive measurable results.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule AI Assessment
                </button>
                <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  Download Implementation Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$2.1B</div>
            <div className="text-gray-300">Cost Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Implementation Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">AI Copilot Availability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business with AI Copilots</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forward-thinking enterprises that are already leveraging AI copilots to automate operations, 
            enhance decision-making, and drive unprecedented growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start AI Copilot Journey
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIEnterpriseCopilot2025;