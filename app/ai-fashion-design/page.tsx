'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Shirt, Download, Upload, Settings, Brain, Sparkles, Play, Pause, Volume2, FileText, Terminal } from 'lucide-react';

const AIFashionDesignPage: React.FC = () => {
  const features = [
    {
      icon: Shirt,
      title: 'AI Fashion Design',
      description: 'Generate unique fashion designs, patterns, and styles using advanced AI algorithms',
      benefits: ['Design generation', 'Pattern creation', 'Style transfer', 'Trend analysis']
    },
    {
      icon: Brain,
      title: 'Trend Prediction',
      description: 'Predict upcoming fashion trends and analyze market preferences',
      benefits: ['Trend forecasting', 'Market analysis', 'Style prediction', 'Color trends']
    },
    {
      icon: Settings,
      title: 'Virtual Try-On',
      description: 'AI-powered virtual try-on technology for online shopping experiences',
      benefits: ['Virtual fitting', 'Size optimization', 'Style matching', 'AR integration']
    },
    {
      icon: Terminal,
      title: 'Color Matching',
      description: 'Intelligent color coordination and palette generation for fashion designs',
      benefits: ['Color harmony', 'Palette generation', 'Seasonal colors', 'Brand consistency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Designer',
      price: '$299/month',
      description: 'Perfect for individual fashion designers and small brands',
      features: [
        'Up to 100 designs/month',
        'Basic trend analysis',
        '2D design tools',
        'Email support',
        'API access',
        'Export formats'
      ],
      popular: false
    },
    {
      name: 'Brand',
      price: '$799/month',
      description: 'Ideal for fashion brands and design studios',
      features: [
        'Up to 1,000 designs/month',
        'Advanced trend analysis',
        '3D design tools',
        'Priority support',
        'Custom training',
        'Team collaboration',
        'Virtual try-on',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/month',
      description: 'For large fashion companies and retailers',
      features: [
        'Unlimited designs',
        'Premium trend analysis',
        'Full 3D suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Fashion Design',
      description: 'Create unique clothing designs and collections with AI assistance',
      icon: '👗',
      examples: ['Dress designs', 'Shirt patterns', 'Accessory designs', 'Collection planning']
    },
    {
      title: 'E-commerce',
      description: 'Enhance online shopping with virtual try-on and style recommendations',
      icon: '🛍️',
      examples: ['Virtual fitting', 'Style matching', 'Size recommendations', 'Personalized shopping']
    },
    {
      title: 'Retail',
      description: 'Optimize inventory and merchandising with trend analysis',
      icon: '🏪',
      examples: ['Inventory planning', 'Merchandising', 'Trend analysis', 'Customer insights']
    },
    {
      title: 'Marketing',
      description: 'Create compelling fashion marketing content and campaigns',
      icon: '📱',
      examples: ['Social media content', 'Ad campaigns', 'Influencer partnerships', 'Brand promotion']
    }
  ];

  const fashionCategories = [
    { name: 'Women\'s Fashion', description: 'Dresses, tops, bottoms, and accessories' },
    { name: 'Men\'s Fashion', description: 'Shirts, pants, suits, and casual wear' },
    { name: 'Children\'s Wear', description: 'Kids clothing and accessories' },
    { name: 'Activewear', description: 'Sports and fitness clothing' },
    { name: 'Formal Wear', description: 'Evening wear and special occasion outfits' },
    { name: 'Casual Wear', description: 'Everyday comfortable clothing' },
    { name: 'Accessories', description: 'Bags, shoes, jewelry, and other accessories' },
    { name: 'Seasonal', description: 'Seasonal collections and weather-appropriate wear' }
  ];

  const technicalSpecs = [
    { spec: 'Design Quality', value: 'High-resolution' },
    { spec: 'Generation Speed', value: 'Real-time' },
    { spec: 'Trend Accuracy', value: '95%+' },
    { spec: 'Categories', value: '50+ fashion categories' },
    { spec: 'Color Options', value: 'Unlimited color palettes' },
    { spec: 'API Response Time', value: '< 3 seconds' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Design Storage', value: 'Unlimited' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Design',
      description: 'Create fashion designs 10x faster than traditional methods',
      value: '10x faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Reduce design and prototyping costs significantly',
      value: '70% cheaper'
    },
    {
      icon: Star,
      title: 'Trend Accuracy',
      description: 'Predict fashion trends with 95% accuracy',
      value: '95% accuracy'
    },
    {
      icon: Zap,
      title: 'Unlimited Creativity',
      description: 'Explore endless design possibilities and combinations',
      value: '∞ designs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fashion Design & Trend Analysis - Zion Tech Group</title>
        <meta name="description" content="Create fashion designs with AI. Generate unique styles, predict trends, and enable virtual try-on. Perfect for designers, brands, and retailers. Starting at $299/month." />
        <meta name="keywords" content="ai fashion design, fashion ai, trend prediction, virtual try-on, fashion technology, design automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Fashion AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Fashion Design
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create unique fashion designs, predict trends, and enable virtual try-on experiences. Perfect for designers, brands, and retailers.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Design</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Trend Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-gray-300">Designs</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Fashion AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Fashion Design?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Fashion Categories We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {fashionCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Fashion AI Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Designing Fashion with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your fashion ideas into stunning designs with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFashionDesignPage;