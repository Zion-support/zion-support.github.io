'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Shield, BarChart, Users, Globe, Smartphone, Lock, TrendingUp, Code, Target, Cpu, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated follow-up sequences',
        'Predictive customer behavior analysis',
        'Real-time sentiment analysis',
        'Custom AI chatbots integration',
        'Advanced reporting and analytics'
      ],
      pricing: '$149/month',
      icon: Users,
      color: 'orange'
    },
    {
      name: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      features: [
        'AI-generated marketing content',
        'Automated ad campaign optimization',
        'Customer segmentation with AI',
        'Email marketing automation',
        'Social media management',
        'ROI tracking and analytics'
      ],
      pricing: '$199/month',
      icon: Target,
      color: 'pink'
    },
    {
      name: 'AI Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: [
        'Workflow automation with AI decision making',
        'Document processing and extraction',
        'Exception handling and escalation',
        'Integration with 500+ applications',
        'Custom automation rules',
        'Performance monitoring and optimization'
      ],
      pricing: '$399/month',
      icon: Zap,
      color: 'blue'
    },
    {
      name: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      features: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Personalized treatment recommendations',
        'Electronic health record analysis',
        'Clinical trial optimization',
        'HIPAA compliant security'
      ],
      pricing: '$1,999/month',
      icon: Shield,
      color: 'green'
    },
    {
      name: 'AI Fintech Solutions',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      features: [
        'Algorithmic trading strategies',
        'Real-time fraud detection',
        'Credit risk assessment',
        'Regulatory compliance monitoring',
        'Portfolio optimization',
        'Financial forecasting'
      ],
      pricing: '$1,499/month',
      icon: TrendingUp,
      color: 'indigo'
    },
    {
      name: 'AI Content Generation',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: [
        'AI-powered content writing',
        'Image and video generation',
        'Multi-language content creation',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar management'
      ],
      pricing: '$299/month',
      icon: Code,
      color: 'purple'
    }
  ];

  const benefits = [
    {
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock expert assistance',
      icon: Clock,
      color: 'text-cyan-400'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      title: 'Scalable Solutions',
      description: 'Grows with your business needs',
      icon: Globe,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced particle-system-enhanced quantum-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch-enhanced" data-text="AI Services">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-text-enhanced">
            Transform Your Business with Advanced AI Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leverage the power of artificial intelligence to automate processes, gain insights, and drive growth. 
            Our comprehensive AI services are designed to solve real business challenges and deliver measurable results.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card p-6 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text-enhanced">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-${service.color}-500/20 rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text-enhanced">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-4 neon-text-enhanced">{service.pricing}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href="/contact"
                    className="cyber-button-enhanced flex-1 text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={`/ai-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card-enhanced holographic-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a free consultation and discover how our AI solutions can drive growth and efficiency in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button-enhanced"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 text-lg">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;