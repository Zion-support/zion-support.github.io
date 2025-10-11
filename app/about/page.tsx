'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI and IT solutions." />
        <meta name="keywords" content="about, company, mission, AI, IT solutions, technology" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                Pioneering the future of technology with cutting-edge AI and IT solutions
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and IT solutions. 
                    Our mission is to democratize advanced technology and make it accessible to organizations of all sizes.
                  </p>
                  <p className="text-gray-300">
                    We believe in the power of artificial intelligence to solve complex problems, streamline operations, 
                    and create new opportunities for growth and innovation.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    To be the leading provider of AI-powered solutions that drive digital transformation and create 
                    sustainable competitive advantages for our clients.
                  </p>
                  <p className="text-gray-300">
                    We envision a future where technology seamlessly integrates with human potential, creating 
                    unprecedented possibilities for progress and prosperity.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20 mb-16">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-gray-300">Pushing boundaries and exploring new frontiers in technology</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                    <p className="text-gray-300">Working together to achieve extraordinary results</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                    <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's work together to unlock your organization's full potential with our AI and IT solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started Today
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
