'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Play, Camera, Video, Zap, 
  Sparkles, Brain, Clock, Users, Award, Shield, Globe, 
  Download, Share2, Settings, BarChart, TrendingUp, 
  MessageCircle, Heart, DollarSign, Target, CheckSquare
} from 'lucide-react';

const ZionAiVideoGeneratorPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Script Generation',
      description: 'Generate engaging video scripts using advanced AI that understands your brand voice and target audience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Professional Video Creation',
      description: 'Create high-quality videos with professional templates, animations, and effects in minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      description: 'Publish directly to YouTube, TikTok, Instagram, LinkedIn, and other platforms with optimized settings',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track video performance across platforms with detailed analytics and optimization suggestions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10 AI-generated videos per month',
        'HD quality export',
        '5 video templates',
        'Basic analytics',
        'Social media publishing',
        'Email support'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50 AI-generated videos per month',
        '4K quality export',
        '25+ video templates',
        'Advanced analytics',
        'Multi-platform publishing',
        'Custom branding',
        'Priority support',
        'API access'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high video needs',
      features: [
        'Unlimited AI-generated videos',
        '4K & 8K quality export',
        '100+ premium templates',
        'Real-time analytics dashboard',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Team collaboration tools'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create compelling product demos, explainer videos, and promotional content',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Social Media Content',
      description: 'Generate engaging TikTok, Instagram Reels, and YouTube Shorts automatically',
      icon: Share2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Training & Education',
      description: 'Create instructional videos, tutorials, and educational content for your team',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sales Presentations',
      description: 'Generate personalized sales videos and pitch presentations for prospects',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Videos Generated', icon: Video },
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '95%', label: 'Time Saved', icon: Clock },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - AI-Powered Video Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create professional videos in minutes with our AI-powered video generator. Generate scripts, create videos, and publish across platforms automatically. Start your free trial today!" />
        <meta name="keywords" content="AI video generator, video creation, automated video, social media videos, marketing videos, video templates" />
        <meta property="og:title" content="Zion AI Video Generator - AI-Powered Video Creation" />
        <meta property="og:description" content="Transform your ideas into professional videos with AI. Generate scripts, create videos, and publish automatically." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-video-generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Video Generator
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    That Actually Works
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Create professional videos in minutes, not hours. Our AI generates scripts, 
                  creates videos, and publishes them across all your social media platforms automatically.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    14-day free trial
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">Create Your First Video</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        Enter your topic or upload a script
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        AI generates video script and selects visuals
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        Video is created and ready to publish
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Video Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines cutting-edge technology with user-friendly design 
                to deliver professional results in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a content creator, marketer, or business owner, 
                our AI video generator adapts to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg mb-4`}>
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border ${
                    plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of creators and businesses who are already using our AI video generator 
              to create professional content in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiVideoGeneratorPage;