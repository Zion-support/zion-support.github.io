'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Box, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Box,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions or 2D images using advanced AI algorithms.',
      benefits: ['Text-to-3D generation', 'Image-to-3D conversion', 'Automated topology optimization', 'Real-time preview']
    },
    {
      icon: Palette,
      title: 'Intelligent Texturing',
      description: 'Automatically apply realistic textures and materials to your 3D models with AI assistance.',
      benefits: ['Smart material selection', 'Procedural texturing', 'PBR material generation', 'UV mapping automation']
    },
    {
      icon: Eye,
      title: 'Advanced Rendering',
      description: 'High-quality rendering with ray tracing, global illumination, and real-time preview capabilities.',
      benefits: ['Ray tracing support', 'Global illumination', 'Real-time preview', 'Batch rendering']
    },
    {
      icon: Zap,
      title: 'Animation Generation',
      description: 'Create smooth animations and rigs automatically using AI-powered motion generation.',
      benefits: ['Auto-rigging', 'Motion capture', 'Keyframe generation', 'Physics simulation']
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Game Development',
      description: 'Rapidly prototype and create 3D assets for games with AI assistance.',
      benefits: ['Character generation', 'Environment creation', 'Asset optimization', 'LOD generation']
    },
    {
      icon: Target,
      title: 'Architecture Visualization',
      description: 'Create stunning architectural visualizations and walkthroughs with AI-generated 3D models.',
      benefits: ['Building generation', 'Interior design', 'Landscape creation', 'Lighting optimization']
    },
    {
      icon: BarChart,
      title: 'Product Design',
      description: 'Design and visualize products with AI-powered 3D modeling and rendering.',
      benefits: ['Concept visualization', 'Prototype generation', 'Material testing', 'Design iteration']
    },
    {
      icon: Shield,
      title: 'Education & Training',
      description: 'Create interactive 3D educational content and training simulations.',
      benefits: ['Educational models', 'Interactive simulations', 'VR/AR content', 'Training scenarios']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        '100 3D model generations',
        'Basic texturing',
        'Standard rendering',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        '500 3D model generations',
        'Advanced texturing',
        'High-quality rendering',
        'Animation tools',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: [
        'Unlimited generations',
        'Custom AI training',
        'API access',
        'White-label solution',
        'Dedicated support'
      ],
      popular: false
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered 3D model generation and design automation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Gallery
                </button>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
