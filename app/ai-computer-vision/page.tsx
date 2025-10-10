'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Image, Target, CheckCircle, Star, ArrowRight, Users, Zap, Globe, Lock, Settings, Activity, TrendingUp, Brain, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced AI-powered object detection and recognition in images and videos',
      benefits: ['Real-time detection', 'High accuracy', 'Multiple objects', 'Custom training']
    },
    {
      icon: Camera,
      title: 'Image Classification',
      description: 'Intelligent image classification and categorization using deep learning',
      benefits: ['Multi-class classification', 'Custom categories', 'Batch processing', 'API integration']
    },
    {
      icon: Target,
      title: 'Facial Recognition',
      description: 'Secure and accurate facial recognition for authentication and identification',
      benefits: ['Face detection', 'Identity verification', 'Emotion analysis', 'Privacy protection']
    },
    {
      icon: Image,
      title: 'Image Processing',
      description: 'Advanced image enhancement, filtering, and manipulation capabilities',
      benefits: ['Quality enhancement', 'Noise reduction', 'Format conversion', 'Batch processing']
    },
    {
      icon: Brain,
      title: 'Scene Understanding',
      description: 'Comprehensive scene analysis and understanding for complex visual data',
      benefits: ['Scene classification', 'Context analysis', 'Spatial reasoning', 'Semantic segmentation']
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'AI-powered surveillance and security monitoring systems',
      benefits: ['Intrusion detection', 'Anomaly detection', 'Real-time alerts', 'Video analytics']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars and autonomous navigation systems',
      icon: '🚗',
      useCases: ['Lane detection', 'Object avoidance', 'Traffic sign recognition', 'Pedestrian detection']
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for diagnosis and treatment',
      icon: '🏥',
      useCases: ['X-ray analysis', 'MRI interpretation', 'Tumor detection', 'Diagnostic assistance']
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis and inventory management in retail',
      icon: '🛒',
      useCases: ['Customer tracking', 'Inventory monitoring', 'Heat mapping', 'Loss prevention']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control and defect detection in manufacturing processes',
      icon: '🏭',
      useCases: ['Defect detection', 'Quality inspection', 'Assembly verification', 'Process monitoring']
    },
    {
      title: 'Agriculture',
      description: 'Crop monitoring and agricultural automation using computer vision',
      icon: '🌾',
      useCases: ['Crop health analysis', 'Pest detection', 'Yield estimation', 'Irrigation optimization']
    },
    {
      title: 'Security & Surveillance',
      description: 'Advanced security systems with intelligent video analytics',
      icon: '🔒',
      useCases: ['Intrusion detection', 'Crowd monitoring', 'Access control', 'Threat assessment']
    }
  ];

  const benefits = [
    'Improve accuracy by 95%',
    'Reduce processing time by 80%',
    'Enable real-time analysis',
    'Automate visual tasks',
    'Enhance decision making',
    'Scale visual operations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Basic computer vision for small projects',
      features: [
        'Basic object detection',
        'Image classification',
        'Email support',
        'Standard API',
        '1,000 images/month',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Advanced computer vision for growing businesses',
      features: [
        'Advanced detection',
        'Custom models',
        'Priority support',
        'Advanced API',
        '10,000 images/month',
        'Real-time processing',
        'Custom training',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Full-scale computer vision for large organizations',
      features: [
        'Full AI suite',
        'Custom solutions',
        'Dedicated support',
        'Unlimited images',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      company: 'MedVision Inc',
      role: 'Chief Medical Officer',
      quote: 'AI computer vision improved our diagnostic accuracy by 40% and reduced analysis time by 60%.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'James Wilson',
      company: 'AutoTech Solutions',
      role: 'CTO',
      quote: 'The object detection system is incredibly accurate. Our autonomous vehicles are now 95% safer.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Chen',
      company: 'RetailAI Corp',
      role: 'VP of Technology',
      quote: 'Customer analytics improved our sales by 25% and reduced inventory costs by 30%.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered computer vision solutions. Object detection, image classification, facial recognition, and visual analytics for your business." />
        <meta name="keywords" content="AI computer vision, object detection, image classification, facial recognition, visual analytics, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6 animate-bounce">👁️</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Computer Vision
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              See the World Through AI Eyes
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform visual data into actionable insights with advanced AI-powered computer vision. 
              Detect objects, analyze images, and understand visual content like never before.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Object Types</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
                <div className="text-gray-300">Analysis</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Vision Analysis
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Computer Vision Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered visual analysis capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with AI-powered computer vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-4xl mb-4 text-center">{application.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{application.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{application.description}</p>
                  <div className="space-y-2">
                    {application.useCases.map((useCase, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                        <span className="text-cyan-400 font-semibold">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Computer Vision?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of intelligent visual analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Computer Vision Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right vision solution for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations transformed with computer vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your computer vision transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AIComputerVisionPage;