'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, CheckCircle, Star, Zap, Target, Users, TrendingUp, Shield, Globe, Database, Code } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale with our advanced AI writing tools',
      price: '$299/month',
      features: ['Blog Posts & Articles', 'Social Media Content', 'Product Descriptions', 'Email Campaigns', 'SEO-Optimized Content'],
      benefits: ['10x Faster Content Creation', 'Consistent Brand Voice', 'SEO Optimization', 'Multi-language Support'],
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      title: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI that understands context and provides human-like responses',
      price: '$199/month',
      features: ['24/7 Customer Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      benefits: ['Instant Response Time', 'Reduced Support Costs', 'Improved Customer Satisfaction', 'Scalable Solutions'],
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'AI Analytics & Insights',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform',
      price: '$399/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Trend Analysis'],
      benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Automated Reporting', 'Competitive Advantage'],
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation',
      price: '$249/month',
      features: ['Workflow Automation', 'Process Optimization', 'Task Scheduling', 'Error Detection', 'Performance Monitoring'],
      benefits: ['Increased Efficiency', 'Reduced Human Error', 'Cost Savings', 'Scalable Operations'],
      icon: <Zap className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Computer Vision AI',
      description: 'Advanced image and video analysis for object detection, recognition, and processing',
      price: '$499/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Quality Control', 'Facial Recognition'],
      benefits: ['Automated Visual Inspection', 'Enhanced Security', 'Quality Assurance', 'Real-time Processing'],
      icon: <Target className="w-8 h-8 text-red-400" />
    },
    {
      title: 'AI Voice Assistant',
      description: 'Natural language processing and voice recognition for hands-free operations',
      price: '$349/month',
      features: ['Voice Commands', 'Speech-to-Text', 'Text-to-Speech', 'Multi-language Support', 'Custom Wake Words'],
      benefits: ['Hands-free Operation', 'Accessibility', 'Improved Productivity', 'Natural Interaction'],
      icon: <Globe className="w-8 h-8 text-blue-400" />
    }
  ]

  const useCases = [
    {
      industry: 'E-commerce',
      title: 'Personalized Shopping Experience',
      description: 'AI-powered product recommendations and personalized shopping experiences that increase conversion rates by 35%',
      results: ['35% Increase in Conversions', '50% Higher Customer Engagement', '25% Boost in Average Order Value']
    },
    {
      industry: 'Healthcare',
      title: 'Medical Diagnosis Support',
      description: 'AI-assisted medical imaging analysis and diagnostic support for healthcare professionals',
      results: ['90% Accuracy in Diagnosis', '40% Faster Processing', 'Reduced Diagnostic Errors']
    },
    {
      industry: 'Finance',
      title: 'Fraud Detection & Prevention',
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms',
      results: ['99.9% Fraud Detection Rate', '60% Reduction in False Positives', 'Real-time Processing']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'AI-powered predictive maintenance to prevent equipment failures and optimize production',
      results: ['30% Reduction in Downtime', '20% Cost Savings', 'Improved Equipment Lifespan']
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      company: 'MedTech Solutions',
      role: 'Chief Medical Officer',
      content: 'The AI diagnostic support system has revolutionized our medical imaging analysis. We\'ve seen a 90% improvement in diagnostic accuracy.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      company: 'RetailMax',
      role: 'VP of Technology',
      content: 'Our AI-powered recommendation engine increased our sales by 35% in just 3 months. The ROI was immediate and substantial.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'FinanceFirst',
      role: 'Head of Security',
      content: 'The fraud detection AI has saved us millions in potential losses. The accuracy and speed are unmatched.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, content generation, analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced AI
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
              Transform your business with cutting-edge artificial intelligence. From content generation to predictive analytics, 
              we deliver AI solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are transforming businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can transform your business. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/it-services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View IT Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
