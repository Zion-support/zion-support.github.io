'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MessageCircle, 
  Bot, 
  Headphones, 
  Zap, 
  CheckCircle, 
  Clock, 
  Target,
  Brain,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Smartphone,
  Globe,
  Database,
  Settings,
  FileText,
  MessageSquare,
  PieChart,
  Activity,
  Users,
  BarChart3,
  Mail,
  Phone,
  Chat
} from 'lucide-react';

export default function AICustomerSupportAutomationPage() {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Automatically detect customer emotions and route urgent issues to human agents for immediate attention.',
      color: 'text-blue-400'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Unified support across email, chat, phone, social media, and messaging platforms with consistent AI assistance.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Predictive Issue Resolution',
      description: 'AI predicts common issues and proactively provides solutions before customers even ask.',
      color: 'text-orange-400'
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards showing support metrics, customer satisfaction, and AI performance insights.',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'Smart Agent Assistance',
      description: 'AI provides agents with suggested responses, knowledge base articles, and customer history for better support.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI chatbot',
        'Email & chat support',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Sentiment analysis',
        'Priority support',
        'Advanced integrations',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        'Custom AI training',
        'White-label options',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'On-premise deployment',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock AI support that works while you sleep.',
      stat: '99.9% Uptime'
    },
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Handle 80% more customer inquiries with the same team size using AI automation.',
      stat: '80% More Efficient'
    },
    {
      icon: Star,
      title: 'Higher Satisfaction',
      description: 'Customers get instant, accurate responses leading to improved satisfaction scores.',
      stat: '95% Satisfaction'
    },
    {
      icon: Shield,
      title: 'Cost Reduction',
      description: 'Reduce support costs by up to 60% while maintaining or improving service quality.',
      stat: '60% Cost Savings'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Manager',
      company: 'E-commerce Plus',
      content: 'AI Customer Support has reduced our response time from hours to seconds. Customer satisfaction has never been higher.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'VP of Operations',
      company: 'TechStart Inc.',
      content: 'The sentiment analysis feature helps us identify frustrated customers before they escalate. Game changer!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Support',
      company: 'ServicePro LLC',
      content: 'Our support team can now focus on complex issues while AI handles routine inquiries. Productivity has skyrocketed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            <span>AI-Powered Customer Support</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Customer Support
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Automate Support, Delight Customers
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your customer support with AI-powered automation that provides instant, intelligent responses, 
            reduces costs, and delivers exceptional customer experiences 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Get Started - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Advanced AI Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Powerful AI capabilities that transform your customer support experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Why Choose AI Customer Support?
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Transform your customer support with measurable results and proven benefits
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="cyber-card hologram-card p-6 mb-4">
                  <div className="text-4xl text-cyan-400 mb-4">
                    <benefit.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Choose the plan that fits your support volume and business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+13024640950"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
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
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Customer Success Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            See how businesses are transforming their customer support with AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Connect with your existing tools and platforms for a unified support experience
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Slack', icon: MessageSquare },
              { name: 'Teams', icon: Users },
              { name: 'Zendesk', icon: Headphones },
              { name: 'Salesforce', icon: Database },
              { name: 'HubSpot', icon: Target },
              { name: 'Intercom', icon: Chat }
            ].map((integration, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <integration.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using AI to deliver exceptional customer experiences. 
            Start your free trial today or contact us for a personalized demo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Start Free Trial - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}