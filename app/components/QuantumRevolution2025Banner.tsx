import React from 'react';
import Link from 'next/link';

const QuantumRevolution2025Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 QUANTUM COMPUTING REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum Computing Business Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <span className="text-yellow-400 font-bold">1200% ROI</span> through quantum computing optimization. 
            The future of business is quantum-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Breakthrough Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">1200%</div>
                  <div className="text-sm opacity-80">ROI Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$180M</div>
                  <div className="text-sm opacity-80">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">78%</div>
                  <div className="text-sm opacity-80">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">65%</div>
                  <div className="text-sm opacity-80">Faster Delivery</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Key Applications:</h4>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Supply Chain Optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Financial Risk Management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Drug Discovery Acceleration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Cybersecurity Enhancement
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Ready for Quantum Transformation?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join the quantum revolution and transform your business with cutting-edge quantum computing solutions.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  Read Complete Guide
                </Link>
                
                <Link
                  href="/case-studies/ai-2025-quantum-optimization-fortune-500-ultimate-success"
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  View Success Story
                </Link>
                
                <Link
                  href="/services/quantum-computing"
                  className="block w-full bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-opacity-30 transition-all duration-300"
                >
                  Explore Quantum Solutions
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm opacity-75">
                Trusted by Fortune 500 companies worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-2xl font-bold text-yellow-400 mb-2">$180B</div>
            <div className="text-sm opacity-80">Quantum Market 2025</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-400 mb-2">67%</div>
            <div className="text-sm opacity-80">Fortune 500 Adopting</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-400 mb-2">$2.3T</div>
            <div className="text-sm opacity-80">Value Creation Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumRevolution2025Banner;