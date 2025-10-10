'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI and IT solutions." />
        <meta name="keywords" content="about, company, mission, AI, technology, IT solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                Pioneering the future of technology with cutting-edge AI and IT solutions
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    To revolutionize the way businesses operate by providing innovative AI-powered solutions 
                    that drive efficiency, growth, and transformation across all industries.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    To be the global leader in AI and IT solutions, empowering organizations to 
                    achieve unprecedented success through intelligent automation and digital transformation.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">Why Choose Zion Tech Group?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-gray-300">Cutting-edge AI and technology solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
                    <p className="text-gray-300">Lightning-fast, optimized solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
                    <p className="text-gray-300">Trusted by industry leaders worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
