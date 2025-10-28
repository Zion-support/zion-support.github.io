import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: '5G Mobile Applications | Zion Tech Group',
  description: 'Revolutionary 5G mobile applications for enhanced connectivity and performance',
  keywords: '5G, mobile applications, connectivity, performance, mobile development',
  openGraph: {
    title: '5G Mobile Applications | Zion Tech Group',
    description: 'Revolutionary 5G mobile applications for enhanced connectivity and performance',
    type: 'website',
  },
};

export default function FiveGMobileApplicationsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              5G Mobile Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your mobile experience with cutting-edge 5G applications 
              designed for ultra-fast connectivity and enhanced performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ultra-Fast Streaming</h3>
              <p className="text-gray-600">
                Experience seamless 4K video streaming and real-time content delivery 
                with 5G&apos;s ultra-low latency.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Gaming</h3>
              <p className="text-gray-600">
                Play cloud-based games with minimal latency and maximum responsiveness 
                for competitive gaming experiences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AR/VR Integration</h3>
              <p className="text-gray-600">
                Immersive augmented and virtual reality experiences powered by 
                5G&apos;s high bandwidth and low latency.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Mobile Experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our 5G mobile applications are designed to leverage the full potential 
              of next-generation connectivity for businesses and consumers alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}