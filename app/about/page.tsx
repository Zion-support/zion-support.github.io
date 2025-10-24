import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of AI and IT solutions for modern businesses.
            Transform your business with our cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To democratize AI and IT solutions, making advanced technology accessible 
              to businesses of all sizes. We believe in the power of innovation to 
              transform industries and create meaningful impact.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the global leader in AI and IT solutions, empowering businesses 
              to achieve unprecedented growth and efficiency through cutting-edge technology.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;