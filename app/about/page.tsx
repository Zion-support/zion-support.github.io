'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for businesses worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the future with AI-powered solutions, cutting-edge IT services, and innovative Micro SAAS platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Zion Tech Group, we are dedicated to transforming businesses through innovative technology solutions. 
                Our mission is to empower organizations with cutting-edge AI, IT services, and Micro SAAS platforms 
                that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in the power of technology to solve complex business challenges and create opportunities 
                for sustainable growth in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 cyber-card-enhanced">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Innovation and Excellence
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Client-Centric Approach
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Continuous Learning
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Ethical Technology Use
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our experts for a free consultation and discover how our solutions can accelerate your success
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 futuristic-btn glow"
            >
              Get Free Consultation
            </a>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
