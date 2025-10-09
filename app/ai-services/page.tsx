'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Zap, Target, Shield, Users, Award, ArrowRight, Star, Clock, Globe, Database, Code, BarChart, Cpu, Eye, MessageSquare, Settings, Lock } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision-making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Development', 'Real-time Processing'],
      pricing: 'Starting at $2,500/month',
      popular: true
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automation, quality control, and visual intelligence.',
      features: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Quality Control'],
      pricing: 'Starting at $3,000/month',
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, chatbots, and language understanding solutions.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Chatbots', 'Language Translation'],
      pricing: 'Starting at $1,800/month',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to optimize business decisions and outcomes.',
      features: ['Business Forecasting', 'Risk Assessment', 'Trend Analysis', 'Performance Optimization'],
      pricing: 'Starting at $2,200/month',
      popular: true
    },
    {
      icon: Cpu,
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      features: ['Process Automation', 'Workflow Optimization', 'Exception Handling', 'Smart Routing'],
      pricing: 'Starting at $1,500/month',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Advanced threat detection, fraud prevention, and security intelligence using AI.',
      features: ['Threat Detection', 'Fraud Prevention', 'Security Monitoring', 'Risk Assessment'],
      pricing: 'Starting at $2,800/month',
      popular: false
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Medical imaging, drug discovery, patient care optimization',
      icon: '🏥',
      benefits: ['Improved Diagnosis', 'Faster Drug Discovery', 'Personalized Treatment']
    },
    {
      name: 'Finance',
      description: 'Fraud detection, algorithmic trading, risk management',
      icon: '💰',
      benefits: ['Fraud Prevention', 'Risk Mitigation', 'Automated Trading']
    },
    {
      name: 'Manufacturing',
      description: 'Quality control, predictive maintenance, supply chain optimization',
      icon: '🏭',
      benefits: ['Quality Assurance', 'Reduced Downtime', 'Cost Optimization']
    },
    {
      name: 'Retail',
      description: 'Customer insights, inventory management, personalized recommendations',
      icon: '🛒',
      benefits: ['Enhanced Customer Experience', 'Inventory Optimization', 'Sales Growth']
    },
    {
      name: 'Transportation',
      description: 'Route optimization, predictive maintenance, autonomous systems',
      icon: '🚛',
      benefits: ['Route Efficiency', 'Safety Improvements', 'Cost Reduction']
    },
    {
      name: 'Education',
      description: 'Personalized learning, student assessment, content optimization',
      icon: '🎓',
      benefits: ['Personalized Learning', 'Better Outcomes', 'Efficient Assessment']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data sources, and objectives to design the perfect AI solution.',
      icon: Target
    },
    {
      step: '02',
      title: 'Data Preparation',
      description: 'We clean, process, and prepare your data for optimal AI model performance.',
      icon: Database
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'Our experts develop and train custom AI models tailored to your specific requirements.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures your AI solution meets performance and accuracy standards.',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'Seamless integration with your existing systems and workflows.',
      icon: Settings
    },
    {
      step: '06',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance.',
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our AI solutions deliver measurable returns on investment within 6-12 months.'
    },
    {
      icon: Clock,
      title: '95% Process Automation',
      description: 'Automate repetitive tasks and focus on strategic initiatives.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI implementations.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated AI specialists provide ongoing support and optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.pricing}</div>
                  <button className="w-full cyber-button text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-cyan-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AI Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <step.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Zion Tech Group for their AI needs. 
            Let's discuss how we can help you achieve your goals with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;