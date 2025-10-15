import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClockIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'GPT-4 Integration',
      description: 'Powered by the latest GPT-4 model for superior content quality and creativity',
      color: 'text-cyan-400'
    },
    {
      icon: GlobeAltIcon,
      title: '50+ Languages',
      description: 'Generate content in over 50 languages with native-level fluency',
      color: 'text-blue-400'
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research and optimization suggestions',
      color: 'text-green-400'
    },
    {
      icon: DocumentTextIcon,
      title: 'Content Templates',
      description: '100+ professional templates for blogs, social media, emails, and more',
      color: 'text-purple-400'
    },
    {
      icon: EyeIcon,
      title: 'Plagiarism Detection',
      description: 'Advanced plagiarism detection to ensure 100% original content',
      color: 'text-orange-400'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Generation',
      description: 'Generate high-quality content in seconds, not hours',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$49',
      originalPrice: '$79',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words per month',
        'Basic templates (20)',
        '5 languages supported',
        'Standard SEO tools',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$199',
      originalPrice: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Unlimited words',
        'All templates (100+)',
        '50+ languages',
        'Advanced SEO tools',
        'Priority support',
        'Advanced analytics',
        'Brand voice training',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$499',
      originalPrice: '$799',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Training & onboarding'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts with proper SEO optimization',
      icon: DocumentTextIcon,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'News articles']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms',
      icon: GlobeAltIcon,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Write effective email campaigns that convert',
      icon: ChatBubbleLeftRightIcon,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Product Descriptions',
      description: 'Create compelling product descriptions that sell',
      icon: CurrencyDollarIcon,
      examples: ['E-commerce listings', 'App store descriptions', 'Service pages', 'Landing pages']
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Content Generator Pro - Zion Tech Group"
        description="Generate high-quality content for blogs, social media, and marketing materials using advanced AI with GPT-4 integration. 50+ languages, SEO optimization, and plagiarism detection."
        keywords="ai content generator, gpt-4, content creation, blog writing, social media content, seo optimization, content marketing, ai writing tools"
        canonicalUrl="https://ziontechgroup.com/ai-content-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center neon-glow">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
                AI Content Generator Pro
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Generate high-quality content for blogs, social media, and marketing materials using advanced AI with GPT-4 integration. 
                Create engaging content in 50+ languages with SEO optimization and plagiarism detection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button neon-border-animated">
                  Start Free Trial - 14 Days
                </button>
                <Link to="/demo" className="btn-futuristic neon-glow">
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Powerful Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional content at scale with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-glow`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Perfect For
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a content creator, marketer, or business owner, our AI content generator adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-8 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {useCase.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} 
                  className={`group relative holographic-card glass-card p-8 hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'cyber-button neon-border-animated' 
                        : 'btn-futuristic neon-glow'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.id === 'starter' ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of content creators, marketers, and businesses who trust our AI content generator. 
              Start your free trial today and experience the future of content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button neon-border-animated">
                Start Free Trial - 14 Days
              </button>
              <Link to="/contact" className="btn-futuristic neon-glow">
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;