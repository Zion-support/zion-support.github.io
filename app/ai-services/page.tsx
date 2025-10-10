'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Users, 
  DollarSign, 
  Clock, 
  Phone, 
  Mail,
  BarChart,
  MessageCircle,
  Eye,
  Cpu,
  Shield,
  Target
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs and data',
      category: 'Machine Learning',
      icon: Brain,
      features: [
        'Predictive analytics',
        'Pattern recognition',
        'Automated decision making',
        'Real-time processing',
        'Model optimization',
        'Continuous learning'
      ],
      benefits: [
        'Increase accuracy by 85%',
        'Reduce processing time by 70%',
        'Improve decision speed by 60%'
      ],
      popular: true
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      category: 'NLP',
      icon: MessageCircle,
      features: [
        'Text analysis and sentiment',
        'Language translation',
        'Chatbot development',
        'Document processing',
        'Voice recognition',
        'Content generation'
      ],
      benefits: [
        'Process 10x more text data',
        'Improve customer satisfaction by 40%',
        'Reduce manual processing by 80%'
      ],
      popular: true
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for various business applications',
      category: 'Computer Vision',
      icon: Eye,
      features: [
        'Object detection and recognition',
        'Image classification',
        'Facial recognition',
        'Quality control automation',
        'Medical image analysis',
        'Real-time video processing'
      ],
      benefits: [
        'Automate visual inspections',
        'Improve accuracy by 95%',
        'Reduce human error by 90%'
      ],
      popular: false
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting for better business decisions',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Demand forecasting',
        'Risk assessment',
        'Customer behavior prediction',
        'Market trend analysis',
        'Anomaly detection',
        'Performance optimization'
      ],
      benefits: [
        'Improve forecasting accuracy by 75%',
        'Reduce risks by 60%',
        'Increase revenue by 25%'
      ],
      popular: true
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline business processes',
      category: 'Automation',
      icon: Cpu,
      features: [
        'Process automation',
        'Workflow optimization',
        'Intelligent routing',
        'Exception handling',
        'Performance monitoring',
        'Scalable deployment'
      ],
      benefits: [
        'Reduce operational costs by 50%',
        'Increase efficiency by 80%',
        'Eliminate manual errors by 95%'
      ],
      popular: false
    },
    {
      id: 'ai-security',
      title: 'AI Security Solutions',
      description: 'Advanced security solutions powered by artificial intelligence',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection',
        'Fraud prevention',
        'Behavioral analysis',
        'Risk assessment',
        'Incident response',
        'Compliance monitoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 70%',
        'Improve security posture by 85%'
      ],
      popular: false
    }
  ];

  const categories = ['all', 'Machine Learning', 'NLP', 'Computer Vision', 'Analytics', 'Automation', 'Security'];

  const filteredServices = aiServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const useCases = [
    {
      industry: 'Healthcare',
      solution: 'Medical Image Analysis',
      description: 'AI-powered analysis of medical images for faster and more accurate diagnoses',
      results: '40% faster diagnosis, 95% accuracy rate'
    },
    {
      industry: 'Finance',
      solution: 'Fraud Detection',
      description: 'Real-time fraud detection using machine learning algorithms',
      results: '90% fraud detection rate, 60% reduction in false positives'
    },
    {
      industry: 'Retail',
      solution: 'Customer Behavior Analysis',
      description: 'Predictive analytics to understand and anticipate customer needs',
      results: '35% increase in sales, 50% improvement in customer satisfaction'
    },
    {
      industry: 'Manufacturing',
      solution: 'Quality Control Automation',
      description: 'Computer vision for automated quality inspection and defect detection',
      results: '80% reduction in defects, 70% faster inspection process'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CTO, MedTech Solutions',
      service: 'Medical Image Analysis',
      quote: 'The AI-powered medical image analysis has revolutionized our diagnostic process. We can now detect conditions 40% faster with 95% accuracy.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Head of Risk Management, FinanceFlow',
      service: 'Fraud Detection',
      quote: 'Our fraud detection system has been a game-changer. We\'ve reduced false positives by 60% while catching 90% of actual fraud cases.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations, RetailMax',
      service: 'Customer Behavior Analysis',
      quote: 'The predictive analytics solution has helped us understand our customers better than ever. Sales are up 35% and customer satisfaction has improved significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and predictive analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that works.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expected Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Use Cases</h2>
            <p className="text-xl text-gray-300">See how AI is transforming different industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.industry}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{useCase.solution}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                <div className="text-sm text-green-400 font-medium">{useCase.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">See how our AI solutions are driving real business results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;