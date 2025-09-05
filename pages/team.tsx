import React from 'react';
import Head from 'next/head';
import Layout from './components/Layout';

export default function TeamPage() {
  return (
    <Layout title="Our Team - ZionTech Group" description="Meet our expert team">
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who make ZionTech Group a leader in technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">SC</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Chen</h3>
              <p className="text-blue-600 font-medium">Chief Technology Officer</p>
              <p className="text-gray-600 mt-3">
                Leading expert in artificial intelligence with 15+ years of experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">MR</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Rodriguez</h3>
              <p className="text-green-600 font-medium">Head of Engineering</p>
              <p className="text-gray-600 mt-3">
                Cloud architecture specialist with expertise in scalable systems.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">EJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emily Johnson</h3>
              <p className="text-purple-600 font-medium">VP of Operations</p>
              <p className="text-gray-600 mt-3">
                Operations leader with a focus on client success and team development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}