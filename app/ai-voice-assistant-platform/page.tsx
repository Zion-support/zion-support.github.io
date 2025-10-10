'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Brain, Globe, Zap, ArrowRight, Star, CheckSquare, Shield, Smartphone, Users, Target, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceAssistantPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech-to-text with 99.9% accuracy in 50+ languages and dialects',
      benefits: ['Multi-language support', 'Accent recognition', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: Brain,
      title: 'AI Conversation Engine',
      description: 'Intelligent conversation management with context awareness and memory',
      benefits: ['Context retention', 'Intent recognition', 'Response generation', 'Learning capabilities']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Deploy across web, mobile, IoT devices, and smart speakers seamlessly',
      benefits: ['Web integration', 'Mobile SDKs', 'IoT compatibility', 'Smart speaker support']
    },
    {
      icon: Zap,
      title: 'Custom Voice Training',
      description: 'Train custom voice models for your brand voice and specific use cases',
      benefits: ['Brand voice training', 'Custom wake words', 'Domain-specific training', 'Continuous learning']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: '24/7 intelligent customer support with natural conversations',
      icon: MessageCircle,
      benefits: ['Reduce support costs by 60%', 'Handle 10x more inquiries', 'Multilingual support', 'Instant responses']
    },
    {
      title: 'E-commerce',
      description: 'Voice shopping and product recommendations',
      icon: Target,
      benefits: ['Voice search', 'Product recommendations', 'Order management', 'Inventory queries']
    },
    {
      title: 'Healthcare',
      description: 'Patient assistance and appointment scheduling',
      icon: Users,
      benefits: ['Appointment booking', 'Symptom checking', 'Medication reminders', 'Health monitoring']
    },
    {
      title: 'Smart Home',
      description: 'Control IoT devices and home automation',
      icon: Smartphone,
      benefits: ['Device control', 'Routine automation', 'Energy management', 'Security monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        '5 languages',
        'Email support',
        'Web integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced AI features',
        '20 languages',
        'Priority support',
        'Mobile SDKs',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited interactions',
        'Custom voice models',
        '50+ languages',
        'Dedicated support',
        'On-premise deployment',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      role: 'CEO',
      company: 'MediCare Solutions',
      content: 'Our AI voice assistant handles 80% of patient inquiries automatically. Patient satisfaction increased by 45%.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CTO',
      company: 'SmartRetail',
      content: 'Voice shopping has increased our conversion rate by 35%. Customers love the natural conversation experience.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Customer Success Director',
      company: 'TechCorp',
      content: 'We reduced support costs by 60% while improving response times. The AI understands context perfectly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Assistant Platform - Zion Tech Group</title>
        <meta name="description" content="Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration. 99.9% accuracy." />
        <meta name="keywords" content="AI voice assistant, voice recognition, speech-to-text, conversational AI, voice platform" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              AI-Powered Voice Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Voice Assistant Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent voice assistants with natural language understanding, multi-language support, and enterprise integration. 
              Achieve 99.9% accuracy and deploy across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Voice AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge voice AI technology to create natural, intelligent conversations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy voice AI across various industries with proven results and ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your voice AI needs. All plans include our core features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their customer experience with voice AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {Service Feature.map((_, i) => (
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven voice technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                Questions? Call us at <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )}

export default AIVoiceAssistantPlatformPage;