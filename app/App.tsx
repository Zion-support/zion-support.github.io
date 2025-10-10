'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AppPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>App - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional app services with cutting-edge technology and expert implementation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              App
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional app services with cutting-edge technology and expert implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Implementation</h3>
              <p className="text-gray-600">Professional implementation with industry best practices and cutting-edge technology.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge technology solutions designed for modern businesses and enterprises.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and maintenance services to ensure optimal performance.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our App Services?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                <p className="text-gray-600">Our team brings years of experience and deep industry knowledge to every project.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-gray-600">We deliver measurable results that drive business growth and success.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">Our solutions are designed to grow with your business and adapt to changing needs.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
                <p className="text-gray-600">We provide maximum value with competitive pricing and transparent cost structures.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AppPage;