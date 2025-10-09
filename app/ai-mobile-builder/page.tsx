import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIMobileBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group</title>
        <meta name="description" content="Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Mobile App Builder
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Build native mobile apps with AI assistance
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Create professional mobile applications without coding. Our AI-powered builder 
            generates native iOS and Android apps from your specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Drag & Drop Interface</h3>
            <p className="text-gray-300 mb-4">
              Build your app visually with our intuitive drag-and-drop interface. No coding required.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $199/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">AI Code Generation</h3>
            <p className="text-gray-300 mb-4">
              Our AI generates clean, optimized code for both iOS and Android platforms automatically.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $299/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Instant Deployment</h3>
            <p className="text-gray-300 mb-4">
              Deploy your app to app stores instantly with our automated publishing pipeline.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $149/month</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button energy-pulse hover:scale-105 transition-all duration-300"
          >
            Start Building
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIMobileBuilderPage;