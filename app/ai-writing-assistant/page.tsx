'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality, engaging content for blogs, articles, social media, and marketing materials',
      icon: Brain,
      benefits: [
        'Generate 10,000+ words per hour',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Support for 50+ languages'
      ],
      price: '$199/month',
      marketPrice: '$399-799/month'
    },
    {
      title: 'Smart Content Optimization',
      description: 'Automatically optimize content for readability, SEO, and engagement',
      icon: Target,
      benefits: [
        'Real-time SEO suggestions',
        'Readability score optimization',
        'Engagement prediction',
        'A/B testing recommendations'
      ],
      price: '$149/month',
      marketPrice: '$299-599/month'
    },
    {
      title: 'Multi-Format Support',
      description: 'Create content for blogs, emails, social media, ads, and more',
      icon: FileText,
      benefits: [
        'Blog posts and articles',
        'Email campaigns',
        'Social media content',
        'Ad copy and landing pages'
      ],
      price: '$99/month',
      marketPrice: '$199-399/month'
    },
    {
      title: 'Collaborative Writing',
      description: 'Team collaboration features with real-time editing and feedback',
      icon: Users,
      benefits: [
        'Real-time collaboration',
        'Version control',
        'Comment and feedback system',
        'Team analytics dashboard'
      ],
      price: '$299/month',
      marketPrice: '$599-999/month'
    },
    {
      title: 'Content Research Assistant',
      description: 'AI-powered research and fact-checking for accurate content',
      icon: Search,
      benefits: [
        'Automated fact-checking',
        'Trend analysis',
        'Competitor research',
        'Source verification'
      ],
      price: '$179/month',
      marketPrice: '$349-699/month'
    },
    {
      title: 'Brand Voice Training',
      description: 'Train AI to match your specific brand voice and tone',
      icon: Palette,
      benefits: [
        'Custom brand voice models',
        'Tone consistency',
        'Style guide integration',
        'Brand compliance checking'
      ],
      price: '$249/month',
      marketPrice: '$499-899/month'
    }
  ];

  const useCases = [
    {
      title: 'Content Marketing',
      description: 'Create engaging blog posts, articles, and content for your marketing campaigns',
      icon: BarChart,
      examples: ['Blog posts', 'White papers', 'Case studies', 'Newsletters']
    },
    {
      title: 'Social Media Management',
      description: 'Generate compelling social media content across all platforms',
      icon: Globe,
      examples: ['Facebook posts', 'Twitter content', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Create personalized email campaigns that convert',
      icon: Mail,
      examples: ['Newsletter content', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'E-commerce Content',
      description: 'Generate product descriptions, reviews, and marketing copy',
      icon: ShoppingCart,
      examples: ['Product descriptions', 'Category pages', 'Review responses', 'Ad copy']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for individual writers and small teams',
      features: [
        '10,000 words per month',
        'Basic AI writing tools',
        '5 team members',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words per month',
        'Advanced AI features',
        '15 team members',
        'Priority support',
        'Custom templates',
        'SEO optimization',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations with extensive content needs',
      features: [
        'Unlimited words',
        'All AI features',
        'Unlimited team members',
        '24/7 support',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Content Marketing Manager',
      content: 'The AI Writing Assistant has revolutionized our content creation process. We can now produce 5x more content with better quality and consistency.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Agency Pro',
      role: 'Creative Director',
      content: 'The brand voice training feature is incredible. It perfectly captures our client\'s tone and style, saving us hours of editing time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'Our product descriptions are now more engaging and SEO-optimized. Sales have increased by 30% since we started using this tool.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Writing Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered writing assistant for content creation, optimization, and collaboration. Generate high-quality content 10x faster with our intelligent writing tools." />
        <meta name="keywords" content="ai writing assistant, content generation, writing tools, content marketing, seo writing, brand voice" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content creation with our advanced AI writing assistant. Generate high-quality, engaging content 10x faster with intelligent optimization and collaboration features.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Writing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Writing Assistant Inquiry"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Writing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-green-400">{feature.price}</span>
                      <span className="text-sm text-gray-400">Market: {feature.marketPrice}</span>
                    </div>
                  </div>
                </div>
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Content Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-1">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI Writing Assistant today and experience the future of content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Writing Assistant Inquiry"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p>Contact: kleber@ziontechgroup.com | +1 302 464 0950</p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWritingAssistantPage;
