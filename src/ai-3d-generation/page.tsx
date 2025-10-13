import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD

const AI3DGenerationPage: React.FC = () => {
  const industries = [
    {
      title: 'Architecture & Real Estate',
      description: 'Create 3D visualizations and virtual tours',
      icon: Building,
      features: ['3D building models', 'Virtual walkthroughs', 'Interior design', 'Landscape visualization']
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Generate game assets and characters',
      icon: Gamepad2,
      features: ['Character models', 'Environment assets', 'Animation sequences', 'Texture generation']
    },
    {
      title: 'Manufacturing & Product Design',
      description: 'Prototype and visualize products',
      icon: Wrench,
      features: ['Product prototypes', 'Assembly visualization', 'Material testing', 'Quality inspection']
    },
    {
      title: 'Healthcare & Medical',
      description: 'Create medical models and simulations',
      icon: Stethoscope,
      features: ['Anatomical models', 'Surgical planning', 'Medical training', 'Prosthetic design']
    }
=======
import SEOOptimizer from '../components/SEOOptimizer';
<<<<<<< HEAD
const AI3DGenerationPage: React.FC = () => {
  const features = [
=======
;
const AI3DGenerationPage: React.FC = () => {
};
const features = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    '3D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ];
<<<<<<< HEAD
  const benefits = [
=======
;
const benefits = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Professional 3D content',
    'Time savings',
    'No 3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ];
<<<<<<< HEAD
  const pricingPlans = [
    {
=======
;
const pricingPlans = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
        {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support'],
      popular: true
    },
        {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  ];

  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions or 2D images',
      benefits: ['90% faster modeling', 'Unlimited creativity', 'Consistent quality', 'Cost effective']
    },
    {
      icon: Palette,
      title: 'Advanced Texturing',
      description: 'Create realistic textures and materials automatically',
      benefits: ['Photorealistic results', 'Material variety', 'Lighting optimization', 'Seamless integration']
    },
    {
      icon: Camera,
      title: 'Rendering & Animation',
      description: 'Produce high-quality renders and smooth animations',
      benefits: ['Professional quality', 'Real-time preview', 'Batch processing', 'Custom styles']
    }
  ];

  const benefits = [
    'Reduce 3D creation time by 80%',
    'Lower production costs by 60%',
    'Unlimited design iterations',
    'Professional quality output',
    'Scalable solutions',
    '24/7 availability'
  ];

  const technologies = [
    'Neural Networks',
    'Computer Vision',
    '3D Geometry Processing',
    'Texture Synthesis',
    'Real-time Rendering',
    'Cloud Computing',
    'GPU Acceleration',
    'Machine Learning'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Advanced 3D Content Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation technology. Create professional 3D content 80% faster." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D visualization, AI content creation, 3D rendering" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
=======
    <React .Fragment>
      <SEOOptimizer title="AI 3D Generation Studio - Create 3D Models & Animations with AI | Zion Tech Group"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords={['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']};
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          {/* Hero Section */}
=======
          {/* Hero Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center mb-16">
<<<<<<< HEAD
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with cutting-edge AI technology. Create professional 3D content 80% faster than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Demo
              </a>
=======
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
<<<<<<< HEAD
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md: text-5xl font-bold text-white neon-text">
                  AI 3D Generation Studio,
  </
              </div>
=======
                  AI 3D Generation Studio
                <
              <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <p className="text-xl text-gray-300 mb-8">
                Create 3D models, animations, and virtual environments with AI;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
  </
                <a
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  View Gallery,
  </
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
=======
                <a href="
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                <
                <a href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI 3D Generation Features;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
<<<<<<< HEAD
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </div>
              ))}
            </div>
          </section>
<<<<<<< HEAD

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <industry.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
=======
          {/* Benefits Section */}
=======
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" 
                    <h3 className="text-lg font-semibold text-white">{feature}<
                  <
                <)
              ))};
            <
          <
          {/* Benefits Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI 3D Generation Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
<<<<<<< HEAD
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
=======
                    <Zap className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}<
                <)
              ))};
            <
          <
          {/* Pricing Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing;
  </
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
<<<<<<< HEAD
                        Most Popular;
  </
                    </div>
                  )}
=======
                        Most Popular
                      <
                    <
                  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
<<<<<<< HEAD
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
<<<<<<< HEAD

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="text-2xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
=======
          {/* CTA Section */}
=======
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-gray-300">
                    Get Started
                  <
                <
              ))};
            <
          <
          {/* CTA Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading companies using AI 3D generation technology;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
  </
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing 3D Content?</h2>
            <p className="text-xl text-cyan-100 mb-8">Let our AI 3D generation technology transform your creative process</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200"
              >
                Get Free Quote
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
<<<<<<< HEAD
=======
  </a>
  </p>
  </a>
  </h2>
  </h2>
  </a>
  </a>
  </p>
  </h1>
  </div>
  </SEOOptimizer>
=======
                <a href="
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
                <
                <a href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hove,
    r:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950<
                <
              <
            <
          <
        <
        <Footer />
      </div>
    </React.Fragment>
  )};
export default AI3DGenerationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
