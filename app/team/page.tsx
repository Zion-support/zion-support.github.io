'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Meet the talented individuals behind Zion Tech Group's innovative AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">K</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kleber</h3>
            <p className="text-gray-600 mb-4">CEO & Founder</p>
            <p className="text-sm text-gray-500">
              Visionary leader with 15+ years in AI and technology innovation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Team</h3>
            <p className="text-gray-600 mb-4">Machine Learning Engineers</p>
            <p className="text-sm text-gray-500">
              Experts in cutting-edge AI technologies and neural networks.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">D</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dev Team</h3>
            <p className="text-gray-600 mb-4">Software Engineers</p>
            <p className="text-sm text-gray-500">
              Full-stack developers creating robust and scalable solutions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;