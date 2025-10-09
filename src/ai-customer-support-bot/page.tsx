'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Bot, Users, Clock, Zap, Brain, ArrowRight, Phone, MapPin, Star, Shield, Globe, CheckCircle, TrendingUp, Eye, Target, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AICustomerSupportBotPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Understand customer queries in natural language with advanced NLP',
      benefits: ['Context understanding', 'Intent recognition', 'Sentiment analysis', 'Multi-language support']
    },
    {
      icon: MessageSquare,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without human intervention',
      benefits: ['Instant responses', 'No waiting time', 'Consistent service', 'Scalable support']
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex queries to human agents when needed',
      benefits: ['Smart escalation', 'Context preservation', 'Agent efficiency', 'Customer satisfaction']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track performance and gain insights into customer behavior',
      benefits: ['Response analytics', 'Customer insights', 'Performance metrics', 'Improvement suggestions']
    }
  ];

  const capabilities = [
    { name: 'FAQ Automation', icon: '❓', description: 'Answer common questions instantly' },
    { name: 'Order Tracking', icon: '📦', description: 'Provide real-time order status updates' },
    { name: 'Product Support', icon: '🔧', description: 'Help customers with product issues' },
    { name: 'Billing Inquiries', icon: '💳', description: 'Handle payment and billing questions' },
    { name: 'Appointment Booking', icon: '📅', description: 'Schedule appointments and meetings' },
    { name: 'Complaint Resolution', icon: '😊', description: 'Resolve customer complaints effectively' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI chatbot',
        'Priority support',
        'Advanced integrations',
        'Detailed analytics',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'API access',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Rodriguez',
      role: 'Customer Service Manager, TechCorp',
      content: 'AI Customer Support Bot reduced our response time by 90% and increased customer satisfaction by 45%.',
      rating: 5
    },
    {
      name: 'Kevin Park',
      role: 'CEO, E-commerceStore',
      content: 'The bot handles 80% of our customer queries automatically. Our team can now focus on complex issues.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Operations Director, ServiceCo',
      content: 'Implementation was seamless and the results were immediate. Our customers love the instant responses.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Customer Support Bot - Intelligent 24/7 Customer Service | Zion Tech Group"
        description="Transform your customer support with AI-powered chatbot. Reduce response time by 90%, increase satisfaction by 45%, and handle 80% of queries automatically."
        keywords={['AI customer support', 'chatbot', 'customer service automation', '24/7 support', 'NLP chatbot', 'customer experience']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support-bot"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                AI-Powered Customer Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Customer Support Bot
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your customer support with intelligent AI chatbot. Reduce response time by 90%, 
                increase satisfaction by 45%, and handle 80% of queries automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                <div className="text-gray-300">Response Time Reduction</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">45%</div>
                <div className="text-gray-300">Satisfaction Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Queries Handled Automatically</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your customer support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-orange-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Bot Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Handle a wide range of customer inquiries with intelligent automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer support needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-orange-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-orange-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Customer Support Bot ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange-400 text-slate-900 hover:bg-orange-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Customer Support Bot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Start your free trial today and experience the power of AI-driven customer support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Bot Free Trial Request"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-orange-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
        </div>
    </>
  );
};

export default AICustomerSupportBotPage;