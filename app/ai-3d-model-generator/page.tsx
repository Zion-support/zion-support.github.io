'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  EyeIcon,
  CubeTransparentIcon,
  PlayIcon,
  PauseIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedModel, setGeneratedModel] = useState('');
  const [modelType, setModelType] = useState('character');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models from text descriptions using advanced AI',
      price: 'Included'
    },
    {
      icon: CubeTransparentIcon,
      title: 'Multiple Formats',
      description: 'Export in OBJ, FBX, GLTF, STL, and other industry-standard formats',
      price: 'Included'
    },
    {
      icon: EyeIcon,
      title: 'Real-time Preview',
      description: 'View and interact with 3D models in real-time before downloading',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: 'Fast Generation',
      description: 'Generate complex 3D models in minutes, not hours',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '10 3D models/month',
        'Basic AI generation',
        'Standard quality',
        'OBJ/STL export',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '50 3D models/month',
        'Advanced AI generation',
        'High quality models',
        'All export formats',
        'Priority support',
        'No watermark',
        'API access',
        'Custom textures'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited 3D models',
        'Custom AI training',
        'Ultra-high quality',
        'Team collaboration',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const modelTypes = [
    {
      id: 'character',
      name: 'Character',
      description: 'Human and creature models',
      icon: CubeIcon
    },
    {
      id: 'object',
      name: 'Object',
      description: 'Furniture, tools, and items',
      icon: CubeTransparentIcon
    },
    {
      id: 'architecture',
      name: 'Architecture',
      description: 'Buildings and structures',
      icon: EyeIcon
    },
    {
      id: 'vehicle',
      name: 'Vehicle',
      description: 'Cars, planes, and boats',
      icon: CubeIcon
    }
  ];

  const handleGeneration = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI 3D model generation
    setTimeout(() => {
      setGeneratedModel('https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Generated+3D+Model');
      setIsGenerating(false);
    }, 4000);
  };

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Create stunning 3D models from text descriptions using advanced AI. Generate characters, objects, architecture, and more with our cutting-edge 3D AI technology."
        keywords="AI 3D model generator, 3D modeling, AI 3D, 3D generation, 3D printing, computer graphics, 3D design"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                <CubeIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-400 font-medium">AI 3D Generation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI 3D Model Generator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create stunning 3D models from simple text descriptions using our advanced AI technology. 
                Generate characters, objects, architecture, and more for games, films, and 3D printing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleGeneration}
                  disabled={isGenerating || !prompt.trim()}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Generate 3D Model'}
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live 3D Generation Demo */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Live <span className="animated-gradient-text">3D Generation</span> Demo
              </h2>
              <p className="text-xl text-gray-300">
                Experience AI 3D model generation in real-time
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Describe your 3D model</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., 'A futuristic robot with glowing blue eyes and metallic armor'"
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Model Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {modelTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setModelType(type.id)}
                          className={`p-3 rounded-lg border transition-all duration-300 ${
                            modelType === type.id
                              ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300'
                              : 'border-slate-600 bg-slate-800 text-gray-300 hover:border-indigo-400'
                          }`}
                        >
                          <type.icon className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-xs font-medium">{type.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGeneration}
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating 3D Model...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Generate 3D Model
                      </>
                    )}
                  </button>
                </div>
                
                {/* Output Section */}
                <div>
                  <label className="block text-sm font-medium mb-2">Generated 3D Model</label>
                  <div className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                    {generatedModel ? (
                      <div className="text-center">
                        <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                          <CubeIcon className="w-16 h-16 text-indigo-400" />
                        </div>
                        <div className="text-green-400 text-sm mb-2">3D model generated successfully!</div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          <ArrowDownTrayIcon className="w-4 h-4 inline mr-1" />
                          Download
                        </button>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <CubeIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Generated 3D model will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for professional 3D model generation with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-indigo-400 font-semibold">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D modeling needs
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
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
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
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white' 
                      : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Create</span> Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to generate professional 3D content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Creating 3D Models
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;