'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Clock, Shield, Zap } from 'lucide-react';

const MicroSaascontentGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro Saascontent Generator - Zion Tech Group</title>
        <meta name="description" content="Professional micro saascontent generator services by Zion Tech Group. Expert solutions for your business needs." />
        <meta name="keywords" content="micro saascontent generator, technology, solutions, business, professional" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro Saascontent Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Professional micro saascontent generator solutions designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Technology</h3>
                <p className="text-gray-300">Cutting-edge solutions powered by the latest technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and reliability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast & Efficient</h3>
                <p className="text-gray-300">Optimized for speed and performance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn more about our micro saascontent generator solutions.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaascontentGeneratorPage;