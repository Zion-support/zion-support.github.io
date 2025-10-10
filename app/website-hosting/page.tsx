'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Shield, BarChart, Brain, Target, Users, Zap } from 'lucide-react';

const WebsiteHostingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Website Hosting Solutions | Zion Tech Group</title>
        <meta name="description" content="Reliable and high-performance website hosting services. Cloud hosting, dedicated servers, and managed hosting solutions for optimal website performance." />
        <meta name="keywords" content="website hosting, cloud hosting, dedicated servers, managed hosting, web hosting, hosting solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/website-hosting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Website Hosting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Reliable and high-performance website hosting services. Cloud hosting, 
                dedicated servers, and managed hosting for optimal website performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Hosting Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Hosting</h3>
                <p className="text-gray-300">
                  Scalable cloud hosting solutions that automatically adjust resources 
                  based on your website's traffic and performance needs.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Dedicated Servers</h3>
                <p className="text-gray-300">
                  High-performance dedicated servers with full control and 
                  maximum security for mission-critical applications.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Managed Hosting</h3>
                <p className="text-gray-300">
                  Fully managed hosting services with 24/7 monitoring, 
                  maintenance, and support for worry-free operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Host Your Website with Confidence
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our hosting experts to find the perfect hosting solution 
              for your website's needs and performance requirements.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebsiteHostingPage;