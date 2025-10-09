'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Shirt, Palette, Scissors } from 'lucide-react';

const AIFashionDesignPage: React.FC = () => {
  const features = [
    'Generate fashion designs from text descriptions',
    'Create custom clothing patterns and templates',
    'Virtual try-on technology for customers',
    'Trend prediction and analysis',
    'Color palette generation and matching',
    'Size optimization and fit prediction',
    'Fabric recommendation and sourcing',
    'Sustainable fashion design suggestions',
    'Brand style consistency maintenance',
    'Real-time design collaboration tools'
  ];

  const benefits = [
    'Reduce design time by 75%',
    'Lower production costs by 60%',
    'Increase design accuracy by 90%',
    'Enable rapid prototyping and iteration',
    'Improve customer satisfaction with virtual try-on',
    'Predict and follow fashion trends',
    'Reduce waste through better sizing',
    'Enable sustainable fashion practices'
  ];

  const categories = [
    { name: 'Women\'s Fashion', description: 'Dresses, tops, bottoms, and accessories', icon: '👗' },
    { name: 'Men\'s Fashion', description: 'Shirts, pants, suits, and casual wear', icon: '👔' },
    { name: 'Children\'s Wear', description: 'Kids clothing and accessories', icon: '👶' },
    { name: 'Activewear', description: 'Sportswear and fitness clothing', icon: '🏃' },
    { name: 'Formal Wear', description: 'Evening gowns, suits, and special occasion', icon: '🎩' },
    { name: 'Accessories', description: 'Bags, shoes, jewelry, and fashion accessories', icon: '👜' },
    { name: 'Lingerie', description: 'Intimate apparel and sleepwear', icon: '👙' },
    { name: 'Outerwear', description: 'Coats, jackets, and seasonal clothing', icon: '🧥' }
  ];

  const useCases = [
    {
      title: 'Fashion Retail',
      description: 'Create and manage clothing collections for retail stores',
      icon: '🛍️',
      examples: ['Seasonal collections', 'Trend-based designs', 'Customer preferences', 'Inventory optimization']
    },
    {
      title: 'E-commerce',
      description: 'Design products for online fashion stores',
      icon: '💻',
      examples: ['Virtual try-on', 'Size recommendations', 'Custom designs', 'Personalized styling']
    },
    {
      title: 'Fashion Brands',
      description: 'Develop unique brand identities and collections',
      icon: '🏷️',
      examples: ['Brand consistency', 'Signature styles', 'Collection themes', 'Market positioning']
    },
    {
      title: 'Sustainable Fashion',
      description: 'Create eco-friendly and sustainable designs',
      icon: '🌱',
      examples: ['Eco materials', 'Zero waste patterns', 'Circular fashion', 'Sustainable practices']
    },
    {
      title: 'Custom Design',
      description: 'Create personalized clothing for individual customers',
      icon: '✂️',
      examples: ['Bespoke tailoring', 'Wedding dresses', 'Custom fits', 'Personal styling']
    },
    {
      title: 'Fashion Education',
      description: 'Teach fashion design and trend analysis',
      icon: '🎓',
      examples: ['Design courses', 'Trend workshops', 'Pattern making', 'Fashion history']
    }
  ];

  const pricing = [
    {
      name: 'Designer',
      price: '$199/month',
      description: 'Perfect for individual designers',
      features: [
        'Up to 100 designs/month',
        'Basic trend analysis',
        'Standard quality output',
        'Email support',
        'Basic templates',
        'PNG/PDF export'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$499/month',
      description: 'Ideal for fashion studios',
      features: [
        'Up to 500 designs/month',
        'Advanced trend analysis',
        'High quality output',
        'Priority support',
        'Advanced templates',
        'Multiple export formats',
        'Virtual try-on',
        'Collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large fashion companies',
      features: [
        'Unlimited designs',
        'Premium trend analysis',
        'Ultra-high quality output',
        'Dedicated support',
        'Custom model training',
        'API access',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const technologies = [
    'FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision',
    'Custom Fashion Models', 'Deep Learning', 'Generative AI',
    'Pattern Recognition', 'Color Analysis', 'Fabric Simulation'
  ];

  const workflow = [
    {
      step: 1,
      title: 'Describe Your Vision',
      description: 'Input design requirements and style preferences',
      icon: '✍️'
    },
    {
      step: 2,
      title: 'AI Design Generation',
      description: 'Our AI creates fashion designs and patterns',
      icon: '🤖'
    },
    {
      step: 3,
      title: 'Review & Refine',
      description: 'Review designs and make adjustments',
      icon: '👁️'
    },
    {
      step: 4,
      title: 'Produce & Launch',
      description: 'Generate patterns and launch your design',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fashion Design - Zion Tech Group</title>
        <meta name="description" content="Generate fashion designs with AI. Create clothing patterns, virtual try-on, and trend analysis. Perfect for fashion brands and designers. Starting at $199/month." />
        <meta name="keywords" content="AI fashion design, fashion technology, virtual try-on, trend analysis, clothing design, fashion AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shirt className="w-4 h-4 mr-2" />
            Revolutionary Fashion Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Fashion Design
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning fashion designs with AI. Generate clothing patterns, virtual try-on experiences, 
            and trend analysis to revolutionize your fashion business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">75%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Design Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
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
            Powerful Fashion Design Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Fashion AI?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Fashion Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Fashion Design Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Design Fashion?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating stunning fashion designs with our AI-powered technology.
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