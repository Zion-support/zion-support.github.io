'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
=======
import { Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
import { Cube, Palette, Zap, Target, ArrowRight, CheckCircle, Brain, BarChart, TrendingUp, Eye } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence technology to transform your business operations.',
      benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
=======
      icon: Cube,
      title: '3D Model Generation',
      description: 'AI-powered 3D model creation from text descriptions, images, or sketches.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D modeling', 'Sketch-based generation', 'Real-time preview']
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Generate high-quality 3D prototypes in minutes instead of hours.',
      benefits: ['Fast iteration cycles', 'Multiple design options', 'Automated optimization', 'Quality validation']
=======
      icon: Cube,
      title: '3D Model Generation',
      description: 'Create stunning 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'High-quality models', 'Multiple formats', 'Custom styling']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'Generate realistic materials and textures automatically for your 3D models.',
      benefits: ['Procedural textures', 'Realistic materials', 'Custom patterns', 'PBR workflows']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Accelerate your design process with AI-powered rapid 3D prototyping.',
      benefits: ['Fast iteration', 'Design variations', 'Automated optimization', 'Quick feedback']
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
    },
    {
<<<<<<< HEAD
      icon: Target,
<<<<<<< HEAD
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
=======
      icon: Eye,
      title: 'Visual Quality',
      description: 'Produce photorealistic 3D models with advanced rendering capabilities.',
      benefits: ['High-resolution output', 'Material accuracy', 'Lighting optimization', 'Texture mapping']
    },
    {
      icon: Palette,
      title: 'Custom Styling',
      description: 'Apply custom styles, materials, and textures to generated 3D models.',
      benefits: ['Style transfer', 'Material libraries', 'Color customization', 'Texture variations']
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
      title: 'Precision Modeling',
      description: 'Achieve precise 3D models with AI-assisted modeling tools.',
      benefits: ['Exact measurements', 'Geometric accuracy', 'Professional quality', 'Industry standards']
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce 3D modeling time by 90%',
    'Generate unlimited design variations',
    'No 3D modeling expertise required',
    'Seamless integration with existing workflows',
    'High-quality output suitable for production',
    'Cost-effective alternative to traditional modeling'
=======
    'Reduce 3D modeling time by 70%',
    'Generate unlimited design variations',
    'Create photorealistic 3D assets',
    'Automate repetitive modeling tasks',
    'Integrate with popular 3D software',
    'Scale production without additional artists'
  ];

  const useCases = [
    {
      title: 'Product Design',
      description: 'Generate 3D prototypes for product development and visualization.',
      icon: Cube
    },
    {
      title: 'Architecture',
      description: 'Create detailed 3D architectural models and visualizations.',
      icon: Eye
    },
    {
      title: 'Gaming',
      description: 'Produce game assets and characters with AI assistance.',
      icon: Zap
    },
    {
      title: 'Marketing',
      description: 'Create compelling 3D visuals for marketing campaigns.',
      icon: BarChart
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />
=======
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation technology for rapid prototyping and design innovation." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, rapid prototyping, design automation" />
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive page solutions designed to transform your business with AI and advanced technology.
=======
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our revolutionary AI-powered generation technology.
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
<<<<<<< HEAD
                  Learn More
                </button>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with our revolutionary AI-powered generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
                  View Gallery
                </button>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to create amazing 3D models</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for creating professional 3D content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI 3D Generation?</h2>
              <p className="text-xl text-gray-300">Transform your design process with cutting-edge AI technology</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </div>
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI 3D generation can transform your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your 3D workflow with intelligent automation
              </p>
            </div>
            
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
<<<<<<< HEAD
                    <Target className="h-6 w-6 text-cyan-400" />
=======
                    <Brain className="h-6 w-6 text-cyan-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
=======
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your 3D Design Process?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of designers and developers already using our AI 3D generation technology.
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
<<<<<<< HEAD
                Learn More
=======
                View Examples
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Generate 3D Models with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating stunning 3D content with our AI-powered generation tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Generating
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PagePage;
=======
export default Ai3dGenerationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
export default Ai3dGenerationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
