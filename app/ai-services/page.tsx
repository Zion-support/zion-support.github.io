'use client';
import React from 'react';
import { Brain, ArrowRight, CheckCircle, Star, Zap, BarChart, MessageCircle, Shield, Database, Heart, DollarSign } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      pricing: 'Starting at $5,000/month',
      href: '/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      pricing: 'Starting at $3,000/month',
      href: '/ai-automation'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Deploy intelligent chatbots for customer service and support',
      features: ['Natural Language Processing', '24/7 Support', 'Multi-language Support', 'Integration APIs'],
      pricing: 'Starting at $2,000/month',
      href: '/ai-chatbot-builder'
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with AI-driven analytics and insights',
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Custom Reports'],
      pricing: 'Starting at $4,000/month',
      href: '/ai-data-analytics'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions',
      features: ['Threat Detection', 'Anomaly Detection', 'Risk Assessment', 'Incident Response'],
      pricing: 'Starting at $6,000/month',
      href: '/ai-cybersecurity'
    },
    {
      icon: Heart,
      title: 'AI Healthcare',
      description: 'Revolutionize healthcare with AI-powered medical solutions',
      features: ['Medical Imaging', 'Diagnostic Support', 'Patient Monitoring', 'Drug Discovery'],
      pricing: 'Starting at $8,000/month',
      href: '/ai-healthcare'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 300%'
    },
    {
      icon: BarChart,
      title: 'Better Decision Making',
      description: 'Get data-driven insights to make informed business decisions faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% through intelligent automation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered threat detection and prevention'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs and current systems to identify AI opportunities'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design custom AI solutions tailored to your specific requirements'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement and integrate AI solutions with minimal disruption to your operations'
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'We provide comprehensive training and ongoing support to ensure success'
    }
  ];

  const testimonials = [
    {
      quote: "The AI analytics solution transformed how we understand our data. We've seen a 250% improvement in decision-making speed.",
      author: "Sarah Johnson",
      role: "CTO, DataFlow Inc.",
      rating: 5
    },
    {
      quote: "Their AI automation saved us 40 hours per week and reduced errors by 95%. Incredible results!",
      author: "Michael Chen",
      role: "Operations Manager, TechCorp",
      rating: 5
    },
    {
      quote: "The AI chatbot handles 80% of our customer inquiries automatically. Customer satisfaction increased by 60%.",
      author: "Lisa Rodriguez",
      role: "Customer Success Director, RetailPlus",
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
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that works.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve real business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and expertise that delivers measurable business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI adoption
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
              Real results from real businesses using our AI solutions
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Free AI Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;