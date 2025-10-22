'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, Bot, Cpu, Workflow } from 'lucide-react'
const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent responses and natural conversations.',
      benefits: ['Natural language processing', 'Context awareness', 'Learning capabilities', 'Smart responses']
    },
    {
      icon: Bot,
      title: 'Easy Builder',
      description: 'Drag-and-drop interface to create chatbots without coding knowledge.',
      benefits: ['Visual builder', 'Pre-built templates', 'Custom workflows', 'No coding required']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: ['Website integration', 'Social media', 'Mobile apps', 'API integration']
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Fully customizable chatbot behavior, appearance, and responses.',
      benefits: ['Custom branding', 'Response templates', 'Personality settings', 'Advanced configuration']
    }
  ]
  const benefits = [
    'Reduce customer support costs by up to 60%',
    'Provide 24/7 customer assistance',
    'Improve response time to under 1 second',
    'Handle multiple conversations simultaneously',
    'Gain valuable customer insights and analytics'
  ]
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'Customer Success Manager',
      content: 'The AI chatbot builder has transformed our customer support. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Easy to use and incredibly powerful. Our customers love the instant responses.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Marketing Director',
      content: 'Outstanding solution that has significantly improved our customer engagement.',
      rating: 5
    }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. Create, deploy, and manage conversational AI solutions for your business." />
        <meta name="keywords" content="AI chatbot builder, conversational AI, chatbot development, customer service automation, Zion Tech Group" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Chatbot
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Builder
              </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build intelligent chatbots with our AI-powered chatbot builder. Create, deploy, 
              and manage conversational AI solutions that engage your customers 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Building
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot builder offers everything you need to create intelligent conversational experiences
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}
                    ))}
                  </div>
              ))}
            </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI chatbots can transform your customer engagement
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">{benefit}
              ))}
            </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses that have transformed their customer service with our chatbot solutions
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}
              ))}
            </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Start creating intelligent conversational experiences for your customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Start Building Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Us
              </section>
      </div>
      <Footer />
    </React.Fragment>
  )
  }
export default AiChatbotBuilderPage
                                                                          </Footer>
                                                                        </button>
                                                                      </div>
                                                                    </p>
                                                                  </h4>
                                                                </div>
                                                              </Users>
                                                            </div>
                                                          </Star>
                                                        </div>
                                                      </div>
                                                    </p>
                                                  </div>
                                                </p>
                                              </CheckCircle>
                                            </div>
                                          </div>
                                        </p>
                                      </div>
                                    </span>
                                  </CheckCircle>
                                </li>
                              </ul>
                            </p>
                          </h3>
                        </div>
                      </p>
                    </div>
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Navigation>
  </meta>
</meta>