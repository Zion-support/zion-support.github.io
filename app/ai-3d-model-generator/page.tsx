import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation from text descriptions',
    'Multiple 3D formats (OBJ, STL, FBX, GLTF, PLY)',
    'High-resolution mesh generation and optimization',
    'Texture mapping and material application',
    'Animation and rigging capabilities',
    '3D printing optimization and validation',
    'AR/VR ready model export',
    'Batch processing and automation',
    'Custom model training and fine-tuning',
    'API integration for seamless workflows'
  ];

  const modelTypes = [
    {
      title: 'Product Visualization',
      description: 'Create realistic 3D models for e-commerce and marketing',
      icon: CubeIcon,
      examples: ['Furniture', 'Electronics', 'Fashion items', 'Home decor']
    },
    {
      title: 'Character Design',
      description: 'Generate 3D characters for games and animations',
      icon: EyeIcon,
      examples: ['Game characters', 'Avatars', 'Animated figures', 'Mascots']
    },
    {
      title: 'Architectural Models',
      description: 'Create detailed 3D architectural visualizations',
      icon: GlobeAltIcon,
      examples: ['Buildings', 'Interiors', 'Landscapes', 'Urban planning']
    },
    {
      title: 'Medical Visualization',
      description: 'Generate 3D models for medical and scientific purposes',
      icon: CpuChipIcon,
      examples: ['Anatomical models', 'Medical devices', 'Scientific data', 'Educational content']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for designers and content creators',
      features: [
        'Up to 20 3D models per month',
        'Standard resolution (1K)',
        'Basic materials and textures',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for studios and agencies',
      features: [
        'Up to 100 3D models per month',
        'High resolution (4K)',
        'Premium materials and textures',
        'Priority support',
        'No watermark',
        'Animation support',
        'API access',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and production studios',
      features: [
        'Unlimited 3D models',
        'Ultra-high resolution (8K)',
        'Custom materials and textures',
        '24/7 dedicated support',
        'On-premise deployment',
        'White-label solution',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const formats = [
    { name: 'OBJ', use: 'General 3D', compatibility: 'Universal' },
    { name: 'STL', use: '3D Printing', compatibility: 'High' },
    { name: 'FBX', use: 'Animation', compatibility: 'High' },
    { name: 'GLTF', use: 'Web/AR', compatibility: 'High' },
    { name: 'PLY', use: 'Point Cloud', compatibility: 'Medium' },
    { name: 'USD', use: 'USD Pipeline', compatibility: 'High' }
  ];

  return (
    <>
      <SEOHead
        title="AI 3D Model Generator Pro - Zion Tech Group"
        description="Revolutionary AI-powered 3D model generation from text descriptions. Create high-quality 3D models for games, AR/VR, 3D printing, and visualization with advanced AI technology."
        keywords="AI 3D model generator, 3D modeling, text to 3D, 3D printing, AR VR models, game assets, product visualization, 3D design automation"
        canonicalUrl="https://ziontechgroup.com/ai-3d-model-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  AI 3D Model Generator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create stunning 3D models from text descriptions with AI-powered generation. Perfect for games, AR/VR, 3D printing, and visualization projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a href="#pricing"
                  className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a href="#demo"
                  className="border-2 border-indigo-400 text-indigo-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-400/25"
                >
                  View Gallery
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">6+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">8K</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Resolution</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">10x</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Faster</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Types Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Create Any Type of <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">3D Model</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From product visualization to character design, our AI adapts to your 3D modeling needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {modelTypes.map((type, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-indigo-300 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need for professional 3D model generation and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Support for All <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">3D Formats</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Export your 3D models in any format for maximum compatibility.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {formats.map((format, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🎲</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{format.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{format.use}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your 3D modeling needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-indigo-500 shadow-indigo-500/20' 
                      : 'border-slate-700 hover:border-indigo-500 hover:shadow-indigo-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Start Creating 3D Models Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of creators who are already producing stunning 3D models with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;