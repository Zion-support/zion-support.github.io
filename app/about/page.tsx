'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions that transform businesses through cutting-edge technology and innovation." />
        <meta name="keywords" content="about us, company, team, AI solutions, IT services, technology" />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                We are a leading provider of AI and IT solutions that transform businesses through cutting-edge technology, innovation, and exceptional service delivery.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    To empower businesses with advanced AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, powerful, and transformative.
                  </p>
                  <p className="text-gray-300">
                    Our mission is to bridge the gap between cutting-edge technology and practical business applications, making AI and IT solutions work for real-world challenges.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    To be the global leader in AI and IT solutions, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology seamlessly integrates with business operations.
                  </p>
                  <p className="text-gray-300">
                    We strive to create a world where every business can leverage the power of AI and advanced IT solutions to achieve their goals and exceed their expectations.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                    <p className="text-gray-300">We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Expertise</h3>
                    <p className="text-gray-300">Our team of experts brings years of experience in AI, machine learning, and IT solutions.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
                    <p className="text-gray-300">We work closely with our clients as partners, ensuring their success is our success.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI and IT solutions can help your business achieve its goals.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
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
