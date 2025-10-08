import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BarChart3, Shield, Zap, Globe, Link as LinkIcon, QrCode, Clock, Lock, Users } from 'lucide-react';

const URLShortenerProPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Custom Domain Support',
      description: 'Use your own domain for branded short links that build trust and recognition.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Track clicks, geographic data, device types, and referral sources with detailed reports.'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: 'QR Code Generation',
      description: 'Generate QR codes for your short links with custom designs and branding options.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Bulk Link Management',
      description: 'Upload and manage thousands of links at once with our bulk import/export tools.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Password Protection',
      description: 'Add password protection to sensitive links for enhanced security and control.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Expiration Dates',
      description: 'Set automatic expiration dates for time-sensitive campaigns and promotions.'
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      description: 'Uptime guarantee'
    },
    {
      metric: '10M+',
      description: 'Links shortened monthly'
    },
    {
      metric: '50+',
      description: 'Countries served'
    },
    {
      metric: '24/7',
      description: 'Customer support'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 links/month',
        'Basic analytics',
        'Custom domain',
        'QR code generation',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 links/month',
        'Advanced analytics',
        'Multiple custom domains',
        'Bulk operations',
        'Priority support',
        'Password protection',
        'Expiration dates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited links',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Team management'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🔗</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              URL Shortener Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional URL shortening service with custom domains, analytics, QR codes, 
              and advanced link management capabilities. Perfect for marketing campaigns and brand building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call: (302) 464-0950
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and track professional short links that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Perfect For
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our URL shortener is designed to handle a wide range of marketing and business scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Social Media Marketing',
                description: 'Create branded short links for Twitter, Facebook, Instagram, and LinkedIn campaigns.',
                icon: '📱'
              },
              {
                title: 'Email Campaigns',
                description: 'Track email performance with detailed analytics on link clicks and engagement.',
                icon: '📧'
              },
              {
                title: 'Print Materials',
                description: 'Generate QR codes for business cards, flyers, and promotional materials.',
                icon: '📄'
              },
              {
                title: 'QR Code Campaigns',
                description: 'Create custom QR codes with your branding for offline-to-online marketing.',
                icon: '📊'
              }
            ].map((useCase, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Analytics Dashboard
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get detailed insights into your link performance with our comprehensive analytics platform.
            </p>
          </div>

          <div className="cyber-card hologram-card max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1.2M</div>
                <div className="text-gray-300 text-sm">Total Clicks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">68%</div>
                <div className="text-gray-300 text-sm">Click Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">45</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">2.3s</div>
                <div className="text-gray-300 text-sm">Avg. Load Time</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-6">
                Track clicks, geographic data, device types, referral sources, and more with our comprehensive analytics dashboard.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  Geographic Data
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  Device Types
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  Referral Sources
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  Time-based Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card hologram-card relative ${
                  tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'cyber-button'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Need a custom solution?</p>
            <Link
              to="/contact"
              className="cyber-button"
            >
              Contact Us for Custom Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Shorten Your Links?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our URL shortener for their marketing campaigns and brand building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button text-lg px-8 py-4"
            >
              Start Your Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial</p>
            <p>✓ No setup fees</p>
            <p>✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default URLShortenerProPage;