'use client';
import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Play, 
  Camera, 
  Mic, 
  Edit3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Palette,
  Music,
  Upload,
  Download,
  Share2,
  Settings,
  BarChart,
  Target,
  Award,
  Shield,
  Globe,
  Sparkles
} from 'lucide-react';

const AIVideoGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Script Generation',
      description: 'Generate compelling video scripts from simple prompts using advanced natural language processing.',
      benefits: ['Auto-generated scripts', 'Multiple tone options', 'SEO-optimized content', 'Brand voice matching']
    },
    {
      icon: Camera,
      title: 'Smart Video Creation',
      description: 'Create professional videos from text, images, or audio with AI-powered scene generation and transitions.',
      benefits: ['Auto scene generation', 'Smart transitions', 'Professional templates', 'Custom branding']
    },
    {
      icon: Mic,
      title: 'AI Voice Synthesis',
      description: 'Generate natural-sounding voiceovers in 50+ languages with customizable voices and emotions.',
      benefits: ['50+ voice options', 'Emotion control', 'Multiple languages', 'Natural pronunciation']
    },
    {
      icon: Palette,
      title: 'Visual Effects & Animation',
      description: 'Add stunning visual effects, animations, and motion graphics automatically with AI assistance.',
      benefits: ['Auto animations', 'Visual effects', 'Motion graphics', 'Color grading']
    },
    {
      icon: Music,
      title: 'AI Music & Sound',
      description: 'Generate royalty-free background music and sound effects that perfectly match your video content.',
      benefits: ['Royalty-free music', 'Auto sound matching', 'Custom compositions', 'Mood-based selection']
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      description: 'Publish directly to YouTube, TikTok, Instagram, and other platforms with optimized settings.',
      benefits: ['Multi-platform publishing', 'Auto optimization', 'Scheduling tools', 'Analytics integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '10 videos per month',
        'HD quality export',
        'Basic AI voices',
        'Standard templates',
        'Email support',
        'Social media publishing'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for marketing teams and agencies',
      features: [
        'Unlimited videos',
        '4K quality export',
        'Premium AI voices',
        'Advanced templates',
        'Priority support',
        'White-label options',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and media companies',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'API access',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create engaging promotional content for social media and advertising campaigns.',
      icon: Target,
      examples: ['Product demos', 'Brand stories', 'Social media ads', 'Email campaigns']
    },
    {
      title: 'Educational Content',
      description: 'Produce instructional videos and training materials with AI-generated explanations.',
      icon: Award,
      examples: ['Tutorial videos', 'Course content', 'Training materials', 'How-to guides']
    },
    {
      title: 'Social Media',
      description: 'Generate viral content for TikTok, Instagram, YouTube, and other platforms.',
      icon: Share2,
      examples: ['TikTok videos', 'Instagram reels', 'YouTube shorts', 'LinkedIn videos']
    },
    {
      title: 'Corporate Communications',
      description: 'Create professional internal and external communication videos.',
      icon: Globe,
      examples: ['Company updates', 'Product launches', 'Employee training', 'Client presentations']
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director, Creative Agency',
      content: 'AI Video Generator has revolutionized our content creation process. We can now produce 10x more video content with the same team.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'YouTuber & Educator',
      content: 'The AI voice synthesis is incredibly natural. My audience can\'t tell the difference between AI and human narration.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'As a small business owner, this tool has given me the power to create professional marketing videos without a huge budget.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <Video className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Video Generator Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning professional videos in minutes, not hours. From script to final cut, our AI handles everything while you focus on your message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Creating Videos
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Create Amazing Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to publication, our AI-powered platform handles every aspect of video creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're a content creator, marketer, educator, or business owner, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white w-fit mx-auto mb-4">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Start with a free trial and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400 ring-2 ring-pink-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
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

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Content Creators Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of creators who are already using AI Video Generator Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Start your free trial today and see how easy it is to create professional videos with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-pink-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIVideoGeneratorPage;