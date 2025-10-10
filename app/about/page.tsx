'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Globe, Shield, Zap, Brain, BarChart, CheckCircle, Star, Quote, User, Building, GraduationCap, Heart, ThumbsUp, MessageCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              quantum computing, and digital transformation services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive 
                innovation, efficiency, and growth. We believe technology should be 
                accessible, powerful, and transformative.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Advanced AI Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Quantum Computing Expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Digital Transformation</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Brain className="w-6 h-6 text-cyan-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation</h4>
                    <p className="text-gray-300 text-sm">Pushing the boundaries of what's possible</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Security</h4>
                    <p className="text-gray-300 text-sm">Protecting your data and systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-purple-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Collaboration</h4>
                    <p className="text-gray-300 text-sm">Working together for success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;