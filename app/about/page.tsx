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
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the future of AI and IT solutions with cutting-edge technology and innovative approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We are dedicated to transforming businesses through advanced AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives 
                innovation, efficiency, and growth.
              </p>
              <p className="text-gray-300">
                With over 500+ successful projects and a team of expert professionals, 
                we deliver solutions that exceed expectations and deliver measurable results.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Innovation and Excellence
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Client-Centric Approach
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Continuous Learning
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Ethical Technology
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
