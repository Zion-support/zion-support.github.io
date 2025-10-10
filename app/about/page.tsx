'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to help companies leverage technology to achieve unprecedented growth 
                and efficiency.
              </p>
              <p className="text-gray-300 mb-6">
                With over 10 years of experience in the industry, we have successfully delivered 
                solutions to Fortune 500 companies, startups, and enterprises worldwide.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Expert team with proven track record
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Custom solutions tailored to your needs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;