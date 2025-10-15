import React from 'react';
import { Helmet } from 'react-helmet-async';

const AI3DModelGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI 3D Model Generator - Zion Tech Group</title>
        <meta name="description" content="Generate stunning 3D models with our advanced AI 3D Model Generator. Create professional 3D assets for games, AR/VR, and visualization projects." />
        <meta name="keywords" content="AI 3D model generator, 3D modeling, AI design, 3D assets, game development, AR VR" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI 3D Model Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models with the power of artificial intelligence. 
              Generate professional 3D assets for games, AR/VR, and visualization projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Revolutionary 3D Creation
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI 3D Model Generator uses cutting-edge machine learning algorithms 
                to create detailed, professional-quality 3D models from simple text descriptions 
                or reference images.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Text-to-3D model generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Image-to-3D conversion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Multiple format exports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Real-time preview
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Try It Now</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Describe your 3D model..."
                  className="w-full p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Generate 3D Model
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Game Development</h3>
              <p className="text-gray-300">
                Create characters, props, and environments for your games with AI-powered 3D modeling.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">AR/VR Applications</h3>
              <p className="text-gray-300">
                Generate immersive 3D content for augmented and virtual reality experiences.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Architecture Visualization</h3>
              <p className="text-gray-300">
                Create detailed architectural models and visualizations for presentations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of developers and designers using our AI 3D Model Generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;