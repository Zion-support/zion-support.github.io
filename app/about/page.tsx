'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for businesses worldwide." />
        <meta name="keywords" content="about us, company, team, mission, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About Zion Tech Group
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in the power of artificial intelligence and advanced technology to solve complex business challenges 
                and create opportunities for our clients to thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading provider of AI and IT solutions, recognized globally for our innovation, 
                  expertise, and commitment to client success.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovation and Excellence</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Integrity and Transparency</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
