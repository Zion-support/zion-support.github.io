import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function WebinarsPage() {
  return (
    <Layout title="Webinars - Zion Tech Group" description="Learn from industry experts and stay ahead of the latest technology trends">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & Events
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Learn from industry experts and stay ahead of the latest technology trends
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our expert-led sessions to learn about the latest in AI, cloud computing, and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-600">February 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI in Enterprise: Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement AI solutions in enterprise environments with real-world case studies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2:00 PM EST</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}