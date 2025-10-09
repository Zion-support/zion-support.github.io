'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
import { AccessibilityEnhancer } from '../components/AccessibilityEnhancer';
import { SecurityEnhancer } from '../components/SecurityEnhancer';
import { Analytics } from '../components/Analytics';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Brain, FileText, Search, TrendingUp, Users, Award, Clock, Globe, Shield, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    'AI-powered blog post generation',
    'Social media content creation',
    'Product descriptions & marketing copy',
    'SEO-optimized content writing',
    'Multi-language content generation',
    'Brand voice consistency',
    'Content calendar management',
    'Plagiarism detection & originality',
    'Grammar & style optimization',
    'Content performance analytics'
  ];

  const benefits = [
    '10x faster content creation',
    '95% reduction in writing time',
    '40% increase in engagement rates',
    '60% improvement in SEO rankings',
    'Unlimited content generation',
    '24/7 content availability',
    'Multi-language support (50+ languages)',
    'Brand voice training & consistency',
    'Real-time content optimization',
    'Advanced analytics & insights'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words/month',
        '5 blog posts/month',
        'Social media content',
        'Basic SEO optimization',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50,000 words/month',
        'Unlimited blog posts',
        'Advanced content types',
        'Premium SEO optimization',
        'Priority support',
        'Custom templates',
        'Brand voice training',
        'Content calendar'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and content teams',
      features: [
        'Unlimited words',
        'All content types',
        'Advanced AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Team collaboration',
        'Advanced analytics',
        'API access'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Content',
      description: 'Generate product descriptions, category pages, and marketing copy that converts',
      icon: '🛍️',
      results: '35% increase in conversion rates'
    },
    {
      title: 'Blog & Articles',
      description: 'Create engaging blog posts, articles, and long-form content automatically',
      icon: '📝',
      results: '60% faster content production'
    },
    {
      title: 'Social Media',
      description: 'Generate posts, captions, and social media content for all platforms',
      icon: '📱',
      results: '200% more social engagement'
    },
    {
      title: 'Email Marketing',
      description: 'Create compelling email campaigns, newsletters, and automated sequences',
      icon: '📧',
      results: '45% higher open rates'
    },
    {
      title: 'SEO Content',
      description: 'Generate SEO-optimized content that ranks higher in search results',
      icon: '🔍',
      results: '80% improvement in search rankings'
    },
    {
      title: 'Technical Writing',
      description: 'Create documentation, manuals, and technical content with precision',
      icon: '⚙️',
      results: '90% reduction in documentation time'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Generate High-Quality Content Automatically | Zion Tech Group"
        description="Transform your content creation with our AI-powered writing assistant. Generate blog posts, social media content, product descriptions, and more with 95% time savings and 40% better engagement."
        keywords={['AI content writer', 'automated content generation', 'blog writing AI', 'social media content', 'SEO content', 'content marketing automation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Content Writer">
                AI Content Writer
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Generate High-Quality Content Automatically
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your content creation process with our advanced AI-powered writing assistant. 
                Generate blog posts, social media content, product descriptions, and marketing copy 
                with 95% time savings and 40% better engagement rates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Writing Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Content Creation</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">40%</div>
                  <div className="text-gray-300">Better Engagement</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16" id="features">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Powerful AI Writing Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16" id="benefits">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Proven Results & Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-pink-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16" id="use-cases">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Content Types & Use Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold">{useCase.results}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16" id="pricing">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your content needs. All plans include 24/7 support and regular updates.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full cyber-button px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-105 ${tier.popular ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : ''}`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Content?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;