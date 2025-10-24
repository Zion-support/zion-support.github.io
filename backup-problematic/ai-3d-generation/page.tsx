import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Ai3dGenerationPage() {
  const features = [
    {
      icon: "🎨",
      title: "Text-to-3D Generation",
      description: "Create 3D models from simple text descriptions using advanced AI algorithms."
    },
    {
      icon: "🖼️",
      title: "Image-to-3D Conversion",
      description: "Transform 2D images into detailed 3D models with our cutting-edge technology."
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Generate 3D models in seconds with our optimized AI processing pipeline."
    },
    {
      icon: "🎯",
      title: "High Quality Output",
      description: "Get professional-grade 3D models suitable for games, VR, and AR applications."
    }
  ];

  const useCases = [
    "Game Development",
    "Architecture Visualization",
    "Product Design",
    "Medical Imaging",
    "Education",
    "Entertainment"
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our advanced AI-powered generation technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">AI 3D Generation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with our advanced AI-powered generation technology.
              Create detailed 3D assets from text descriptions or 2D images in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful 3D Generation Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional 3D models with AI assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI 3D generation technology excels in various industries and applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase, index) => (
              <span key={index} className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing 3D Models?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start generating professional 3D models with our AI-powered technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
              View All AI Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}