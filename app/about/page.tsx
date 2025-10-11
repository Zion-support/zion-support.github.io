'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI, IT, and Micro SaaS solutions." />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI, IT services, and Micro SaaS solutions that transform businesses and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in the transformative power of AI and technology to solve complex business challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet current needs but also prepare organizations for the future.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To be the global leader in AI-powered business solutions, helping organizations of all sizes leverage technology to achieve unprecedented success and growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a world where technology seamlessly integrates with business processes, creating opportunities for innovation and growth that were previously unimaginable.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of industry experts with years of experience in AI, machine learning, and enterprise technology solutions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300">
                  We stay at the forefront of technology trends, constantly innovating and adapting to provide the most advanced solutions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Client Success</h3>
                <p className="text-gray-300">
                  Our success is measured by our clients' success. We are committed to delivering solutions that drive real business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
