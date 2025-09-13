import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Breakthrough Content Showcase - Revolutionary AI Solutions',
  description: 'Discover the most advanced AI breakthroughs of 2025. Interactive demos, case studies, and revolutionary technologies that are transforming industries worldwide.',
  keywords: ['AI 2025', 'Breakthrough', 'Revolutionary AI', 'Interactive Demo', 'Case Studies', 'Technology Showcase'],
  openGraph: {
    title: 'AI 2025 Breakthrough Content Showcase - Revolutionary AI Solutions',
    description: 'Discover the most advanced AI breakthroughs of 2025. Interactive demos, case studies, and revolutionary technologies.',
    images: ['/og-ai-2025-showcase.png'],
  },
};

export default function AI2025BreakthroughContentShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            AI 2025 Breakthrough
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Content Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI technologies of 2025. Interactive demos, 
            real-world case studies, and breakthrough innovations that are reshaping our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#interactive-demos" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Interactive Demos
            </Link>
            <Link 
              href="#case-studies" 
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section id="interactive-demos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive AI Demos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience cutting-edge AI technologies through interactive demonstrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demo 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Interface Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience direct brain-computer interaction with our revolutionary neural interface technology.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Interactive Demo Placeholder</span>
                </div>
              </div>
              <Link 
                href="/demos/neural-interface" 
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Demo
              </Link>
            </div>

            {/* Demo 2 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum AI Processing</h3>
              <p className="text-gray-600 mb-6">
                Witness quantum-enhanced AI processing that solves complex problems in seconds.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Quantum Demo Placeholder</span>
                </div>
              </div>
              <Link 
                href="/demos/quantum-ai" 
                className="inline-block w-full text-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Try Demo
              </Link>
            </div>

            {/* Demo 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Explore self-learning AI systems that adapt and evolve in real-time.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Autonomous Demo Placeholder</span>
                </div>
              </div>
              <Link 
                href="/demos/autonomous-systems" 
                className="inline-block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations delivering unprecedented ROI and transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Manufacturing Revolution</h3>
                  <p className="text-gray-600">Global Manufacturing Corp</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-green-600">8,500% ROI</div>
                <div className="text-green-700">in 6 months</div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented AI-driven autonomous manufacturing systems that increased efficiency by 300% 
                while reducing costs by 85%. The system now operates 24/7 with minimal human intervention.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Autonomous Systems</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Predictive Maintenance</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Quality Control</span>
              </div>
              <Link 
                href="/case-studies/manufacturing-revolution-2025" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read Full Case Study
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise Transformation</h3>
                  <p className="text-gray-600">Fortune 500 Company</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-purple-600">15,000% ROI</div>
                <div className="text-purple-700">in 8 months</div>
              </div>
              <p className="text-gray-600 mb-6">
                Deployed quantum-enhanced AI systems across all business units, resulting in 
                unprecedented operational efficiency and market dominance in their industry.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Quantum AI</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Data Analytics</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Process Automation</span>
              </div>
              <Link 
                href="/case-studies/enterprise-transformation-2025" 
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Read Full Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Breakthrough Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most advanced AI technologies available in 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'Neural Synthesis', desc: '99.7% accuracy in complex reasoning' },
              { icon: '⚛️', title: 'Quantum Processing', desc: 'Exponential speed improvements' },
              { icon: '🤖', title: 'Autonomous Learning', desc: 'Self-improving AI systems' },
              { icon: '🌐', title: 'Edge Intelligence', desc: 'Real-time processing anywhere' },
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already experiencing the AI 2025 revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-implementation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}