import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of cutting-edge AI solutions, enterprise automation, and revolutionary technology services. Transform your business with our advanced AI systems.',
  keywords: 'AI solutions, enterprise automation, artificial intelligence, machine learning, technology services, business transformation',
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI Solutions for Enterprise Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI technologies and enterprise solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Automation</h3>
              <p className="text-gray-300">
                Streamline operations with intelligent automation systems that adapt and learn from your business processes.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-white">High Performance</h3>
              <p className="text-gray-300">
                Experience unprecedented speed and efficiency with our optimized AI solutions designed for enterprise scale.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Future Ready</h3>
              <p className="text-gray-300">
                Stay ahead with next-generation technologies that prepare your business for the future of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to revolutionize their operations.
          </p>
          <button className="px-12 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}