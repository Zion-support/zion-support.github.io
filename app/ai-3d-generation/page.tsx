<<<<<<< HEAD
<<<<<<< HEAD
import React  from 'react';
const Ai3dGenerationPage: React.FC = () => {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Palette, Zap, CheckCircle, ArrowRight, Star, Brain, Layers } from 'lucide-react';

const Ai3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8 text-cyan-400" />,
      title: 'AI 3D Model Generation',
      description: 'Create stunning 3D models from text descriptions or 2D images using advanced AI',
      benefits: ['10x faster than traditional methods', 'Unlimited creativity', 'Professional quality output']
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: 'Intelligent Texturing',
      description: 'AI-powered material and texture generation for realistic 3D models',
      benefits: ['Photorealistic textures', 'Automatic UV mapping', 'Material optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Real-time Rendering',
      description: 'High-quality 3D rendering with real-time preview and optimization',
      benefits: ['Instant preview', 'GPU acceleration', 'Multiple output formats']
    },
    {
      icon: <Layers className="w-8 h-8 text-red-400" />,
      title: 'Animation Generation',
      description: 'Create smooth 3D animations and motion graphics with AI assistance',
      benefits: ['Automated keyframing', 'Natural motion', 'Export to all formats']
    }
  ];

  const useCases = [
    {
      title: 'Product Visualization',
      description: 'Create photorealistic 3D models for e-commerce and marketing',
      price: '$199/month',
      features: ['Product modeling', '360° views', 'AR integration', 'Marketing assets']
    },
    {
      title: 'Architectural Visualization',
      description: 'Generate 3D architectural models and walkthroughs',
      price: '$299/month',
      features: ['Building models', 'Interior design', 'Landscape design', 'Virtual tours']
    },
    {
      title: 'Game Development',
      description: 'Create 3D assets and characters for games and VR experiences',
      price: '$399/month',
      features: ['Character modeling', 'Environment design', 'Asset optimization', 'Game integration']
    },
    {
      title: 'Medical Visualization',
      description: 'Generate 3D medical models for education and research',
      price: '$499/month',
      features: ['Anatomical models', 'Surgical planning', 'Educational content', 'Research tools']
    }
  ];

  const stats = [
    { number: '50,000+', label: '3D Models Generated', icon: <Box className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-green-400" /> },
    { number: '10x', label: 'Faster Creation', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'AI Processing', icon: <Brain className="w-6 h-6 text-red-400" /> }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-33de
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-3d-generation, AI solutions, IT services" />
=======
'use client';
import React from 'react';

const Ai3 dGenerationPage: React.FC = () => {
  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Ai 3 d Generation - Zion Tech Group</title>
        <meta name="description" content="Ai 3 d Generation services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="ai-3 d-generation, AI solutions, IT services" / / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
      </Helmet>
    </>
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI 3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI 3D generation services by Zion Tech Group.
=======
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        <div className="container mx-autopx-4py-16">
        </div>
          <div className="text-centermb-16">
        </div>
            <h1 className="text-4 xl md:text-6 xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Ai 3 d Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
    </>
              Professional ai 3 d generation services by Zion Tech Group.
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </p>
          </div>
    </>

<<<<<<< HEAD
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive AI 3D generation solutions. 
=======
    <>
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
        </div>
            <h2 className="text-2 xl font-boldtext-whitemb-4">Coming Soon</h2>
            <p className="text-gray-300mb-6" />
    </>
              We're working on bringing you comprehensive ai 3 d generation solutions. 
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Contact us to learn more about our services.
    <>
            </p>
<<<<<<< HEAD
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
      </div>
        </div>
=======
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Ai3dGenerationPage;
=======
export default Ai3 dGenerationPage;
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
