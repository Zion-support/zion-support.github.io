import React from 'react';
import { CheckCircle, Star, Zap, Brain, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality, engaging content using advanced AI models trained on millions of articles and marketing materials.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword suggestions, meta descriptions, and readability scores.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your unique brand voice and tone across all content types and marketing channels.'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Multi-Language Support',
      description: 'Create content in 25+ languages with native-level quality and cultural adaptation for global markets.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        '1,000 AI-generated content pieces/month',
        'Basic SEO optimization',
        '5 brand voice profiles',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 AI-generated content pieces/month',
        'Advanced SEO optimization',
        'Unlimited brand voice profiles',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited AI-generated content',
        'Custom AI model training',
        'White-label options',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced security features',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Blog Posts & Articles',
      description: 'Generate engaging blog posts, articles, and thought leadership content that drives traffic and engagement.',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Case studies']
    },
    {
      title: 'Marketing Copy',
      description: 'Create compelling marketing copy for ads, landing pages, email campaigns, and social media posts.',
      examples: ['Ad copy', 'Email subject lines', 'Social media posts', 'Product descriptions']
    },
    {
      title: 'Technical Documentation',
      description: 'Generate clear, comprehensive technical documentation and user guides for your products and services.',
      examples: ['API documentation', 'User manuals', 'Tutorials', 'FAQ content']
    },
    {
      title: 'E-commerce Content',
      description: 'Create product descriptions, category pages, and promotional content that converts visitors into customers.',
      examples: ['Product descriptions', 'Category pages', 'Promotional content', 'Review responses']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content creation tool with SEO optimization, brand voice matching, and multi-language support. Starting at $29/month." />
        <meta name="keywords" content="AI content writer, content generation, SEO optimization, brand voice, content marketing, AI writing tool" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Content Creation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Writer Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Generate high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Perfect for blogs, marketing copy, technical documentation, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to create professional content at scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect For</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile content creation for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your content needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI Content Writer Pro to create better content faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIContentWriterPage;