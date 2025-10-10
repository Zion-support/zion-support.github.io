'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, CheckCircle, ArrowRight, Star, Users, Zap, Shield, Globe, Brain, Bot, Headphones, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ZionChatAIPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'GPT-4 Powered AI',
      description: 'Advanced conversational AI powered by the latest GPT-4 technology for natural, intelligent responses.',
      benefits: ['Natural conversations', 'Context understanding', 'Intelligent responses', 'Continuous learning']
    },
    {
      icon: Globe,
      title: 'Multi-channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms seamlessly.',
      benefits: ['Website integration', 'Mobile app support', 'Social media bots', 'Messaging platforms']
    },
    {
      icon: Target,
      title: 'Advanced Sentiment Analysis',
      description: 'Real-time emotion detection and sentiment analysis to provide personalized customer experiences.',
      benefits: ['Emotion detection', 'Sentiment tracking', 'Personalized responses', 'Mood adaptation']
    },
    {
      icon: Zap,
      title: 'Automated Ticket Routing',
      description: 'Intelligent ticket routing based on customer intent, urgency, and agent expertise.',
      benefits: ['Smart routing', 'Priority detection', 'Expert matching', 'Efficient resolution']
    },
    {
      icon: Users,
      title: 'Live Agent Handoff',
      description: 'Seamless transition from AI to human agents when complex issues require human intervention.',
      benefits: ['Smooth handoff', 'Context preservation', 'Agent preparation', 'Customer continuity']
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for 50+ languages with automatic translation and cultural context understanding.',
      benefits: ['50+ languages', 'Auto translation', 'Cultural context', 'Localized responses']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses starting with AI customer support',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        '1 admin account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with sentiment analysis',
        'Multi-channel support',
        'Priority support',
        'Up to 5 admin accounts',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited conversations',
        'GPT-4 powered AI',
        'All channels supported',
        '24/7 support',
        'Unlimited admin accounts',
        'White-label options',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Plus',
      role: 'Customer Success Manager',
      content: 'Zion Chat AI reduced our response time from 2 hours to 2 minutes. Customer satisfaction increased by 60% and we saved 40 hours per week on support.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'TechStart Inc',
      role: 'Founder',
      content: 'The AI understands context so well that customers often don\'t realize they\'re talking to a bot. It\'s like having a super-smart support agent available 24/7.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Global Services',
      role: 'Operations Director',
      content: 'Multi-language support is incredible. We can now serve customers in 15 different languages without hiring additional staff. ROI was achieved in just 2 months.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Chat AI - Advanced AI Customer Support Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with Zion Chat AI. GPT-4 powered AI, multi-channel support, sentiment analysis, and automated ticket routing for exceptional customer experiences." />
        <meta name="keywords" content="AI chatbot, customer support, GPT-4, sentiment analysis, multi-channel support, Zion Chat AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Next-Generation AI Customer Support</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Chat AI
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your customer support with our advanced AI platform. 
                GPT-4 powered conversations, multi-channel support, and intelligent automation for exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Zion Chat AI Demo Request"
                  className="btn-holographic px-8 py-4 text-lg"
                >
                  Get Free Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-cyber px-8 py-4 text-lg"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">60% Faster Response</h3>
                <p className="text-gray-300">Reduce response time from hours to minutes with instant AI-powered support.</p>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Availability</h3>
                <p className="text-gray-300">Never miss a customer inquiry with round-the-clock AI support.</p>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">95% Resolution Rate</h3>
                <p className="text-gray-300">AI resolves 95% of customer inquiries without human intervention.</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                Advanced AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card-enhanced p-6 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="cyber-card-enhanced p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Customer Asks</h3>
                  <p className="text-gray-300">Customer sends a message through any supported channel</p>
                </div>
                <div className="cyber-card-enhanced p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Analyzes</h3>
                  <p className="text-gray-300">AI processes the message and understands context and intent</p>
                </div>
                <div className="cyber-card-enhanced p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Smart Response</h3>
                  <p className="text-gray-300">AI provides intelligent, contextual response or routes to human</p>
                </div>
                <div className="cyber-card-enhanced p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Resolution</h3>
                  <p className="text-gray-300">Customer gets instant resolution or seamless handoff to agent</p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`cyber-card-enhanced p-8 relative ${tier.popular ? 'holographic-card' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-1">{tier.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Zion Chat AI ${tier.name} Plan Inquiry`}
                      className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular 
                          ? 'btn-holographic' 
                          : 'btn-cyber'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card-enhanced p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div className="border-t border-gray-600 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="holographic-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Support?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using Zion Chat AI to provide exceptional customer experiences 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Zion Chat AI Free Trial Request"
                    className="btn-holographic px-8 py-4 text-lg"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="btn-cyber px-8 py-4 text-lg"
                  >
                    Schedule Demo
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: kleber@ziontechgroup.com | Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionChatAIPage;