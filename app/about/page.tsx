'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions.
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
                We believe technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
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

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium border border-cyan-400 px-8 py-4 rounded-lg"
              >
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;