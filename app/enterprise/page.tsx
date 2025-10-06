import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords: 'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                🏢 Enterprise AI Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xl">🚀</span>
                <span>Get Started</span>
              </Link>
              
              <Link
                href="/services"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                <span>Explore Services</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise-Grade AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed for enterprise-scale operations and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description: 'Self-healing infrastructure with 99.99% uptime and zero-touch operations.',
                icon: '🤖',
                metrics: ['99.99% Uptime', '95% Cost Reduction', 'Zero Touch']
              },
              {
                title: 'AI-Powered Analytics',
                description: 'Advanced business intelligence delivering 30,000% ROI through predictive insights.',
                icon: '📊',
                metrics: ['30,000% ROI', '$750B+ Savings', '99.99% Accuracy']
              },
              {
                title: 'Quantum Security',
                description: 'Quantum-resistant cryptography protecting against current and future threats.',
                icon: '🔒',
                metrics: ['99.99% Security', '<1ms Overhead', 'Zero Breaches']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2 text-cyan-400 text-sm">
                      <span>✓</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Fortune 500 companies achieving unprecedented results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xl">📞</span>
                <span>Contact Us Today</span>
              </Link>
              
              <Link
                href="/case-studies"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                <span>View Case Studies</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}