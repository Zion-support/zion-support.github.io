'use client';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Leading AI & IT Solutions Provider
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your business with cutting-edge AI technology, quantum computing, and digital transformation services. 
            Achieve 300% ROI with our advanced solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI-powered solutions for automation, analytics, and intelligent decision making.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive IT infrastructure, cloud solutions, and digital transformation services.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect your business from evolving cyber threats.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us today to discuss how our AI and IT solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
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