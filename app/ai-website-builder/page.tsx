'use client';
import React from 'react';
import { Globe, Zap, Palette, Code, Smartphone, Search, CheckCircle, ArrowRight, Phone, Star, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI Website Generation',
      description: 'Create professional websites in minutes with AI-powered design and content generation',
      benefits: ['Instant website creation', 'AI-generated content', 'Professional templates']
    },
    {
      icon: Palette,
      title: 'Smart Design System',
      description: 'AI automatically creates cohesive design systems and brand guidelines',
      benefits: ['Consistent branding', 'Color palette generation', 'Typography optimization']
    },
    {
      icon: Code,
      title: 'Clean Code Generation',
      description: 'Generate clean, optimized HTML, CSS, and JavaScript code automatically',
      benefits: ['SEO-optimized code', 'Mobile-responsive', 'Performance optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'AI ensures your website looks perfect on all devices and screen sizes',
      benefits: ['Responsive design', 'Touch optimization', 'Cross-browser compatibility']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and AI-powered optimization for better search rankings',
      benefits: ['Meta tag generation', 'Schema markup', 'Performance optimization']
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'Intuitive drag-and-drop interface with AI-powered suggestions',
      benefits: ['Visual editor', 'Real-time preview', 'One-click publishing']
    }
  ];

  const websiteTypes = [
    {
      title: 'Business Websites',
      description: 'Professional websites for businesses of all sizes',
      icon: Globe,
      examples: ['Corporate sites', 'Service pages', 'Portfolio sites']
    },
    {
      title: 'E-commerce Stores',
      description: 'Complete online stores with AI-powered product recommendations',
      icon: Star,
      examples: ['Product catalogs', 'Shopping carts', 'Payment integration']
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages for marketing campaigns',
      icon: Zap,
      examples: ['Lead generation', 'Product launches', 'Event promotion']
    },
    {
      title: 'Blogs & Content',
      description: 'Content-focused websites with AI-powered content suggestions',
      icon: Code,
      examples: ['Personal blogs', 'News sites', 'Content hubs']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Describe Your Vision',
      description: 'Tell our AI what kind of website you want to create',
      duration: '2 minutes'
    },
    {
      step: '02',
      title: 'AI Generation',
      description: 'Our AI creates your website with content, design, and functionality',
      duration: '5-10 minutes'
    },
    {
      step: '03',
      title: 'Customize & Refine',
      description: 'Use our visual editor to customize your website',
      duration: '15-30 minutes'
    },
    {
      step: '04',
      title: 'Publish & Go Live',
      description: 'Publish your website with one click and go live instantly',
      duration: '1 minute'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'month',
      description: 'Perfect for personal projects and small businesses',
      features: [
        '1 website',
        'Basic AI templates',
        'Custom domain',
        'SSL certificate',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '5 websites',
        'Advanced AI features',
        'Custom branding',
        'E-commerce integration',
        'Priority support',
        'Advanced analytics',
        'SEO tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited websites',
        'Custom AI training',
        'White-label solution',
        'API access',
        '24/7 dedicated support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Globe, value: '10,000+', label: 'Websites Created' },
    { icon: Zap, value: '95%', label: 'Faster Development' },
    { icon: Star, value: '4.8/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Website Builder
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create stunning, professional websites in minutes with AI-powered design, 
              content generation, and optimization tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI-Powered Website Creation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Website Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Create Any Type of Website
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {websiteTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users who have created stunning websites with our AI-powered builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Building Now
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline px-8 py-4 text-lg"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;