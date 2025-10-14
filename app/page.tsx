import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions, 
            dedicated to transforming businesses through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-gray-300">
                Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Consulting</h3>
              <p className="text-gray-300">
                Expert consulting services to help you navigate the digital landscape and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage
