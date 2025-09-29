import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target
} from 'lucide-react';

export default function AIAnalyticsPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI & Analytics
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Analytics Platform
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your data into actionable insights with our advanced AI analytics platform. 
            Real-time processing, predictive modeling, and automated reporting that drives business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#demo"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">85%</div>
              <div className="text-sm text-gray-400">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to unlock the power of your data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-6">
                Process and analyze data in real-time with sub-second response times. 
                Get instant insights as your data flows in.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Live dashboards
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Stream processing
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Instant alerts
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-purple-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Predictive Modeling</h3>
              <p className="text-gray-300 mb-6">
                Leverage machine learning to predict future trends, identify patterns, 
                and make data-driven decisions with confidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  ML algorithms
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Trend forecasting
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Anomaly detection
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="bg-green-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Automated Insights</h3>
              <p className="text-gray-300 mb-6">
                Get automatically generated insights and reports delivered to your inbox. 
                No manual analysis required.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Auto-generated reports
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Smart recommendations
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Scheduled delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-white mb-2">$199<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400 mb-6">Perfect for small teams</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Up to 10GB data</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">5 users</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Basic analytics</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold text-center block transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-blue-600/20 rounded-xl p-8 border-2 border-blue-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-white mb-2">$499<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400 mb-6">For growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Up to 100GB data</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">25 users</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Predictive modeling</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center block transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-white mb-2">Custom</div>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Unlimited data</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Unlimited users</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-gray-300">24/7 support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold text-center block transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI analytics platform to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}