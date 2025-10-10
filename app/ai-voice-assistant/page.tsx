'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Zap, BarChart3, Calendar, Shield, Clock, Target, TrendingUp, Brain, Settings, Globe, Smartphone, Mic, Volume2, Headphones, MessageSquare } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and natural conversation flow for seamless interactions.',
      benefits: ['Context understanding', 'Intent recognition', 'Conversation flow', 'Multi-language support']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'High-accuracy voice recognition with noise cancellation and speaker identification for reliable voice interactions.',
      benefits: ['99% accuracy', 'Noise cancellation', 'Speaker identification', 'Real-time processing']
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent conversational AI that can handle complex queries, provide detailed responses, and maintain context.',
      benefits: ['Complex query handling', 'Detailed responses', 'Context maintenance', 'Personalized interactions']
    },
    {
      icon: Zap,
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems, APIs, and business processes for automated workflows.',
      benefits: ['API integration', 'Workflow automation', 'Custom commands', 'System connectivity']
    }
  ];

  const useCases = [
    { 
      name: 'Customer Service', 
      icon: '🎧', 
      description: '24/7 automated customer support',
      features: ['FAQ handling', 'Ticket creation', 'Escalation management', 'Multi-language support']
    },
    { 
      name: 'Sales Assistant', 
      icon: '💼', 
      description: 'AI-powered sales support',
      features: ['Lead qualification', 'Product recommendations', 'Appointment scheduling', 'Follow-up automation']
    },
    { 
      name: 'Healthcare', 
      icon: '🏥', 
      description: 'Medical voice assistant',
      features: ['Symptom checking', 'Appointment booking', 'Medication reminders', 'Health monitoring']
    },
    { 
      name: 'Smart Home', 
      icon: '🏠', 
      description: 'Home automation control',
      features: ['Device control', 'Routine management', 'Energy optimization', 'Security monitoring']
    },
    { 
      name: 'Education', 
      icon: '🎓', 
      description: 'Learning assistant',
      features: ['Tutoring support', 'Quiz administration', 'Progress tracking', 'Personalized learning']
    },
    { 
      name: 'Enterprise', 
      icon: '🏢', 
      description: 'Business automation',
      features: ['Meeting scheduling', 'Data queries', 'Report generation', 'Task management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        'Standard NLP',
        'Email support',
        'Mobile app access',
        '1 custom voice'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced voice recognition',
        'Advanced NLP capabilities',
        'Priority support',
        'Custom integrations',
        'API access',
        'Multiple custom voices',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited interactions',
        'Premium voice recognition',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'White-label options',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Customer Service Director',
      company: 'ServicePro Inc.',
      content: 'AI Voice Assistant handles 80% of our customer inquiries automatically, reducing response time from 5 minutes to 30 seconds.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CTO',
      company: 'TechSolutions Ltd.',
      content: 'The natural language processing and integration capabilities have transformed our customer support. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Manager',
      company: 'HealthCare Plus',
      content: 'Our patients love the voice assistant for appointment scheduling and health queries. It has improved our efficiency significantly.',
      rating: 5
    }
  ];

  const stats = [
    { value: '80%', label: 'Query Resolution Rate', description: 'Automated problem solving' },
    { value: '30s', label: 'Average Response Time', description: 'Lightning-fast responses' },
    { value: '50+', label: 'Supported Languages', description: 'Global accessibility' },
    { value: '99%', label: 'Voice Recognition Accuracy', description: 'Reliable voice understanding' }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Video conferencing' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'Zendesk', icon: '🎧', description: 'Support ticketing' },
    { name: 'HubSpot', icon: '📊', description: 'Marketing automation' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' },
    { name: 'Amazon Alexa', icon: '🔊', description: 'Smart speaker integration' },
    { name: 'Google Assistant', icon: '🎤', description: 'Voice platform' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice AI & Conversational Platform</title>
        <meta name="description" content="Revolutionary AI voice assistant platform with natural language processing, voice recognition, and conversational AI. Handle 80% of queries automatically with 99% accuracy." />
        <meta name="keywords" content="AI voice assistant, conversational AI, voice recognition, natural language processing, voice automation, customer service AI" />
        <meta property="og:title" content="AI Voice Assistant - Zion Tech Group" />
        <meta property="og:description" content="Intelligent voice AI with natural language processing and conversational capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Voice Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent voice assistants with natural language processing, voice recognition, 
              and conversational AI. Handle 80% of queries automatically with 99% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Versatile Use Cases
              </h2>
              <p className="text-gray-300">
                Our AI voice assistant adapts to any industry and use case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{useCase.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI voice assistant platform combines cutting-edge technology with 
                intuitive design to deliver natural, intelligent conversations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing business systems and platforms for a unified voice experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your voice assistant needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their customer experience with AI voice assistants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven voice interactions. 
                No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;