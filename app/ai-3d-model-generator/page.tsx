import React from 'react';
import { Helmet } from 'react-helmet-async';

const AI3DModelGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI 3D Model Generator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI 3D Model Generator for creating 3D models from text descriptions, images, and sketches. AI-powered 3D modeling and design." />
        <meta name="keywords" content="AI 3D model generator, 3D modeling AI, 3D design, 3D printing, CAD design, 3D visualization, AI design tools" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-model-generator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI 3D Model Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered 3D model generation from text descriptions, images, and sketches
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Text-to-3D Generation</h2>
                <p className="text-gray-300 mb-4">
                  Generate detailed 3D models from simple text descriptions using advanced AI algorithms and neural networks.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Natural language processing</li>
                  <li>• 3D geometry generation</li>
                  <li>• Texture and material mapping</li>
                  <li>• High-quality mesh output</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Image-to-3D Conversion</h2>
                <p className="text-gray-300 mb-4">
                  Convert 2D images and sketches into detailed 3D models with AI-powered depth estimation and modeling.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 2D to 3D conversion</li>
                  <li>• Depth estimation</li>
                  <li>• Shape reconstruction</li>
                  <li>• Detail enhancement</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">3D Modeling</h3>
                  <p className="text-gray-300 text-sm">AI-powered 3D model creation and editing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Texture Generation</h3>
                  <p className="text-gray-300 text-sm">AI-generated textures and materials for 3D models</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Export Options</h3>
                  <p className="text-gray-300 text-sm">Multiple export formats for 3D printing and visualization</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI 3D Model Generator
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;