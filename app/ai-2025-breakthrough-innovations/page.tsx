import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Globe, TrendingUp, Users, Target } from 'lucide-react';

export default function AI2025BreakthroughInnovations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI 2025 Breakthrough Innovations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover the revolutionary AI technologies that are reshaping industries and creating unprecedented opportunities for growth and transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#innovations" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                Explore Innovations <ArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div id="innovations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the cutting-edge AI innovations that are transforming businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Business Systems */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Business Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-managing AI systems that operate independently, making decisions and executing tasks without human intervention.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Intelligent decision-making engines</li>
                <li>• Self-healing infrastructure</li>
                <li>• Predictive maintenance systems</li>
                <li>• Automated resource optimization</li>
              </ul>
              <Link href="/services/autonomous-systems" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Quantum-Neural Computing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum-Neural Computing</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary fusion of quantum computing and neural networks for unprecedented processing power and intelligence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Quantum-enhanced machine learning</li>
                <li>• Parallel processing at scale</li>
                <li>• Advanced pattern recognition</li>
                <li>• Real-time optimization algorithms</li>
              </ul>
              <Link href="/services/quantum-computing" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* AI Security & Trust */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Security & Trust</h3>
              <p className="text-gray-600 mb-6">
                Advanced security frameworks ensuring AI systems are secure, transparent, and trustworthy in all applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Zero-trust AI architecture</li>
                <li>• Explainable AI decisions</li>
                <li>• Privacy-preserving algorithms</li>
                <li>• Threat detection systems</li>
              </ul>
              <Link href="/services/ai-security" className="text-green-600 font-semibold hover:text-green-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Global AI Networks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global AI Networks</h3>
              <p className="text-gray-600 mb-6">
                Distributed AI systems that operate across multiple locations and organizations for maximum efficiency and collaboration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Federated learning networks</li>
                <li>• Cross-border AI collaboration</li>
                <li>• Distributed computing power</li>
                <li>• Global knowledge sharing</li>
              </ul>
              <Link href="/services/global-ai" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-6">
                Advanced forecasting systems that predict future trends and outcomes with unprecedented accuracy.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Market trend prediction</li>
                <li>• Customer behavior analysis</li>
                <li>• Risk assessment models</li>
                <li>• Performance optimization</li>
              </ul>
              <Link href="/services/predictive-analytics" className="text-orange-600 font-semibold hover:text-orange-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Human-AI Collaboration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-AI Collaboration</h3>
              <p className="text-gray-600 mb-6">
                Seamless integration between human creativity and AI capabilities for optimal results.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• AI-assisted decision making</li>
                <li>• Collaborative work environments</li>
                <li>• Enhanced human capabilities</li>
                <li>• Intuitive AI interfaces</li>
              </ul>
              <Link href="/services/human-ai-collaboration" className="text-pink-600 font-semibold hover:text-pink-800 flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of AI transformation delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Manufacturing Excellence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Implemented autonomous quality control systems resulting in 99.8% defect detection accuracy.
              </p>
              <div className="text-2xl font-bold text-blue-600">$5.2M</div>
              <div className="text-sm text-gray-600">Annual Cost Savings</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Financial Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Deployed predictive analytics for risk assessment, reducing loan defaults by 40%.
              </p>
              <div className="text-2xl font-bold text-purple-600">$12M</div>
              <div className="text-sm text-gray-600">Risk Reduction</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Global Operations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connected distributed AI systems across 15 countries, improving efficiency by 300%.
              </p>
              <div className="text-2xl font-bold text-green-600">$8.7M</div>
              <div className="text-sm text-gray-600">Efficiency Gains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of companies already leveraging AI 2025 breakthrough innovations to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Your AI Journey
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}