'use client';
import React from 'react';
import { Code, Palette, Zap, Smartphone, Globe, CheckCircle, Star, Users, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI-Powered Design',
      description: 'Generate beautiful, responsive websites using advanced AI algorithms',
      benefits: ['Auto-layout', 'Smart color schemes', 'Responsive design', 'SEO optimization']
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Create unique brand identities with AI-generated logos and color palettes',
      benefits: ['Logo generation', 'Brand colors', 'Typography selection', 'Style consistency']
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your website in minutes with our automated hosting and CDN',
      benefits: ['One-click deploy', 'Global CDN', 'SSL certificates', 'Auto-scaling']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'All websites are optimized for mobile devices and performance',
      benefits: ['Mobile optimization', 'Fast loading', 'Touch-friendly', 'Progressive Web App']
    }
  ];

  const benefits = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Up to 5 pages',
        'AI design assistance',
        'Basic templates',
        'Mobile optimization',
        'SSL certificate',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 pages',
        'Advanced AI features',
        'Custom templates',
        'E-commerce integration',
        'Analytics dashboard',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/month',
      description: 'For large organizations and white-label solutions',
      features: [
        'Unlimited pages',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'On-premise option',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Business Websites',
      description: 'Create professional business websites with AI assistance',
      icon: '🏢',
      examples: ['Company websites', 'Service pages', 'About us', 'Contact forms']
    },
    {
      title: 'E-commerce Stores',
      description: 'Build online stores with AI-powered product recommendations',
      icon: '🛒',
      examples: ['Product catalogs', 'Shopping cart', 'Payment integration', 'Inventory management']
    },
    {
      title: 'Portfolio Sites',
      description: 'Showcase your work with stunning portfolio websites',
      icon: '🎨',
      examples: ['Image galleries', 'Project showcases', 'Resume pages', 'Client testimonials']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white neon-text">
              AI Website Builder
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build stunning, professional websites in minutes with AI-powered design and development. 
            No coding required, just describe what you want and watch it come to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Building
            </a>
            <a href="tel:+13024640950" className="cyber-button-outline px-8 py-4 text-lg">
              Call (302) 464-0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
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
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
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
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses who have built their online presence with our AI website builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Building Now
              </a>
              <a href="tel:+13024640950" className="cyber-button-outline px-8 py-4 text-lg">
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;