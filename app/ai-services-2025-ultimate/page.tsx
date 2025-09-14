import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI Services 2025 Ultimate - Revolutionary AI Solutions',
  description: 'Discover our comprehensive suite of AI services for 2025, including automation, machine learning, neural networks, and quantum computing solutions that transform businesses.',
  keywords: ['AI services 2025', 'artificial intelligence solutions', 'AI automation', 'machine learning', 'neural networks', 'quantum computing'],
};

export default function AIServices2025Ultimate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <SEO
        title="AI Services 2025 Ultimate - Revolutionary AI Solutions"
        description="Discover our comprehensive suite of AI services for 2025, including automation, machine learning, neural networks, and quantum computing solutions that transform businesses."
        keywords="AI services 2025, artificial intelligence solutions, AI automation, machine learning, neural networks, quantum computing"
        url="/ai-services-2025-ultimate"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE AI SERVICES 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            AI Services 2025 Ultimate
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our revolutionary AI services suite, featuring cutting-edge 
            automation, machine learning, and quantum computing solutions.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Automation Solutions</h3>
            <p className="text-gray-300 mb-6">
              Intelligent automation systems that streamline operations, reduce costs, 
              and increase efficiency across your entire organization.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Process Automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Workflow Optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Intelligent Decision Making</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Starting at $5,000/month
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Machine Learning & Neural Networks</h3>
            <p className="text-gray-300 mb-6">
              Advanced ML models and neural networks that learn from your data to provide 
              predictive insights and intelligent recommendations.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Deep Learning Models</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Predictive Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Natural Language Processing</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Starting at $8,000/month
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Solutions</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing services that solve complex problems 
              at unprecedented speeds and scale.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Quantum Algorithms</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Optimization Problems</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cryptographic Security</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Starting at $15,000/month
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Fortune 500 Manufacturing</h3>
              <p className="text-gray-200 mb-4">
                Implemented AI automation across 15 production lines, resulting in 40% 
                efficiency increase and $25M annual savings.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-yellow-300">$25M+ Saved</div>
                <div className="text-sm opacity-90">40% Efficiency Gain</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Healthcare Startup</h3>
              <p className="text-gray-200 mb-4">
                Deployed ML models for patient diagnosis, achieving 95% accuracy 
                and reducing diagnosis time by 80%.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-yellow-300">95% Accuracy</div>
                <div className="text-sm opacity-90">80% Time Reduction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Starter Package</h3>
              <div className="text-3xl font-bold mb-4">$5,000<span className="text-lg">/month</span></div>
              <ul className="space-y-2 mb-6 text-sm">
                <li>Basic AI Automation</li>
                <li>Monthly Support</li>
                <li>Standard Analytics</li>
                <li>Email Support</li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all text-center block"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 transform scale-105">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Package</h3>
              <div className="text-3xl font-bold mb-4">$15,000<span className="text-lg">/month</span></div>
              <ul className="space-y-2 mb-6 text-sm">
                <li>Advanced AI Solutions</li>
                <li>24/7 Support</li>
                <li>Real-time Analytics</li>
                <li>Priority Support</li>
                <li>Custom Integrations</li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
              <div className="text-3xl font-bold mb-4">$50,000<span className="text-lg">/month</span></div>
              <ul className="space-y-2 mb-6 text-sm">
                <li>Full AI Suite</li>
                <li>Dedicated Team</li>
                <li>Custom Development</li>
                <li>White-glove Support</li>
                <li>Quantum Computing</li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already leveraging our AI services to achieve 
            unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/ai-2025-ultimate-innovation-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
            >
              View Innovations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}