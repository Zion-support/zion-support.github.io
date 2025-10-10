'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                About Zion Tech Group
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  We are a leading technology company specializing in AI and IT solutions for businesses of all sizes.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-6">
                  To be the global leader in AI-powered business solutions, transforming industries through technology.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                <p className="text-gray-700 mb-6">
                  Innovation, integrity, excellence, and customer success are at the core of everything we do.
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
