import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords: 'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                🏢 Enterprise AI Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
              500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Schedule Enterprise Demo
              </Link>
              <Link 
                href="#solutions"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-colors duration-200">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-400">Comprehensive AI solutions for enterprise needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Automation</h3>
              <p className="text-gray-400">Automate complex business processes with AI-driven solutions that reduce costs and improve efficiency.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-400">Advanced analytics and insights for data-driven decision making across your organization.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-4">Security</h3>
              <p className="text-gray-400">Enterprise-grade security and compliance solutions to protect your critical business data.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}