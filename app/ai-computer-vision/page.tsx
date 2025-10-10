'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Camera, Image, Target, CheckCircle, ArrowRight, Phone, Mail, Star, TrendingUp, Users, Shield, Settings, Globe, Brain, Cpu, Database, Cloud, Lock, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object detection and recognition using state-of-the-art AI models',
      benefits: ['Real-time detection', 'High accuracy', 'Multiple object classes', 'Custom training']
    },
    {
      icon: Camera,
      title: 'Image Classification',
      description: 'Intelligent image classification and categorization for various use cases',
      benefits: ['Multi-class classification', 'Custom categories', 'Batch processing', 'API integration']
    },
    {
      icon: Target,
      title: 'Facial Recognition',
      description: 'Secure and accurate facial recognition systems for authentication and identification',
      benefits: ['High accuracy', 'Privacy protection', 'Real-time processing', 'Anti-spoofing']
    },
    {
      icon: Image,
      title: 'Image Processing',
      description: 'Advanced image processing and enhancement using AI algorithms',
      benefits: ['Quality enhancement', 'Noise reduction', 'Color correction', 'Format conversion']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Computer vision for self-driving cars and autonomous navigation systems',
      icon: Target,
      useCases: ['Lane detection', 'Object recognition', 'Traffic sign reading', 'Pedestrian detection']
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for diagnosis and treatment planning',
      icon: Eye,
      useCases: ['X-ray analysis', 'MRI interpretation', 'Tumor detection', 'Diagnosis assistance']
    },
    {
      title: 'Retail Analytics',
      description: 'Computer vision solutions for retail and e-commerce applications',
      icon: Users,
      useCases: ['Customer tracking', 'Inventory management', 'Product recognition', 'Behavior analysis']
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with real-time threat detection',
      icon: Shield,
      useCases: ['Intrusion detection', 'Person tracking', 'Anomaly detection', 'Access control']
    }
  ];

  const benefits = [
    'Improve accuracy by 95%',
    'Reduce processing time by 80%',
    'Enable real-time analysis',
    'Scale across multiple use cases',
    'Reduce manual inspection costs',
    'Enhance decision-making capabilities'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small projects and prototypes',
      features: [
        'Basic object detection',
        'Up to 1,000 images/month',
        'Email support',
        'Standard models',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI models',
        'Up to 10,000 images/month',
        'Priority support',
        'Custom training',
        'API access',
        'Real-time processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale deployments',
      features: [
        'Full customization',
        'Unlimited processing',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Computer Vision | Zion Tech Group</title>
        <meta name="description" content="Professional AI computer vision services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai computer vision, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Computer Vision
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI computer vision services powered by advanced AI and cutting-edge technology. 
                Transform your business with intelligent image and video analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Computer Vision Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for image and video analysis
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Computer vision solutions across various industries
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <application.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                  <p className="text-gray-300 mb-4">{application.description}</p>
                  <ul className="space-y-2">
                    {application.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Computer Vision?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for computer vision solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your computer vision journey today and transform your business with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIComputerVisionPage;