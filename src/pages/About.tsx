
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            The world's first free marketplace dedicated to high-tech and artificial intelligence. 
            Connecting innovators, talent, and cutting-edge technology worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-zion-blue-light/20 rounded-2xl p-8 md:p-12 mb-16 border border-zion-blue-light/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-zion-slate-light max-w-4xl mx-auto">
              To democratize access to cutting-edge technology and AI solutions by creating an open, 
              collaborative platform where innovation thrives and boundaries are pushed every day.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Innovation First</h3>
              <p className="text-zion-slate-light text-center">
                We constantly push the boundaries of what's possible, embracing emerging 
                technologies and creative solutions to solve complex challenges.
              </p>
            </div>

            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Excellence</h3>
              <p className="text-zion-slate-light text-center">
                We maintain the highest standards in everything we do, from code quality 
                to customer service, ensuring exceptional results for our clients.
              </p>
            </div>

            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-green/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Collaboration</h3>
              <p className="text-zion-slate-light text-center">
                We believe in the power of teamwork and partnerships, working closely 
                with clients and stakeholders to achieve shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-zion-blue-light/20 rounded-2xl p-8 md:p-12 mb-16 border border-zion-blue-light/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Zion Tech Group by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-green mb-2">98%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-orange mb-2">5+</div>
              <div className="text-zion-slate-light">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, developers, and businesses who are already 
            transforming the future with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
