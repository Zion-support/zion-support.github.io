'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
        <meta name="keywords" content="about, company, AI solutions, IT services, team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to empower organizations with innovative technology that drives growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300 text-lg">
                We believe in the power of artificial intelligence and advanced technology to solve complex business challenges 
                and create opportunities for sustainable growth in the digital age.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Innovation and continuous learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Client success and satisfaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Ethical AI and responsible technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Collaboration and transparency</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Pioneering new technologies and approaches to solve complex business challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">Delivering high-quality solutions that exceed expectations and drive results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-300">Building long-term relationships based on trust, collaboration, and mutual success.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;