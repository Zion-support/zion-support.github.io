import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Camera, Video, Target, Shield, CheckCircle, ArrowRight, Settings } from 'lucide-react';


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
      icon: Video,
      title: 'Video Analysis',
      description: 'Real-time video processing and analysis capabilities',
      benefits: ['Live streaming', 'Motion detection', 'Activity recognition']
      icon: Target,
      title: 'Facial Recognition',
      description: 'Secure and accurate facial recognition technology',
      benefits: ['Identity verification', 'Access control', 'Privacy protection']
    }
  ];

  const applications = [
      title: 'Retail & E-commerce',
      description: 'Automated inventory management, customer behavior analysis, and checkout optimization',
      icon: ShoppingCart,
      useCases: ['Smart checkout', 'Inventory tracking', 'Customer analytics']
      title: 'Security & Surveillance',
      description: 'Intelligent security monitoring and threat detection systems',
      icon: Shield,
      useCases: ['Intrusion detection', 'Person tracking', 'Anomaly detection']
      title: 'Healthcare',
      description: 'Medical image analysis and diagnostic assistance',
      icon: Stethoscope,
      useCases: ['X-ray analysis', 'MRI interpretation', 'Symptom detection']
      title: 'Manufacturing',
      description: 'Quality control and automated inspection systems',
      icon: Settings,
      useCases: ['Defect detection', 'Quality assurance', 'Process monitoring']

  const pricing = [
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small projects',
      features: [
        'Up to 1,000 images/month',
        'Basic models',
        'Email support',
        'Standard API'
      ],
      popular: false
      name: 'Professional',
      price: '$1,999/month',
      description: 'Ideal for growing businesses',
        'Up to 10,000 images/month',
        'Advanced models',
        'Priority support',
        'Custom training',
        'API access'
      popular: true
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
        'Unlimited images',
        'Custom models',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Computer Vision
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
            Advanced Visual Intelligence Solutions
          </p>
          <p
            Transform your business with cutting-edge computer vision technology. From object detection to facial recognition, 
            our AI-powered visual intelligence solutions help you see and understand the world like never before.
          
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              <Eye className="w-5 h-5" />
              +1 302 464 0950
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Core Capabilities
          </h2>
          
          <div
            {features.map((feature, index) => (
              </div>
          <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

        {/* Applications Section */}
            Industry Applications
          
          <div
            {applications.map((application, index) => (
              </div>
          <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                <div
                  </div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <application.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white neon-text">
                    {application.title}
                <p
                  {application.description}
                </p>
          <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  {application.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {useCase}

        {/* Pricing Section */}
            Choose Your Plan
          
          <div
            {pricing.map((plan, index) => (
              </div>
          <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div
                    </div>
          <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to See the Future?
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with AI-powered computer vision solutions that see, understand, and act.
                Start Your Vision Journey
                href="/demo"
                className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                <Camera className="w-5 h-5" />
                Request Demo
      </main>

      <Footer />
  );
};

export default AIComputerVisionPage;
