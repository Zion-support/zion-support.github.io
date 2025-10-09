'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Video, Camera, Download, Upload, Settings, Brain, Sparkles, Play, Pause, Volume2, Film } from 'lucide-react';

const AIVideoGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'AI Video Generation',
      description: 'Create professional videos from text descriptions, images, or audio using advanced AI',
      benefits: ['Text-to-video', 'Image-to-video', 'Audio-to-video', 'High resolution output']
    },
    {
      icon: Camera,
      title: 'Scene Synthesis',
      description: 'Generate realistic scenes, characters, and environments with AI-powered synthesis',
      benefits: ['Character generation', 'Environment creation', 'Scene composition', 'Realistic lighting']
    },
    {
      icon: Settings,
      title: 'Motion Transfer',
      description: 'Transfer motion and animation between different video elements seamlessly',
      benefits: ['Motion capture', 'Animation transfer', 'Smooth transitions', 'Natural movement']
    },
    {
      icon: Film,
      title: 'Style Transfer',
      description: 'Apply different artistic styles and visual effects to your videos',
      benefits: ['Artistic styles', 'Visual effects', 'Color grading', 'Brand consistency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$299/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        'Up to 100 videos/month',
        '1080p resolution',
        'Basic effects',
        '5 export formats',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$799/month',
      description: 'Ideal for video production studios and agencies',
      features: [
        'Up to 1,000 videos/month',
        '4K resolution',
        'Advanced effects',
        'All export formats',
        'Priority support',
        'Custom training',
        'Batch processing',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/month',
      description: 'For large production houses and broadcast companies',
      features: [
        'Unlimited videos',
        '8K resolution',
        'Professional effects',
        'Custom formats',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing & Advertising',
      description: 'Create compelling video ads, product demos, and promotional content',
      icon: '📺',
      examples: ['Social media ads', 'Product demos', 'Brand videos', 'Marketing campaigns']
    },
    {
      title: 'Education & Training',
      description: 'Generate educational content, tutorials, and training materials',
      icon: '🎓',
      examples: ['Online courses', 'Training videos', 'Tutorials', 'Educational content']
    },
    {
      title: 'Entertainment',
      description: 'Create short films, music videos, and entertainment content',
      icon: '🎬',
      examples: ['Short films', 'Music videos', 'Web series', 'Entertainment content']
    },
    {
      title: 'E-commerce',
      description: 'Generate product videos and interactive shopping experiences',
      icon: '🛍️',
      examples: ['Product showcases', '360° videos', 'Interactive demos', 'Shopping experiences']
    }
  ];

  const videoTypes = [
    { name: 'Explainer Videos', description: 'Educational and instructional content' },
    { name: 'Product Demos', description: 'Showcase products and features' },
    { name: 'Social Media', description: 'Short-form content for platforms' },
    { name: 'Commercials', description: 'Professional advertising content' },
    { name: 'Tutorials', description: 'Step-by-step instructional videos' },
    { name: 'Presentations', description: 'Business and educational presentations' },
    { name: 'Animations', description: '2D and 3D animated content' },
    { name: 'Documentaries', description: 'Informational and educational content' }
  ];

  const technicalSpecs = [
    { spec: 'Video Quality', value: 'Up to 8K resolution' },
    { spec: 'Generation Speed', value: '2-10 minutes per video' },
    { spec: 'Video Length', value: 'Up to 10 minutes' },
    { spec: 'Frame Rate', value: 'Up to 60fps' },
    { spec: 'Export Formats', value: '15+ formats' },
    { spec: 'API Response Time', value: '< 5 minutes' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Storage', value: 'Unlimited cloud storage' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Generate professional videos in minutes instead of days',
      value: '95% faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Eliminate expensive production costs and equipment',
      value: '90% cheaper'
    },
    {
      icon: Star,
      title: 'Professional Quality',
      description: 'Studio-grade video quality with professional effects',
      value: 'Broadcast quality'
    },
    {
      icon: Zap,
      title: 'Unlimited Creativity',
      description: 'Create any video concept without physical limitations',
      value: '∞ possibilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Video Generation & Creation - Zion Tech Group</title>
        <meta name="description" content="Create professional videos with AI. Generate videos from text, images, or audio. Perfect for marketing, education, and entertainment. Starting at $299/month." />
        <meta name="keywords" content="ai video generation, video creation, text to video, ai video, video ai, automated video, video production" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Video AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Video Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional videos from text descriptions, images, or audio using advanced AI. Perfect for marketing, education, entertainment, and e-commerce.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8K</div>
              <div className="text-gray-300">Resolution</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">2-10min</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Export Formats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">60fps</div>
              <div className="text-gray-300">Frame Rate</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Video AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Video Generation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Video Types We Generate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {videoTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                <p className="text-sm text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Video AI Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating Videos with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your ideas into professional videos with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
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
  );
};

export default AIVideoGenerationPage;