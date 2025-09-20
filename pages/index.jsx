import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-300">
                Leverage cutting-edge artificial intelligence to automate processes and enhance decision-making.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Optimized performance and scalability to handle your business needs at any scale.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;