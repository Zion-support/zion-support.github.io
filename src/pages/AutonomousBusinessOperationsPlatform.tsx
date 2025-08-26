import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Business Operations Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform that automates and optimizes every aspect of your business operations with AI-powered intelligence." />
        <meta name="keywords" content="autonomous business operations, AI automation, business process automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Bot className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with the world's most advanced autonomous operations platform. 
              AI-powered automation that learns, adapts, and optimizes every aspect of your business 
              operations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Autonomous Operations?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented efficiency and growth with AI-powered business automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Operations</h3>
                <p className="text-gray-300">
                  Your business never sleeps with continuous autonomous operations and monitoring
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Instant Optimization</h3>
                <p className="text-gray-300">
                  Real-time decision making and process optimization based on live data analysis
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Risk Mitigation</h3>
                <p className="text-gray-300">
                  Proactive risk identification and automated response to potential threats
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Human Augmentation</h3>
                <p className="text-gray-300">
                  AI works alongside your team, handling routine tasks while humans focus on strategy
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  Forecast trends and opportunities with advanced machine learning algorithms
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4">
                  <Bot className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Self-Learning AI</h3>
                <p className="text-gray-300">
                  Continuously improving algorithms that learn from every interaction and decision
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive tools and capabilities for complete business automation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Core Automation</h3>
                <div className="space-y-4">
                  {[
                    'Intelligent Process Automation',
                    'Workflow Orchestration',
                    'Document Processing & Analysis',
                    'Email & Communication Management',
                    'Calendar & Meeting Optimization',
                    'Task Assignment & Tracking',
                    'Performance Monitoring',
                    'Quality Assurance Automation'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Advanced Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Natural Language Processing',
                    'Computer Vision Integration',
                    'Predictive Analytics Engine',
                    'Real-time Data Processing',
                    'Multi-language Support',
                    'API Integration Hub',
                    'Custom Workflow Builder',
                    'Advanced Reporting Dashboard'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform operations across every industry with autonomous business automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">
                  Patient scheduling, medical record management, and diagnostic assistance automation
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Finance</h3>
                <p className="text-gray-300">
                  Risk assessment, fraud detection, and automated trading operations
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300">
                  Supply chain optimization, quality control, and predictive maintenance
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Retail</h3>
                <p className="text-gray-300">
                  Inventory management, customer service, and personalized marketing automation
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
                <p className="text-gray-300">
                  Student enrollment, course scheduling, and personalized learning paths
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Legal</h3>
                <p className="text-gray-300">
                  Document review, case research, and contract analysis automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already experiencing the future of autonomous operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg">
                Start Your Journey
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                Book Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousBusinessOperationsPlatform;