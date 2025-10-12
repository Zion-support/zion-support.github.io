'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Clock, Star, Target, TrendingUp, DollarSign, Database, Code, Eye, FileText, Camera, Settings, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services')

  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing and brand voice training',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection', 'Content scheduling'],
      icon: FileText,
      path: '/ai-content-generator',
      category: 'Content Creation',
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with multi-channel integration',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Live handoff', 'Analytics dashboard'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      category: 'Customer Service',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization', 'Automated alerts'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      category: 'Analytics',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for gaming, AR/VR, and marketing',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Rendering optimization', 'Asset library'],
      icon: Camera,
      path: '/ai-3d-generation',
      category: '3D & Graphics',
      rating: 4.7,
      reviews: 73
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and clinical trial optimization',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis', 'Toxicity prediction'],
      icon: Brain,
      path: '/ai-drug-discovery-pro',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 45
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Vulnerability scanning', 'Incident response'],
      icon: Shield,
      path: '/ai-cybersecurity-suite',
      category: 'Security',
      rating: 4.8,
      reviews: 112
    },
    {
      name: 'AI Voice Assistant',
      description: 'Custom voice assistants with natural language understanding and multi-platform deployment',
      price: '$399/month',
      features: ['Voice recognition', 'Natural language processing', 'Multi-platform support', 'Custom wake words', 'Integration APIs', 'Analytics tracking'],
      icon: Users,
      path: '/ai-voice-assistant',
      category: 'Voice Technology',
      rating: 4.6,
      reviews: 67
    },
    {
      name: 'AI Email Assistant',
      description: 'Intelligent email management with smart replies, scheduling, and priority classification',
      price: '$199/month',
      features: ['Smart replies', 'Email scheduling', 'Priority classification', 'Spam filtering', 'Template suggestions', 'Sentiment analysis'],
      icon: MessageSquare,
      path: '/ai-email-assistant',
      category: 'Productivity',
      rating: 4.7,
      reviews: 94
    },
    {
      name: 'AI Automation Suite',
      description: 'Comprehensive automation platform for business processes and workflow optimization',
      price: '$599/month',
      features: ['Workflow automation', 'Process optimization', 'Integration connectors', 'Custom triggers', 'Performance monitoring', 'Error handling'],
      icon: Zap,
      path: '/ai-automation',
      category: 'Automation',
      rating: 4.8,
      reviews: 134
    }
  ]

  const categories = [
    { name: 'All Services', count: aiServices.length, active: true },
    { name: 'Content Creation', count: aiServices.filter(s => s.category === 'Content Creation').length, active: false },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length, active: false },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: '3D & Graphics', count: aiServices.filter(s => s.category === '3D & Graphics').length, active: false },
    { name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length, active: false },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Voice Technology', count: aiServices.filter(s => s.category === 'Voice Technology').length, active: false },
    { name: 'Productivity', count: aiServices.filter(s => s.category === 'Productivity').length, active: false },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length, active: false }
  ]

  const benefits = [
    'Increase productivity by up to 80%',
    'Reduce operational costs by 60%',
    'Improve customer satisfaction',
    'Gain competitive advantage',
    'Scale without scaling staff',
    'Make data-driven decisions'
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'MedTech Innovations',
      content: 'The AI Drug Discovery Pro has accelerated our research by 300%. We discovered new compounds in weeks instead of months.',
      rating: 5,
      service: 'AI Drug Discovery Pro'
    },
    {
      name: 'James Rodriguez',
      company: 'TechCorp Solutions',
      content: 'Our AI Chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.',
      rating: 5,
      service: 'AI Chatbot Builder'
    },
    {
      name: 'Lisa Chen',
      company: 'DataFlow Analytics',
      content: 'The AI Analytics Dashboard provides insights we never knew existed. Our decision-making process is now data-driven.',
      rating: 5,
      service: 'AI Analytics Dashboard'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Custom Solution',
      description: 'We design and develop tailored AI solutions for your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration with your existing systems.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for maximum performance.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, 3D generation, drug discovery, cybersecurity, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, 3D generation, drug discovery, cybersecurity, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'services'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Our Services
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'benefits'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Why Choose Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <>
            {/* Category Filter */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        category.active
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {aiServices.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-white font-semibold">{service.rating}</span>
                          </div>
                          <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {service.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                      
                      <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    We combine cutting-edge AI technology with deep business expertise to deliver 
                    solutions that drive real results and competitive advantage.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      <p className="text-purple-300 text-sm">{testimonial.service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIServicesPage