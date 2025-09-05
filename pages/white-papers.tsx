import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function WhitePapersPage() {
  return (
    <Layout title="White Papers - Zion Tech Group" description="Access our comprehensive collection of technical white papers and research documents">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our comprehensive white papers on technology trends and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI in Enterprise: A Complete Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement AI solutions in enterprise environments with real-world case studies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: Feb 2024</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Download
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