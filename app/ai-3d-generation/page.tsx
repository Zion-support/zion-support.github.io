'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'Generate high-quality 3D models from text descriptions',
    'Create photorealistic textures and materials',
    'Automated animation and rigging',
    'LOD (Level of Detail) optimization',
    'VR/AR integration ready',
    'Real-time rendering capabilities',
    'Batch processing for multiple models',
    'Custom style transfer and adaptation',
    'Physics simulation integration',
    'Export to all major 3D formats'
  ];

  const benefits = [
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Generate characters, environments, and props for games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create 3D visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture layouts', 'Landscape designs']
    },
    {
      title: 'E-commerce',
      description: 'Generate product visualizations and AR experiences',
      icon: '🛒',
      examples: ['Product models', 'AR try-ons', 'Virtual showrooms', 'Packaging designs']
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3D learning materials',
      icon: '📚',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulations']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3D content for films and animations',
      icon: '🎬',
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];

import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, Clock, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation',
    'Automatic texture synthesis',
    'Real-time 3D rendering',
    'Multiple format support',
    'Custom model training',
    'Batch processing',
    'API integration',
    'Cloud-based processing',
    'High-resolution output',
    'Animation support',
    'Lighting optimization',
    'Material generation',
    'Shape optimization',
    'Color palette generation',
    'Marketing materials',
    'Educational content'
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$199/month',
      features: ['Up to 10 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$599/month',
      features: ['Up to 50 models/month', 'Advanced textures', 'High quality', 'Animation support', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999/month',
      features: ['Unlimited models', 'Premium textures', 'Custom training', 'Priority support', 'White-label'],

      popular: false
    }
  ];

  return (
    <div><Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI 3D Generation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our AI-powered generation technology.
              </p>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-green-400 mb-4" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Why Choose Our 3D AI?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-4xl mb-4 text-center">{app.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">{app.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{app.description}</p>
                    <ul className="space-y-2">
                      {app.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <ArrowRight className="w-3 h-3 text-purple-400 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Create Amazing 3D Models?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get started with our AI 3D generation platform today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AI3DGenerationPage;