import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords: 'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <header className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full">
              🏢 Enterprise AI Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Trusted by 500+ Fortune 500 Companies Worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">🚀</span>
              <span>Start Your Transformation</span>
            </Link>
            
            <Link
              href="/services"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore Services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Enterprise-Grade AI Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed for Fortune 500 companies, delivering unprecedented results and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Autonomous Operations',
                description: 'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction.',
                metrics: ['99.99% Uptime', '95% Cost Reduction', 'Zero-Touch Operations']
              },
              {
                icon: '🧠',
                title: 'AI Business Intelligence',
                description: 'Advanced analytics delivering 30,000% ROI and real-time insights.',
                metrics: ['30,000% ROI', 'Real-time Insights', 'Predictive Analytics']
              },
              {
                icon: '⚛️',
                title: 'Quantum Computing',
                description: 'Next-generation quantum solutions for complex enterprise challenges.',
                metrics: ['Quantum Security', 'Advanced Processing', 'Future-Ready']
              },
              {
                icon: '🔒',
                title: 'Cybersecurity',
                description: 'AI-powered security operations with 99.9% threat detection.',
                metrics: ['99.9% Detection', 'Zero Breaches', '24/7 Monitoring']
              },
              {
                icon: '☁️',
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud solutions optimized for enterprise workloads.',
                metrics: ['Auto-Scaling', 'Global Reach', 'Cost Optimized']
              },
              {
                icon: '📊',
                title: 'Data Analytics',
                description: 'Transform data into actionable insights with AI-powered analytics.',
                metrics: ['Real-time Processing', 'Advanced ML', 'Actionable Insights']
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-cyan-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Fortune 500 Clients' },
              { value: '30,000%', label: 'Average ROI' },
              { value: '99.99%', label: 'System Uptime' },
              { value: '$750B+', label: 'Cost Savings' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Enterprise?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Join 500+ Fortune 500 companies achieving unprecedented results with our AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📞</span>
              <span>Get Expert Consultation</span>
            </Link>
            
            <Link
              href="/services"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>View All Services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}