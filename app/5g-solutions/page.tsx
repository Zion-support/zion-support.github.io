import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions for next-generation connectivity and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. 
                Experience ultra-fast connectivity, low latency, and massive IoT capabilities.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-24 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive 5G services to accelerate your digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">5G Network Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Design and deploy robust 5G networks with optimal coverage and performance.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Network planning and optimization</li>
                  <li>• Small cell deployment</li>
                  <li>• Edge computing integration</li>
                </ul>
              </div>

              <div className="bg-slate-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">5G IoT Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Connect millions of devices with ultra-reliable, low-latency 5G networks.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Industrial IoT applications</li>
                  <li>• Smart city solutions</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>

              <div className="bg-slate-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">5G Mobile Applications</h3>
                <p className="text-gray-300 mb-6">
                  Develop next-generation mobile apps that leverage 5G capabilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• AR/VR applications</li>
                  <li>• Ultra-HD video streaming</li>
                  <li>• Real-time collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss how 5G can accelerate your business goals.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}