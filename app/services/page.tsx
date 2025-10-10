'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-services');

  const services = {
    'ai-services': {
      title: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      benefits: [
        'Increased efficiency and productivity',
        'Better decision making with data insights',
        'Automated repetitive tasks',
        'Enhanced customer experience',
        'Cost reduction through automation',
        'Competitive advantage in the market'
      ]
    },
    'it-services': {
      title: 'IT Services',
      description: 'Comprehensive IT solutions to support your business infrastructure',
      icon: Cloud,
      features: [
        'Cloud Infrastructure',
        'Network Security',
        'Database Management',
        'System Integration',
        'IT Consulting',
        'Technical Support'
      ],
      benefits: [
        'Scalable and secure infrastructure',
        'Reduced IT costs and complexity',
        'Improved system reliability',
        'Enhanced data security',
        '24/7 technical support',
        'Future-proof technology solutions'
      ]
    },
    'micro-saas': {
      title: 'Micro SaaS Solutions',
      description: 'Custom software solutions designed for specific business needs',
      icon: Code,
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'User Interface Design',
        'Performance Optimization'
      ],
      benefits: [
        'Tailored to your specific requirements',
        'Faster time to market',
        'Lower development costs',
        'Easy maintenance and updates',
        'Scalable architecture',
        'Modern technology stack'
      ]
    }
  };

  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions revolutionized our business operations. We saw a 300% increase in efficiency within the first month.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "Their IT services are top-notch. Our systems have never been more secure and reliable. Highly recommended!",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
      rating: 5
    },
    {
      quote: "The custom SaaS solution they built for us exceeded all expectations. It's exactly what we needed to scale our business.",
      author: "Emily Rodriguez",
      role: "VP Operations, DataFlow",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive AI and IT services. From artificial intelligence solutions to cloud infrastructure, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud solutions, artificial intelligence, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation across all industries.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(services[activeTab as keyof typeof services].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {services[activeTab as keyof typeof services].title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {services[activeTab as keyof typeof services].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {services[activeTab as keyof typeof services].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {services[activeTab as keyof typeof services].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and explore how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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

export default ServicesPage;