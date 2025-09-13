import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Zap, Settings, Target, Users, TrendingUp, Shield, Globe, Award, Star, Cpu } from 'lucide-react';

export default function AdvancedAutomationSolutions20252026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium mb-8">
            <Bot className="w-4 h-4 mr-2" />
            Advanced Automation Solutions 2025-2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {" "}Business Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with next-generation automation solutions that work 24/7, learn continuously, and deliver unprecedented efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#solutions" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
            >
              Get Automated
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Solutions Grid */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent automation systems that adapt, learn, and optimize your business processes continuously
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intelligent Process Automation */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Process Automation</h3>
              <p className="text-gray-300 mb-6">
                AI-powered automation that understands context, makes decisions, and continuously optimizes business processes without human intervention.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Context-aware decision making
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Self-optimizing workflows
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Exception handling and recovery
                </li>
              </ul>
            </div>

            {/* Autonomous Customer Service */}
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Customer Service</h3>
              <p className="text-gray-300 mb-6">
                Fully automated customer support systems that provide personalized, empathetic assistance 24/7 with human-level understanding.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Emotional intelligence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Proactive issue resolution
                </li>
              </ul>
            </div>

            {/* Smart Supply Chain */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Supply Chain</h3>
              <p className="text-gray-300 mb-6">
                End-to-end supply chain automation that predicts demand, optimizes inventory, and ensures seamless delivery across global networks.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Predictive demand forecasting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Dynamic inventory optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Real-time logistics coordination
                </li>
              </ul>
            </div>

            {/* Financial Automation */}
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Automation</h3>
              <p className="text-gray-300 mb-6">
                Automated financial management systems that handle accounting, forecasting, and investment decisions with precision and compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Automated bookkeeping
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Risk assessment and management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Regulatory compliance
                </li>
              </ul>
            </div>

            {/* Marketing Automation */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Automation</h3>
              <p className="text-gray-300 mb-6">
                AI-driven marketing systems that create, optimize, and execute campaigns across all channels with personalized messaging and timing.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Personalized content creation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Cross-channel optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Customer journey automation
                </li>
              </ul>
            </div>

            {/* Security Automation */}
            <div className="bg-gradient-to-br from-red-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Automation</h3>
              <p className="text-gray-300 mb-6">
                Autonomous security systems that detect, analyze, and respond to threats in real-time with advanced AI and machine learning.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Threat detection and response
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Automated incident management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Continuous security monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/50 to-teal-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-300">
              Measurable results from our advanced automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Process Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Continuous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced automation solutions tailored for specific industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Manufacturing & Production</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Autonomous production lines
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Predictive maintenance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Quality control automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Supply chain optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Life Sciences</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Patient care automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Medical diagnosis assistance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Drug discovery automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Administrative process automation
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Automated trading systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Risk assessment automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Fraud detection systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Compliance monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Retail & E-commerce</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Inventory management automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Customer service automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Pricing optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Order fulfillment automation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-300">
              Our proven methodology for deploying advanced automation solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 1-2: Assessment & Planning</h3>
                  <p className="text-gray-300">Comprehensive analysis of current processes and identification of automation opportunities</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-teal-800/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 3-4: Design & Development</h3>
                  <p className="text-gray-300">Custom automation solution design and development tailored to your specific needs</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 5-6: Testing & Integration</h3>
                  <p className="text-gray-300">Rigorous testing and seamless integration with existing systems and workflows</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Week 7-8: Deployment & Training</h3>
                  <p className="text-gray-300">Full deployment and comprehensive training for your team on the new automation systems</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-indigo-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Ongoing: Optimization & Support</h3>
                  <p className="text-gray-300">Continuous monitoring, optimization, and support to ensure maximum performance and ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20">
            <Bot className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate Your Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already experiencing the transformative power of advanced automation. Start your automation journey today and unlock unprecedented efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
              >
                Start Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}