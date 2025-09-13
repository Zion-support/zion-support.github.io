import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import RevolutionaryFeatures2025 from '../../components/RevolutionaryFeatures2025';
import SuccessStoriesShowcase from '../../components/SuccessStoriesShowcase';

export const metadata: Metadata = {
  title: 'Revolutionary Features 2025 - Advanced AI & Technology Solutions',
  description: 'Discover our groundbreaking features including autonomous AI operations, quantum speed processing, neural interfaces, and predictive analytics. Experience the future of technology.',
  keywords: ['AI Features', 'Quantum Computing', 'Neural Interfaces', 'Autonomous Operations', 'Predictive Analytics'],
};

export default function FeaturesShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Revolutionary Features 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of technology with our groundbreaking features that are reshaping industries worldwide. 
            From autonomous AI operations to quantum speed processing, discover what's possible when innovation meets excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-2xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <div className="text-2xl font-bold text-green-400 mb-2">Real-time</div>
              <div className="text-gray-300">Neural Control</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <div className="text-2xl font-bold text-orange-400 mb-2">5-Year</div>
              <div className="text-gray-300">Predictions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <RevolutionaryFeatures2025 />

      {/* Success Stories */}
      <SuccessStoriesShowcase />

      {/* Technology Comparison */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              📊 Why Choose Our Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary features deliver unprecedented performance and results compared to traditional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Traditional Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-3">❌</span>
                  Manual processes requiring constant oversight
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-3">❌</span>
                  Limited processing power and speed
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-3">❌</span>
                  Reactive problem-solving approach
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-red-400 mr-3">❌</span>
                  High operational costs and complexity
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Our Revolutionary Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✅</span>
                  Fully autonomous operations 24/7
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✅</span>
                  Quantum-powered processing at light speed
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✅</span>
                  Predictive analytics and proactive solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✅</span>
                  Cost-effective with massive ROI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6 text-white">
              🚀 Experience the Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait for the future to arrive. Transform your business with our revolutionary features and join the technological revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo-request" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                🎯 Try Features Demo
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                💬 Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}