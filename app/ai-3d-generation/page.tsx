'use client';
import React from 'react';
import { CheckCircle, Cube, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'Architecture',
      description: 'Create detailed architectural visualizations',
      icon: Cube,
      examples: ['Building exteriors', 'Interior layouts', 'Landscape designs', 'Urban planning models']
    },
    {
      title: 'Gaming',
      description: 'Generate game assets and characters',
      icon: Palette,
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
    },
    {
      title: 'Product Design',
      description: 'Prototype and visualize products',
      icon: Camera,
      examples: ['Product mockups', 'Packaging designs', 'Industrial equipment', 'Consumer goods']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: Layers,
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI 3D Generation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our AI-powered 3D generation platform.
              </p>
            </section>

            {/* Features Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Amazing 3D Models?
                </h2>
                <p className="text-xl mb-8">
                  Start generating professional 3D models with AI today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Contact Us
                  </a>
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

export default AI3DGenerationPage;