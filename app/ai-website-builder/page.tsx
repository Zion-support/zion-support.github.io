'use client';
import React from 'react';
import { CheckCircle, Globe, Code, Palette, Zap, Phone, Mail, MapPin, Star, Award, Users, TrendingUp, Smartphone, Laptop, Monitor, Search, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    'AI-powered website generation in under 5 minutes',
    'Intelligent design suggestions based on industry best practices',
    'Automatic SEO optimization and meta tag generation',
    'Mobile-first responsive design that works on all devices',
    'Drag-and-drop interface with AI assistance',
    'Real-time content suggestions and copywriting',
    'Advanced analytics and performance monitoring',
    'E-commerce integration with AI product recommendations',
    'Multi-language support with automatic translation',
    'One-click deployment to any hosting platform'
  ];

  const benefits = [
    'Build professional websites 10x faster than traditional methods',
    'Reduce development costs by 80%',
    'Ensure mobile responsiveness across all devices',
    'Automatically optimize for search engines',
    'Generate high-converting content with AI',
    'No coding knowledge required',
    'Professional designs that convert visitors to customers',
    'Scalable solutions that grow with your business'
  ];

  const templates = [
    {
      title: 'E-commerce Store',
      description: 'AI-powered online stores with intelligent product recommendations',
      icon: '🛒',
      features: ['Shopping cart', 'Payment integration', 'Inventory management', 'Order tracking']
    },
    {
      title: 'Business Website',
      description: 'Professional corporate websites with lead generation',
      icon: '🏢',
      features: ['Contact forms', 'Service pages', 'Team profiles', 'Testimonials']
    },
    {
      title: 'Portfolio Site',
      description: 'Creative portfolios for designers and artists',
      icon: '🎨',
      features: ['Gallery showcase', 'Project details', 'Client testimonials', 'Contact forms']
    },
    {
      title: 'Blog Platform',
      description: 'Content-focused websites with AI writing assistance',
      icon: '📝',
      features: ['Article management', 'SEO optimization', 'Social sharing', 'Comment system']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for personal projects',
      features: [
        '1 website',
        'Basic AI features',
        '5 pages',
        'Mobile responsive',
        'Basic SEO',
        'Email support',
        'Free hosting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Ideal for small businesses',
      features: [
        '3 websites',
        'Advanced AI features',
        'Unlimited pages',
        'E-commerce integration',
        'Advanced SEO',
        'Priority support',
        'Custom domain',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'For large organizations',
      features: [
        'Unlimited websites',
        'Custom AI training',
        'White-label options',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'MongoDB', 'Stripe', 'PayPal', 'Google Analytics', 'Cloudflare',
    'AWS', 'Vercel', 'Netlify', 'WordPress', 'Shopify'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            <span>AI Web Development</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Website Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning, professional websites in minutes with our AI-powered website builder. 
            No coding required - just describe your vision and watch AI bring it to life.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">5min</div>
              <div className="text-gray-300">Build Time</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Mobile Responsive</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 mb-12">
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
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Website Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI Website Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Advanced AI technology creates professional websites that convert visitors into customers.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Professional Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{template.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{template.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{template.description}</p>
                <ul className="space-y-2">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-indigo-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-indigo-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Built with Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="cyber-card px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Affordable Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Website Builder Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                  }`}
                >
                  Start Building
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have created stunning websites with our AI-powered builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Website Builder Inquiry"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Start Free Trial
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
