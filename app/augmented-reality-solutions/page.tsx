import React from 'react';
import { Helmet } from 'react-helmet-async';

const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Augmented Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AR solutions for enterprise, retail, education, and healthcare. Custom AR applications, AR development, and immersive augmented reality experiences." />
        <meta name="keywords" content="augmented reality, AR solutions, AR development, enterprise AR, AR applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge augmented reality solutions. 
              Create immersive experiences that engage customers and enhance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Immersive AR Experiences
              </h2>
              <p className="text-gray-300 mb-6">
                Our AR solutions blend digital content with the real world to create 
                engaging, interactive experiences. From retail visualization to 
                industrial training, we build AR applications that drive results.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Custom AR applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Cross-platform compatibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Real-time object tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Cloud-based AR content
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AR Capabilities</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">100+</div>
                    <div className="text-sm text-gray-300">AR Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">50+</div>
                    <div className="text-sm text-gray-300">Industries</div>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View AR Demo
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Retail AR</h3>
              <p className="text-gray-300">
                Virtual try-on, product visualization, and interactive shopping experiences.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Industrial Training</h3>
              <p className="text-gray-300">
                AR-powered training simulations for manufacturing and maintenance operations.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Healthcare AR</h3>
              <p className="text-gray-300">
                Medical visualization, surgical planning, and patient education tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-gray-300 mb-8">
              Partner with us to create innovative AR solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start AR Project
              </button>
              <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AugmentedRealitySolutionsPage;