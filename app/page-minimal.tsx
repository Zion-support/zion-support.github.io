'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive AI and IT solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Advanced artificial intelligence solutions for automation, analytics, and decision-making.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and migration services for modern applications.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your digital assets and data.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI and IT needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;