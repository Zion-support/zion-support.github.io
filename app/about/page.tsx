'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of AI and IT solutions for modern businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6">
              We help companies transform their operations with cutting-edge technology, 
              providing comprehensive AI and IT solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of experts combines deep technical knowledge with business acumen 
              to deliver solutions that not only meet current needs but also scale for future growth.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Expert team with 10+ years experience
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Cutting-edge AI and IT solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                24/7 support and maintenance
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Proven track record of success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
