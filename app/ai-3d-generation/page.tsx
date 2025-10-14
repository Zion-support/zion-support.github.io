'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const Ai3dGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'VR/AR Integration',
      description: 'Create immersive experiences and virtual environments',
      icon: '🥽'
    },
    {
      title: 'Game Asset Creation',
      description: 'Generate 3D models for games and interactive media',
      icon: '🎮'
    },
    {
      title: 'Architectural Visualization',
      description: 'Transform blueprints into photorealistic 3D models',
      icon: '🏗️'
    },
    {
      title: 'Product Prototyping',
      description: 'Rapid 3D prototyping for product development',
      icon: '📦'
    }
  ];

  const benefits = [
    'Text-to-3D conversion in seconds',
    'High-quality mesh generation',
    'Multiple format exports (OBJ, FBX, GLTF)',
    'Real-time preview and editing',
    'AI-powered optimization',
    'Cloud-based processing'
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform text into stunning 3D models with our AI-powered 3D generation technology. Create game assets, architectural models, and more in seconds." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, VR AR, game assets, architectural visualization, product prototyping" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
Page
          </h1>442
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.
          </p>529
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>829
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.
              </p>955
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1193
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.
              </p>1325
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1570
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.
              </p>1694
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1893
          </div>
        </div>
      </div>
    </>
  );
}

