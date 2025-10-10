'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions and IT services. Transform your business with cutting-edge technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI and IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, 
                cloud solutions, and comprehensive IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                  <p className="text-gray-300">
                    Advanced artificial intelligence solutions to automate and optimize your business processes.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Cloud Services</h3>
                  <p className="text-gray-300">
                    Scalable cloud infrastructure and migration services for modern businesses.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">IT Consulting</h3>
                  <p className="text-gray-300">
                    Expert IT consulting to help you make the right technology decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;