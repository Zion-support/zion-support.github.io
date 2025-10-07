import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords: 'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <header className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full mb-6">
            <span>🏢 Enterprise AI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Enterprise Solutions
          </h1>
          
          <p className="text-xl text-gray-300 mb-4">
            Trusted by 500+ Fortune 500 Companies Worldwide
          </p>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
            500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Schedule Enterprise Demo</span>
            </Link>
            <Link 
              href="#solutions"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>View Solutions</span>
            </Link>
=======
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl">🏢</span>
              <span className="text-cyan-400 font-bold text-xl">
                Enterprise AI Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-2xl">🏢</span>
            <span className="text-yellow-400 font-bold text-xl ml-2">
              Enterprise AI Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
              Enterprise Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Trusted by 500+ Fortune 500 Companies Worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">🚀</span>
              <span>Start Your Transformation</span>
            </Link>
            
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve $100M+ cost savings, 
              500% productivity gains, and 99.9% system uptime with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Schedule Enterprise Demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="#solutions"
                className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>View Solutions</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0181
=======
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
          </div>
        </div>
      </header>

<<<<<<< HEAD
      {/* Solutions Section */}
<<<<<<< HEAD
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-gray-300">Comprehensive AI solutions for enterprise needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300 mb-6">Automate complex business processes with AI</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• 95% Process Automation</div>
                <div>• 400% ROI Increase</div>
                <div>• 99.9% Accuracy</div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">Advanced analytics and business intelligence</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Real-time Insights</div>
                <div>• Predictive Analytics</div>
                <div>• Custom Dashboards</div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6">Scalable cloud infrastructure and services</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Multi-cloud Strategy</div>
                <div>• 99.99% Uptime</div>
                <div>• Cost Optimization</div>
=======
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions for enterprise needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300 mb-6">
                Automate complex business processes with AI-powered workflows that deliver 95% efficiency gains and 60% cost reduction.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency Gain:</span>
                  <span className="text-cyan-400 font-bold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost Reduction:</span>
                  <span className="text-green-400 font-bold">60%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Advanced analytics and insights for decision making with real-time processing of 10B+ data points daily.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Processed:</span>
                  <span className="text-purple-400 font-bold">10B+ daily</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Accuracy:</span>
                  <span className="text-green-400 font-bold">99.9%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade security and compliance with quantum-resistant encryption and zero-trust architecture.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Level:</span>
                  <span className="text-red-400 font-bold">Military Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-green-400 font-bold">99.99%</span>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0181
              </div>
=======
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise-Grade AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed for Fortune 500 companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-healing infrastructure and autonomous operations achieving 99.99% uptime.
              </p>
              <div className="text-cyan-400 font-bold">99.99% Uptime</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum computing solutions for complex enterprise challenges.
              </p>
              <div className="text-cyan-400 font-bold">10x Performance</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence</h3>
              <p className="text-gray-300 mb-6">
                AI-powered analytics delivering unprecedented insights and competitive advantage.
              </p>
              <div className="text-cyan-400 font-bold">30,000% ROI</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ Fortune 500 companies achieving breakthrough results with our AI solutions.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <span>Get Started Today</span>
          </Link>
=======
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Zion Tech Group. All rights reserved.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-0181
=======
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Fortune 500 companies achieving unprecedented success with our enterprise AI solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">🚀</span>
              <span>Get Started Today</span>
            </Link>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e382
        </div>
      </section>
    </div>
  );
}