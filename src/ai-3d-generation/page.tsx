'use client'

import React from 'react';

const Page: React.FC = () => {
  const features = [
    '3D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI 3D Generation - ZionTechGroup"
        description="Revolutionary AI-powered 3D generation with advanced modeling, animation, and rendering capabilities."
        keywords={['AI 3D generation', '3D modeling', 'animation', 'rendering', 'VR/AR']}
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI 3D Generation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning 3D models, animations, and immersive experiences with our advanced AI-powered tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Creating
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  View Gallery
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Powerful Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature}</h3>
                    <p className="text-gray-300">
                      Advanced AI-powered {feature.toLowerCase()} with professional-grade quality.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="cyber-card p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Create in 3D?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of creators using our AI-powered 3D generation tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button px-8 py-4 text-lg">
                    Get Started
                  </button>
                  <button className="cyber-button-outline px-8 py-4 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;