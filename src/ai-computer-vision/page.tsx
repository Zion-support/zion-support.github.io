import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Target, Shield, Eye, Camera, Settings } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition with high accuracy',
      benefits: ['Real-time detection', 'Multi-class recognition', 'Custom model training']
    },
    {
      icon: Camera,
      title: 'Image Classification',
      description: 'Automated image categorization and content analysis',
      benefits: ['99%+ accuracy', 'Batch processing', 'Custom categories']
    },
    {
      icon: Target,
      title: 'Facial Recognition',
      description: 'Secure and accurate facial recognition technology',
      benefits: ['Identity verification', 'Access control', 'Privacy protection']
    }
  ];

  const applications = [
    {
      title: 'Security & Surveillance',
      description: 'Intelligent security monitoring and threat detection systems',
      icon: Shield,
      useCases: ['Intrusion detection', 'Person tracking', 'Anomaly detection']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control and automated inspection systems',
      icon: Settings,
      useCases: ['Defect detection', 'Quality assurance', 'Process monitoring']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small projects',
      features: [
  // TODO: Add items,
]
//         'Up to 1,000 images/month',
//         'Basic models',
//         'Email support',
//         'Standard API'
//       ],
      popular: false,

const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  )
};

export default PagePage