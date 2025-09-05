import React from 'react';
import Head from 'next/head';
import Layout from './components/Layout';

export default function TalentPage() {
  return (
    <Layout title="Talent - ZionTech Group" description="Join our team of experts">
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for talented individuals to join our mission of transforming businesses through technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Senior AI/ML Engineer</h3>
                <p className="text-gray-600 mt-2">Remote • Full-time</p>
                <p className="text-gray-700 mt-3">
                  Lead the development of cutting-edge AI solutions and machine learning models.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Cloud Solutions Architect</h3>
                <p className="text-gray-600 mt-2">Remote • Full-time</p>
                <p className="text-gray-700 mt-3">
                  Design and implement scalable cloud infrastructure solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Full-Stack Developer</h3>
                <p className="text-gray-600 mt-2">Remote • Full-time</p>
                <p className="text-gray-700 mt-3">
                  Build innovative web applications using modern technologies.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}