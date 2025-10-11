'use client'
import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { MessageCircle, CheckCircle, Star, Users, Zap, Shield, Globe, ArrowRight, DollarSign, Clock, Award, Bot, Brain, Headphones } from 'lucide-react'

const ZionChatAI: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Deploy intelligent chatbots that understand context and provide human-like responses.',
      included: true
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding customer intent and sentiment.',
      included: true
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Never miss a customer inquiry with round-the-clock AI assistance.',
      included: true
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      included: true
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support customers in 50+ languages with automatic translation.',
      included: true
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get your chatbot live in minutes with our drag-and-drop builder.',
      included: true
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 19,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot templates',
        'Email support',
        '1 website integration',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 49,
      period: 'month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'Unlimited integrations',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        '24/7 phone support',
        'White-label solution',
        'Advanced integrations',
        'Dedicated account manager',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Help customers find products, track orders, and resolve issues instantly.',
      icon: Globe,
      stats: '85% faster response time'
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information automatically.',
      icon: Users,
      stats: '3x more qualified leads'
    },
    {
      title: 'Technical Support',
      description: 'Provide instant technical assistance and troubleshooting guides.',
      icon: Zap,
      stats: '60% reduction in support tickets'
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process and answer product questions.',
      icon: DollarSign,
      stats: '40% increase in conversions'
    }
  ]

  const testimonials = [
    {
      name: 'David Park',
      role: 'Founder, E-commerce Plus',
      content: 'Zion Chat AI reduced our support workload by 70% while improving customer satisfaction.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Lisa Thompson',
      role: 'Customer Success Manager, TechCorp',
      content: 'The AI understands our customers better than our previous human-only support team.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'James Wilson',
      role: 'CEO, ServicePro',
      content: 'We went from 2-hour response times to instant replies. Game changer!',
      rating: 5,
      avatar: 'JW'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">#1 AI Chatbot Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Chat AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy intelligent AI chatbots that provide instant, personalized customer support. 
              Reduce response times by 90% and boost customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
                <div className="text-gray-300">Conversations Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features for <span className="text-cyan-400">Better Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to provide exceptional customer service with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for <span className="text-cyan-400">Every Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries use Zion Chat AI to improve their customer experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{useCase.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, <span className="text-cyan-400">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion Chat AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Zion Chat AI to provide better customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ZionChatAI