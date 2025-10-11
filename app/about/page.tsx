'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI and IT solutions." />
        <meta name="keywords" content="about, company, mission, AI, IT solutions, technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology through innovative AI and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge 
                artificial intelligence and information technology solutions. Our mission is to bridge 
                the gap between complex technology and practical business applications.
              </p>
              <p className="text-gray-300 text-lg">
                We believe in the power of technology to solve real-world problems and create 
                opportunities for growth, innovation, and success.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading provider of AI and IT solutions that empower businesses to 
                achieve unprecedented levels of efficiency, innovation, and success in the digital age.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-cyan-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible with technology
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">
                We deliver high-quality solutions that exceed expectations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-300">
                We work closely with our clients to achieve their goals
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can help your business achieve its goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
