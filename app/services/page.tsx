'use client';
import React from 'react';
import { Brain, Cloud, Code, BarChart, Users, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions that transform your business operations.',
      href: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation', 'Chatbots & Virtual Assistants'],
      pricing: 'Starting at $5,000/month',
      popular: true
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Complete IT infrastructure and cloud solutions to modernize your business operations.',
      href: '/it-services',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps & CI/CD', 'System Monitoring', 'Database Management', 'Network Solutions'],
      pricing: 'Starting at $3,000/month',
      popular: false
    },
    {
      icon: Code,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      features: ['Custom SaaS Development', 'API Integration', 'Scalable Solutions', 'Maintenance & Support', 'User Management', 'Analytics Dashboard'],
      pricing: 'Starting at $2,000/month',
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Predictive Modeling']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training & Support']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and goals to create a tailored solution strategy.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a comprehensive solution architecture that aligns with your requirements and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations, ensuring smooth deployment.'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support and optimization to ensure your solution continues to deliver maximum value.'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      author: "John Smith",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "Outstanding service and cutting-edge technology. They delivered our project ahead of schedule.",
      author: "Maria Johnson",
      role: "CTO, InnovateLabs",
      rating: 5
    },
    {
      quote: "The best IT partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched.",
      author: "David Wilson",
      role: "VP Engineering, DataFlow",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations, 
              drive growth, and give you a competitive edge in the digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses achieve digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`cyber-card p-8 group hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-cyan-400 font-semibold mb-6">{service.pricing}</div>
                <a
                  href={service.href}
                  className="w-full cyber-button text-center py-3 inline-flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions to complement your core technology needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;