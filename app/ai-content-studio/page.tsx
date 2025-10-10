'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, FileText, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, TrendingUp } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning visual content with AI-powered design tools and templates.',
      benefits: ['AI design generation', 'Custom templates', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'AI-powered content analysis and optimization for better performance and engagement.',
      benefits: ['Performance analysis', 'Engagement prediction', 'Content optimization', 'Trend analysis']
    },
    {
      icon: FileText,
      title: 'Multi-Format Content',
      description: 'Generate content in multiple formats including text, images, videos, and audio.',
      benefits: ['Multi-format support', 'Cross-platform compatibility', 'Automated conversion', 'Quality optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Collaborate with team members in real-time with AI-powered suggestions and feedback.',
      benefits: ['Real-time editing', 'Team collaboration', 'AI suggestions', 'Version control']
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Create content tailored to specific audiences with AI-powered personalization.',
      benefits: ['Audience analysis', 'Personalization', 'A/B testing', 'Performance tracking']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights to optimize content performance.',
      benefits: ['Performance metrics', 'Engagement analytics', 'ROI tracking', 'Custom reports']
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Improve engagement by 200%',
    'Save 50+ hours per week',
    'Reduce content costs by 70%',
    'Enable consistent branding',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
      title: 'Marketing Campaigns',
      description: 'Create compelling marketing campaigns with AI-powered content generation',
      icon: '📢'
    },
    {
      title: 'Social Media',
      description: 'Generate engaging social media content across all platforms',
      icon: '📱'
    },
    {
      title: 'E-commerce',
      description: 'Create product descriptions, ads, and promotional content',
      icon: '🛒'
    },
    {
      title: 'Blog & Articles',
      description: 'Generate high-quality blog posts and articles with AI assistance',
      icon: '📝'
    },
    {
      title: 'Video Content',
      description: 'Create engaging video content with AI-powered editing and production',
      icon: '🎬'
    },
    {
      title: 'Educational Content',
      description: 'Generate educational materials, courses, and training content',
      icon: '📚'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Create stunning content with our AI Content Studio. Advanced design tools, content generation, and collaboration features for better content creation." />
        <meta name="keywords" content="AI content studio, content creation, design tools, content generation, marketing automation, content AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-8">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning content with our AI Content Studio. Advanced design tools, 
              content generation, and collaboration features for better content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Content Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Studio combines cutting-edge technology with creative expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From marketing to education, our AI Content Studio serves diverse content needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Why Choose Our AI Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of content creation with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-xl text-rose-100 mb-8">
                Join thousands of creators who are already using our AI Content Studio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIContentStudioPage;