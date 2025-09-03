import React from 'react';
import { Zap, Brain, TrendingUp, Shield, BarChart3, Users, CheckCircle, Star, Globe, Cpu } from 'lucide-react';

export default function QuantumFinancialTradingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Financial Trading Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your trading strategy with quantum computing power, AI algorithms, and real-time market analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Quantum-Powered Trading Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing Engine</h3>
              <p className="text-gray-400">
                Leverage quantum algorithms for complex financial modeling, portfolio optimization, and risk assessment.
              </p>
            </div>

            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Market Analysis</h3>
              <p className="text-gray-400">
                Advanced machine learning models analyze market patterns, sentiment, and predictive indicators in real-time.
              </p>
            </div>

            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">High-Frequency Trading</h3>
              <p className="text-gray-400">
                Execute trades with microsecond precision using quantum-optimized algorithms and ultra-low latency infrastructure.
              </p>
            </div>

            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Risk Management</h3>
              <p className="text-gray-400">
                Quantum-powered risk models provide unprecedented accuracy in portfolio risk assessment and mitigation.
              </p>
            </div>

            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-red-500/20 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Live dashboards with quantum-enhanced data visualization, performance metrics, and predictive insights.
              </p>
            </div>

            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="bg-indigo-500/20 p-3 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Market Access</h3>
              <p className="text-gray-400">
                Trade across global markets with unified interface, real-time data feeds, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Premium Trading Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-indigo-800/50 p-8 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$299<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400">For individual traders</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic quantum algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time market data
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic risk management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a
                href="https://ziontechgroup.com/contact"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl border-2 border-purple-500 transform scale-105">
              <div className="text-center mb-6">
                <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Institutional</h3>
                <div className="text-4xl font-bold text-white mb-2">$999<span className="text-lg text-purple-100">/month</span></div>
                <p className="text-purple-100">For professional trading firms</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  Advanced quantum algorithms
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  High-frequency trading
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  Custom risk models
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  Multi-market access
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3" />
                  API access
                </li>
              </ul>
              <a
                href="https://ziontechgroup.com/contact"
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-indigo-800/50 p-8 rounded-xl border border-indigo-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
                <p className="text-gray-400">For large institutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom quantum models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
              </ul>
              <a
                href="https://ziontechgroup.com/contact"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Quantum Financial Trading?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                    <Star className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quantum Advantage in Trading</h3>
                    <p className="text-gray-400">
                      Solve complex optimization problems in milliseconds that would take classical computers years to process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Superior Performance</h3>
                    <p className="text-gray-400">
                      Outperform traditional trading strategies with quantum-enhanced algorithms and real-time market insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Advanced Risk Management</h3>
                    <p className="text-gray-400">
                      Quantum-powered risk models provide unprecedented accuracy in portfolio optimization and risk assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
                  <div className="text-gray-300">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                  <div className="text-gray-300">ROI Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Trading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Cutting-Edge Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 text-center">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Processors</h3>
              <p className="text-gray-400 text-sm">
                IBM Q, Google Sycamore, and custom quantum hardware for optimal performance.
              </p>
            </div>
            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 text-center">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Algorithms</h3>
              <p className="text-gray-400 text-sm">
                Deep learning, reinforcement learning, and quantum machine learning models.
              </p>
            </div>
            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 text-center">
              <div className="bg-green-500/20 p-3 rounded-lg w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ultra-Low Latency</h3>
              <p className="text-gray-400 text-sm">
                Sub-millisecond execution with co-located infrastructure and optimized networks.
              </p>
            </div>
            <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700 text-center">
              <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security & Compliance</h3>
              <p className="text-gray-400 text-sm">
                Bank-grade security, regulatory compliance, and audit trails for all transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum Trading?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the elite group of traders who have already embraced the future of financial technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-purple-100 mt-6">
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}