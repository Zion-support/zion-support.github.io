'use client';
import React, { useState, useEffect } from 'react';
import { Mic, Volume2, Zap, ArrowRight, Star, Globe, Smartphone, Mail, Phone, MapPin, CheckCircle, Clock, Users, BarChart, Brain, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceAssistant: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Mic,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 99% accuracy for understanding complex commands and conversations',
      benefit: 'Reduce response time by 80%'
    },
    {
      icon: Volume2,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation and accent adaptation',
      benefit: 'Global accessibility'
    },
    {
      icon: Brain,
      title: 'Context Awareness',
      description: 'Remembers conversation history and provides personalized responses based on user preferences',
      benefit: 'Improve user satisfaction by 60%'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Ultra-fast voice processing with sub-200ms response times for seamless interactions',
      benefit: 'Natural conversation flow'
    },
    {
      icon: MessageSquare,
      title: 'Custom Voice Training',
      description: 'Train the assistant with your brand voice, tone, and specific business terminology',
      benefit: 'Brand consistency'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on user interactions, popular queries, and performance metrics',
      benefit: 'Data-driven improvements'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice commands',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced NLP capabilities',
        'Priority support',
        'All integrations',
        'Custom voice training',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited interactions',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Handle customer inquiries 24/7 with intelligent responses and seamless handoff to human agents',
      icon: Users,
      benefit: 'Reduce support costs by 50%'
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads, schedule meetings, and provide product information through natural conversations',
      icon: BarChart,
      benefit: 'Increase conversion rates by 35%'
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with voice commands for scheduling, reporting, and task management',
      icon: Clock,
      benefit: 'Improve productivity by 40%'
    },
    {
      title: 'Accessibility',
      description: 'Make your services accessible to users with disabilities through voice-first interactions',
      icon: Globe,
      benefit: 'Expand market reach'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Director',
      company: 'TechCorp Solutions',
      content: 'Our AI Voice Assistant handles 80% of customer inquiries automatically. Customer satisfaction increased by 45%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'E-commerce Platform',
      content: 'The voice assistant transformed our sales process. We can now handle 3x more inquiries with the same team.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'Healthcare Systems',
      content: 'Accessibility improved dramatically. Patients can now access services through voice commands easily.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Mic className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">AI-Powered Voice Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Voice Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform customer interactions with intelligent voice assistants. Natural conversations, 
              multi-language support, and 99% accuracy for seamless user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Try Demo
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">200ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge voice technology for natural, intelligent conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-purple-400 font-medium text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI voice technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
                <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="text-purple-400 font-medium text-sm">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400 shadow-2xl shadow-purple-400/20' 
                  : 'border-slate-700 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming with AI Voice Assistant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Customer Interactions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using AI Voice Assistant to provide exceptional customer experiences 
            and streamline operations with intelligent voice technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoiceAssistant;