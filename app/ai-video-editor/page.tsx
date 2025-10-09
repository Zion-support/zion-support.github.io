'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Play, Download, Star, CheckCircle, ArrowRight, Phone, Mail, Zap, Video, Edit, Scissors, Palette, Music, Upload, Share, Clock, Users, Award, TrendingUp } from 'lucide-react';

const AIVideoEditorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'AI-Powered Auto-Editing',
      description: 'Automatically edit videos with AI that understands context, pacing, and visual appeal',
      benefits: ['90% faster editing', 'Professional quality output', 'No technical skills required']
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Smart Scene Detection',
      description: 'Intelligently identify and cut between scenes, remove filler content, and optimize flow',
      benefits: ['Automatic scene cuts', 'Filler content removal', 'Smooth transitions']
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'AI Color Grading',
      description: 'Professional color correction and grading with AI that matches your brand style',
      benefits: ['One-click color correction', 'Brand style matching', 'Professional look']
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Smart Audio Sync',
      description: 'Automatically sync audio with video, remove background noise, and add music',
      benefits: ['Perfect audio sync', 'Noise reduction', 'Music integration']
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: 'Multi-Format Export',
      description: 'Export to any format, resolution, and platform with optimized settings',
      benefits: ['All major formats', 'Platform optimization', 'Quality preservation']
    },
    {
      icon: <Share className="w-6 h-6" />,
      title: 'Direct Publishing',
      description: 'Publish directly to YouTube, TikTok, Instagram, and other platforms',
      benefits: ['One-click publishing', 'Platform optimization', 'Scheduling support']
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for content creators and small businesses',
      features: [
        'Up to 10 videos per month',
        '1080p export quality',
        'Basic AI editing features',
        '5GB cloud storage',
        'Standard templates',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 79,
      period: 'month',
      description: 'Ideal for professional creators and agencies',
      features: [
        'Unlimited videos',
        '4K export quality',
        'Advanced AI features',
        '50GB cloud storage',
        'Premium templates',
        'Priority support',
        'Team collaboration',
        'Brand kit integration'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Unlimited cloud storage',
        'Custom AI training',
        'White-label solution',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50K+', label: 'Videos Created', icon: <Video className="w-8 h-8" /> },
    { number: '95%', label: 'Time Saved', icon: <Clock className="w-8 h-8" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="w-8 h-8" /> },
    { number: '10K+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'TechVlog',
      content: 'AI Video Editor has revolutionized my content creation process. What used to take me 8 hours now takes 30 minutes!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director',
      company: 'StartupXYZ',
      content: 'The AI automatically creates professional-looking videos that match our brand perfectly. Our engagement increased by 300%.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      company: 'Agency Pro',
      content: 'I manage 20+ client accounts and this tool saves me hours every day. The quality is consistently excellent.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Video Editor - Zion Tech Group | Professional Video Editing Made Simple</title>
        <meta name="description" content="Transform your video content with AI-powered editing. Create professional videos 10x faster with our intelligent video editor. Try free for 14 days." />
        <meta name="keywords" content="AI video editor, video editing software, automated video editing, content creation, video marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-video-editor" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Video Editor
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create professional videos 10x faster with AI-powered editing. 
              No technical skills required - just upload and let AI do the magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI understands video content and automatically creates professional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and upgrade as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-800/50 rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who are creating amazing videos with AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI video editing. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVideoEditorPage;
