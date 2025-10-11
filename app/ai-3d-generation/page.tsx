'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Palette, Zap, Target, ArrowRight, CheckCircle, Brain, BarChart, TrendingUp, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'AI-powered 3D model creation from text descriptions, images, or sketches.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D modeling', 'Sketch-based generation', 'Real-time preview']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Generate high-quality 3D prototypes in minutes instead of hours.',
      benefits: ['Fast iteration cycles', 'Multiple design options', 'Automated optimization', 'Quality validation']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'Intelligent material assignment and texture generation for realistic 3D models.',
      benefits: ['Smart material mapping', 'Procedural textures', 'Lighting optimization', 'Realistic rendering']
    },
    {
      icon: Eye,
      title: 'Quality Assurance',
      description: 'Automated quality checks and optimization for production-ready 3D models.',
      benefits: ['Geometry validation', 'Topology optimization', 'Performance analysis', 'Export optimization']
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: 'Product Design',
      description: 'Rapid prototyping and iteration for product development and manufacturing.',
      benefits: ['Concept visualization', 'Design iteration', 'Manufacturing prep', 'Cost optimization']
    },
    {
      icon: BarChart,
      title: 'Architecture & Construction',
      description: '3D modeling for architectural visualization and construction planning.',
      benefits: ['Building visualization', 'Space planning', 'Material estimation', 'Client presentations']
    },
    {
      icon: Brain,
      title: 'Gaming & Entertainment',
      description: 'Asset creation for games, movies, and virtual reality experiences.',
      benefits: ['Character modeling', 'Environment design', 'Asset optimization', 'Animation ready']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Input Processing',
      description: 'Analyze your text, image, or sketch input to understand the desired 3D model.',
      details: ['Input analysis', 'Feature extraction', 'Intent recognition', 'Quality assessment']
    },
    {
      step: '02',
      title: 'AI Generation',
      description: 'Advanced AI algorithms generate the 3D model based on your specifications.',
      details: ['Neural network processing', '3D geometry generation', 'Material assignment', 'Texture mapping']
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'Automated optimization for performance, quality, and production readiness.',
      details: ['Topology optimization', 'Performance tuning', 'Quality validation', 'Export preparation']
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Export in your preferred format with full customization options.',
      details: ['Format conversion', 'Quality settings', 'Custom parameters', 'Final delivery']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into 3D models with our AI-powered 3D generation services. Text-to-3D, image-to-3D, and rapid prototyping solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI 3D Generation</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered generation technology. From text descriptions to photorealistic models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">AI 3D Generation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology that transforms your ideas into high-quality 3D models.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI 3D generation can transform your industry and workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <useCase.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A streamlined workflow that transforms your ideas into production-ready 3D models.
              </p>
            </div>
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Generate 3D Models?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI 3D generation can accelerate your design process and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Start Your 3D Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AI3DGenerationPage;