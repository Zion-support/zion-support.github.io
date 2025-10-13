<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function MobileApplications5GPage() {
=======
export default function FiveGmobileapplicationsPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta
          name="description"
          content="Next-generation mobile applications powered by 5G technology for enhanced user experiences."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">5G Mobile Applications</h1>
          <p className="text-gray-300 mb-8">
            Develop cutting-edge mobile applications that leverage the full power of 5G networks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AR/VR Apps</h3>
              <p className="text-gray-300">
                Create immersive augmented and virtual reality experiences with 5G.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Gaming</h3>
              <p className="text-gray-300">
                Build ultra-low latency gaming applications for mobile devices.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Live Streaming</h3>
              <p className="text-gray-300">
                Enable high-quality live streaming and video conferencing apps.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Start Development
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
=======
        <title>5G Mobile Applications | Zion Tech Group</title>
        <meta name="description" content="5g mobile applications solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">5G Mobile Applications</h1>
        <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-004e
      </div>
    </div>
  );
}