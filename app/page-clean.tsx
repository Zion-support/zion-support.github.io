import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Advanced AI, Automation, and Cloud Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Insights →
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">50x</div>
                <div className="text-xs text-blue-300">Performance Boost</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
                <div className="text-xs text-purple-300">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$2B+</div>
                <div className="text-xs text-green-300">Value Delivered</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">24/7</div>
                <div className="text-xs text-orange-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <Link href="/services/ai-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Seamless migration to cloud platforms with zero downtime and optimized performance.
              </p>
              <Link href="/services/cloud-migration" className="text-green-400 hover:text-green-300 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-white">DevOps & SRE</h3>
              <p className="text-gray-300 mb-6">
                Modern DevOps practices and Site Reliability Engineering for robust, scalable systems.
              </p>
              <Link href="/services/devops-sre" className="text-purple-400 hover:text-purple-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our latest research, case studies, and industry insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-white">AI Trends 2024</h3>
              <p className="text-gray-300 mb-6">
                Discover the latest trends and breakthroughs in artificial intelligence that are shaping the future.
              </p>
              <Link href="/blog/ai-trends-2024" className="text-purple-400 hover:text-purple-300 font-semibold">
                Read Article →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-4 text-white">Enterprise Case Study</h3>
              <p className="text-gray-300 mb-6">
                How we helped a Fortune 500 company achieve 300% ROI through AI implementation.
              </p>
              <Link href="/case-studies/enterprise-ai-success" className="text-purple-400 hover:text-purple-300 font-semibold">
                View Case Study →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-white">Cloud Best Practices</h3>
              <p className="text-gray-300 mb-6">
                Essential strategies for successful cloud migration and optimization.
              </p>
              <Link href="/blog/cloud-best-practices" className="text-purple-400 hover:text-purple-300 font-semibold">
                Read Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have accelerated their digital transformation with our AI and cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}