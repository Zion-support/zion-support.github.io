import React, { useState } from 'react';
import { CheckCircle, ArrowRight, MessageSquare, Zap, Star, Users, Clock, Shield, Brain, Headphones, Bot, Languages, BarChart, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICustomerSupportBotPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Conversations',
      description: 'Natural language processing for human-like customer interactions'
    },
    {
      icon: <Headphones className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support without human intervention'
    },
    {
      icon: <Languages className="w-6 h-6 text-purple-500" />,
      title: 'Multi-Language Support',
      description: 'Support customers in 50+ languages with automatic translation'
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-500" />,
      title: 'Smart Escalation',
      description: 'Intelligent routing to human agents when needed'
    },
    {
      icon: <BarChart className="w-6 h-6 text-pink-500" />,
      title: 'Analytics Dashboard',
      description: 'Track performance, satisfaction, and conversation insights'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      title: 'Omnichannel Support',
      description: 'Chat, email, social media, and voice support integration'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses starting with AI support',
      features: [
        '1,000 conversations/month',
        'Basic AI responses',
        'Email integration',
        'Standard support',
        '1 chatbot',
        'Basic analytics'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with high support volume',
      features: [
        '10,000 conversations/month',
        'Advanced AI training',
        'Multi-channel integration',
        'Priority support',
        '5 chatbots',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with complex support needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Unlimited chatbots',
        'Custom integrations',
        'Advanced reporting',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Slack', logo: '💬' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'WhatsApp', logo: '📱' },
    { name: 'Facebook Messenger', logo: '📘' },
    { name: 'Instagram', logo: '📷' },
    { name: 'Twitter', logo: '🐦' },
    { name: 'Zendesk', logo: '🎫' },
    { name: 'Freshdesk', logo: '🆕' },
    { name: 'Intercom', logo: '💬' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Mailchimp', logo: '📧' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Manager',
      company: 'E-commerce Solutions',
      content: 'Our AI bot handles 80% of customer inquiries automatically. Response time improved from 2 hours to 30 seconds!',
      rating: 5
    },
    {
      name: 'Alex Thompson',
      role: 'Support Director',
      company: 'TechStart Inc.',
      content: 'The multi-language support is incredible. We can now serve customers globally without language barriers.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'VP of Operations',
      company: 'Retail Plus',
      content: 'Customer satisfaction increased by 40% since implementing the AI bot. It\'s like having a super-smart team member.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Support Bot - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI customer support bot with 24/7 availability, multi-language support, and omnichannel integration. Improve customer satisfaction and reduce support costs." />
        <meta name="keywords" content="AI chatbot, customer support, 24/7 support, multi-language, omnichannel, customer service automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              AI-Powered Customer Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                AI Customer Support Bot
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Provide 24/7 customer support with our intelligent AI chatbot. 
              Handle inquiries, resolve issues, and delight customers across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Support Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to provide exceptional customer support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect to your existing tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to match your support needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular 
                  ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses providing better customer support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Customer Support?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start providing 24/7 AI-powered customer support today. Free trial available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSupportBotPage;