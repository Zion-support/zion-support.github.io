'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Careers
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Join our team and help shape the future of AI and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Engineer</h3>
            <p className="text-gray-600 mb-4">
              Develop cutting-edge AI solutions and machine learning models.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• 3+ years experience in AI/ML</li>
              <li>• Python, TensorFlow, PyTorch</li>
              <li>• Remote work available</li>
            </ul>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Full Stack Developer</h3>
            <p className="text-gray-600 mb-4">
              Build scalable web applications and microservices.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• 2+ years experience</li>
              <li>• React, Node.js, TypeScript</li>
              <li>• Cloud technologies</li>
            </ul>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;