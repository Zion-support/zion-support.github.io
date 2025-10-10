'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Shield, Brain, Cloud, Code } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of business through cutting-edge AI and IT solutions
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we believe in the transformative power of artificial intelligence and technology. 
                  Our mission is to help businesses harness the full potential of AI and IT solutions to drive growth, 
                  efficiency, and innovation.
                </p>
                <p className="text-lg text-gray-300">
                  We combine deep technical expertise with a passion for solving complex business challenges, 
                  delivering solutions that not only meet today's needs but anticipate tomorrow's opportunities.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
                <Target className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading provider of AI-powered solutions that transform how businesses operate, 
                  compete, and succeed in the digital age.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our business practices.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in every solution we deliver.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">
                  We aim to make a positive impact on businesses worldwide.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Technical Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of technical expertise and quality.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;