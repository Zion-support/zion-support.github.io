import React from 'react'
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Mic, Zap, Users, BarChart3, Clock, MessageCircle, Volume2, Headphones } from 'lucide-react'
>>>>>>> cursor/website-audit-and-update-with-deployment-a621

import Layout from '../layout'

import { ArrowRight, Mic, Brain, MessageSquare } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Mic className="w-6 h-6 text-cyan-400" />,
      title: "Natural Voice Recognition",
      description: "Advanced speech recognition with 99.2% accuracy in 50+ languages and dialects"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: "Contextual Understanding",
      description: "AI that understands context, remembers conversations, and provides intelligent responses"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      title: "Multi-Platform Integration",
      description: "Seamless integration across devices, apps, and smart home systems"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: "Privacy-First Design",
      description: "Your conversations are processed locally with optional cloud features for enhanced capabilities"
    }
  ]

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19.99",
      period: "/month",
      features: [
        "Basic voice commands",
        "Calendar management",
        "Weather updates",
        "News briefings",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49.99",
      period: "/month",
      features: [
        "Advanced AI capabilities",
        "Custom voice training",
        "Business integrations",
        "API access",
        "Priority support",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199.99",
      period: "/month",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "White-label solution",
        "Advanced analytics",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
=======
      icon: <Mic className="w-8 h-8 text-blue-500" />,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech recognition with 99% accuracy in multiple languages and accents.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: 'Conversational AI',
      description: 'Intelligent conversational capabilities with context awareness and natural language understanding.'
    },
    {
      icon: <Volume2 className="w-8 h-8 text-purple-500" />,
      title: 'Text-to-Speech',
      description: 'High-quality voice synthesis with customizable voices and emotional expression.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Platform Support',
      description: 'Deploy across mobile apps, web applications, smart devices, and IoT platforms.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on user interactions, performance metrics, and usage patterns.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Processing',
      description: 'Low-latency voice processing for seamless real-time conversations and interactions.'
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
    }
  ]

  const useCases = [
    'Customer service automation',
    'Virtual assistants',
    'Smart home control',
    'Healthcare applications',
    'Educational tools',
    'Accessibility solutions',
    'Call center automation',
    'Voice-enabled apps'
  ]

  return (
<<<<<<< HEAD
    <Layout
      title="AI Voice Assistant - Zion Tech Group"
      description="Advanced AI voice assistant with natural language processing, contextual understanding, and multi-platform integration. Transform how you interact with technology."
      keywords="AI voice assistant, voice AI, speech recognition, virtual assistant, voice commands, conversational AI"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant with natural language processing, speech recognition, and conversational AI capabilities." />
        <meta name="keywords" content="AI voice assistant, speech recognition, text-to-speech, conversational AI, voice automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Voice Assistant
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of human-computer interaction with our advanced AI voice assistant. 
              Natural conversations, contextual understanding, and seamless integration across all your devices.
=======
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent voice assistants with advanced speech recognition, natural language processing, 
              and conversational AI capabilities for any application.
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

<<<<<<< HEAD
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.2%</div>
              <div className="text-gray-300">Voice Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-300">Daily Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced voice AI capabilities for creating intelligent conversational experiences.
            </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Voice AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Can Our AI Voice Assistant Do?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Home Control</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Control lights, temperature, and appliances
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Security system management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Entertainment system control
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Business Productivity</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Schedule meetings and appointments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email and message management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Data analysis and reporting
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Personal Assistant</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Weather and news updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Reminder and task management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Language translation
                  </li>
                </ul>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Voice AI Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-orange-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Application Areas
              </h2>
              <p className="text-xl text-gray-300">
                Our AI voice assistant technology powers various applications across industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Voice Assistant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Natural Conversations</h3>
                <p className="text-gray-300">Experience human-like conversations with contextual understanding and memory retention.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Universal Access</h3>
                <p className="text-gray-300">Works across all your devices and platforms with seamless synchronization and integration.</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Responses</h3>
                <p className="text-gray-300">Get smart, contextual responses that understand your intent and provide helpful information.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Voice AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 1 million users who have transformed their daily interactions with our advanced AI voice assistant.
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Voice AI?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create intelligent voice assistants with our advanced AI voice technology.
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
=======
                Start Building
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIVoiceAssistantPage