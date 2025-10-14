import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AppPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions, AI services, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="technology solutions, AI services, cloud computing, digital transformation, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with innovative solutions, AI-powered services, 
              and cutting-edge digital transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/contact" 
                className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        
          {/* Matrix Rain Effect */}
          <div className="matrix-rain"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">AI & Machine Learning</h3>
              <p className="text-blue-700">Advanced AI solutions to automate and optimize your business processes.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-green-700">Scalable and secure cloud solutions for modern businesses.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Digital Transformation</h3>
              <p className="text-purple-700">Complete digital transformation strategies to modernize your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready toTransform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive your success.
          </p>
          <Link 
            to="/contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default AppPage;