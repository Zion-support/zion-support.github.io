import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Box, Brain, Target, ArrowRight, Shield, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHolographicWorkspacePage: React.FC = () => {
  const features = [
    {
      title: '3D Visualization',
      description: 'Advanced 3D visualization and holographic display technology for immersive experiences.',
      icon: Box,
      benefits: [
        '3D modeling',
        'Holographic display',
        'Immersive visualization',
        'Interactive design'
      ]
    },
    {
      title: 'Spatial Computing',
      description: 'AI-powered spatial computing for natural interaction with 3D environments.',
      icon: Brain,
      benefits: [
        'Gesture recognition',
        'Voice control',
        'Eye tracking',
        'Hand tracking'
      ]
    },
    {
      title: 'Collaborative Workspace',
      description: 'Multi-user collaborative workspace with real-time synchronization.',
      icon: Users,
      benefits: [
        'Real-time collaboration',
        'Shared workspace',
        'Multi-user support',
        'Synchronization'
      ]
    },
    {
      title: 'AI Integration',
      description: 'Intelligent AI integration for enhanced productivity and automation.',
      icon: Zap,
      benefits: [
        'Smart automation',
        'Predictive assistance',
        'Context awareness',
        'Intelligent suggestions'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'Design & Engineering',
      description: '3D design and engineering solutions for product development and prototyping.',
      icon: Box
    },
    {
      title: 'Education & Training',
      description: 'Immersive educational experiences and training simulations.',
      icon: Brain
    },
    {
      title: 'Remote Collaboration',
      description: 'Virtual collaboration tools for remote teams and distributed workforces.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="AI-powered holographic workspace solutions that enable 3D visualization, spatial computing, and immersive collaboration. Advanced technology for the future of work." />
        <meta name="keywords" content="AI holographic workspace, 3D visualization, spatial computing, immersive collaboration, holographic display" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Holographic
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Workspace
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of work with AI-powered holographic workspace solutions. 3D visualization, 
              spatial computing, and immersive collaboration for enhanced productivity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Holographic Workspace Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered holographic workspace provides comprehensive tools for immersive collaboration.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Holographic Workspace Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for businesses that need immersive collaboration and 3D visualization.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Holographic Workspace?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered holographic workspace that transforms collaboration.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Enter the Holographic Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading companies who trust our AI Holographic Workspace solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Exploring
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIHolographicWorkspacePage;