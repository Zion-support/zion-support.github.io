import React from 'react';
import { Helmet } from 'react-helmet-async';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Reality Solutions - Zion Tech Group</title>
        <meta name="description" content="Immersive VR solutions for training, entertainment, education, and enterprise. Custom VR development, VR applications, and virtual reality experiences." />
        <meta name="keywords" content="virtual reality, VR solutions, VR development, immersive VR, VR applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Virtual Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create immersive virtual worlds with our cutting-edge VR solutions. 
              Transform training, entertainment, and business operations with virtual reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Immersive Virtual Experiences
              </h2>
              <p className="text-gray-300 mb-6">
                Our VR solutions transport users to fully immersive virtual environments. 
                From training simulations to entertainment experiences, we create 
                compelling VR applications that engage and inspire.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Custom VR applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Multi-platform support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Realistic 3D environments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Interactive experiences
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">VR Capabilities</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-400">200+</div>
                    <div className="text-sm text-gray-300">VR Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-400">15+</div>
                    <div className="text-sm text-gray-300">Platforms</div>
                  </div>
                </div>
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Experience VR
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">VR Training</h3>
              <p className="text-gray-300">
                Immersive training simulations for safety, skills development, and education.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Entertainment VR</h3>
              <p className="text-gray-300">
                Engaging VR games, experiences, and entertainment content.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Architecture VR</h3>
              <p className="text-gray-300">
                Virtual walkthroughs and architectural visualization for real estate and design.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Step Into the Future
            </h2>
            <p className="text-gray-300 mb-8">
              Create unforgettable virtual experiences with our VR solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start VR Project
              </button>
              <button className="border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Showcase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;