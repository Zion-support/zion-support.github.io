'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, innovation" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                We are a cutting-edge technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. 
                    We believe technology should be accessible, powerful, and transformative.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    To be the leading provider of AI and IT solutions, helping businesses navigate the digital transformation 
                    landscape with confidence and success.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20 mb-12">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-gray-300 text-sm">Cutting-edge solutions that keep you ahead of the competition</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Speed</h3>
                    <p className="text-gray-300 text-sm">Rapid deployment and implementation of solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                    <p className="text-gray-300 text-sm">Enterprise-grade security and compliance standards</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8">
                  Let's discuss how we can help transform your business with our AI and IT solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
