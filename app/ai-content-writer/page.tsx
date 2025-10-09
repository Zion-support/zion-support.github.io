'use client';
import React from 'react';
import { FileText, CheckCircle, TrendingUp, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    'SEO-optimized content generation',
    'Multiple content types (blogs, articles, social media)',
    'Brand voice training and customization',
    'Plagiarism detection and originality checking',
    'Multi-language content creation',
    'Content calendar and scheduling',
    'Performance analytics and optimization',
    'Team collaboration tools'
  ];

  const benefits = [
    '10x faster content production',
    '95% SEO optimization score',
    '50% reduction in content costs',
    'Consistent brand voice across all content',
    '24/7 content generation capability',
    'Scalable content production',
    'Improved search engine rankings',
    'Higher engagement rates'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$69',
      period: '/month',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic SEO optimization',
        'Email support',
        '1 brand voice profile'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        '50,000 words/month',
        'Unlimited content types',
        'Advanced SEO optimization',
        'Priority support',
        '3 brand voice profiles',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: [
        'Unlimited words',
        'All content types',
        'Premium SEO tools',
        '24/7 phone support',
        'Unlimited brand voices',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Generate High-Quality Content | Zion Tech Group"
        description="Transform your content marketing with our AI-powered content writer. Generate SEO-optimized blogs, articles, and marketing materials 10x faster. Start your free trial today!"
        keywords={['AI content writer', 'content generation', 'SEO content', 'blog writing', 'marketing content', 'AI writing assistant']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24 pt-32">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">✍️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Content Writer
              </h1>
              <p className="text-xl text-cyan-400 mb-8 font-medium">
                Generate High-Quality Content 10x Faster
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your content marketing with our AI-powered content writer. Generate SEO-optimized blogs, 
                articles, social media posts, and marketing materials with consistent brand voice and quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI Content Writer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
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
                  <a
                    href={`tel:+13024640950?subject=AI Content Writer - ${plan.name} Plan`}
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Content?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI Content Writer to create 
              high-quality, SEO-optimized content that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;