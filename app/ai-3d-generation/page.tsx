import React from 'react';
import { Cube, Zap, Palette, Camera, Play, Download, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'Create detailed 3D models from text descriptions or 2D images using advanced AI algorithms',
      benefits: ['Text-to-3D conversion', 'Image-to-3D conversion', 'High-quality meshes']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'Generate realistic materials and textures automatically based on your specifications',
      benefits: ['Procedural textures', 'PBR materials', 'Style transfer']
    },
    {
      icon: Camera,
      title: 'Rendering & Animation',
      description: 'AI-powered rendering and animation tools for creating stunning visual content',
      benefits: ['Real-time rendering', 'Motion capture', 'Lighting optimization']
    },
    {
      icon: Zap,
      title: 'Style Transfer',
      description: 'Apply artistic styles to 3D models and scenes with AI-powered style transfer',
      benefits: ['Artistic filters', 'Style consistency', 'Creative variations']
    }
  ];

  const useCases = [
    {
      title: 'Product Visualization',
      description: 'Create photorealistic product renders for marketing and e-commerce',
      icon: Cube,
      examples: ['E-commerce products', 'Architectural renders', 'Fashion visualization']
    },
    {
      title: 'Game Development',
      description: 'Generate 3D assets and environments for games and interactive experiences',
      icon: Play,
      examples: ['Character models', 'Environment assets', 'Props and objects']
    },
    {
      title: 'Architecture & Design',
      description: 'Visualize architectural concepts and interior designs in 3D',
      icon: Camera,
      examples: ['Building visualization', 'Interior design', 'Urban planning']
    },
    {
      title: 'Entertainment & Media',
      description: 'Create 3D content for films, animations, and digital media',
      icon: Star,
      examples: ['Character animation', 'Visual effects', 'Virtual production']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Input & Brief',
      description: 'Provide text descriptions, reference images, or sketches',
      duration: '5 minutes'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Our AI analyzes your input and generates 3D models',
      duration: '2-10 minutes'
    },
    {
      step: '03',
      title: 'Refinement',
      description: 'Review and refine the generated 3D models',
      duration: '15-30 minutes'
    },
    {
      step: '04',
      title: 'Export & Delivery',
      description: 'Export in your preferred format and receive final files',
      duration: '5 minutes'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for individuals and small projects',
      features: [
        '10 3D models per month',
        'Basic AI models',
        'Standard resolution',
        'Email support',
        'Common file formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for creative professionals and agencies',
      features: [
        '50 3D models per month',
        'Advanced AI models',
        'High resolution output',
        'Priority support',
        'All file formats',
        'Custom style training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited 3D models',
        'Custom AI development',
        '4K+ resolution',
        '24/7 dedicated support',
        'API access',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const technologies = [
    'Neural Networks',
    'Generative Adversarial Networks (GANs)',
    'Diffusion Models',
    '3D Convolutional Networks',
    'Point Cloud Processing',
    'Mesh Generation',
    'Texture Synthesis',
    'Rendering Optimization',
    'GPU Acceleration',
    'Machine Learning'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Cube className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI 3D Generation
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning 3D models, animations, and visualizations with AI-powered tools that understand your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI-Powered 3D Generation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Use Cases & Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <useCase.icon className="w-8 h-8 text-pink-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Advanced Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-gray-300 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing 3D Content?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of creators using AI to bring their 3D visions to life with unprecedented speed and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Creating Now
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline px-8 py-4 text-lg"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;