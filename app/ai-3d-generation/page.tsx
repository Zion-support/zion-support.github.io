'use client';
import React from 'react';

<<<<<<< HEAD
const AI3DGenerationPage: React.FC = () => {
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
    {
      title: 'Page',
      description: 'Professional page services and solutions.',
      benefits: ['High Quality', 'Expert Team', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
<<<<<<< HEAD
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
  ]
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
  ]
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
=======
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services and solutions." />
        <meta name="keywords" content="page, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
<<<<<<< HEAD

export default function Ai3DGenerationPage() {
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
  )
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default AI3DGenerationPage
=======
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-8dbb
