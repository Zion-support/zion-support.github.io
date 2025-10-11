'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, company, mission, vision, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with innovative AI solutions and cutting-edge IT services
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize advanced technology by providing accessible, scalable, and innovative AI and IT solutions 
                that empower businesses to thrive in the digital age. We believe technology should be a force for good, 
                driving positive change and creating opportunities for all.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in AI-driven solutions, setting the standard for innovation, reliability, 
                and customer success. We envision a world where artificial intelligence and technology seamlessly 
                integrate into every aspect of business and life.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in 2020, Zion Tech Group emerged from a simple yet powerful belief: technology has the 
                potential to transform the world, but only when it's accessible, understandable, and truly beneficial 
                to those who use it.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                What started as a small team of passionate technologists has grown into a comprehensive technology 
                company serving clients across multiple industries. Our journey has been marked by continuous learning, 
                innovation, and an unwavering commitment to excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to be at the forefront of AI and IT innovation, helping businesses of all sizes 
                leverage cutting-edge technology to achieve their goals and drive meaningful change in their industries.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, exploring new technologies and approaches.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and work closely with our clients as partners.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We strive for the highest quality in everything we do, from code to customer service.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
