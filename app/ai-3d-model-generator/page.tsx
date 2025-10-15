'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  PhotoIcon,
  PrinterIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedModel, setGeneratedModel] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [modelType, setModelType] = useState('character');

  const features = [
    'AI-powered 3D model generation from text prompts',
    'Multiple 3D model categories and styles',
    'High-resolution mesh generation',
    'Texture and material application',
    'Animation-ready models',
    '3D printing optimization',
    'AR/VR compatibility',
    'Batch model processing',
    'Custom model training',
    'Professional export formats'
  ];

  const modelTypes = [
    { id: 'character', name: 'Characters', description: 'Human and creature models', icon: '👤' },
    { id: 'object', name: 'Objects', description: 'Furniture and everyday items', icon: '🪑' },
    { id: 'vehicle', name: 'Vehicles', description: 'Cars, planes, and transportation', icon: '🚗' },
    { id: 'architecture', name: 'Architecture', description: 'Buildings and structures', icon: '🏢' },
    { id: 'nature', name: 'Nature', description: 'Plants, trees, and landscapes', icon: '🌳' },
    { id: 'abstract', name: 'Abstract', description: 'Artistic and abstract forms', icon: '🎨' }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$79',
      period: '/month',
      description: 'For 3D artists and designers',
      features: [
        '10 models/month',
        'Standard resolution',
        'Basic model types',
        'Email support',
        'STL/OBJ export',
        'Commercial license'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'For professional 3D work',
      features: [
        '50 models/month',
        'High resolution',
        'All model types',
        'Priority support',
        'API access',
        'Animation support',
        'Custom materials'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For studios and agencies',
      features: [
        'Unlimited models',
        'Ultra-high resolution',
        'All features included',
        '24/7 support',
        'Custom AI training',
        'On-premise deployment',
        'White-label options'
      ],
      popular: false
    }
  ];

  const handleModelGeneration = async () => {
    setIsGenerating(true);
    // Simulate AI 3D model generation
    setTimeout(() => {
      setGeneratedModel('https://via.placeholder.com/400x300/4f46e5/ffffff?text=3D+Model+Preview');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Create stunning 3D models from text prompts with our AI 3D Model Generator. Generate characters, objects, and environments for games, AR/VR, and 3D printing."
        keywords="AI 3D model generator, 3D modeling, text to 3D, 3D printing, AR VR models, game assets, 3D design"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-8 neon-glow">
                <CubeIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI 3D Model Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning 3D models from simple text descriptions with our AI-powered generator. 
                Perfect for games, AR/VR, 3D printing, and professional design work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleModelGeneration}
                  disabled={!prompt.trim() || isGenerating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isGenerating ? 'Generating Model...' : 'Generate 3D Model'}
                </button>
                <a href="#pricing" className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Create Your 3D Model
                </h2>
                <p className="text-gray-300 mb-8">
                  Describe your 3D model idea and let our AI create it for you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Model Type:
                    </label>
                    <select
                      value={modelType}
                      onChange={(e) => setModelType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    >
                      {modelTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.icon} {type.name} - {type.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Model Description:
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., A futuristic robot character with glowing blue eyes, metallic armor, and sleek design..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <button
                    onClick={handleModelGeneration}
                    disabled={!prompt.trim() || isGenerating}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating 3D Model...
                      </div>
                    ) : (
                      'Generate 3D Model with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Generated 3D Model:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 flex items-center justify-center">
                  {generatedModel ? (
                    <div className="text-center">
                      <img 
                        src={generatedModel} 
                        alt="Generated 3D Model" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex space-x-4 justify-center">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          <EyeIcon className="w-4 h-4 inline mr-2" />
                          View 3D
                        </button>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          <PrinterIcon className="w-4 h-4 inline mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <CubeIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Your 3D model will appear here...</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <PhotoIcon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Text to 3D</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <PrinterIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">3D Printing</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <EyeIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">AR/VR Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI 3D Model Generator comes packed with advanced features for professional 3D work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your 3D modeling needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using our AI 3D Model Generator for professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;