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
      
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a leading provider of AI-powered solutions and IT services, 
              helping businesses transform through innovative technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth and innovation.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300">
                  To be the global leader in AI and IT solutions, transforming how businesses operate.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;