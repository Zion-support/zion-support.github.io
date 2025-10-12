'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  FileText, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Lock,
  Globe,
  BarChart3,
  MessageSquare,
  Camera,
  Mail,
  Phone,
  MapPin,
  Shield,
  Cpu,
  Database,
  Code,
  Smartphone,
  Wifi,
  Settings,
  Play,
  Download,
  Upload,
  Eye,
  Edit3,
  Copy,
  Share2,
  Calendar,
  Clock,
  Award,
  DollarSign
} from 'lucide-react';

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced natural language processing and machine learning algorithms.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword density and meta tag generation.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Content Analytics',
      description: 'Track performance metrics, engagement rates, and conversion optimization insights.'
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your unique brand voice and tone across all content types.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Generation',
      description: 'Generate content instantly with our optimized AI models and cloud infrastructure.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard quality output'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words per month',
        '20 content templates',
        'Advanced SEO optimization',
        'Brand voice training',
        'Priority support',
        'Content analytics dashboard',
        'Multi-language support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with high-volume content needs',
      features: [
        'Unlimited words per month',
        'Unlimited content templates',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics & reporting',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      content: 'Zion AI Content Generator has revolutionized our content strategy. We\'ve increased our content output by 300% while maintaining quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'TechStart Inc.',
      content: 'The brand voice training feature is incredible. Our content now perfectly matches our company tone across all channels.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency Co.',
      content: 'The SEO optimization saves us hours of work. Our content ranks higher and drives more organic traffic than ever before.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const useCases = [
    {
      title: 'Blog Posts & Articles',
      description: 'Generate engaging blog posts, articles, and long-form content with proper structure and SEO optimization.',
      icon: <FileText className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Social Media Content',
      description: 'Create compelling social media posts, captions, and stories for all major platforms.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns, newsletters, and automated sequences.',
      icon: <Mail className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Product Descriptions',
      description: 'Create compelling product descriptions that convert visitors into customers.',
      icon: <Target className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Ad Copy & Landing Pages',
      description: 'Generate high-converting ad copy and landing page content for your campaigns.',
      icon: <TrendingUp className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Technical Documentation',
      description: 'Create clear, comprehensive technical documentation and user guides.',
      icon: <Code className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Advanced AI-Powered Content Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with our AI Content Generator Pro. Create high-quality, SEO-optimized content in 50+ languages. Starting at $99/month." />
        <meta name="keywords" content="AI content generator, content creation, SEO optimization, brand voice training, content analytics, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Content Generator Pro - Advanced AI-Powered Content Creation" />
        <meta property="og:description" content="Transform your content strategy with our AI Content Generator Pro. Create high-quality, SEO-optimized content in 50+ languages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-generator" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-content-generator.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Content Generator Pro - Advanced AI-Powered Content Creation" />
        <meta name="twitter:description" content="Transform your content strategy with our AI Content Generator Pro. Create high-quality, SEO-optimized content in 50+ languages." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-content-generator.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI Content Generator Pro</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI Content Generator
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pro</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your content strategy with our advanced AI-powered content generation platform. 
                Create high-quality, SEO-optimized content in 50+ languages with brand voice training and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Languages Supported</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">10M+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Words Generated</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and scale your content strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Versatile content generation for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:bg-white/15 relative ${
                  plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'border-2 border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their content strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-generated content. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}