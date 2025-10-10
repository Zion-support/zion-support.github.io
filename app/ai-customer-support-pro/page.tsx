'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Settings,
  Brain,
  Target,
  TrendingUp,
  Award,
  Headphones
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AICustomerSupportPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'GPT-4 Powered Intelligence',
      description: 'Advanced natural language processing with context understanding and emotional intelligence'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation and cultural adaptation'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Sub-second response times with 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with end-to-end encryption and data privacy'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights, sentiment analysis, and performance metrics'
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when needed'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email & Chat support',
        'Basic analytics',
        '5 team members',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with learning',
        'Multi-channel support',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'All channels + voice',
        'Real-time analytics dashboard',
        'Dedicated account manager',
        'White-label solution',
        '24/7 phone support',
        'Custom SLA'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Increase in Response Speed',
      description: 'Average response time reduced from 2 hours to 30 seconds'
    },
    {
      icon: Award,
      title: '95% Customer Satisfaction',
      description: 'Consistently high ratings with AI-powered personalization'
    },
    {
      icon: Target,
      title: '60% Cost Reduction',
      description: 'Significant savings on support staff and infrastructure'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support without additional staffing costs'
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Zendesk', icon: '🔗' },
    { name: 'Intercom', icon: '🔗' },
    { name: 'Slack', icon: '🔗' },
    { name: 'Microsoft Teams', icon: '🔗' },
    { name: 'WhatsApp Business', icon: '🔗' },
    { name: 'Facebook Messenger', icon: '🔗' },
    { name: 'Twitter', icon: '🔗' },
    { name: 'Instagram', icon: '🔗' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support platform with GPT-4 intelligence, multi-channel support, and enterprise-grade security. Transform your customer experience today." />
        <meta name="keywords" content="AI customer support, chatbot, customer service automation, GPT-4, multi-channel support, enterprise support" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Customer Support
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Customer Support Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your customer experience with our revolutionary AI-powered support platform. 
                Featuring GPT-4 intelligence, multi-channel support, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to deliver exceptional customer support with AI intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of companies already transforming their customer support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-600 transition-colors">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <div className="text-gray-300 font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using AI Customer Support Pro to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AICustomerSupportPro;