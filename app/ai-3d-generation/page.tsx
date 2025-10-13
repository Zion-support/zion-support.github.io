import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Zap, Eye, Palette } from 'lucide-react';

export default function AI3DGeneration() {
  const features = [
    {
      icon: Cube,
      title: 'Text-to-3D',
      description: 'Generate 3D models from simple text descriptions using advanced AI algorithms.',
      benefits: ['Natural language input', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Create 3D models in seconds with our optimized AI processing pipeline.',
      benefits: ['Fast generation', 'Real-time preview', 'Instant results']
    },
    {
      icon: Eye,
      title: 'High Quality',
      description: 'Generate photorealistic 3D models with detailed textures and materials.',
      benefits: ['4K textures', 'PBR materials', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Customization',
      description: 'Fine-tune your 3D models with advanced customization options.',
      benefits: ['Style control', 'Material editing', 'Shape modification']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality 3D models using advanced AI technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models from simple text descriptions using our advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}