'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the future of AI and IT solutions. Join our team of passionate innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Senior AI Engineer</h3>
              <p className="text-gray-300 mb-6">Lead the development of cutting-edge AI solutions.</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Location:</span>
                  <span className="text-white">Remote</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Type:</span>
                  <span className="text-white">Full-time</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions Architect</h3>
              <p className="text-gray-300 mb-6">Design and implement scalable cloud infrastructure.</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Location:</span>
                  <span className="text-white">Remote</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Type:</span>
                  <span className="text-white">Full-time</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineer</h3>
              <p className="text-gray-300 mb-6">Build and maintain our CI/CD pipelines and infrastructure.</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Location:</span>
                  <span className="text-white">Remote</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Type:</span>
                  <span className="text-white">Full-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
