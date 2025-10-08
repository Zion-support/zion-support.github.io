import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Clock, Users, MessageSquare, BarChart3, Globe, Code, Headphones } from 'lucide-react';

const AIChatbotProPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and sentiment in conversations.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-language Support',
      description: 'Support for 50+ languages with automatic translation and localization features.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Easy Integration',
      description: 'Simple API integration with popular platforms like Slack, WhatsApp, and your website.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track performance, user satisfaction, and conversation insights.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, GDPR compliance, and secure data handling.'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and regular updates to keep your chatbot running smoothly.'
    }
  ];

  const benefits = [
    {
      metric: '60%',
      description: 'Reduction in customer service costs'
    },
    {
      metric: '1000+',
      description: 'Simultaneous conversations handled'
    },
    {
      metric: '95%',
      description: 'Improvement in response time'
    },
    {
      metric: '24/7',
      description: 'Availability without breaks'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 199,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 499,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP with sentiment analysis',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 999,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Full AI capabilities',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
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
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Chatbot Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced conversational AI chatbot with natural language processing, multi-language support, 
              and seamless integration capabilities. Transform your customer service with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Get Started Today
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
              Everything you need to create, deploy, and manage intelligent chatbots that deliver exceptional customer experiences.
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
              Our AI chatbot solutions are designed to handle a wide range of business scenarios and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Customer Support',
                description: 'Handle common inquiries, provide instant responses, and escalate complex issues to human agents.',
                icon: '🎧'
              },
              {
                title: 'Lead Qualification',
                description: 'Qualify leads automatically, collect contact information, and schedule appointments.',
                icon: '🎯'
              },
              {
                title: 'FAQ Handling',
                description: 'Answer frequently asked questions instantly, reducing support ticket volume.',
                icon: '❓'
              },
              {
                title: 'Appointment Scheduling',
                description: 'Allow customers to book appointments, check availability, and send reminders.',
                icon: '📅'
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
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
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already automated their customer service with our AI chatbot solutions.
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

export default AIChatbotProPage;