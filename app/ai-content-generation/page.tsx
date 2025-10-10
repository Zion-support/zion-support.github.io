'use client';
import React from 'react';
import { CheckCircle, Star, ArrowRight, FileText, Users, Target, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Settings, Lock, Eye, Activity, Phone, Mail, MapPin, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: FileText,
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js']
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: Users,
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research and generation',
        'Engagement prediction',
        'Visual content creation',
        'Posting schedule automation',
        'Performance tracking'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Save 30+ hours per week',
        'Improve brand consistency',
        'Boost follower growth by 250%'
      ],
      marketPrice: '$300-600/month',
      technologies: ['GPT-4', 'DALL-E', 'Custom Models', 'React', 'Python']
    },
    {
      title: 'AI Email Marketing Generator',
      description: 'Intelligent email campaign creation with personalization, A/B testing, and conversion optimization.',
      icon: Mail,
      price: '$179/month',
      features: [
        'Personalized email generation',
        'A/B testing automation',
        'Subject line optimization',
        'Content personalization',
        'Send time optimization',
        'Conversion tracking'
      ],
      benefits: [
        'Increase open rates by 180%',
        'Boost click-through rates by 220%',
        'Save 25+ hours per week',
        'Improve conversion rates by 150%'
      ],
      marketPrice: '$400-800/month',
      technologies: ['GPT-4', 'Machine Learning', 'React', 'Node.js', 'MongoDB']
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI models trained on your specific requirements',
      benefits: ['Natural language generation', 'Context awareness', 'Brand consistency', 'Quality optimization']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword research and optimization',
      benefits: ['Keyword research', 'SEO scoring', 'Meta tag generation', 'Content optimization']
    },
    {
      icon: Zap,
      title: 'Multi-Platform Support',
      description: 'Create content optimized for different platforms and formats',
      benefits: ['Platform-specific formatting', 'Multi-format support', 'Cross-platform consistency', 'Adaptive content']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Built-in quality checks and plagiarism detection to ensure content excellence',
      benefits: ['Plagiarism detection', 'Quality scoring', 'Fact checking', 'Grammar optimization']
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Reduce content creation costs by 70%',
    'Improve SEO performance by 150%',
    'Save 40+ hours per week',
    'Enhance content quality and consistency',
    'Scale content marketing efforts'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and individual creators',
      features: [
        'Basic content generation',
        'Up to 50 articles/month',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Advanced AI features',
        'Unlimited content generation',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Generation
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your content marketing with AI-powered content generation. Create high-quality, 
                SEO-optimized content at scale with our advanced AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Creating
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Content Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered content generation solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{service.price}</div>
                    <div className="text-sm text-gray-400">Market price: {service.marketPrice}</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-green-400">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for content creation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform your content marketing
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
                Flexible pricing for content generation solutions
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
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start generating high-quality content with AI today
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

export default AIContentGenerationPage;