'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, MessageSquare, Brain, Users, Clock, Zap, Target, TrendingUp, Shield } from 'lucide-react'

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that understand customer intent and provide accurate responses.',
      benefits: ['Natural language processing', 'Intent recognition', 'Context awareness', 'Learning capabilities']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Provide support across all channels including chat, email, phone, and social media.',
      benefits: ['Live chat', 'Email support', 'Phone integration', 'Social media support']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless handoff between AI and human agents for complex issues.',
      benefits: ['Smart routing', 'Escalation management', 'Knowledge sharing', 'Quality assurance']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and continuous monitoring.',
      benefits: ['Always available', 'Instant responses', 'Proactive support', 'Global coverage']
    }
  ]

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response times by 80%',
    'Increase customer satisfaction by 40%',
    'Handle 10x more inquiries simultaneously',
    'Provide consistent quality support',
    'Scale support without hiring more staff'
  ]

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns with AI assistance.',
      icon: Target,
      metrics: ['50% faster resolution', '24/7 availability', 'Multilingual support']
    },
    {
      title: 'SaaS Support',
      description: 'Provide technical support and onboarding assistance for software users.',
      icon: Zap,
      metrics: ['80% self-service', 'Instant responses', 'Proactive assistance']
    },
    {
      title: 'Financial Services',
      description: 'Handle account inquiries, transaction support, and compliance questions.',
      icon: Shield,
      metrics: ['Secure handling', 'Compliance ready', 'Fraud detection']
    },
    {
      title: 'Healthcare Support',
      description: 'Provide patient support, appointment scheduling, and medical information.',
      icon: Users,
      metrics: ['HIPAA compliant', 'Medical accuracy', 'Emergency routing']
    }
  ]

  const supportStats = [
    { label: 'Response Time', value: '< 30s', icon: Clock },
    { label: 'Resolution Rate', value: '95%', icon: Target },
    { label: 'Customer Satisfaction', value: '98%', icon: Users },
    { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
  ]

  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group | Intelligent Support Solutions</title>
        <meta name="description" content="Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation. Transform your customer experience." />
        <meta name="keywords" content="AI customer support, chatbot, customer service automation, omnichannel support, intelligent support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation. Transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Support Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Customer Support?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Support Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Support Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Customer Support
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have revolutionized their customer support with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Your Support Transformation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiCustomerSupportPage