'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through innovative technology." />
        <meta name="keywords" content="about us, company, AI solutions, IT services, technology, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions to transform businesses and drive innovation across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To democratize advanced AI and IT technologies, making them accessible to businesses of all sizes while maintaining the highest standards of quality and innovation.
              </p>
              <p className="text-gray-300 text-lg">
                We believe that every organization deserves access to cutting-edge technology that can transform their operations, enhance their capabilities, and drive sustainable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in AI and IT solutions, recognized for our innovation, reliability, and commitment to client success. We envision a world where technology seamlessly integrates with human potential to create unprecedented opportunities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, exploring new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners, understanding their unique challenges and co-creating solutions that drive real value.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards in everything we do, from initial consultation to final delivery and ongoing support.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Expert Team</h3>
                <p className="text-gray-300 mb-6">
                  Our team consists of industry experts with decades of combined experience in AI, machine learning, software development, and IT infrastructure.
                </p>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Proven Track Record</h3>
                <p className="text-gray-300">
                  We've successfully delivered hundreds of projects across various industries, from startups to Fortune 500 companies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300 mb-6">
                  We stay at the forefront of technology trends, implementing the latest tools and frameworks to ensure optimal performance and scalability.
                </p>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Our dedicated support team is available around the clock to ensure your systems run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
