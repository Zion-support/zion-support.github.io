import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Generation',
      description: 'Create 3D models from text descriptions or 2D images using advanced AI algorithms',
      icon: <Cube className="w-8 h-8" />,
      examples: ['Text-to-3D conversion', 'Image-to-3D modeling', 'Style transfer', 'Custom prompts']
    },
    {
      title: 'Real-time Rendering',
      description: 'High-quality 3D rendering with real-time preview and optimization',
      icon: <Camera className="w-8 h-8" />,
      examples: ['Live preview', 'Material editing', 'Lighting controls', 'Animation preview']
    },
    {
      title: 'Multiple Formats',
      description: 'Export to various 3D formats for different applications and platforms',
      icon: <Layers className="w-8 h-8" />,
      examples: ['OBJ, FBX, STL', 'GLTF, USDZ', 'Unity, Unreal', 'Web-ready formats']
    },
    {
      title: 'Gaming',
      description: 'Create 3D assets for games and interactive experiences',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Props and objects', 'Animation rigs']
    },
    {
      title: 'Architecture',
      description: 'Generate architectural visualizations and building models',
      icon: '🏗️',
      examples: ['Building designs', 'Interior layouts', 'Landscape models', 'Urban planning']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation technology. Create prototypes, visualizations, and digital assets effortlessly." />
      </Helmet>
      
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
                Transform your ideas into stunning 3D models with our AI-powered generation technology. 
                Create prototypes, visualizations, and digital assets effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Creating
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Examples
                </button>
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Powerful 3D Generation Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
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
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AI3DGenerationPage;