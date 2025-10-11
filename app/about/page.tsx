'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of AI and IT solutions for modern businesses. 
            We help companies transform their operations with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To empower businesses with innovative AI and IT solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that transform how businesses operate and compete.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Expert AI and IT professionals
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Proven track record of success
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Cutting-edge technology solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                24/7 support and maintenance
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
