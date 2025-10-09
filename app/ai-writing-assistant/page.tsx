'use client';
import React from 'react';
import { PenTool, Brain, Zap, CheckCircle, Star, ArrowRight, FileText, Users, Globe, Shield, BarChart, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for any purpose with advanced natural language processing.',
      benefits: ['50+ content types supported', 'SEO-optimized writing', 'Brand voice consistency']
    },
    {
      icon: PenTool,
      title: 'Smart Editing',
      description: 'AI-powered editing that improves grammar, style, and clarity while maintaining your voice.',
      benefits: ['Real-time grammar checking', 'Style suggestions', 'Tone optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate seamlessly with team members on content projects with version control.',
      benefits: ['Real-time collaboration', 'Version history', 'Comment system']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Write and translate content in 25+ languages with native-level quality.',
      benefits: ['25+ languages supported', 'Cultural context awareness', 'Native-level translations']
    },
    {
      icon: Shield,
      title: 'Plagiarism Detection',
      description: 'Ensure originality with advanced plagiarism detection and citation management.',
      benefits: ['Real-time plagiarism checking', 'Citation suggestions', 'Originality reports']
    },
    {
      icon: BarChart,
      title: 'Content Analytics',
      description: 'Track content performance with detailed analytics and optimization suggestions.',
      benefits: ['Performance metrics', 'Engagement tracking', 'Optimization recommendations']
    }
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: FileText, description: 'SEO-optimized articles and blog content' },
    { name: 'Marketing Copy', icon: Sparkles, description: 'Compelling ads, emails, and promotional content' },
    { name: 'Technical Documentation', icon: PenTool, description: 'Clear, comprehensive technical writing' },
    { name: 'Social Media', icon: Users, description: 'Engaging posts for all social platforms' },
    { name: 'Product Descriptions', icon: Globe, description: 'Persuasive e-commerce product content' },
    { name: 'Email Campaigns', icon: Zap, description: 'High-converting email marketing content' }
  ];

  const pricingPlans = [
    {
      name: 'Writer',
      price: '$39',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '10,000 words per month',
        'Basic AI writing tools',
        '5 content templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        '50,000 words per month',
        'Advanced AI features',
        'Unlimited templates',
        'Team collaboration',
        'Priority support',
        'Advanced analytics',
        'Plagiarism detection'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Full AI capabilities',
        'Custom templates',
        'White-label options',
        '24/7 dedicated support',
        'API access',
        'Custom integrations',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Content Marketing Manager',
      company: 'Digital Agency Pro',
      content: 'AI Writing Assistant has increased our content output by 300% while maintaining quality. The AI suggestions are spot-on.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Blogger',
      company: 'Tech Insights',
      content: 'The multi-language support is incredible. I can now create content for my international audience effortlessly.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Manager',
      company: 'Retail Plus',
      content: 'Our product descriptions have never been better. Conversion rates increased by 40% after using AI Writing Assistant.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <PenTool className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Writing Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most advanced AI-powered writing tool that helps you create compelling, 
              high-quality content 10x faster. From blog posts to marketing copy, 
              we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster content creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Languages supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">User satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content for Every Purpose
            </h2>
            <p className="text-xl text-gray-300">
              Generate high-quality content for any use case with our specialized AI models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to create exceptional content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of content creators who trust AI Writing Assistant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Writing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of AI-powered content creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWritingAssistantPage;